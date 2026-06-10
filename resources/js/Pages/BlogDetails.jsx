import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function BlogDetails() {
    return (
        <MainLayout>
            <Head title="BlogDetails" />
            <link rel="stylesheet" href="/assets/css/about.css" />
{/*Testimonial One Start*/}
    <section class="testimonial-one">
        <div class="container">
            <div class="testimonial-one__inner">
                <div class="testimonial-one__carousel owl-carousel owl-theme">

                    {/*Item 1*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div
                                    style={{ "border": "1px solid rgba(0,142,210,0.5)", "borderRadius": "12px", "padding": "20px", "background": "rgba(0,0,0,0.2)" }}>
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about3.png" alt=""
                                            style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single"
                                    style={{ "background": "transparent !important", "boxShadow": "none !important", "paddingLeft": "40px" }}>
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 style={{ "fontSize": "32px", "fontWeight": "700", "color": "#fff", "marginBottom": "15px" }}>
                                        VAct EmbCore <br /><span style={{ "color": "#008ed2" }}>Development Board</span></h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>VAct EmbCore
                                        Development Board is designed for embedded system development using ARM
                                        Cortex-M4 architecture. It supports CAN, SPI, I2C, UART, USB, and SD Card
                                        interfaces for real-time applications and data logging. The board is integrated
                                        with STM32CubeIDE for easy programming and debugging. It is ideal for students,
                                        developers, and embedded learning projects.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Item 2*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div
                                    style={{ "border": "1px solid rgba(0,142,210,0.5)", "borderRadius": "12px", "padding": "20px", "background": "rgba(0,0,0,0.2)" }}>
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about2.png" alt=""
                                            style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single"
                                    style={{ "background": "transparent !important", "boxShadow": "none !important", "paddingLeft": "30px" }}>
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 style={{ "fontSize": "32px", "fontWeight": "700", "color": "#fff", "marginBottom": "15px" }}>Our
                                        Services <br /><span style={{ "color": "#008ed2" }}>& Solutions</span></h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}><strong>Our
                                            Services</strong> include Embedded Systems Development, Industrial
                                        Automation & Control, Fuel Monitoring Systems, IoT Solutions, and Embedded
                                        Offshore Outsourcing services. We provide innovative and reliable technology
                                        solutions for real-time applications, smart automation, and next-generation
                                        embedded products tailored for industrial and learning environments.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Item 3*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div
                                    style={{ "border": "1px solid rgba(0,142,210,0.5)", "borderRadius": "12px", "padding": "20px", "background": "rgba(0,0,0,0.2)" }}>
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about1.png" alt=""
                                            style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single"
                                    style={{ "background": "transparent !important", "boxShadow": "none !important", "paddingLeft": "30px" }}>
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 style={{ "fontSize": "32px", "fontWeight": "700", "color": "#fff", "marginBottom": "15px" }}>Our
                                        Products <br /><span style={{ "color": "#008ed2" }}>& Solutions</span></h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}><strong>Our
                                            Products</strong> include advanced Vending Machine solutions for smart and
                                        automated dispensing applications. We provide Automatic Milk, Oil, Cool Drink,
                                        and Coffee Vending Machines with reliable and user-friendly operation. These
                                        machines are designed for commercial, industrial, and retail environments. They
                                        ensure efficient, hygienic, and high-performance dispensing technology.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Item 4*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div
                                    style={{ "border": "1px solid rgba(0,142,210,0.5)", "borderRadius": "12px", "padding": "20px", "background": "rgba(0,0,0,0.2)" }}>
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about4.png" alt=""
                                            style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12" style="">
                                <div class="testimonial-one__single"
                                    style={{ "background": "transparent !important", "boxShadow": "none !important", "paddingLeft": "30px" }}>
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 style={{ "fontSize": "32px", "fontWeight": "700", "color": "#fff", "marginBottom": "15px" }}>
                                        VAct Technologies <br /><span style={{ "color": "#008ed2" }}>Transforming Ideas</span>
                                    </h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>VAct Technologies
                                        transforms innovative ideas into complete product solutions with advanced design
                                        and development services. We deliver efficient solutions for industrial,
                                        automation, and embedded applications using modern and reliable technology. From
                                        concept to final product development, we ensure smart, innovative, and
                                        high-quality solutions.</p>
                                </div>
                            </div>
                            <div class="col-xl-1 col-lg-1 col-md-12 d-flex justify-content-center">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/*Testimonial One End*/}


    {/* Blog Details Content Start */}
    <section class="blog-details-section py-5">
        <div class="container">
            
            {/* Blog Title */}
            <div class="row mb-5">
                <div class="col-12">
                    <h1 class="blog-main-title">
                        IoT's Ascendance and Future Prospects in the <span class="accent-text">Indian Embedded Industry</span>
                    </h1>
                    <div class="title-underline"></div>
                </div>
            </div>

            {/* Intro Card Box */}
            <div class="blog-intro-card mb-5">
                <div class="row align-items-center g-4">
                    <div class="col-lg-1 col-md-2 col-12 text-center text-md-start">
                        <div class="intro-chip-icon-wrapper">
                            {/* CPU Custom SVG */}
                            <svg viewBox="0 0 64 64" fill="none" stroke="#008ed2" stroke-width="2.5">
                                <rect x="18" y="18" width="28" height="28" rx="4" fill="#e6f4fc" stroke="#008ed2" stroke-width="3" />
                                <rect x="26" y="26" width="12" height="12" rx="2" fill="#008ed2" />
                                <path d="M10 26h8M10 32h8M10 38h8M46 26h8M46 32h8M46 38h8M26 10v8M32 10v8M38 10v8M26 46v8M32 46v8M38 46v8" stroke-linecap="round" />
                                <circle cx="6" cy="26" r="2" fill="#008ed2" />
                                <circle cx="6" cy="32" r="2" fill="#008ed2" />
                                <circle cx="6" cy="38" r="2" fill="#008ed2" />
                                <circle cx="58" cy="26" r="2" fill="#008ed2" />
                                <circle cx="58" cy="32" r="2" fill="#008ed2" />
                                <circle cx="58" cy="38" r="2" fill="#008ed2" />
                                <circle cx="26" cy="6" r="2" fill="#008ed2" />
                                <circle cx="32" cy="6" r="2" fill="#008ed2" />
                                <circle cx="38" cy="6" r="2" fill="#008ed2" />
                                <circle cx="26" cy="58" r="2" fill="#008ed2" />
                                <circle cx="32" cy="58" r="2" fill="#008ed2" />
                                <circle cx="38" cy="58" r="2" fill="#008ed2" />
                            </svg>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-10 col-12">
                        <div class="intro-text-content">
                            <p class="intro-p">Greetings and welcome to another tech blog from V-Act! <span class="bold-highlight">Today, we will embark on an exploration of IoT's</span> transformative journey within the Indian embedded industry.</p>
                            <p class="intro-p">Our goal is to highlight the remarkable leaps in technology, the current state of the IoT ecosystem, and the challenges it confronts today. At the heart of this digital revolution lies <span class="bold-highlight">IoT embedded systems</span>, the engines that power our increasingly connected world. Let's dive in and explore this exciting subject!</p>
                            <p class="intro-p">IoT has come a long way, evolving from a futuristic concept to a powerful force in industries like manufacturing, healthcare, smart homes, and more. But as it continues to grow, it faces challenges that need to be addressed. In this blog, we'll uncover the potential, explore the hurdles, and discuss how India is set to lead this development forward. Let's get started!</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-12 text-center">
                        <div class="intro-image-wrapper">
                            <img src="/assets/images/blogs/iot_header.png" alt="IoT Ascendance" class="img-fluid rounded-3 intro-img" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 4-Card Grid Section */}
            <div class="row g-4 mb-5">
                {/* Card 1 */}
                <div class="col-md-6 col-12">
                    <div class="grid-card-item">
                        <div class="card-header-row">
                            <div class="card-icon-box">
                                <i class="far fa-lightbulb"></i>
                            </div>
                            <h3 class="card-title">
                                The IoT Revolution:<br />Unleashing Infinite Possibilities
                            </h3>
                        </div>
                        <div class="card-body-content">
                            <p>India's embedded sector is undergoing a digital transformation, driven by the surging IoT wave. IoT is pushing technology boundaries, shifting to interconnected devices that exchange data seamlessly.</p>
                            <p>IoT has proven its mettle in healthcare, smart agriculture, industrial automation, and smart cities. The potential is limitless, and businesses that embrace it today will lead tomorrow.</p>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div class="col-md-6 col-12">
                    <div class="grid-card-item">
                        <div class="card-header-row">
                            <div class="card-icon-box">
                                <i class="fas fa-microchip"></i>
                            </div>
                            <h3 class="card-title">
                                Understanding IoT<br />Embedded Systems
                            </h3>
                        </div>
                        <div class="card-body-content">
                            <p>IoT solutions thrive on IoT embedded systems, the silent workhorses that collect, process, and transmit data. A typical IoT system includes sensors, microcontrollers, and communication modules.</p>
                            <p>From smart home gadgets to precision farming equipment, these systems enable automation, real-time monitoring, and smarter decisions-making life more efficient and connected.</p>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div class="col-md-6 col-12">
                    <div class="grid-card-item">
                        <div class="card-header-row">
                            <div class="card-icon-box">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <h3 class="card-title">
                                Advancements in IoT<br />Embedded Systems
                            </h3>
                        </div>
                        <div class="card-body-content">
                            <p>IoT embedded systems are evolving at a breakneck pace, with advancements in processing power, connectivity, and miniaturization.</p>
                            <p>Technologies like edge computing, 5G, and AI integration are pushing IoT to new heights-enabling faster data processing, lower latency, and smarter insights across industries.</p>
                        </div>
                    </div>
                </div>
                {/* Card 4 */}
                <div class="col-md-6 col-12">
                    <div class="grid-card-item">
                        <div class="card-header-row">
                            <div class="card-icon-box">
                                <i class="fas fa-exclamation-triangle"></i>
                            </div>
                            <h3 class="card-title">
                                Challenges in IoT-<br />Embedded Systems
                            </h3>
                        </div>
                        <div class="card-body-content">
                            <ul class="challenges-list">
                                <li><strong>Security Concerns</strong> - IoT devices are vulnerable to cyber threats.</li>
                                <li><strong>Scalability</strong> - Managing a large number of connected devices is complex.</li>
                                <li><strong>Power Consumption & Energy Efficiency</strong> - Optimizing power usage.</li>
                                <li><strong>Interoperability Issues</strong> - Ensuring seamless communication.</li>
                                <li><strong>Regulatory Compliance</strong> - Adhering to data protection and industry standards.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pioneering IoT Applications in India Section */}
            <div class="applications-container mb-5">
                <div class="row mb-4">
                    <div class="col-12">
                        <div class="applications-header">
                            <div class="apps-title-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h2 class="section-subtitle">Pioneering IoT Applications in India</h2>
                                <p class="section-tagline">IoT is making a real impact across industries in India. Here are some prominent use cases:</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="apps-grid-wrapper">
                    <div class="row g-0">
                        {/* App 1 */}
                        <div class="col-lg-6 col-12 border-right-dashed border-bottom-dashed">
                            <div class="app-grid-item">
                                <div class="app-icon-container">
                                    <i class="fas fa-industry"></i>
                                </div>
                                <div class="app-text-container">
                                    <h4>IoT in Industrial & Robotic Economy</h4>
                                    <p>IoT is revolutionizing manufacturing with predictive maintenance, automation, and real-time monitoring.</p>
                                </div>
                            </div>
                        </div>
                        {/* App 2 */}
                        <div class="col-lg-6 col-12 border-bottom-dashed">
                            <div class="app-grid-item">
                                <div class="app-icon-container">
                                    <i class="fas fa-leaf"></i>
                                </div>
                                <div class="app-text-container">
                                    <h4>IoT in Agriculture & Farming</h4>
                                    <p>Smart farming using IoT improves crop monitoring, soil analysis, and resource optimization.</p>
                                </div>
                            </div>
                        </div>
                        {/* App 3 */}
                        <div class="col-lg-6 col-12 border-right-dashed border-bottom-dashed">
                            <div class="app-grid-item">
                                <div class="app-icon-container">
                                    <i class="fas fa-city"></i>
                                </div>
                                <div class="app-text-container">
                                    <h4>Smart Cities and Urban Planning</h4>
                                    <p>IoT helps create smarter, safer cities with intelligent traffic management, smart lighting, and waste management.</p>
                                </div>
                            </div>
                        </div>
                        {/* App 4 */}
                        <div class="col-lg-6 col-12 border-bottom-dashed">
                            <div class="app-grid-item">
                                <div class="app-icon-container">
                                    <i class="fas fa-car"></i>
                                </div>
                                <div class="app-text-container">
                                    <h4>IoT in Automotive & Vehicle Solutions</h4>
                                    <p>IoT enhances vehicle tracking, predictive maintenance, and connected car technologies.</p>
                                </div>
                            </div>
                        </div>
                        {/* App 5 */}
                        <div class="col-lg-6 col-12 border-right-dashed">
                            <div class="app-grid-item">
                                <div class="app-icon-container">
                                    <i class="fas fa-heartbeat"></i>
                                </div>
                                <div class="app-text-container">
                                    <h4>IoT in Healthcare & Remote Patient Monitoring</h4>
                                    <p>Wearables and IoT-enabled devices are transforming healthcare by enabling remote patient monitoring and diagnostics.</p>
                                </div>
                            </div>
                        </div>
                        {/* App 6 */}
                        <div class="col-12 col-lg-6">
                            <div class="app-grid-item">
                                <div class="app-icon-container">
                                    <i class="fas fa-laptop-house"></i>
                                </div>
                                <div class="app-text-container">
                                    <h4>Smart Homes and Home Automation</h4>
                                    <p>IoT-powered smart homes offer convenience, security, and energy efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Split Layout List Section */}
            <div class="split-list-container mb-5">
                {/* Row 1 */}
                <div class="split-row">
                    <div class="split-left">
                        <div class="split-title-wrap">
                            <div class="split-icon-indicator">
                                <i class="fas fa-chart-bar"></i>
                            </div>
                            <h3>The need for Advancements</h3>
                        </div>
                    </div>
                    <div class="split-divider"></div>
                    <div class="split-right">
                        <p>Meeting the growing IoT demands requires continuous innovation in processing power, battery life, seamless connectivity, and robust security to tackle evolving challenges.</p>
                    </div>
                </div>
                {/* Row 2 */}
                <div class="split-row">
                    <div class="split-left">
                        <div class="split-title-wrap">
                            <div class="split-icon-indicator">
                                <i class="fas fa-project-diagram"></i>
                            </div>
                            <h3>Ensuring Interoperability in IoT Embedded Systems</h3>
                        </div>
                    </div>
                    <div class="split-divider"></div>
                    <div class="split-right">
                        <p>Interoperability is the lifeblood of IoT, ensuring devices from different manufacturers communicate seamlessly. Standards like MQTT, CoAP, and HTTP are paving the way for a unified IoT ecosystem.</p>
                    </div>
                </div>
                {/* Row 3 */}
                <div class="split-row">
                    <div class="split-left">
                        <div class="split-title-wrap">
                            <div class="split-icon-indicator">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <h3>Unlocking the Future of IoT Embedded Systems</h3>
                        </div>
                    </div>
                    <div class="split-divider"></div>
                    <div class="split-right">
                        <p>The future of IoT embedded systems is driven by emerging technologies like edge computing and AI. These advancements will empower industries, drive automation, and unlock new possibilities.</p>
                    </div>
                </div>
                {/* Row 4 */}
                <div class="split-row">
                    <div class="split-left">
                        <div class="split-title-wrap">
                            <div class="split-icon-indicator">
                                <i class="fas fa-rocket"></i>
                            </div>
                            <h3>Becoming Ahead in the Transformative Landscape</h3>
                        </div>
                    </div>
                    <div class="split-divider"></div>
                    <div class="split-right">
                        <p>To stay ahead, businesses must innovate, adopt IoT, and partner with the right technology experts. Investing in IoT today ensures long-term success in an ever-evolving digital world.</p>
                    </div>
                </div>
            </div>

            {/* Dark Blue CTA Footer Banner */}
            <div class="cta-banner-card">
                <div class="row align-items-center g-4">
                    <div class="col-lg-2 col-md-3 col-12 text-center">
                        <div class="rocket-icon-wrapper">
                            <div class="rocket-circle">
                                <i class="fas fa-rocket rocket-img-icon"></i>
                            </div>
                            <div class="floating-stars">
                                <span class="star star-1">?</span>
                                <span class="star star-2">?</span>
                                <span class="star star-3">?</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-9 col-12 text-center text-md-start">
                        <p class="cta-banner-text">
                            IoT is revolutionizing the Indian embedded industry, creating endless opportunities for businesses and individuals. Embrace the IoT wave, invest in innovation, and lead the charge toward a smarter, connected future.
                        </p>
                        <div class="cta-badge-container">
                            <div class="cta-badge">
                                <i class="far fa-star"></i> Stay curious, keep innovating, and let's shape the future together!
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    {/* Blog Details Content End */}

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
    <script src="/assets/js/script.js?v=3"></script>
        </MainLayout>
    );
}
