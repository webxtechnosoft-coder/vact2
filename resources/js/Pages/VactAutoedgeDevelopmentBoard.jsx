import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function VactAutoedgeDevelopmentBoard() {
    return (
        <MainLayout>
            <Head title="VactAutoedgeDevelopmentBoard" />
            
{/* Hero Carousel Start (Exact About Page) */}
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
                                        <img src="/assets/images/shop/autoedge_board.png" alt="STM32 Automotive Development Platform" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        AutoEdge <br /><span style={{ "color": "#008ed2" }}>Automotive Powerhouse</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Master advanced automotive electronics and CAN protocol. Powered by STM32F405 ARM Cortex-M4 MCU, AutoEdge provides diagnostic configurations, bare-metal hardware-level exposure, and real-time powertrain control simulations.</p>
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
                                        <img src="/assets/images/shop/autoedge_career_cta.png" alt="Edge AI and V2X Communication" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Edge AI & <br /><span style={{ "color": "#008ed2" }}>V2X Connectivity</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Master cutting-edge vehicular technology. Interface with smart energy management, electric vehicle BMS, and deploy light Machine Learning models directly on high-performance STM32 hardware-abstraction layers.</p>
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
    {/* Hero Carousel End */}

    <section class="product-details" style={{ "paddingTop": "40px", "paddingBottom": "60px" }}>
        <div class="container">
            <div class="product-spotlight-card">
                <div class="row align-items-stretch">
                    {/* Content Column (Left Side) */}
                    <div class="col-lg-7 mb-5 mb-lg-0">
                        <div class="spotlight-content-wrapper">
                            <div class="cta-pill-tag mb-3" style={{ "background": "rgba(0, 142, 210, 0.06)", "color": "var(--eduvers-base)", "fontSize": "11px", "fontWeight": "700", "padding": "5px 12px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0, 142, 210, 0.1)", "display": "inline-flex", "alignItems": "center", "gap": "6px", "width": "fit-content" }}>
                                <i class="fas fa-microchip"></i> Ultimate Automotive Learning Board
                            </div>
                            <h3 class="product-details__title" style={{ "fontSize": "36px", "fontWeight": "800", "color": "#1e293b", "lineHeight": "1.2", "marginBottom": "15px" }}>VAct Auto Edge Development Board</h3>
                            <p style={{ "fontWeight": "700", "color": "var(--eduvers-base)", "fontSize": "18px", "marginBottom": "20px" }}>Accelerate Your Embedded Systems Expertise!</p>
                            <p class="product-details__content-text1" style={{ "background": "rgba(0, 142, 210, 0.02)", "borderLeft": "4px solid var(--eduvers-base)", "padding": "15px 20px", "borderRadius": "4px 12px 12px 4px", "fontSize": "15px", "fontWeight": "600", "color": "#475569", "lineHeight": "1.6", "marginBottom": "20px" }}>Arm® Cortex®-M4 32b MCU+FPU, 210DMIPS, up to 1MB Flash/192+4KB RAM, USB OTG HS/FS, Ethernet, 17 TIMs, 3 ADCs, 15 comm. interfaces & camera.</p>
                            <p style={{ "textAlign": "justify", "fontSize": "15px", "lineHeight": "1.8", "color": "#64748b", "marginBottom": "20px" }}>The VAct Auto Edge Development Board is your key to mastering advanced automotive electronics and embedded systems. Designed for engineers, professionals, and students, this powerful board offers hands-on experience with industry-standard protocols and real-world programming challenges.</p>
                            <p style={{ "textAlign": "justify", "fontSize": "15px", "lineHeight": "1.8", "color": "#64748b", "marginBottom": "30px" }}>Mastering automotive embedded systems is a challenging but highly rewarding journey. This board bridges the gap between theoretical textbook knowledge and industrial engineering reality by providing pre-validated hardware, a robust hardware-abstraction-layer (HAL), and pre-integrated CAN stack configurations to successfully jumpstart your career.</p>
                            <a href="/contact" class="thm-btn" style={{ "width": "fit-content" }}>Enquire Now <span class="fas fa-arrow-right"></span></a>
                        </div>
                    </div>
                    {/* Image Column (Right Side) */}
                    <div class="col-lg-5">
                        <div class="spotlight-image-container">
                            <div class="spotlight-image-glow"></div>
                            <img src="/assets/images/shop/autoedge_board.png" class="spotlight-img img-fluid" alt="Autoedge Development Board" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="vact-why-choose-section">
        <div class="container">
            <div class="section-title text-center mb-5">
                <div class="why-choose-badge"><i class="fas fa-question-circle"></i> Why Choose Us</div>
                <h2 class="section-title__title" style={{ "fontSize": "38px", "color": "#1e293b", "fontWeight": "800", "marginTop": "10px" }}>Why Choose <span>AutoEdge?</span></h2>
                <div style={{ "width": "80px", "height": "4px", "background": "linear-gradient(90deg, var(--eduvers-base), #818cf8)", "margin": "20px auto 0 auto", "borderRadius": "2px" }}></div>
            </div>
            <div class="row mt-5">
                {/* Item 1 */}
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-num">01</div>
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-microchip"></i></div>
                            <h3>STM32 Cortex M4</h3>
                        </div>
                        <p>Powered by STM32F405 for high-performance processing. Bare Metal Programming provides in-depth exposure to low-level hardware registers.</p>
                    </div>
                </div>
                {/* Item 2 */}
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-num">02</div>
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-network-wired"></i></div>
                            <h3>Automotive Protocols</h3>
                        </div>
                        <p>Master essential communication protocols like CAN (Controller Area Network) and UDS (Unified Diagnostic Services) for professional vehicle diagnostics.</p>
                    </div>
                </div>
                {/* Item 3 */}
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-num">03</div>
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-tools"></i></div>
                            <h3>In-House Hardware</h3>
                        </div>
                        <p>Developed and fine-tuned directly by VAct Technologies. Enjoy an optimized, cost-effective platform designed by industry embedded experts.</p>
                    </div>
                </div>
                {/* Item 4 */}
                <div class="col-lg-6 col-md-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-num">04</div>
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-car-side"></i></div>
                            <h3>Real-World Apps</h3>
                        </div>
                        <p>Perfectly suitable for hands-on developments in powertrain control, vehicle diagnostics, ADAS systems, defense applications, and medical sectors.</p>
                    </div>
                </div>
                {/* Item 5 */}
                <div class="col-lg-6 col-md-12 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-num">05</div>
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-user-tie"></i></div>
                            <h3>Industry Training</h3>
                        </div>
                        <p>Learn directly from corporate trainers with extensive real-world experience. Access a robust curriculum focused on practical industrial scenarios.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="vact-features-section">
        <div class="container">
            <div class="section-title text-center mb-5">
                <div class="features-tag-badge"><i class="fas fa-microchip"></i> Premium Hardware Specs</div>
                <h2 class="section-title__title" style={{ "fontSize": "38px", "color": "#1e293b", "fontWeight": "800", "marginTop": "15px" }}>Board <span>Features</span></h2>
                <div style={{ "width": "80px", "height": "4px", "background": "linear-gradient(90deg, var(--eduvers-base), #818cf8)", "margin": "20px auto 0 auto", "borderRadius": "2px" }}></div>
            </div>
            <div class="row align-items-stretch">
                {/* Board Features Column */}
                <div class="col-lg-8 mb-5 mb-lg-0">
                    <div class="row mt-2">
                        <div class="col-md-6">
                            <ul class="vact-specs-list">
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">STM32F405xx MCU</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">Up to 1 MB Flash memory</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">192+4 Kbytes Data SRAM</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">PLL up to 168 MHz</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">32.768kHz RTC crystal</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">Buzzer & Potentiometers</span>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul class="vact-specs-list">
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">0.9" OLED I2C (Optional)</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">2 No's Onboard ECAN</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">ST-Link V2 Debugger</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">ARM Tool Chains Support</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">CAN / CAN FD / FreeRTOS</span>
                                </li>
                                <li>
                                    <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                    <span class="vact-bullet-label">110x110mm Compact Design</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Training Perks Column */}
                <div class="col-lg-4">
                    <div class="perks-glow-card">
                        <div class="perks-badge"><i class="fas fa-award"></i> Career Benefits</div>
                        <h3>Training Perks</h3>
                        <div class="perks-accent-line"></div>
                        <ul class="vact-perks-list">
                            <li>
                                <div class="perk-bullet"><i class="fas fa-star text-white"></i></div>
                                <div class="perk-text">Low-footprint CAN stack</div>
                            </li>
                            <li>
                                <div class="perk-bullet"><i class="fas fa-star text-white"></i></div>
                                <div class="perk-text">Free RTOS Stack</div>
                            </li>
                            <li>
                                <div class="perk-bullet"><i class="fas fa-star text-white"></i></div>
                                <div class="perk-text">75+ Hands-on Experiments</div>
                            </li>
                            <li>
                                <div class="perk-bullet"><i class="fas fa-star text-white"></i></div>
                                <div class="perk-text">25+ Assignments</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="projects-section" style={{ "background": "#ffffff", "padding": "60px 0", "color": "#1e293b" }}>
        <div class="container">
            <div class="section-title text-center">
                <h2 class="section-title__title title-animation" style={{ "fontSize": "38px", "color": "#1e293b", "fontWeight": "800" }}>Advanced <span style={{ "color": "var(--eduvers-base)" }}>Projects</span></h2>
                <div style={{ "width": "60px", "height": "3px", "background": "var(--eduvers-base)", "margin": "20px auto", "borderRadius": "2px" }}></div>
                <p style={{ "color": "#64748b", "maxWidth": "800px", "margin": "20px auto", "fontSize": "16px", "lineHeight": "1.8" }}>Facilitate advanced learning in automotive electronics with these high-end project ideas.</p>
            </div>
            <div class="row mt-5">
                {/* ADAS Systems Card */}
                <div class="col-lg-4 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon">
                                <i class="fas fa-car-side"></i>
                            </div>
                            <h3>ADAS Systems</h3>
                        </div>
                        <p>Develop features like adaptive cruise control or lane-keeping assistance using advanced sensor fusion algorithms.</p>
                    </div>
                </div>
                {/* Autonomous Navigation Card */}
                <div class="col-lg-4 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon">
                                <i class="fas fa-route"></i>
                            </div>
                            <h3>Autonomous Navigation</h3>
                        </div>
                        <p>Implement path planning, localization, and obstacle detection for small-scale autonomous vehicles.</p>
                    </div>
                </div>
                {/* Edge AI Maintenance Card */}
                <div class="col-lg-4 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon">
                                <i class="fas fa-brain"></i>
                            </div>
                            <h3>Edge AI Maintenance</h3>
                        </div>
                        <p>Predict component failures using machine learning models deployed directly on the STM32 hardware level.</p>
                    </div>
                </div>
                {/* V2X Communication Card */}
                <div class="col-lg-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon">
                                <i class="fas fa-network-wired"></i>
                            </div>
                            <h3>V2X Communication</h3>
                        </div>
                        <p>Create cutting-edge applications for vehicle-to-everything interactions, ensuring secure, high-speed data transfer between nodes.</p>
                    </div>
                </div>
                {/* EV Energy Management Card */}
                <div class="col-lg-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon">
                                <i class="fas fa-battery-three-quarters"></i>
                            </div>
                            <h3>EV Energy Management</h3>
                        </div>
                        <p>Monitor and optimize real-time energy consumption in electric vehicles by interfacing with smart BMS and powertrain modules.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="vact-cta-double">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-7 col-md-12 mb-5 mb-lg-0">
                    <div class="cta-content-left">
                        <div class="cta-pill-tag">
                            <i class="fas fa-rocket"></i> Career Acceleration Program
                        </div>
                        <h2 class="title-animation">Ready to Accelerate Your Career?</h2>
                        <p>Enroll Today and join the next generation of automotive technology professionals! Gain hands-on competence in STM32 hardware-level diagnostics, RTOS stack, and CAN FD protocol integration. Master diagnostic stack configurations with industry-expert mentoring to secure high-tier embedded engineering roles.</p>
                        <a href="/contact" class="thm-btn-cta">Enroll Now <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                    <div class="cta-image-wrapper">
                        <div class="cta-image-glow"></div>
                        <img src="/assets/images/shop/autoedge_career_cta.png" class="cta-floating-img img-fluid" alt="Ready to Accelerate Your Career with VAct Technologies" />
                    </div>
                </div>
            </div>
        </div>
    </section>

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
