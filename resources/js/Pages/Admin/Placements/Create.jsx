import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function PlacementsCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        role: '',
        company: '',
        text: '',
        image: null,
        sort_order: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.placements.store'), {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Add Associate" />

            <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Link href={route('admin.placements')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none', transition: 'all 0.15s ease' }} title="Back to placements">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Add placed Associate</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Create a new placement record</p>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Name *</label>
                        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.name ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} required />
                        {errors.name && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.name}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Role / Designation *</label>
                        <input type="text" value={data.role} onChange={(e) => setData('role', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.role ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} required placeholder="e.g. Hardware Design Engineer, Embedded Software Engineer" />
                        {errors.role && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.role}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Company / Package Details</label>
                        <input type="text" value={data.company} onChange={(e) => setData('company', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} placeholder="e.g. Bosch, HCL, Package: 7 LPA, Batch 51" />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Quote / Review Text</label>
                        <textarea value={data.text} onChange={(e) => setData('text', e.target.value)} rows={4} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} placeholder="Describe their experience or details of placement..." />
                    </div>

                    <div style={{ marginBottom: '24px', border: '1px solid #e5e7eb', padding: '20px', borderRadius: '12px', backgroundColor: '#f9fafb' }}>
                        <label style={{ display: 'block', marginBottom: '12px', fontSize: '14px', fontWeight: 700, color: '#374151' }}>Associate Details & Photo</label>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                            <div style={{ flex: 2, minWidth: '200px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Upload Photo</label>
                                <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: errors.image ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', backgroundColor: '#fff', boxSizing: 'border-box' }} />
                                {errors.image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.image}</p>}
                            </div>
                            <div style={{ flex: 1, minWidth: '120px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Sort Order</label>
                                <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '6.5px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', backgroundColor: '#fff', boxSizing: 'border-box' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer' }}>
                            Add Associate
                        </button>
                        <Link href={route('admin.placements')} style={{ padding: '10px 24px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
