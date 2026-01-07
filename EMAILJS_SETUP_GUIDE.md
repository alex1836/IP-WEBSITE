# EmailJS Setup Guide for IPTV Website

## What is EmailJS?
EmailJS allows you to send emails directly from your website without a backend server. **YES, it works on both phone and laptop!** You just need an internet connection.

## Step-by-Step Setup

### 1. Create a Free Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (it's FREE)
3. Use your email to create an account

### 2. Add Email Service
1. After logging in, go to **Email Services** in the left menu
2. Click **Add New Service**
3. Choose your email provider (Gmail is easiest):
   - Select "Gmail"
   - Click "Connect Account"
   - Log in with your Gmail
   - Allow EmailJS to send emails
4. **Copy the Service ID** (looks like: `service_abc123`)

### 3. Create Email Template
1. Go to **Email Templates** in the left menu
2. Click **Create New Template**
3. Set up the template for **Contact Form**:
   - **Template Name**: Contact Form
   - **Subject**: New Contact Message from {{from_name}}
   - **Content**:
     ```
     You received a new message from your IPTV website:
     
     Name: {{from_name}}
     Email: {{from_email}}
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```
4. Click **Save**
5. **Copy the Template ID** (looks like: `template_xyz789`)

6. Create another template for **Checkout Orders**:
   - Click **Create New Template** again
   - **Template Name**: Order Notification
   - **Subject**: New Order: {{plan_name}} - {{from_name}}
   - **Content**:
     ```
     NEW ORDER RECEIVED!
     
     Customer Details:
     - Name: {{from_name}}
     - Email: {{from_email}}
     - WhatsApp: {{whatsapp_number}}
     
     Order Details:
     - Plan: {{plan_name}}
     - Price: ${{plan_price}}
     - Period: {{plan_period}}
     - Payment Method: {{payment_method}}
     - Order Date: {{order_date}}
     
     Please send the IPTV credentials to the customer's email.
     ```
7. Click **Save**
8. **Copy this Template ID too**

### 4. Get Your Public Key
1. Go to **Account** → **General** in the left menu
2. Find **Public Key** section
3. **Copy the Public Key** (looks like: `user_AbCdEfGhIjKlMnOp`)

### 5. Update Your Code

#### For Contact Page:
Open `src/pages/ContactPage.tsx` and replace lines 21-23:

```typescript
const SERVICE_ID = 'service_abc123';      // Your Service ID from step 2
const TEMPLATE_ID = 'template_xyz789';    // Your Contact Template ID from step 3
const PUBLIC_KEY = 'user_AbCdEfGhIjKlMnOp'; // Your Public Key from step 4
```

#### For Checkout Page:
Open `src/pages/CheckoutPage.tsx` and replace lines 31-33:

```typescript
const SERVICE_ID = 'service_abc123';      // Same Service ID
const TEMPLATE_ID = 'template_order123';  // Your Order Template ID from step 3
const PUBLIC_KEY = 'user_AbCdEfGhIjKlMnOp'; // Same Public Key
```

### 6. Test It!
1. Go to your website: http://localhost:5173
2. Try the Contact form
3. Try selecting a plan and filling the checkout form
4. Check your email inbox - you should receive the emails!

## Important Notes

✅ **Works on Phone**: Yes! EmailJS works on any device with internet
✅ **Works on Laptop**: Yes! 
✅ **Free Plan**: 200 emails per month (perfect for starting)
✅ **No Credit Card**: Required for free plan

## Troubleshooting

**Problem**: Emails not arriving
- Check spam folder
- Verify all 3 IDs are correct in the code
- Make sure you're connected to internet
- Check EmailJS dashboard for error logs

**Problem**: "Failed to send" error
- Double-check Service ID, Template ID, and Public Key
- Make sure template variable names match ({{from_name}}, etc.)

## Email Template Variables

### Contact Form Variables:
- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email
- `{{subject}}` - Selected subject
- `{{message}}` - Customer's message
- `{{to_name}}` - Your name (Admin)

### Checkout Form Variables:
- `{{from_name}}` - Customer's full name
- `{{from_email}}` - Customer's email
- `{{whatsapp_number}}` - Customer's WhatsApp
- `{{plan_name}}` - Selected plan (e.g., "12 Months")
- `{{plan_price}}` - Plan price
- `{{plan_period}}` - Plan period (e.g., "/year")
- `{{payment_method}}` - Selected payment method (PAYPAL, CARD, or CRYPTO)
- `{{order_date}}` - When order was placed
- `{{to_name}}` - Your name (Admin)

## Need Help?
If you have issues, check:
1. EmailJS Dashboard → Logs (shows all sent emails)
2. Browser Console (F12) for error messages
3. Make sure dev server is running: `npm run dev`
