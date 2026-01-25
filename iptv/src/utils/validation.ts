import { z } from 'zod';

/**
 * Security-focused validation schemas using Zod
 * Prevents XSS, injection attacks, and validates input formats
 */

// Contact Form Validation Schema
export const contactFormSchema = z.object({
    firstName: z
        .string()
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be less than 50 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes')
        .transform(val => val.trim()),

    lastName: z
        .string()
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must be less than 50 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes')
        .transform(val => val.trim()),

    email: z
        .string()
        .email('Please enter a valid email address')
        .max(100, 'Email must be less than 100 characters')
        .toLowerCase()
        .transform(val => val.trim()),

    subject: z
        .string()
        .min(1, 'Please select a subject')
        .max(100, 'Subject must be less than 100 characters'),

    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message must be less than 1000 characters')
        .transform(val => val.trim())
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Checkout Form Validation Schema
export const checkoutFormSchema = z.object({
    firstName: z
        .string()
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be less than 50 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'First name can only contain letters, spaces, hyphens, and apostrophes')
        .transform(val => val.trim()),

    lastName: z
        .string()
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must be less than 50 characters')
        .regex(/^[a-zA-Z\s'-]+$/, 'Last name can only contain letters, spaces, hyphens, and apostrophes')
        .transform(val => val.trim()),

    email: z
        .string()
        .email('Please enter a valid email address')
        .max(100, 'Email must be less than 100 characters')
        .toLowerCase()
        .transform(val => val.trim()),

    whatsapp: z
        .string()
        .regex(/^[\d\s+()-]*$/, 'WhatsApp number can only contain numbers, spaces, +, -, (, )')
        .max(20, 'WhatsApp number must be less than 20 characters')
        .optional()
        .or(z.literal(''))
        .transform(val => val?.trim() || '')
});

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

/**
 * Sanitize HTML to prevent XSS attacks
 * Removes potentially dangerous characters and tags
 */
export function sanitizeInput(input: string): string {
    return input
        .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers like onclick=
        .trim();
}

/**
 * Validate and sanitize form data
 * Returns validated data or throws validation errors
 */
export function validateContactForm(data: unknown) {
    return contactFormSchema.parse(data);
}

export function validateCheckoutForm(data: unknown) {
    return checkoutFormSchema.parse(data);
}
