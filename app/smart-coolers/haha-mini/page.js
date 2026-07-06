import ProductDetailLayout from '../../../components/ProductDetailLayout';

export const metadata = {
  title: 'HAHA Mini Smart Cooler (US360C) | Vital Vending Sales',
  description: 'HAHA Mini AI smart cooler (US360C) starting at $2,999. Compact, AI-powered, 252-bottle capacity. Perfect for offices, gyms, and smaller locations. Get a quote.',
};

export default function Page() {
  return (
    <ProductDetailLayout
      name="HAHA Mini"
      model="US360C"
      tagline="The HAHA Mini is the most compact unit in the HAHA lineup — ideal for smaller offices, lobbies, or any location where footprint matters but revenue potential shouldn't be sacrificed. Fully AI-powered, cashless, and cloud-managed."
      price="$2,999"
      image="/static-assets/MoreVendingMachinesandContent/Mini Details.png"
      specs={[
        ['Exterior Dimensions (W x D x H)', '22.8" x 26" x 76"'],
        ['Shelves', '6 shelves'],
        ['Approximate Capacity', '~252 bottles'],
        ['Connectivity', 'SIM or WiFi'],
        ['Payment', 'Card, Apple Pay, Google Pay'],
      ]}
      features={[
        { icon: '🧠', title: 'AI Recognition That Works', body: 'Extremely accurate with standard products. No weights, no recalibration required. Computer vision identifies what was taken — reliable in real-world conditions.' },
        { icon: '💰', title: 'Most Economical on the Market', body: 'Lowest total cost of ownership among AI smart coolers. Competitive hardware pricing, low monthly platform fees, and minimal service requirements keep operating costs down.' },
        { icon: '🔧', title: 'Cut Service Calls by 66%', body: 'No motors, coils, harnesses, keypads, or displays to fail. Service concerns are limited to just a few core components, dramatically reducing downtime and technician visits.' },
        { icon: '📈', title: 'Higher Consumer Spend', body: 'Customers consistently spend more from smart coolers. Open-door grab-and-go shopping behavior drives higher average transaction values compared to traditional vending.' },
        { icon: '📦', title: 'Product Flexibility', body: 'Sell beverages, snacks, fresh food, and more — all in the same unit. Not restricted by coils or trays, so you can stock multiple sizes and categories freely.' },
        { icon: '🔒', title: 'Superior Locking System', body: 'Spring-loaded door with piston lock closes and secures every single time. Simple, effective, and reliable — outperforms comparable designs on the market.' },
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
        { href: '/smart-coolers/haha-pro', img: '/static-assets/MoreVendingMachinesandContent/Pro Details.png', name: 'HAHA Pro', model: 'US542CT', price: '$4,399' },
      ]}
    />
  );
}
