import ProductDetailLayout from '../../../components/ProductDetailLayout';

export const metadata = {
  title: 'HAHA Freezer Smart Cooler (US550FT) | Vital Vending Sales',
  description: 'HAHA Freezer AI smart cooler (US550FT) at $4,799. Frozen and refrigerated product vending on the same AI platform. 384-item capacity. Get a quote.',
};

export default function Page() {
  return (
    <ProductDetailLayout
      name="HAHA Freezer"
      model="US550FT"
      tagline="The HAHA Freezer brings AI-powered unattended retail to frozen and refrigerated products. Same intuitive grab-and-go platform as the rest of the HAHA lineup — now for ice cream, frozen meals, cold packs, and beyond. Ideal for gyms, convenience locations, and break rooms with frozen demand."
      price="$4,799"
      image="/static-assets/MoreVendingMachinesandContent/Freezer 550 Details.png"
      specs={[
        ['Exterior Dimensions (W x D x H)', '27.6" x 35.8" x 80.4"'],
        ['Shelves', '6 shelves'],
        ['Approximate Capacity', '~384 items'],
        ['Temperature Mode', 'Freezer'],
        ['Connectivity', 'SIM or WiFi'],
        ['Payment', 'Card, Apple Pay, Google Pay'],
      ]}
      features={[
        { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
        { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly fees, and minimal service requirements.' },
        { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns are limited to a few core components, dramatically reducing downtime.' },
        { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping drives higher average transaction values.' },
        { icon: '📦', title: 'Product Flexibility', body: 'Sell frozen meals, ice cream, cold packs, beverages, snacks, and more — all in the same unit.' },
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
        { href: '/smart-coolers/haha-pro', img: '/static-assets/MoreVendingMachinesandContent/Pro Details.png', name: 'HAHA Pro', model: 'US542CT', price: '$4,399' },
        { href: '/smart-coolers/haha-max-620', img: '/static-assets/MoreVendingMachinesandContent/Max 620 Details.png', name: 'HAHA Max 620', price: '$4,799' },
      ]}
    />
  );
}
