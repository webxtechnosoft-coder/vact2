import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

export default function ContactIndex({ messages }) {
    const [showFlash, setShowFlash] = useState(false);
    const [flashMsg, setFlashMsg] = useState('');

    const markRead = (msg) => {
        router.post(route('admin.contact.read', msg.id), {}, {
            onSuccess: () => {
                setFlashMsg('Message marked as read.');
                setShowFlash(true);
                setTimeout(() => setShowFlash(false), 4000);
            },
        });
    };

    const del = (msg) => {
        if (confirm(`Delete message from "${msg.name}"?`)) {
            router.delete(route('admin.contact.destroy', msg.id), {
                onSuccess: () => {
                    setFlashMsg('Message deleted.');
                    setShowFlash(true);
                    setTimeout(() => setShowFlash(false), 4000);
                },
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Contact Messages" />
            <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Contact Messages</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Messages submitted from the public contact form</p>
                </div>
                <a href="/admin/contact/edit" style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>Edit Contact Content</a>
            </div>

            {showFlash && (
                <div style={{ maxWidth: '1000px', padding: '12px 16px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '8px', color: '#065f46', fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
                    {flashMsg}
                </div>
            )}

            <div style={{ maxWidth: '1000px', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f9fafb' }}>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Status</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Name</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Email</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Subject</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Message</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Date</th>
                            <th style={{ padding: '10px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {messages.data.map((msg) => (
                            <tr key={msg.id} style={{ borderTop: '1px solid #f3f4f6', backgroundColor: msg.is_read ? 'transparent' : '#fffbeb' }}>
                                <td style={{ padding: '10px 16px' }}>
                                    <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, backgroundColor: msg.is_read ? '#ecfdf5' : '#fef3c7', color: msg.is_read ? '#065f46' : '#92400e' }}>
                                        {msg.is_read ? 'Read' : 'New'}
                                    </span>
                                </td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', fontWeight: 500, color: '#111827' }}>{msg.name}</td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', color: '#008ed2' }}><a href={`mailto:${msg.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{msg.email}</a></td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280', maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{msg.subject || '-'}</td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{msg.message}</td>
                                <td style={{ padding: '10px 16px', fontSize: '12px', color: '#9ca3af' }}>{new Date(msg.created_at).toLocaleDateString()}</td>
                                <td style={{ padding: '10px 16px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                    {!msg.is_read && (
                                        <button onClick={() => markRead(msg)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#eef9ff', color: '#008ed2', border: 'none', cursor: 'pointer', marginRight: '4px' }}>Mark Read</button>
                                    )}
                                    <button onClick={() => del(msg)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        {messages.data.length === 0 && (
                            <tr><td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>No messages yet.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>

            {messages.last_page > 1 && (
                <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
                    {messages.links.map((link, i) => (
                        <button
                            key={i}
                            disabled={!link.url}
                            onClick={() => link.url && router.get(link.url)}
                            style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, border: '1px solid #d1d5db', backgroundColor: link.active ? '#008ed2' : '#fff', color: link.active ? '#fff' : '#374151', cursor: link.url ? 'pointer' : 'not-allowed', opacity: link.url ? 1 : 0.5 }}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ))}
                </div>
            )}
        </AdminLayout>
    );
}
