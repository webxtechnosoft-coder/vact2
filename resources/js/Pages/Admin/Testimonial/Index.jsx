import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const SLIDE_KEYS = ['about-slide-1', 'about-slide-2', 'about-slide-3', 'about-slide-4'];
const SLIDE_LABELS = { 'about-slide-1': 'Carousel Slide 1', 'about-slide-2': 'Carousel Slide 2', 'about-slide-3': 'Carousel Slide 3', 'about-slide-4': 'Carousel Slide 4' };

const imgUrl = (p) => {
    if (!p) return null;
    if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
    return `/storage/${p}`;
};

export default function TestimonialIndex({ testimonials, slides }) {
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(null);
    const [showFlash, setShowFlash] = useState(false);
    const [flashMsg, setFlashMsg] = useState('');

    const openAdd = () => { setEditing(null); setShowForm(true); };
    const openEdit = (t) => { setEditing(t); setShowForm(true); };
    const closeForm = () => { setShowForm(false); setEditing(null); };

    const del = (t) => {
        if (confirm(`Delete "${t.name}"?`)) {
            router.delete(route('admin.testimonials.destroy', t.id));
        }
    };

    const slideForm = useForm({
        sections: SLIDE_KEYS.map((key) => {
            const item = (slides || []).find((s) => s.section_key === key) || {};
            return { id: item.id || null, section_key: key, title: item.title || '', subtitle: item.subtitle || '', description: item.description || '', image: null };
        }),
    });

    useEffect(() => {
        if (slides && slides.length) {
            slideForm.setData('sections', SLIDE_KEYS.map((key) => {
                const item = slides.find((s) => s.section_key === key) || {};
                return { id: item.id || null, section_key: key, title: item.title || '', subtitle: item.subtitle || '', description: item.description || '', image: null };
            }));
        }
    }, [slides]);

    const updSlide = (index, field, value) => {
        slideForm.setData('sections', slideForm.data.sections.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
    };

    const saveSlides = (e) => {
        e.preventDefault();
        slideForm.put('/admin/about', {
            forceFormData: true,
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                setFlashMsg('Carousel slides saved successfully.');
                setShowFlash(true);
                setTimeout(() => setShowFlash(false), 4000);
            },
        });
    };

    return (
        <AdminLayout>
            <Head title="Testimonials" />
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Testimonials</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage carousel slides and video testimonials</p>
            </div>

            {showFlash && (
                <div style={{ maxWidth: '1000px', padding: '12px 16px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '8px', color: '#065f46', fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
                    {flashMsg}
                </div>
            )}

            {/* Slide Management */}
            <div style={{ maxWidth: '1000px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '24px' }}>
                <h2 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: 700, color: '#111827' }}>Carousel Slides</h2>
                <p style={{ margin: '0 0 16px', fontSize: '13px', color: '#6b7280' }}>These slides appear in the carousel at the top of the public Testimonials page</p>
                <form onSubmit={saveSlides} encType="multipart/form-data">
                    {slideForm.data.sections.map((sec, i) => {
                        const orig = slides.find((s) => s.section_key === sec.section_key) || {};
                        return (
                            <div key={sec.section_key} style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '12px' }}>
                                <input type="hidden" name={`sections[${i}][id]`} value={sec.id} />
                                <input type="hidden" name={`sections[${i}][section_key]`} value={sec.section_key} />
                                <h4 style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600, color: '#008ed2' }}>{SLIDE_LABELS[sec.section_key]}</h4>
                                <div style={{ marginBottom: '10px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                                    <input type="text" value={sec.title} onChange={(e) => updSlide(i, 'title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Subtitle</label>
                                    <input type="text" value={sec.subtitle} onChange={(e) => updSlide(i, 'subtitle', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description</label>
                                    <textarea value={sec.description} onChange={(e) => updSlide(i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Image</label>
                                    {imgUrl(orig.image) ? (
                                        <img src={imgUrl(orig.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                    ) : (
                                        <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 8px' }}>No image</p>
                                    )}
                                    <input type="file" accept="image/*" onChange={(e) => updSlide(i, 'image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                        );
                    })}
                    <button type="submit" disabled={slideForm.processing} style={{ padding: '8px 20px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '13px', fontWeight: 600, cursor: slideForm.processing ? 'not-allowed' : 'pointer', opacity: slideForm.processing ? 0.6 : 1 }}>
                        {slideForm.processing ? 'Saving...' : 'Save Slides'}
                    </button>
                </form>
            </div>

            {/* Video Testimonials */}
            <div style={{ maxWidth: '1000px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                    <button onClick={openAdd} style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                        + Add Testimonial
                    </button>
                </div>

                {showForm && (
                    <TestimonialForm testimonial={editing} onClose={closeForm} />
                )}

                <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Image</th>
                                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Name</th>
                                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Role</th>
                                <th style={{ padding: '10px 16px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Order</th>
                                <th style={{ padding: '10px 16px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Active</th>
                                <th style={{ padding: '10px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.map((t) => (
                                <tr key={t.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                                    <td style={{ padding: '10px 16px' }}>
                                        {t.image ? (
                                            <img src={imgUrl(t.image)} alt="" style={{ width: '50px', height: '50px', borderRadius: '4px', objectFit: 'cover', border: '1px solid #e5e7eb' }} />
                                        ) : (
                                            <span style={{ fontSize: '11px', color: '#9ca3af' }}>No img</span>
                                        )}
                                    </td>
                                    <td style={{ padding: '10px 16px', fontSize: '13px', fontWeight: 500, color: '#111827' }}>{t.name}</td>
                                    <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280' }}>{t.role || '-'}</td>
                                    <td style={{ padding: '10px 16px', textAlign: 'center', fontSize: '13px', color: '#6b7280' }}>{t.sort_order}</td>
                                    <td style={{ padding: '10px 16px', textAlign: 'center' }}>
                                        <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, backgroundColor: t.is_active ? '#ecfdf5' : '#fef2f2', color: t.is_active ? '#065f46' : '#dc2626' }}>
                                            {t.is_active ? 'Yes' : 'No'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '10px 16px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                        <button onClick={() => openEdit(t)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#eef9ff', color: '#008ed2', border: 'none', cursor: 'pointer', marginRight: '4px' }}>Edit</button>
                                        <button onClick={() => del(t)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            {testimonials.length === 0 && (
                                <tr><td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>No testimonials. Click "Add Testimonial" to create one.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

function TestimonialForm({ testimonial, onClose }) {
    const { data, setData, post, put, processing } = useForm({
        name: testimonial?.name || '',
        content: testimonial?.content || '',
        role: testimonial?.role || '',
        video_url: testimonial?.video_url || '',
        image: null,
        duration: testimonial?.duration || '',
        sort_order: testimonial?.sort_order ?? 0,
        is_active: testimonial?.is_active ?? true,
    });

    const submit = (e) => {
        e.preventDefault();
        if (testimonial) {
            put(route('admin.testimonials.update', testimonial.id), { forceFormData: true, onSuccess: onClose });
        } else {
            post(route('admin.testimonials.store'), { forceFormData: true, onSuccess: onClose });
        }
    };

    return (
        <div style={{ maxWidth: '600px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>{testimonial ? 'Edit Testimonial' : 'Add Testimonial'}</h3>
                <button onClick={onClose} style={{ padding: '4px 10px', borderRadius: '6px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', fontSize: '12px', cursor: 'pointer' }}>Close</button>
            </div>
            <form onSubmit={submit} encType="multipart/form-data">
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Name *</label>
                    <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} required style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Content / Review</label>
                    <textarea value={data.content} onChange={(e) => setData('content', e.target.value)} rows={3} placeholder="The testimonial text..." style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Role</label>
                    <input type="text" value={data.role} onChange={(e) => setData('role', e.target.value)} placeholder="Parent of Ayaan" style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Video URL</label>
                    <input type="url" value={data.video_url} onChange={(e) => setData('video_url', e.target.value)} placeholder="https://youtube.com/shorts/..." style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Thumbnail Image</label>
                    {testimonial?.image && (
                        <img src={imgUrl(testimonial.image)} alt="" style={{ width: '150px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                    )}
                    <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Duration</label>
                        <input type="text" value={data.duration} onChange={(e) => setData('duration', e.target.value)} placeholder="1:25" style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Sort Order</label>
                        <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>
                </div>
                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: '#374151', cursor: 'pointer' }}>
                        <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} />
                        Active
                    </label>
                </div>
                <button type="submit" disabled={processing} style={{ padding: '8px 20px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '13px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                    {processing ? 'Saving...' : testimonial ? 'Update' : 'Create'}
                </button>
            </form>
        </div>
    );
}
