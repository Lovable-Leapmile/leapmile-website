// Email Service Configuration
// This file provides multiple email service options for reliable contact form delivery

export interface EmailData {
  to: string;
  from: string;
  subject: string;
  html: string;
  text: string;
}

export interface EmailServiceConfig {
  name: string;
  enabled: boolean;
  priority: number;
  send: (data: EmailData) => Promise<boolean>;
}

// Configuration for different email services
export const emailServices: EmailServiceConfig[] = [
  // Service 1: QikPod API (Original)
  {
    name: 'QikPod API',
    enabled: true,
    priority: 1,
    send: async (data: EmailData): Promise<boolean> => {
      try {
        const params = new URLSearchParams({
          msg_type: 'regular',
          email_to_address: data.to,
          email_from_address: data.from,
          email_subject: data.subject,
          email_message: data.text
        });
        
        const response = await fetch(`https://newproduction.qikpod.com:8985/notifications/email/send/?${params}`, {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE4NjQzNzUxODN9.3nKvoS0uuSwwZXPnv0-MyXKucUnpMBlCJuI97FR84z4'
          }
        });
        
        if (response.ok) {
          console.log('QikPod API: Email sent successfully');
          return true;
        } else {
          const errorText = await response.text();
          console.error('QikPod API Error:', response.status, errorText);
          return false;
        }
      } catch (error) {
        console.error('QikPod API Exception:', error);
        return false;
      }
    }
  },

  // Service 2: Formspree (Free tier available)
  {
    name: 'Formspree',
    enabled: false, // Enable this and configure your form ID
    priority: 2,
    send: async (data: EmailData): Promise<boolean> => {
      try {
        // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.from.split('@')[0], // Extract name from email
            email: data.from,
            subject: data.subject,
            message: data.text,
            _replyto: data.from
          })
        });
        
        if (response.ok) {
          console.log('Formspree: Email sent successfully');
          return true;
        } else {
          console.error('Formspree Error:', response.status);
          return false;
        }
      } catch (error) {
        console.error('Formspree Exception:', error);
        return false;
      }
    }
  },

  // Service 3: EmailJS (Free tier available)
  {
    name: 'EmailJS',
    enabled: false, // Enable this and configure your EmailJS credentials
    priority: 3,
    send: async (data: EmailData): Promise<boolean> => {
      try {
        // This requires EmailJS to be loaded and configured
        // You'll need to add EmailJS script to your HTML and configure it
        if (typeof window !== 'undefined' && (window as any).emailjs) {
          const emailjs = (window as any).emailjs;
          
          // Replace these with your actual EmailJS credentials
          const result = await emailjs.send(
            'YOUR_SERVICE_ID', // EmailJS service ID
            'YOUR_TEMPLATE_ID', // EmailJS template ID
            {
              to_email: data.to,
              from_name: data.from.split('@')[0],
              from_email: data.from,
              subject: data.subject,
              message: data.text
            },
            'YOUR_USER_ID' // EmailJS user ID
          );
          
          if (result.status === 200) {
            console.log('EmailJS: Email sent successfully');
            return true;
          }
        }
        return false;
      } catch (error) {
        console.error('EmailJS Exception:', error);
        return false;
      }
    }
  },

  // Service 4: Custom Backend API
  {
    name: 'Custom Backend',
    enabled: false, // Enable this and configure your backend endpoint
    priority: 4,
    send: async (data: EmailData): Promise<boolean> => {
      try {
        // Replace with your actual backend API endpoint
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          console.log('Custom Backend: Email sent successfully');
          return true;
        } else {
          console.error('Custom Backend Error:', response.status);
          return false;
        }
      } catch (error) {
        console.error('Custom Backend Exception:', error);
        return false;
      }
    }
  },

  // Service 5: Netlify Forms (if deployed on Netlify)
  {
    name: 'Netlify Forms',
    enabled: false, // Enable this if using Netlify
    priority: 5,
    send: async (data: EmailData): Promise<boolean> => {
      try {
        // This requires the form to be submitted to a Netlify form endpoint
        // The form action should be set to your Netlify form URL
        console.log('Netlify Forms: Form submission handled by Netlify');
        return true; // Netlify handles the email sending
      } catch (error) {
        console.error('Netlify Forms Exception:', error);
        return false;
      }
    }
  }
];

// Main email sending function that tries multiple services
export const sendEmail = async (data: EmailData): Promise<{ success: boolean; service: string; error?: string }> => {
  // Sort services by priority
  const enabledServices = emailServices
    .filter(service => service.enabled)
    .sort((a, b) => a.priority - b.priority);

  if (enabledServices.length === 0) {
    return {
      success: false,
      service: 'None',
      error: 'No email services are enabled'
    };
  }

  // Try each service in order of priority
  for (const service of enabledServices) {
    try {
      console.log(`Trying ${service.name}...`);
      const success = await service.send(data);
      
      if (success) {
        return {
          success: true,
          service: service.name
        };
      }
    } catch (error) {
      console.error(`${service.name} failed:`, error);
      continue;
    }
  }

  // All services failed
  return {
    success: false,
    service: 'All',
    error: 'All enabled email services failed'
  };
};

// Helper function to validate email data
export const validateEmailData = (data: EmailData): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!data.to || !data.to.includes('@')) {
    errors.push('Invalid recipient email');
  }
  
  if (!data.from || !data.from.includes('@')) {
    errors.push('Invalid sender email');
  }
  
  if (!data.subject || data.subject.trim().length === 0) {
    errors.push('Subject is required');
  }
  
  if (!data.text || data.text.trim().length === 0) {
    errors.push('Message content is required');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Configuration helper
export const configureEmailService = (serviceName: string, enabled: boolean, config?: Partial<EmailServiceConfig>) => {
  const service = emailServices.find(s => s.name === serviceName);
  if (service) {
    service.enabled = enabled;
    if (config) {
      Object.assign(service, config);
    }
  }
};

// Get service status
export const getEmailServiceStatus = () => {
  return emailServices.map(service => ({
    name: service.name,
    enabled: service.enabled,
    priority: service.priority
  }));
};
