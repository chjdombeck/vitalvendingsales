export const metadata = {
  title: 'Privacy Policy | Vital Vending Sales',
  description: 'Privacy Policy for Vital Vending Sales. Learn how we collect, use, and protect your personal information.',
};

const h2 = { fontSize: '1.25rem', fontWeight: 700, color: '#1B2A4A', marginTop: '2rem', marginBottom: '0.75rem' };
const p = { fontSize: '0.9375rem', color: '#3D4D5C', lineHeight: 1.75, marginBottom: '0.75rem' };
const ul = { listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' };
const a = { color: '#3DB54A', textDecoration: 'underline' };

export default function PrivacyPolicy() {
  return (
    <>
      <section className="py-14 lg:py-20 border-b border-gray-200" style={{ background: '#F4F6F8' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase mb-3" style={{ color: '#3DB54A', letterSpacing: '0.12em' }}>Legal</p>
          <h1 className="font-black mb-3" style={{ color: '#1B2A4A', fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-0.03em' }}>Privacy Policy</h1>
          <p className="text-sm" style={{ color: '#6B7280' }}>Last updated: June 18, 2026 &nbsp;|&nbsp; Vital Vending Sales, Ludlow, MA</p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p style={p}>Vital Vending Sales (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website at <a href="https://www.vitalvendingsales.com" style={a}>www.vitalvendingsales.com</a>. This Privacy Policy explains what personal information we collect, how we use it, and your rights regarding that information. By using our website you agree to the practices described in this policy.</p>

          <h2 style={h2}>1. Information We Collect</h2>
          <p style={p}>We collect information you provide directly when you:</p>
          <ul style={ul}>
            <li style={p}>Fill out a contact or consultation request form (name, email address, phone number, and message)</li>
            <li style={p}>Send us an email directly</li>
            <li style={p}>Purchase vending parts through our website</li>
          </ul>
          <p style={p}>We do not use cookies, tracking pixels, or analytics tools at this time. We do not collect any information automatically when you browse the site.</p>

          <h2 style={h2}>2. How We Use Your Information</h2>
          <p style={p}>We use the information you provide solely to:</p>
          <ul style={ul}>
            <li style={p}>Respond to your consultation request or inquiry</li>
            <li style={p}>Process and fulfill parts orders</li>
            <li style={p}>Contact you about your order or request</li>
          </ul>
          <p style={p}>We do not use your information for advertising, profiling, or any automated decision-making.</p>

          <h2 style={h2}>3. Payment Processing</h2>
          <p style={p}>All payment processing on this website is handled by <strong>Stripe</strong>, a PCI-compliant third-party payment processor. We never see, store, or transmit your full credit card number, CVV, or billing details. When you enter payment information, it goes directly to Stripe&apos;s secure servers. Stripe&apos;s privacy policy is available at <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={a}>stripe.com/privacy</a>.</p>

          <h2 style={h2}>4. Information Sharing</h2>
          <p style={p}>We do not sell, rent, or share your personal information with any third parties for their marketing purposes. We will never sell your data. We may share your information only in the following limited circumstances:</p>
          <ul style={ul}>
            <li style={p}><strong>Service providers:</strong> We use Stripe for payment processing and HubSpot as our customer relationship management (CRM) platform to manage consultation requests and inquiries submitted through our contact forms. These providers receive only the information necessary to process your transaction or request.</li>
            <li style={p}><strong>Legal requirements:</strong> If required by law, court order, or government authority, we may disclose information as legally required.</li>
          </ul>

          <h2 style={h2}>5. Data Retention</h2>
          <p style={p}>Contact form submissions are stored in our CRM and retained only as long as necessary to respond to your inquiry and maintain our business relationship with you. Order information is retained for the period required by applicable tax and business record laws (typically 7 years).</p>

          <h2 style={h2}>6. Your Rights</h2>
          <p style={p}>Depending on your location, you may have rights to:</p>
          <ul style={ul}>
            <li style={p}>Access the personal information we hold about you</li>
            <li style={p}>Request correction of inaccurate information</li>
            <li style={p}>Request deletion of your personal information</li>
            <li style={p}>Object to or restrict processing of your information</li>
          </ul>
          <p style={p}>To exercise any of these rights, contact us at <a href="mailto:info@vitalvendingsales.com" style={a}>info@vitalvendingsales.com</a>. We will respond within 30 days.</p>

          <h2 style={h2}>7. California Privacy Rights (CCPA)</h2>
          <p style={p}>If you are a California resident, you have the right to know what personal information we collect, to request deletion of that information, and to opt out of the sale of your personal information. We do not sell personal information. To submit a request, email <a href="mailto:info@vitalvendingsales.com" style={a}>info@vitalvendingsales.com</a>.</p>

          <h2 style={h2}>8. Children&apos;s Privacy</h2>
          <p style={p}>Our website is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will delete it promptly.</p>

          <h2 style={h2}>9. Third-Party Links</h2>
          <p style={p}>Our site may contain links to third-party websites (e.g., Google Maps, Stripe). We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any information.</p>

          <h2 style={h2}>10. Security</h2>
          <p style={p}>Our website is served over HTTPS. Contact form submissions are transmitted securely to our CRM provider, HubSpot. Payment data is handled exclusively by Stripe using industry-standard encryption.</p>

          <h2 style={h2}>11. Changes to This Policy</h2>
          <p style={p}>We may update this Privacy Policy from time to time. We will post any changes on this page with an updated date. Continued use of the site after changes are posted constitutes your acceptance of the revised policy.</p>

          <h2 style={h2}>12. Contact Us</h2>
          <p style={p}>If you have questions about this Privacy Policy or our privacy practices, contact us at:</p>
          <ul style={ul}>
            <li style={p}><strong>Vital Vending Sales</strong></li>
            <li style={p}>15 Dana Way, Ludlow, MA 01056</li>
            <li style={p}><a href="mailto:info@vitalvendingsales.com" style={a}>info@vitalvendingsales.com</a></li>
            <li style={p}>(413) 282-3776</li>
          </ul>

        </div>
      </section>
    </>
  );
}
