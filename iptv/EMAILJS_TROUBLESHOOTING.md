# EmailJS Troubleshooting Guide

## Common Errors and Solutions

### Error: "The public key is invalid"
**Solution:**
1. Go to EmailJS Dashboard → Account → General
2. Copy your **Public Key** (it should look like: `abc123XYZ`)
3. Replace it in both files:
   - `src/pages/CheckoutPage.tsx` (line 36)
   - `src/pages/ContactPage.tsx` (line 24)

### Error: "Template ID is invalid" or "Template not found"
**Solution:**
1. Go to EmailJS Dashboard → Email Templates
2. Click on your template
3. Copy the **Template ID** from the top
4. Make sure you have TWO templates:
   - One for Contact Form (template_4rmwze6)
   - One for Checkout Orders (template_c2tq4ns)
5. Replace the IDs in the correct files

### Error: "Service ID is invalid"
**Solution:**
1. Go to EmailJS Dashboard → Email Services
2. Click on your service
3. Copy the **Service ID**
4. Replace it in both files (should be: service_g8nqide)

### Error: "Template params are invalid"
**Solution:** Your template variables don't match. Check your EmailJS template:

#### For CHECKOUT template (template_c2tq4ns):
Your template MUST include these variables:
```
{{to_name}}
{{from_name}}
{{from_email}}
{{whatsapp_number}}
{{plan_name}}
{{plan_price}}
{{plan_period}}
{{payment_method}}
{{order_date}}
```

Example template content:
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

#### For CONTACT template (template_4rmwze6):
Your template MUST include these variables:
```
{{to_name}}
{{from_name}}
{{from_email}}
{{subject}}
{{message}}
```

Example template content:
```
You received a new message from your IPTV website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

## How to Test:

### Step 1: Test Contact Form
1. Go to http://localhost:5173/contact
2. Fill out the form
3. Click "Send Message"
4. Look at the error message - it will now tell you EXACTLY what's wrong

### Step 2: Test Checkout Form
1. Go to http://localhost:5173/packages
2. Click "Choose Plan" on any plan
3. Fill out the form
4. Select a payment method
5. Click "Complete Purchase"
6. Look at the error message - it will now tell you EXACTLY what's wrong

## Checklist:

- [ ] Service ID is correct: `service_g8nqide`
- [ ] Contact Template ID is correct: `template_4rmwze6`
- [ ] Checkout Template ID is correct: `template_c2tq4ns`
- [ ] Public Key is correct: `5jt4ss4iP86wegTkN`
- [ ] Contact template has all required variables (9 variables)
- [ ] Checkout template has all required variables (9 variables)
- [ ] Email service is connected to your Gmail
- [ ] You're connected to the internet

## Still Not Working?

1. **Check EmailJS Dashboard Logs:**
   - Go to EmailJS Dashboard
   - Click on "Logs" in the left menu
   - See if any emails were attempted
   - Check the error messages there

2. **Check Browser Console:**
   - Press F12 in your browser
   - Go to "Console" tab
   - Try submitting the form
   - Look for red error messages
   - Send me a screenshot of the error

3. **Verify Template Variables:**
   - Go to your EmailJS template
   - Click "Test it"
   - Fill in sample data
   - If it fails, your template has wrong variables

## Quick Fix:

If nothing works, try this:
1. Delete both templates in EmailJS
2. Create them again from scratch
3. Copy the template content EXACTLY as shown above
4. Get the new Template IDs
5. Update the code with new IDs

---

**The error message will now show you EXACTLY what's wrong!** Try submitting the form again and tell me what error you see.
