# Luxury Rooftop Event

A Next.js website for luxury rooftop events.

## Analytics Implementations

This project includes comprehensive analytics integrations with:

1. Meta Pixel (Facebook Pixel) - Client & Server-side tracking
2. Google Tag Manager (GTM) - For flexible tag management

### Meta Pixel Implementation

Meta Pixel has been implemented for tracking user behavior and conversions, with both client-side and server-side capabilities.

### Setup:

1. Create a `.env.local` file based on `.env.local.example`
2. Add your Meta Pixel ID and access token to the `.env.local` file:

```
# Client-side Pixel
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_facebook_pixel_id_here

# Server-side Conversion API
META_CONVERSION_API_ACCESS_TOKEN=your_meta_api_access_token_here

# Optional: For test events in development
META_TEST_EVENT_CODE=your_test_event_code

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=your_gtm_container_id_here
```

3. Restart the development server with `pnpm dev`

### Usage:

The Meta Pixel is automatically loaded on all pages through the `FacebookPixel` component in the root layout. Both client-side and server-side tracking are implemented.

Standard events like PageView are tracked automatically. Custom events are implemented in the following places:

- Form Submissions: The RSVP form tracks "CompleteRegistration" events when forms are successfully submitted

### Adding Custom Events:

To add custom tracking events, import the Meta Pixel utilities:

```typescript
import * as fbq from '@/lib/facebook-pixel'

// Track a standard event (client + server side)
fbq.pageview()

// Track a custom event with event data and user data
fbq.event(
  'CustomEventName', 
  { custom_property: 'value' },  // Event data (sent to both client and server)
  { email: 'user@example.com' }  // User data (only sent to server API)
)

// Track a predefined event with both event and user data
fbq.completeRegistration(
  { content_name: 'Form Name' },  // Event data
  { 
    email: 'user@example.com',    // User data for server-side tracking
    phone: '5551234567',
    firstName: 'John',
    lastName: 'Doe'
  }
)
```

### Server-Side API Benefits

The server-side implementation provides several advantages:

1. **Improved Accuracy**: Bypasses ad blockers that might block client-side pixel
2. **Better Data Control**: Server-side events can include additional user data
3. **Improved Performance**: Reduces client-side JavaScript execution
4. **More Secure**: Sensitive operations happen server-side

### Enhanced User Data Collection

The implementation now supports comprehensive user data collection including:

- **Basic Information**: Name, email, phone number
- **Demographics**: Gender, date of birth
- **Location**: City, state, zip code, country, full address
- **Device Information**: IP address, user agent, viewport size
- **Meta-specific**: Facebook click IDs, browser IDs
- **Custom IDs**: External IDs, subscription IDs, lead IDs

### Event Data Support

Comprehensive event data is supported for standard Meta events:

- **PageView**: Automatically tracks page views with enhanced metadata
- **Lead**: Captures lead generation with detailed form data
- **CompleteRegistration**: Tracks RSVP form submissions
- **Purchase**: Ready for e-commerce tracking with product data
- **ViewContent**: Enhanced page content tracking
- **Custom Events**: Support for any custom event type

For more information on Meta Pixel events, see:
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
- [Conversion API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Standard Events Reference](https://developers.facebook.com/docs/meta-pixel/reference)

### Google Tag Manager Implementation

Google Tag Manager has been integrated to provide a flexible way to manage various tracking scripts and tags.

#### Usage:

GTM is loaded on all pages through the `GoogleTagManager` component in the root layout. Data layers are properly initialized and accessible throughout the application.

#### Tracking Events with GTM:

You can track events in two ways:

1. **Direct method** - Import GTM utilities directly:

```typescript
import * as gtm from '@/lib/gtm'

// Track a page view
gtm.pageview('/some-page')

// Track a custom event
gtm.pushEvent({
  event: 'custom_event',
  category: 'user_engagement',
  action: 'click',
  label: 'sign_up_button'
})
```

2. **Context method** - Use the React context for component-based access:

```typescript
import { useGTM } from '@/contexts/gtm-context'

function MyComponent() {
  const { pushEvent, trackLead, trackFormSubmit } = useGTM()
  
  const handleClick = () => {
    pushEvent({
      event: 'button_click',
      buttonId: 'register_now'
    })
  }
  
  return <button onClick={handleClick}>Register Now</button>
}
```

#### Helper Functions:

- `pushEvent(data)`: Push custom events to dataLayer
- `pageview(url)`: Track page views
- `trackLead(formName, userData)`: Track lead generation events
- `trackFormSubmit(formName, formData)`: Track form submissions

For more information on Google Tag Manager, see:
- [Google Tag Manager Documentation](https://developers.google.com/tag-manager/quickstart)
- [Data Layer Documentation](https://developers.google.com/tag-manager/devguide)