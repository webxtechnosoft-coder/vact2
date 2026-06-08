import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function EmbeddedYoctoTraining() {
    return (
        <MainLayout>
            <Head title="EmbeddedYoctoTraining" />
            <link rel="stylesheet" href="/assets/css/embedded-yocto-training.css" />
            
{/* BREADCRUMBS SECTION START */}
    <section class="ul-breadcrumb ul-section-spacing">
        <div class="ul-container">
            <h2 class="ul-breadcrumb-title">Embedded Yocto Training</h2>
            <ul class="ul-breadcrumb-nav">
                <li><a href="index.html">Home</a></li>
                <li><span class="separator"><i class="flaticon-right"></i></span></li>
                <li>Embedded Yocto Training</li>
            </ul>
        </div>
    </section>
    {/* BREADCRUMBS SECTION END */}




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
                                        <img src="/assets/images/training/embedded_yocto.png" alt="Yocto Project Customization" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Embedded Linux <br /><span style={{ "color": "#008ed2" }}>Yocto Build Systems</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Learn to configure, build, and deploy custom Embedded Linux distributions from scratch. Master Yocto project fundamentals, including Poky, BitBake recipes, custom layers, and custom Board Support Packages (BSP).</p>
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
                                        <img src="/assets/images/training/certificate.png" alt="VAct Career Completion Certificate" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        VAct Career <br /><span style={{ "color": "#008ed2" }}>Completion Certificate</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Gain your official Yocto Project & BSP Engineering certificate. Validate your expertise in custom device trees, U-Boot configuration, and Linux kernel customization for industrial ARM hardware.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    {/*Counter Three Start */}
    <section class="counter-three" style={{ "paddingTop": "40px", "paddingBottom": "60px", "background": "rgba(0, 142, 210, 0.015)" }}>
        <div class="container-fluid" style={{ "paddingLeft": "45px", "paddingRight": "45px" }}>
            <div class="product-spotlight-card" style={{ "marginLeft": "0", "marginRight": "0", "width": "100%" }}>
                <div class="row align-items-stretch">
                    {/* Content Column (Left Side) */}
                    <div class="col-lg-7 mb-5 mb-lg-0">
                        <div class="spotlight-content-wrapper">
                            <div class="cta-pill-tag mb-3" style={{ "background": "rgba(0, 142, 210, 0.06)", "color": "var(--eduvers-base)", "fontSize": "11px", "fontWeight": "700", "padding": "5px 12px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0, 142, 210, 0.1)", "display": "inline-flex", "alignItems": "center", "gap": "6px", "width": "fit-content" }}>
                                <i class="fas fa-graduation-cap"></i> Course Highlights
                            </div>
                            <h3 class="product-details__title" style={{ "fontSize": "36px", "fontWeight": "800", "color": "#1e293b", "lineHeight": "1.2", "marginBottom": "15px" }}>Embedded Yocto Project Training</h3>
                            <p style={{ "fontWeight": "700", "color": "var(--eduvers-base)", "fontSize": "18px", "marginBottom": "20px" }}>Master the Industry-Standard Toolset for Custom Embedded Linux Development</p>
                            <p class="product-details__content-text1" style={{ "background": "rgba(0, 142, 210, 0.02)", "borderLeft": "4px solid var(--eduvers-base)", "padding": "15px 20px", "borderRadius": "4px 12px 12px 4px", "fontSize": "15px", "fontWeight": "600", "color": "#475569", "lineHeight": "1.6", "marginBottom": "-20px" }}>
                                The Yocto Project is the benchmark in the embedded Linux ecosystem, empowering developers with the tools to create secure, efficient, and highly customizable Linux distributions tailored to any hardware platform. From consumer electronics and industrial automation to automotive ECUs and IoT devices, Yocto is your gateway to full control over your embedded operating system.
                            </p>
                            <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#64748b", "marginBottom": "25px" }}>
                                Whether you?re targeting ARM-based platforms, custom SoCs, or low-power devices, this training equips you with the expertise to go from initial setup to production-ready images ? the professional way. Gain full mastery over recipes, layers, configuration files, board support packages (BSPs), and distribution building.
                            </p>
                            <div class="spotlight-btn-group">
                                <a href="/contact" class="spotlight-btn spotlight-btn-primary">
                                    Enroll Now <i class="fas fa-arrow-right"></i>
                                </a>

                                <a href="syllabus.pdf" download class="spotlight-btn spotlight-btn-secondary">
                                    Download Syllabus <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Image Column (Right Side) */}
                    <div class="col-lg-5">
                        <div class="spotlight-image-container" style={{ "minHeight": "480px" }}>
                            <div class="spotlight-image-glow"></div>
                            <img src="/assets/images/training/all.png" class="spotlight-img img-fluid" alt="Embedded Automotive Training Overview" style={{ "borderRadius": "14px", "width": "100%", "height": "100%", "objectFit": "contain" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Counter Three End */}

        {/* Best Training Section Start */}
        <section class="best-training-section">
            <div class="container">
                <h2 class="best-training-title wow fadeInUp" data-wow-delay="100ms">WE ARE MORE THAN A TRAINING CENTER,
                    <br /><span>WE ARE A CAREER SHAPER</span>
                </h2>
                <p class="best-training-desc wow fadeInUp" data-wow-delay="200ms">
                    Our course is designed by <span class="text-primary">Industry experts </span>and comes with <span class="text-primary">100% placement assurance.</span> Our course is designed in such a way that the candidates taking our #pictraining and #armtraining feels they are more than <span class="text-primary">1.5 years experienced.</span> This enables them to face the interview for #embeddedjobs with confidence and clear the interviews. The candidates undergoing #embeddedtrainingcourse in our facility is equipped with #realtimeexamples like writing test code for Engine Control Unit (ECU), Infotainment system, Airbag controller etc., . Our embedded training also includes an introduction to the latest concepts like AUTOSAR, RTOS, Embedded Linux, Device drivers, Boot loader development etc
                </p>

                <div class="row align-items-center mt-5">
                    {/* Left features */}
                    <div class="col-lg-4 col-md-12 wow fadeInLeft" data-wow-delay="300ms">
                        <div class="training-feature-box">
                            <div class="training-feature-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="training-feature-content">
                                <h4>Secure Testing & Challenges</h4>
                                <p>Interactive activities that promote safe and smart exploration.</p>
                            </div>
                        </div>
                        <div class="training-feature-box">
                            <div class="training-feature-icon">
                                <i class="fas fa-running"></i>
                            </div>
                            <div class="training-feature-content">
                                <h4>Strong Base For All</h4>
                                <p>Building early skills in a fun and engaging way to support future success.</p>
                            </div>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div class="col-lg-4 col-md-12 text-center wow fadeInUp" data-wow-delay="400ms">
                        <div class="center-laptop-wrapper">
                            <img src="/assets/images/training/embedded.png" alt="Education Training" class="img-fluid"
                                onerror="this.src='/assets/images/about/about1.png'" />
                        </div>
                    </div>

                    {/* Right features */}
                    <div class="col-lg-4 col-md-12 wow fadeInRight" data-wow-delay="500ms">
                        <div class="training-feature-box">
                            <div class="training-feature-icon">
                                <i class="fas fa-user-shield"></i>
                            </div>
                            <div class="training-feature-content">
                                <h4>All-Round Personal Growth</h4>
                                <p>Focus on emotional, social, and cognitive development.</p>
                            </div>
                        </div>
                        <div class="training-feature-box">
                            <div class="training-feature-icon">
                                <i class="fas fa-hand-holding-heart"></i>
                            </div>
                            <div class="training-feature-content">
                                <h4>Safe & Caring Environment</h4>
                                <p>A nurturing atmosphere where children feel loved, encouraged, and secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Best Training Section End */}


    {/* Course Highlights Section Start */}
    <section class="course-highlights-section">
        <div class="container">

            {/* Row 1: Course Highlights (left) + Real-World Applications (right) */}
            <div class="row" style={{ "alignItems": "flex-start" }}>

                {/* Left Column: Course Highlights */}
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="ch-box wow fadeInLeft" data-wow-delay="100ms">
                        <div class="ch-box-title-wrapper">
                            <div class="ch-box-icon"><i class="fas fa-book-open"></i></div>
                            <h3 class="ch-box-title">What You'll Learn (Course Highlights)</h3>
                        </div>
                        <ul class="ch-simple-list">
                            <li><strong>1. Yocto Project Basics</strong> &ndash; Poky distribution, BitBake execution engine,
                                metadata structures, and layers</li>
                            <li><strong>2. Custom Recipes &amp; Layers</strong> &ndash; Creating custom recipe files and
                                software metadata layer configurations</li>
                            <li><strong>3. BSPs &amp; Machine Configurations</strong> &ndash; Understanding BSP layers, custom
                                board integrations, and machine configurations</li>
                            <li><strong>4. Device Driver Integration</strong> &ndash; Adding, configuring, and loading custom
                                platform device drivers</li>
                            <li><strong>5. Application Deployment</strong> &ndash; Packaging and integrating proprietary
                                applications directly into Yocto images</li>
                            <li><strong>6. Kernel Customization &amp; Patching</strong> &ndash; Customizing Linux kernel
                                configurations and deploying kernel patches</li>
                            <li><strong>7. Production Image Tools</strong> &ndash; Custom image generation, cross-compilation
                                SDK creation, and deployment</li>
                            <li><strong>8. Hardware &amp; Board Setup</strong> &ndash; Testing builds on Raspberry Pi,
                                BeagleBone, and custom VAct AutoEdge boards</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Real-World Applications */}
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <div class="ch-box wow fadeInRight" data-wow-delay="100ms">
                        <div class="ch-box-title-wrapper">
                            <div class="ch-box-icon"><i class="fas fa-laptop-code"></i></div>
                            <h3 class="ch-box-title">Real-World Applications</h3>
                        </div>
                        <p class="ch-box-desc" style={{ "fontSize": "14px", "marginBottom": "12px", "fontWeight": "500" }}>
                            This training equips your product engineering teams to:
                        </p>
                        <ul class="ch-simple-list">
                            <li><strong>Build Complete Linux Distributions:</strong> Tailor the operating system
                                footprint precisely to your proprietary hardware</li>
                            <li><strong>Integrate Software Seamlessly:</strong> Cleanly add custom device drivers,
                                libraries, and applications</li>
                            <li><strong>Troubleshoot Build Errors:</strong> Master logs and BitBake devtool commands to
                                quickly debug system errors</li>
                            <li><strong>Production Flashing &amp; Deployment:</strong> Prepare secure Yocto-based Linux
                                images for secure mass deployment</li>
                            <li>
                                <strong>Customize Embedded Linux Platforms:</strong>
                                Create tailored Linux distributions optimized for specific hardware requirements and product needs.
                            </li>

                            <li>
                                <strong>Accelerate Product Development:</strong>
                                Reuse recipes, layers, and build configurations to reduce development time and improve productivity.
                            </li>

                            <li>
                                <strong>Enable Long-Term Product Maintenance:</strong>
                                Manage software updates, security patches, and version control efficiently throughout the product lifecycle.
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Row 2: Hands-On Practice (full width) */}
            <div class="row" style={{ "marginTop": "24px" }}>
                <div class="col-lg-12">
                    <div class="ch-box wow fadeInUp" data-wow-delay="100ms">
                        <div class="ch-box-title-wrapper">
                            <div class="ch-box-icon"><i class="fas fa-tools"></i></div>
                            <h3 class="ch-box-title">Hands-On Practice With:</h3>
                        </div>
                        <ul class="ch-simple-list">
                            <li><strong>Linux Image Building</strong> &ndash; Compile minimal and full-featured Linux
                                images from scratch</li>
                            <li><strong>Recipes &amp; Layers</strong> &ndash; Create custom layers and write BitBake
                                recipes for your own services</li>
                            <li><strong>BSP Porting</strong> &ndash; Port Linux Board Support Packages (BSPs) to custom
                                target hardware</li>
                            <li><strong>Build Debugging</strong> &ndash; Troubleshoot build issues, read build logs, and
                                use interactive shells</li>
                            <li><strong>Root Filesystem Customization</strong> &ndash; Configure system init sequences with
                                BusyBox and Systemd</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
    {/* Course Highlights Section End */}




    <section>
        <div class="syllabus-wrapper">
            <h2 class="syllabus-title">Embedded Linux And Yocto Project Syllabus</h2>
            <div class="title-divider"></div>

            <div class="accordion" id="syllabusAccordion">

                {/* Module 01 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m1">
                            <span class="num-badge">01</span>
                            <span class="ms-3">Overview on Embedded Linux</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m1" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Understanding Embedded Systems</li>
                                <li><span class="dot"></span> Fundamentals of Embedded Systems</li>
                                <li><span class="dot"></span> Introduction to Embedded Linux</li>
                                <li><span class="dot"></span> Various Platforms of Embedded Linux</li>
                                <li><span class="dot"></span> Real-time Examples</li>
                                <li><span class="dot"></span> Overview of Embedded Linux and its architecture</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 02 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m2">
                            <span class="num-badge">02</span>
                            <span class="ms-3">Getting Started with Raspberry Pi</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m2" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Introduction to Raspberry Pi</li>
                                <li><span class="dot"></span> Block diagram and working with Raspberry Pi</li>
                                <li><span class="dot"></span> Comparison of various Raspberry Pi models</li>
                                <li><span class="dot"></span> Understanding SoC Architecture</li>
                                <li><span class="dot"></span> Problem definition of SoCs used in Raspberry Pi</li>
                                <li><span class="dot"></span> Pin configuration of Raspberry Pi</li>
                                <li><span class="dot"></span> Interfacing Raspberry Pi with External Devices</li>
                                <li><span class="dot"></span> Getting started with Projects</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 03 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m3">
                            <span class="num-badge">03</span>
                            <span class="ms-3">Booting Up RPi - Operating System &amp; Linux Commands</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m3" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Introduction to Linux</li>
                                <li><span class="dot"></span> Simplified Linux System Architecture</li>
                                <li><span class="dot"></span> Standard Linux Boot chain &amp; File Systems</li>
                                <li><span class="dot"></span> Raspbian OS ? Fundamentals and Tools used</li>
                                <li><span class="dot"></span> Installing Built OS on Raspberry Pi</li>
                                <li><span class="dot"></span> Foundations and Popular Linux commands</li>
                                <li><span class="dot"></span> Booting and Basic Configuration of Raspberry Pi</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 04 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m4">
                            <span class="num-badge">04</span>
                            <span class="ms-3">C Language ? Working on C with RPi</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m4" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> C Fundamentals ? Compiled Language</li>
                                <li><span class="dot"></span> C Concepts ? Data types, variables, conditional
                                    statements, and loops</li>
                                <li><span class="dot"></span> C Library Installation in Raspberry Pi</li>
                                <li><span class="dot"></span> Compiling C Programs</li>
                                <li><span class="dot"></span> Using Wiring Pi for GPIO Programming</li>
                                <li><span class="dot"></span> Interfacing Raspberry Pi with C</li>
                                <li><span class="dot"></span> Practical Exercises &amp; Assignments</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 05 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m5">
                            <span class="num-badge">05</span>
                            <span class="ms-3">Working with RPi &amp; Sensing Data using Python</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m5" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Introduction to Python</li>
                                <li><span class="dot"></span> Python vs Other Languages and its overview</li>
                                <li><span class="dot"></span> Applications of Python</li>
                                <li><span class="dot"></span> Understanding Python as an Interpreted Language</li>
                                <li><span class="dot"></span> Variables, Keywords, Operators, and Operands</li>
                                <li><span class="dot"></span> Data Types in Python &amp; Importing Libraries</li>
                                <li><span class="dot"></span> Flow Control, Conditional Statements, and Loops</li>
                                <li><span class="dot"></span> Sensor Interfacing Projects ? Temperature, Motion, and
                                    Obstacle detection</li>
                                <li><span class="dot"></span> Communication using Raspberry Pi ? GSM interfacing &amp;
                                    Accessing on-board Wi-Fi</li>
                                <li><span class="dot"></span> Database connection with Raspberry Pi</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 06 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m6">
                            <span class="num-badge">06</span>
                            <span class="ms-3">Yocto Embedded Linux Using Raspberry Pi</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m6" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> <strong>Introduction:</strong> Various ways of creating
                                    Embedded Linux, building principles, Yocto Project features, architecture,
                                    documentation, and Yocto community.</li>
                                <li><span class="dot"></span> <strong>Building First Image:</strong> Installing Docker,
                                    basic Yocto terms, core components, build system workflow, building a first
                                    Raspberry Pi image, and customizing target images.</li>
                                <li><span class="dot"></span> <strong>Yocto Bitbake and Others:</strong> BitBake
                                    overview, BitBake rootfs, tasks, useful commands, Yocto layout, layers command,
                                    creating a custom image, machine &amp; distribution, and writing the first software
                                    recipe.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 07 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m7">
                            <span class="num-badge">07</span>
                            <span class="ms-3">User Configuration Yocto Project</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m7" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Raspberry Pi 3 Boot sequence</li>
                                <li><span class="dot"></span> Creation and usage of custom SDKs</li>
                                <li><span class="dot"></span> Using the SDK with Qt Creator</li>
                                <li><span class="dot"></span> Designing custom Linux distributions for Yocto Projects
                                </li>
                                <li><span class="dot"></span> Key challenges in Yocto Projects</li>
                                <li><span class="dot"></span> Building an Operating System (OS) in Real-Time using Yocto
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 08 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m8">
                            <span class="num-badge">08</span>
                            <span class="ms-3">Introduction to Embedded Linux and Yocto Project</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m8" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Comprehensive overview of embedded systems</li>
                                <li><span class="dot"></span> Deep-dive into Yocto Project architecture and its
                                    ecosystem components</li>
                                <li><span class="dot"></span> Understanding the distinct benefits of Yocto Project for
                                    modern embedded development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 09 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m9">
                            <span class="num-badge">09</span>
                            <span class="ms-3">Setting up the Development Environment</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m9" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Installing required host software packages and utilities
                                    (Yocto, OpenEmbedded, etc.)</li>
                                <li><span class="dot"></span> Configuring build configurations and workspace
                                    environments</li>
                                <li><span class="dot"></span> Practical introduction to BitBake execution commands and
                                    recipe structures</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 10 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m10">
                            <span class="num-badge">10</span>
                            <span class="ms-3">Understanding Yocto Layers and Recipes</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m10" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Understanding layers, metadata design, and their
                                    significance</li>
                                <li><span class="dot"></span> Creating and managing custom software and target layers
                                </li>
                                <li><span class="dot"></span> Writing, analyzing, and building custom configuration
                                    recipes</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 11 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m11">
                            <span class="num-badge">11</span>
                            <span class="ms-3">Building Custom Embedded Linux Distributions</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m11" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Creating modular custom distributions using Yocto
                                    variables</li>
                                <li><span class="dot"></span> Customizing Linux kernel configurations (defconfig,
                                    fragments, and tools)</li>
                                <li><span class="dot"></span> Dynamic package management: Adding, updating, and removing
                                    rootfs software packages</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 12 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m12">
                            <span class="num-badge">12</span>
                            <span class="ms-3">Working with the Yocto BSP (Board Support Package)</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m12" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Core concepts of Board Support Package (BSP) metadata
                                    layers</li>
                                <li><span class="dot"></span> Leveraging and deploying existing BSPs for commercial
                                    hardware platforms</li>
                                <li><span class="dot"></span> Customizing BSP parameters, boot interfaces, and target
                                    machine hardware configurations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 13 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m13">
                            <span class="num-badge">13</span>
                            <span class="ms-3">Building and Deploying Embedded Applications</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m13" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Compiling and building target applications using Yocto
                                    toolchains</li>
                                <li><span class="dot"></span> Deploying build binaries and configs to target hardware
                                    filesystems</li>
                                <li><span class="dot"></span> Cross-development debugging and hardware troubleshooting
                                    methods</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 14 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m14">
                            <span class="num-badge">14</span>
                            <span class="ms-3">Image Creation and Deployment</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m14" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Generating bootable images for SD cards, eMMC, and flash
                                    memory</li>
                                <li><span class="dot"></span> Customizing root filesystems, permissions, and initial
                                    configurations</li>
                                <li><span class="dot"></span> Flashing production-ready images to target devices and
                                    development boards</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 15 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m15">
                            <span class="num-badge">15</span>
                            <span class="ms-3">Advanced Topics</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m15" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Advanced Yocto Project customization, recipe inheriting,
                                    and class extensions</li>
                                <li><span class="dot"></span> Integrating builds with version control systems (Git,
                                    submodules, releases)</li>
                                <li><span class="dot"></span> Performance optimization, reducing build times, and
                                    runtime profiling</li>
                                <li><span class="dot"></span> Security considerations, secure boot validation, and CVE
                                    vulnerability patching in embedded Linux</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 16 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m16">
                            <span class="num-badge">16</span>
                            <span class="ms-3">Real-world Project or Case Study</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m16" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Applying all learned concepts to a real-world product
                                    project or case study</li>
                                <li><span class="dot"></span> Building a custom embedded Linux system entirely from
                                    scratch</li>
                                <li><span class="dot"></span> Troubleshooting build logs, debugging errors, and
                                    optimizing system configurations</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 17 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m17">
                            <span class="num-badge">17</span>
                            <span class="ms-3">Conclusion and Next Steps</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m17" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Recap of key concepts, BitBake commands, and Yocto
                                    workflows</li>
                                <li><span class="dot"></span> Further resources and documentation for continued
                                    exploration in embedded Linux</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="why-choose-one" style={{ "marginTop": "60px" }}>
        <div class="why-choose-one__bg" style={{ backgroundImage: "url(assets/images/backgrounds/why-choose-one-bg.jpg)" }}>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <div class="why-choose-one__left">
                        <div class="section-title text-left sec-title-animation animation-style2">
                            <div class="section-title__tagline-box">
                                <div class="section-title__tagline-shape"></div>
                                <div class="section-title__tagline-shape-2"></div>
                                <span class="section-title__tagline">Why Choose us</span>
                            </div>
                            <h2 class="section-title__title title-animation">VAct Technologies

                                <span>Yocto Training</span>
                            </h2>
                        </div>
                        <p class="why-choose-one__text"> VAct Technologies Yocto Training course provides
                            industry-oriented training with real-time projects and hands-on practical
                            exposure to make students job-ready in embedded and automotive technologies.
                            <strong>Your Success Is Our Mission</strong> ? at VAct Technologies, we are
                            dedicated to helping you achieve your career goals with expert guidance and
                            practical learning.</p>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="why-choose-one__right">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4">
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-award"></span>
                                    </div>

                                    <h3 class="why-choose-one__title">
                                        Embrace Excellence
                                    </h3>

                                    <p class="why-choose-one__single-text">
                                        Industry-oriented embedded systems training with real-time projects and
                                        practical learning experience.
                                    </p>
                                </div>
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-handshake"></span>
                                    </div>

                                    <h3 class="why-choose-one__title">
                                        Industry Collaboration
                                    </h3>

                                    <p class="why-choose-one__single-text">
                                        Training developed with automotive OEM standards and modern embedded
                                        technologies.
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 mt-5 pt-4">
                                <div class="why-choose-one__single-img">

                                    <div class="why-choose-one__single-img-shape"></div>

                                    <img src="/assets/images/resources/why.png.jpeg" alt="Why Choose VAct Technologies"
                                        class="img-fluid" />

                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-microchip"></span>
                                    </div>
                                    <h3 class="why-choose-one__title">Standardized Training</h3>
                                    <p class="why-choose-one__single-text">Learn using industry-standard VAct Auto Edge
                                        Development Boards and advanced tools.</p>
                                </div>
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-users-cog"></span>
                                    </div>
                                    <h3 class="why-choose-one__title">Expert Guidance</h3>
                                    <p class="why-choose-one__single-text">Get mentorship, placement support, and
                                        career-focused training from experienced professionals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Certified Professionals Section Start */}
    <section class="certified-professionals-section" style={{ "background": "linear-gradient(135deg, #f0f7fc 0%, #ffffff 60%, #f0f4ff 100%)", "padding": "30px 0", "minHeight": "100vh", "display": "flex", "alignItems": "center" }}>
        <div class="container-fluid px-0">
            <div class="product-spotlight-card" style={{ "marginTop": "0", "borderRadius": "0", "boxShadow": "none" }}>
                <div class="row align-items-stretch g-0">

                    {/* Left: Image Column */}
                    <div class="col-lg-5 col-md-12 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay="100ms">
                        <div style={{ "height": "100%", "background": "radial-gradient(circle at 50% 50%, rgba(0,142,210,0.06) 0%, rgba(129,140,248,0.04) 100%)", "borderRadius": "0", "borderRight": "2px solid rgba(0,142,210,0.12)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "40px 60px", "position": "relative", "overflow": "hidden" }}>
                            {/* Glow effect */}
                            <div style={{ "position": "absolute", "width": "200px", "height": "200px", "background": "radial-gradient(circle, rgba(0,142,210,0.12) 0%, transparent 70%)", "top": "50%", "left": "50%", "transform": "translate(-50%,-50%)", "pointerEvents": "none", "animation": "pulse-glow 4s ease-in-out infinite alternate" }}></div>
                            <img src="/assets/images/training/certificate.png"
                                alt="VAct Technologies Certification"
                                class="img-fluid"
                                style={{ "borderRadius": "14px", "position": "relative", "zIndex": "2", "objectFit": "contain", "animation": "float-board 6s ease-in-out infinite", "filter": "drop-shadow(0 20px 40px rgba(0,142,210,0.15))" }}
                                onerror="this.src='/assets/images/about/about1.png'" />
                        </div>
                    </div>

                    {/* Right: Content Column */}
                    <div class="col-lg-7 col-md-12 wow fadeInRight" data-wow-delay="200ms">
                        <div class="spotlight-content-wrapper" style={{ "padding": "30px 60px 30px 50px" }}>

                            {/* Tag */}
                            <div class="cta-pill-tag mb-2" style={{ "background": "rgba(0,142,210,0.06)", "color": "var(--eduvers-base)", "fontSize": "10px", "fontWeight": "700", "padding": "3px 10px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0,142,210,0.1)", "display": "inline-flex", "alignItems": "center", "gap": "5px", "width": "fit-content" }}>
                                <i class="fas fa-award"></i> Professional Certification
                            </div>

                            {/* Title */}
                            <h2 class="cp-title" style={{ "fontSize": "22px", "fontWeight": "800", "color": "#008ed2", "lineHeight": "1.25", "marginBottom": "10px" }}>
                                Become a VAct Technologies<br />
                                <span style={{ "color": "#0d2944" }}>Certified Automotive</span><br />
                                <span style={{ "color": "#0d2944" }}>Embedded Professional</span>
                            </h2>

                            {/* Divider */}
                            <div class="cp-divider mb-2">
                                <span></span><span></span><span></span>
                            </div>

                            {/* Paragraphs */}
                            <p class="cp-text" style={{ "fontSize": "12px", "lineHeight": "1.5", "marginBottom": "6px", "textAlign": "justify" }}>
                                The automotive industry is evolving rapidly, with embedded systems at its core. To thrive in
                                this competitive field, hands-on experience with industry-standard hardware, tools, and
                                software is essential. At VAct Technologies, we bridge the gap between academia and industry
                                by offering cutting-edge training on real-world automotive embedded systems.
                            </p>

                            <p class="cp-text" style={{ "fontSize": "12px", "lineHeight": "1.5", "marginBottom": "6px", "textAlign": "justify" }}>
                                Our AutoEdge Development Board provides students with practical exposure to AUTOSAR, CAN, LIN,
                                FlexRay, UDS, and real-time diagnostics?the very technologies used by leading automotive companies.
                                With access to the latest microcontrollers, industry-grade tools, and professional debugging
                                environments, students gain the skills that employers demand.
                            </p>

                            {/* List Title */}
                            <h4 class="cp-list-title" style={{ "fontSize": "12px", "marginBottom": "6px", "marginTop": "6px" }}>By enrolling in our Certified Automotive Embedded Program, you will:</h4>

                            {/* Feature List */}
                            <ul class="cp-features-list" style={{ "gap": "5px" }}>
                                <li style={{ "padding": "5px 0", "fontSize": "12px" }}>
                                    <div class="cp-check-icon" style={{ "width": "20px", "height": "20px", "minWidth": "20px", "fontSize": "10px" }}><i class="fas fa-check"></i></div>
                                    <span>Work on real-world automotive protocols and embedded software</span>
                                </li>
                                <li style={{ "padding": "5px 0", "fontSize": "12px" }}>
                                    <div class="cp-check-icon" style={{ "width": "20px", "height": "20px", "minWidth": "20px", "fontSize": "10px" }}><i class="fas fa-check"></i></div>
                                    <span>Gain expertise using the latest tools &amp; debugging techniques</span>
                                </li>
                                <li style={{ "padding": "5px 0", "fontSize": "12px" }}>
                                    <div class="cp-check-icon" style={{ "width": "20px", "height": "20px", "minWidth": "20px", "fontSize": "10px" }}><i class="fas fa-check"></i></div>
                                    <span>Learn from industry experts with hands-on project experience</span>
                                </li>
                                <li style={{ "padding": "5px 0", "fontSize": "12px" }}>
                                    <div class="cp-check-icon" style={{ "width": "20px", "height": "20px", "minWidth": "20px", "fontSize": "10px" }}><i class="fas fa-check"></i></div>
                                    <span>Be job-ready for top roles in automotive embedded engineering</span>
                                </li>
                            </ul>

                            {/* Bottom Line */}
                            <div class="cp-bottom-line" style={{ "margin": "8px 0" }}></div>
                            <p class="cp-bottom-text" style={{ "fontSize": "12px", "marginBottom": "8px" }}>
                                Transform your passion into a high-growth career with<br />
                                <strong style={{ "color": "#008ed2" }}>VAct Technologies</strong> ? where innovation meets expertise!
                            </p>

                            {/* CTA Buttons */}
                            <div style={{ "display": "flex", "gap": "10px", "marginTop": "10px", "flexWrap": "wrap" }}>
                                <a href="/contact" class="thm-btn" style={{ "width": "fit-content", "padding": "8px 18px", "fontSize": "12px" }}>Enroll Now <span class="fas fa-arrow-right"></span></a>
                                <a href="/contact" class="thm-btn" style={{ "width": "fit-content", "background": "#0d2944", "padding": "8px 18px", "fontSize": "12px" }}>Talk to Our Experts <span class="fas fa-comments"></span></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* Certified Professionals Section End */}

    {/*Instructors Two Start */}
    <section class="instructors-two" style={{ "padding": "30px 0", "minHeight": "100vh", "display": "flex", "alignItems": "center", "width": "100%" }}>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Our Instructors</span>
                </div>
                <h2 class="section-title__title title-animation">Meet the Team Passionate
                    <br />People, Exceptional <span>Talents</span>
                </h2>
            </div>
            <div class="row">
                {/*Instructors Two Single Start*/}
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-1.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">
                                        Mr.Kumaravel Pandurangan</a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>Founder Managing Directorr</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Instructors Two Single End*/}
                {/*Instructors Two Single Start*/}
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-2.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#"> Mr.Raj
                                        Pandrala</a>
                                </h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>Presenter</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Instructors Two Single End*/}
                {/*Instructors Two Single Start*/}
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-3.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">
                                        Mr A Prabhakaran</a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>Embedded Systems</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Instructors Two Single End*/}
                {/*Instructors Two Single Start*/}
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-4.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">Mr. Vijay
                                    </a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>GenAi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-4.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">Mr Sandeep
                                    </a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>Automotive &amp; Embedded Systems</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-4.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">Mr Sumitt
                                    </a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>QnX &amp; Embdded Linux</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Instructors Two Single End*/}
            </div>
        </div>
    </section>
    {/*Instructors Two End */}

    {/*Testimonial Four Start*/}
    <section class="testimonial-four pb-5">
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Placements</span>
                </div>
                <h2 class="section-title__title title-animation">What Our Associates <span>Say</span></h2>
            </div>
            <div class="testimonial-four__inner">
                <div class="row">
                    {/*Testimonial Four Single Start*/}

                    {/*Testimonial Four Single End*/}
                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/divakar.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Divakar.R</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Hardware Design <br /> Engineer</p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Divakar.R secured a role as a Hardware Design
                                        Engineer. With 7 years of experience,
                                        he has strong expertise in hardware design and development.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}
                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/dinesh-babu.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Dinesh Babu</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Embedded <br /> engineer</p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Dinesh Babu from Batch 51 secured a role as an
                                        Embedded Engineer. His technical
                                        skills and dedication helped him gain 2 years of successful industry experience.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}
                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/Abhinaya.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Abinaya</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Sr. SWE?<br />
                                            Automotive</p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Abinaya secured a role as Senior Software Engineer
                                        ? Automotive. With 4.5 years of
                                        experience, she has strong expertise in automotive software and embedded
                                        technologies.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}

                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/muk.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Mukesh.E</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">mech <br /> design p3
                                        </p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Mukesh.E secured a Mechanical Design P3 role with
                                        an impressive salary package of 7 LPA. His 7 years of experience showcase his
                                        strong professional growth in mechanical design engineering.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}

                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/karthick.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">KARTHICK T</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Hardware Design <br /> Engineer
                                        </p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">KARTHICK T achieved placement as a Hardware Design
                                        Engineer. With 6.5 years of
                                        experience, he has gained strong expertise in hardware design and validation.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}

                    {/*Testimonial Four 7 Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/balamurali.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Balamurali</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Mechancial Design <br /> Engineer
                                        </p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Balamurali started his career as a Mechanical
                                        Design Engineer. His strong understanding of
                                        design concepts helped him excel in the mechanical industry.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}



                </div>
            </div>
        </div>
    </section>
    {/*Testimonial Four End*/}

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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </MainLayout>
    );
}
