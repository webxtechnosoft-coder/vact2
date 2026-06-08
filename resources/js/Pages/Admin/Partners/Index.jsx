import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function PartnersIndex({ partners, type }) {
    const deletePartner = (p) => {
        if (confirm(`Are you sure you want to delete this ${type} logo?`)) {
            router.delete(route('admin.partners.destroy', p.id));
        }
    };

    const getImgSrc = (logo) => {
        if (!logo) return null;
        if (logo.startsWith('http') || logo.startsWith('/')) return logo;
        if (logo.startsWith('assets/')) return `/${logo}`;
        return `/storage/${logo}`;
    };

    const getTitle = () => type === 'client' ? 'Our Clients' : 'Partner Logos';

    return (
        <AdminLayout>
            <Head title={getTitle()} />

            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>{getTitle()}</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>
                        {partners.total} logo{partners.total !== 1 ? 's' : ''} found — manage homepage {type} images
                    </p>
                </div>
                <Link
                    href={route('admin.partners.create', { type })}
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 4.5v15m7.5-7.5h-15"/></svg>
                    Add {type === 'client' ? 'Client' : 'Partner'} Logo
                </Link>
            </div>

            {partners.data.length === 0 ? (
                <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', padding: '60px', textAlign: 'center', color: '#9ca3af', fontSize: '14px' }}>
                    No logos found. Add one to get started.
                </div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '16px' }}>
                    {partners.data.map((p) => (
                        <div key={p.id} style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            {/* Logo Image */}
                            <div style={{ padding: '20px', backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '90px' }}>
                                {getImgSrc(p.logo) ? (
                                    <img
                                        src={getImgSrc(p.logo)}
                                        alt={p.name || ''}
                                        style={{ maxHeight: '60px', maxWidth: '140px', objectFit: 'contain' }}
                                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                                    />
                                ) : null}
                                <div style={{ display: 'none', flexDirection: 'column', alignItems: 'center', gap: '6px', color: '#9ca3af' }}>
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                                    <span style={{ fontSize: '11px' }}>No image</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div style={{ padding: '12px 14px', flex: 1 }}>
                                <p style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: '#111827', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {p.name || '—'}
                                </p>
                                <div style={{ marginTop: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '20px', fontSize: '10px', fontWeight: 600, backgroundColor: p.is_active ? '#ecfdf5' : '#fef2f2', color: p.is_active ? '#065f46' : '#dc2626' }}>
                                        {p.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                    <span style={{ fontSize: '11px', color: '#9ca3af' }}>#{p.sort_order}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div style={{ padding: '10px 14px', borderTop: '1px solid #f3f4f6', display: 'flex', gap: '6px' }}>
                                <Link
                                    href={route('admin.partners.edit', p.id)}
                                    style={{ flex: 1, textAlign: 'center', padding: '6px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#eef9ff', color: '#008ed2', textDecoration: 'none' }}
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deletePartner(p)}
                                    style={{ flex: 1, padding: '6px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer' }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {partners.last_page > 1 && (
                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>Showing {partners.from}–{partners.to} of {partners.total}</p>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {partners.links.map((link, i) => (
                            <button key={i} disabled={!link.url} onClick={() => link.url && router.get(link.url)}
                                style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, border: '1px solid #e5e7eb', backgroundColor: link.active ? '#008ed2' : '#fff', color: link.active ? '#fff' : link.url ? '#374151' : '#d1d5db', cursor: link.url ? 'pointer' : 'not-allowed' }}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
