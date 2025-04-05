export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID as string

export const pageview = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', name, options)
  }
}

export const viewContent = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent')
  }
}

export const completeRegistration = (options = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', options)
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