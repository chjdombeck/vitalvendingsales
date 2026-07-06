import ProductDetailLayout from '../../../components/ProductDetailLayout';

export const metadata = {
  title: 'HAHA Max 620 AI Smart Cooler — $4,799 | Vital Vending Sales',
  description: 'HAHA Max 620 AI smart cooler at $4,799. High-volume single-door flagship with 420-bottle capacity and 6 shelves. Best for busy locations. Get a quote.',
};

export default function Page() {
  return (
    <ProductDetailLayout
      name="HAHA Max 620"
      tagline="The HAHA Max 620 is built for locations that need maximum capacity in a single-door form factor. At 420 bottles across 6 shelves, this is the go-to unit for high-traffic offices, warehouses, gyms, and any site where restocking frequency matters. Same AI platform, bigger results."
      price="$4,799"
      image="/static-assets/MoreVendingMachinesandContent/Max 620 Details.png"
      specs={[
        ['Exterior Dimensions (W x D x H)', '31.5" x 26.4" x 79.5"'],
        ['Shelves', '6 shelves'],
        ['Approximate Capacity', '~420 bottles'],
        ['Connectivity', 'SIM or WiFi'],
        ['Payment', 'Card, Apple Pay, Google Pay'],
      ]}
      features={[
        { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
        { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
        { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns limited to a few core components, dramatically reducing downtime.' },
        { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping drives higher average transaction values.' },
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
        { href: '/smart-coolers/haha-max-660', img: '/static-assets/MoreVendingMachinesandContent/Max 620s Details.png', name: 'HAHA Max 660', price: '$4,999' },
        { href: '/smart-coolers/haha-pro', img: '/static-assets/MoreVendingMachinesandContent/Pro Details.png', name: 'HAHA Pro', model: 'US542CT', price: '$4,399' },
      ]}
    />
  );
}
