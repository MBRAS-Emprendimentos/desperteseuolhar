import type { CustomEventData } from './facebook-pixel-server';

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID as string

// Extended user data interface
export interface ExtendedUserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  gender?: 'f' | 'm';
  dateOfBirth?: string; // Format: YYYYMMDD
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  street?: string;
  externalId?: string;
  subscriptionId?: string;
  leadId?: string;
  [key: string]: any; // Allow additional properties
}

// Helper function to extract Facebook browser parameters
const getFacebookBrowserParams = (): { fbp?: string; fbc?: string } => {
  if (typeof window === 'undefined') return {};
  
  const params: { fbp?: string; fbc?: string } = {};
  
  // Get Facebook Browser ID from cookie
  const cookies = document.cookie.split(';');
  const fbpCookie = cookies.find(c => c.trim().startsWith('_fbp='));
  if (fbpCookie) {
    params.fbp = fbpCookie.split('=')[1];
  }
  
  // Get Facebook Click ID from URL or cookie
  const url = new URL(window.location.href);
  const fbclid = url.searchParams.get('fbclid');
  if (fbclid) {
    params.fbc = `fb.1.${Date.now()}.${fbclid}`;
  } else {
    const fbcCookie = cookies.find(c => c.trim().startsWith('_fbc='));
    if (fbcCookie) {
      params.fbc = fbcCookie.split('=')[1];
    }
  }
  
  return params;
};

// Helper function to send server-side events
const sendServerEvent = async (
  eventName: string, 
  userData: ExtendedUserData = {}, 
  customData: CustomEventData = {}
) => {
  try {
    // Get current URL for the event source
    const sourceUrl = typeof window !== 'undefined' ? window.location.href : undefined;
    
    // Get Facebook browser parameters
    const fbParams = getFacebookBrowserParams();
    
    // Merge with user data
    const enhancedUserData = {
      ...userData,
      ...fbParams
    };
    
    // Send to server API
    await fetch('/api/pixel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        userData: enhancedUserData,
        customData,
        sourceUrl
      }),
    });
  } catch (error) {
    console.error('Error sending server-side event:', error);
  }
};

// Track page view
export const pageview = (userData: ExtendedUserData = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
    
    // Also send server-side if possible
    sendServerEvent('PageView', userData);
  }
}

// Track generic event (client + server side)
// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (
  name: string, 
  options: CustomEventData = {}, 
  userData: ExtendedUserData = {}
) => {
  // Client-side tracking
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options);
  }
  
  // Server-side tracking
  sendServerEvent(name, userData, options);
}

// Standard Events (with typed parameters)

// Track content view
export const viewContent = (
  contentData: CustomEventData = {}, 
  userData: ExtendedUserData = {}
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', contentData);
    
    // Also send server-side
    sendServerEvent('ViewContent', userData, contentData);
  }
}

// Track registration completion
export const completeRegistration = (
  options: CustomEventData = {}, 
  userData: ExtendedUserData = {}
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', options);
    
    // Also send server-side with user data
    sendServerEvent('CompleteRegistration', userData, options);
  }
}

// Additional standard events with typed interfaces

// Track add to cart
export const addToCart = (
  options: CustomEventData & { 
    value?: number;
    currency?: string;
    content_ids?: string[];
    content_name?: string;
    content_type?: string;
    contents?: Array<{
      id?: string;
      quantity?: number;
      item_price?: number;
    }>;
  } = {}, 
  userData: ExtendedUserData = {}
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', options);
    
    // Also send server-side
    sendServerEvent('AddToCart', userData, options);
  }
}

// Track purchase
export const purchase = (
  options: CustomEventData & {
    value: number;
    currency: string;
    content_ids?: string[];
    content_name?: string;
    content_type?: string;
    contents?: Array<{
      id?: string;
      quantity?: number;
      item_price?: number;
    }>;
    num_items?: number;
    order_id?: string;
  }, 
  userData: ExtendedUserData = {}
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Purchase', options);
    
    // Also send server-side
    sendServerEvent('Purchase', userData, options);
  }
}

// Lead generation
export const lead = (
  options: CustomEventData & {
    value?: number;
    currency?: string;
    content_name?: string;
    content_category?: string;
  } = {}, 
  userData: ExtendedUserData = {}
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', options);
    
    // Also send server-side
    sendServerEvent('Lead', userData, options);
  }
}

// Add TypeScript interface for the fbq function
declare global {
  interface Window {
    fbq: (
      type: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void
  }
}