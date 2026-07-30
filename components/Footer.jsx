import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#121e35' }} className="text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Image
              src="/VitalLogoandmoreTEXTONLY.png"
              alt="Vital Vending Sales logo"
              width={220}
              height={143}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-sm mb-4" style={{ lineHeight: 1.7 }}>
              Northeast&apos;s leader in vending machines, AI smart coolers, and micro-market equipment. Based in Ludlow, MA.
            </p>
            <div className="text-[#3DB54A] text-sm font-bold italic mb-5">&ldquo;VVS: The Break Time Experts.&rdquo;</div>
            <div className="flex items-center gap-3">
              {/* Google */}
              <a href="https://share.google/zldlNjs6a3Lq2OWP1" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#3DB54A] hover:bg-[#3DB54A]/10 transition-colors duration-200"
                aria-label="Google Profile">
                <svg className="w-4 h-4" style={{ filter: 'grayscale(1) opacity(0.55)' }} viewBox="0 0 48 48">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/vitalvendingsales" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#3DB54A] hover:bg-[#3DB54A]/10 transition-colors duration-200"
                aria-label="Facebook">
                <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/vitalvendingsales" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#3DB54A] hover:bg-[#3DB54A]/10 transition-colors duration-200"
                aria-label="Instagram">
                <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com/@vitalvending" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 hover:border-[#3DB54A] hover:bg-[#3DB54A]/10 transition-colors duration-200"
                aria-label="TikTok">
                <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.05a8.16 8.16 0 004.77 1.52V7.12a4.85 4.85 0 01-1-.43z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Equipment */}
          <div>
            <div className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Equipment</div>
            <ul className="space-y-2.5">
              <li><Link href="/smart-coolers" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">AI Smart Coolers</Link></li>
              <li><Link href="/vending-machines" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">Snack Machines</Link></li>
              <li><Link href="/vending-machines" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">Combo Machines</Link></li>
              <li><Link href="/vending-machines" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">Beverage Machines</Link></li>
              <li><Link href="/vending-machines" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">Micro-Market Setup</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Services</div>
            <ul className="space-y-2.5">
              <li><Link href="/#services" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">Equipment Sales</Link></li>
              <li><Link href="/#services" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">Location Services</Link></li>
              <li><Link href="/#services" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">Service &amp; Support</Link></li>
              <li><Link href="/#contact" className="text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">Free Consultation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold text-white text-sm mb-4 uppercase tracking-wide">Contact</div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/70 text-sm">
                <svg className="w-4 h-4 text-[#3DB54A] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                15 Dana Way, Ludlow, MA 01056
              </li>
              <li>
                <a href="tel:4132823776" className="flex items-start gap-2 text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">
                  <svg className="w-4 h-4 text-[#3DB54A] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  (413) 282-3776
                </a>
              </li>
              <li>
                <a href="mailto:info@vitalvendingsales.com" className="flex items-start gap-2 text-white/70 text-sm hover:text-[#3DB54A] transition-colors duration-200">
                  <svg className="w-4 h-4 text-[#3DB54A] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@vitalvendingsales.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/30 text-xs">
            &copy; 2026 Vital Vending Sales LLC. All rights reserved. &middot; Ludlow, Massachusetts &middot;{' '}
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-white/30 text-xs hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-white/30 text-xs hover:text-white/60 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
