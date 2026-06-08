import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function EmbeddedAutomotive() {
    return (
        <MainLayout>
            <Head title="Embedded Automotive" />
            <link rel="stylesheet" href="/assets/css/embedded-automotive.css" />

            <section class="page-header">
                <div class="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
                </div>
                <div class="container">
                    <div class="page-header__inner">
                        <h3>Embedded Automotive</h3>
                        <div class="thm-breadcrumb__inner">
                            <ul class="thm-breadcrumb list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><span class="fas fa-angle-right"></span></li>
                                <li>Embedded Automotive</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="embedded-automotive-section">
                <div class="container">
                    <div class="embedded-automotive-header">
                        <div class="header-decor-line-left"></div>
                        <h2>Embedded Automotive Training<br /><span>Industry-Ready Embedded & Automotive Engineering</span></h2>
                        <div class="header-decor-line-right"></div>
                    </div>

                    <div class="row mb-4">
                        <div class="col-lg-6">
                            <div class="ea-card">
                                <div class="ea-card-left">
                                    <div class="ea-header-wrapper">
                                        <div class="ea-header-icon"><i class="fas fa-graduation-cap"></i></div>
                                        <h3 class="ea-header-title">Program Overview</h3>
                                    </div>
                                    <p class="ea-desc">
                                        Our <span class="highlight">Embedded Automotive training program</span> is designed to equip engineers and graduates with the practical skills needed to excel in the automotive embedded domain. From microcontroller fundamentals to advanced driver development, our hands-on curriculum bridges the gap between academia and industry.
                                    </p>
                                    <p class="ea-desc">
                                        With <span class="highlight">VAct AutoEdge Development Board</span> — the only board in India designed exclusively for automotive embedded training — you get real hardware experience with industry-grade peripherals.
                                    </p>

                                    <div class="ea-timeline">
                                        <div class="ea-timeline-item">
                                            <div class="ea-timeline-icon"><i class="fas fa-microchip"></i></div>
                                            <div class="ea-timeline-content">
                                                <strong>Module 1:</strong> Embedded C & Microcontroller Architecture — Build a rock-solid foundation in C programming with register-level STM32 coding.
                                            </div>
                                        </div>
                                        <div class="ea-timeline-item">
                                            <div class="ea-timeline-icon"><i class="fas fa-car"></i></div>
                                            <div class="ea-timeline-content">
                                                <strong>Module 2:</strong> Automotive Protocols — Master CAN, LIN, SPI, I2C, UART with hands-on lab exercises on real hardware.
                                            </div>
                                        </div>
                                        <div class="ea-timeline-item">
                                            <div class="ea-timeline-icon"><i class="fas fa-cogs"></i></div>
                                            <div class="ea-timeline-content">
                                                <strong>Module 3:</strong> RTOS & Embedded Linux — Dive into FreeRTOS, QNX, and Linux device driver development for automotive ECUs.
                                            </div>
                                        </div>
                                        <div class="ea-timeline-item">
                                            <div class="ea-timeline-icon"><i class="fas fa-tools"></i></div>
                                            <div class="ea-timeline-content">
                                                <strong>Module 4:</strong> AUTOSAR & Bootloader — Understand the AUTOSAR layered architecture and develop custom bootloaders.
                                            </div>
                                        </div>
                                        <div class="ea-timeline-item">
                                            <div class="ea-timeline-icon"><i class="fas fa-briefcase"></i></div>
                                            <div class="ea-timeline-content">
                                                <strong>Module 5:</strong> Capstone Project — Build a full automotive ECU simulation project with protocol integration and diagnostic logging.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ea-card">
                                <div class="ea-card-right">
                                    <div class="board-wrapper">
                                        <img src="/assets/images/training/embedded_automotive.png" alt="Embedded Automotive Board" class="board-image-el" />

                                        <div class="board-pointer pointer-left pt-can-2">
                                            <span class="pointer-label">CAN 2.0</span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-dot"></span>
                                        </div>
                                        <div class="board-pointer pointer-left pt-rs232">
                                            <span class="pointer-label">RS232</span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-dot"></span>
                                        </div>
                                        <div class="board-pointer pointer-left pt-rs485">
                                            <span class="pointer-label">RS485</span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-dot"></span>
                                        </div>
                                        <div class="board-pointer pointer-left pt-potentiometer">
                                            <span class="pointer-label">Potentiometer</span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-dot"></span>
                                        </div>
                                        <div class="board-pointer pointer-left pt-power-cable">
                                            <span class="pointer-label">Power Cable</span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-dot"></span>
                                        </div>

                                        <div class="board-pointer pointer-right pt-usb-header">
                                            <span class="pointer-dot"></span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-label">USB Header</span>
                                        </div>
                                        <div class="board-pointer pointer-right pt-sd-card">
                                            <span class="pointer-dot"></span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-label">SD Card</span>
                                        </div>
                                        <div class="board-pointer pointer-right pt-oled">
                                            <span class="pointer-dot"></span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-label">OLED</span>
                                        </div>
                                        <div class="board-pointer pointer-right pt-buzzer">
                                            <span class="pointer-dot"></span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-label">Buzzer</span>
                                        </div>
                                        <div class="board-pointer pointer-right pt-lcd">
                                            <span class="pointer-dot"></span>
                                            <span class="pointer-line"></span>
                                            <span class="pointer-label">LCD 16x2</span>
                                        </div>

                                        <div class="board-features-mobile">
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> CAN 2.0</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> RS232</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> RS485</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> USB Header</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> SD Card</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> OLED</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> Buzzer</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> LCD 16x2</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> Potentiometer</span>
                                            <span class="board-feature-tag"><i class="fas fa-check-circle"></i> Power Cable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ea-action-bar">
                        <div class="ea-action-col">
                            <a href="/contact" class="ea-btn-classes"><i class="fas fa-calendar-alt"></i> Enroll Now</a>
                        </div>
                        <div class="ea-action-divider"></div>
                        <div class="ea-action-col">
                            <div class="ea-enquiry-box">
                                <i class="fas fa-phone-alt"></i>
                                <span>Have questions? <a href="tel:+917871909590" class="ea-phone-num">+91 78719 09590</a></span>
                            </div>
                        </div>
                        <div class="ea-action-divider"></div>
                        <div class="ea-action-col">
                            <a href="#" class="ea-btn-download"><i class="fas fa-download"></i> Download Syllabus</a>
                        </div>
                    </div>

                    <div class="steps-wrapper">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="step-item">
                                    <div class="step-badge-container">
                                        <div class="step-number">01</div>
                                        <div class="step-icon-box"><i class="fas fa-laptop-code"></i></div>
                                    </div>
                                    <div class="step-content">
                                        <h4 class="step-title">Learn by Doing</h4>
                                        <p class="step-desc">Every concept is reinforced with practical lab sessions on the AutoEdge Development Board.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="step-item">
                                    <div class="step-badge-container">
                                        <div class="step-number">02</div>
                                        <div class="step-icon-box"><i class="fas fa-users"></i></div>
                                    </div>
                                    <div class="step-content">
                                        <h4 class="step-title">Expert Mentors</h4>
                                        <p class="step-desc">Learn from industry professionals with years of automotive embedded domain experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="step-item">
                                    <div class="step-badge-container">
                                        <div class="step-number">03</div>
                                        <div class="step-icon-box"><i class="fas fa-briefcase"></i></div>
                                    </div>
                                    <div class="step-content">
                                        <h4 class="step-title">Placement Support</h4>
                                        <p class="step-desc">Get 100% placement assistance with resume building, mock interviews, and industry connects.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="best-training-section">
                <div class="container">
                    <h2 class="best-training-title wow fadeInUp" data-wow-delay="100ms">WE ARE MORE THAN A TRAINING CENTER, <br /><span>WE ARE A CAREER SHAPER</span></h2>
                    <p class="best-training-desc wow fadeInUp" data-wow-delay="200ms">
                        Our course is designed by <span class="text-primary">Industry experts</span> and comes with <span class="text-primary">100% placement assurance.</span> Our course is designed in such a way that the candidates taking our embedded training feels they are more than <span class="text-primary">1.5 years experienced.</span> This enables them to face the interview for embedded jobs with confidence and clear the interviews.
                    </p>
                    <div class="row align-items-center mt-5">
                        <div class="col-lg-4 col-md-12 wow fadeInLeft" data-wow-delay="300ms">
                            <div class="training-feature-box">
                                <div class="training-feature-icon"><i class="fas fa-shield-alt"></i></div>
                                <div class="training-feature-content">
                                    <h4>Secure Testing & Challenges</h4>
                                    <p>Interactive activities that promote safe and smart exploration.</p>
                                </div>
                            </div>
                            <div class="training-feature-box">
                                <div class="training-feature-icon"><i class="fas fa-running"></i></div>
                                <div class="training-feature-content">
                                    <h4>Strong Base For All</h4>
                                    <p>Building early skills in a fun and engaging way to support future success.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 text-center wow fadeInUp" data-wow-delay="400ms">
                            <div class="center-laptop-wrapper">
                                <img src="/assets/images/training/embedded.png" alt="Embedded Training" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-12 wow fadeInRight" data-wow-delay="500ms">
                            <div class="training-feature-box">
                                <div class="training-feature-icon"><i class="fas fa-user-shield"></i></div>
                                <div class="training-feature-content">
                                    <h4>All-Round Personal Growth</h4>
                                    <p>Focus on emotional, social, and cognitive development.</p>
                                </div>
                            </div>
                            <div class="training-feature-box">
                                <div class="training-feature-icon"><i class="fas fa-hand-holding-heart"></i></div>
                                <div class="training-feature-content">
                                    <h4>Safe & Caring Environment</h4>
                                    <p>A nurturing atmosphere where students feel encouraged and secure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="course-highlights-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <div class="ch-box wow fadeInLeft" data-wow-delay="100ms">
                                <div class="ch-box-title-wrapper">
                                    <div class="ch-box-icon"><i class="fas fa-microchip"></i></div>
                                    <h3 class="ch-box-title">Embedded Systems Core</h3>
                                </div>
                                <p class="ch-box-desc">Master the core concepts of embedded systems design and development through structured hands-on modules.</p>
                                <div class="ch-feature-item">
                                    <div class="ch-feature-icon"><i class="fas fa-code"></i></div>
                                    <div class="ch-feature-content">
                                        <h5>Microcontroller Programming</h5>
                                        <p>STM32 register-level and HAL-based programming for real-world applications.</p>
                                    </div>
                                </div>
                                <div class="ch-feature-item">
                                    <div class="ch-feature-icon"><i class="fas fa-network-wired"></i></div>
                                    <div class="ch-feature-content">
                                        <h5>Protocol Implementation</h5>
                                        <p>CAN, LIN, SPI, I2C, UART — implement and debug automotive communication protocols.</p>
                                    </div>
                                </div>
                                <div class="ch-feature-item">
                                    <div class="ch-feature-icon"><i class="fas fa-memory"></i></div>
                                    <div class="ch-feature-content">
                                        <h5>Memory & Peripheral Management</h5>
                                        <p>Flash, SRAM, DMA, interrupts, and peripheral driver development from scratch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="ch-box wow fadeInRight" data-wow-delay="100ms">
                                <div class="ch-box-title-wrapper">
                                    <div class="ch-box-icon"><i class="fas fa-car"></i></div>
                                    <h3 class="ch-box-title">Automotive Domain Expertise</h3>
                                </div>
                                <p class="ch-box-desc">Specialized training tailored for the automotive electronics industry with hands-on ECU programming.</p>
                                <div class="ch-feature-item">
                                    <div class="ch-feature-icon"><i class="fas fa-cogs"></i></div>
                                    <div class="ch-feature-content">
                                        <h5>AUTOSAR Architecture</h5>
                                        <p>Understand layered architecture, BSW, RTE, and application layer components.</p>
                                    </div>
                                </div>
                                <div class="ch-feature-item">
                                    <div class="ch-feature-icon"><i class="fas fa-tachometer-alt"></i></div>
                                    <div class="ch-feature-content">
                                        <h5>ECU Diagnostics</h5>
                                        <p>UDS (ISO 14229), OBD-II, and diagnostic stack implementation for modern vehicles.</p>
                                    </div>
                                </div>
                                <div class="ch-feature-item">
                                    <div class="ch-feature-icon"><i class="fas fa-code-branch"></i></div>
                                    <div class="ch-feature-content">
                                        <h5>Bootloader Development</h5>
                                        <p>Custom bootloader development with CAN and UART flash programming support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="certified-professionals-section">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 wow fadeInLeft" data-wow-delay="100ms">
                            <div class="cp-image-wrapper">
                                <img src="/assets/images/training/certificate.png" alt="Certification" class="cp-certificate-img" />
                            </div>
                        </div>
                        <div class="col-lg-7 wow fadeInRight" data-wow-delay="200ms">
                            <div class="cp-content">
                                <h2 class="cp-title">Become a Certified Embedded Automotive Engineer</h2>
                                <div class="cp-divider">
                                    <span></span><span></span><span></span>
                                </div>
                                <p class="cp-text">
                                    Upon successful completion of the program, you will receive a recognized certificate that validates your expertise in embedded automotive engineering. Our certification is valued by leading OEMs and Tier 1 automotive suppliers.
                                </p>
                                <h4 class="cp-list-title">What You'll Gain:</h4>
                                <ul class="cp-features-list">
                                    <li><span class="cp-check-icon"><i class="fas fa-check"></i></span> <span>Hands-on experience with AutoEdge Development Board</span></li>
                                    <li><span class="cp-check-icon"><i class="fas fa-check"></i></span> <span>Industry-recognized certification</span></li>
                                    <li><span class="cp-check-icon"><i class="fas fa-check"></i></span> <span>100% placement assistance</span></li>
                                    <li><span class="cp-check-icon"><i class="fas fa-check"></i></span> <span>Real-time project portfolio</span></li>
                                </ul>
                                <div class="cp-bottom-line"></div>
                                <p class="cp-bottom-text">Start your journey today and become an industry-ready Embedded Automotive Engineer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
