import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const SECTION_KEYS = ['about-content', 'vision', 'quality', 'mission', 'director', 'about-slide-1', 'about-slide-2', 'about-slide-3', 'about-slide-4'];

const SECTION_LABELS = {
    'about-content': 'About Company',
    vision: 'Vision',
    quality: 'Quality',
    mission: 'Mission',
    director: 'Managing Director',
    'about-slide-1': 'About Slide 1',
    'about-slide-2': 'About Slide 2',
    'about-slide-3': 'About Slide 3',
    'about-slide-4': 'About Slide 4',
};

const DEFAULT_SETTINGS = {
    stat_years: 15,
    stat_years_suffix: '+',
    stat_years_label: 'Years Of Experience',
};

const DIRECTOR_DEFAULTS = {
    points: ['24+ Years Experience', 'Expert in Product Development', 'Agile Project Management', 'Leadership & Team Building'],
    brochure_link: 'https://www.vact-tech.com/wp-content/uploads/2021/06/Vact-brochure-High.pdf',
    linkedin_url: 'https://www.linkedin.com/in/kumaravelpandurangan/',
};

export default function AboutEdit({ contents }) {
    const { props } = usePage();
    const flash = props.flash || {};
    const [showFlash, setShowFlash] = useState(!!flash.success);

    useEffect(() => {
        if (flash.success) {
            setShowFlash(true);
            const t = setTimeout(() => setShowFlash(false), 4000);
            return () => clearTimeout(t);
        }
    }, [flash.success]);

    const initForm = () => {
        const sections = SECTION_KEYS.map((key) => {
            const item = contents.find((c) => c.section_key === key) || {};
            const acSet = key === 'about-content' ? { ...DEFAULT_SETTINGS, ...(item.settings || {}) } : {};
            const dirSet = key === 'director' ? { ...DIRECTOR_DEFAULTS, ...(item.settings || {}) } : {};
            return {
                id: item.id || null,
                section_key: key,
                title: item.title || '',
                subtitle: item.subtitle || '',
                description: item.description || '',
                ...(key === 'about-content' ? { stat_years: acSet.stat_years, stat_years_suffix: acSet.stat_years_suffix, stat_years_label: acSet.stat_years_label } : {}),
                ...(key === 'director' ? { brochure_link: dirSet.brochure_link, linkedin_url: dirSet.linkedin_url, points_1: dirSet.points[0], points_2: dirSet.points[1], points_3: dirSet.points[2], points_4: dirSet.points[3] } : {}),
            };
        });
        return { sections };
    };

    const { data, setData, put, processing } = useForm(initForm());

    const submit = (e) => {
        e.preventDefault();
        put('/admin/about', { forceFormData: true, onSuccess: () => setShowFlash(true) });
    };

    const upd = (index, field, value) => {
        setData('sections', data.sections.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
    };

    const imgUrl = (item) => {
        const p = item.image;
        if (!p) return null;
        if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
        return `/storage/${p}`;
    };

    const imgUrl2 = (item) => {
        const p = item.image2;
        if (!p) return null;
        if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
        return `/storage/${p}`;
    };

    return (
        <AdminLayout>
            <Head title="About Us" />
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>About Us</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage all content for the About page</p>
            </div>

            {showFlash && flash.success && (
                <div style={{ maxWidth: '800px', padding: '12px 16px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '8px', color: '#065f46', fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
                    {flash.success}
                </div>
            )}

            <form onSubmit={submit} encType="multipart/form-data">
                {data.sections.map((sec, i) => {
                    const original = contents.find((c) => c.section_key === sec.section_key) || {};
                    const isAc = sec.section_key === 'about-content';
                    const isDir = sec.section_key === 'director';
                    const isCard = ['vision', 'quality', 'mission'].includes(sec.section_key);
                    return (
                        <div key={sec.section_key} style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <input type="hidden" name={`sections[${i}][id]`} value={sec.id} />
                            <input type="hidden" name={`sections[${i}][section_key]`} value={sec.section_key} />

                            <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>{SECTION_LABELS[sec.section_key]}</h3>

                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                                <input type="text" value={sec.title} onChange={(e) => upd(i, 'title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>

                            {!isCard && (
                                <div style={{ marginBottom: '12px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Subtitle</label>
                                    <input type="text" value={sec.subtitle} onChange={(e) => upd(i, 'subtitle', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                                </div>
                            )}

                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Full Description</label>
                                <textarea value={sec.description} onChange={(e) => upd(i, 'description', e.target.value)} rows={4} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>

                            {isAc && (
                                <>
                                    <div style={{ marginBottom: '12px', padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
                                        <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 700, color: '#0369a1' }}>Experience Stat Box</h4>
                                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                            <div style={{ flex: '1 1 120px' }}>
                                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Number</label>
                                                <input type="number" value={sec.stat_years} onChange={(e) => upd(i, 'stat_years', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                            </div>
                                            <div style={{ flex: '0 0 60px' }}>
                                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Suffix</label>
                                                <input type="text" value={sec.stat_years_suffix} onChange={(e) => upd(i, 'stat_years_suffix', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                            </div>
                                            <div style={{ flex: '1 1 180px' }}>
                                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Label</label>
                                                <input type="text" value={sec.stat_years_label} onChange={(e) => upd(i, 'stat_years_label', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {isDir && (
                                <>
                                    <div style={{ marginBottom: '12px', padding: '16px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                                        <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 700, color: '#15803d' }}>Bullet Points</h4>
                                        {[1, 2, 3, 4].map((n) => (
                                            <div key={n} style={{ marginBottom: '8px' }}>
                                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Point {n}</label>
                                                <input type="text" value={sec[`points_${n}`] || ''} onChange={(e) => upd(i, `points_${n}`, e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                            </div>
                                        ))}
                                    </div>
                                    <div style={{ marginBottom: '12px', padding: '16px', backgroundColor: '#fef2f2', borderRadius: '8px', border: '1px solid #fecaca' }}>
                                        <h4 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: 700, color: '#b91c1c' }}>Links</h4>
                                        <div style={{ marginBottom: '8px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Brochure URL</label>
                                            <input type="text" value={sec.brochure_link || ''} onChange={(e) => upd(i, 'brochure_link', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>LinkedIn URL</label>
                                            <input type="text" value={sec.linkedin_url || ''} onChange={(e) => upd(i, 'linkedin_url', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                </>
                            )}

                            {!isCard && (
                                <div style={{ marginBottom: '12px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Image 1</label>
                                    {imgUrl(original) ? (
                                        <img src={imgUrl(original)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                    ) : (
                                        <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 8px' }}>No image uploaded</p>
                                    )}
                                    <input type="file" accept="image/*" onChange={(e) => upd(i, 'image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                </div>
                            )}

                            {isAc && (
                                <div style={{ marginBottom: '12px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Image 2</label>
                                    {imgUrl2(original) ? (
                                        <img src={imgUrl2(original)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                    ) : (
                                        <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 8px' }}>No image uploaded</p>
                                    )}
                                    <input type="file" accept="image/*" onChange={(e) => upd(i, 'image2', e.target.files[0])} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                </div>
                            )}
                        </div>
                    );
                })}

                <div style={{ maxWidth: '800px' }}>
                    <button type="submit" disabled={processing} style={{ padding: '10px 28px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                        {processing ? 'Saving...' : 'Save All Changes'}
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
