import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Dashboard({ stats }) {
    const user = usePage().props.auth.user;
    const maxChart = Math.max(...stats.chart, 1);

    return (
        <AdminLayout>
            <Head title="Admin Dashboard" />

            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Dashboard</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Welcome back, {user.name.split(' ')[0]}</p>
            </div>

            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ margin: 0, fontSize: '13px', fontWeight: 500, color: '#6b7280' }}>Total Users</p>
                            <p style={{ margin: '6px 0 0', fontSize: '28px', fontWeight: 700, color: '#111827' }}>{stats.totalUsers}</p>
                        </div>
                        <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: '#eef9ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008ed2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ margin: 0, fontSize: '13px', fontWeight: 500, color: '#6b7280' }}>New This Month</p>
                            <p style={{ margin: '6px 0 0', fontSize: '28px', fontWeight: 700, color: '#111827' }}>{stats.newThisMonth}</p>
                        </div>
                        <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div>
                            <p style={{ margin: 0, fontSize: '13px', fontWeight: 500, color: '#6b7280' }}>New This Week</p>
                            <p style={{ margin: '6px 0 0', fontSize: '28px', fontWeight: 700, color: '#111827' }}>{stats.newThisWeek}</p>
                        </div>
                        <div style={{ width: '46px', height: '46px', borderRadius: '12px', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gap: '24px', marginTop: '24px', gridTemplateColumns: '1fr' }} className="lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111827' }}>User Registrations</h3>
                            <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#9ca3af' }}>Monthly — {new Date().getFullYear()}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '120px' }}>
                            {stats.chart.map((val, i) => (
                                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', height: '100%', justifyContent: 'flex-end' }}>
                                    <span style={{ fontSize: '10px', fontWeight: 600, color: '#6b7280' }}>{val}</span>
                                    <div style={{ width: '100%', borderRadius: '4px 4px 0 0', height: val > 0 ? `${(val / maxChart) * 100}%` : '0', minHeight: val > 0 ? '4px' : '0', backgroundColor: '#008ed2', transition: 'height 0.5s' }} />
                                    <span style={{ fontSize: '9px', color: '#9ca3af' }}>{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                        <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 600, color: '#111827' }}>Quick Actions</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <Link href="/admin/users/create" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'background 0.15s' }}>
                                <span style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eef9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#008ed2', fontSize: '18px', fontWeight: 700 }}>+</span>
                                Add New User
                            </Link>
                            <Link href="/admin/users" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'background 0.15s' }}>
                                <span style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#7c3aed' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197"/></svg>
                                </span>
                                Manage Users
                            </Link>
                            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '10px', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none', fontSize: '13px', fontWeight: 500, transition: 'background 0.15s' }}>
                                <span style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                </span>
                                Visit Website
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div>
                        <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#111827' }}>Recent Users</h3>
                        <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#9ca3af' }}>Latest registered users</p>
                    </div>
                    <Link href="/admin/users" style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', textDecoration: 'none', fontSize: '12px', fontWeight: 500 }}>
                        View All
                    </Link>
                </div>
                <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>User</th>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email</th>
                                <th style={{ padding: '12px 20px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stats.recentUsers.map((u) => (
                                <tr key={u.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                                    <td style={{ padding: '14px 20px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '34px', height: '34px', borderRadius: '50%', backgroundColor: '#eef9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#008ed2', fontSize: '13px', fontWeight: 600 }}>{u.name.charAt(0).toUpperCase()}</div>
                                            <span style={{ fontSize: '14px', fontWeight: 500, color: '#111827' }}>{u.name}</span>
                                        </div>
                                    </td>
                                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#6b7280' }}>{u.email}</td>
                                    <td style={{ padding: '14px 20px', fontSize: '13px', color: '#9ca3af' }}>{new Date(u.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}
