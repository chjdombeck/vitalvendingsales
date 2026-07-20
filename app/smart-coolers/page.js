'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { submitToHubSpot } from '../../lib/hubspot';

const HAHA_PRODUCTS = [
  { id: 'haha-mini', img: '/static-assets/MoreVendingMachinesandContent/Mini Details.png', name: 'HAHA Mini', model: 'US360C', tagline: 'Compact and capable — perfect for tighter spaces', specs: ['252 bottles', '6 shelves', 'AI recognition'], price: '$2,999', badge: 'AI Smart Cooler', badgeStyle: {} },
  { id: 'haha-plus', img: '/static-assets/MoreVendingMachinesandContent/Pus 440 Details.png', name: 'HAHA Plus', model: 'US440CT', tagline: 'Mid-size powerhouse with room to grow', specs: ['324 bottles', '6 shelves', 'AI recognition'], price: '$3,399', badge: 'AI Smart Cooler', badgeStyle: {} },
  { id: 'haha-pro', img: '/static-assets/MoreVendingMachinesandContent/Pro Details.png', name: 'HAHA Pro', model: 'US542CT', tagline: 'Full-size AI cooler, avg $4.55 per transaction', specs: ['378 bottles', '6 shelves', 'AI recognition'], price: '$4,399', badge: 'AI Smart Cooler', badgeStyle: {} },
  { id: 'haha-freezer', img: '/static-assets/MoreVendingMachinesandContent/Freezer 550 Details.png', name: 'HAHA Freezer', model: 'US550FT', tagline: 'Frozen and fresh — same smart AI platform', specs: ['384 capacity', '6 shelves', 'Freezer ready'], price: '$4,799', badge: 'AI Freezer', badgeStyle: { background: '#E0F0FF', color: '#0B5FA0' } },
  { id: 'haha-max-620', img: '/static-assets/MoreVendingMachinesandContent/Max 620 Details.png', name: 'HAHA Max 620', model: '', tagline: 'Maximum capacity for busy locations', specs: ['420 bottles', '6 shelves', 'AI recognition'], price: '$4,799', badge: 'AI Smart Cooler', badgeStyle: {} },
  { id: 'haha-max-660', img: '/static-assets/MoreVendingMachinesandContent/Max 620s Details.png', name: 'HAHA Max 620s', model: '', tagline: 'Advertise, engage, and sell — all from one unit', specs: ['420 bottles', 'Digital screen', 'AI recognition'], price: '$5,499', badge: 'AI Smart Cooler', badgeStyle: {} },
  { id: 'haha-ultra-double-door', img: '/static-assets/MoreVendingMachinesandContent/Double Door Details.png', name: 'HAHA Ultra Double Door', model: 'US1200CT', tagline: 'Double capacity for the highest-volume locations', specs: ['756 bottles', '12 shelves', 'Dual door'], price: '$6,999', badge: 'Double Door', badgeStyle: { background: '#F0E8FD', color: '#5B0FA8' }, wide: true },
];

const USI_PRODUCTS = [
  { id: 'spectraLaunch', img: '/static-assets/vvs_product_catalog/images/spectra-launch-1.png', name: 'Spectra Launch Smart Cooler', part: '#36730001', tagline: 'Entry-level TrueAI™ smart cooler with 6 customizable shelves', specs: ['TrueAI™ vision', '6 shelves', 'Cassette fridge'], price: '$4,995', badge: '3-Year Warranty', badgeStyle: { background: '#D6F0DA', color: '#1a6b2a' } },
  { id: 'spectraCore', img: '/static-assets/vvs_product_catalog/images/spectra-core-2.png', name: 'Spectra Core Smart Cooler', part: '#36710001', tagline: '28" ad screen, GPS tracking, real-time cart & checkout', specs: ['TrueAI™ vision', '28" screen', 'GPS tracking'], price: '$5,495', badge: '5-Year Warranty', badgeStyle: { background: '#D6F0DA', color: '#1a6b2a' } },
  { id: 'spectraPro', img: '/static-assets/vvs_product_catalog/images/spectra-pro-2.webp', name: 'Spectra Pro Smart Cooler', part: '#36720003', tagline: '30" ad screen, LED door handle, GPS asset tracking', specs: ['TrueAI™ vision', '30" screen', 'LED handle'], price: '$6,495', badge: '5-Year Warranty', badgeStyle: { background: '#D6F0DA', color: '#1a6b2a' } },
  { id: 'spectraElevate', img: '/static-assets/vvs_product_catalog/images/spectra-elevate-1.webp', name: 'Spectra Elevate Smart Cooler', part: '#36700001', tagline: 'GPS tracking, loyalty program, real-time theft alerts, USA-made', specs: ['TrueAI™ vision', 'GPS tracking', 'Loyalty rewards'], price: '$7,995', badge: '7-Year Warranty', badgeStyle: { background: '#3DB54A', color: '#fff' } },
];

const MODAL_DATA = {
  'haha-mini': {
    name: 'HAHA Mini', model: 'US360C', brand: 'HAHA Smart Coolers', category: 'AI Smart Cooler', price: '$2,999',
    img: '/static-assets/MoreVendingMachinesandContent/Mini Details.png', images: [],
    specs: ['Exterior Dimensions: 22.8" x 26" x 76"', 'Shelves: 6 shelves', 'Approximate Capacity: ~252 bottles', 'Connectivity: SIM or WiFi', 'Payment: Card, Apple Pay, Google Pay'],
    features: 'The HAHA Mini is the most compact unit in the HAHA lineup — ideal for smaller offices, lobbies, or any location where footprint matters but revenue potential shouldn\'t be sacrificed. Fully AI-powered, cashless, and cloud-managed.',
    featureCardsTitle: 'Why HAHA — Built Different. Built Better.',
    featureCards: [
      { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
      { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly platform fees, and minimal service requirements keep operating costs down.' },
      { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns are limited to just a few core components, dramatically reducing downtime and technician visits.' },
      { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping behavior drives higher average transaction values compared to traditional vending.' },
      { icon: '📦', title: 'Product Flexibility', body: 'Sell beverages, snacks, fresh food, and more — all in the same unit. Not restricted by coils or trays, so you can stock multiple sizes and categories freely.' },
      { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded door with piston lock closes and secures every single time. Simple, effective, and reliable — outperforms comparable designs on the market.' },
    ],
    costRows: [
      ['Monthly Platform Fee', '$40/mo', 'Standard (SIM connectivity)'],
      ['Monthly Platform Fee', '$25/mo', 'WiFi via router'],
      ['WiFi Router Setup', '~$30', 'One-time, available on Amazon'],
      ['Transaction Fee', '$0.05', 'Per transaction (HAHA platform)'],
      ['Credit Card Processing', '5.95%', 'Standard vending industry CC rate'],
    ],
    costNote: 'SIM connectivity is available at $40/month and is the most reliable option overall. WiFi connectivity is available at $25/month using a router available on Amazon for approximately $30 — setup takes about 20 minutes.',
    pdfHref: '/static-assets/MoreVendingMachinesandContent/APP Instructions (1) (1).pdf',
    pdfLabel: 'Download HAHA App User Guide',
    comparisonImage: '/static-assets/MoreVendingMachinesandContent/Pros of smart vending VS. Traditional Vending .jpg',
  },
  'haha-plus': {
    name: 'HAHA Plus', model: 'US440CT', brand: 'HAHA Smart Coolers', category: 'AI Smart Cooler', price: '$3,399',
    img: '/static-assets/MoreVendingMachinesandContent/Pus 440 Details.png', images: [],
    specs: ['Exterior Dimensions: 27.2" x 27" x 76.6"', 'Shelves: 6 shelves', 'Approximate Capacity: ~324 bottles', 'Connectivity: SIM or WiFi', 'Payment: Card, Apple Pay, Google Pay'],
    features: 'The HAHA Plus steps up the capacity with a wider footprint, making it the ideal choice for medium-traffic locations like offices, schools, and fitness centers. Same AI platform, more stocking capacity, and all organizers included.',
    featureCardsTitle: 'Why HAHA — Built Different. Built Better.',
    featureCards: [
      { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
      { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements keep operating costs down.' },
      { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns are limited to just a few core components, dramatically reducing downtime.' },
      { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping drives higher average transaction values compared to traditional vending.' },
      { icon: '📦', title: 'Product Flexibility', body: 'Sell beverages, snacks, fresh food, and more — all in the same unit. Not restricted by coils or trays.' },
      { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded door with piston lock closes and secures every single time. Outperforms comparable designs on the market.' },
    ],
    costRows: [
      ['Monthly Platform Fee', '$40/mo', 'Standard (SIM connectivity)'],
      ['Monthly Platform Fee', '$25/mo', 'WiFi via router'],
      ['WiFi Router Setup', '~$30', 'One-time, available on Amazon'],
      ['Transaction Fee', '$0.05', 'Per transaction (HAHA platform)'],
      ['Credit Card Processing', '5.95%', 'Standard vending industry CC rate'],
    ],
    costNote: 'SIM connectivity is available at $40/month and is the most reliable option overall. WiFi connectivity is available at $25/month using a router available on Amazon for approximately $30 — setup takes about 20 minutes.',
    pdfHref: '/static-assets/MoreVendingMachinesandContent/APP Instructions (1) (1).pdf',
    pdfLabel: 'Download HAHA App User Guide',
    comparisonImage: '/static-assets/MoreVendingMachinesandContent/Pros of smart vending VS. Traditional Vending .jpg',
  },
  'haha-pro': {
    name: 'HAHA Pro', model: 'US542CT', brand: 'HAHA Smart Coolers', category: 'AI Smart Cooler', price: '$4,399',
    img: '/static-assets/MoreVendingMachinesandContent/Pro Details.png', images: [],
    specs: ['Exterior Dimensions: 29.5" x 25.6" x 79.5"', 'Shelves: 6 shelves', 'Approximate Capacity: ~378 bottles', 'Connectivity: SIM or WiFi', 'Payment: Card, Apple Pay, Google Pay'],
    features: 'The HAHA Pro is the workhorse of the lineup — a full-size AI smart cooler that holds 378 bottles across 6 shelves and fits into virtually any commercial location. Proven to average $4.55 per customer transaction, making it one of the strongest ROI units VVS carries.',
    featureCardsTitle: 'Why HAHA — Built Different. Built Better.',
    featureCards: [
      { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
      { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
      { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns are limited to a few core components, dramatically reducing downtime.' },
      { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping drives higher average transaction values.' },
      { icon: '📦', title: 'Product Flexibility', body: 'Sell beverages, snacks, fresh food, and more — all in the same unit. Not restricted by coils or trays.' },
      { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded door with piston lock closes and secures every single time. Outperforms comparable designs on the market.' },
    ],
    costRows: [
      ['Monthly Platform Fee', '$40/mo', 'Standard (SIM connectivity)'],
      ['Monthly Platform Fee', '$25/mo', 'WiFi via router'],
      ['WiFi Router Setup', '~$30', 'One-time, available on Amazon'],
      ['Transaction Fee', '$0.05', 'Per transaction (HAHA platform)'],
      ['Credit Card Processing', '5.95%', 'Standard vending industry CC rate'],
    ],
    costNote: 'SIM connectivity is available at $40/month and is the most reliable option overall. WiFi connectivity is available at $25/month using a router available on Amazon for approximately $30 — setup takes about 20 minutes.',
    pdfHref: '/static-assets/MoreVendingMachinesandContent/APP Instructions (1) (1).pdf',
    pdfLabel: 'Download HAHA App User Guide',
    comparisonImage: '/static-assets/MoreVendingMachinesandContent/Pros of smart vending VS. Traditional Vending .jpg',
  },
  'haha-freezer': {
    name: 'HAHA Freezer', model: 'US550FT', brand: 'HAHA Smart Coolers', category: 'AI Freezer', price: '$4,799',
    img: '/static-assets/MoreVendingMachinesandContent/Freezer 550 Details.png', images: [],
    specs: ['Exterior Dimensions: 27.6" x 35.8" x 80.4"', 'Shelves: 6 shelves', 'Approximate Capacity: ~384 items', 'Temperature Mode: Freezer', 'Connectivity: SIM or WiFi', 'Payment: Card, Apple Pay, Google Pay'],
    features: 'The HAHA Freezer brings AI-powered unattended retail to frozen and refrigerated products. Same intuitive grab-and-go platform as the rest of the HAHA lineup — now for ice cream, frozen meals, cold packs, and beyond. Ideal for gyms, convenience locations, and break rooms with frozen demand.',
    featureCardsTitle: 'Why HAHA — Built Different. Built Better.',
    featureCards: [
      { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
      { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
      { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns are limited to a few core components, dramatically reducing downtime.' },
      { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping drives higher average transaction values.' },
      { icon: '📦', title: 'Product Flexibility', body: 'Sell frozen meals, ice cream, cold packs, beverages, snacks, and more — all in the same unit.' },
      { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded door with piston lock closes and secures every single time. Outperforms comparable designs on the market.' },
    ],
    costRows: [
      ['Monthly Platform Fee', '$40/mo', 'Standard (SIM connectivity)'],
      ['Monthly Platform Fee', '$25/mo', 'WiFi via router'],
      ['WiFi Router Setup', '~$30', 'One-time, available on Amazon'],
      ['Transaction Fee', '$0.05', 'Per transaction (HAHA platform)'],
      ['Credit Card Processing', '5.95%', 'Standard vending industry CC rate'],
    ],
    costNote: 'SIM connectivity is available at $40/month and is the most reliable option overall. WiFi connectivity is available at $25/month using a router available on Amazon for approximately $30 — setup takes about 20 minutes.',
    pdfHref: '/static-assets/MoreVendingMachinesandContent/APP Instructions (1) (1).pdf',
    pdfLabel: 'Download HAHA App User Guide',
    comparisonImage: '/static-assets/MoreVendingMachinesandContent/Pros of smart vending VS. Traditional Vending .jpg',
  },
  'haha-max-620': {
    name: 'HAHA Max 620', brand: 'HAHA Smart Coolers', category: 'AI Smart Cooler', price: '$4,799',
    img: '/static-assets/MoreVendingMachinesandContent/Max 620 Details.png', images: [],
    specs: ['Exterior Dimensions: 31.5" x 26.4" x 79.5"', 'Shelves: 6 shelves', 'Approximate Capacity: ~420 bottles', 'Connectivity: SIM or WiFi', 'Payment: Card, Apple Pay, Google Pay'],
    features: 'The HAHA Max 620 is built for locations that need maximum capacity in a single-door form factor. At 420 bottles across 6 shelves, this is the go-to unit for high-traffic offices, warehouses, gyms, and any site where restocking frequency matters. Same AI platform, bigger results.',
    featureCardsTitle: 'Why HAHA — Built Different. Built Better.',
    featureCards: [
      { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
      { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
      { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns limited to a few core components, dramatically reducing downtime.' },
      { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping drives higher average transaction values.' },
      { icon: '📦', title: 'Product Flexibility', body: 'Sell beverages, snacks, fresh food, and more — all in the same unit. Not restricted by coils or trays.' },
      { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded door with piston lock closes and secures every single time. Outperforms comparable designs on the market.' },
    ],
    costRows: [
      ['Monthly Platform Fee', '$40/mo', 'Standard (SIM connectivity)'],
      ['Monthly Platform Fee', '$25/mo', 'WiFi via router'],
      ['WiFi Router Setup', '~$30', 'One-time, available on Amazon'],
      ['Transaction Fee', '$0.05', 'Per transaction (HAHA platform)'],
      ['Credit Card Processing', '5.95%', 'Standard vending industry CC rate'],
    ],
    costNote: 'SIM connectivity is available at $40/month and is the most reliable option overall. WiFi connectivity is available at $25/month using a router available on Amazon for approximately $30 — setup takes about 20 minutes.',
    pdfHref: '/static-assets/MoreVendingMachinesandContent/APP Instructions (1) (1).pdf',
    pdfLabel: 'Download HAHA App User Guide',
    comparisonImage: '/static-assets/MoreVendingMachinesandContent/Pros of smart vending VS. Traditional Vending .jpg',
  },
  'haha-max-660': {
    name: 'HAHA Max 620s', brand: 'HAHA Smart Coolers', category: 'AI Smart Cooler', price: '$5,499',
    img: '/static-assets/MoreVendingMachinesandContent/Max 620s Details.png', images: [],
    specs: ['Exterior Dimensions: 31.5" x 26.4" x 85.8"', 'Shelves: 6 shelves', 'Approximate Capacity: ~420 bottles', 'Display Screen: Built-in digital display', 'Connectivity: SIM or WiFi', 'Payment: Card, Apple Pay, Google Pay'],
    features: 'The HAHA Max 620s takes the high-volume Max 620 and adds a built-in digital display screen on top — giving you a powerful tool for advertising, promotion, and customer engagement. Same great AI platform, taller, and more attention-grabbing.',
    featureCardsTitle: 'Why HAHA — Built Different. Built Better.',
    featureCards: [
      { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
      { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
      { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns limited to a few core components, dramatically reducing downtime.' },
      { icon: '📺', title: 'Built-In Digital Screen', body: 'Play your video content, promotions, or brand messages directly on the unit. The Max 620s screen makes the machine impossible to ignore in any location.' },
      { icon: '📦', title: 'Product Flexibility', body: 'Sell beverages, snacks, fresh food, and more — all in the same unit. Not restricted by coils or trays.' },
      { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded door with piston lock closes and secures every single time. Outperforms comparable designs on the market.' },
    ],
    costRows: [
      ['Monthly Platform Fee', '$40/mo', 'Standard (SIM connectivity)'],
      ['Monthly Platform Fee', '$25/mo', 'WiFi via router'],
      ['WiFi Router Setup', '~$30', 'One-time, available on Amazon'],
      ['Transaction Fee', '$0.05', 'Per transaction (HAHA platform)'],
      ['Credit Card Processing', '5.95%', 'Standard vending industry CC rate'],
    ],
    costNote: 'SIM connectivity is available at $40/month and is the most reliable option overall. WiFi connectivity is available at $25/month using a router available on Amazon for approximately $30 — setup takes about 20 minutes.',
    pdfHref: '/static-assets/MoreVendingMachinesandContent/APP Instructions (1) (1).pdf',
    pdfLabel: 'Download HAHA App User Guide',
    comparisonImage: '/static-assets/MoreVendingMachinesandContent/Pros of smart vending VS. Traditional Vending .jpg',
  },
  'haha-ultra-double-door': {
    name: 'HAHA Ultra Double Door', model: 'US1200CT', brand: 'HAHA Smart Coolers', category: 'Double Door', price: '$6,999',
    img: '/static-assets/MoreVendingMachinesandContent/Double Door Details.png', images: [],
    specs: ['Exterior Dimensions: 53.9" x 28.0" x 79.5"', 'Doors: Double door', 'Shelves: 12 shelves', 'Approximate Capacity: ~756 bottles', 'Connectivity: SIM or WiFi', 'Payment: Card, Apple Pay, Google Pay'],
    features: 'The HAHA Ultra Double Door is the flagship of the entire HAHA lineup — a wide-format, dual-door AI smart cooler purpose-built for the highest-volume locations. With 756-bottle capacity across 12 shelves, this unit is ideal for hospitals, airports, universities, large corporate campuses, and anywhere that demands maximum throughput around the clock.',
    featureCardsTitle: 'Why HAHA — Built Different. Built Better.',
    featureCards: [
      { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
      { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
      { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns limited to a few core components, dramatically reducing downtime.' },
      { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping drives higher average transaction values.' },
      { icon: '📦', title: 'Double the Capacity', body: '756 bottles, 12 shelves, two doors. The Ultra Double Door handles locations that other units can’t — maximizing restocking intervals and revenue per visit.' },
      { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded doors with piston locks close and secure every single time. Outperforms comparable designs on the market.' },
    ],
    costRows: [
      ['Monthly Platform Fee', '$40/mo', 'Standard (SIM connectivity)'],
      ['Monthly Platform Fee', '$25/mo', 'WiFi via router'],
      ['WiFi Router Setup', '~$30', 'One-time, available on Amazon'],
      ['Transaction Fee', '$0.05', 'Per transaction (HAHA platform)'],
      ['Credit Card Processing', '5.95%', 'Standard vending industry CC rate'],
    ],
    costNote: 'SIM connectivity is available at $40/month and is the most reliable option overall. WiFi connectivity is available at $25/month using a router available on Amazon for approximately $30 — setup takes about 20 minutes.',
    pdfHref: '/static-assets/MoreVendingMachinesandContent/APP Instructions (1) (1).pdf',
    pdfLabel: 'Download HAHA App User Guide',
    comparisonImage: '/static-assets/MoreVendingMachinesandContent/Pros of smart vending VS. Traditional Vending .jpg',
  },
  spectraLaunch: {
    name: 'Spectra Launch Smart Cooler', brand: 'USI — Spectra Series', category: 'AI Smart Cooler', price: '$4,995',
    img: '/static-assets/vvs_product_catalog/images/spectra-launch-1.png', images: [],
    specs: ['Part Number: 36730001', 'Warranty: 3 Years', 'Technology: TrueAI™ computer vision product recognition', 'Shelves: 6 customizable shelves with product pushers', 'Interior: White interior', 'Refrigeration: Cassette-style removable refrigeration', 'Cart: Real-time smart shopping cart', 'Payment: Cashless — WeVend or Cantaloupe', 'Lock: NAMA-compliant smart lock', 'Connectivity: Cloud-based remote monitoring (VMS)', 'Voice: Interactive voice assistant (can be enabled or disabled)', 'Support: Lifetime 24/7 U.S.-based support'],
    features: 'The Spectra Launch is USI\'s entry-level TrueAI™ smart cooler, backed by a 3-year warranty and lifetime U.S. support. Six customizable shelves with product pushers, cassette-style removable refrigeration, cashless payments via WeVend or Cantaloupe, real-time smart shopping cart, and an interactive voice assistant. A powerful starting point for operators entering the AI smart cooler market.',
  },
  spectraCore: {
    name: 'Spectra Core Smart Cooler', brand: 'USI — Spectra Series', category: 'AI Smart Cooler', price: '$5,495',
    img: '/static-assets/vvs_product_catalog/images/spectra-core-2.png', images: [],
    specs: ['Part Number: 36710001', 'Warranty: 5 Years', 'Technology: True AI product detection (TrueAI™ computer vision)', 'Screen: 28" full-color advertising video screen', 'Cart: Real-time shopping cart & checkout', 'Trays: Product pushers for optimal merchandising', 'Payment: Cashless — WeVend or Cantaloupe (EMV-compliant)', 'Lock: NAMA-compliant smart lock', 'Telemetry: Full telemetry with remote VMS integration', 'Voice: Interactive voice assistant (can be enabled or disabled)', 'Security: Abnormal order & theft alerts, GPS asset tracking', 'Dimensions: 80.6"H x 28.6"W x 31.9"D — 313 lbs.', 'Electrical: 115 VAC/60Hz, 2.5 AMPS, 1/5 HP', 'Refrigeration: Cassette-style removable refrigeration (R290)', 'Certification: ETL & NAMA', 'Support: Lifetime 24/7 U.S.-based support'],
    features: 'The Spectra Core is a premium AI-powered smart cooler featuring a 28" full-color advertising video screen and real-time shopping cart & checkout for a seamless, modern customer experience. True AI product detection, product pushers for optimal merchandising, and full telemetry with remote VMS integration give operators total visibility. A pullout compressor reduces service time, and machine health alerts plus abnormal order/theft alerts and GPS asset tracking keep equipment secure. Backed by a 5-year warranty for long-term ownership.',
    featureCardsTitle: 'The Most Advanced AI Powered Smart Cooler',
    featureCards: [
      { icon: '💵', title: 'Maximize Revenue at Every Location', body: 'Attract more customers and increase cart size with a premium grab-and-go experience, modern merchandising, and flexible cashless payment options.' },
      { icon: '🧠', title: 'Operate with AI-Driven Visibility', body: 'True AI product detection, live sales data, remote diagnostics, and abnormal order alerts deliver total control across every location.' },
      { icon: '✨', title: 'A Premium Customer Experience', body: 'A real-time shopping cart and checkout, and a 28" advertising video screen create a seamless, modern experience.' },
      { icon: '🛡️', title: 'Built to Last. Backed for the Long Term.', body: 'Durable, field-tested hardware backed by a 5-year warranty simplifies service, sourcing, and long-term ownership.' },
    ],
    pdfHref: '/static-assets/sellsheets/Spectra-Core-Sellsheet.pdf',
    pdfLabel: 'Download Spectra Core Spec Sheet',
  },
  spectraPro: {
    name: 'Spectra Pro Smart Cooler', brand: 'USI — Spectra Series', category: 'AI Smart Cooler', price: '$6,495',
    img: '/static-assets/vvs_product_catalog/images/spectra-pro-2.webp', images: [],
    specs: ['Part Number: 36720003', 'Warranty: 5 Years', 'Technology: True AI product detection (TrueAI™ computer vision)', 'Screen: 30" full-color advertising video screen', 'Door: Interactive LED handle', 'Trays: FIFO pull-out trays with pushers', 'Cart: Real-time smart shopping cart & checkout', 'Payment: Cashless — WeVend or Cantaloupe (EMV-compliant)', 'Lock: NAMA-compliant smart lock', 'Telemetry: Full telemetry with remote VMS integration', 'Voice: Interactive voice assistant (can be enabled or disabled)', 'Security: Abnormal order & theft alerts, GPS asset tracking', 'Dimensions: 82.6"H x 31.5"W x 28.8"D — 443 lbs.', 'Electrical: 115 VAC/60Hz, 2.4 AMPS, 2/7 HP', 'Refrigeration: Cassette-style removable refrigeration (R290)', 'Certification: ETL & NAMA', 'Support: Lifetime 24/7 U.S.-based support'],
    features: 'The Spectra Pro is USI\'s most advanced AI-powered smart cooler, featuring a 30" full-color advertising video screen and an interactive LED handle that attracts attention. True AI product detection, real-time cart and checkout visibility, and full telemetry with remote VMS integration give operators total control across every location. A pullout compressor reduces service time, and machine health alerts plus abnormal order/theft alerts and GPS asset tracking keep equipment secure. Backed by a 5-year warranty for long-term ownership.',
    featureCardsTitle: 'The Most Advanced AI Powered Smart Cooler',
    featureCards: [
      { icon: '💵', title: 'Maximize Revenue at Every Location', body: 'Attract more customers and increase cart size with a premium grab-and-go experience, modern merchandising, and flexible cashless payment options.' },
      { icon: '🧠', title: 'Operate with AI-Driven Visibility', body: 'True AI product detection, live sales data, remote diagnostics, and abnormal order alerts deliver total control across every location.' },
      { icon: '✨', title: 'A Premium Customer Experience', body: 'A real-time shopping cart and checkout, interactive LED handle, and large advertising screen create a seamless, modern experience.' },
      { icon: '🛡️', title: 'Built to Last. Backed for the Long Term.', body: 'Durable, field-tested hardware backed by a 5-year warranty simplifies service, sourcing, and long-term ownership.' },
    ],
    pdfHref: '/static-assets/sellsheets/Spectra-Pro-Sellsheet.pdf',
    pdfLabel: 'Download Spectra Pro Spec Sheet',
  },
  spectraElevate: {
    name: 'Spectra Elevate Smart Cooler', brand: 'USI — Spectra Series', category: 'AI Smart Cooler', price: '$7,995',
    img: '/static-assets/vvs_product_catalog/images/spectra-elevate-1.webp', images: [],
    specs: ['Part Number: 36700001', 'Warranty: 7 Years — industry-leading', 'Technology: TrueAI™ computer vision product recognition', 'Pushers: RTC pushers for fresh food & drinks', 'Cart: Real-time smart shopping cart', 'Loyalty: Integrated loyalty program', 'Payment: Cashless — WeVend or Cantaloupe', 'Lock: NAMA-compliant smart lock', 'Connectivity: Cloud-based remote monitoring (VMS)', 'Voice: Interactive voice assistant (can be enabled or disabled)', 'Security: Real-time theft alerts', 'Tracking: GPS asset tracking', 'Construction: Premium USA-made cooler', 'Support: Lifetime 24/7 U.S.-based hardware support'],
    features: 'The Spectra Elevate is USI\'s flagship — the only model backed by a 7-year warranty and built in the USA. RTC pushers for fresh food and drinks, an integrated loyalty program, real-time theft alerts, and GPS asset tracking make this the most operator-friendly smart cooler on the market. Premium construction, lifetime U.S. hardware support, and every Spectra standard feature included.',
  },
};

const VS_ROWS = [
  { label: 'What It Sells', smart: 'Sells 15,000+ SKUs — drinks, snacks, flowers, fresh produce, even glass or irregular-shaped items', old: 'Limited selection — no glass, fresh produce, or irregular-shaped items' },
  { label: 'Where It Works', smart: 'Works anywhere — offices, dorms, gyms, and more. One person can move it; fits through doors and elevators', old: 'Bulky and heavy — limited to larger or more accessible locations' },
  { label: 'How Customers Buy', smart: 'Customers can grab multiple items at once, spend more per visit, and pay any way (card, Apple Pay, etc.)', old: 'Fixed slots — less flexible and slower to restock' },
  { label: 'How It Restocks', smart: 'Smart app enables remote control, restock alerts, and data-driven product operation analysis', old: 'Complex slot mechanisms — harder to maintain and more prone to failure' },
  { label: 'Machine Design', smart: 'Slot-free design makes it easy to maintain and less likely to break down', old: 'Clumsy design and size limit mobility — frequent maintenance issues' },
  { label: 'User Experience', smart: 'Quick and easy — customers pick items directly, no bending required', old: 'Less user-friendly — items drop behind a door, forcing customers to bend down' },
];

const FAQS = [
  { q: 'What is an AI smart cooler?', a: 'An AI smart cooler is a next-generation unattended retail unit that uses cameras, weight sensors, and AI software to identify what customers take. Customers unlock the cooler with a card or mobile payment, grab their items, and the system charges them automatically when the door closes. No attendant or manual checkout required.' },
  { q: 'How much does a smart cooler cost?', a: 'AI smart coolers from Vital Vending Sales start at $2,999 for the HAHA Mini and range up to $7,995 for the USI Spectra Elevate. USI Spectra models are priced from $4,995 to $7,995. Contact us for current pricing and any ongoing fees or subscription costs tied to the cloud platform.' },
  { q: 'What can I sell in a smart cooler?', a: 'Smart coolers are not limited to food and drinks. The HAHA units can vend almost any item larger than a tennis ball, including beverages, fresh food, snacks, over-the-counter medications, toiletries, electronics accessories, and personal care products.' },
  { q: 'Do smart coolers require Wi-Fi?', a: 'HAHA smart coolers support both Wi-Fi and 4G LTE connectivity. The FLEX model includes built-in cellular so it can operate in locations without reliable Wi-Fi. The cloud dashboard works on any internet-connected device.' },
  { q: 'How is a smart cooler different from a traditional vending machine?', a: 'Traditional vending machines dispense one item at a time through a mechanical selection process. Smart coolers let customers browse and grab items freely just like a store shelf. The AI detects what was taken and charges automatically. Smart coolers hold more variety, support fresh food, and generate higher per-visit revenue.' },
  { q: 'Where are smart coolers a good fit?', a: 'Smart coolers work well in offices, gyms, hotels, apartment buildings, universities, hospitals, airports, and any location that benefits from 24/7 access and a wide product range. They are especially effective in locations where fresh food demand is high or product variety matters.' },
];

function Badge({ label, style = {} }) {
  const defaultStyle = { background: '#D6F0DA', color: '#1a6b2a' };
  return (
    <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded" style={{ ...defaultStyle, ...style }}>{label}</span>
  );
}

function SpecChip({ label }) {
  return <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-md" style={{ background: '#F4F6F8', color: '#3D4D5C' }}>{label}</span>;
}

function ProductCard({ id, img, name, model, tagline, specs, price, badge, badgeStyle, wide, onOpen }) {
  return (
    <div
      role="button" tabIndex={0} aria-label={`Quick view ${name}`}
      onClick={() => onOpen(id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(id); } }}
      className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${wide ? 'sm:col-span-2 lg:col-span-1' : ''}`}
      style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 1px 2px rgba(27,42,74,0.06),0 4px 12px rgba(27,42,74,0.08),0 16px 32px rgba(27,42,74,0.06)', cursor: 'pointer' }}>
      <div className="relative" style={{ height: 220, background: '#F4F6F8' }}>
        <Image src={img} alt={name} fill sizes="(max-width: 639px) 90vw, (max-width: 1279px) 45vw, 23vw" style={{ objectFit: 'contain', mixBlendMode: 'multiply', padding: 12 }} />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge label={badge} style={badgeStyle} />
          <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded" style={{ background: 'rgba(27,42,74,0.08)', color: '#1B2A4A' }}>HAHA</span>
        </div>
        <h3 className="font-bold text-base mb-0.5 leading-snug" style={{ color: '#1B2A4A' }}>{name}</h3>
        {model && <p className="text-xs mb-0.5" style={{ color: '#6B7280' }}>Model: {model}</p>}
        <p className="text-xs mb-3" style={{ color: '#6B7280' }}>{tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {specs.map(s => <SpecChip key={s} label={s} />)}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium" style={{ color: '#6B7280' }}>Starting at</div>
            <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>{price}</div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(id); }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2.5 rounded-lg"
            style={{ background: '#3DB54A', border: 'none', cursor: 'pointer' }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function USICard({ id, img, name, part, tagline, specs, price, badge, badgeStyle, brandLabel = 'USI', onOpen, imgScale = 1 }) {
  return (
    <div
      role="button" tabIndex={0} aria-label={`View ${name} details`}
      onClick={() => onOpen(id)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpen(id); } }}
      className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.08)', boxShadow: '0 1px 2px rgba(27,42,74,0.06),0 4px 12px rgba(27,42,74,0.08),0 16px 32px rgba(27,42,74,0.06)', cursor: 'pointer' }}>
      <div className="relative" style={{ height: 220 * Math.max(1, imgScale), background: '#F4F6F8' }}>
        <Image src={img} alt={name} fill sizes="(max-width: 639px) 90vw, (max-width: 1279px) 45vw, 23vw" style={{ objectFit: 'contain', padding: 12 }} />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge label={badge} style={badgeStyle} />
          <span className="text-xs font-bold uppercase tracking-wide px-2 py-1 rounded" style={{ background: 'rgba(27,42,74,0.08)', color: '#1B2A4A' }}>{brandLabel}</span>
        </div>
        <h3 className="font-bold text-base mb-0.5 leading-snug" style={{ color: '#1B2A4A' }}>{name}</h3>
        {part && <p className="text-xs mb-0.5" style={{ color: '#6B7280' }}>Part {part}</p>}
        <p className="text-xs mb-3" style={{ color: '#6B7280' }}>{tagline}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {specs.map(s => <SpecChip key={s} label={s} />)}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-medium" style={{ color: '#6B7280' }}>Starting at</div>
            <div className="font-black text-xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>{price}</div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(id); }}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2.5 rounded-lg"
            style={{ background: '#3DB54A', border: 'none', cursor: 'pointer' }}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductModal({ id, onClose }) {
  const [activeImg, setActiveImg] = useState(null);
  const p = id ? MODAL_DATA[id] : null;

  if (!p) return null;
  const currentImg = activeImg || p.img;
  const imgDir = '/static-assets/vvs_product_catalog/images/';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(27,42,74,0.55)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="bg-white rounded-2xl overflow-hidden w-full" style={{ maxWidth: 880, maxHeight: '90vh', overflowY: 'auto' }}>
        <div className="flex items-start justify-between p-6 lg:p-8 border-b border-gray-100">
          <div>
            <span className="inline-block text-xs font-bold uppercase rounded-md px-2 py-1 mb-2" style={{ background: '#D6F0DA', color: '#1e7a28', letterSpacing: '0.08em' }}>{p.category}</span>
            <h2 className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>{p.name}</h2>
            <div className="text-sm mt-1" style={{ color: '#6B7280' }}>{p.brand}</div>
          </div>
          <button onClick={onClose} aria-label="Close" className="flex-shrink-0 ml-4 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200" style={{ background: '#F4F6F8', border: 'none', cursor: 'pointer' }}>
            <svg className="w-5 h-5" fill="none" stroke="#3D4D5C" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          <div className="flex flex-col">
            <div className="flex items-center justify-center p-8" style={{ background: '#F4F6F8', minHeight: 260 }}>
              <img src={currentImg} alt={p.name} style={{ maxHeight: 288 * (p.imgScale || 1), width: 'auto', objectFit: 'contain' }} />
            </div>
            {p.images.length > 1 && (
              <div className="flex gap-2 p-3 overflow-x-auto bg-white border-t border-gray-100">
                {p.images.map((filename) => {
                  const src = imgDir + filename;
                  return (
                    <button key={filename} onClick={() => setActiveImg(src)} aria-label={`View image`}
                      className="flex-shrink-0 rounded-lg overflow-hidden"
                      style={{ width: 56, height: 56, border: currentImg === src ? '2px solid #3DB54A' : '2px solid transparent', cursor: 'pointer', padding: 0, background: '#F4F6F8' }}>
                      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="p-6 lg:p-8">
            <div className="mb-6">
              <div className="text-xs font-medium mb-1" style={{ color: '#6B7280' }}>Starting Price</div>
              <div className="font-black text-3xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>{p.price}</div>
            </div>
            <div className="mb-6">
              <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Key Specifications</div>
              <ul className="space-y-2">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm" style={{ color: '#3D4D5C' }}>
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <div className="font-semibold text-sm mb-3" style={{ color: '#1B2A4A' }}>Features</div>
              <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{p.features}</p>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs mb-4" style={{ color: '#6B7280', lineHeight: 1.6 }}>Prices shown are starting MSRP. Contact us for exact quotes, availability, and delivery options to your location.</p>
              <Link href="/#contact" onClick={onClose} className="flex items-center justify-center gap-2 font-bold rounded-xl text-white px-6 py-3 text-sm w-full" style={{ background: 'rgba(61,181,74,0.9)', textDecoration: 'none' }}>
                Get a Quote for This Unit
              </Link>
              <a href="tel:4132823776" className="flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm w-full mt-3" style={{ color: '#1B2A4A', background: '#F4F6F8', textDecoration: 'none' }}>
                Call (413) 282-3776
              </a>
              {p.pdfHref && (
                <a href={p.pdfHref} download target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3 text-sm w-full mt-3" style={{ color: '#3DB54A', background: 'transparent', border: '1.5px solid #D6F0DA', textDecoration: 'none' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" /></svg>
                  {p.pdfLabel || 'Download Spec Sheet'}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Why HAHA — feature cards */}
        {p.featureCards && (
          <div className="p-6 lg:p-8 border-t border-gray-100" style={{ background: '#F4F6F8' }}>
            <div className="font-semibold text-sm mb-4" style={{ color: '#1B2A4A' }}>{p.featureCardsTitle || 'Why This Unit — Built Different. Built Better.'}</div>
            <div className="grid sm:grid-cols-2 gap-3">
              {p.featureCards.map((f) => (
                <div key={f.title} className="rounded-xl p-4" style={{ background: '#fff' }}>
                  <div className="text-xl mb-2">{f.icon}</div>
                  <div className="font-bold text-sm mb-1" style={{ color: '#1B2A4A' }}>{f.title}</div>
                  <p className="text-xs" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Operating costs */}
        {p.costRows && (
          <div className="p-6 lg:p-8 border-t border-gray-100">
            <div className="font-semibold text-sm mb-4" style={{ color: '#1B2A4A' }}>What Does It Cost to Operate?</div>
            <div className="rounded-xl overflow-hidden border border-gray-200" style={{ overflowX: 'auto' }}>
              <table className="w-full text-sm">
                <thead style={{ background: '#1B2A4A', color: '#fff' }}>
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-xs">Cost Item</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs">Amount</th>
                    <th className="text-left px-4 py-3 font-semibold text-xs hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {p.costRows.map((row, i) => (
                    <tr key={row[0] + i} style={{ borderBottom: '1px solid #f3f4f6', background: i % 2 === 1 ? '#f9fafb' : 'transparent' }}>
                      <td className="px-4 py-3 font-medium text-xs" style={{ color: '#1B2A4A' }}>{row[0]}</td>
                      <td className="px-4 py-3 font-bold text-xs" style={{ color: '#1B2A4A' }}>{row[1]}</td>
                      <td className="px-4 py-3 text-xs hidden sm:table-cell" style={{ color: '#3D4D5C' }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {p.costNote && <p className="text-xs mt-3" style={{ color: '#6B7280', lineHeight: 1.6 }}>{p.costNote}</p>}
          </div>
        )}

        {/* VS comparison chart */}
        {p.comparisonImage && (
          <div className="p-6 lg:p-8 border-t border-gray-100" style={{ background: '#F4F6F8' }}>
            <div className="font-semibold text-sm mb-4" style={{ color: '#1B2A4A' }}>HAHA Smart Vending vs. Traditional Vending</div>
            <img src={p.comparisonImage} alt="HAHA Smart Vending vs Traditional Vending comparison chart" style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }} />
          </div>
        )}
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: 'rgba(27,42,74,0.08)' }}>
      <button onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-center justify-between gap-4 font-semibold text-sm"
        style={{ color: '#1B2A4A', background: 'none', border: 'none', cursor: 'pointer' }}>
        {q}
        <svg className="flex-shrink-0 w-5 h-5 transition-transform duration-200" style={{ color: '#6B7280', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="pb-5 text-sm" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>{a}</div>}
    </div>
  );
}

export default function SmartCoolers() {
  const [openId, setOpenId] = useState(null);
  return (
    <>
      <ProductModal id={openId} onClose={() => setOpenId(null)} />
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden py-20 lg:py-32" style={{ background: '#1B2A4A', backgroundImage: 'radial-gradient(ellipse 60% 70% at 20% 50%,rgba(61,181,74,0.13) 0%,transparent 65%),radial-gradient(ellipse 70% 50% at 85% 60%,rgba(36,53,96,0.8) 0%,transparent 55%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-5" style={{ background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', color: '#fff', borderRadius: 4 }}>
              AI-Powered Unattended Retail
            </div>
            <h1 className="font-black text-white mb-5" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)', letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              AI Smart Coolers<br /><span style={{ color: '#3DB54A' }}>for the Northeast</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: 580 }}>
              The future of unattended retail. AI-powered smart coolers let customers grab what they need and go, while you manage inventory, pricing, and analytics from anywhere.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white" style={{ background: '#3DB54A' }}>
                Browse Smart Coolers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold" style={{ border: '1.5px solid rgba(255,255,255,0.32)', color: '#fff' }}>Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 text-sm font-medium" style={{ color: '#3D4D5C' }}>
            {['AI-Powered Technology', 'Cashless Payments', 'Remote Cloud Management', 'Avg $4.55 Per Transaction', 'Serving the Northeast'].map(t => (
              <div key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CATALOG ===== */}
      <section id="catalog" className="py-16 lg:py-24" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-14">
            <div className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3" style={{ background: '#D6F0DA', color: '#1a6b2a', borderRadius: 4 }}>AI Smart Cooler Lineup</div>
            <h2 className="font-black text-3xl mb-3" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.2 }}>Proven Smart Cooler Solutions</h2>
            <p className="text-base" style={{ color: '#3D4D5C', lineHeight: 1.7, maxWidth: 640 }}>HAHA Smart Coolers are our most popular AI-powered solution, with over 100 units deployed throughout New England. We&apos;ve seen firsthand how they perform in the field and have built our installation, training, and support around helping customers succeed with the platform. We also offer additional smart cooler solutions, including USI Spectra and other select manufacturers, to ensure every customer has the right fit for their business.</p>
          </div>

          {/* HAHA */}
          <div className="mb-3 pt-2 pb-1">
            <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: '#6B7280' }}>Brand</div>
            <div className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>HAHA Smart Coolers</div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {HAHA_PRODUCTS.map(p => <ProductCard key={p.name} {...p} onOpen={setOpenId} />)}
          </div>

          {/* USI Spectra */}
          <div className="mb-3 pt-8 pb-1 border-t mt-4" style={{ borderColor: '#e5e7eb' }}>
            <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: '#6B7280' }}>Brand</div>
            <div className="font-black text-2xl" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>USI Spectra Smart Coolers</div>
            <p className="text-sm mt-1" style={{ color: '#3D4D5C' }}>Industry-leading warranty coverage — up to 7 years. Powered by TrueAI™ computer vision.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {USI_PRODUCTS.map(p => <USICard key={p.name} {...p} onOpen={setOpenId} />)}
          </div>

        </div>
      </section>

      {/* ===== VS TABLE ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest mb-3" style={{ background: '#D6F0DA', color: '#1a6b2a', borderRadius: 4 }}>Why Make the Switch</div>
            <h2 className="font-black text-3xl mb-4" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.2 }}>AI Smart Vending vs. Traditional Vending</h2>
            <p style={{ color: '#3D4D5C', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>Side by side, the difference is clear. More product flexibility, fewer service calls, higher revenue per visit.</p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(27,42,74,0.1)', boxShadow: '0 4px 32px rgba(27,42,74,0.12)' }}>
            {/* Header */}
            <div className="flex items-center justify-center gap-2 py-4 px-3 md:grid md:grid-cols-[1fr_160px_1fr] md:gap-0 md:py-0" style={{ background: '#fff' }}>
              <div className="flex-1 flex items-center justify-center md:p-5">
                <span className="text-xs md:text-base px-3 py-2 md:px-[22px] md:py-[10px]" style={{ background: '#FFF3CD', border: '2px solid #F5A623', borderRadius: 999, fontWeight: 800, color: '#E59400' }}>AI Smart Vending</span>
              </div>
              <div className="flex items-center justify-center md:p-5">
                <span className="text-2xl md:text-[2.5rem]" style={{ fontFamily: 'Georgia,serif', fontWeight: 900, color: '#1B2A4A', lineHeight: 1 }}>VS</span>
              </div>
              <div className="flex-1 flex items-center justify-center md:p-5">
                <span className="text-xs md:text-base px-3 py-2 md:px-[22px] md:py-[10px]" style={{ background: '#F4F6F8', border: '2px solid #6B7280', borderRadius: 999, fontWeight: 600, color: '#3D4D5C' }}>Old Vending Machines</span>
              </div>
            </div>
            {VS_ROWS.map(row => (
              <div key={row.label} className="grid grid-cols-1 md:grid-cols-[1fr_160px_1fr]" style={{ borderTop: '1px dashed rgba(27,42,74,0.15)' }}>
                <div className="order-2 md:order-none flex items-center gap-3 p-3.5" style={{ background: '#FFFBEE' }}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#F5A623' }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.5, margin: 0 }}>{row.smart}</p>
                </div>
                <div className="order-1 md:order-none flex items-center justify-center p-2.5 md:p-3.5 text-center font-bold text-xs md:text-sm" style={{ color: '#1B2A4A', background: 'rgba(27,42,74,0.03)' }}>{row.label}</div>
                <div className="order-3 md:order-none flex items-center gap-3 p-3.5" style={{ background: '#F9F9F9' }}>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: '#D1D5DB' }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                  </div>
                  <p className="text-sm" style={{ color: '#3D4D5C', lineHeight: 1.5, margin: 0 }}>{row.old}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white" style={{ background: '#3DB54A' }}>Get a Free Consultation</Link>
          </div>
        </div>
      </section>

      {/* ===== WHY SMART COOLERS ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ background: '#D6F0DA', color: '#1a6b2a', borderRadius: 4 }}>Why Smart Coolers</div>
              <h2 className="font-black text-3xl mb-5" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.2 }}>More Revenue. Less Work. Smarter Vending.</h2>
              <p className="mb-8" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Traditional vending machines are limited by selections and product types. AI smart coolers change the game. Customers spend nearly double the typical vending transaction, they can grab anything from snacks to medications to electronics, and you manage the entire operation from your phone.</p>
              <ul className="space-y-4">
                {[
                  { title: 'Higher Average Transaction', desc: 'HAHA Smart Cooler customers spend an average of $4.55 per visit, nearly double a traditional vending machine.' },
                  { title: 'Sell Virtually Anything', desc: 'Not limited to snacks and drinks. Stock medications, toiletries, apparel, electronics, and more in the same unit.' },
                  { title: 'Manage From Anywhere', desc: 'Real-time inventory tracking, pricing control, temperature monitoring, and sales data from a cloud dashboard on any device.' },
                  { title: 'Frictionless Customer Experience', desc: 'Tap to unlock, grab items, close the door. The AI charges automatically. No fumbling with buttons or coin slots.' },
                ].map(item => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: '#D6F0DA' }}>
                      <svg className="w-3.5 h-3.5" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#1B2A4A' }}>{item.title}</div>
                      <div className="text-sm mt-0.5" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm" style={{ background: '#3DB54A' }}>Get a Free Consultation</Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(27,42,74,0.14)' }}>
                <Image src="/static-assets/MoreVendingMachinesandContent/HAHA Smart Cooler In Gym .jpg" alt="HAHA AI smart cooler in a gym" width={900} height={698} loading="lazy" sizes="(max-width: 1023px) 90vw, 45vw" className="w-full h-auto object-cover" style={{ maxHeight: 480 }} />
              </div>
              <div className="absolute hidden lg:block bg-white rounded-xl p-4" style={{ bottom: -20, left: -20, boxShadow: '0 4px 24px rgba(27,42,74,0.12)' }}>
                <div className="font-black text-3xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em' }}>$4.55</div>
                <div className="text-xs font-medium" style={{ color: '#6B7280' }}>Avg transaction value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LEAD CAPTURE ===== */}
      <section className="py-16 lg:py-24" style={{ background: '#1B2A4A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex px-3 py-1.5 text-xs font-bold uppercase tracking-widest mb-4" style={{ background: 'rgba(61,181,74,0.25)', border: '1px solid rgba(61,181,74,0.4)', color: '#fff', borderRadius: 4 }}>Free Consultation</div>
              <h2 className="font-black text-white mb-5" style={{ fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}>Ready to Add a Smart Cooler to Your Route?</h2>
              <p className="mb-8 text-base" style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Our team will walk you through which unit fits your location, product mix, and revenue goals. No pressure, no obligation.</p>
              <ul className="space-y-4">
                {['Free, no-obligation equipment assessment', 'We respond within one business day', '15+ years placing machines in the Northeast'].map(t => (
                  <li key={t} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a href="tel:4132823776" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm" style={{ border: '1.5px solid rgba(255,255,255,0.32)', color: '#fff' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  (413) 282-3776
                </a>
              </div>
            </div>
            <div className="rounded-2xl p-8 lg:p-10 bg-white" style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.25)' }}>
              <h3 className="font-black text-xl mb-1" style={{ color: '#1B2A4A', letterSpacing: '-0.02em' }}>Request Info</h3>
              <p className="text-sm mb-6" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>Fill out the form and we&apos;ll be in touch within one business day.</p>
              <SmartCoolerForm />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4" style={{ background: '#D6F0DA', color: '#1a6b2a', borderRadius: 4 }}>FAQ</div>
            <h2 className="font-black text-3xl" style={{ color: '#1B2A4A', letterSpacing: '-0.03em', lineHeight: 1.2 }}>Common Questions About AI Smart Coolers</h2>
          </div>
          <div>
            {FAQS.map(f => <FAQItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function SmartCoolerForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ first_name: '', last_name: '', email: '', phone: '', message: '' });
  const inputCls = 'w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-shadow duration-200';
  const inputStyle = { borderColor: '#e5e7eb', color: '#1B2A4A' };

  if (submitted) return (
    <div className="text-center py-6">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: '#D6F0DA' }}>
        <svg className="w-6 h-6" style={{ color: '#3DB54A' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
      </div>
      <div className="font-bold text-xl mb-1" style={{ color: '#1B2A4A' }}>Request Sent!</div>
      <div className="text-sm" style={{ color: '#6B7280' }}>We&apos;ll be in touch within 1 business day.</div>
    </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    await submitToHubSpot({
      firstname: data.first_name,
      lastname: data.last_name,
      email: data.email,
      phone: data.phone,
      i_m_interested_in: 'smart-cooler',
      message: data.message,
    });
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>First Name</label><input type="text" required placeholder="John" value={data.first_name} onChange={e => setData(p => ({ ...p, first_name: e.target.value }))} className={inputCls} style={inputStyle} /></div>
        <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Last Name</label><input type="text" required placeholder="Smith" value={data.last_name} onChange={e => setData(p => ({ ...p, last_name: e.target.value }))} className={inputCls} style={inputStyle} /></div>
      </div>
      <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Email Address</label><input type="email" required placeholder="john@example.com" value={data.email} onChange={e => setData(p => ({ ...p, email: e.target.value }))} className={inputCls} style={inputStyle} /></div>
      <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Phone Number</label><input type="tel" placeholder="(413) 555-0100" value={data.phone} onChange={e => setData(p => ({ ...p, phone: e.target.value }))} className={inputCls} style={inputStyle} /></div>
      <div><label className="block text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: '#1B2A4A' }}>Tell Us About Your Location</label><textarea rows={3} placeholder="E.g. office of 50 people, looking for a smart cooler..." value={data.message} onChange={e => setData(p => ({ ...p, message: e.target.value }))} className={inputCls} style={{ ...inputStyle, resize: 'none' }} /></div>
      <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-white" style={{ background: '#3DB54A' }}>
        Send My Request
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
      <p className="text-xs text-center" style={{ color: '#6B7280' }}>We respond within one business day. No spam, ever.</p>
    </form>
  );
}
