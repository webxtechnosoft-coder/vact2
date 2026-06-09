import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, router } from '@inertiajs/react';

export default function UsersIndex({ users }) {
    const deleteUser = (user) => {
        if (confirm(`Are you sure you want to delete "${user.name}"?`)) {
            router.delete(route('admin.users.destroy', user.id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Users" />

            <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Users</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage all registered users</p>
                </div>
                <Link href="/admin/users/create" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 4.5v15m7.5-7.5h-15"/></svg>
                    Add User
                </Link>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '13px', color: '#4b5563', fontWeight: 500 }}>Show</span>
                    <select 
                        className="ignore"
                        value={users.per_page || 10} 
                        onChange={(e) => {
                            const query = new URLSearchParams(window.location.search);
                            query.set('per_page', e.target.value);
                            query.set('page', '1');
                            router.get(`${window.location.pathname}?${query.toString()}`, {}, { preserveState: true });
                        }}
                        style={{ 
                            padding: '6px 32px 6px 12px', 
                            border: '1px solid #d1d5db', 
                            borderRadius: '8px', 
                            fontSize: '13px', 
                            fontWeight: 500,
                            color: '#374151', 
                            backgroundColor: '#fff', 
                            cursor: 'pointer', 
                            outline: 'none',
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGI1NTYzIiBzdHJva2Utd2lkdGg9IjIuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSI2IDkgMTIgMTUgMTggOSI+PC9wb2x5bGluZT48L3N2Zz4=")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 10px center',
                            backgroundSize: '12px',
                            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                            transition: 'all 0.15s ease-in-out',
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = '#008ed2';
                            e.target.style.boxShadow = '0 0 0 3px rgba(0, 142, 210, 0.15)';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = '#d1d5db';
                            e.target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
                        }}
                    >
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                    <span style={{ fontSize: '13px', color: '#4b5563', fontWeight: 500 }}>entries</span>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>#</th>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>User</th>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</th>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Joined</th>
                                <th style={{ padding: '12px 20px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.map((user) => (
                                <tr key={user.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#9ca3af' }}>{user.id}</td>
                                    <td style={{ padding: '14px 20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#eef9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#008ed2', fontSize: '13px', fontWeight: 600 }}>{user.name.charAt(0).toUpperCase()}</div>
                                            <span style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{user.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#6b7280' }}>{user.email}</td>
                                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#9ca3af' }}>{new Date(user.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                                    <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                                        <Link href={`/admin/users/${user.id}/edit`} style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#eef9ff', color: '#008ed2', textDecoration: 'none', marginRight: '6px' }}>Edit</Link>
                                        <button onClick={() => deleteUser(user)} style={{ padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            {users.data.length === 0 && (
                                <tr><td colSpan={5} style={{ padding: '40px', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>No users found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {users.last_page > 1 && (
                <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ margin: 0, fontSize: '13px', color: '#6b7280' }}>Showing {users.from}–{users.to} of {users.total}</p>
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {users.links.map((link, i) => (
                            <button key={i} disabled={!link.url} onClick={() => link.url && router.get(link.url)} style={{ padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, border: '1px solid #e5e7eb', backgroundColor: link.active ? '#008ed2' : '#fff', color: link.active ? '#fff' : link.url ? '#374151' : '#d1d5db', cursor: link.url ? 'pointer' : 'not-allowed' }} dangerouslySetInnerHTML={{ __html: link.label }} />
                        ))}
                    </div>
                </div>
            )}
        </AdminLayout>
    );
}
