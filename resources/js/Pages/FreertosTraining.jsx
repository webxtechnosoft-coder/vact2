import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function FreertosTraining() {
    return (
        <MainLayout>
            <Head title="FreertosTraining" />
            
{/* BREADCRUMBS SECTION START */}
    <section class="ul-breadcrumb ul-section-spacing">
        <div class="ul-container">
            <h2 class="ul-breadcrumb-title">FreeRTOS Training</h2>
            <ul class="ul-breadcrumb-nav">
                <li><a href="index.html">Home</a></li>
                <li><span class="separator"><i class="flaticon-right"></i></span></li>
                <li>FreeRTOS Training</li>
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
                                        <img src="/assets/images/training/freertos.png" alt="FreeRTOS Kernel Multi-tasking" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        FreeRTOS Kernel <br /><span style={{ "color": "#008ed2" }}>Multitasking and RTOS</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Master real-time multitasking on resource-constrained microcontrollers. Understand preemptive scheduling, task states, task notifications, software timers, and deterministic memory allocation schemes.</p>
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
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Obtain your verified FreeRTOS Developer credential. Prove your proficiency in inter-task communication (IPC), priority inheritance mutexes, event groups, and building highly deterministic real-time software systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Testimonial One End*/}
    {/*Testimonial One End*/}
    {/*Testimonial One End*/}
    {/*Testimonial One End*/}
    {/*Testimonial One End*/}



    {/* Course Highlights Product Spotlight Start */}
    <section class="product-details" style={{ "paddingTop": "40px", "paddingBottom": "60px" }}>
        <div class="container">
            <div class="product-spotlight-card">
                <div class="row align-items-stretch">
                    {/* Content Column (Left Side) */}
                    <div class="col-lg-7 mb-5 mb-lg-0">
                        <div class="spotlight-content-wrapper">
                            <div class="cta-pill-tag mb-3" style={{ "background": "rgba(0, 142, 210, 0.06)", "color": "#008ed2", "fontSize": "11px", "fontWeight": "700", "padding": "5px 12px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0, 142, 210, 0.1)", "display": "inline-flex", "alignItems": "center", "gap": "6px", "width": "fit-content" }}>
                                <i class="fas fa-microchip"></i> Course Highlights
                            </div>
                            <h3 class="product-details__title" style={{ "fontSize": "36px", "fontWeight": "800", "color": "#1e293b", "lineHeight": "1.2", "marginBottom": "15px" }}>FreeRTOS <span style={{ "color": "#008ed2" }}>on STM32</span></h3>

                            <p class="counter-three__text" style={{ "textAlign": "justify", "marginBottom": "20px", "color": "#5a5a5a", "lineHeight": "1.7", "fontSize": "16px" }}>
                                FreeRTOS (Free Real-Time Operating System) is a popular, open-source real-time operating system kernel designed for embedded devices. Developed and maintained by Amazon Web Services (AWS), FreeRTOS is used in thousands of commercial applications across automotive, medical, industrial, and consumer electronics sectors.
                                <br /><br />
                                It provides lightweight task management, timing, and inter-task communication features needed to create reliable and responsive embedded systems, especially when working with microcontrollers like STM32, AVR, PIC, and ARM Cortex-M cores.
                            </p>

                            <div style={{ "background": "rgba(0, 142, 210, 0.02)", "borderLeft": "4px solid #008ed2", "padding": "15px 20px", "borderRadius": "4px 12px 12px 4px", "marginTop": "15px" }}>
                                <h4 style={{ "fontSize": "17px", "color": "#1e1e22", "fontWeight": "700", "marginBottom": "8px" }}>Learn how to use FreeRTOS in your application:</h4>
                                <p style={{ "margin": "0", "color": "#475569", "lineHeight": "1.6", "fontSize": "15px", "textAlign": "justify", "fontWeight": "600" }}>
                                    The training intent is to introduce the main features, components, configuration options, and API functions of the FreeRTOS operating system with the usage of STM32 dedicated tools and HW.
                                </p>
                            </div>

                        {/* CTA Buttons */}
<div style={{ "display": "flex", "gap": "14px", "marginTop": "28px", "flexWrap": "wrap", "alignItems": "center" }}>
    
    <a href="/contact" class="thm-btn" style={{ "padding": "13px 28px", "fontSize": "15px", "fontWeight": "700", "borderRadius": "50px", "background": "#008ed2", "color": "#fff", "textDecoration": "none", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "all 0.3s ease", "boxShadow": "0 6px 20px rgba(0,142,210,0.25)" }}>
        Enroll Now <span class="fas fa-arrow-right"></span>
    </a>

    <a href="brochure.pdf" download class="thm-btn" style={{ "padding": "13px 28px", "fontSize": "15px", "fontWeight": "700", "borderRadius": "50px", "background": "#0d2944", "color": "#fff", "textDecoration": "none", "display": "inline-flex", "alignItems": "center", "gap": "8px", "transition": "all 0.3s ease", "boxShadow": "0 6px 20px rgba(13,41,68,0.2)" }}>
        Download Syllabus  <span class="fas fa-download"></span>
    </a>

</div>
                          
                        </div>
                    </div>
                    {/* Image Column (Right Side) */}
                    <div class="col-lg-5">
                        <div class="spotlight-image-container">
                            <div class="spotlight-image-glow"></div>
                            <img src="/assets/images/training/freertos.png" class="spotlight-img img-fluid" alt="FreeRTOS Training on STM32" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Course Highlights Product Spotlight End */}

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

            {/* Row 1: Why FreeRTOS (left) + Key Components & Real-World Applications (right) */}
            <div class="row">

                {/* Left Column: Why FreeRTOS */}
                <div class="col-lg-6 mb-4">
                    <div class="ch-box wow fadeInLeft" data-wow-delay="100ms">
                        <div class="ch-box-title-wrapper">
                            <div class="ch-box-icon"><i class="fas fa-question-circle"></i></div>
                            <h3 class="ch-box-title">Why FreeRTOS for Embedded Systems?</h3>
                        </div>
                        <p class="ch-box-desc">
                            FreeRTOS is the world's leading open-source RTOS for embedded microcontrollers trusted
                            by millions of engineers across automotive, medical, industrial, and IoT domains.
                        </p>

                        <div class="ch-feature-item">
                            <div class="ch-feature-icon"><i class="fas fa-clock"></i></div>
                            <div class="ch-feature-content">
                                <h5>Real-Time Determinism</h5>
                                <p>FreeRTOS guarantees that tasks respond within strict timing deadlines, perfect for
                                    motor control, wireless communication, and medical monitoring.</p>
                            </div>
                        </div>

                        <div class="ch-feature-item">
                            <div class="ch-feature-icon"><i class="fas fa-feather-alt"></i></div>
                            <div class="ch-feature-content">
                                <h5>Lightweight &amp; Modular</h5>
                                <p>Uses only the features your application needs reducing memory footprint, power
                                    consumption, and complexity, crucial for small MCUs like STM32, AVR, or ESP32.</p>
                            </div>
                        </div>

                        <div class="ch-feature-item">
                            <div class="ch-feature-icon"><i class="fas fa-microchip"></i></div>
                            <div class="ch-feature-content">
                                <h5>Broad Architecture Support</h5>
                                <p>Supports over 40 microcontroller architectures including ARM Cortex-M (STM32, NXP,
                                    TI), RISC-V, Renesas RX, Microchip PIC32, ESP32, and more.</p>
                            </div>
                        </div>

                        <div class="ch-feature-item">
                            <div class="ch-feature-icon"><i class="fas fa-industry"></i></div>
                            <div class="ch-feature-content">
                                <h5>Commercial-Ready</h5>
                                <p>Used in real products worldwide  from automotive ECUs to IoT sensors. Also the base
                                    for Amazon FreeRTOS with built-in cloud connectivity and OTA updates.</p>
                            </div>
                        </div>

                        <div class="ch-feature-item">
                            <div class="ch-feature-icon"><i class="fas fa-tasks"></i></div>
                            <div class="ch-feature-content">
                                <h5>Efficient Multitasking</h5>
                                <p>FreeRTOS enables multiple tasks to run concurrently with priority-based scheduling, ensuring optimal CPU utilization and responsive system performance.</p>
                            </div>
                        </div>

                        <div class="ch-feature-item">
                            <div class="ch-feature-icon"><i class="fas fa-project-diagram"></i></div>
                            <div class="ch-feature-content">
                                <h5>Built-In Synchronization Mechanisms</h5>
                                <p>Provides queues, semaphores, mutexes, and event groups for safe and efficient communication between tasks in complex embedded applications.</p>
                            </div>
                        </div>

                        <div class="ch-feature-item">
                            <div class="ch-feature-icon"><i class="fas fa-code-branch"></i></div>
                            <div class="ch-feature-content">
                                <h5>Open-Source & Developer Friendly</h5>
                                <p>FreeRTOS is completely open-source, well-documented, and supported by a large global community, making development and troubleshooting easier.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div class="col-lg-6 mb-4">

                    {/* Key Components Box */}
                    <div class="ch-box wow fadeInRight" data-wow-delay="100ms">
                        <div class="ch-box-title-wrapper">
                            <div class="ch-box-icon"><i class="fas fa-cubes"></i></div>
                            <h3 class="ch-box-title">Key Components of FreeRTOS</h3>
                        </div>
                        <ul class="ch-simple-list">
                            <li><strong>Tasks</strong> : Independent threads of execution</li>
                            <li><strong>Queues</strong> : Communication between tasks</li>
                            <li><strong>Semaphores &amp; Mutexes</strong> : Synchronization mechanisms</li>
                            <li><strong>Timers</strong> :Delayed and periodic function execution</li>
                            <li><strong>Memory Management</strong> : Static and dynamic options</li>
                            <li><strong>Tickless Mode</strong> : For low-power applications</li>
                        </ul>
                    </div>

                    {/* Real-World Applications Box */}
                    <div class="ch-box wow fadeInRight" data-wow-delay="200ms" style={{ "marginTop": "24px" }}>
                        <div class="ch-box-title-wrapper">
                            <div class="ch-box-icon"><i class="fas fa-globe"></i></div>
                            <h3 class="ch-box-title">Real-World Applications of FreeRTOS</h3>
                        </div>
                        <ul class="ch-simple-list">
                            <li><strong>Automotive:</strong> Engine control, infotainment systems, battery management
                            </li>
                            <li><strong>Industrial:</strong> PLCs, sensor nodes, field communication devices</li>
                            <li><strong>Healthcare:</strong> Patient monitors, wearable medical devices</li>
                            <li><strong>Consumer Electronics:</strong> Smart thermostats, voice assistants, fitness
                                trackers</li>
                            <li><strong>IoT Devices:</strong> Connected appliances, smart meters, remote monitoring
                                systems</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Row 2: Comparison Table + Who Should Attend */}
            <div class="row">

                {/* Left: Comparison Table */}
                <div class="col-lg-7 mb-4">
                    <div class="ch-box wow fadeInLeft" data-wow-delay="100ms" style={{ "height": "100%" }}>
                        <div class="ch-box-title-wrapper">
                            <div class="ch-box-icon"><i class="fas fa-balance-scale"></i></div>
                            <h3 class="ch-box-title">FreeRTOS vs Other RTOS</h3>
                        </div>
                        <div style={{ "overflowX": "auto" }}>
                            <table class="freertos-compare-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>FreeRTOS</th>
                                        <th>Zephyr RTOS</th>
                                        <th>QNX RTOS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>License</td>
                                        <td class="highlight-cell">MIT (Open Source)</td>
                                        <td>Apache 2.0</td>
                                        <td>Commercial</td>
                                    </tr>
                                    <tr>
                                        <td>Footprint</td>
                                        <td class="highlight-cell">Very Low</td>
                                        <td>Moderate</td>
                                        <td>Large</td>
                                    </tr>
                                    <tr>
                                        <td>Ease of Use</td>
                                        <td class="highlight-cell">Beginner-Friendly</td>
                                        <td>Advanced</td>
                                        <td>Enterprise-Level</td>
                                    </tr>
                                    <tr>
                                        <td>STM32Cube Integration</td>
                                        <td class="highlight-cell">Yes</td>
                                        <td>No</td>
                                        <td>No</td>
                                    </tr>
                                    <tr>
                                        <td>Best For</td>
                                        <td class="highlight-cell">Small MCUs, IoT</td>
                                        <td>Complex IoT Platforms</td>
                                        <td>Automotive, Medical</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Right: Who Should Attend */}
                <div class="col-lg-5 mb-4">
                    <div class="ch-box wow fadeInRight" data-wow-delay="200ms" style={{ "height": "100%" }}>
                        <div class="ch-box-title-wrapper">
                            <div class="ch-box-icon"><i class="fas fa-users"></i></div>
                            <h3 class="ch-box-title">Who Should Attend?</h3>
                        </div>
                        <ul class="ch-simple-list">
                            <li>&#x1F4BB; <strong>Embedded Engineers</strong> : deepen understanding of multitasking,
                                scheduling, and RTOS-based firmware design</li>
                            <li>&#x1F9E0; <strong>Firmware Developers</strong> : transitioning from bare-metal to
                                RTOS-based development</li>
                            <li>&#x1F527; <strong>HW/SW Integration Engineers</strong> :working with STM32-based
                                embedded systems</li>
                            <li>&#x1F4F1; <strong>IoT Developers</strong> :creating responsive and efficient sensor or
                                control applications</li>
                            <li>&#x1F3EB; <strong>Engineering Students &amp; Graduates</strong> : strengthen embedded
                                skill set with real-time OS</li>
                            <li>&#x1F3EB; <strong>R&amp;D Teams</strong> :in automotive, consumer electronics,
                                medical, or industrial domains using STM32</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    </section>
    {/* Course Highlights Section End */}




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

                                <span>FreeRTOS on STM32 </span>
                            </h2>
                        </div>
                        <p class="why-choose-one__text"> VAct Technologies FreeRTOS on STM32 course provides
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
