export const metadata = {
  title: 'Terms of Service | Vital Vending Sales',
  description: 'Terms of Service for Vital Vending Sales — governing use of our website, consultation forms, and vending parts store.',
};

const h2 = { fontSize: '1.25rem', fontWeight: 700, color: '#1B2A4A', marginTop: '2rem', marginBottom: '0.75rem' };
const p = { fontSize: '0.9375rem', color: '#3D4D5C', lineHeight: 1.75, marginBottom: '0.75rem' };
const ul = { listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' };
const a = { color: '#3DB54A', textDecoration: 'underline' };
const strongCaps = { fontSize: '0.9375rem', color: '#1B2A4A', lineHeight: 1.75, marginBottom: '0.75rem', fontWeight: 600 };
const hr = { border: 'none', borderTop: '1px solid #E5E7EB', margin: '2rem 0' };

export default function TermsOfService() {
  return (
    <>
      <section className="py-14 lg:py-20 border-b border-gray-200" style={{ background: '#F4F6F8' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase mb-3" style={{ color: '#3DB54A', letterSpacing: '0.12em' }}>Legal</p>
          <h1 className="font-black mb-3" style={{ color: '#1B2A4A', fontSize: 'clamp(1.8rem,3vw,2.5rem)', letterSpacing: '-0.03em' }}>Terms of Service</h1>
          <p className="text-sm" style={{ color: '#6B7280' }}>Last updated: July 6, 2026 &nbsp;|&nbsp; Vital Vending Sales, Ludlow, MA</p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p style={p}>Welcome to Vital Vending Sales LLC (&quot;VVS,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your access to and use of the website at <a href="https://www.vitalvendingsales.com" style={a}>www.vitalvendingsales.com</a> (the &quot;Site&quot;), including any consultation request forms, contact forms, vending parts store, and content available on the Site (collectively, the &quot;Services&quot;). By accessing or using the Site, submitting a form, or purchasing parts through our online store, you agree to be bound by these Terms. If you do not agree, please do not use the Site.</p>

          <p style={p}>These Terms should be read together with our <a href="/privacy-policy" style={a}>Privacy Policy</a>, which explains how we collect, use, and protect your information and is incorporated into these Terms by reference.</p>

          <hr style={hr} />

          <h2 style={h2}>1. Who We Are</h2>
          <p style={p}>Vital Vending Sales is a vending machine, AI smart cooler, and micro-market equipment supplier based in Ludlow, Massachusetts, serving customers and vending operators primarily across the Northeast United States. We provide three core services:</p>
          <ul style={ul}>
            <li style={p}><strong>Equipment Sales</strong> — vending machines, AI smart coolers, and micro-market equipment</li>
            <li style={p}><strong>Location Services</strong> — matching vending operators with high-traffic placement locations</li>
            <li style={p}><strong>Service &amp; Support</strong> — parts sourcing, technical support, and operator guidance</li>
          </ul>
          <p style={p}>Nothing on the Site constitutes an offer to sell vending equipment that can be accepted merely by browsing. Equipment is sold through direct consultation, quote, and invoice as described in Section 6 below.</p>

          <h2 style={h2}>2. Eligibility</h2>
          <p style={p}>You must be at least 18 years old and able to form a legally binding contract to use the Site, submit a consultation request, or place an order in our parts store. By using the Site, you represent that you meet these requirements and, if you are acting on behalf of a business, that you have authority to bind that business to these Terms.</p>

          <h2 style={h2}>3. Consultation Requests, Lead Forms &amp; Consent to Be Contacted</h2>
          <p style={p}>When you submit a form on our Site (including our &quot;Book a Free Consultation&quot; form, contact forms, or any similar lead form), you are providing your name, email address, phone number, and message details directly to Vital Vending Sales for the purpose of following up with you about vending equipment, location services, or support.</p>

          <p style={strongCaps}>By submitting any form on this Site, you expressly consent and agree that:</p>
          <ul style={ul}>
            <li style={p}>Vital Vending Sales, and any authorized representative or partner acting on our behalf, may contact you at the phone number and email address you provided using manual or automated technology, including phone calls, text messages/SMS, autodialed or pre-recorded calls, and email, for purposes related to your inquiry, our products and services, and follow-up communications, even if that number is on a state or federal Do Not Call registry.</li>
            <li style={p}>Message and data rates may apply to SMS/text communications. Message frequency may vary.</li>
            <li style={p}>Consent to receive calls, texts, or emails is not a condition of purchasing any equipment or service from us.</li>
            <li style={p}>You may opt out of text messages at any time by replying &quot;STOP&quot; to any text you receive from us, and you may opt out of marketing emails by using the unsubscribe link included in those emails. You may also opt out at any time by contacting us at <a href="mailto:info@vitalvendingsales.com" style={a}>info@vitalvendingsales.com</a> or (413) 282-3776. Opting out of marketing communications does not withdraw consent for us to contact you regarding an active order, quote, or service request.</li>
            <li style={p}>This consent applies regardless of whether you are already listed on any internal, state, or national Do Not Call list, and remains in effect until you revoke it as described above.</li>
          </ul>

          <p style={p}><strong>How your information is used.</strong> Information submitted through our forms is sent directly into our customer relationship management (CRM) system — currently HubSpot, and/or such other CRM or marketing automation platform we may use from time to time (including, without limitation, platforms such as GoHighLevel) — where it is used to track your inquiry, schedule follow-up, and, if you have consented, send you relevant marketing communications such as promotions, new equipment announcements, or educational content. We do not sell your contact information to third parties. See our <a href="/privacy-policy" style={a}>Privacy Policy</a> for full detail on data handling.</p>

          <p style={p}><strong>Accuracy of information.</strong> You agree to provide accurate, current, and complete information when submitting any form, and to update it as needed so we can properly respond to your request.</p>

          <h2 style={h2}>4. Electronic Communications &amp; Signatures</h2>
          <p style={p}>By using the Site and submitting any form, you consent to receive communications from us electronically, including via email and SMS, and you agree that any electronic communication satisfies any legal requirement that such communication be in writing. If we send you a quote, proposal, invoice, or agreement electronically and you accept it by electronic signature, reply email, checkbox confirmation, or other electronic means, that acceptance is legally binding to the same extent as a handwritten signature, consistent with the U.S. Electronic Signatures in Global and National Commerce Act (E-SIGN Act) and applicable Massachusetts law.</p>

          <h2 style={h2}>5. Website Use &amp; Prohibited Conduct</h2>
          <p style={p}>You agree to use the Site only for lawful purposes. You may not:</p>
          <ul style={ul}>
            <li style={p}>Use the Site to submit false, misleading, or fraudulent information through any form</li>
            <li style={p}>Attempt to interfere with, disrupt, or gain unauthorized access to the Site, our servers, or our CRM systems</li>
            <li style={p}>Scrape, harvest, or collect data from the Site using automated means without our written permission</li>
            <li style={p}>Use the Site to transmit any virus, malware, or harmful code</li>
            <li style={p}>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
            <li style={p}>Use the Site in any way that violates applicable federal, state, or local law</li>
          </ul>
          <p style={p}>We reserve the right to block access, refuse service, or terminate any account or interaction with users who violate these Terms.</p>

          <h2 style={h2}>6. Equipment Sales &amp; Quotes</h2>
          <ul style={ul}>
            <li style={p}><strong>No online checkout for equipment.</strong> Vending machines, AI smart coolers, and micro-market equipment are not sold via online checkout on the Site. Pricing shown on the Site (including &quot;Starting at&quot; prices) is indicative only and subject to change without notice. All equipment purchases are finalized through direct consultation, a written quote, and a separate order or sales agreement between you and Vital Vending Sales.</li>
            <li style={p}><strong>Quotes are not binding offers.</strong> Any price, quote, or proposal we provide is valid only for the period stated in that quote (or, if none is stated, 30 days) and does not create a binding contract until both parties agree in writing (including electronically, per Section 4).</li>
            <li style={p}><strong>Availability.</strong> Equipment availability, specifications, and warranty terms are subject to change and to manufacturer availability. We will notify you of any material changes before finalizing an order.</li>
            <li style={p}><strong>ROI, revenue, and location claims are estimates only.</strong> Any statements about potential earnings, profitability timelines (e.g., &quot;profitability within 60 days&quot;), or return on investment are illustrative estimates based on general industry and historical operator experience. They are not guarantees. Actual results depend on factors outside our control, including location traffic, product selection, market conditions, and operator effort.</li>
          </ul>

          <h2 style={h2}>7. Location Services</h2>
          <p style={p}>Our Location Services help connect vending operators with prospective placement locations. These services are advisory and facilitative in nature. Vital Vending Sales does not guarantee that any specific location will be secured, that a secured location will generate any particular level of revenue, or that a placement will remain in effect for any minimum period. Any location services agreement will set out the specific scope, terms, and any fees separately in writing.</p>

          <h2 style={h2}>8. Vending Parts Store, Payments &amp; Shipping</h2>
          <ul style={ul}>
            <li style={p}><strong>Orders.</strong> When you place an order for vending parts through our online store, you are making an offer to purchase, which we may accept or decline. We will confirm accepted orders by email.</li>
            <li style={p}><strong>Pricing.</strong> All prices are listed in U.S. dollars and are subject to change without notice until an order is confirmed. We are not responsible for typographical or pricing errors and reserve the right to cancel any order affected by such an error.</li>
            <li style={p}><strong>Payment processing.</strong> All payments made through the Site are processed by <strong>Stripe</strong>, a PCI-compliant third-party payment processor. We do not store your full card number, CVV, or other sensitive payment details on our servers. Your use of Stripe&apos;s payment services is also subject to <a href="https://stripe.com/legal/consumer" target="_blank" rel="noopener noreferrer" style={a}>Stripe&apos;s Terms of Service</a> and <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={a}>Privacy Policy</a>.</li>
            <li style={p}><strong>Shipping.</strong> Shipping timeframes and costs will be provided at checkout or in your order confirmation. Risk of loss for shipped parts passes to you upon delivery to the carrier, unless otherwise required by law.</li>
            <li style={p}><strong>Returns &amp; cancellations.</strong> For returns, exchanges, or order issues, contact us at <a href="mailto:info@vitalvendingsales.com" style={a}>info@vitalvendingsales.com</a> or (413) 282-3776 within a reasonable time of receipt. Returns are evaluated on a case-by-case basis; parts must generally be unused and in original packaging to qualify for return or exchange.</li>
          </ul>

          <h2 style={h2}>9. Intellectual Property</h2>
          <p style={p}>All content on the Site, including text, graphics, logos, images, product descriptions, and the Vital Vending Sales name and branding, is owned by or licensed to Vital Vending Sales and is protected by U.S. and international copyright, trademark, and other intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any content on the Site without our prior written permission, except for your own personal, non-commercial reference in connection with evaluating our products and services.</p>

          <h2 style={h2}>10. Reviews &amp; Testimonials</h2>
          <p style={p}>Customer reviews and testimonials displayed on the Site (including those sourced from Google) reflect the individual experiences of those customers and are not a guarantee that you will have a similar experience. We may display customer reviews with attribution (name and general description) but will not alter the substance of a review without the customer&apos;s consent.</p>

          <h2 style={h2}>11. Third-Party Links &amp; Services</h2>
          <p style={p}>The Site may contain links to third-party websites or services, such as Google Maps, Stripe, our social media profiles, or industry directories. These third parties operate independently of Vital Vending Sales, and we are not responsible for their content, policies, or practices. Use of any third-party site or service is at your own risk and subject to that third party&apos;s own terms.</p>

          <h2 style={h2}>12. Disclaimer of Warranties</h2>
          <p style={strongCaps}>THE SITE AND ITS CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. ANY EQUIPMENT WARRANTIES (SUCH AS MANUFACTURER WARRANTIES ON VENDING MACHINES OR SMART COOLERS) ARE GOVERNED SEPARATELY BY THE APPLICABLE MANUFACTURER OR SALES AGREEMENT, NOT BY THIS SITE.</p>

          <h2 style={h2}>13. Limitation of Liability</h2>
          <p style={strongCaps}>TO THE FULLEST EXTENT PERMITTED BY LAW, VITAL VENDING SALES AND ITS OWNERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, OR DATA, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE OR THESE TERMS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM YOUR USE OF THE SITE WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) $100. THIS SECTION DOES NOT LIMIT LIABILITY FOR A SEPARATE, SIGNED EQUIPMENT SALES OR SERVICES AGREEMENT, WHICH WILL GOVERN ITS OWN LIABILITY TERMS.</p>
          <p style={p}>Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.</p>

          <h2 style={h2}>14. Indemnification</h2>
          <p style={p}>You agree to indemnify and hold harmless Vital Vending Sales and its owners, employees, and agents from any claims, losses, damages, liabilities, and expenses (including reasonable attorneys&apos; fees) arising out of your misuse of the Site, your violation of these Terms, or your violation of any law or third-party right.</p>

          <h2 style={h2}>15. Governing Law &amp; Dispute Resolution</h2>
          <p style={p}>These Terms are governed by the laws of the Commonwealth of Massachusetts, without regard to its conflict of laws principles. Any dispute arising out of or relating to these Terms or the Site will be brought exclusively in the state or federal courts located in Hampden County, Massachusetts, and you consent to the personal jurisdiction of those courts. Before filing any formal claim, you agree to first contact us at <a href="mailto:info@vitalvendingsales.com" style={a}>info@vitalvendingsales.com</a> so we can attempt to resolve the issue informally and in good faith.</p>

          <h2 style={h2}>16. Changes to These Terms</h2>
          <p style={p}>We may update these Terms from time to time to reflect changes in our services, legal requirements, or business practices. We will post the updated Terms on this page with a revised &quot;Last updated&quot; date. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.</p>

          <h2 style={h2}>17. Severability &amp; Entire Agreement</h2>
          <p style={p}>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full force and effect. These Terms, together with our Privacy Policy and any separate signed sales or services agreement, constitute the entire agreement between you and Vital Vending Sales regarding your use of the Site.</p>

          <h2 style={h2}>18. Contact Us</h2>
          <p style={p}>Questions about these Terms of Service can be directed to:</p>
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
