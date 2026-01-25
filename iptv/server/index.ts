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

        // Send email via EmailJS
        const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID_CONTACT;
        const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
        const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !PRIVATE_KEY) {
            throw new Error('EmailJS configuration missing');
        }

        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                from_name: `${validatedData.firstName} ${validatedData.lastName}`,
                from_email: validatedData.email,
                subject: validatedData.subject,
                message: validatedData.message,
                to_name: 'Admin'
            },
            {
                publicKey: PUBLIC_KEY,
                privateKey: PRIVATE_KEY,
            }
        );

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

        // Send email via EmailJS
        const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID_CHECKOUT;
        const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
        const PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY || !PRIVATE_KEY) {
            throw new Error('EmailJS configuration missing');
        }

        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                to_name: 'Admin',
                from_name: `${validatedData.firstName} ${validatedData.lastName}`,
                from_email: validatedData.email,
                whatsapp_number: validatedData.whatsapp || 'Not provided',
                plan_name: validatedData.planName,
                plan_price: validatedData.planPrice,
                plan_period: validatedData.planPeriod,
                payment_method: validatedData.paymentMethod,
                order_date: new Date().toLocaleString()
            },
            {
                publicKey: PUBLIC_KEY,
                privateKey: PRIVATE_KEY,
            }
        );

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
