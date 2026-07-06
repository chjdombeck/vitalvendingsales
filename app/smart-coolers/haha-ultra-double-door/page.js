import ProductDetailLayout from '../../../components/ProductDetailLayout';

export const metadata = {
  title: 'HAHA Ultra Double Door (US1200CT) — AI Smart Cooler | VVS',
  description: 'HAHA Ultra Double Door AI smart cooler (US1200CT) at $6,999. 756-bottle capacity, 12 shelves, dual door. Built for high-volume locations. Get a quote from Vital Vending Sales.',
};

export default function Page() {
  return (
    <ProductDetailLayout
      name="HAHA Ultra Double Door"
      model="US1200CT"
      tagline="The HAHA Ultra Double Door is the flagship of the entire HAHA lineup — a wide-format, dual-door AI smart cooler purpose-built for the highest-volume locations. With 756-bottle capacity across 12 shelves, this unit is ideal for hospitals, airports, universities, large corporate campuses, and anywhere that demands maximum throughput around the clock."
      price="$6,999"
      image="/static-assets/MoreVendingMachinesandContent/Double Door Details.png"
      specs={[
        ['Exterior Dimensions (W x D x H)', '53.9" x 28.0" x 79.5"'],
        ['Doors', 'Double door'],
        ['Shelves', '12 shelves'],
        ['Approximate Capacity', '~756 bottles'],
        ['Connectivity', 'SIM or WiFi'],
        ['Payment', 'Card, Apple Pay, Google Pay'],
      ]}
      features={[
        { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
        { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
        { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns limited to a few core components, dramatically reducing downtime.' },
        { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping drives higher average transaction values.' },
        { icon: '📦', title: 'Double the Capacity', body: '756 bottles, 12 shelves, two doors. The Ultra Double Door handles locations that other units can’t — maximizing restocking intervals and revenue per visit.' },
        { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded doors with piston locks close and secure every single time. Outperforms comparable designs on the market.' },
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
        { href: '/smart-coolers/haha-max-620', img: '/static-assets/MoreVendingMachinesandContent/Max 620 Details.png', name: 'HAHA Max 620', price: '$4,799' },
      ]}
    />
  );
}
