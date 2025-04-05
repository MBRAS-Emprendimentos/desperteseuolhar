# Luxury Rooftop Event

A Next.js website for luxury rooftop events.

## Facebook Pixel Implementation

Facebook Pixel has been implemented for tracking user behavior and conversions. 

### Setup:

1. Create a `.env.local` file based on `.env.local.example`
2. Add your Facebook Pixel ID to the `.env.local` file:

```
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=your_facebook_pixel_id_here
```

3. Restart the development server with `pnpm dev`

### Usage:

The Facebook Pixel is automatically loaded on all pages through the `FacebookPixel` component in the root layout.

Standard events like PageView are tracked automatically. Custom events are implemented in the following places:

- Form Submissions: The RSVP form tracks "CompleteRegistration" events when forms are successfully submitted

### Adding Custom Events:

To add custom tracking events, import the Facebook Pixel utilities:

```typescript
import * as fbq from '@/lib/facebook-pixel'

// Track a standard event
fbq.pageview()

// Track a custom event
fbq.event('CustomEventName', { custom_property: 'value' })

// Track a predefined event
fbq.completeRegistration({ content_name: 'Form Name' })
```

For more information on Facebook Pixel events, see [Facebook's documentation](https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking).