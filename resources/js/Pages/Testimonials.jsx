import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Testimonials() {
    return (
        <MainLayout>
            <Head title="Testimonials" />
            <link rel="stylesheet" href="/assets/css/testimonials-elite.css" />
{/*Page Header Start*/}
    {/* <section class="page-header">
        <div class="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div class="container">
            <div class="page-header__inner">
                <h3>Testimonials</h3>
                <div class="thm-breadcrumb__inner">
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span class="fas fa-angle-right"></span></li>
                        <li>Testimonials</li>
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


    {/* Video Testimonials Start */}
    <section class="video-testimonials-section">
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Testimonials</span>
                </div>
                <h2 class="section-title__title title-animation">What Our Associates &
                    <span>Parents Says</span>

                </h2>
                <p>Real experience,real growth. Hear Stories from our happy associates and parents.</p>
            </div>
            <div class="row">
                {/* Video Card 1 */}
                <div class="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                    <div class="video-card">
                        <a href="https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ" class="video-popup">
                            <div class="video-card__thumbnail">
                                <img src="/assets/images/Testimonials/test.png" alt="Anita Sharma" />
                                <div class="video-card__play-btn">
                                    <i class="fas fa-play"></i>
                                </div>
                                <div class="video-card__duration">1:25</div>
                            </div>
                        </a>
                        <div class="video-card__content">
                            <div class="video-card__user">
                                <div class="video-card__avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="video-card__user-info">
                                    <h4>Anita Sharma</h4>
                                    <p>Parent of Ayaan</p>
                                </div>
                            </div>
                            <div class="video-card__quote">
                                <i class="fas fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Card 2 */}
                <div class="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="200ms">
                    <div class="video-card">
                        <a href="https://youtube.com/shorts/qy5G0AJ9vjg?si=rv2AqJmMARPSPgxx" class="video-popup">
                            <div class="video-card__thumbnail">
                                <img src="/assets/images/Testimonials/test.png" alt="Rohit Verma" />
                                <div class="video-card__play-btn">
                                    <i class="fas fa-play"></i>
                                </div>
                                <div class="video-card__duration">1:40</div>
                            </div>
                        </a>
                        <div class="video-card__content">
                            <div class="video-card__user">
                                <div class="video-card__avatar">
                                    <i class="fas fa-user" style={{ "color": "#28a745" }}></i>
                                </div>
                                <div class="video-card__user-info">
                                    <h4>Rohit Verma</h4>
                                    <p>Parent of Myra</p>
                                </div>
                            </div>
                            <div class="video-card__quote">
                                <i class="fas fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Card 3 */}
                <div class="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                    <div class="video-card">
                        <a href="https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ" class="video-popup">
                            <div class="video-card__thumbnail">
                                <img src="/assets/images/Testimonials/test.png" alt="Neha Kapoor" />
                                <div class="video-card__play-btn">
                                    <i class="fas fa-play"></i>
                                </div>
                                <div class="video-card__duration">1:18</div>
                            </div>
                        </a>
                        <div class="video-card__content">
                            <div class="video-card__user">
                                <div class="video-card__avatar">
                                    <i class="fas fa-user" style={{ "color": "#6f42c1" }}></i>
                                </div>
                                <div class="video-card__user-info">
                                    <h4>Neha Kapoor</h4>
                                    <p>Parent of Vihaan</p>
                                </div>
                            </div>
                            <div class="video-card__quote">
                                <i class="fas fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                    <div class="video-card">
                        <a href="https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ" class="video-popup">
                            <div class="video-card__thumbnail">
                                <img src="/assets/images/Testimonials/test.png" alt="Anita Sharma" />
                                <div class="video-card__play-btn">
                                    <i class="fas fa-play"></i>
                                </div>
                                <div class="video-card__duration">1:25</div>
                            </div>
                        </a>
                        <div class="video-card__content">
                            <div class="video-card__user">
                                <div class="video-card__avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="video-card__user-info">
                                    <h4>Priya Nair</h4>
                                    <p>Parent of Vivaan</p>
                                </div>
                            </div>
                            <div class="video-card__quote">
                                <i class="fas fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                    <div class="video-card">
                        <a href="https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ" class="video-popup">
                            <div class="video-card__thumbnail">
                                <img src="/assets/images/Testimonials/test.png" alt="Anita Sharma" />
                                <div class="video-card__play-btn">
                                    <i class="fas fa-play"></i>
                                </div>
                                <div class="video-card__duration">1:25</div>
                            </div>
                        </a>
                        <div class="video-card__content">
                            <div class="video-card__user">
                                <div class="video-card__avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="video-card__user-info">
                                    <h4>Sneha Kapoor</h4>
                                    <p>Parent of Aadhya</p>
                                </div>
                            </div>
                            <div class="video-card__quote">
                                <i class="fas fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                    <div class="video-card">
                        <a href="https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ" class="video-popup">
                            <div class="video-card__thumbnail">
                                <img src="/assets/images/Testimonials/test.png" alt="Anita Sharma" />
                                <div class="video-card__play-btn">
                                    <i class="fas fa-play"></i>
                                </div>
                                <div class="video-card__duration">1:25</div>
                            </div>
                        </a>
                        <div class="video-card__content">
                            <div class="video-card__user">
                                <div class="video-card__avatar">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div class="video-card__user-info">
                                    <h4>Pooja Menon</h4>
                                    <p>Parent of Vivaan</p>
                                </div>
                            </div>
                            <div class="video-card__quote">
                                <i class="fas fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video CTA Bar */}
            <div class="video-cta-bar wow fadeInUp" data-wow-delay="400ms">
                <div class="video-cta__left">
                    <div class="video-cta__icon">
                        <i class="fas fa-film"></i>
                    </div>
                    <div class="video-cta__text">
                        <h3>Some our Video Testimonials <br />given below.</h3>
                    </div>
                </div>

                <div class="video-cta-divider"></div>

                <div class="video-cta__right">
                    <div class="video-cta__more-text">For more videos</div>
                    <a href="https://www.youtube.com/channel/UCcpRq9mlF7iP3GiZuZBO3sg" class="video-cta__btn"
                        target="_blank">
                        Click Here <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>
    {/* Video Testimonials End */}


   




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
