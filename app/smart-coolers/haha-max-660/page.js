import ProductDetailLayout from '../../../components/ProductDetailLayout';

export const metadata = {
  title: 'HAHA Max 660 AI Smart Cooler with Screen | Vital Vending Sales',
  description: 'HAHA Max 660 AI smart cooler at $4,999. Max 620 capacity plus a built-in digital display screen for advertising. 420-bottle capacity. Get a quote today.',
};

export default function Page() {
  return (
    <ProductDetailLayout
      name="HAHA Max 660"
      tagline="The HAHA Max 660 takes the high-volume Max 620 and adds a built-in digital display screen on top — giving you a powerful tool for advertising, promotion, and customer engagement. Advertise your own products, partner brands, or anything else that drives revenue. Same great AI platform, taller, and more attention-grabbing."
      price="$4,999"
      image="/static-assets/MoreVendingMachinesandContent/Max 620s Details.png"
      specs={[
        ['Exterior Dimensions (W x D x H)', '31.5" x 26.4" x 85.8"'],
        ['Shelves', '6 shelves'],
        ['Approximate Capacity', '~420 bottles'],
        ['Display Screen', 'Built-in digital display'],
        ['Connectivity', 'SIM or WiFi'],
        ['Payment', 'Card, Apple Pay, Google Pay'],
      ]}
      features={[
        { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
        { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
        { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns limited to a few core components, dramatically reducing downtime.' },
        { icon: '📺', title: 'Built-In Digital Screen', body: 'Play your video content, promotions, or brand messages directly on the unit. The Max 660 screen makes the machine impossible to ignore in any location.' },
        { icon: '📦', title: 'Product Flexibility', body: 'Sell beverages, snacks, fresh food, and more — all in the same unit. Not restricted by coils or trays.' },
        { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded door with piston lock closes and secures every single time. Outperforms comparable designs on the market.' },
      ]}
      costRows={[
        ['Monthly Platform Fee', '$40/mo', 'Standard (SIM connectivity)'],
        ['Monthly Platform Fee', '$25/mo', 'WiFi via router'],
        ['WiFi Router Setup', '~$30', 'One-time, available on Amazon'],
        ['Transaction Fee', '$0.05', 'Per transaction (HAHA platform)'],
        ['Credit Card Processing', '5.95%', 'Standard vending industry CC rate'],
      ]}
      costNote="SIM connectivity is available at $40/month and is the most reliable option overall. WiFi connectivity is available at $25/month using a router available on Amazon for approximately $30 — setup takes about 20 minutes."
      pdfHref="/static-assets/MoreVendingMachinesandContent/APP Instructions (1) (1).pdf"
      comparisonImage="/static-assets/MoreVendingMachinesandContent/Pros of smart vending VS. Traditional Vending .png"
      related={[
        { href: '/smart-coolers/haha-max-620', img: '/static-assets/MoreVendingMachinesandContent/Max 620 Details.png', name: 'HAHA Max 620', price: '$4,799' },
        { href: '/smart-coolers/haha-ultra-double-door', img: '/static-assets/MoreVendingMachinesandContent/Double Door Details.png', name: 'HAHA Ultra Double Door', model: 'US1200CT', price: '$6,999' },
      ]}
    />
  );
}
