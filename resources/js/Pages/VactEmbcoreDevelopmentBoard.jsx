import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function VactEmbcoreDevelopmentBoard() {
    return (
        <MainLayout>
            <Head title="VactEmbcoreDevelopmentBoard" />
            
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
                                        <img src="/assets/images/shop/embcore_board.png" alt="STM32 Learning and Prototyping Platform" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        EmbCore <br /><span style={{ "color": "#008ed2" }}>Learning Platform</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Accelerate your embedded systems career with the ARM Cortex-M3 STM32F205 platform. Build register-level firmware drivers, configure RTOS stack parameters, and master high-speed hardware communications.</p>
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
                                        <img src="/assets/images/shop/embcore_board.png" alt="Onboard Peripherals and Protocols" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Industrial <br /><span style={{ "color": "#008ed2" }}>Peripherals Integration</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Master real-world interfacing for JTAG/SWD debuggers, ECAN, RS232, RS485, parallel LCDs, and EEPROM. An economical and optimized playground designed specifically by VAct corporate engineering experts.</p>
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

    <section class="product-details" style={{ "paddingTop": "40px", "paddingBottom": "40px" }}>
        <div class="container">
            <div class="product-spotlight-card">
                <div class="row align-items-stretch">
                    {/* Content Column (Left Side) */}
                    <div class="col-lg-7 mb-5 mb-lg-0">
                        <div class="spotlight-content-wrapper">
                            <div class="cta-pill-tag mb-3" style={{ "background": "rgba(0, 142, 210, 0.06)", "color": "var(--eduvers-base)", "fontSize": "11px", "fontWeight": "700", "padding": "5px 12px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0, 142, 210, 0.1)", "display": "inline-flex", "alignItems": "center", "gap": "6px", "width": "fit-content" }}>
                                <i class="fas fa-microchip"></i> Premium Hardware Learning Platform
                            </div>
                            <h3 class="product-details__title" style={{ "fontSize": "36px", "fontWeight": "800", "color": "#1e293b", "lineHeight": "1.2", "marginBottom": "15px" }}>VAct EmbCore Development Board</h3>
                            <p style={{ "fontWeight": "700", "color": "var(--eduvers-base)", "fontSize": "18px", "marginBottom": "20px" }}>Advanced Embedded System Learning Platform</p>
                            <p class="product-details__content-text1" style={{ "background": "rgba(0, 142, 210, 0.02)", "borderLeft": "4px solid var(--eduvers-base)", "padding": "15px 20px", "borderRadius": "4px 12px 12px 4px", "fontSize": "15px", "fontWeight": "600", "color": "#475569", "lineHeight": "1.6", "marginBottom": "20px" }}>Based on STM32F205 (ARM® Cortex®-M3), designed to provide an economical development environment for CAN communication, I2C, SPI, UART and parallel communication.</p>
                            <p style={{ "textAlign": "justify", "fontSize": "15px", "lineHeight": "1.8", "color": "#64748b", "marginBottom": "30px" }}>Fully integrated with STM32CUBEMX, making it an ideal choice for engineers to master industry-standard hardware protocols. Build low-level hardware drivers, interface peripheral sensors, and construct scalable embedded applications with direct hardware register controls.</p>
                            <a href="/contact" class="thm-btn" style={{ "width": "fit-content" }}>Enquire Now <span class="fas fa-arrow-right"></span></a>
                        </div>
                    </div>
                    {/* Image Column (Right Side) */}
                    <div class="col-lg-5">
                        <div class="spotlight-image-container">
                            <div class="spotlight-image-glow"></div>
                            <img src="/assets/images/shop/embcore_board.png" class="spotlight-img img-fluid" alt="EmbCore Development Board" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="requirements" style={{ "background": "#ffffff", "padding": "40px 0", "position": "relative" }}>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-desktop"></i></div>
                            <h3>Operational Requirements</h3>
                        </div>
                        <ul class="vact-specs-list" style={{ "marginTop": "15px" }}>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">Windows® 7 or 10 (32/64-bit)</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">9-12V DC / 1A Power Supply</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">STM32CUBEMX with ARM toolchains</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-microchip"></i></div>
                            <h3>Main Specifications</h3>
                        </div>
                        <ul class="vact-specs-list" style={{ "marginTop": "15px" }}>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">STM32F205R8 (Cortex-M3)</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">Up to 1 MB Flash / 128+4 KB SRAM</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">120 MHz Max Execution Speed</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">32.768kHz RTC Crystal</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="debugging-guide" style={{ "background": "rgba(0, 142, 210, 0.015)", "padding": "60px 0" }}>
        <div class="container">
            <div class="section-title text-center">
                <div class="why-choose-badge"><i class="fas fa-code-branch"></i> Running & Debugging</div>
                <h2 class="section-title__title" style={{ "fontSize": "38px", "color": "#1e293b", "fontWeight": "800", "marginTop": "10px" }}>Running & <span>Debugging</span></h2>
                <div style={{ "width": "80px", "height": "4px", "background": "linear-gradient(90deg, var(--eduvers-base), #818cf8)", "margin": "20px auto 0 auto", "borderRadius": "2px" }}></div>
                <p style={{ "marginTop": "20px", "color": "#64748b", "fontSize": "16px" }}>Step-by-step procedure to build, compile, flash, and run your applications.</p>
            </div>
            <div class="row mt-5 justify-content-center">
                <div class="col-lg-10">
                    <div class="product-spotlight-card" style={{ "padding": "45px", "borderLeft": "6px solid var(--eduvers-base)" }}>
                        <div class="step-list">
                            <div class="row">
                                {/* Left Column (Steps 1-4) */}
                                <div class="col-lg-6 pr-lg-4 vact-step-left-col">
                                    <div class="step-item d-flex mb-4">
                                        <div class="step-num">01</div>
                                        <div class="step-content">Configure I/O pins and generate initialization C code using <strong>STM32CubeMX</strong>.</div>
                                    </div>
                                    <div class="step-item d-flex mb-4">
                                        <div class="step-num">02</div>
                                        <div class="step-content">Edit your program, add header files and compile in <strong>Keil uVision 5</strong>.</div>
                                    </div>
                                    <div class="step-item d-flex mb-4">
                                        <div class="step-num">03</div>
                                        <div class="step-content">Build the project by selecting <em>Project {'>'} Build All</em>.</div>
                                    </div>
                                    <div class="step-item d-flex mb-4 mb-lg-0">
                                        <div class="step-num">04</div>
                                        <div class="step-content">Plug-in 9-12V/1A Power supply to the board (Ensure 1A supply).</div>
                                    </div>
                                </div>
                                {/* Right Column (Steps 5-8) */}
                                <div class="col-lg-6 pl-lg-4">
                                    <div class="step-item d-flex mb-4">
                                        <div class="step-num">05</div>
                                        <div class="step-content">Connect an <strong>ST-link v2 Debugger</strong> to the program header.</div>
                                    </div>
                                    <div class="step-item d-flex mb-4">
                                        <div class="step-num">06</div>
                                        <div class="step-content">Connect the ST-link USB port to your PC via USB cable.</div>
                                    </div>
                                    <div class="step-item d-flex mb-4">
                                        <div class="step-num">07</div>
                                        <div class="step-content">Choose the generated hex file in ST-utility (<em>Debugger{' > '}Select Tool</em>).</div>
                                    </div>
                                    <div class="step-item d-flex">
                                        <div class="step-num">08</div>
                                        <div class="step-content">Download and Run your code to start hardware-level debugging.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="peripherals" style={{ "background": "#ffffff", "padding": "60px 0", "color": "#1e293b", "position": "relative", "overflow": "hidden" }}>
        <div class="container">
            <div class="section-title text-center mb-5">
                <div class="why-choose-badge"><i class="fas fa-cogs"></i> Hardware Peripherals</div>
                <h2 class="section-title__title" style={{ "fontSize": "38px", "color": "#1e293b", "fontWeight": "800", "marginTop": "10px" }}>Onboard <span>Peripherals</span></h2>
                <div style={{ "width": "80px", "height": "4px", "background": "linear-gradient(90deg, var(--eduvers-base), #818cf8)", "margin": "20px auto 0 auto", "borderRadius": "2px" }}></div>
                <p style={{ "color": "#64748b", "maxWidth": "800px", "margin": "20px auto", "fontSize": "16px" }}>Every component engineered for maximum reliability and standard integrations.</p>
            </div>
            <div class="row mt-5">
                {/* Display & I/O Card */}
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-tv"></i></div>
                            <h3>Display & I/O</h3>
                        </div>
                        <ul class="vact-specs-list" style={{ "marginTop": "15px" }}>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">4x20 Character LCD</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">10 Digital I/O ports</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">2 No's Potentiometer</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">0.9" OLED (I2C)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Connectivity Card */}
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-network-wired"></i></div>
                            <h3>Connectivity</h3>
                        </div>
                        <ul class="vact-specs-list" style={{ "marginTop": "15px" }}>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">On Board ECAN (2 No's)</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">RS 232 / RS 485</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">USB & SD Interface</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">EEPROM (SPI)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Development Card */}
                <div class="col-lg-4 col-md-12 mb-4">
                    <div class="why-choose-card">
                        <div class="why-choose-card-header">
                            <div class="why-choose-card-icon"><i class="fas fa-tools"></i></div>
                            <h3>Development</h3>
                        </div>
                        <ul class="vact-specs-list" style={{ "marginTop": "15px" }}>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">JTAG & SWD Interfaces</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">Eclipse CubeIDE</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">ARM Tool Chains</span>
                            </li>
                            <li>
                                <span class="vact-bullet-indicator"><i class="fas fa-chevron-right"></i></span>
                                <span class="vact-bullet-label">Onboard Buzzer</span>
                            </li>
                        </ul>
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


