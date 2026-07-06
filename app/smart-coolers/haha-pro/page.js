import ProductDetailLayout from '../../../components/ProductDetailLayout';

export const metadata = {
  title: 'HAHA Pro Smart Cooler (US542CT) | Vital Vending Sales',
  description: 'HAHA Pro AI smart cooler (US542CT) at $4,399. Full-size, 378-bottle capacity, avg $4.55 per transaction. The top-selling HAHA model. Get a quote today.',
};

export default function Page() {
  return (
    <ProductDetailLayout
      name="HAHA Pro"
      model="US542CT"
      tagline="The HAHA Pro is the workhorse of the lineup — a full-size AI smart cooler that holds 378 bottles across 6 shelves and fits into virtually any commercial location. Proven to average $4.55 per customer transaction, making it one of the strongest ROI units VVS carries."
      price="$4,399"
      image="/static-assets/MoreVendingMachinesandContent/Pro Details.png"
      specs={[
        ['Exterior Dimensions (W x D x H)', '29.5" x 25.6" x 79.5"'],
        ['Shelves', '6 shelves'],
        ['Approximate Capacity', '~378 bottles'],
        ['Connectivity', 'SIM or WiFi'],
        ['Payment', 'Card, Apple Pay, Google Pay'],
      ]}
      features={[
        { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
        { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
        { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns are limited to a few core components, dramatically reducing downtime.' },
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
        { href: '/smart-coolers/haha-plus', img: '/static-assets/MoreVendingMachinesandContent/Pus 440 Details.png', name: 'HAHA Plus', model: 'US440CT', price: '$3,399' },
        { href: '/smart-coolers/haha-max-620', img: '/static-assets/MoreVendingMachinesandContent/Max 620 Details.png', name: 'HAHA Max 620', price: '$4,799' },
      ]}
    />
  );
}
