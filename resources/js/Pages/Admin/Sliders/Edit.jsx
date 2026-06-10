import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function SlidersEdit({ slider }) {
    const { data, setData, put, processing, errors } = useForm({
        title: slider.title || '',
        subtitle: slider.subtitle || '',
        description: slider.description || '',
        bg_image: null,
        slide_image: null,
        sort_order: slider.sort_order || 0,
        is_active: slider.is_active,
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/sliders/${slider.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Edit Slider" />

            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link href="/admin/sliders" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none', transition: 'all 0.15s ease' }} title="Back to sliders">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Edit Slider</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Update slider content</p>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Title</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.title ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.title) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.title) e.target.style.borderColor = '#d1d5db'; }} />
                        {errors.title && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.title}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Subtitle</label>
                        <input type="text" value={data.subtitle} onChange={(e) => setData('subtitle', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.subtitle ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.subtitle) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.subtitle) e.target.style.borderColor = '#d1d5db'; }} />
                        {errors.subtitle && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.subtitle}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={4} style={{ width: '100%', padding: '10px 14px', border: errors.description ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }} onFocus={(e) => { if (!errors.description) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.description) e.target.style.borderColor = '#d1d5db'; }} />
                        {errors.description && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.description}</p>}
                    </div>

                    <div style={{ marginBottom: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        {/* Background Image Container */}
                        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #e5e7eb', padding: '20px', borderRadius: '12px', backgroundColor: '#f9fafb' }}>
                            <label style={{ display: 'block', marginBottom: '12px', fontSize: '14px', fontWeight: 700, color: '#374151' }}>Background Image</label>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                                {slider.bg_image && (
                                    <div style={{ flexShrink: 0 }}>
                                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Current</label>
                                        <img src={`/storage/${slider.bg_image}`} alt="" style={{ width: '140px', height: '80px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #d1d5db' }} />
                                    </div>
                                )}
                                <div style={{ flex: 1, minWidth: '180px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>
                                        {slider.bg_image ? 'Change Background Image' : 'Upload Background Image'}
                                    </label>
                                    <input type="file" accept="image/*" onChange={(e) => setData('bg_image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: errors.bg_image ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', backgroundColor: '#fff', boxSizing: 'border-box' }} />
                                    {errors.bg_image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.bg_image}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Hero Image Container */}
                        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #e5e7eb', padding: '20px', borderRadius: '12px', backgroundColor: '#f9fafb' }}>
                            <label style={{ display: 'block', marginBottom: '12px', fontSize: '14px', fontWeight: 700, color: '#374151' }}>Hero Image / Slide Image (right side)</label>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                                {slider.slide_image && (
                                    <div style={{ flexShrink: 0 }}>
                                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Current</label>
                                        <img src={`/storage/${slider.slide_image}`} alt="" style={{ width: '80px', height: '80px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #d1d5db' }} />
                                    </div>
                                )}
                                <div style={{ flex: 1, minWidth: '180px' }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>
                                        {slider.slide_image ? 'Change Hero Image' : 'Upload Hero Image'}
                                    </label>
                                    <input type="file" accept="image/*" onChange={(e) => setData('slide_image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: errors.slide_image ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', backgroundColor: '#fff', boxSizing: 'border-box' }} />
                                    {errors.slide_image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.slide_image}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px', display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Sort Order</label>
                            <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => e.target.style.borderColor = '#008ed2'} onBlur={(e) => e.target.style.borderColor = '#d1d5db'} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', paddingBottom: '4px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
                                <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} style={{ width: '16px', height: '16px', accentColor: '#008ed2' }} />
                                Active
                            </label>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                            {processing ? 'Updating...' : 'Update Slider'}
                        </button>
                        <Link href="/admin/sliders" style={{ padding: '10px 24px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
