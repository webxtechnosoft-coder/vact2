import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useCallback } from 'react';

/* ── JSON Editor & Visual Page Builder Component ── */
import JsonEditor from './JsonEditor';

/* ── Main Create Page ── */
export default function ProductsCreate() {
    const timestamp = Date.now();
    const { data, setData, post, processing, errors } = useForm({
        title: `Product ${timestamp}`,
        category: 'Embedded Systems',
        description: 'Auto-generated product details.',
        image: null,
        rating: 5.0,
        rating_count: 100,
        link: `/product-${timestamp}`,
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


                    <div style={{ marginBottom: '28px' }}>
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
