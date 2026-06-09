import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function EmbeddedSystems({ service }) {
    const s = service || {};
    const badge = s.badge || 'Embedded Systems';
    const title = s.title || 'Embedded Systems';
    const subtitle = s.subtitle || '';
    const description = s.description || "We deliver custom embedded solutions across ARM Cortex-M, AVR, PIC, and RISC-V architectures. Our team handles everything from firmware development and PCB design to RTOS integration and IoT cloud connectivity.\n\nWith deep expertise in FreeRTOS, Zephyr, and QNX, we build reliable, real-time embedded systems for industrial, automotive, and consumer applications. Every design undergoes rigorous hardware-in-the-loop testing.\n\nOur IoT framework provides secure OTA updates, MQTT/CoAP telemetry, and cloud dashboard integration out of the box — reducing your time-to-market significantly.";
    const features = s.features || [
        { title: 'Firmware Development', description: 'Custom firmware for ARM Cortex-M, AVR, PIC microcontrollers.', icon: 'fa-microchip' },
        { title: 'PCB Design', description: 'Schematic capture and PCB layout for embedded applications.', icon: 'fa-microchip' },
        { title: 'RTOS Solutions', description: 'FreeRTOS, Zephyr, QNX based embedded solutions.', icon: 'fa-microchip' },
        { title: 'IoT Integration', description: 'End-to-end IoT solutions with cloud connectivity.', icon: 'fa-microchip' },
    ];
    const slides = (s.slides && s.slides.length > 0) ? s.slides : [
        { image: '/assets/images/services/services1.png', heading: 'Firmware &', highlight: 'RTOS Integration', description: 'Building highly optimized bare-metal drivers, custom bootloaders, and continuous integration systems. We develop real-time, deterministic firmware solutions using FreeRTOS, Zephyr RTOS, and Linux-based embedded architectures for automotive and industrial applications.' },
        { image: '/assets/images/about/about2.png', heading: 'Embedded Hardware', highlight: 'Design & Development', description: 'Transforming innovative ideas into reliable embedded hardware solutions. We specialize in high-performance PCB design, ARM Cortex-based microcontroller integration, sensor interfacing, and custom embedded system development for automotive, IoT, and industrial applications.' },
    ];
    const pd = s.page_data || {};
    const vn = pd.vehicle_networking || {};
    const hmi = pd.hmi || {};
    const lastMile = pd.last_mile || {};
    const osPorting = pd.os_porting || {};
    const descParts = description.split('\n\n');
    const imgUrl = (path) => {
        if (!path) return null;
        if (path.startsWith('assets/') || path.startsWith('http')) return '/' + path;
        return '/storage/' + path;
    };
    return (
        <MainLayout>
            <Head title="EmbeddedSystems" />
            <link rel="stylesheet" href="/assets/css/embedded-systems.css" />
            <link rel="stylesheet" href="/assets/css/about.css" />
            
{/*Page Header Start*/}
    {/* <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div className="container">
            <div className="page-header__inner">
                <h3>Blogs</h3>
                <div className="thm-breadcrumb__inner">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span className="fas fa-angle-right"></span></li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bubbleContainer">
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
            <div className="bubble-3"></div>
        </div>
    </section> */}
    {/*Page Header End*/}

    {/*Testimonial One Start*/}
    <section className="testimonial-one">
        <div className="container">
            <div className="testimonial-one__inner">
                <div className="testimonial-one__carousel owl-carousel owl-theme">
                    {slides.map((slide, i) => (
                        <div key={i} className="item">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-5 col-md-12">
                                    <div className="product-carousel-img-container">
                                        <div className="testimonial-one__img">
                                            <img src={slide.image.startsWith('/') ? slide.image : '/' + slide.image} alt={slide.heading} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="testimonial-one__single product-carousel-single">
                                        <div
                                            style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                            <i className="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                        </div>
                                        <h2 className="product-carousel-title" style={{ color: "#fff" }}>
                                            {slide.heading} <br /><span style={{ "color": "#008ed2" }}>{slide.highlight}</span></h2>
                                        <p className="testimonial-one__text"
                                            style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>{slide.description}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    {/*Testimonial One End*/}

    {/* Main Content Section Start */}
    <section className="embedded-systems-section py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div className="embedded-badge">
                        <i className="fas fa-microchip me-2"></i> {badge}
                    </div>
                    <h2 className="embedded-title">{title}</h2>
                    {subtitle && <p className="embedded-subtitle">{subtitle}</p>}
                    {descParts.map((part, i) => (
                        <p key={i} className="embedded-desc">{part}</p>
                    ))}
                </div>
                <div className="col-lg-6 text-center wow fadeInRight" data-wow-delay="200ms">
                    <img src={imgUrl(s.image) || '/assets/images/services/embedded-systems.png'} alt={title} className="img-fluid embedded-img-large" />
                </div>
            </div>
            {features.length > 0 && (
                <div className="row mt-5 wow fadeInUp" data-wow-delay="300ms">
                    <div className="col-12">
                        <div className="row g-4">
                            {features.map((feat, i) => (
                                <div key={i} className={`col-lg-3 col-md-6 ${i === features.length - 1 ? 'feature-last-item' : 'feature-border-right'}`}>
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="embedded-icon-box">
                                            <i className={`fas ${feat.icon}`}></i>
                                        </div>
                                        <div>
                                            <h5 style={{ color: '#0b1c3f', fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{feat.title}</h5>
                                            <p style={{ color: '#5c677d', fontSize: '13px', lineHeight: '1.6', margin: 0 }}>{feat.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </section>
    {/* Main Content Section End */}

    {/* Vehicle Networking & HMI Section Start */}
    <section className="embedded-systems-section py-5">
        <div className="container">

            {/* CARD 1: Vehicle Networking Solutions */}
            <div className="card border-0 mb-5 wow fadeInUp embedded-card" data-wow-delay="100ms">
                <div className="card-body p-4 p-lg-5">
                    <div className="row align-items-center">

                        {/* Left Content (Text & List) */}
                        <div className="col-lg-6 pe-lg-5 mb-4 mb-lg-0">
                            {/* Badge */}
                            <div className="embedded-badge">
                                <i className="fas fa-car me-2"></i> Vehicle Networking
                            </div>

                            {/* Title */}
                            <h2 className="mb-3 embedded-title">{vn.title || 'Vehicle Networking Solutions'}</h2>

                            {/* Description */}
                            <p className="text-muted mb-4 embedded-desc">
                                {vn.description || 'More vehicles today are using electronics to cope with the diversifying requirements of drivers and passengers and to address concerns about the comfort, environment and fuel consumption. Multiple electronic control units (ECU) are connected by multiple in-vehicle LANs differing in transmission speed and communication protocol according to the features and characteristics required for each application to exchange information and coordinating control to allow more added value functions to be implemented.'}
                            </p>

                            {/* List */}
                            <ul className="embedded-list mb-0">
                                {(vn.items && vn.items.length > 0 ? vn.items : [
                                    'Vehicle Network Management and communication Gateways using CAN, LIN, MOST,and FlexRay',
                                    'Drivers for communication modules on different micro-controller platforms',
                                    'Protocol stack development / porting',
                                    'Application layer software for communication',
                                    'Verification & Validation',
                                ]).map((item, i) => (
                                    <li key={i} className="embedded-list-item">
                                        <div className="embedded-icon-box">
                                            <i className="fas fa-sitemap"></i>
                                        </div>
                                        <div className="embedded-list-text">{item}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div className="col-lg-6 text-center">
                            <img src={imgUrl(vn.image) || '/assets/images/services/services11.png'} alt="Vehicle Networking Solutions" className="img-fluid embedded-img-large" />
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 2: HMI And UI Development */}
            <div className="card border-0 wow fadeInUp embedded-card hmi-card" data-wow-delay="200ms">
                <div className="card-body p-4 p-lg-5">
                    <div className="row align-items-center">

                        {/* Left Section: Title & Subtitle & Paragraph */}
                        <div className="col-lg-5 pe-lg-4 mb-4 mb-lg-0">
                            {/* Badge */}
                            <div className="embedded-badge">
                                <i className="fas fa-desktop me-2"></i> Automotive HMI
                            </div>

                            {/* Title */}
                            <h2 className="mb-3 embedded-title">{hmi.title || 'HMI And UI Development'}</h2>

                            {/* Subheading */}
                            <h6 className="mb-3 embedded-subtitle">
                                {hmi.subtitle || 'Human Machine Interfaces Delivering Better Driving Experiences'}
                            </h6>

                            {/* Description */}
                            <p className="text-muted mb-0 embedded-desc">
                                {hmi.description || 'Automotive HMI solutions helps to enhance the driving experiences by enabling interactions with multi-touch dashboards, touchpads, control panels, built-in screens, push buttons and more. By transforming a vehicle into an ecosystem of interconnected parts that work to make driving personalized, adaptive, convenient, safe, and enjoyable.'}
                            </p>
                        </div>

                        {/* Center Section: Wireframe Car Image */}
                        <div className="col-lg-3 text-center mb-4 mb-lg-0">
                            <img src={imgUrl(hmi.image) || '/assets/images/services/services13.png'} alt="HMI and UI Development Car" className="img-fluid embedded-img-medium" />
                        </div>

                        {/* Right Section: List Box */}
                        <div className="col-lg-4">
                            <div className="hmi-list-box">
                                <ul className="embedded-list mb-0">
                                    {(hmi.items && hmi.items.length > 0 ? hmi.items : [
                                        'Development of Human machine interface for infotainment systems',
                                        'PC based User interface for analysers & loggers',
                                        'Cross platform porting',
                                        'HMI development using C++, QT, QTOPIA & OpenGL',
                                    ]).map((item, i) => (
                                        <li key={i} className="embedded-list-item">
                                            <div className="embedded-icon-box">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="hmi-list-text">{item}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </section>
    {/* Vehicle Networking & HMI Section End */}

    {/* Last Mile Services Section */}
    <section className="last-mile-section py-5" style={{ "background": "#f8f9fb" }}>
        <div className="container">

            {/* Header */}
            <div className="row mb-4 justify-content-center">
                <div className="col-lg-8 text-center">
                    <span className="lm-badge mb-3 d-inline-flex align-items-center gap-2">
                        &#x1F4E1; {lastMile.badge || 'Last Mile Services'}
                    </span>
                    <h2 className="lm-title mb-3">
                        {lastMile.title || 'Your Customers Expect A Great Experience From Start To Finish!'}
                    </h2>
                    <p className="lm-subtitle text-muted mb-0">
                        {lastMile.subtitle || 'Increase productivity and streamline workflows with Last Mile services.'}
                    </p>
                </div>
            </div>

            {/* Top 3 Cards */}
            <div className="row g-4 mb-4">
                {(lastMile.top_cards && lastMile.top_cards.length > 0 ? lastMile.top_cards : [
                    { title: 'Stay Up To Date', description: "Keep your systems updated and always ready for what's next." },
                    { title: 'Streamline Your Workflows', description: 'Automate and optimize processes to get more done in less time.' },
                    { title: 'Save Time and Money', description: 'Reduce manual effort and operational costs with smart solutions.' },
                ]).map((card, i) => (
                    <div key={i} className={`col-lg-4 ${i === 2 ? 'col-md-12' : 'col-md-6'}`}>
                        <div className="lm-card d-flex align-items-center gap-3">
                            <div className="lm-icon-box">{card.icon || String.fromCodePoint(parseInt(['1F504', '2699', '23F3'][i] || '1F504', 16))}</div>
                            <div>
                                <h5 className="lm-card-title mb-1">{card.title}</h5>
                                <p className="lm-card-desc text-muted mb-0">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Row */}
            <div className="row g-4 align-items-center">

                {/* Checklist */}
                <div className="col-lg-6 order-2 order-lg-1">
                    <div className="lm-list-card">
                        <ul className="lm-list mb-0">
                            {(lastMile.checklist && lastMile.checklist.length > 0 ? lastMile.checklist : [
                                'Validation of automotive software at various levels of testing starting from unit level until system testing',
                                'Static code checks & analysis using tools like RTRT, Polyspace, QAC & PC-Lint',
                                'Test suite automation using scripts and modelling tools like Labview',
                                'Validation on vehicle simulators / labcars',
                                'Hardware in loop testing',
                            ]).map((item, i) => (
                                <li key={i} className="lm-list-item">
                                    <div className="lm-check-icon"><i className="fas fa-check"></i></div>
                                    <span className="lm-list-text">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Illustration */}
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <div className="lm-img-box">
                        <img src={imgUrl(lastMile.image) || '/assets/images/services/services15.png'} alt="Last Mile Services Illustration" className="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    </section>



    {/*Department One Start*/}
    <section className="department-one">
        <div className="department-one__bg-shape"
            style={{ backgroundImage: "url(assets/images/shapes/department-one-bg-shape.png)" }}></div>
        <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
                <h2 className="section-title__title title-animation">{osPorting.title || 'Embedded OS Porting'},<br /> <span>{osPorting.subtitle || 'BSP & Device Driver Development'}</span>
                </h2>
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="department-one__left">
                        <div className="row justify-content-center gy-4">
                            {(osPorting.cards && osPorting.cards.length > 0 ? osPorting.cards : [
                                { title: 'Embedded OS Porting', description: 'We provide embedded OS porting services for various hardware platforms and processor architectures. Our solutions ensure smooth system integration, stability, and optimized performance.', icon: 'fa-laptop-code' },
                                { title: 'Board Support Package (BSP) Development', description: 'Custom Board Support Packages are developed to enable efficient communication between hardware and operating systems. The BSP solutions are designed for reliability, compatibility, and faster development cycles.', icon: 'fa-server' },
                                { title: 'Bootloader Development', description: 'We develop and customize bootloaders for Linux, Windows, and embedded platforms based on client requirements. Our bootloader solutions improve system startup speed and hardware initialization.', icon: 'fa-power-off' },
                                { title: 'Linux Porting and Customization', description: 'Linux operating systems are ported and customized for ARM, X86, MIPS, and other processor architectures. We ensure optimized kernel performance and stable application support for embedded devices.', icon: 'fab fa-linux' },
                                { title: 'Device Driver Development', description: 'Our team develops device drivers for peripherals, communication interfaces, and hardware components. The drivers ensure smooth interaction between hardware devices and operating systems.', icon: 'fa-hdd' },
                                { title: 'Middleware and Firmware Solutions', description: 'Middleware and firmware solutions are designed to improve communication and functionality in embedded systems. We focus on performance optimization, scalability, and reliable device operation.', icon: 'fa-cogs' },
                                { title: 'Hardware Platform Integration', description: 'We integrate software and operating systems with existing and new hardware platforms efficiently. Our experts ensure compatibility, performance tuning, and seamless system deployment.', icon: 'fa-network-wired' },
                                { title: 'Driver Optimization and Maintenance', description: 'Existing device drivers are optimized for better speed, power management, and system stability. We also provide maintenance and testing support to ensure long-term reliability and performance.', icon: 'fa-tools' },
                            ]).map((card, i) => (
                                <div key={i} className={`col-xl-3 col-lg-6 col-md-6 wow fadeIn${['Left', 'Up', 'Right', 'Left', 'Up', 'Right', 'Left', 'Up'][i % 8]}`} data-wow-delay={`${(i + 1) * 100}ms`}>
                                    <div className="department-one__single">
                                        <div className="department-one__icon-and-title">
                                            <div className="department-one__icon">
                                                <span className={`fas ${card.icon}`}></span>
                                            </div>
                                            <h3 className="department-one__title">
                                                <a href="course.html">{card.title}</a>
                                            </h3>
                                        </div>
                                        <p className="department-one__text">{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Department One End*/}

   {/*Testimonials Two Start */}
    <section className="testimonial-two">
        <div className="container">
            <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape"></div>
                    <div className="section-title__tagline-shape-2"></div>
                    <span className="section-title__tagline">Testimonial</span>
                </div>
                <h2 className="section-title__title title-animation">Trusted by Global

                    <br />Product <span>Development Companies</span>
                </h2>
            </div>
            <div className="testimonial-two__inner">
                <div className="testimonial-two__carousel owl-carousel owl-theme">
                    <div className="item">
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__header">
                                    <div className="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>
                                <p className="testimonial-two__text">The embedded systems training at VAct Technologies
                                    was very informative and practical. The real-time projects improved my technical
                                    skills and confidence.</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h3><a href="#">Santhosh Selvam</a></h3>
                                        <p>Embedded Systems Trainee</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__header">
                                    <div className="testimonial-two__google-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>
                                <p className="testimonial-two__text">VAct Technologies provided excellent guidance
                                    throughout my internship. The trainers explained every concept clearly with
                                    hands-on experience.</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-2.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h3><a href="#">Mohan Ravi</a></h3>
                                        <p>Embedded Software Intern</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__header">
                                    <div className="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>
                                <p className="testimonial-two__text">The internship program helped me understand
                                    embedded systems and IoT applications in a practical way. The mentors were very
                                    supportive.</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-3.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h3><a href="#">Swathy</a></h3>
                                        <p>Embedded & IoT Intern</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__header">
                                    <div className="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>
                                <p className="testimonial-two__text">I gained valuable knowledge in firmware development
                                    and embedded technology during my internship. The training sessions were
                                    interactive and useful.</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-4.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h3><a href="#">Hema M</a></h3>
                                        <p>Embedded Systems Intern</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Testimonials Two End */}
        </MainLayout>
    );
}
