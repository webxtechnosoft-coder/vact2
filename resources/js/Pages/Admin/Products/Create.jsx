import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useCallback } from 'react';

/* ── JSON Editor & Visual Page Builder Component ── */
import JsonEditor from './JsonEditor';

/* ── Main Create Page ── */
export default function ProductsCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category: '',
        description: '',
        image: null,
        rating: 5.0,
        rating_count: 100,
        link: '',
        sort_order: 0,
        is_active: true,
        page_content: '',
    });

    const [jsonValid, setJsonValid] = useState(true);

    const handleJsonChange = useCallback((val) => {
        setData('page_content', val);
        if (!val.trim()) { setJsonValid(true); return; }
        try { JSON.parse(val); setJsonValid(true); }
        catch { setJsonValid(false); }
    }, []);

    const submit = (e) => {
        e.preventDefault();
        if (data.page_content.trim()) {
            try { JSON.parse(data.page_content); }
            catch (err) { alert('Page Content is not valid JSON. Please fix it before saving.\n\n' + err.message); return; }
        }
        post(route('admin.products.store'), { forceFormData: true });
    };

    return (
        <AdminLayout>
            <Head title="Add Product" />

            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link href={route('admin.products')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none' }} title="Back to products">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Add Product</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Create a new product with its page content</p>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Title *</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', border: errors.title ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} required />
                        {errors.title && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.title}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Category / Subtitle</label>
                        <input type="text" value={data.category} onChange={(e) => setData('category', e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                            placeholder="e.g. Automotive Embedded Development Boards" />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Short Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={3}
                            style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                    </div>

                    <div style={{ marginBottom: '20px', display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Rating (0–5)</label>
                            <input type="number" step="0.1" min="0" max="5" value={data.rating} onChange={(e) => setData('rating', parseFloat(e.target.value) || 0)}
                                style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Rating Count</label>
                            <input type="number" min="0" value={data.rating_count} onChange={(e) => setData('rating_count', parseInt(e.target.value) || 0)}
                                style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Link (URL slug)</label>
                        <input type="text" value={data.link} onChange={(e) => setData('link', e.target.value)}
                            style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }}
                            placeholder="/automatic-milk-vending-machine" />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Product Image</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])}
                            style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '24px', display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Sort Order</label>
                            <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)}
                                style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', paddingBottom: '4px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
                                <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)}
                                    style={{ width: '16px', height: '16px', accentColor: '#008ed2' }} />
                                Active (visible on site)
                            </label>
                        </div>
                    </div>

                    {/* Page Content JSON Editor */}
                    <div style={{ marginBottom: '28px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                            <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151' }}>Page Content (JSON)</label>
                            <span style={{ padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 600, background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}>Dynamic Page Builder</span>
                        </div>
                        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '12px', lineHeight: '1.5' }}>
                            This JSON controls all content on the product's public page. Pick a template below to get started.
                        </p>
                        <JsonEditor value={data.page_content} onChange={handleJsonChange} errors={errors.page_content} />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '8px', borderTop: '1px solid #f3f4f6' }}>
                        <button type="submit" disabled={processing || !jsonValid}
                            style={{ padding: '10px 28px', borderRadius: '10px', backgroundColor: (processing || !jsonValid) ? '#9ca3af' : '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: (processing || !jsonValid) ? 'not-allowed' : 'pointer' }}>
                            {processing ? 'Creating…' : 'Create Product'}
                        </button>
                        {!jsonValid && <span style={{ fontSize: '12px', color: '#dc2626' }}>Fix JSON errors before saving</span>}
                        <Link href={route('admin.products')} style={{ marginLeft: 'auto', padding: '10px 24px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
