import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function TestimonialsIndex({ testimonials }) {
    const deleteTestimonial = (testimonial) => {
        if (confirm(`Are you sure you want to delete the testimonial from "${testimonial.name}"?`)) {
            router.delete(route('admin.testimonials.destroy', testimonial.id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Testimonials" />

            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Testimonials</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage dynamic homepage Google reviews / client testimonials</p>
                </div>
                <Link href={route('admin.testimonials.create')} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 4.5v15m7.5-7.5h-15"/></svg>
                    Add Testimonial
                </Link>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Avatar</th>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Name</th>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Role / Company</th>
                                <th style={{ padding: '12px 20px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rating</th>
                                <th style={{ padding: '12px 20px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Order</th>
                                <th style={{ padding: '12px 20px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active</th>
                                <th style={{ padding: '12px 20px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.data.map((t) => (
                                <tr key={t.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                                    <td style={{ padding: '14px 20px' }}>
                                        {t.image ? (
                                            <img src={t.image.startsWith('http') || t.image.startsWith('/') ? t.image : `/storage/${t.image}`} alt="" style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #e5e7eb' }} />
                                        ) : (
                                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#4b5563' }}>
                                                {t.name ? t.name.charAt(0).toUpperCase() : '?'}
                                            </div>
                                        )}
                                    </td>
                                    <td style={{ padding: '14px 20px', fontSize: '13px', fontWeight: 500, color: '#111827' }}>{t.name}</td>
                                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#6b7280' }}>{t.role || '-'}</td>
                                    <td style={{ padding: '14px 20px', textAlign: 'center', fontSize: '13px', color: '#fbbf24' }}>
                                        {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                                    </td>
                                    <td style={{ padding: '14px 20px', textAlign: 'center', fontSize: '13px', color: '#6b7280' }}>{t.sort_order}</td>
                                    <td style={{ padding: '14px 20px', textAlign: 'center' }}>
                                        <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, backgroundColor: t.is_active ? '#ecfdf5' : '#fef2f2', color: t.is_active ? '#065f46' : '#dc2626' }}>
                                            {t.is_active ? 'Yes' : 'No'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                                        <Link href={route('admin.testimonials.edit', t.id)} style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#eef9ff', color: '#008ed2', textDecoration: 'none', marginRight: '6px' }}>Edit</Link>
                                        <button onClick={() => deleteTestimonial(t)} style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            {testimonials.data.length === 0 && (
                                <tr><td colSpan={7} style={{ padding: '40px', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>No testimonials found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {testimonials.last_page > 1 && (
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>Showing {testimonials.from}–{testimonials.to} of {testimonials.total}</p>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {testimonials.links.map((link, i) => (
                            <button key={i} disabled={!link.url} onClick={() => link.url && router.get(link.url)} style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, border: '1px solid #e5e7eb', backgroundColor: link.active ? '#008ed2' : '#fff', color: link.active ? '#fff' : link.url ? '#374151' : '#d1d5db', cursor: link.url ? 'pointer' : 'not-allowed' }} dangerouslySetInnerHTML={{ __html: link.label }} />
                        ))}
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
