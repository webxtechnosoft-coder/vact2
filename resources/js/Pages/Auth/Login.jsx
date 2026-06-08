import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', fontFamily: "'DM Sans', sans-serif", backgroundColor: '#f8f4f2' }}>
            <Head title="Log in" />

            {/* Brand Side */}
            <div style={{ display: 'none', flex: '1', background: 'linear-gradient(135deg, #0d2944 0%, #008ed2 100%)', position: 'relative', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }} className="lg:flex">
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1 }}>
                    <div style={{ position: 'absolute', top: '10%', left: '10%', width: '300px', height: '300px', borderRadius: '50%', backgroundColor: '#fff', filter: 'blur(60px)' }}></div>
                    <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '200px', height: '200px', borderRadius: '50%', backgroundColor: '#008ed2', filter: 'blur(50px)' }}></div>
                </div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '40px' }}>
                    <img src="/assets/images/resources/vact-logo.webp" alt="VAct" style={{ width: '280px', marginBottom: '30px', filter: 'brightness(0) invert(1)' }} />
                    <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 700, marginBottom: '12px', fontFamily: "'Montserrat Alternates', sans-serif" }}>Welcome Back!</h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', maxWidth: '400px', margin: '0 auto', lineHeight: 1.7 }}>
                        Access your VAct Technologies admin dashboard to manage users, monitor activity, and configure settings.
                    </p>
                </div>
            </div>

            {/* Form Side */}
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <div style={{ width: '100%', maxWidth: '420px' }}>
                    {/* Mobile Logo */}
                    <div className="lg:hidden" style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <img src="/assets/images/resources/vact-logo.webp" alt="VAct" style={{ width: '200px' }} />
                    </div>

                    <div style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '36px', boxShadow: '0 4px 24px rgba(13,41,68,0.08)' }}>
                        <div style={{ marginBottom: '28px' }}>
                            <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#0d2944', marginBottom: '4px', fontFamily: "'Montserrat Alternates', sans-serif" }}>Sign In</h1>
                            <p style={{ fontSize: '14px', color: '#4D5756' }}>Enter your credentials to access admin</p>
                        </div>

                        {status && (
                            <div style={{ marginBottom: '16px', padding: '10px 14px', borderRadius: '8px', backgroundColor: '#e6f5fe', color: '#008ed2', fontSize: '13px' }}>
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0d2944', marginBottom: '6px' }}>Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    style={{ width: '100%', padding: '11px 14px', border: errors.email ? '1.5px solid #dc2626' : '1.5px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', color: '#0d2944', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box', backgroundColor: '#fafafa' }}
                                    onFocus={(e) => { if (!errors.email) e.target.style.borderColor = '#008ed2'; }}
                                    onBlur={(e) => { if (!errors.email) e.target.style.borderColor = '#e5e7eb'; }}
                                    placeholder="admin@vact.com"
                                    autoComplete="username"
                                />
                                {errors.email && <p style={{ marginTop: '5px', fontSize: '12px', color: '#dc2626' }}>{errors.email}</p>}
                            </div>

                            <div style={{ marginBottom: '20px' }}>
                                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0d2944', marginBottom: '6px' }}>Password</label>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    style={{ width: '100%', padding: '11px 14px', border: errors.password ? '1.5px solid #dc2626' : '1.5px solid #e5e7eb', borderRadius: '10px', fontSize: '14px', color: '#0d2944', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box', backgroundColor: '#fafafa' }}
                                    onFocus={(e) => { if (!errors.password) e.target.style.borderColor = '#008ed2'; }}
                                    onBlur={(e) => { if (!errors.password) e.target.style.borderColor = '#e5e7eb'; }}
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                />
                                {errors.password && <p style={{ marginTop: '5px', fontSize: '12px', color: '#dc2626' }}>{errors.password}</p>}
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '13px', color: '#4D5756' }}>
                                    <input
                                        type="checkbox"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                        style={{ accentColor: '#008ed2', width: '16px', height: '16px' }}
                                    />
                                    Remember me
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={route('password.request')}
                                        style={{ fontSize: '13px', color: '#008ed2', textDecoration: 'none', fontWeight: 500 }}
                                    >
                                        Forgot password?
                                    </Link>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                style={{ width: '100%', padding: '12px', backgroundColor: '#008ed2', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.7 : 1, transition: 'all 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                            >
                                {processing ? 'Signing in...' : 'Sign In'}
                            </button>

                            <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '13px', color: '#4D5756' }}>
                                Don't have an account?{' '}
                                <Link href={route('register')} style={{ color: '#008ed2', fontWeight: 500, textDecoration: 'none' }}>
                                    Register
                                </Link>
                            </div>
                        </form>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Link href="/" style={{ fontSize: '13px', color: '#4D5756', textDecoration: 'none' }}>
                            &larr; Back to Website
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
