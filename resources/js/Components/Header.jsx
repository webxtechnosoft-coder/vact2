import { Link, usePage, router } from '@inertiajs/react';

export default function Header() {
    const { auth, sidebarProducts = [] } = usePage().props;
    const user = auth?.user;

    // Group active products by category
    const groupedItems = [];
    const categoryMap = {};

    sidebarProducts.forEach(item => {
        if (item.category) {
            if (!categoryMap[item.category]) {
                categoryMap[item.category] = {
                    isGroup: true,
                    categoryName: item.category,
                    items: []
                };
                groupedItems.push(categoryMap[item.category]);
            }
            categoryMap[item.category].items.push(item);
        } else {
            groupedItems.push({
                isGroup: false,
                ...item
            });
        }
    });

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
                                <a href="https://x.com/VActTechnology" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://www.facebook.com/VActTechnologies" target="_blank">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/vact-technologies/" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://www.instagram.com/vacttech/" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCcpRq9mlF7iP3GiZuZBO3sg" target="_blank">
                                    <i className="fab fa-youtube"></i>
                                </a>
                                <a href="https://t.me/vacttechnologycareers" target="_blank">
                                    <i className="fab fa-telegram"></i>
                                </a>
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

                                    {/* About Us */}
                                    <li className="dropdown">
                                        <a href="#">About Us</a>
                                        <ul className="shadow-box">
                                            <li><Link href="/about">About Us</Link></li>
                                            <li><Link href="/blogs">Blog</Link></li>
                                            <li><Link href="/testimonials">Testimonials</Link></li>
                                            <li><Link href="/gallery">Gallery</Link></li>
                                        </ul>
                                    </li>

                                    {/* Our Products */}
                                    <li className="dropdown">
                                        <a href="#">Our Products</a>
                                        <ul className="shadow-box">
                                            {groupedItems.map((menuItem, idx) => {
                                                if (menuItem.isGroup) {
                                                    return (
                                                        <li key={idx} className="submenu">
                                                            <a style={{ fontSize: '14px', padding: '10px 20px' }} href="#">{menuItem.categoryName}</a>
                                                            <ul className="submenu-box">
                                                                {menuItem.items.map((subItem) => (
                                                                    <li key={subItem.id}>
                                                                        <Link 
                                                                            style={{ fontSize: '13px', padding: '8px 20px' }} 
                                                                            href={subItem.link}
                                                                        >
                                                                            {subItem.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    );
                                                } else {
                                                    return (
                                                        <li key={menuItem.id}>
                                                            <Link 
                                                                style={{ fontSize: '14px', padding: '10px 20px' }} 
                                                                href={menuItem.link}
                                                            >
                                                                {menuItem.title}
                                                            </Link>
                                                        </li>
                                                    );
                                                }
                                            })}
                                        </ul>
                                    </li>

                                    {/* Our Services */}
                                    <li className="dropdown">
                                        <a href="#">Our Services</a>
                                        <ul className="shadow-box">
                                            <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/embedded-systems">Embedded Systems</Link></li>
                                            <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/embedded-offshore-outsourcing">Embedded Offshore Outsourcing</Link></li>
                                            <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/fuel-monitoring-system">Fuel Monitoring System</Link></li>
                                            <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/industrial-automation-and-control">Industrial Automation and Control</Link></li>
                                            <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/civil-pmc">Civil PMC</Link></li>
                                            <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/human-resource">Human Resource</Link></li>
                                        </ul>
                                    </li>

                                    {/* Training */}
                                    <li className="dropdown">
                                        <a href="#">Training</a>
                                        <ul className="shadow-box">
                                            <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/embedded-automotive">Embedded Automotive</Link></li>

                                            {/* RTOS */}
                                            <li className="submenu">
                                                <a style={{ fontSize: '14px', padding: '10px 20px' }} href="#">RTOS <span></span></a>
                                                <ul className="submenu-box">
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/qnx-rtos-training">QNX Neutrino RTOS</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/freertos-training">FreeRTOS</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/zephyr-rtos-training">Zephyr RTOS</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/embedded-yocto-training">Embedded Linux Yocto Build</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/linux-system-programming">Linux System Programming</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/linux-device-driver-training">Linux Device Drivers</Link></li>
                                                </ul>
                                            </li>

                                            {/* Short Term Courses */}
                                            <li className="submenu">
                                                <a style={{ fontSize: '14px', padding: '10px 20px' }} href="#">Short Term Courses <span></span></a>
                                                <ul className="submenu-box">
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/embedded-c-programming">Embedded C Programming</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/rust-programming-training">Rust Programming</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/edgeai-iot-development">EdgeAI/IoT</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/can-protocol">CAN Protocol</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/stm32-bare-metal-programming">ARM STM32 Bare Metal</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/stm32-hal-programming">ARM STM32 HAL</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/python">Python Programming</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/machine-learning">Machine Learning</Link></li>
                                                </ul>
                                            </li>

                                            {/* Career Development & Training */}
                                            <li className="submenu">
                                                <a style={{ fontSize: '14px', padding: '10px 20px' }} href="#">Career Development &amp; Training <span></span></a>
                                                <ul className="submenu-box">
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/inplant-training">Implant Training</Link></li>
                                                    <li><Link style={{ fontSize: '14px', padding: '10px 20px' }} href="/talent-based-outsourcing">Talent Based Outsourcing</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li><Link href="/careers">Careers</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="main-menu__right">
                                <div className="header-logon-box">
                                    <div className="icon">
                                        <span className="fas fa-user"></span>
                                    </div>
                                    <div className="select-box">
                                        <select className="wide" onChange={(e) => {
                                            const v = e.target.value;
                                            if (v === 'logout') { router.post(route('logout')); }
                                            else if (v) { window.location.href = v; }
                                        }} defaultValue="">
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

            <style>{`
                a, a:hover, a:focus, a:visited { text-decoration: none !important; }
                .main-menu, 
                .main-menu__wrapper, 
                .main-menu__wrapper-inner, 
                .main-menu__main-menu-box, 
                .main-menu__list, 
                .shadow-box, 
                .submenu-box {
                    overflow: visible !important;
                    scrollbar-width: none !important;
                    -ms-overflow-style: none !important;
                }
                .main-menu::-webkit-scrollbar, 
                .main-menu__wrapper::-webkit-scrollbar, 
                .main-menu__wrapper-inner::-webkit-scrollbar, 
                .main-menu__main-menu-box::-webkit-scrollbar, 
                .main-menu__list::-webkit-scrollbar, 
                .shadow-box::-webkit-scrollbar, 
                .submenu-box::-webkit-scrollbar {
                    display: none !important;
                }
            `}</style>
        </>
    );
}
