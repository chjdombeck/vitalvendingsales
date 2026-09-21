'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import SuccessModal from '../../components/SuccessModal';
import { submitServiceRequestLead, submitServiceRequestBackupEmail, uploadServiceRequestPhoto } from '../../lib/service-request';

const MAX_MACHINES = 5;
const MOVE_ISSUE_VALUE = 'Needs to Be Moved';

const ISSUE_OPTIONS = [
  'Not Cooling', 'Will Not Vend', 'Double Vends', 'Drop Sensor Does Not Work',
  'Keypad Does Not Work', 'Display Does Not Work', 'Credit Card Reader Not Working',
  'Dollar Bill Acceptor Not Working', 'Coin Mechanism Not Working', "Won't Power On",
  'Door/Lock Issue', MOVE_ISSUE_VALUE, 'Multiple Issues', 'Other',
];

function emptyMachine() {
  return {
    manufacturer: '', model: '', serial: '',
    photoFile: null, photoUrl: '', photoStatus: '',
    street: '', city: '', state: '', zip: '', locationName: '', siteDetails: '',
    issue: '',
    moveStreet: '', moveCity: '', moveState: '', moveZip: '', moveLocationName: '',
    notes: '',
    accessMethod: '', onsiteName: '', onsitePhone: '', accessNotes: '',
  };
}

const inputCls = 'w-full px-3.5 py-3 rounded-xl border text-sm focus:outline-none focus:ring-4 transition-shadow duration-200';
const inputStyle = { borderColor: '#e5e7eb', background: '#fff', color: '#1B2A4A' };
const labelCls = 'block font-bold text-sm mb-1.5';

function Required() {
  return <span style={{ color: '#c0392b', fontWeight: 700 }}> *</span>;
}
function Optional() {
  return <span style={{ color: '#8C95A0', fontWeight: 600, fontSize: '0.7rem', textTransform: 'none' }}> Optional</span>;
}

export default function RequestServicePage() {
  const formRef = useRef(null);
  const [machineCount, setMachineCount] = useState(1);
  const [customer, setCustomer] = useState({ firstName: '', lastName: '', phone: '', email: '', company: '', existingCustomer: '' });
  const [machines, setMachines] = useState(() => Array.from({ length: MAX_MACHINES }, emptyMachine));
  const [openIndices, setOpenIndices] = useState({ 0: true });
  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function updateMachine(i, field, value) {
    setMachines(prev => prev.map((m, idx) => (idx === i ? { ...m, [field]: value } : m)));
  }

  function toggleBlock(i) {
    setOpenIndices(prev => ({ ...prev, [i]: !prev[i] }));
  }

  async function handlePhotoChange(i, file) {
    if (!file) {
      updateMachine(i, 'photoFile', null);
      updateMachine(i, 'photoUrl', '');
      updateMachine(i, 'photoStatus', '');
      return;
    }
    updateMachine(i, 'photoFile', file);
    updateMachine(i, 'photoStatus', 'uploading');
    const url = await uploadServiceRequestPhoto(file);
    if (url) {
      updateMachine(i, 'photoUrl', url);
      updateMachine(i, 'photoStatus', 'uploaded');
    } else {
      updateMachine(i, 'photoStatus', 'failed');
    }
  }

  function buildSummary() {
    const lines = [];
    lines.push('SERVICE REQUEST');
    lines.push('');
    lines.push('CUSTOMER INFO');
    lines.push(`Name: ${customer.firstName} ${customer.lastName}`);
    lines.push(`Phone: ${customer.phone}`);
    lines.push(`Email: ${customer.email}`);
    lines.push(`Business: ${customer.company || 'N/A'}`);
    lines.push(`Existing Customer: ${customer.existingCustomer || 'Not answered'}`);
    lines.push('');
    for (let idx = 0; idx < machineCount; idx++) {
      const m = machines[idx];
      const n = idx + 1;
      lines.push(`MACHINE ${n} OF ${machineCount}`);
      lines.push(`Manufacturer: ${m.manufacturer}`);
      lines.push(`Model: ${m.model}`);
      lines.push(`Serial Number: ${m.serial}`);
      lines.push(`Photo Attached: ${m.photoUrl ? 'Yes' : 'No'}`);
      if (m.photoUrl) lines.push(`Photo URL: ${m.photoUrl}`);
      lines.push(`Address: ${m.street}, ${m.city}, ${m.state} ${m.zip}`);
      lines.push(`Location/Site Name: ${m.locationName || 'N/A'}`);
      lines.push(`Site Specific Info: ${m.siteDetails || 'N/A'}`);
      lines.push(`Issue: ${m.issue}`);
      if (m.issue === MOVE_ISSUE_VALUE) {
        lines.push(`Move To Address: ${m.moveStreet}, ${m.moveCity}, ${m.moveState} ${m.moveZip}`);
        lines.push(`Move To Location/Site Name: ${m.moveLocationName || 'N/A'}`);
      }
      lines.push(`Additional Notes: ${m.notes || 'N/A'}`);
      lines.push(`Access Method: ${m.accessMethod}`);
      if (m.accessMethod === 'Someone else will be onsite with the key') {
        lines.push(`Onsite Contact: ${m.onsiteName || 'N/A'}, ${m.onsitePhone || 'N/A'}`);
      }
      lines.push(`Access Notes: ${m.accessNotes || 'N/A'}`);
      lines.push('');
    }
    return lines.join('\n');
  }

  function buildGhlPayload() {
    const payload = {
      first_name: customer.firstName,
      last_name: customer.lastName,
      phone: customer.phone,
      email: customer.email,
      companyName: customer.company || '',
      existing_customer: customer.existingCustomer || '',
      machine_count: machineCount,
      source: 'Request Service Page',
    };
    for (let idx = 0; idx < MAX_MACHINES; idx++) {
      const n = idx + 1;
      const prefix = `machine_${n}_`;
      const active = idx < machineCount;
      const m = machines[idx];
      payload[`${prefix}manufacturer`] = active ? m.manufacturer : '';
      payload[`${prefix}model`] = active ? m.model : '';
      payload[`${prefix}serial`] = active ? m.serial : '';
      payload[`${prefix}address`] = active ? `${m.street}, ${m.city}, ${m.state} ${m.zip}` : '';
      payload[`${prefix}location_name`] = active ? (m.locationName || '') : '';
      payload[`${prefix}site_details`] = active ? (m.siteDetails || '') : '';
      payload[`${prefix}issue`] = active ? m.issue : '';
      payload[`${prefix}move_to_address`] = active && m.issue === MOVE_ISSUE_VALUE
        ? `${m.moveStreet}, ${m.moveCity}, ${m.moveState} ${m.moveZip}` : '';
      payload[`${prefix}notes`] = active ? (m.notes || '') : '';
      payload[`${prefix}access_method`] = active ? m.accessMethod : '';
      payload[`${prefix}onsite_contact`] = active ? `${m.onsiteName || ''} ${m.onsitePhone || ''}`.trim() : '';
      payload[`${prefix}access_notes`] = active ? (m.accessNotes || '') : '';
      payload[`${prefix}photo_url`] = active ? (m.photoUrl || '') : '';
    }
    payload.machines_summary = buildSummary();
    return payload;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;

    // Expand every machine block before validating, so a required field inside
    // a collapsed section can never be silently skipped.
    setOpenIndices(() => {
      const all = {};
      for (let i = 0; i < machineCount; i++) all[i] = true;
      return all;
    });

    setTimeout(() => {
      const form = formRef.current;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      setSubmitting(true);

      submitServiceRequestLead(buildGhlPayload()).catch(() => {});
      submitServiceRequestBackupEmail(
        form,
        `Service Request from ${customer.firstName} (${machineCount} machine${machineCount > 1 ? 's' : ''})`,
        buildSummary()
      );

      setShowModal(true);
      setSubmitting(false);
    }, 50);
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1B2A4A' }} className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>Request Service</span>
          </nav>
          <h1 className="font-black text-white mb-3" style={{ fontSize: 'clamp(2rem,4vw,3rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>Request Service</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, maxWidth: 560 }}>Machine down or due for maintenance? Tell us what&apos;s going on and our service team will follow up fast.</p>
        </div>
      </section>

      {/* Request form */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Form panel */}
            <div className="rounded-3xl p-8 lg:p-10" style={{ background: '#D6E4F5', border: '1px solid rgba(27,42,74,0.08)' }}>
              <h2 className="font-black mb-2" style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: '#1B2A4A', letterSpacing: '-0.03em' }}>Tell us what you need</h2>
              <p className="text-sm mb-8" style={{ color: '#3D4D5C', lineHeight: 1.7 }}>Fill out the form below. The more detail you give us, the fewer questions we&apos;ll need to ask before dispatching a technician.</p>

              {!showModal ? (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-10">
                  {/* Step 1 */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wide mb-1.5" style={{ color: '#1a6b2a' }}>Step 1</div>
                    <label className="font-bold block mb-3.5" style={{ color: '#1B2A4A', fontSize: '1.05rem', letterSpacing: '-0.01em' }}>How many vending machines need service?</label>
                    <div className="grid grid-cols-5 gap-2 sm:gap-3">
                      {[1, 2, 3, 4, 5].map(n => (
                        <label key={n} className="flex items-center justify-center rounded-xl cursor-pointer" style={{
                          height: 52, border: `1.5px solid ${machineCount === n ? '#3DB54A' : '#e5e7eb'}`,
                          background: machineCount === n ? '#D6F0DA' : '#fff', fontWeight: 800, fontSize: '1.1rem', color: '#1B2A4A',
                        }}>
                          <input type="radio" name="machine-count" className="sr-only" checked={machineCount === n} onChange={() => setMachineCount(n)} />
                          {n}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wide mb-1.5" style={{ color: '#1a6b2a' }}>Step 2</div>
                    <label className="font-bold block mb-3.5" style={{ color: '#1B2A4A', fontSize: '1.05rem', letterSpacing: '-0.01em' }}>Your Contact Information</label>
                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls} style={{ color: '#1B2A4A' }}>First Name<Required /></label>
                          <input required value={customer.firstName} onChange={e => setCustomer(c => ({ ...c, firstName: e.target.value }))} placeholder="Jane" className={inputCls} style={inputStyle} />
                        </div>
                        <div>
                          <label className={labelCls} style={{ color: '#1B2A4A' }}>Last Name<Required /></label>
                          <input required value={customer.lastName} onChange={e => setCustomer(c => ({ ...c, lastName: e.target.value }))} placeholder="Smith" className={inputCls} style={inputStyle} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls} style={{ color: '#1B2A4A' }}>Phone Number<Required /></label>
                          <input required type="tel" value={customer.phone} onChange={e => setCustomer(c => ({ ...c, phone: e.target.value }))} placeholder="(413) 000-0000" className={inputCls} style={inputStyle} />
                        </div>
                        <div>
                          <label className={labelCls} style={{ color: '#1B2A4A' }}>Email Address<Required /></label>
                          <input required type="email" value={customer.email} onChange={e => setCustomer(c => ({ ...c, email: e.target.value }))} placeholder="jane@company.com" className={inputCls} style={inputStyle} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelCls} style={{ color: '#1B2A4A' }}>Your Business Name<Optional /></label>
                          <input value={customer.company} onChange={e => setCustomer(c => ({ ...c, company: e.target.value }))} placeholder="Acme Warehouse" className={inputCls} style={inputStyle} />
                        </div>
                        <div>
                          <label className={labelCls} style={{ color: '#1B2A4A' }}>Existing Customer?</label>
                          <div className="grid grid-cols-2 gap-3">
                            {['Yes', 'No'].map(opt => (
                              <label key={opt} className="flex items-center justify-center gap-1.5 rounded-xl cursor-pointer" style={{
                                height: 48, border: `1.5px solid ${customer.existingCustomer === opt.toLowerCase() ? '#3DB54A' : '#e5e7eb'}`,
                                background: customer.existingCustomer === opt.toLowerCase() ? '#D6F0DA' : '#fff', fontWeight: 700, fontSize: '0.85rem', color: '#1B2A4A',
                              }}>
                                <input type="radio" name="existing-customer" className="sr-only"
                                  checked={customer.existingCustomer === opt.toLowerCase()}
                                  onChange={() => setCustomer(c => ({ ...c, existingCustomer: opt.toLowerCase() }))} />
                                {opt}
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wide mb-1.5" style={{ color: '#1a6b2a' }}>Step 3</div>
                    <label className="font-bold block mb-1" style={{ color: '#1B2A4A', fontSize: '1.05rem', letterSpacing: '-0.01em' }}>Machine Details</label>
                    <p className="text-xs mb-5" style={{ color: '#3D4D5C', lineHeight: 1.6 }}>Each machine gets its own section below, even if several are at the same site.</p>
                    <div className="space-y-6">
                      {Array.from({ length: machineCount }).map((_, idx) => (
                        <MachineBlock
                          key={idx}
                          index={idx}
                          total={machineCount}
                          machine={machines[idx]}
                          open={!!openIndices[idx]}
                          onToggle={() => toggleBlock(idx)}
                          onChange={(field, value) => updateMachine(idx, field, value)}
                          onPhotoChange={file => handlePhotoChange(idx, file)}
                        />
                      ))}
                    </div>
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-base text-white transition-colors duration-200"
                    style={{ background: submitting ? '#8CA88F' : '#3DB54A', border: 'none', cursor: submitting ? 'not-allowed' : 'pointer' }}>
                    Submit Request
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </button>
                  <p className="text-center text-xs" style={{ color: '#5C6672', lineHeight: 1.6 }}>We typically respond within one business day. For urgent, machine-down issues, please call us directly.</p>
                </form>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#D6F0DA' }}>
                    <svg className="w-8 h-8" style={{ color: '#3DB54A' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-black mb-2" style={{ color: '#1B2A4A', fontSize: '1.6rem', letterSpacing: '-0.03em' }}>Request Received</h3>
                  <p className="text-sm mx-auto" style={{ color: '#3D4D5C', lineHeight: 1.7, maxWidth: 420 }}>Thanks! We&apos;ve got your service request. Our team will reach out within one business day to confirm details and schedule your visit.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <SuccessModal open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

function MachineBlock({ index, total, machine, open, onToggle, onChange, onPhotoChange }) {
  const n = index + 1;
  const showMove = machine.issue === MOVE_ISSUE_VALUE;
  const showOnsite = machine.accessMethod === 'Someone else will be onsite with the key';
  const subtext = [machine.manufacturer, machine.model].filter(Boolean).join(', ') || 'Tap to enter machine details';

  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: '#fff', border: '1px solid rgba(27,42,74,0.1)' }}>
      <button type="button" onClick={onToggle} className="w-full flex items-center gap-2.5 px-5 py-4 text-left" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
        <div className="rounded-full flex items-center justify-center text-white font-extrabold flex-shrink-0" style={{ width: 28, height: 28, background: '#1B2A4A', fontSize: '0.8rem' }}>{n}</div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm" style={{ color: '#1B2A4A' }}>Machine {n} of {total}</div>
          <div className="text-xs font-medium truncate" style={{ color: '#8C95A0' }}>{subtext}</div>
        </div>
        <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#8C95A0', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
      </button>

      <div style={{ display: open ? 'block' : 'none', padding: '4px 20px 24px' }}>
        <SectionLabel first>Machine Information</SectionLabel>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Manufacturer<Required /></label>
              <input required value={machine.manufacturer} onChange={e => onChange('manufacturer', e.target.value)} placeholder='e.g. USI, AMS, or "not sure"' className={inputCls} style={inputStyle} />
            </div>
            <div>
              <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Model<Required /></label>
              <input required value={machine.model} onChange={e => onChange('model', e.target.value)} placeholder='e.g. Evoke 5, or "not sure"' className={inputCls} style={inputStyle} />
            </div>
            <div>
              <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Serial Number<Required /></label>
              <input required value={machine.serial} onChange={e => onChange('serial', e.target.value)} placeholder='e.g. on inside of door, or "not sure"' className={inputCls} style={inputStyle} />
            </div>
          </div>
          <div>
            <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Photo of Machine<span style={{ color: '#8C95A0', fontWeight: 600, fontSize: '0.7rem' }}> Optional, helps us ID it if you&apos;re not sure</span></label>
            <label className="flex items-center gap-2.5 rounded-xl cursor-pointer" style={{ border: '1.5px dashed #cbd5e1', padding: '12px 14px', background: '#fff' }}>
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#8C95A0' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16l4-4a3 3 0 014 0l5 5m-2-2l1.5-1.5a3 3 0 014 0L21 19M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              <span className="text-sm" style={{ color: '#3D4D5C' }}>
                {machine.photoStatus === 'uploading' && `Uploading ${machine.photoFile?.name}...`}
                {machine.photoStatus === 'uploaded' && `${machine.photoFile?.name} (uploaded)`}
                {machine.photoStatus === 'failed' && `${machine.photoFile?.name} (upload failed)`}
                {!machine.photoStatus && 'Tap to upload a photo'}
              </span>
              <input type="file" accept="image/*" capture="environment" className="hidden" onChange={e => onPhotoChange(e.target.files?.[0] || null)} />
            </label>
          </div>
        </div>

        <SectionLabel>Machine Location <span style={{ color: '#8C95A0', fontWeight: 600, fontSize: '0.7rem', textTransform: 'none' }}>Current Location</span></SectionLabel>
        <div className="space-y-4">
          <div>
            <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Location / Site<Required /></label>
            <input required value={machine.locationName} onChange={e => onChange('locationName', e.target.value)} placeholder="Business or building name" className={inputCls} style={inputStyle} />
          </div>
          <div>
            <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Street Address<Required /></label>
            <input required value={machine.street} onChange={e => onChange('street', e.target.value)} placeholder="123 Main St" className={inputCls} style={inputStyle} />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>City<Required /></label>
              <input required value={machine.city} onChange={e => onChange('city', e.target.value)} placeholder="Ludlow" className={inputCls} style={inputStyle} />
            </div>
            <div>
              <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>State<Required /></label>
              <input required value={machine.state} onChange={e => onChange('state', e.target.value)} placeholder="MA" className={inputCls} style={inputStyle} />
            </div>
            <div>
              <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>ZIP<Required /></label>
              <input required value={machine.zip} onChange={e => onChange('zip', e.target.value)} placeholder="01056" className={inputCls} style={inputStyle} />
            </div>
          </div>
          <div>
            <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Site Specific Information<Optional /></label>
            <input value={machine.siteDetails} onChange={e => onChange('siteDetails', e.target.value)} placeholder="e.g. Second floor break room, lobby, third floor hallway" className={inputCls} style={inputStyle} />
          </div>
        </div>

        <SectionLabel>Machine Issue</SectionLabel>
        <div className="space-y-4">
          <div>
            <label htmlFor={`machine-issue-${index}`} className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>What is the machine&apos;s issue?<Required /></label>
            <select id={`machine-issue-${index}`} required value={machine.issue} onChange={e => onChange('issue', e.target.value)} className={inputCls} style={{ ...inputStyle, appearance: 'none' }}>
              <option value="" disabled>Select an issue</option>
              {ISSUE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>

          {showMove && (
            <div className="rounded-xl p-4" style={{ background: '#EAF2FB', border: '1px solid rgba(27,42,74,0.08)' }}>
              <div className="font-bold text-xs uppercase tracking-wide mb-3" style={{ color: '#1B2A4A' }}>Move To (New Location)</div>
              <div className="space-y-4">
                <div>
                  <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Street Address<Required /></label>
                  <input required={showMove} value={machine.moveStreet} onChange={e => onChange('moveStreet', e.target.value)} placeholder="456 Elm St" className={inputCls} style={inputStyle} />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>City<Required /></label>
                    <input required={showMove} value={machine.moveCity} onChange={e => onChange('moveCity', e.target.value)} placeholder="Springfield" className={inputCls} style={inputStyle} />
                  </div>
                  <div>
                    <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>State<Required /></label>
                    <input required={showMove} value={machine.moveState} onChange={e => onChange('moveState', e.target.value)} placeholder="MA" className={inputCls} style={inputStyle} />
                  </div>
                  <div>
                    <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>ZIP<Required /></label>
                    <input required={showMove} value={machine.moveZip} onChange={e => onChange('moveZip', e.target.value)} placeholder="01103" className={inputCls} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Location / Site Name<Optional /></label>
                  <input value={machine.moveLocationName} onChange={e => onChange('moveLocationName', e.target.value)} placeholder="e.g. Building B breakroom" className={inputCls} style={inputStyle} />
                </div>
              </div>
            </div>
          )}

          <div>
            <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Additional Notes<Optional /></label>
            <textarea value={machine.notes} onChange={e => onChange('notes', e.target.value)} rows={3} placeholder="Anything else about the issue..." className={inputCls} style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} />
          </div>
        </div>

        <SectionLabel>Access</SectionLabel>
        <div className="space-y-4">
          <div>
            <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Access Method<Required /></label>
            <div className="space-y-2">
              {[
                'I will be onsite with the key',
                'Someone else will be onsite with the key',
                'VVS already has my key',
              ].map(opt => (
                <label key={opt} className="flex items-start gap-2.5 rounded-xl cursor-pointer" style={{
                  padding: '12px 16px', border: `1.5px solid ${machine.accessMethod === opt ? '#3DB54A' : '#e5e7eb'}`,
                  background: machine.accessMethod === opt ? '#D6F0DA' : '#fff',
                }}>
                  <input type="radio" required name={`m${index}-access`} className="mt-0.5" style={{ accentColor: '#3DB54A' }}
                    checked={machine.accessMethod === opt} onChange={() => onChange('accessMethod', opt)} />
                  <span className="text-sm font-semibold" style={{ color: '#1B2A4A' }}>{opt === 'I will be onsite with the key' ? 'I will be onsite to meet the technician with the machine key' : opt}</span>
                </label>
              ))}
            </div>
          </div>

          {showOnsite && (
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Onsite Contact Name<Required /></label>
                <input required={showOnsite} value={machine.onsiteName} onChange={e => onChange('onsiteName', e.target.value)} placeholder="Contact name" className={inputCls} style={inputStyle} />
              </div>
              <div>
                <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Onsite Contact Phone<Required /></label>
                <input required={showOnsite} type="tel" value={machine.onsitePhone} onChange={e => onChange('onsitePhone', e.target.value)} placeholder="(413) 000-0000" className={inputCls} style={inputStyle} />
              </div>
            </div>
          )}

          <div>
            <label className={labelCls} style={{ color: '#1B2A4A', fontSize: '0.85rem' }}>Access Notes<Optional /></label>
            <textarea value={machine.accessNotes} onChange={e => onChange('accessNotes', e.target.value)} rows={3} placeholder="Gate codes, lock boxes, check-in requirements, building hours, loading dock instructions..." className={inputCls} style={{ ...inputStyle, resize: 'vertical', minHeight: 70 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children, first }) {
  return (
    <div className="font-extrabold uppercase" style={{
      color: '#1B2A4A', fontSize: '0.8rem', letterSpacing: '0.06em',
      margin: first ? '0 0 10px' : '18px 0 10px',
      paddingTop: first ? 0 : 16,
      borderTop: first ? 'none' : '1px solid rgba(27,42,74,0.08)',
    }}>
      {children}
    </div>
  );
}
