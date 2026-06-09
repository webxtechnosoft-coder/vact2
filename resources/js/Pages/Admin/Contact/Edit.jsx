import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function ContactEdit({ offices, socials, contactPage }) {
    const [showFlash, setShowFlash] = useState(false);
    const [flashMsg, setFlashMsg] = useState('');

    const defSocial = { facebook: '', twitter: '', linkedin: '', instagram: '', youtube: '', telegram: '' };
    const defCP = { tagline: '', heading_1: '', heading_2: '', subtitle: '', form_title: '', form_btn: '', form_btn_sending: '', details_title: '', details_subtext: '', mobile_label: '', availability_label: '', availability_text: '', email_label: '', email_text: '', website_label: '', website_name: '', website_url: '', social_title: '', testimonial_tagline: '', testimonial_heading_1: '', testimonial_heading_2: '' };

    const { data, setData, put, processing } = useForm({
        offices: [
            { id: offices['contact-office-cbe']?.id || null, section_key: 'contact-office-cbe', settings: offices['contact-office-cbe']?.settings || { name: '', address: '', phone: '', map_url: '' } },
            { id: offices['contact-office-che']?.id || null, section_key: 'contact-office-che', settings: offices['contact-office-che']?.settings || { name: '', address: '', phone: '', map_url: '' } },
        ],
        socials: socials?.settings || defSocial,
        socials_id: socials?.id || null,
        contactPage: contactPage?.settings || defCP,
        contactPage_id: contactPage?.id || null,
    });

    const submit = (e) => {
        e.preventDefault();
        put('/admin/contact/edit', {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                setFlashMsg('Contact content updated successfully!');
                setShowFlash(true);
                setTimeout(() => setShowFlash(false), 4000);
            },
        });
    };

    const updateOffice = (index, field, value) => {
        setData(`offices.${index}.settings.${field}`, value);
    };

    const updateCP = (field, value) => {
        setData(`contactPage.${field}`, value);
    };

    const labelStyle = { display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#6b7280' };
    const inputStyle = { width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #d1d5db', fontSize: '13px' };
    const sectionStyle = { backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '24px' };
    const sectionTitle = { margin: '0 0 16px', fontSize: '16px', fontWeight: 700, color: '#111827', borderBottom: '1px solid #e5e7eb', paddingBottom: '12px' };
    const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' };
    const fullWidth = { gridColumn: '1 / -1' };

    const Inp = ({ field, label, placeholder, grid }) => (
        <div style={grid || {}}>
            <label style={labelStyle}>{label}</label>
            <input type="text" value={data.contactPage[field] || ''} onChange={(e) => updateCP(field, e.target.value)} style={inputStyle} placeholder={placeholder} />
        </div>
    );

    const Txt = ({ field, label, placeholder }) => (
        <div style={fullWidth}>
            <label style={labelStyle}>{label}</label>
            <textarea rows="2" value={data.contactPage[field] || ''} onChange={(e) => updateCP(field, e.target.value)} style={{ ...inputStyle, resize: 'vertical' }} placeholder={placeholder} />
        </div>
    );

    return (
        <AdminLayout>
            <Head title="Edit Contact Content" />
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Edit Contact Content</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage all text and settings displayed on the contact page</p>
                </div>
                <a href="/admin/contact" style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: '#f3f4f6', color: '#374151', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>← Back to Messages</a>
            </div>

            {showFlash && (
                <div style={{ maxWidth: '1000px', padding: '12px 16px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '8px', color: '#065f46', fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
                    {flashMsg}
                </div>
            )}

            <form onSubmit={submit} style={{ maxWidth: '1000px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {data.offices.map((office, i) => (
                    <div key={office.section_key} style={sectionStyle}>
                        <h3 style={sectionTitle}>
                            {office.section_key === 'contact-office-cbe' ? 'Coimbatore Office' : 'Chennai Office'}
                        </h3>
                        <div style={grid2}>
                            <div>
                                <label style={labelStyle}>Office Name</label>
                                <input type="text" value={office.settings.name} onChange={(e) => updateOffice(i, 'name', e.target.value)} style={inputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Phone</label>
                                <input type="text" value={office.settings.phone} onChange={(e) => updateOffice(i, 'phone', e.target.value)} style={inputStyle} />
                            </div>
                            <div style={fullWidth}>
                                <label style={labelStyle}>Address</label>
                                <textarea rows="2" value={office.settings.address} onChange={(e) => updateOffice(i, 'address', e.target.value)} style={{ ...inputStyle, resize: 'vertical' }} />
                            </div>
                            <div style={fullWidth}>
                                <label style={labelStyle}>Map Embed URL</label>
                                <input type="text" value={office.settings.map_url} onChange={(e) => updateOffice(i, 'map_url', e.target.value)} style={inputStyle} placeholder="https://maps.google.com/maps?q=..." />
                            </div>
                        </div>
                    </div>
                ))}

                <div style={sectionStyle}>
                    <h3 style={sectionTitle}>Contact Details Section</h3>
                    <div style={grid2}>
                        <Inp field="details_title" label="Section Title" placeholder="Contact Details" />
                        <div />
                        <Txt field="details_subtext" label="Description" placeholder="Reach out to us directly for any technical validation..." />
                        <Inp field="mobile_label" label="Mobile Label" placeholder="Mobile" />
                        <div />
                        <Inp field="availability_label" label="Availability Label" placeholder="Availability" />
                        <Inp field="availability_text" label="Availability Text" placeholder="Daily 09 am - 05 pm" />
                        <Inp field="email_label" label="Email Label" placeholder="Email" />
                        <Inp field="email_text" label="Email Text" placeholder="careers@vact-tech.com" />
                        <Inp field="website_label" label="Website Label" placeholder="Website" />
                        <Inp field="website_name" label="Website Name" placeholder="www.vact-tech.com" />
                        <Inp field="website_url" label="Website URL" placeholder="https://www.vact-tech.com" />
                    </div>
                </div>

                <div style={sectionStyle}>
                    <h3 style={sectionTitle}>Social Media Section</h3>
                    <div style={grid2}>
                        <Inp field="social_title" label="Section Title" placeholder="Social Media:" />
                        <div />
                    </div>
                    <div style={{ ...grid2, marginTop: '16px' }}>
                        {['facebook', 'twitter', 'linkedin', 'instagram', 'youtube', 'telegram'].map((platform) => (
                            <div key={platform}>
                                <label style={labelStyle}>{platform.charAt(0).toUpperCase() + platform.slice(1)} URL</label>
                                <input type="text" value={data.socials[platform] || ''} onChange={(e) => setData(`socials.${platform}`, e.target.value)} style={inputStyle} placeholder={`https://${platform}.com/...`} />
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                    <a href="/admin/contact" style={{ padding: '10px 24px', borderRadius: '8px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>Cancel</a>
                    <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '8px', border: 'none', backgroundColor: '#008ed2', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', opacity: processing ? 0.6 : 1 }}>
                        {processing ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
