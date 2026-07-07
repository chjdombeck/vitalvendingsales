'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div style={{ background: '#3DB54A' }} className="text-white text-center py-2.5 px-4 text-sm font-medium">
        <span>★ NEW: AI Smart Coolers Now Available. </span>
        <Link href="/#contact" className="underline font-bold hover:opacity-80 transition-opacity">
          Book Your Free Consultation Today
        </Link>
      </div>

      {/* Nav */}
      <header
        className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
        style={{ boxShadow: '0 1px 3px rgba(27,42,74,0.06)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/VitalLogoandmoreTEXTONLY.png"
                alt="Vital Vending Sales"
                width={220}
                height={143}
                className="h-14 lg:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-7 mx-8">
              {[
                { href: '/smart-cooler-summit', label: 'August 8th Summit!', highlight: true },
                { href: '/smart-coolers', label: 'AI Smart Coolers' },
                { href: '/vending-machines', label: 'Vending Machines' },
                { href: '/vending-parts', label: 'Vending Parts' },
                { href: '/about', label: 'About' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/blog', label: 'Blog' },
              ].map(({ href, label, highlight }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative whitespace-nowrap font-medium text-[0.9rem] transition-colors duration-200
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0
                    after:h-0.5 after:bg-[#3DB54A] after:scale-x-0 after:transition-transform
                    after:origin-left hover:after:scale-x-100 after:rounded-sm
                    ${highlight ? 'text-[#1e7a28] font-bold' : 'text-[#3D4D5C] hover:text-[#1B2A4A]'}`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA + social icons */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              {/* Facebook */}
              <a href="https://www.facebook.com/vitalvendingsales" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#6B7280] hover:text-[#1B2A4A] transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/vitalvendingsales/" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#6B7280] hover:text-[#1B2A4A] transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@vitalvending" target="_blank" rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-[#6B7280] hover:text-[#1B2A4A] transition-colors duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <div className="w-px h-5 bg-gray-200 mx-1" />
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 font-bold rounded-[10px] cursor-pointer text-sm px-6 py-3 text-white"
                style={{
                  background: 'rgba(61,181,74,0.88)',
                  border: '1px solid rgba(255,255,255,0.28)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 16px rgba(0,0,0,0.18), 0 0 24px rgba(61,181,74,0.28)',
                  transition: 'transform 0.28s cubic-bezier(0.1,0.4,0.2,1), filter 0.28s',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.045) translateY(-1px)'; e.currentTarget.style.filter = 'brightness(1.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.filter = ''; }}
              >
                Free Consultation
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-md text-[#3D4D5C] hover:bg-[#F4F6F8] transition-colors duration-200"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="px-4 py-4 flex flex-col gap-1">
              {[
                { href: '/smart-cooler-summit', label: 'August 8th Summit!', highlight: true },
                { href: '/smart-coolers', label: 'AI Smart Coolers' },
                { href: '/vending-machines', label: 'Vending Machines' },
                { href: '/vending-parts', label: 'Vending Parts' },
                { href: '/about', label: 'About' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/blog', label: 'Blog' },
              ].map(({ href, label, highlight }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2.5 px-3 rounded-lg font-medium hover:bg-[#F4F6F8] transition-colors duration-200 ${highlight ? 'text-[#1e7a28] font-bold' : 'text-[#3D4D5C] hover:text-[#1B2A4A]'}`}
                >
                  {label}
                </Link>
              ))}
              <a href="tel:4132823776" className="py-2.5 px-3 rounded-lg text-[#3D4D5C] font-medium hover:bg-[#F4F6F8] hover:text-[#1B2A4A] transition-colors duration-200">
                (413) 282-3776
              </a>
              <div className="pt-2">
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex justify-center font-bold rounded-[10px] text-sm px-6 py-3 text-white w-full"
                  style={{ background: 'rgba(61,181,74,0.88)' }}
                >
                  Free Consultation
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
