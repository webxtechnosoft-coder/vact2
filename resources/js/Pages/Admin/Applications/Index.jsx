import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router } from '@inertiajs/react';

export default function ApplicationsIndex({ applications }) {
    const del = (app) => {
        if (confirm(`Delete application from "${app.first_name}"?`)) {
            router.delete(route('admin.applications.destroy', app.id), {
                onSuccess: () => { },
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Applications" />
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Job Applications</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>{applications.length} total submissions</p>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f9fafb' }}>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Name</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Email</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Phone</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Position</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Resume</th>
                            <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Date</th>
                            <th style={{ padding: '10px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(applications || []).map((app) => (
                            <tr key={app.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                                <td style={{ padding: '10px 16px', fontSize: '13px', fontWeight: 500, color: '#111827' }}>{app.first_name}</td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280' }}>{app.email}</td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280' }}>{app.phone || '-'}</td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280' }}>{app.position || '-'}</td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280' }}>
                                    {app.resume ? <a href={`/storage/${app.resume}`} target="_blank" rel="noopener noreferrer" style={{ color: '#008ed2', textDecoration: 'none' }}>View</a> : '-'}
                                </td>
                                <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280' }}>{new Date(app.created_at).toLocaleDateString()}</td>
                                <td style={{ padding: '10px 16px', textAlign: 'right' }}>
                                    <button onClick={() => del(app)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer' }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                        {(!applications || applications.length === 0) && (
                            <tr><td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>No applications yet.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
}