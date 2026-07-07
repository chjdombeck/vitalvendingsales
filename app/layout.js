import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://www.vitalvendingsales.com'),
  title: 'AI Smart Coolers & Vending Machines | Vital Vending Sales',
  description: 'AI-powered smart coolers, vending machines, and micro-market solutions for the Northeast. 15+ years experience. Free consultation.',
  icons: { icon: '/VitalLogoOnly.png' },
  openGraph: {
    type: 'website',
    siteName: 'Vital Vending Sales',
    title: 'AI Smart Coolers & Vending Machines | Vital Vending Sales',
    description: 'AI-powered smart coolers, vending machines, and micro-market solutions for the Northeast. 15+ years experience. Free consultation.',
    images: ['/static-assets/hero5.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Smart Coolers & Vending Machines | Vital Vending Sales',
    description: 'AI-powered smart coolers, vending machines, and micro-market solutions for the Northeast. 15+ years experience. Free consultation.',
    images: ['/static-assets/hero5.webp'],
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Vital Vending Sales',
  description: 'Northeast supplier of vending machines, AI smart coolers, and micro-market solutions.',
  url: 'https://www.vitalvendingsales.com',
  telephone: '+14132823776',
  email: 'info@vitalvendingsales.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15 Dana Way',
    addressLocality: 'Ludlow',
    addressRegion: 'MA',
    postalCode: '01056',
    addressCountry: 'US',
  },
  areaServed: 'Northeast United States',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
