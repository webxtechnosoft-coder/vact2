import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;
    const flash = usePage().props.flash || {};
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showFlash, setShowFlash] = useState(!!(flash.success || flash.error));
    const [openMenus, setOpenMenus] = useState({});

    useEffect(() => {
        if (flash.success || flash.error) {
            setShowFlash(true);
            const timer = setTimeout(() => setShowFlash(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [flash.success, flash.error]);

    const isActive = (path) => {
        if (path === '/admin' && window.location.pathname === '/admin') return true;
        if (path !== '/admin' && window.location.pathname.startsWith(path)) return true;
        return false;
    };

    const toggleMenu = (label) => {
        setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
    };

    const navItems = [
        { label: 'Dashboard', path: '/admin', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { label: 'Sliders', path: '/admin/sliders', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2' },
        { label: 'Company', path: '/admin/company', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
        {
            label: 'About',
            icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            children: [
                { label: 'About Us', path: '/admin/about' },
                { label: 'Blog', path: '/admin/blogs' },
                { label: 'Video Testimonials', path: '/admin/testimonials' },
                { label: 'Gallery', path: '/admin/galleries' },
            ],
        },
        { label: 'Careers', path: '/admin/careers', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        {
            label: 'Our Services',
            icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
            children: [
                { label: 'Industrial Automation & Control', path: '/admin/services/industrial-automation' },
                { label: 'Embedded System', path: '/admin/services/embedded-systems' },
                { label: 'Embedded Offshore Outsourcing', path: '/admin/services/embedded-offshore-outsourcing' },
                { label: 'Fuel Monitoring System', path: '/admin/services/fuel-monitoring-system' },
                { label: 'Civil Engineering', path: '/admin/services/civil-pmc' },
                { label: 'Human Resources', path: '/admin/services/human-resource' },
            ],
        },
        { label: 'Applications', path: '/admin/applications', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
        { label: 'Contact', path: '/admin/contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
        { label: 'Users', path: '/admin/users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
    ];
    const isHomeActive = () => {
        const path = window.location.pathname;
        return path.startsWith('/admin/sliders') ||
               path.startsWith('/admin/company') ||
               path.startsWith('/admin/products') ||
               path.startsWith('/admin/services') ||
               path.startsWith('/admin/placements') ||
               path.startsWith('/admin/partners') ||
               path.startsWith('/admin/blogs') ||
               path.startsWith('/admin/faqs') ||
               path.startsWith('/admin/testimonials') ||
               path.startsWith('/admin/google-reviews');
    };

    const rawServices = usePage().props.services || [];
    const services = Array.isArray(rawServices) ? rawServices : (rawServices?.data || []);
    const rawProducts = usePage().props.sidebarProducts || [];
    const products = Array.isArray(rawProducts) ? rawProducts : (rawProducts?.data || []);
    const isServiceActive = () => {
        return window.location.pathname.startsWith('/admin/services');
    };
    const isProductActive = () => {
        return window.location.pathname.startsWith('/admin/products');
    };

    const [homeOpen, setHomeOpen] = useState(true);
    const [trainingOpen, setTrainingOpen] = useState(window.location.pathname === '/admin/company/training');
    const [servicesOpen, setServicesOpen] = useState(isServiceActive());
    const [productsOpen, setProductsOpen] = useState(isProductActive());
    const [productSubOpen, setProductSubOpen] = useState({});

    const homeSections = [
        { label: 'Slider', path: '/admin/sliders' },
        { label: 'About', path: '/admin/company/about' },
        { label: 'Who We Are', path: '/admin/company/who-we-are' },
        { label: 'Our Product', path: '/admin/products' },
        { label: 'Our Service', path: '/admin/services' },
        { label: 'Our Training', path: '/admin/company/training' },
        { label: 'Placements', path: '/admin/placements' },
        { label: 'Placement Images', path: '/admin/partners?type=partner' },
        { label: 'Our Clients', path: '/admin/partners?type=client' },
        { label: 'Why Choose Us', path: '/admin/company/why-choose-us' },
        { label: 'How It Works', path: '/admin/company/how-it-works' },
        { label: 'Blogs', path: '/admin/blogs' },
        { label: 'FAQ', path: '/admin/faqs' },
        { label: 'Google Reviews', path: '/admin/google-reviews' }
    ];


    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: "'DM Sans', sans-serif", backgroundColor: '#f1f5f9' }}>
            {sidebarOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 40, backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setSidebarOpen(false)} className="lg:hidden" />
            )}

            <aside className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col bg-white border-r border-gray-200 transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div style={{ height: '64px', display: 'flex', alignItems: 'center', padding: '0 20px', borderBottom: '1px solid #e5e7eb' }}>
                    <Link href="/admin">
                        <img src="/assets/images/resources/vact-logo.webp" alt="VAct" style={{ height: '28px' }} />
                    </Link>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="hide-scrollbar">
                    <style dangerouslySetInnerHTML={{__html: `
                        .hide-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                    `}} />

                    <div style={{ padding: '16px 12px 8px' }}>
                        <p style={{ margin: 0, fontSize: '11px', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', padding: '0 12px' }}>Main Menu</p>
                    </div>

                    <nav style={{ padding: '4px 12px' }}>
                        {/* Dashboard */}
                        <Link
                            href="/admin"
                            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', marginBottom: '2px', borderRadius: '10px', fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: isActive('/admin') ? '#008ed2' : '#4B5563', backgroundColor: isActive('/admin') ? '#eef9ff' : 'transparent', transition: 'all 0.15s' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isActive('/admin') ? '#008ed2' : '#9ca3af'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Dashboard
                        </Link>

                        {/* Home Dropdown Group */}
                        <div style={{ marginBottom: '2px' }}>
                            <button
                                onClick={() => setHomeOpen(!homeOpen)}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', fontSize: '14px', fontWeight: 500, border: 'none', backgroundColor: isHomeActive() ? '#eef9ff' : 'transparent', color: isHomeActive() ? '#008ed2' : '#4B5563', cursor: 'pointer', transition: 'all 0.15s', textAlign: 'left' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isHomeActive() ? '#008ed2' : '#9ca3af'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span>Home</span>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: homeOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {homeOpen && (
                                <div style={{ paddingLeft: '24px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                     {homeSections.map((sec) => {
                                        if (sec.label === 'Our Service') {
                                            const active = isServiceActive();
                                            return (
                                                <div key="our-services-dropdown" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setServicesOpen(!servicesOpen)}
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            width: '100%',
                                                            padding: '8px 12px',
                                                            borderRadius: '8px',
                                                            fontSize: '13px',
                                                            fontWeight: 500,
                                                            border: 'none',
                                                            backgroundColor: active ? '#f0f9ff' : 'transparent',
                                                            color: active ? '#008ed2' : '#6b7280',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.15s',
                                                            textAlign: 'left'
                                                        }}
                                                    >
                                                        <span>Our Service</span>
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: active ? '#008ed2' : '#9ca3af' }}>
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </button>
                                                    {servicesOpen && (
                                                        <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
                                                            <Link
                                                                href="/admin/services"
                                                                style={{
                                                                    display: 'block',
                                                                    padding: '6px 12px',
                                                                    borderRadius: '6px',
                                                                    fontSize: '12px',
                                                                    fontWeight: 500,
                                                                    textDecoration: 'none',
                                                                    color: window.location.pathname === '/admin/services' ? '#008ed2' : '#6b7280',
                                                                    backgroundColor: window.location.pathname === '/admin/services' ? '#f0f9ff' : 'transparent',
                                                                    transition: 'all 0.15s'
                                                                }}
                                                            >
                                                                All Services
                                                            </Link>
                                                            {services.map((service) => {
                                                                const sActive = window.location.pathname === `/admin/services/${service.id}/edit`;
                                                                return (
                                                                    <Link
                                                                        key={service.id}
                                                                        href={`/admin/services/${service.id}/edit`}
                                                                        style={{
                                                                            display: 'block',
                                                                            padding: '6px 12px',
                                                                            borderRadius: '6px',
                                                                            fontSize: '12px',
                                                                            fontWeight: 500,
                                                                            textDecoration: 'none',
                                                                            color: sActive ? '#008ed2' : '#6b7280',
                                                                            backgroundColor: sActive ? '#f0f9ff' : 'transparent',
                                                                            transition: 'all 0.15s'
                                                                        }}
                                                                    >
                                                                        {service.title}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        }

                                        if (sec.label === 'Our Training') {
                                            const active = window.location.pathname === '/admin/company/training';
                                            return (
                                                <div key="our-training-dropdown" style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setTrainingOpen(!trainingOpen)}
                                                        style={{
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'space-between',
                                                            width: '100%',
                                                            padding: '8px 12px',
                                                            borderRadius: '8px',
                                                            fontSize: '13px',
                                                            fontWeight: 500,
                                                            border: 'none',
                                                            backgroundColor: active ? '#f0f9ff' : 'transparent',
                                                            color: active ? '#008ed2' : '#6b7280',
                                                            cursor: 'pointer',
                                                            transition: 'all 0.15s',
                                                            textAlign: 'left'
                                                        }}
                                                    >
                                                        <span>Our Training</span>
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: trainingOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: active ? '#008ed2' : '#9ca3af' }}>
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </button>
                                                    {trainingOpen && (
                                                        <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
                                                            <Link
                                                                href="/admin/company/training"
                                                                style={{
                                                                    display: 'block',
                                                                    padding: '6px 12px',
                                                                    borderRadius: '6px',
                                                                    fontSize: '12px',
                                                                    fontWeight: 500,
                                                                    textDecoration: 'none',
                                                                    color: active ? '#008ed2' : '#6b7280',
                                                                    backgroundColor: active ? '#f0f9ff' : 'transparent',
                                                                    transition: 'all 0.15s'
                                                                }}
                                                            >
                                                                More About Us
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        }

                <nav style={{ flex: 1, padding: '4px 12px' }}>
                    {navItems.map((item) =>
                        item.children ? (
                            <div key={item.label}>
                                <button
                                    onClick={() => toggleMenu(item.label)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', marginBottom: '2px', borderRadius: '10px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', width: '100%', border: 'none', background: 'none', textAlign: 'left', color: openMenus[item.label] ? '#008ed2' : '#4B5563', backgroundColor: openMenus[item.label] ? '#eef9ff' : 'transparent', transition: 'all 0.15s' }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={openMenus[item.label] ? '#008ed2' : '#9ca3af'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={item.icon} />
                                    </svg>
                                    <span style={{ flex: 1 }}>{item.label}</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: openMenus[item.label] ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                        <path d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openMenus[item.label] && (
                                    <div style={{ marginLeft: '20px' }}>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.path}
                                                href={child.path}
                                                style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 14px', marginBottom: '2px', borderRadius: '10px', fontSize: '13px', fontWeight: 500, textDecoration: 'none', color: isActive(child.path) ? '#008ed2' : '#4B5563', backgroundColor: isActive(child.path) ? '#eef9ff' : 'transparent', transition: 'all 0.15s' }}
                                            >
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: isActive(child.path) ? '#008ed2' : '#d1d5db', flexShrink: 0 }} />
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.path}
                                href={item.path}
                                style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', marginBottom: '2px', borderRadius: '10px', fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: isActive(item.path) ? '#008ed2' : '#4B5563', backgroundColor: isActive(item.path) ? '#eef9ff' : 'transparent', transition: 'all 0.15s' }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isActive(item.path) ? '#008ed2' : '#9ca3af'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={item.icon} />
                                </svg>
                                {item.label}
                            </Link>
                        )
                    )}
                </nav>
                                        const active = window.location.pathname + window.location.search === sec.path;
                                        return (
                                            <Link
                                                key={sec.path}
                                                href={sec.path}
                                                style={{ display: 'block', padding: '8px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, textDecoration: 'none', color: active ? '#008ed2' : '#6b7280', backgroundColor: active ? '#f0f9ff' : 'transparent', transition: 'all 0.15s' }}
                                            >
                                                {sec.label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Users */}
                        <Link
                            href="/admin/users"
                            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', marginBottom: '2px', borderRadius: '10px', fontSize: '14px', fontWeight: 500, textDecoration: 'none', color: isActive('/admin/users') ? '#008ed2' : '#4B5563', backgroundColor: isActive('/admin/users') ? '#eef9ff' : 'transparent', transition: 'all 0.15s' }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isActive('/admin/users') ? '#008ed2' : '#9ca3af'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                            Users
                        </Link>

                        {/* Products - Dropdown */}
                        <div style={{ marginBottom: '2px' }}>
                            <button
                                onClick={() => setProductsOpen(!productsOpen)}
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', fontSize: '14px', fontWeight: 500, border: 'none', backgroundColor: isProductActive() ? '#eef9ff' : 'transparent', color: isProductActive() ? '#008ed2' : '#4B5563', cursor: 'pointer', transition: 'all 0.15s', textAlign: 'left' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isProductActive() ? '#008ed2' : '#9ca3af'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                    <span>Products</span>
                                </div>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {productsOpen && (() => {
                                // Group products by category
                                const groups = {};
                                const ungrouped = [];
                                products.forEach(p => {
                                    if (p.category) {
                                        if (!groups[p.category]) groups[p.category] = [];
                                        groups[p.category].push(p);
                                    } else {
                                        ungrouped.push(p);
                                    }
                                });
                                return (
                                    <div style={{ paddingLeft: '24px', marginTop: '4px', display: 'flex', flexDirection: 'column', gap: '2px' }}>

                                        {/* Grouped sub-dropdowns */}
                                        {Object.entries(groups).map(([cat, items]) => {
                                            const isSubOpen = productSubOpen[cat] !== false;
                                            const isCatActive = items.some(p => window.location.pathname === `/admin/products/${p.id}/edit`);
                                            return (
                                                <div key={cat}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setProductSubOpen(prev => ({ ...prev, [cat]: prev[cat] === false ? true : false }))}
                                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, border: 'none', backgroundColor: isCatActive ? '#f0f9ff' : 'transparent', color: isCatActive ? '#008ed2' : '#6b7280', cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s' }}
                                                    >
                                                        <span>{cat}</span>
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isSubOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}>
                                                            <polyline points="6 9 12 15 18 9" />
                                                        </svg>
                                                    </button>
                                                    {isSubOpen && (
                                                        <div style={{ paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
                                                            {items.map(p => {
                                                                const pActive = window.location.pathname === `/admin/products/${p.id}/edit`;
                                                                return (
                                                                    <Link key={p.id} href={`/admin/products/${p.id}/edit`} style={{ display: 'block', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 500, textDecoration: 'none', color: pActive ? '#008ed2' : '#6b7280', backgroundColor: pActive ? '#f0f9ff' : 'transparent', transition: 'all 0.15s' }}>
                                                                        {p.title}
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}

                                        {/* Ungrouped products */}
                                        {ungrouped.map(p => {
                                            const pActive = window.location.pathname === `/admin/products/${p.id}/edit`;
                                            return (
                                                <Link key={p.id} href={`/admin/products/${p.id}/edit`} style={{ display: 'block', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, textDecoration: 'none', color: pActive ? '#008ed2' : '#6b7280', backgroundColor: pActive ? '#f0f9ff' : 'transparent', transition: 'all 0.15s' }}>
                                                    {p.title}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                );
                            })()}
                        </div>

                    </nav>
                </div>

                <div style={{ padding: '12px', borderTop: '1px solid #e5e7eb' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#eef9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#008ed2', fontSize: '13px', fontWeight: 600 }}>{user.name.charAt(0).toUpperCase()}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#1f2937', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.name}</p>
                            <p style={{ margin: 0, fontSize: '11px', color: '#9ca3af', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.email}</p>
                        </div>
                    </div>
                </div>
            </aside>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }} className="lg:ml-64">
                <header style={{ height: '64px', display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb', padding: '0 24px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                    <button onClick={() => setSidebarOpen(true)} style={{ marginRight: '16px', padding: '8px', borderRadius: '8px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: '#6b7280' }} className="lg:hidden">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
                    </button>

                    <div style={{ flex: 1 }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Link href={route('logout')} method="post" as="button" style={{ padding: '7px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: '#fff', fontSize: '13px', fontWeight: 500, color: '#6b7280', cursor: 'pointer', textDecoration: 'none' }}>
                            Logout
                        </Link>
                    </div>
                </header>

                {showFlash && flash.success && (
                    <div style={{ margin: '16px 24px 0', padding: '12px 16px', borderRadius: '10px', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#065f46', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        {flash.success}
                    </div>
                )}
                {showFlash && flash.error && (
                    <div style={{ margin: '16px 24px 0', padding: '12px 16px', borderRadius: '10px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                        {flash.error}
                    </div>
                )}

                <main style={{ flex: 1, overflow: 'auto', padding: '24px' }}>
                    {children}
                </main>
            </div>
        </div>
    );
}
