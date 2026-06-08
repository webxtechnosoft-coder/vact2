import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function SlidersCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        subtitle: '',
        description: '',
        btn_text: '',
        btn_link: '',
        bg_image: null,
        slide_image: null,
        sort_order: 0,
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/sliders', {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Create Slider" />

            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Add Slider</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Create a new homepage slider slide</p>
            </div>

            <div style={{ maxWidth: '700px', backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Title</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.title ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.title) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.title) e.target.style.borderColor = '#d1d5db'; }} placeholder="e.g. VAct AutoEdge Development Board" />
                        {errors.title && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.title}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Subtitle</label>
                        <input type="text" value={data.subtitle} onChange={(e) => setData('subtitle', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.subtitle ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.subtitle) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.subtitle) e.target.style.borderColor = '#d1d5db'; }} placeholder="e.g. Future-Ready Learning Platform" />
                        {errors.subtitle && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.subtitle}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={4} style={{ width: '100%', padding: '10px 14px', border: errors.description ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }} onFocus={(e) => { if (!errors.description) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.description) e.target.style.borderColor = '#d1d5db'; }} placeholder="Slider description text..." />
                        {errors.description && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.description}</p>}
                    </div>

                    <div style={{ marginBottom: '20px', display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Button Text</label>
                            <input type="text" value={data.btn_text} onChange={(e) => setData('btn_text', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.btn_text ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.btn_text) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.btn_text) e.target.style.borderColor = '#d1d5db'; }} placeholder="e.g. Explore Courses" />
                            {errors.btn_text && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.btn_text}</p>}
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Button Link</label>
                            <input type="text" value={data.btn_link} onChange={(e) => setData('btn_link', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.btn_link ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.btn_link) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.btn_link) e.target.style.borderColor = '#d1d5db'; }} placeholder="e.g. /coursedetails" />
                            {errors.btn_link && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.btn_link}</p>}
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Background Image</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('bg_image', e.target.files[0])} style={{ width: '100%', padding: '8px', border: errors.bg_image ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} />
                        {errors.bg_image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.bg_image}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Slide Image (right side)</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('slide_image', e.target.files[0])} style={{ width: '100%', padding: '8px', border: errors.slide_image ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} />
                        {errors.slide_image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.slide_image}</p>}
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
                            {processing ? 'Creating...' : 'Create Slider'}
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
