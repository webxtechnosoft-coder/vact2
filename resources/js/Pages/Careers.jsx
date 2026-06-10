import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Careers() {
    return (
        <MainLayout>
            <Head title="Careers" />
            <link rel="stylesheet" href="/assets/css/careers.css" />
{/* <section class="page-header">
        <div class="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div class="container">
            <div class="page-header__inner">
                <h3>Careers</h3>
                <div class="thm-breadcrumb__inner">
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span class="fas fa-angle-right"></span></li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
        </div>
    </section> */}


   <section class="careers-section" style={{ "marginTop": "100px" }}>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Our Careers</span>
                </div>
                <h2 class="section-title__title title-animation">Join Our
                    <span>Engineering Team</span>
                </h2>
                <p>Explore careers in Embedded Systems, Automotive Engineering, Hardware Design, and Software Development with VAct Technologies.</p>
            </div>

            {/* Job Card 1 */}
            <div class="job-card wow fadeInUp" data-wow-delay="100ms">
                <div class="job-card__icon-box">
                    <i class="fas fa-microchip"></i>
                </div>
                <div class="job-card__content">
                    <h3 class="job-card__title">Embedded Software Engineer (Telematics)</h3>
                    <div class="job-card__meta">
                        <span><i class="fas fa-briefcase"></i> 2 - 3 Years</span>
                        <span><i class="fas fa-map-marker-alt"></i> Bangalore</span>
                    </div>
                    <div class="job-card__tags">
                        <span class="job-card__tag">ARM Architecture</span>
                        <span class="job-card__tag">Bootloaders</span>
                        <span class="job-card__tag">CAN</span>
                        <span class="job-card__tag">I2C</span>
                        <span class="job-card__tag">UART</span>
                        <span class="job-card__tag">SPI</span>
                        <span class="job-card__tag">UDS</span>
                        <span class="job-card__tag">Microcontroller</span>
                    </div>
                </div>
                <div class="job-card__right">
                    <span class="job-card__date"><i class="far fa-calendar-alt"></i> Feb 2025</span>
                    <a href="#" class="job-card__btn">View Details <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>

            {/* Job Card 2 */}
            <div class="job-card wow fadeInUp" data-wow-delay="200ms">
                <div class="job-card__icon-box">
                    <i class="fas fa-project-diagram"></i>
                </div>
                <div class="job-card__content">
                    <h3 class="job-card__title">Harness Engineer</h3>
                    <div class="job-card__meta">
                        <span><i class="fas fa-briefcase"></i> 5 Years</span>
                        <span><i class="fas fa-map-marker-alt"></i> Chennai</span>
                    </div>
                    <div class="job-card__tags">
                        <span class="job-card__tag">Creo Cabling</span>
                        <span class="job-card__tag">LV Panels</span>
                        <span class="job-card__tag">Wiring Diagram</span>
                        <span class="job-card__tag">ECM</span>
                        <span class="job-card__tag">Electrical Documentation</span>
                        <span class="job-card__tag">System Integration</span>
                    </div>
                </div>
                <div class="job-card__right">
                    <span class="job-card__date"><i class="far fa-calendar-alt"></i> Feb 2025</span>
                    <a href="#" class="job-card__btn">View Details <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>

            {/* Job Card 3 */}
            <div class="job-card wow fadeInUp" data-wow-delay="300ms">
                <div class="job-card__icon-box">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="job-card__content">
                    <h3 class="job-card__title">Hardware Solutions Architect</h3>
                    <div class="job-card__meta">
                        <span><i class="fas fa-briefcase"></i> 14+ Years</span>
                        <span><i class="fas fa-map-marker-alt"></i> Chennai</span>
                    </div>
                    <div class="job-card__tags">
                        <span class="job-card__tag">ARM</span>
                        <span class="job-card__tag">FPGA</span>
                        <span class="job-card__tag">SoC Development</span>
                        <span class="job-card__tag">High-Speed PCB Design</span>
                        <span class="job-card__tag">ISO 26262</span>
                        <span class="job-card__tag">CAN</span>
                        <span class="job-card__tag">PCIe</span>
                        <span class="job-card__tag">DDR</span>
                    </div>
                </div>
                <div class="job-card__right">
                    <span class="job-card__date"><i class="far fa-calendar-alt"></i> Jan 2025</span>
                    <a href="#" class="job-card__btn">View Details <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>

            {/* Job Card 4 */}
            <div class="job-card wow fadeInUp" data-wow-delay="400ms">
                <div class="job-card__icon-box">
                    <i class="fas fa-code"></i>
                </div>
                <div class="job-card__content">
                    <h3 class="job-card__title">Embedded Engineer</h3>
                    <div class="job-card__meta">
                        <span><i class="fas fa-briefcase"></i> 6+ Years</span>
                        <span><i class="fas fa-map-marker-alt"></i> Bangalore</span>
                    </div>
                    <div class="job-card__tags">
                        <span class="job-card__tag">Embedded C/C++</span>
                        <span class="job-card__tag">Yocto</span>
                        <span class="job-card__tag">Embedded Linux</span>
                        <span class="job-card__tag">Device Drivers</span>
                        <span class="job-card__tag">RTOS</span>
                    </div>
                </div>
                <div class="job-card__right">
                    <span class="job-card__date"><i class="far fa-calendar-alt"></i> Jan 2025</span>
                    <a href="#" class="job-card__btn">View Details <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>

            {/* Job Card 5 */}
            <div class="job-card wow fadeInUp" data-wow-delay="500ms">
                <div class="job-card__icon-box">
                    <i class="fas fa-memory"></i>
                </div>
                <div class="job-card__content">
                    <h3 class="job-card__title">PCB Developer</h3>
                    <div class="job-card__meta">
                        <span><i class="fas fa-briefcase"></i> 4+ Years</span>
                        <span><i class="fas fa-map-marker-alt"></i> Hyderabad</span>
                    </div>
                    <div class="job-card__tags">
                        <span class="job-card__tag">PCB Development</span>
                        <span class="job-card__tag">Vivado Tool</span>
                        <span class="job-card__tag">I2C</span>
                        <span class="job-card__tag">SPI</span>
                        <span class="job-card__tag">Ethernet</span>
                        <span class="job-card__tag">CAN FD</span>
                        <span class="job-card__tag">MIPI</span>
                        <span class="job-card__tag">IO</span>
                    </div>
                </div>
                <div class="job-card__right">
                    <span class="job-card__date"><i class="far fa-calendar-alt"></i> Dec 2024</span>
                    <a href="#" class="job-card__btn">View Details <i class="fas fa-chevron-right"></i></a>
                </div>
            </div>

        </div>
    </section>

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
        </MainLayout>
    );
}
