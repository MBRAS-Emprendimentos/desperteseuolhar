import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import FacebookPixel from '@/components/facebook-pixel'
import GoogleTagManager from '@/components/google-tag-manager'
import { GTMProvider } from '@/contexts/gtm-context'
import { Suspense } from 'react'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Save The View',
  description: 'Vista Jardim Europa',
  generator: 'MBRAS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        <Suspense fallback={null}>
          <GoogleTagManager />
        </Suspense>
      </head>
      <body className={montserrat.className}>
        <GTMProvider>
          <Suspense fallback={null}>
            <FacebookPixel />
          </Suspense>
          {children}
        </GTMProvider>
      </body>
    </html>
  )
}
