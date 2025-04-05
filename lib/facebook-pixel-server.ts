/**
 * Meta Pixel Server-Side API implementation
 * https://developers.facebook.com/docs/marketing-api/conversions-api/get-started
 */

interface ServerEvent {
  event_name: string;
  event_time: number;
  event_source_url?: string;
  event_id?: string;
  user_data: UserData;
  custom_data?: Record<string, any>;
  action_source: 'website' | 'email' | 'app' | 'phone_call' | 'chat' | 'physical_store' | 'system_generated' | 'other';
}

interface UserData {
  em?: string[]; // Email (hashed)
  ph?: string[]; // Phone (hashed)
  fn?: string[]; // First Name (hashed)
  ln?: string[]; // Last Name (hashed)
  ge?: string[]; // Gender (hashed) - 'f' or 'm'
  db?: string[]; // Date of Birth (hashed) - YYYYMMDD format
  ct?: string[]; // City (hashed)
  st?: string[]; // State/Province (hashed)
  zp?: string[]; // Zip/Postal Code (hashed)
  country?: string[]; // Country (hashed)
  external_id?: string;
  client_ip_address?: string;
  client_user_agent?: string;
  fbc?: string; // Facebook Click ID
  fbp?: string; // Facebook Browser ID
  subscription_id?: string;
  lead_id?: string;
  address?: {
    city?: string;
    region?: string;
    postal_code?: string;
    country?: string;
    street?: string;
  };
}

// Hash function for user data
function hashData(data: string): string {
  if (!data) return '';
  
  // For actual implementation, use crypto library in a real backend context
  // This is just a placeholder for the implementation
  // In production, use crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex')
  return `hashed_${data.toLowerCase().trim()}`;
}

// Send server events to Meta Conversion API
export async function sendServerEvents(
  events: ServerEvent[],
  accessToken: string,
  pixelId: string
): Promise<any> {
  if (!accessToken || !pixelId || !events.length) {
    throw new Error('Missing required parameters: accessToken, pixelId, or events');
  }

  const url = `https://graph.facebook.com/v17.0/${pixelId}/events`;
  
  const payload = {
    data: events,
    access_token: accessToken,
    test_event_code: process.env.NODE_ENV === 'development' ? process.env.META_TEST_EVENT_CODE : undefined,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return await response.json();
  } catch (error) {
    console.error('Error sending server events to Meta:', error);
    throw error;
  }
}

// Prepare user data object with hashed values
export function prepareUserData(data: {
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
  ip?: string;
  userAgent?: string;
  fbc?: string;
  fbp?: string;
  externalId?: string;
  subscriptionId?: string;
  leadId?: string;
}): UserData {
  const userData: UserData = {};

  // Basic customer information (normalized and hashed)
  if (data.email) userData.em = [hashData(data.email)];
  if (data.phone) userData.ph = [hashData(data.phone)];
  if (data.firstName) userData.fn = [hashData(data.firstName)];
  if (data.lastName) userData.ln = [hashData(data.lastName)];
  
  // Extended customer information
  if (data.gender) userData.ge = [hashData(data.gender)];
  if (data.dateOfBirth) userData.db = [hashData(data.dateOfBirth)];
  
  // Location information
  if (data.city) userData.ct = [hashData(data.city)];
  if (data.state) userData.st = [hashData(data.state)];
  if (data.zipCode) userData.zp = [hashData(data.zipCode)];
  if (data.country) userData.country = [hashData(data.country)];
  
  // Address details as a structured object
  if (data.city || data.state || data.zipCode || data.country || data.street) {
    userData.address = {
      city: data.city,
      region: data.state,
      postal_code: data.zipCode,
      country: data.country,
      street: data.street
    };
  }
  
  // Browser and request information (not hashed)
  if (data.ip) userData.client_ip_address = data.ip;
  if (data.userAgent) userData.client_user_agent = data.userAgent;
  
  // Facebook specific parameters (not hashed)
  if (data.fbc) userData.fbc = data.fbc;
  if (data.fbp) userData.fbp = data.fbp;
  
  // IDs and other identifiers (not hashed)
  if (data.externalId) userData.external_id = data.externalId;
  if (data.subscriptionId) userData.subscription_id = data.subscriptionId;
  if (data.leadId) userData.lead_id = data.leadId;

  return userData;
}

// Extended interface for custom event data
export interface CustomEventData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  order_id?: string;
  predicted_ltv?: number;
  num_items?: number;
  search_string?: string;
  status?: string;
  shipping_contact?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
  };
  billing_contact?: {
    first_name?: string;
    last_name?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
  };
  contents?: Array<{
    id?: string;
    quantity?: number;
    item_price?: number;
    brand?: string; 
    category?: string;
    name?: string;
    description?: string;
  }>;
  [key: string]: any; // Allow any additional properties
}

// Create a server event for tracking
export function createServerEvent(
  eventName: string,
  userData: UserData,
  customData?: CustomEventData,
  sourceUrl?: string,
  eventId?: string
): ServerEvent {
  return {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_source_url: sourceUrl,
    event_id: eventId || `event_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    user_data: userData,
    custom_data: customData,
    action_source: 'website',
  };
}