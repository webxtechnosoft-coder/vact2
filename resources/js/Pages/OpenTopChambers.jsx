import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function OpenTopChambers() {
    return (
        <MainLayout>
            <Head title="OpenTopChambers" />
            
{/*Testimonial One Start*/}
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
                                        <img src="/assets/images/shop/otc_slide1.png" alt="Precision Microclimate Research" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Precision <br /><span style={{ "color": "#008ed2" }}>Microclimate Research</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Standardize plant and crop exposure studies. Our Open Top Chambers are specifically engineered to provide absolute control over carbon dioxide concentration, ambient temperature, and humidity levels inside the testing fields.</p>
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
                                        <img src="/assets/images/shop/otc_slide2.png" alt="Real-Time SCADA Monitoring" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Real-Time <br /><span style={{ "color": "#008ed2" }}>SCADA Monitoring</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Track CO2, relative humidity, and temperature trends in real-time. Equipped with a robust STM32 controller architecture and a sophisticated SCADA PC software interface for comprehensive data logging and analytics.</p>
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

    {/*Start Product Details*/}
    <section class="product-details" style={{ "paddingTop": "10px", "paddingBottom": "20px" }}>
        <div class="container">
            <div class="product-spotlight-card">
                <div class="row align-items-stretch">
                    {/* Content Column (Left Side) */}
                    <div class="col-lg-7 mb-5 mb-lg-0">
                        <div class="spotlight-content-wrapper">
                            <div class="cta-pill-tag mb-3" style={{ "background": "rgba(0, 142, 210, 0.06)", "color": "var(--eduvers-base)", "fontSize": "11px", "fontWeight": "700", "padding": "5px 12px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0, 142, 210, 0.1)", "display": "inline-flex", "alignItems": "center", "gap": "6px", "width": "fit-content" }}>
                                <i class="fas fa-seedling text-success"></i> Research & Environment
                            </div>
                            <h3 class="product-details__title" style={{ "fontSize": "36px", "fontWeight": "800", "color": "#1e293b", "lineHeight": "1.2", "marginBottom": "15px" }}>Open Top Chambers (OTC)</h3>
                            <p style={{ "fontWeight": "700", "color": "var(--eduvers-base)", "fontSize": "18px", "marginBottom": "20px" }}>Precision Environmental Microclimate Control & Gas Regulation</p>
                            <p class="product-details__content-text1" style={{ "background": "rgba(0, 142, 210, 0.02)", "borderLeft": "4px solid var(--eduvers-base)", "padding": "15px 20px", "borderRadius": "4px 12px 12px 4px", "fontSize": "15px", "fontWeight": "600", "color": "#475569", "lineHeight": "1.6", "marginBottom": "20px" }}>The primary goal of our Open Top Chambers (OTCs) is to precisely manage and regulate CO2 levels, temperature, and humidity inside the chambers. This allows researchers to conduct high-fidelity investigations on how crops, trees, and plant ecosystems react to elevated carbon dioxide and other greenhouse gas concentrations under realistic field conditions.</p>
                            <p style={{ "textAlign": "justify", "fontSize": "15px", "lineHeight": "1.8", "color": "#64748b", "marginBottom": "30px" }}>Highly customizable solutions developed in collaboration with top agricultural universities. Category: Research & Environment | Availability: Custom Tailored.</p>
                            <div class="d-flex align-items-center gap-3">
                                <a href="/contact" class="thm-btn" style={{ "width": "fit-content" }}>Enquire Now <span class="fas fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                    {/* Image Column (Right Side) */}
                    <div class="col-lg-5">
                        <div class="spotlight-image-container">
                            <div class="spotlight-image-glow"></div>
                            <img src="/assets/images/shop/otc_chamber.png" class="spotlight-img img-fluid" alt="Open Top Chambers" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*End Product Details*/}

    {/* Product Content Start */}
    <section class="product-description" style={{ "padding": "10px 0 30px 0" }}>
        <div class="container">
            {/* Overview Spotlight Card */}
            <div class="product-spotlight-card mb-4">
                <div class="row align-items-stretch">
                    {/* Left Column (Overview Image Frame) - Swapped for alternating layout */}
                    <div class="col-lg-5 mb-5 mb-lg-0">
                        <div class="spotlight-image-container" style={{ "background": "rgba(0,142,210,0.015)" }}>
                            <img src="/assets/images/shop/otc_chamber_2.png" class="spotlight-img img-fluid" alt="Open Top Chambers Overview" style={{ "maxHeight": "95%", "maxWidth": "95%" }} />
                        </div>
                    </div>
                    {/* Right Column (Overview Text Details) */}
                    <div class="col-lg-7">
                        <div class="spotlight-content-wrapper">
                            <div class="cta-pill-tag mb-3" style={{ "background": "rgba(0, 142, 210, 0.06)", "color": "var(--eduvers-base)", "fontSize": "11px", "fontWeight": "700", "padding": "5px 12px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0, 142, 210, 0.1)", "display": "inline-flex", "alignItems": "center", "gap": "6px", "width": "fit-content" }}>
                                <i class="fas fa-eye"></i> Product Overview
                            </div>
                            <h2 class="section-title__title" style={{ "fontSize": "32px", "color": "#1e293b", "fontWeight": "800", "lineHeight": "1.2", "marginBottom": "20px" }}><span style={{ "color": "var(--eduvers-base)" }}>Product</span> Overview</h2>
                            <p style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#64748b", "marginBottom": "15px", "textAlign": "justify" }}>Open Top Chambers are a widely recognized, cost-effective method for studying the impact of rising greenhouse gases, ambient temperatures, and humidity gradients on crop growth kinetics, transpiration rates, and final crop yields. Our advanced automated OTC systems feed gases precisely using standard CO2 cylinder manifolds, high-performance piping, micro-solenoid manifolds, and state-of-the-art gas analyzers.</p>
                            <p style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#64748b", "marginBottom": "15px", "textAlign": "justify" }}>All chambers are controlled via a central, PC-linked Supervisory Control and Data Acquisition (SCADA) network. Our robust STM32-based hardware architecture guarantees accurate closed-loop control and logging of all critical agricultural variables.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                {/* Advantages Card */}
                <div class="col-lg-12 mb-4">
                    <div class="why-choose-card" style={{ "textAlign": "center" }}>
                        <div class="why-choose-num">01</div>
                        <div class="why-choose-card-header" style={{ "justifyContent": "center", "gap": "15px" }}>
                            <div class="why-choose-card-icon"><i class="fas fa-cog"></i></div>
                            <h3 style={{ "paddingRight": "0" }}>System Features & Specifications</h3>
                        </div>
                        <div class="row" style={{ "marginTop": "15px" }}>
                            <div class="col-md-6">
                                <ul class="vact-specs-list">
                                    <li>
                                        <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                        <span class="vact-bullet-label"><strong>High Precision Sensors:</strong> Highly accurate NDIR CO2, Ozone, Temperature, and relative humidity sensors.</span>
                                    </li>
                                    <li>
                                        <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                        <span class="vact-bullet-label"><strong>Custom SCADA Software:</strong> Beautiful, custom PC-linked dashboard tailored specifically to customer research goals.</span>
                                    </li>
                                    <li>
                                        <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                        <span class="vact-bullet-label"><strong>Advanced Controllers:</strong> Precise closed-loop control using VAct's proprietary STM32F405-based high-speed processing unit.</span>
                                    </li>
                                    <li>
                                        <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                        <span class="vact-bullet-label"><strong>Industrial Glands & Cabling:</strong> Flame-resistant cabling with weatherproof brass/nylon glands and rugged junction boxes.</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="vact-specs-list">
                                    <li>
                                        <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                        <span class="vact-bullet-label"><strong>Flexible Communications:</strong> Seamless support for Modbus RTU/TCP and standard RS485 communication protocols.</span>
                                    </li>
                                    <li>
                                        <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                        <span class="vact-bullet-label"><strong>Weatherproof Enclosures:</strong> All sensor clusters mounted securely in custom UV-stabilized IP65 weatherproof enclosures.</span>
                                    </li>
                                    <li>
                                        <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                        <span class="vact-bullet-label"><strong>Smart Alerts & Displays:</strong> Real-time data visualization, local LCD screen, and automated safety/error gas alarms.</span>
                                    </li>
                                    <li>
                                        <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                        <span class="vact-bullet-label"><strong>Smart Cameras (Optional):</strong> Optional integrated high-definition cameras for live video feeds and time-lapse crop growth analysis.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Product Content End */}

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
    <script src="/assets/js/script.js"></script>
        </MainLayout>
    );
}
