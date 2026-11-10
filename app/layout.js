import './globals.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GA_MEASUREMENT_ID = 'G-0GRSJMW0NQ';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL('https://www.vitalvendingsales.com'),
  title: 'Vending Machines & AI Smart Coolers for Sale | Ludlow, MA | Vital Vending Sales',
  description: 'Vending machines and AI smart coolers for sale across Massachusetts and the Northeast. 15+ years of experience, free location help and local service. Free consultation.',
  icons: { icon: '/VitalLogoOnly.png' },
  openGraph: {
    type: 'website',
    siteName: 'Vital Vending Sales',
    title: 'Vending Machines & AI Smart Coolers for Sale | Ludlow, MA | Vital Vending Sales',
    description: 'Vending machines and AI smart coolers for sale across Massachusetts and the Northeast. 15+ years of experience, free location help and local service. Free consultation.',
    images: ['/static-assets/hero6.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vending Machines & AI Smart Coolers for Sale | Ludlow, MA | Vital Vending Sales',
    description: 'Vending machines and AI smart coolers for sale across Massachusetts and the Northeast. 15+ years of experience, free location help and local service. Free consultation.',
    images: ['/static-assets/hero6.webp'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vital Vending Sales',
  description: 'Vending machines, AI smart coolers and micro-market equipment for sale, with location services and machine service across the Northeast.',
  url: 'https://www.vitalvendingsales.com',
  telephone: '+1-413-282-3776',
  email: 'info@vitalvendingsales.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15 Dana Way',
    addressLocality: 'Ludlow',
    addressRegion: 'MA',
    postalCode: '01056',
    addressCountry: 'US',
  },
  areaServed: ['Massachusetts', 'New England', 'Northeastern United States'],
  logo: 'https://www.vitalvendingsales.com/VitalLogoOnly.png',
  image: 'https://www.vitalvendingsales.com/VitalLogoandmoreTEXTONLY.png',
  sameAs: [
    'https://www.instagram.com/vitalvendingsales',
    'https://www.tiktok.com/@vitalvending',
    'https://www.facebook.com/vitalvendingsales',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
