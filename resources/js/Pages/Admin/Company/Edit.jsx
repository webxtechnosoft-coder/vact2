import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';

const FALLBACK_IMG = '/assets/images/resources/about-two-img-1.jpg';
const FALLBACK_IMG2 = '/assets/images/resources/about-two-img-2.jpg';

export default function CompanyEdit({ contents }) {
    const home = contents.find((c) => c.section_key === 'home-company') || {};
    const s = home.settings || {};
    const homePts = home.points || [];

    const { data, setData, put, processing } = useForm({
        sections: [{
            id: home.id || null,
            section_key: 'home-company',
            title: home.title || '',
            subtitle: home.subtitle || '',
            description: home.description || '',
            extra_heading: home.extra_heading || '',
            points: homePts.join('\n'),
            btn_text: s.btn_text || 'More About Us',
            btn_link: s.btn_link || '/about',
            video_url: s.video_url || '',
            stat_years: s.stat_years || 15,
            stat_years_suffix: s.stat_years_suffix || '+',
            stat_years_label: s.stat_years_label || 'Years',
            stat_years_text: s.stat_years_text || 'Experience',
            stat_placements: s.stat_placements || 100,
            stat_placements_suffix: s.stat_placements_suffix || '%',
            stat_placements_label: s.stat_placements_label || 'Placements',
            image: null,
            image2: null,
        }],
    });

    const submit = (e) => {
        e.preventDefault();
        put('/admin/company', { forceFormData: true });
    };

    const upd = (field, value) => {
        setData('sections', [{ ...data.sections[0], [field]: value }]);
    };

    const updPoint = (index, value) => {
        const arr = (data.sections[0].points || '').split('\n');
        arr[index] = value;
        upd('points', arr.join('\n'));
    };

    const sec = data.sections[0];
    const currentImg = home.image ? `/storage/${home.image}` : FALLBACK_IMG;
    const currentImg2 = home.image2 ? `/storage/${home.image2}` : FALLBACK_IMG2;
    const pointArr = (sec.points || '').split('\n');

    return (
        <AdminLayout>
            <Head title="Company Content" />
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Home Page Company</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Edit all content for the Our Company section on the home page</p>
            </div>

            <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <input type="hidden" name="sections[0][id]" value={sec.id} />
                    <input type="hidden" name="sections[0][section_key]" value="home-company" />

                    <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#374151', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Text Content</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Tagline / Subtitle</label>
                        <input type="text" value={sec.subtitle} onChange={(e) => upd('subtitle', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                        <input type="text" value={sec.title} onChange={(e) => upd('title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description</label>
                        <textarea value={sec.description} onChange={(e) => upd('description', e.target.value)} rows={4} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Extra Heading (below description)</label>
                        <input type="text" value={sec.extra_heading} onChange={(e) => upd('extra_heading', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Bullet Points</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[0, 1, 2, 3].map((i) => (
                                <input key={i} type="text" value={pointArr[i] || ''} onChange={(e) => updPoint(i, e.target.value)} placeholder={`Point ${i + 1}`} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            ))}
                        </div>
                    </div>



                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Video URL</label>
                        <input type="text" value={sec.video_url} onChange={(e) => upd('video_url', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>

                    <h3 style={{ margin: '24px 0 16px', fontSize: '15px', fontWeight: 700, color: '#374151', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Stats Boxes</h3>

                    <div style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Years Count</label>
                            <input type="number" value={sec.stat_years} onChange={(e) => upd('stat_years', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Years Suffix</label>
                            <input type="text" value={sec.stat_years_suffix} onChange={(e) => upd('stat_years_suffix', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Years Label</label>
                            <input type="text" value={sec.stat_years_label} onChange={(e) => upd('stat_years_label', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Years Text</label>
                            <input type="text" value={sec.stat_years_text} onChange={(e) => upd('stat_years_text', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px', display: 'flex', gap: '12px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Placements Count</label>
                            <input type="number" value={sec.stat_placements} onChange={(e) => upd('stat_placements', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Placements Suffix</label>
                            <input type="text" value={sec.stat_placements_suffix} onChange={(e) => upd('stat_placements_suffix', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Placements Label</label>
                            <input type="text" value={sec.stat_placements_label} onChange={(e) => upd('stat_placements_label', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                    </div>

                    <h3 style={{ margin: '24px 0 16px', fontSize: '15px', fontWeight: 700, color: '#374151', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Images</h3>

                    <div style={{ marginBottom: '14px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Current Image (preview)</label>
                        <img src={currentImg} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb' }} />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Replace Image</label>
                        <input type="file" accept="image/*" onChange={(e) => upd('image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '14px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Current Image 2 (preview)</label>
                        <img src={currentImg2} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb' }} />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Replace Image 2</label>
                        <input type="file" accept="image/*" onChange={(e) => upd('image2', e.target.files[0])} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '8px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 28px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                            {processing ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
