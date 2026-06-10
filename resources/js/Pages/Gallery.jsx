import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Gallery() {
    return (
        <MainLayout>
            <Head title="Gallery" />
            <link rel="stylesheet" href="/assets/css/gallery-elite.css" />
{/*Page Header Start*/}
    {/* <section class="page-header">
        <div class="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div class="container">
            <div class="page-header__inner">
                <h3>Gallery</h3>
                <div class="thm-breadcrumb__inner">
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span class="fas fa-angle-right"></span></li>
                        <li>Gallery</li>
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




    {/* Gallery Elite Start */}
    <section class="gallery-elite-section" style={{ "marginTop": "150px" }}>
        <div class="container">

            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">GALLERY</span>
                </div>
                <h2 class="section-title__title title-animation">Explore Our Training &
                    <span>Innovation Gallery</span>

                </h2>
                <p>Hands-on training, live projects, workshops, internships, and student activities at VAct
                    Technologies..</p>
            </div>
            <div class="gallery-custom-grid">
                {["gal1","gal2","gal3","gal4","gal5","gal6","gal7","gal8","gal9","gal10","gal11","gal12","gal13","gal14","gal15","gal16"].map((img, index) => (
                    <div className="gallery-custom-grid-item" key={index}>
                        <div className="gallery-card wow fadeInUp" data-wow-delay="100ms">
                            <img src={`/assets/images/gallery1/${img}.png`} alt="Gallery Image" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    {/* Gallery Elite End */}

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
