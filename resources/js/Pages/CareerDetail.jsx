import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function CareerDetail({ job, allJobs }) {
    const s = job || {};

    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        career_id: s.id || '',
        first_name: '',
        email: '',
        phone: '',
        position: s.title || '',
        resume: null,
        cover_letter: null,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/apply', {
            forceFormData: true,
            onSuccess: () => {
                setData('first_name', '');
                setData('email', '');
                setData('phone', '');
                setData('resume', null);
                setData('cover_letter', null);
                document.getElementById('apply-form').reset();
            },
        });
    };

    return (
        <MainLayout>
            <Head title={s.title || 'Job Details'} />
            <link rel="stylesheet" href="/assets/css/careers.css" />

            <section class="job-detail-section" style={{ padding: '180px 0' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="job-detail__header" style={{ marginBottom: '30px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '12px', backgroundColor: '#eef9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#008ed2' }}>
                                        <i class={`fas ${s.icon || 'fa-briefcase'}`}></i>
                                    </div>
                                    <div>
                                        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: '#111827' }}>{s.title}</h1>
                                        <div style={{ display: 'flex', gap: '16px', marginTop: '6px', fontSize: '14px', color: '#6b7280' }}>
                                            <span><i class="fas fa-briefcase" style={{ marginRight: '6px', color: '#008ed2' }}></i>{s.experience || ''}</span>
                                            <span><i class="fas fa-map-marker-alt" style={{ marginRight: '6px', color: '#008ed2' }}></i>{s.location || ''}</span>
                                            <span><i class="far fa-calendar-alt" style={{ marginRight: '6px', color: '#008ed2' }}></i>{s.date || ''}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="job-detail__tags" style={{ marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {(s.tags || []).map((tag) => (
                                    <span key={tag} style={{ padding: '4px 12px', backgroundColor: '#eef9ff', color: '#008ed2', borderRadius: '20px', fontSize: '13px', fontWeight: 500 }}>{tag}</span>
                                ))}
                            </div>

                            <div class="job-detail__description" style={{ lineHeight: 1.8, color: '#4b5563', fontSize: '15px', whiteSpace: 'pre-wrap' }}>
                                {s.description || ''}
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '24px', position: 'sticky', top: '100px' }}>
                                <h3 style={{ margin: '0 0 16px', fontSize: '16px', fontWeight: 700, color: '#111827' }}>Job Overview</h3>
                                <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f3f4f6' }}>
                                    <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase' }}>Experience</p>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: '#111827' }}>{s.experience || '-'}</p>
                                </div>
                                <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f3f4f6' }}>
                                    <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase' }}>Location</p>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: '#111827' }}>{s.location || '-'}</p>
                                </div>
                                <div style={{ marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f3f4f6' }}>
                                    <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase' }}>Date Posted</p>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: '#111827' }}>{s.date || '-'}</p>
                                </div>
                                <div>
                                    <p style={{ margin: '0 0 4px', fontSize: '12px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase' }}>Job Type</p>
                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: '#111827' }}>Full Time</p>
                                </div>
                                <a href={`mailto:careers@vact-tech.com?subject=Application for ${encodeURIComponent(s.title)}`} style={{ display: 'block', width: '100%', padding: '12px 0', marginTop: '20px', backgroundColor: '#008ed2', color: '#fff', textAlign: 'center', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {recentlySuccessful && (
                    <div style={{ maxWidth: '800px', margin: '0 auto 30px', padding: '16px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '10px', color: '#065f46', fontSize: '14px', fontWeight: 500, textAlign: 'center' }}>
                        Application submitted successfully!
                    </div>
                )}

                <div style={{ maxWidth: '800px', margin: '60px auto 0', borderRadius: '16px', border: '1px solid #e5e7eb', padding: '40px' }}>
                    <h2 style={{ margin: '0 0 8px', fontSize: '22px', fontWeight: 700, color: '#111827', textAlign: 'center' }}>Let&rsquo;s Be a Part of us</h2>
                    <p style={{ margin: '0 0 28px', fontSize: '14px', color: '#6b7280', textAlign: 'center' }}>Submit your details and we&rsquo;ll get back to you</p>

                    <form id="apply-form" onSubmit={submit} encType="multipart/form-data">
                        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>First Name *</label>
                                <input type="text" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} required style={{ width: '100%', padding: '10px 14px', border: errors.first_name ? '1px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', background: 'transparent' }} />
                                {errors.first_name && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.first_name}</p>}
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Email Address *</label>
                                <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} required style={{ width: '100%', padding: '10px 14px', border: errors.email ? '1px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', background: 'transparent' }} />
                                {errors.email && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.email}</p>}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Phone Number</label>
                                <input type="tel" value={data.phone} onChange={(e) => setData('phone', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.phone ? '1px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', background: 'transparent' }} />
                                {errors.phone && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.phone}</p>}
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Position *</label>
                                <select value={data.position} onChange={(e) => setData('position', e.target.value)} required style={{ width: '100%', padding: '10px 14px', border: errors.position ? '1px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', background: 'transparent' }}>
                                    <option value="">Select Position</option>
                                    {(allJobs || []).map((j) => (
                                        <option key={j} value={j}>{j}</option>
                                    ))}
                                </select>
                                {errors.position && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.position}</p>}
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Resume</label>
                                <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setData('resume', e.target.files[0] || null)} style={{ width: '100%', padding: '8px 14px', border: errors.resume ? '1px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', background: 'transparent' }} />
                                {errors.resume && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.resume}</p>}
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Cover Letter</label>
                                <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setData('cover_letter', e.target.files[0] || null)} style={{ width: '100%', padding: '8px 14px', border: errors.cover_letter ? '1px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', background: 'transparent' }} />
                                {errors.cover_letter && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.cover_letter}</p>}
                            </div>
                        </div>

                        <button type="submit" disabled={processing} style={{ display: 'block', width: '100%', padding: '14px 0', backgroundColor: processing ? '#6b7280' : '#008ed2', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer' }}>
                            {processing ? 'Submitting...' : 'Submit Application'}
                        </button>
                    </form>
                </div>
            </section>
        </MainLayout>
    );
}