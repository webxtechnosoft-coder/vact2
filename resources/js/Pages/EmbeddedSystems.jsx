import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function EmbeddedSystems() {
    return (
        <MainLayout>
            <Head title="EmbeddedSystems" />
            <link rel="stylesheet" href="/assets/css/embedded-systems.css" />
            
{/*Page Header Start*/}
    {/* <section class="page-header">
        <div class="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div class="container">
            <div class="page-header__inner">
                <h3>Blogs</h3>
                <div class="thm-breadcrumb__inner">
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span class="fas fa-angle-right"></span></li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bubbleContainer">
            <div class="bubble-1"></div>
            <div class="bubble-2"></div>
            <div class="bubble-3"></div>
        </div>
    </section> */}
    {/*Page Header End*/}

    {/*Testimonial One Start*/}
    <section class="testimonial-one">
        <div class="container">
            <div class="testimonial-one__inner">
                <div class="testimonial-one__carousel owl-carousel owl-theme">

                    {/*Item 1*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div class="product-carousel-img-container">
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/services/services1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Firmware & <br /><span style={{ "color": "#008ed2" }}>RTOS Integration </span></h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Building highly optimized bare-metal drivers, custom bootloaders, and continuous integration systems. We develop real-time, deterministic firmware solutions using FreeRTOS, Zephyr RTOS, and Linux-based embedded architectures for automotive and industrial applications.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Item 2*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div class="product-carousel-img-container">
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Embedded Hardware <br /><span style={{ "color": "#008ed2" }}>Design & Development</span></h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Transforming innovative ideas into reliable embedded hardware solutions. We specialize in high-performance PCB design, ARM Cortex-based microcontroller integration, sensor interfacing, and custom embedded system development for automotive, IoT, and industrial applications.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                 

                   

                </div>
            </div>
        </div>
    </section>
    {/*Testimonial One End*/}


    {/* Vehicle Networking & HMI Section Start */}
    <section class="embedded-systems-section py-5">
        <div class="container">

            {/* CARD 1: Vehicle Networking Solutions */}
            <div class="card border-0 mb-5 wow fadeInUp embedded-card" data-wow-delay="100ms">
                <div class="card-body p-4 p-lg-5">
                    <div class="row align-items-center">

                        {/* Left Content (Text & List) */}
                        <div class="col-lg-6 pe-lg-5 mb-4 mb-lg-0">
                            {/* Badge */}
                            <div class="embedded-badge">
                                <i class="fas fa-car me-2"></i> Vehicle Networking
                            </div>

                            {/* Title */}
                            <h2 class="mb-3 embedded-title">Vehicle Networking Solutions</h2>

                            {/* Description */}
                            <p class="text-muted mb-4 embedded-desc">
                                More vehicles today are using electronics to cope with the diversifying
                                requirements of drivers and passengers and to address concerns about
                                the comfort, environment and fuel consumption. Multiple electronic
                                control units (ECU) are connected by multiple in-vehicle LANs differing
                                in transmission speed and communication protocol according to the
                                features and characteristics required for each application to exchange
                                information and coordinating control to allow more added value
                                functions to be implemented.
                            </p>

                            {/* List */}
                            <ul class="embedded-list mb-0">
                                {/* Item 1 */}
                                <li class="embedded-list-item">
                                    <div class="embedded-icon-box">
                                        <i class="fas fa-sitemap"></i>
                                    </div>
                                    <div class="embedded-list-text">
                                        Vehicle Network Management and communication Gateways using CAN, LIN, MOST,and FlexRay
                                    </div>
                                </li>
                                {/* Item 2 */}
                                <li class="embedded-list-item">
                                    <div class="embedded-icon-box">
                                        <i class="fas fa-microchip"></i>
                                    </div>
                                    <div class="embedded-list-text">
                                        Drivers for communication modules on different micro-controller platforms
                                    </div>
                                </li>
                                {/* Item 3 */}
                                <li class="embedded-list-item">
                                    <div class="embedded-icon-box">
                                        <i class="fas fa-layer-group"></i>
                                    </div>
                                    <div class="embedded-list-text">
                                        Protocol stack development / porting
                                    </div>
                                </li>
                                {/* Item 4 */}
                                <li class="embedded-list-item">
                                    <div class="embedded-icon-box">
                                        <i class="fas fa-code"></i>
                                    </div>
                                    <div class="embedded-list-text">
                                        Application layer software for communication
                                    </div>
                                </li>
                                {/* Item 5 */}
                                <li class="embedded-list-item">
                                    <div class="embedded-icon-box">
                                        <i class="fas fa-shield-alt"></i>
                                    </div>
                                    <div class="embedded-list-text">
                                        Verification & Validation
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right Image */}
                        <div class="col-lg-6 text-center">
                            <img src="/assets/images/services/services11.png" alt="Vehicle Networking Solutions" class="img-fluid embedded-img-large" />
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 2: HMI And UI Development */}
            <div class="card border-0 wow fadeInUp embedded-card hmi-card" data-wow-delay="200ms">
                <div class="card-body p-4 p-lg-5">
                    <div class="row align-items-center">

                        {/* Left Section: Title & Subtitle & Paragraph */}
                        <div class="col-lg-5 pe-lg-4 mb-4 mb-lg-0">
                            {/* Badge */}
                            <div class="embedded-badge">
                                <i class="fas fa-desktop me-2"></i> Automotive HMI
                            </div>

                            {/* Title */}
                            <h2 class="mb-3 embedded-title">HMI And UI Development</h2>

                            {/* Subheading */}
                            <h6 class="mb-3 embedded-subtitle">
                                Human Machine Interfaces Delivering Better Driving Experiences
                            </h6>

                            {/* Description */}
                            <p class="text-muted mb-0 embedded-desc">
                                Automotive HMI solutions helps to enhance the driving experiences by
                                enabling interactions with multi-touch dashboards, touchpads, control
                                panels, built-in screens, push buttons and more. By transforming a
                                vehicle into an ecosystem of interconnected parts that work to make
                                driving personalized, adaptive, convenient, safe, and enjoyable.
                            </p>
                        </div>

                        {/* Center Section: Wireframe Car Image */}
                        <div class="col-lg-3 text-center mb-4 mb-lg-0">
                            <img src="/assets/images/services/services13.png" alt="HMI and UI Development Car" class="img-fluid embedded-img-medium" />
                        </div>

                        {/* Right Section: List Box */}
                        <div class="col-lg-4">
                            <div class="hmi-list-box">
                                <ul class="embedded-list mb-0">
                                    {/* Item 1 */}
                                    <li class="embedded-list-item">
                                        <div class="embedded-icon-box">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <div class="hmi-list-text">
                                            Development of Human machine interface for infotainment systems
                                        </div>
                                    </li>
                                    {/* Item 2 */}
                                    <li class="embedded-list-item">
                                        <div class="embedded-icon-box">
                                            <i class="fas fa-desktop"></i>
                                        </div>
                                        <div class="hmi-list-text">
                                            PC based User interface for analysers & loggers
                                        </div>
                                    </li>
                                    {/* Item 3 */}
                                    <li class="embedded-list-item">
                                        <div class="embedded-icon-box">
                                            <i class="fas fa-cloud"></i>
                                        </div>
                                        <div class="hmi-list-text">
                                            Cross platform porting
                                        </div>
                                    </li>
                                    {/* Item 4 */}
                                    <li class="embedded-list-item">
                                        <div class="embedded-icon-box">
                                            <i class="fas fa-code"></i>
                                        </div>
                                        <div class="hmi-list-text">
                                            HMI development using C++, QT, QTOPIA & OpenGL
                                        </div>
                                    </li>
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
    <section class="last-mile-section py-5" style={{ "background": "#f8f9fb" }}>
        <div class="container">

            {/* Header */}
            <div class="row mb-4 justify-content-center">
                <div class="col-lg-8 text-center">
                    <span class="lm-badge mb-3 d-inline-flex align-items-center gap-2">
                        ?? Last Mile Services
                    </span>
                    <h2 class="lm-title mb-3">
                        Your Customers Expect A Great Experience From Start To Finish!
                    </h2>
                    <p class="lm-subtitle text-muted mb-0">
                        Increase productivity and streamline workflows with Last Mile services.
                    </p>
                </div>
            </div>

            {/* Top 3 Cards */}
            <div class="row g-4 mb-4">
                <div class="col-lg-4 col-md-6">
                    <div class="lm-card d-flex align-items-center gap-3">
                        <div class="lm-icon-box">??</div>
                        <div>
                            <h5 class="lm-card-title mb-1">Stay Up To Date</h5>
                            <p class="lm-card-desc text-muted mb-0">Keep your systems updated and always ready for what's next.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="lm-card d-flex align-items-center gap-3">
                        <div class="lm-icon-box">??</div>
                        <div>
                            <h5 class="lm-card-title mb-1">Streamline Your Workflows</h5>
                            <p class="lm-card-desc text-muted mb-0">Automate and optimize processes to get more done in less time.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="lm-card d-flex align-items-center gap-3">
                        <div class="lm-icon-box">??</div>
                        <div>
                            <h5 class="lm-card-title mb-1">Save Time and Money</h5>
                            <p class="lm-card-desc text-muted mb-0">Reduce manual effort and operational costs with smart solutions.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Row */}
            <div class="row g-4 align-items-center">

                {/* Checklist */}
                <div class="col-lg-6 order-2 order-lg-1">
                    <div class="lm-list-card">
                        <ul class="lm-list mb-0">
                            <li class="lm-list-item">
                                <div class="lm-check-icon"><i class="fas fa-check"></i></div>
                                <span class="lm-list-text">Validation of automotive software at various levels of testing starting from unit level until system testing</span>
                            </li>
                            <li class="lm-list-item">
                                <div class="lm-check-icon"><i class="fas fa-check"></i></div>
                                <span class="lm-list-text">Static code checks &amp; analysis using tools like RTRT, Polyspace, QAC &amp; PC-Lint</span>
                            </li>
                            <li class="lm-list-item">
                                <div class="lm-check-icon"><i class="fas fa-check"></i></div>
                                <span class="lm-list-text">Test suite automation using scripts and modelling tools like Labview</span>
                            </li>
                            <li class="lm-list-item">
                                <div class="lm-check-icon"><i class="fas fa-check"></i></div>
                                <span class="lm-list-text">Validation on vehicle simulators / labcars</span>
                            </li>
                            <li class="lm-list-item">
                                <div class="lm-check-icon"><i class="fas fa-check"></i></div>
                                <span class="lm-list-text">Hardware in loop testing</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Illustration */}
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <div class="lm-img-box">
                        <img src="/assets/images/services/services15.png" alt="Last Mile Services Illustration" class="img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    </section>



    {/*Department One Start*/}
    <section class="department-one">
        <div class="department-one__bg-shape"
            style={{ backgroundImage: "url(assets/images/shapes/department-one-bg-shape.png)" }}></div>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                {/* <div class="section-title__tagline-box">
                        <div class="section-title__tagline-shape"></div>
                        <div class="section-title__tagline-shape-2"></div>
                        <span class="section-title__tagline">Academic Departments</span>
                    </div> */}
                <h2 class="section-title__title title-animation">Embedded OS Porting,<br /> <span>BSP & Device Driver Developmen</span>
                </h2>
            </div>


            <div class="row">
                <div class="col-xl-12">
                    <div class="department-one__left">
                        <div class="row justify-content-center gy-4">

                            {/* Dedicated Offshore Team */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-laptop-code"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Embedded OS Porting</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        We provide embedded OS porting services for various hardware platforms and processor architectures.
                                        Our solutions ensure smooth system integration, stability, and optimized performance.
                                    </p>
                                </div>
                            </div>

                            {/* PCB Design Services */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-server"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Board Support Package (BSP) Development</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Custom Board Support Packages are developed to enable efficient communication between hardware and operating systems.
                                        The BSP solutions are designed for reliability, compatibility, and faster development cycles.
                                    </p>
                                </div>
                            </div>

                            {/* Embedded Software Development */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-power-off"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Bootloader Development</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        We develop and customize bootloaders for Linux, Windows, and embedded platforms based on client requirements.
                                        Our bootloader solutions improve system startup speed and hardware initialization.
                                    </p>
                                </div>
                            </div>

                            {/* VLSI Development Support */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fab fa-linux"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Linux Porting and Customization</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Linux operating systems are ported and customized for ARM, X86, MIPS, and other processor architectures.
                                        We ensure optimized kernel performance and stable application support for embedded devices.
                                    </p>
                                </div>
                            </div>

                            {/* Candidate Profile Screening */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-hdd"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Device Driver Development</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Our team develops device drivers for peripherals, communication interfaces, and hardware components.
                                        The drivers ensure smooth interaction between hardware devices and operating systems.
                                    </p>
                                </div>
                            </div>

                            {/* Flexible Billing Model */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-cogs"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Middleware and Firmware Solutions</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Middleware and firmware solutions are designed to improve communication and functionality in embedded systems.
                                        We focus on performance optimization, scalability, and reliable device operation.
                                    </p>
                                </div>
                            </div>

                            {/* Interview and Selection Process */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="700ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-network-wired"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Hardware Platform Integration</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        We integrate software and operating systems with existing and new hardware platforms efficiently.
                                        Our experts ensure compatibility, performance tuning, and seamless system deployment.
                                    </p>
                                </div>
                            </div>

                            {/* Long-Term Business Relationship */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="800ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-tools"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Driver Optimization and Maintenance</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Existing device drivers are optimized for better speed, power management, and system stability.
                                        We also provide maintenance and testing support to ensure long-term reliability and performance.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Department One End*/}

   {/*Testimonials Two Start */}
    <section class="testimonial-two">
        <div class="container">
            <div class="section-title text-left sec-title-animation animation-style2">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Testimonial</span>
                </div>
                <h2 class="section-title__title title-animation">Trusted by Global

                    <br />Product <span>Development Companies</span>
                </h2>
            </div>
            <div class="testimonial-two__inner">
                <div class="testimonial-two__carousel owl-carousel owl-theme">
                    <div class="item">
                        <div class="testimonial-two__single">
                            <div class="testimonial-two__single-inner">
                                <div class="testimonial-two__header">
                                    <div class="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div class="testimonial-two__ratting">
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                    </div>
                                </div>
                                <p class="testimonial-two__text">The embedded systems training at VAct Technologies
                                    was very informative and practical. The real-time projects improved my technical
                                    skills and confidence.</p>
                                <div class="testimonial-two__client-info">
                                    <div class="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-1.jpg" alt="" />
                                    </div>
                                    <div class="testimonial-two__client-content">
                                        <h3><a href="#">Santhosh Selvam</a></h3>
                                        <p>Embedded Systems Trainee</p>
                                    </div>
                                </div>
                                <div class="testimonial-two__quote">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-two__single">
                            <div class="testimonial-two__single-inner">
                                <div class="testimonial-two__header">
                                    <div class="testimonial-two__google-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div class="testimonial-two__ratting">
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                    </div>
                                </div>
                                <p class="testimonial-two__text">VAct Technologies provided excellent guidance
                                    throughout my internship. The trainers explained every concept clearly with
                                    hands-on experience.</p>
                                <div class="testimonial-two__client-info">
                                    <div class="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-2.jpg" alt="" />
                                    </div>
                                    <div class="testimonial-two__client-content">
                                        <h3><a href="#">Mohan Ravi</a></h3>
                                        <p>Embedded Software Intern</p>
                                    </div>
                                </div>
                                <div class="testimonial-two__quote">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-two__single">
                            <div class="testimonial-two__single-inner">
                                <div class="testimonial-two__header">
                                    <div class="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div class="testimonial-two__ratting">
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                    </div>
                                </div>
                                <p class="testimonial-two__text">The internship program helped me understand
                                    embedded systems and IoT applications in a practical way. The mentors were very
                                    supportive.</p>
                                <div class="testimonial-two__client-info">
                                    <div class="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-3.jpg" alt="" />
                                    </div>
                                    <div class="testimonial-two__client-content">
                                        <h3><a href="#">Swathy</a></h3>
                                        <p>Embedded & IoT Intern</p>
                                    </div>
                                </div>
                                <div class="testimonial-two__quote">
                                    <i class="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="testimonial-two__single">
                            <div class="testimonial-two__single-inner">
                                <div class="testimonial-two__header">
                                    <div class="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div class="testimonial-two__ratting">
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                    </div>
                                </div>
                                <p class="testimonial-two__text">I gained valuable knowledge in firmware development
                                    and embedded technology during my internship. The training sessions were
                                    interactive and useful.</p>
                                <div class="testimonial-two__client-info">
                                    <div class="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-4.jpg" alt="" />
                                    </div>
                                    <div class="testimonial-two__client-content">
                                        <h3><a href="#">Hema M</a></h3>
                                        <p>Embedded Systems Intern</p>
                                    </div>
                                </div>
                                <div class="testimonial-two__quote">
                                    <i class="fas fa-quote-right"></i>
                                </div>


        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </section>
    {/*Testimonials Two End */}









    <script src="/assets/js/jquery-latest.js"></script>
    <script src="/assets/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/js/jarallax.min.js"></script>
    <script src="/assets/js/jquery.appear.min.js"></script>
    <script src="/assets/js/swiper.min.js"></script>
    <script src="/assets/js/jquery.magnific-popup.min.js"></script>
    <script src="/assets/js/jquery.validate.min.js"></script>
    <script src="/assets/js/odometer.min.js"></script>
    <script src="/assets/js/wow.js"></script>
    <script src="/assets/js/isotope.js"></script>
    <script src="/assets/js/owl.carousel.min.js"></script>
    <script src="/assets/js/jquery-ui.js"></script>
    <script src="/assets/js/jquery.nice-select.min.js"></script>
    <script src="/assets/js/marquee.min.js"></script>
    <script src="/assets/js/jquery-sidebar-content.js"></script>
    <script src="/assets/js/twentytwenty.js"></script>
    <script src="/assets/js/jquery.event.move.js"></script>
    <script src="/assets/js/aos.js"></script>

    <script src="/assets/js/gsap/gsap.js"></script>
    <script src="/assets/js/gsap/ScrollTrigger.js"></script>
    <script src="/assets/js/gsap/SplitText.js"></script>

    {/* template js */}
    <script src="/assets/js/script.js"></script>
        </MainLayout>
    );
}
