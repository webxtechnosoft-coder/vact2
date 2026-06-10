import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ServicesCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        image: null,
        link: '',
        sort_order: 0,
        is_active: true,
        page_content: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.services.store'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Add Service" />

            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link href={route('admin.services')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none', transition: 'all 0.15s ease' }} title="Back to services">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Add Service</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Create a new homepage service listing</p>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Title *</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.title ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} required />
                        {errors.title && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.title}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={4} style={{ width: '100%', padding: '10px 14px', border: errors.description ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                        {errors.description && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.description}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Link (URL)</label>
                        <input type="text" value={data.link} onChange={(e) => setData('link', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} placeholder="e.g. /embedded-systems" />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Service Image</label>
                        <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                        {errors.image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.image}</p>}
                    </div>

                    <div style={{ marginBottom: '20px', display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Sort Order</label>
                            <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', paddingBottom: '4px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
                                <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} style={{ width: '16px', height: '16px', accentColor: '#008ed2' }} />
                                Active
                            </label>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer' }}>
                            Create Service
                        </button>
                        <Link href={route('admin.services')} style={{ padding: '10px 24px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
