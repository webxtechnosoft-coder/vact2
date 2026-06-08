import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />
            <link rel="stylesheet" href="/assets/css/contact.css?v=2.0" />
{/*Page Header Start*/}
    {/* <section class="page-header">
        <div class="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div class="container">
            <div class="page-header__inner">
                <h3>Contact </h3>
                <div class="thm-breadcrumb__inner">
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span class="fas fa-angle-right"></span></li>
                        <li>Contact </li>
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

    {/*Contact Info Start*/}
    <section class="contact-info-elite" style={{ "marginTop": "120px" }}>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Get In Touch</span>
                </div>
                <h2 class="section-title__title title-animation">We're always
                    <span>Here to Help You</span>
                </h2>
                <p>Reach out to us through any of this following ways</p>
            </div>

        </div>
    </section>
    {/*Contact Info End*/}

    {/*Contact Page Start*/}
    <section class="contact-page">
        <div class="container">
            <div class="contact-page__inner">

                {/* Office Switcher Buttons */}
                <div class="office-switcher wow fadeInUp" data-wow-delay="100ms">
                    <button class="switcher-btn active" onclick="switchOffice('coimbatore', this)">Coimbatore
                        Office</button>
                    <button class="switcher-btn" onclick="switchOffice('chennai', this)">Chennai Office</button>
                </div>

                {/* Office Address Above Map */}
                <div class="address-above-map wow fadeInUp" data-wow-delay="120ms" style={{ "marginTop": "20px" }}>
                    <div class="detail-card">
                        <div class="detail-card__icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="detail-card__content">
                            <h4>Address</h4>
                            <p id="office-address">145 Saradha Mill Road, Sundarapuram Post, Coimbatore-641024</p>
                        </div>
                    </div>
                </div>

                {/* Office Location Map */}
                <div class="contact-map-wrapper wow fadeInUp" data-wow-delay="150ms">
                    <iframe id="office-map"
                        src="https://maps.google.com/maps?q=VAct+Technologies+Pvt+Ltd,+145+Saradha+Mill+Road,+Coimbatore&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        allowfullscreen></iframe>
                </div>

                <div class="row">
                    {/* Left: Get in Touch with Us Form */}
                    <div class="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
                        <div class="contact-form-card">
                            <h3 class="contact-form-card__title">Get in Touch with Us</h3>
                            <form id="contact-form" class="contact-form-card__form" action="#" method="POST">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div class="contact-form-card__input-box">
                                            <input type="text" name="name" placeholder="Input your name" required />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div class="contact-form-card__input-box">
                                            <input type="email" name="email" placeholder="Input your email" required />
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="contact-form-card__input-box">
                                            <input type="text" name="subject" placeholder="Subject" required />
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="contact-form-card__input-box">
                                            <textarea name="message" placeholder="Submit your message request"
                                                required></textarea>
                                        </div>
                                        <div class="text-left">
                                            <button type="submit" class="contact-form-card__submit-btn">Send
                                                message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right: Contact Details */}
                    <div class="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
                        <div class="contact-details-box">
                            <h3 class="contact-details-box__title">Contact Details</h3>
                            <p class="contact-details-box__subtext">Reach out to us directly for any technical
                                validation, software design, embedded systems training or industrial automation
                                inquiries.</p>

                            <div class="contact-details-grid">
                              

                                {/* Mobile Card */}
                                <div class="detail-card">
                                    <div class="detail-card__icon">
                                        <i class="fa-solid fa-phone"></i>
                                    </div>

                                    <div class="detail-card__content">
                                        <h4>Mobile</h4>
                                        <p id="office-phone">+91 96001 00882 <br /> +91 78719 09590</p>
                                    </div>
                                </div>

                                {/* Availability Card */}
                                <div class="detail-card">
                                    <div class="detail-card__icon">
                                        <i class="far fa-clock"></i>
                                    </div>
                                    <div class="detail-card__content">
                                        <h4>Availability</h4>
                                        <p>Daily 09 am - 05 pm</p>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div class="detail-card">
                                    <div class="detail-card__icon">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="detail-card__content">
                                        <h4>Email</h4>
                                        <p id="office-email">careers@vact-tech.com</p>
                                    </div>
                                </div>

                                {/* Website Card */}
                                <div class="detail-card">
                                    <div class="detail-card__icon">
                                        <i class="fas fa-globe"></i>
                                    </div>
                                    <div class="detail-card__content">
                                        <h4>Website</h4>
                                        <p><a href="https://www.vact-tech.com" target="_blank" style={{ "color": "inherit" }}>www.vact-tech.com</a></p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Section */}
                            <div class="contact-socials">
                                <span class="contact-socials__title">Social Media:</span>
                                <div class="contact-socials__links">

                                    <a href="#" class="social-link" target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>

                                    <a href="https://x.com/VActTechnology" class="social-link" target="_blank"
                                        rel="noopener noreferrer">
                                        <i class="fab fa-twitter"></i>
                                    </a>

                                    <a href="https://www.linkedin.com/company/vact-technologies/" class="social-link"
                                        target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>

                                    <a href="https://www.instagram.com/vacttech/" class="social-link" target="_blank"
                                        rel="noopener noreferrer">
                                        <i class="fab fa-instagram"></i>
                                    </a>

                                    <a href="https://www.youtube.com/channel/UCcpRq9mlF7iP3GiZuZBO3sg"
                                        class="social-link" target="_blank" rel="noopener noreferrer">
                                        <i class="fab fa-youtube"></i>
                                    </a>

                                    <a href="https://t.me/vacttechnologycareers" class="social-link" target="_blank"
                                        rel="noopener noreferrer">
                                        <i class="fab fa-telegram-plane"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Contact Page End*/}


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
