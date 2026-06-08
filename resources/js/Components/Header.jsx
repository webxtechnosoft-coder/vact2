import { Link, usePage, router } from '@inertiajs/react';

export default function Header() {
    const { auth, menu } = usePage().props;
    const user = auth?.user;

    const renderChildren = (items, depth = 0) => {
        if (!items || items.length === 0) return null;

        return (
            <ul className={depth === 0 ? 'shadow-box' : 'submenu-box'}>
                {items.map((item) => {
                    const hasChildren = item.children && item.children.length > 0;
                    const liClass = depth === 1 && hasChildren ? 'submenu' : '';

                    return (
                        <li key={item.id} className={liClass}>
                            {hasChildren && depth === 1 ? (
                                <>
                                    <a style={{ fontSize: '14px', padding: '10px 20px' }} href="#">{item.label}</a>
                                    {renderChildren(item.children, depth + 1)}
                                </>
                            ) : hasChildren ? (
                                <>
                                    <a href="#">{item.label}</a>
                                    {renderChildren(item.children, depth + 1)}
                                </>
                            ) : (
                                <Link style={depth >= 2 ? { fontSize: '13px', padding: '8px 20px' } : { fontSize: '14px', padding: '10px 20px' }} href={item.url || '#'}>{item.label}</Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        );
    };

    return (
        <>
            <header className="main-header">
                <div className="main-menu__top">
                    <div className="main-menu__top-inner">
                        <ul className="list-unstyled main-menu__contact-list">
                            <li>
                                <div className="icon">
                                    <i className="far fa-map-marker-alt"></i>
                                </div>
                                <div className="text">
                                    <p>FREE..!!! Seminar on "Software Development Lifecycle in Automotive domain". Check Careers Page</p>
                                </div>
                            </li>
                        </ul>
                        <p className="main-menu__top-welcome-text">Welcome to Eduvers Our Best Education HTML5 Template</p>
                        <div className="main-menu__top-right">
                            <p className="main-menu__social-title">Follow Us On:</p>
                            <div className="main-menu__social">
                                <a href="https://x.com/VActTechnology" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.facebook.com/VActTechnologies" target="_blank"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/company/vact-technologies/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/vacttech/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UCcpRq9mlF7iP3GiZuZBO3sg" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a href="https://t.me/vacttechnologycareers" target="_blank"><i className="fab fa-telegram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="/assets/images/resources/vact-logo.webp" alt="" width="250" /></Link>
                                </div>
                            </div>
                            <div className="main-menu__main-menu-box">
                                <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                <ul className="main-menu__list">
                                    {menu?.map((item) => {
                                        const hasChildren = item.children && item.children.length > 0;

                                        return (
                                            <li key={item.id} className={hasChildren ? 'dropdown' : ''}>
                                                {hasChildren ? (
                                                    <>
                                                        <a href="#">{item.label}</a>
                                                        {renderChildren(item.children)}
                                                    </>
                                                ) : (
                                                    <Link href={item.url || '/'}>{item.label}</Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                            <div className="main-menu__right">
                                <div className="header-logon-box">
                                    <div className="icon">
                                        <span className="fas fa-user"></span>
                                    </div>
                                    <div className="select-box">
                                        <select className="wide" onChange={(e) => { const v = e.target.value; if (v === 'logout') { router.post(route('logout')); } else if (v) { window.location.href = v; } }} defaultValue="">
                                            {user ? (
                                                <>
                                                    <option value="">{user.name}</option>
                                                    <option value="/admin">Dashboard</option>
                                                    <option value="logout">Logout</option>
                                                </>
                                            ) : (
                                                <>
                                                    <option value="">Account</option>
                                                    <option value="/login">Login</option>
                                                    <option value="/register">Register</option>
                                                </>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="main-menu__nav-sidebar-icon">
                                    <a className="navSidebar-button" href="#">
                                        <span className="icon-dots-menu-one"></span>
                                        <span className="icon-dots-menu-two"></span>
                                        <span className="icon-dots-menu-three"></span>
                                    </a>
                                </div>
                                <div className="main-menu__btn-box">
                                    {user ? (
                                        <Link href="/admin" className="thm-btn">Dashboard</Link>
                                    ) : (
                                        <Link href="/login" className="thm-btn">Login</Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="stricky-header stricked-menu main-menu">
                <div className="sticky-header__content"></div>
            </div>
            <style>{`a, a:hover, a:focus, a:visited { text-decoration: none !important; }`}</style>
        </>
    );
}
