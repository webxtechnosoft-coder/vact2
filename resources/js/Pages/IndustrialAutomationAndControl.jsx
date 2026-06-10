import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function IndustrialAutomationAndControl() {
    return (
        <MainLayout>
            <Head title="IndustrialAutomationAndControl" />
            <link rel="stylesheet" href="/assets/css/industrial-automation-and-control.css" />
            
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

    {/* Industrial Automation Section Start */}
    {/*Testimonial One Start*/}
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
                                        <img src="/assets/images/services/industrial-automation-and-control.png" alt="Custom SCADA and PLC Systems" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Smart Industrial <br /><span style={{ "color": "#008ed2" }}>Automation & Control</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Enhance manufacturing efficiency and uptime. We design robust, highly automated PLC logic configurations and beautiful, custom SCADA monitoring suites explicitly tailored for factories, power grids, and chemical industries.</p>
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
                                        <img src="/assets/images/services/station.png" alt="Intelligent Closed-Loop PID Control" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Reliable Process <br /><span style={{ "color": "#008ed2" }}>Control Solutions</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Achieve continuous, high-precision thermal, fluid, and mechanical regulations. We engineer robust, isolated closed-loop process loops using isolated fieldbus communications and remote telemetry units.</p>
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
    <section class="industrial-automation-section">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-4 wow fadeInUp" data-wow-delay="100ms">
                    <div class="ind-auto-badge">
                        <i class="fas fa-cogs animated-gear"></i> Industrial Automation
                    </div>
                    <h2 class="ind-auto-title">Industrial Automation (Textile)</h2>
                </div>
            </div>

            <div class="row align-items-center">
                {/* Left Content */}
                <div class="col-lg-6 col-md-12 wow fadeInLeft" data-wow-delay="200ms">
                    <div class="ind-info-block">
                        <div class="ind-info-icon">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <div>
                            <h4 class="ind-info-heading">Client</h4>
                            <p class="ind-info-text mb-0">
                                AUDNE INDIA LIMITED, DADRA & NAGAR HAVELI, INDIA. AUNDE India Limited (AIL), is a joint venture collaboration between Faze Three and Aude Achter & Ebels GmbH Germany, known for its line of automotive fabrics and seating systems.
                            </p>
                        </div>
                    </div>

                    <div class="ind-info-block mb-0">
                        <div class="ind-info-icon animated-icon-glow">
                            <i class="fas fa-cog animated-gear"></i>
                        </div>
                        <div>
                            <h4 class="ind-info-heading">Automation</h4>
                            <p class="ind-info-text mb-15">
                                Our team replaced existing control mechanism of the machine with state-of-the-art Delta made PLC, Drives and HMI control. The variable frequency drives are controlled by PLC to vary the speed of the machine and its mainly synchronized functions like water flow control, temperature controls, steam valve functions, conveyor movement, interlocked safety systems etc.
                            </p>
                            <p class="ind-info-text mb-15">
                                The PLC and HMI ladder programs are developed from scratch based on the machines functionality and operation sequence. The Ladder Logic involved interlocking with 15 emergency switches and dancing rod to stop the machine.
                            </p>
                            <p class="ind-info-text mb-0">
                                More than 100 digital I/O's and 30 analog I/O's are interfaced in this automation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div class="col-lg-6 col-md-12 mt-5 mt-lg-0 wow fadeInRight" data-wow-delay="300ms">
                    <div class="ind-image-wrapper">
                        {/* Animated SVG representation for the missing image */}
                       <div class="animated-float" style={{ "width": "100%", "maxWidth": "400px", "padding": "20px", "overflow": "hidden" }}>
  <img src="/assets/images/services/industrial-automation-and-control.png" alt="Industrial Automation and Control" style={{ "width": "100%", "height": "auto", "objectFit": "contain", "transform": "scale(1.2)" }} />
</div>
                    </div>
                </div>
            </div>

            {/* Bottom Features Row */}
            <div class="row mt-5 wow fadeInUp" data-wow-delay="400ms">
                <div class="col-12">
                    <div class="ind-features-wrapper">
                        <div class="row g-4">
                            <div class="col-lg-3 col-md-6 feature-border-right">
                                <div class="ind-feature-item">
                                    <div class="ind-feature-icon">
                                        <i class="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <h5 class="ind-feature-title">Advanced Control</h5>
                                        <p class="ind-feature-text">State-of-the-art PLC, Drives and HMI control for seamless machine operations.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 feature-border-right">
                                <div class="ind-feature-item">
                                    <div class="ind-feature-icon">
                                        <i class="fas fa-sitemap"></i>
                                    </div>
                                    <div>
                                        <h5 class="ind-feature-title">Synchronized Functions</h5>
                                        <p class="ind-feature-text">Water flow, temperature, steam valves, conveyor movement and safety systems integrated.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 feature-border-right">
                                <div class="ind-feature-item">
                                    <div class="ind-feature-icon">
                                        <i class="fas fa-shield-alt"></i>
                                    </div>
                                    <div>
                                        <h5 class="ind-feature-title">Safety First</h5>
                                        <p class="ind-feature-text">Interlocking with 15 emergency switches and dancing rod for maximum safety.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 feature-last-item">
                                <div class="ind-feature-item">
                                    <div class="ind-feature-icon">
                                        <i class="fas fa-microchip"></i>
                                    </div>
                                    <div>
                                        <h5 class="ind-feature-title">High I/O Integration</h5>
                                        <p class="ind-feature-text">More than 100 digital I/O's and 30 analog I/O's interfaced for reliable automation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Industrial Automation Section End */}

















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
