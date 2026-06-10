import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function PartnersEdit({ partner }) {
    const { data, setData, post, processing, errors } = useForm({
        name: partner.name || '',
        logo: null,
        type: partner.type || 'partner',
        link: partner.link || '',
        sort_order: partner.sort_order || 0,
        is_active: partner.is_active !== false,
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(route('admin.partners.update', partner.id), {
            _method: 'PUT',
            ...data,
            forceFormData: true,
        });
    };

    const getTitle = () => {
        return data.type === 'client' ? 'Edit Client Logo' : 'Edit Partner Logo';
    };

    return (
        <AdminLayout>
            <Head title={getTitle()} />

            <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Link href={route('admin.partners', { type: data.type })} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none', transition: 'all 0.15s ease' }} title="Back">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>{getTitle()}</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Update logo details and image</p>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <input type="hidden" value={data.type} />

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Company Name</label>
                        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.name ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                        {errors.name && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.name}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Link (URL)</label>
                        <input type="text" value={data.link} onChange={(e) => setData('link', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '24px', border: '1px solid #e5e7eb', padding: '20px', borderRadius: '12px', backgroundColor: '#f9fafb' }}>
                        <label style={{ display: 'block', marginBottom: '12px', fontSize: '14px', fontWeight: 700, color: '#374151' }}>Logo Details & Image</label>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                            {partner.logo && (
                                <div style={{ flexShrink: 0 }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Current Logo</label>
                                    <div style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '6px', borderRadius: '6px' }}>
                                        <img src={partner.logo.startsWith('http') || partner.logo.startsWith('/') ? partner.logo : `/storage/${partner.logo}`} alt="Preview" style={{ maxHeight: '28px', maxWidth: '100px', objectFit: 'contain' }} />
                                    </div>
                                </div>
                            )}
                            <div style={{ flex: 2, minWidth: '200px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>
                                    {partner.logo ? 'Change Logo' : 'Upload Logo'}
                                </label>
                                <input type="file" accept="image/*" onChange={(e) => setData('logo', e.target.files[0])} style={{ width: '100%', padding: '6px', border: errors.logo ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', backgroundColor: '#fff', boxSizing: 'border-box' }} />
                                {errors.logo && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.logo}</p>}
                            </div>
                            <div style={{ flex: 1, minWidth: '120px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Sort Order</label>
                                <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '6.5px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', backgroundColor: '#fff', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Active</label>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '28px', width: '28px', backgroundColor: '#fff', border: '1px solid #d1d5db', borderRadius: '8px', boxSizing: 'border-box' }}>
                                    <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} style={{ width: '16px', height: '16px', accentColor: '#008ed2', cursor: 'pointer', margin: 0 }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer' }}>
                            Save Changes
                        </button>
                        <Link href={route('admin.partners', { type: data.type })} style={{ padding: '10px 24px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
