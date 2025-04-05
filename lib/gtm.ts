// Google Tag Manager utility functions
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID as string;

export interface GTMEvent {
  event: string;
  [key: string]: any;
}

// Initialize Google Tag Manager dataLayer
export const initGTM = () => {
  // Only run on client side
  if (typeof window === 'undefined' || !GTM_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });
};

// Push an event to the GTM dataLayer
export const pushEvent = (data: GTMEvent) => {
  // Only run on client side
  if (typeof window === 'undefined' || !window.dataLayer) return;

  // Add timestamp to event
  const eventWithTimestamp = {
    ...data,
    timestamp: new Date().toISOString()
  };

  window.dataLayer.push(eventWithTimestamp);
};

// Page view event
export const pageview = (url: string) => {
  pushEvent({
    event: 'pageview',
    page: url,
  });
};

// Track lead generation
export const trackLead = (formName: string, userData: Record<string, any> = {}) => {
  const { email, phone, firstName, lastName, ...otherData } = userData;
  
  // Remove any PII from the event data
  const sanitizedUserData = {
    userDataAvailable: !!email || !!phone || !!firstName || !!lastName,
    ...otherData
  };
  
  pushEvent({
    event: 'lead',
    formName,
    ...sanitizedUserData
  });
};

// Track form submissions
export const trackFormSubmit = (formName: string, formData: Record<string, any> = {}) => {
  // Remove any sensitive information
  const sanitizedFormData = { ...formData };
  
  // Remove common PII fields
  ['email', 'phone', 'firstName', 'lastName', 'password'].forEach(field => {
    if (sanitizedFormData[field]) {
      delete sanitizedFormData[field];
    }
  });
  
  pushEvent({
    event: 'form_submit',
    formName,
    formData: sanitizedFormData
  });
};

// Add TypeScript interface for the dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}