import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rumours.lk'),
  title: 'Rumours Salon — Premium Hair & Beauty | Colombo',
  description:
    'Where style becomes art. Experience premium hair dressing, beauty, bridal, nail care & foot spa at Rumours Salon, Colombo 02. Book your appointment today.',
  keywords:
    'hair salon Colombo, beauty salon Sri Lanka, bridal makeup, hair dressing, nail care, foot spa, Rumours Salon',
  authors: [{ name: 'Rumours Salon' }],
  openGraph: {
    title: 'Rumours Salon — Premium Hair & Beauty | Colombo',
    description:
      'Where style becomes art. Experience premium hair dressing, beauty, bridal, nail care & foot spa at Rumours Salon.',
    url: 'https://rumours.lk',
    siteName: 'Rumours Salon',
    locale: 'en_LK',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rumours Salon',
      },
    ],
  },
  alternates: {
    canonical: 'https://rumours.lk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#121212',
              color: '#F5F5F0',
              border: '1px solid rgba(201, 162, 75, 0.2)',
            },
            success: {
              iconTheme: {
                primary: '#C9A24B',
                secondary: '#0a0a0a',
              },
            },
          }}
        />
      </body>
    </html>
  )
}