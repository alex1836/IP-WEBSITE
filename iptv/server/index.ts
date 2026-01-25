import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import emailjs from '@emailjs/nodejs';
import { z } from 'zod';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security Middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://www.google.com", "https://www.gstatic.com"],
            frameSrc: ["https://www.google.com"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://api.emailjs.com"]
        }
    },
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }
}));

// CORS Configuration
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Body Parser
app.use(express.json({ limit: '10kb' })); // Limit payload size

// Rate Limiting
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

const formLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 3, // Limit each IP to 3 form submissions per minute
    message: 'Too many form submissions, please try again in a minute.',
    standardHeaders: true,
    legacyHeaders: false,
});

app.use('/api/', apiLimiter);

// Validation Schemas
const contactSchema = z.object({
    firstName: z.string().min(2).max(50).regex(/^[a-zA-Z\s'-]+$/),
    lastName: z.string().min(2).max(50).regex(/^[a-zA-Z\s'-]+$/),
    email: z.string().email().max(100),
    subject: z.string().min(1).max(100),
    message: z.string().min(10).max(1000),
    recaptchaToken: z.string().optional()
});

const checkoutSchema = z.object({
    firstName: z.string().min(2).max(50).regex(/^[a-zA-Z\s'-]+$/),
    lastName: z.string().min(2).max(50).regex(/^[a-zA-Z\s'-]+$/),
    email: z.string().email().max(100),
    whatsapp: z.string().regex(/^[\d\s+()-]*$/).max(20).optional(),
    planName: z.string(),
    planPrice: z.string(),
    planPeriod: z.string(),
    paymentMethod: z.enum(['PAYPAL', 'CARD', 'CRYPTO']),
    recaptchaToken: z.string().optional()
});

// Verify reCAPTCHA token
async function verifyRecaptcha(token: string): Promise<boolean> {
    if (!process.env.RECAPTCHA_SECRET_KEY) {
        console.warn('reCAPTCHA secret key not configured');
        return true; // Skip verification if not configured
    }

    try {
        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
        });

        const data = await response.json();
        return data.success && data.score >= 0.5; // Score threshold
    } catch (error) {
        console.error('reCAPTCHA verification failed:', error);
        return false;
    }
}


// Send Telegram Notification
async function sendTelegramNotification(data: any): Promise<void> {
    // Use environment variables or fallback to hardcoded values (from frontend)
    const token = process.env.TELEGRAM_BOT_TOKEN || '8506356791:AAGpd6AjISuiBNozm0dqlw8i6aj_zS07hk0';
    const chatId = process.env.TELEGRAM_CHAT_ID || '7216494259';

    if (!token || !chatId) {
        console.warn('Telegram configuration missing');
        return;
    }

    const message = `
<b>🚀 New Order Placed!</b>
━━━━━━━━━━━━━━━━━━
<b>👤 Customer:</b> ${data.firstName} ${data.lastName}
<b>📧 Email:</b> ${data.email}
<b>📱 WhatsApp:</b> ${data.whatsapp || 'Not provided'}
<b>📦 Plan:</b> ${data.planName} (${data.planPeriod})
<b>💰 Price:</b> ${data.planPrice}
<b>💳 Method:</b> ${data.paymentMethod}
<b>📅 Date:</b> ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━
    `.trim();

    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (!response.ok) {
            throw new Error(`Telegram API error: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Failed to send Telegram notification:', error);
        // Don't throw, so we can still send email
    }
}


async function sendContactNotification(data: any): Promise<void> {
    const token = process.env.TELEGRAM_BOT_TOKEN || '8506356791:AAGpd6AjISuiBNozm0dqlw8i6aj_zS07hk0';
    const chatId = process.env.TELEGRAM_CHAT_ID || '7216494259';

    if (!token || !chatId) return;

    const message = `
<b>📩 New Contact Message</b>
━━━━━━━━━━━━━━━━━━
<b>👤 Name:</b> ${data.firstName} ${data.lastName}
<b>📧 Email:</b> ${data.email}
<b>📝 Subject:</b> ${data.subject}
<b>💬 Message:</b>
${data.message}
<b>📅 Date:</b> ${new Date().toLocaleString()}
━━━━━━━━━━━━━━━━━━
    `.trim();

    try {
        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
    } catch (error) {
        console.error('Failed to send Telegram contact notification:', error);
    }
}

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Contact Form Endpoint
app.post('/api/contact', formLimiter, async (req: Request, res: Response) => {
    try {
        // Validate input
        const validatedData = contactSchema.parse(req.body);

        // Verify reCAPTCHA
        if (validatedData.recaptchaToken) {
            const isHuman = await verifyRecaptcha(validatedData.recaptchaToken);
            if (!isHuman) {
                return res.status(400).json({ error: 'reCAPTCHA verification failed' });
            }
        }

        // Send Telegram Notification
        await sendContactNotification(validatedData);

        // Note: EmailJS is handled on the frontend to avoid Private Key requirements on backend

        res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: 'Validation failed', details: error.issues });
        }
        console.error('Contact form error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Checkout Form Endpoint
app.post('/api/checkout', formLimiter, async (req: Request, res: Response) => {
    try {
        // Validate input
        const validatedData = checkoutSchema.parse(req.body);

        // Verify reCAPTCHA
        if (validatedData.recaptchaToken) {
            const isHuman = await verifyRecaptcha(validatedData.recaptchaToken);
            if (!isHuman) {
                return res.status(400).json({ error: 'reCAPTCHA verification failed' });
            }
        }

        // Send Telegram Notification
        await sendTelegramNotification(validatedData);

        // Note: EmailJS is handled on the frontend to avoid Private Key requirements on backend


        res.json({ success: true, message: 'Order placed successfully' });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: 'Validation failed', details: error.issues });
        }
        console.error('Checkout error:', error);
        res.status(500).json({ error: 'Failed to place order' });
    }
});

// 404 Handler
app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Not found' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🔒 Secure API Server running on port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🛡️  Security features enabled: Helmet, CORS, Rate Limiting`);
});

export default app;
