import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function UsersEdit({ user }) {
    const { data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/users/${user.id}`);
    };

    return (
        <AdminLayout>
            <Head title="Edit User" />

            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Edit User</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Update user information</p>
            </div>

            <div style={{ maxWidth: '600px', backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Name</label>
                        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.name ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.name) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.name) e.target.style.borderColor = '#d1d5db'; }} />
                        {errors.name && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.name}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Email</label>
                        <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.email ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.email) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.email) e.target.style.borderColor = '#d1d5db'; }} />
                        {errors.email && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.email}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>New Password</label>
                        <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.password ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => { if (!errors.password) e.target.style.borderColor = '#008ed2'; }} onBlur={(e) => { if (!errors.password) e.target.style.borderColor = '#d1d5db'; }} placeholder="Leave blank to keep current" />
                        {errors.password && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.password}</p>}
                    </div>

                    <div style={{ marginBottom: '28px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Confirm New Password</label>
                        <input type="password" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', outline: 'none', boxSizing: 'border-box' }} onFocus={(e) => e.target.style.borderColor = '#008ed2'} onBlur={(e) => e.target.style.borderColor = '#d1d5db'} placeholder="Confirm new password" />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                            {processing ? 'Updating...' : 'Update User'}
                        </button>
                        <Link href="/admin/users" style={{ padding: '10px 24px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
