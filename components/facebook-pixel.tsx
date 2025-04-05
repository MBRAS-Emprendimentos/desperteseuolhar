'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect, Suspense } from 'react'

import * as fbq from '@/lib/facebook-pixel'

// Component that uses useSearchParams
function FacebookPixelContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get page metadata for tracking
    const getPageMetadata = () => {
      if (typeof window === 'undefined') return {};
      
      // Basic page info
      const pageData = {
        pathname,
        searchParams: Object.fromEntries(searchParams.entries()),
        title: document.title,
        referrer: document.referrer || undefined,
        language: navigator.language,
        userAgent: navigator.userAgent,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      };
      
      // Get meta tags for more context
      const metaTags = Array.from(document.querySelectorAll('meta'))
        .reduce((acc, meta) => {
          const name = meta.getAttribute('name') || meta.getAttribute('property');
          const content = meta.getAttribute('content');
          if (name && content) {
            acc[name] = content;
          }
          return acc;
        }, {} as Record<string, string>);
      
      return { ...pageData, meta: metaTags };
    };

    // Enhanced page view tracking
    const trackPageView = () => {
      const pageMetadata = getPageMetadata();
      
      // Track regular page view
      fbq.pageview({
        // Extract location from URL if possible
        city: pageMetadata.meta?.['geo.placename'] || 'São Paulo',
        state: 'SP',
        country: 'BR'
      });
      
      // Also track ViewContent for more detailed page info
      fbq.viewContent(
        {
          content_name: document.title || pathname,
          content_type: 'page',
          content_category: pathname.split('/')[1] || 'home',
          // Include URL parameters as custom data
          url_params: Object.fromEntries(searchParams.entries()),
          // Include page metadata
          page_metadata: pageMetadata
        }
      );
    };

    // Trigger tracking on route change
    trackPageView();
  }, [pathname, searchParams])

  return (
    <>
      {/* Meta Pixel Code */}
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${fbq.FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${fbq.FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Main component with Suspense boundary
export default function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelContent />
    </Suspense>
  )
}