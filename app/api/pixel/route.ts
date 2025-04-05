import { NextRequest, NextResponse } from 'next/server';
import { 
  sendServerEvents, 
  prepareUserData, 
  createServerEvent,
  type CustomEventData
} from '@/lib/facebook-pixel-server';
import type { ExtendedUserData } from '@/lib/facebook-pixel';

// Map to store recently used event IDs to prevent duplication
const recentEventIds = new Map<string, number>();

// Clean up old event IDs (older than 1 hour)
function cleanupEventIds() {
  const now = Date.now();
  for (const [id, timestamp] of recentEventIds.entries()) {
    if (now - timestamp > 3600000) { // 1 hour
      recentEventIds.delete(id);
    }
  }
}

// Meta Pixel Server-Side API endpoint
export async function POST(request: NextRequest) {
  try {
    cleanupEventIds(); // Clean up old event IDs
    
    // Extract data from request
    const { 
      eventName, 
      userData, 
      customData,
      sourceUrl,
      eventId
    } = await request.json();

    // Validate required fields
    if (!eventName) {
      return NextResponse.json(
        { error: 'Missing required field: eventName' }, 
        { status: 400 }
      );
    }

    // Get access token and pixel ID from environment variables
    const accessToken = process.env.META_CONVERSION_API_ACCESS_TOKEN;
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

    if (!accessToken || !pixelId) {
      console.error('Missing META_CONVERSION_API_ACCESS_TOKEN or NEXT_PUBLIC_FACEBOOK_PIXEL_ID');
      // Return 200 instead of error to avoid breaking client-side functionality
      return NextResponse.json(
        { success: false, message: 'Configuration error' }, 
        { status: 200 }
      );
    }
    
    // Check for duplicate event
    const finalEventId = eventId || `event_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    if (recentEventIds.has(finalEventId)) {
      return NextResponse.json({ 
        success: true, 
        message: 'Duplicate event ignored', 
        duplicate: true 
      });
    }
    
    // Store event ID
    recentEventIds.set(finalEventId, Date.now());

    // Get browser data from request
    const ip = request.headers.get('x-forwarded-for') || request.ip || '';
    const userAgent = request.headers.get('user-agent') || '';
    const referer = request.headers.get('referer') || '';
    
    // Normalize user data with types
    const normalizedUserData: ExtendedUserData = userData || {};
    
    // Prepare user data with IP and user agent
    const preparedUserData = prepareUserData({
      ...normalizedUserData,
      ip,
      userAgent
    });

    // Normalize custom data with types
    const normalizedCustomData: CustomEventData = customData || {};
    
    // Add referrer to custom data if not already present
    if (!normalizedCustomData.referrer && referer) {
      normalizedCustomData.referrer = referer;
    }

    // Create server event
    const serverEvent = createServerEvent(
      eventName,
      preparedUserData,
      normalizedCustomData,
      sourceUrl,
      finalEventId
    );

    // Log event details in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log('Sending server event:', {
        eventName,
        eventId: finalEventId,
        userData: preparedUserData,
        customData: normalizedCustomData
      });
    }

    // Send event to Meta
    const result = await sendServerEvents(
      [serverEvent],
      accessToken,
      pixelId
    );

    return NextResponse.json({ 
      success: true, 
      result,
      eventId: finalEventId
    });
  } catch (error) {
    console.error('Error in Meta Pixel API:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}