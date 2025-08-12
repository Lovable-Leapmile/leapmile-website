# Email Service Setup Guide

This guide explains how to configure reliable email delivery for the contact forms on your website.

## Current Issue

The original QikPod API endpoint (`https://newproduction.qikpod.com:8985/notifications/email/send/`) is not working properly, causing emails to not be received at `support@leapmile.com`.

## Solution Overview

We've implemented a multi-service email system that tries multiple email services in order of priority. This ensures reliable email delivery even if one service fails.

## Email Services Available

### 1. QikPod API (Currently Enabled - Priority 1)
- **Status**: Enabled but not working
- **Action**: Check with your QikPod team to fix the API endpoint
- **Configuration**: Update the API URL and authentication token if needed

### 2. Formspree (Recommended - Priority 2)
- **Cost**: Free tier available (100 submissions/month)
- **Setup**: 
  1. Go to [formspree.io](https://formspree.io)
  2. Create a free account
  3. Create a new form
  4. Copy your form ID
  5. Update the configuration in `src/lib/emailService.ts`

```typescript
// In src/lib/emailService.ts, update the Formspree service:
{
  name: 'Formspree',
  enabled: true, // Change to true
  priority: 2,
  send: async (data: EmailData): Promise<boolean> => {
    try {
      // Replace 'YOUR_FORM_ID' with your actual form ID
      const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
        // ... rest of the code
      });
    }
  }
}
```

### 3. EmailJS (Alternative - Priority 3)
- **Cost**: Free tier available (200 emails/month)
- **Setup**:
  1. Go to [emailjs.com](https://emailjs.com)
  2. Create a free account
  3. Set up an email service (Gmail, Outlook, etc.)
  4. Create an email template
  5. Update the configuration with your credentials

```typescript
// In src/lib/emailService.ts, update the EmailJS service:
{
  name: 'EmailJS',
  enabled: true, // Change to true
  priority: 3,
  send: async (data: EmailData): Promise<boolean> => {
    // Replace these with your actual EmailJS credentials
    const result = await emailjs.send(
      'YOUR_SERVICE_ID',     // Your EmailJS service ID
      'YOUR_TEMPLATE_ID',    // Your EmailJS template ID
      { /* template parameters */ },
      'YOUR_USER_ID'         // Your EmailJS user ID
    );
  }
}
```

### 4. Custom Backend API (Priority 4)
- **Setup**: Create your own backend API endpoint
- **Configuration**: Update the endpoint URL in the service configuration

### 5. Netlify Forms (If using Netlify - Priority 5)
- **Setup**: Automatically available if deployed on Netlify
- **Configuration**: Update your form HTML to use Netlify's form handling

## Quick Setup Instructions

### Option 1: Formspree (Recommended for immediate fix)

1. **Sign up for Formspree**:
   - Go to [formspree.io](https://formspree.io)
   - Create a free account
   - Create a new form

2. **Update the configuration**:
   ```typescript
   // In src/lib/emailService.ts
   {
     name: 'Formspree',
     enabled: true, // Change this to true
     priority: 2,
     send: async (data: EmailData): Promise<boolean> => {
       // Replace 'YOUR_FORM_ID' with your actual form ID
       const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
         // ... rest of the code
       });
     }
   }
   ```

3. **Test the form**:
   - Fill out the contact form
   - Submit it
   - Check your email for the submission

### Option 2: Fix the QikPod API

1. **Contact your QikPod team** to:
   - Verify the API endpoint is working
   - Check if the authentication token is valid
   - Ensure the service is running and accessible

2. **Update the configuration** if needed:
   ```typescript
   // In src/lib/emailService.ts, update the QikPod API service:
   {
     name: 'QikPod API',
     enabled: true,
     priority: 1,
     send: async (data: EmailData): Promise<boolean> => {
       // Update the API URL if it has changed
       const response = await fetch(`NEW_API_URL`, {
         // Update headers and authentication if needed
       });
     }
   }
   ```

## Testing Your Setup

1. **Enable the service** you want to use by setting `enabled: true`
2. **Fill out the contact form** on your website
3. **Submit the form** and check the browser console for logs
4. **Verify email delivery** by checking your inbox
5. **Check the service status** using the browser console:
   ```javascript
   // In browser console
   import { getEmailServiceStatus } from './src/lib/emailService';
   console.log(getEmailServiceStatus());
   ```

## Monitoring and Debugging

### Console Logs
The system logs all email attempts to the browser console:
- `Trying [Service Name]...` - Shows which service is being attempted
- `[Service Name]: Email sent successfully` - Success message
- `[Service Name] Error: [details]` - Error details

### Error Handling
- If all services fail, users see a helpful error message
- The system automatically tries the next service if one fails
- Detailed error information is logged for debugging

## Production Considerations

1. **Rate Limiting**: Be aware of free tier limits for services like Formspree
2. **Spam Protection**: Consider adding CAPTCHA or other anti-spam measures
3. **Email Templates**: Customize the email format for your brand
4. **Backup Service**: Always have at least one backup email service enabled

## Support

If you continue to have issues:
1. Check the browser console for error messages
2. Verify your email service configuration
3. Test with a simple email service like Formspree first
4. Contact your development team for assistance

## File Locations

- **Email Service Configuration**: `src/lib/emailService.ts`
- **QikPod Contact Form**: `src/components/QikpodContactSection.tsx`
- **Main Contact Form**: `src/components/ContactSection.tsx`
- **This Guide**: `EMAIL_SETUP.md`
