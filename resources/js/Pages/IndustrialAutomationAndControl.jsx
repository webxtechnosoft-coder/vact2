import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function IndustrialAutomationAndControl({ service }) {
    const s = service || {};
    const badge = s.badge || 'Industrial Automation';
    const title = s.title || 'Industrial Automation (Textile)';
    const clientInfo = s.subtitle || 'AUDNE INDIA LIMITED, DADRA & NAGAR HAVELI, INDIA. AUNDE India Limited (AIL), is a joint venture collaboration between Faze Three and Aude Achter & Ebels GmbH Germany, known for its line of automotive fabrics and seating systems.';
    const description = s.description || "Our team replaced existing control mechanism of the machine with state-of-the-art Delta made PLC, Drives and HMI control. The variable frequency drives are controlled by PLC to vary the speed of the machine and its mainly synchronized functions like water flow control, temperature controls, steam valve functions, conveyor movement, interlocked safety systems etc.\n\nThe PLC and HMI ladder programs are developed from scratch based on the machines functionality and operation sequence. The Ladder Logic involved interlocking with 15 emergency switches and dancing rod to stop the machine.\n\nMore than 100 digital I/O's and 30 analog I/O's are interfaced in this automation.";
    const features = s.features || [
        { title: 'Advanced Control', description: 'State-of-the-art PLC, Drives and HMI control for seamless machine operations.', icon: 'fa-check-circle' },
        { title: 'Synchronized Functions', description: 'Water flow, temperature, steam valves, conveyor movement and safety systems integrated.', icon: 'fa-sitemap' },
        { title: 'Safety First', description: 'Interlocking with 15 emergency switches and dancing rod for maximum safety.', icon: 'fa-shield-alt' },
        { title: 'High I/O Integration', description: "More than 100 digital I/O's and 30 analog I/O's interfaced for reliable automation.", icon: 'fa-microchip' },
    ];
    const slides = (s.slides && s.slides.length > 0) ? s.slides : [
        { image: '/assets/images/services/industrial-automation-and-control.png', heading: 'Smart Industrial', highlight: 'Automation & Control', description: 'Enhance manufacturing efficiency and uptime. We design robust, highly automated PLC logic configurations and beautiful, custom SCADA monitoring suites explicitly tailored for factories, power grids, and chemical industries.' },
        { image: '/assets/images/services/station.png', heading: 'Reliable Process', highlight: 'Control Solutions', description: 'Achieve continuous, high-precision thermal, fluid, and mechanical regulations. We engineer robust, isolated closed-loop process loops using isolated fieldbus communications and remote telemetry units.' },
    ];
    const descParts = description.split('\n\n');
    const [descPart1, descPart2, descPart3] = descParts.length >= 3 ? descParts : [description, '', ''];
    return (
        <MainLayout>
            <Head title="IndustrialAutomationAndControl" />
            <link rel="stylesheet" href="/assets/css/industrial-automation-and-control.css" />
            <link rel="stylesheet" href="/assets/css/about.css" />
            
{/*Page Header Start*/}
    {/* <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div className="container">
            <div className="page-header__inner">
                <h3>Blogs</h3>
                <div className="thm-breadcrumb__inner">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span className="fas fa-angle-right"></span></li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bubbleContainer">
            <div className="bubble-1"></div>
            <div className="bubble-2"></div>
            <div className="bubble-3"></div>
        </div>
    </section> */}
    {/*Page Header End*/}

    {/* Industrial Automation Section Start */}
    {/*Testimonial One Start*/}
        {/*Testimonial One Start*/}
    <section className="testimonial-one">
        <div className="container">
            <div className="testimonial-one__inner">
                <div className="testimonial-one__carousel owl-carousel owl-theme">
                    {slides.map((slide, i) => (
                        <div key={i} className="item">
                            <div className="row align-items-center">
                                <div className="col-xl-5 col-lg-5 col-md-12">
                                    <div className="product-carousel-img-container">
                                        <div className="testimonial-one__img">
                                            <img src={slide.image.startsWith('/') ? slide.image : '/' + slide.image} alt={slide.heading} style={{ "width": "100%", "borderRadius": "8px" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-12">
                                    <div className="testimonial-one__single product-carousel-single">
                                        <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                            <i className="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                        </div>
                                        <h2 className="product-carousel-title" style={{ color: "#fff" }}>
                                            {slide.heading} <br /><span style={{ "color": "#008ed2" }}>{slide.highlight}</span></h2>
                                        <p className="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>{slide.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    {/*Testimonial One End*/}
    {/*Testimonial One End*/}
    <section className="industrial-automation-section">
        <div className="container">
            <div className="row">
                <div className="col-12 mb-4 wow fadeInUp" data-wow-delay="100ms">
                    <div className="ind-auto-badge">
                        <i className="fas fa-cogs animated-gear"></i> {badge}
                    </div>
                    <h2 className="ind-auto-title">{title}</h2>
                </div>
            </div>

            <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-lg-6 col-md-12 wow fadeInLeft" data-wow-delay="200ms">
                    <div className="ind-info-block">
                        <div className="ind-info-icon">
                            <i className="fas fa-user-friends"></i>
                        </div>
                        <div>
                            <h4 className="ind-info-heading">Client</h4>
                            <p className="ind-info-text mb-0">
                                {clientInfo}
                            </p>
                        </div>
                    </div>

                    <div className="ind-info-block mb-0">
                        <div className="ind-info-icon animated-icon-glow">
                            <i className="fas fa-cog animated-gear"></i>
                        </div>
                        <div>
                            <h4 className="ind-info-heading">Automation</h4>
                            {descPart1 && <p className="ind-info-text mb-15">{descPart1}</p>}
                            {descPart2 && <p className="ind-info-text mb-15">{descPart2}</p>}
                            {descPart3 && <p className="ind-info-text mb-0">{descPart3}</p>}
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 wow fadeInRight" data-wow-delay="300ms">
                    <div className="ind-image-wrapper">
                        {/* Animated SVG representation for the missing image */}
                       <div className="animated-float" style={{ "width": "100%", "maxWidth": "400px", "padding": "20px", "overflow": "hidden" }}>
  <img src={s.image ? (s.image.startsWith('assets/') ? '/' + s.image : '/storage/' + s.image) : '/assets/images/services/industrial-automation-and-control.png'} alt="Industrial Automation and Control" style={{ "width": "100%", "height": "auto", "objectFit": "contain", "transform": "scale(1.2)" }} />
</div>
                    </div>
                </div>
            </div>

            {/* Bottom Features Row */}
            <div className="row mt-5 wow fadeInUp" data-wow-delay="400ms">
                <div className="col-12">
                    <div className="ind-features-wrapper">
                        <div className="row g-4">
                            {features.map((feat, i) => (
                                <div key={i} className={`col-lg-3 col-md-6 ${i === features.length - 1 ? 'feature-last-item' : 'feature-border-right'}`}>
                                    <div className="ind-feature-item">
                                        <div className="ind-feature-icon">
                                            <i className={`fas ${feat.icon}`}></i>
                                        </div>
                                        <div>
                                            <h5 className="ind-feature-title">{feat.title}</h5>
                                            <p className="ind-feature-text">{feat.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Industrial Automation Section End */}

















    {/*Testimonials Two Start */}
    <section className="testimonial-two">
        <div className="container">
            <div className="section-title text-left sec-title-animation animation-style2">
                <div className="section-title__tagline-box">
                    <div className="section-title__tagline-shape"></div>
                    <div className="section-title__tagline-shape-2"></div>
                    <span className="section-title__tagline">Testimonial</span>
                </div>
                <h2 className="section-title__title title-animation">Trusted by Global

                    <br />Product <span>Development Companies</span>
                </h2>
            </div>
            <div className="testimonial-two__inner">
                <div className="testimonial-two__carousel owl-carousel owl-theme">
                    <div className="item">
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__header">
                                    <div className="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>
                                <p className="testimonial-two__text">The embedded systems training at VAct Technologies
                                    was very informative and practical. The real-time projects improved my technical
                                    skills and confidence.</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-1.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h3><a href="#">Santhosh Selvam</a></h3>
                                        <p>Embedded Systems Trainee</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__header">
                                    <div className="testimonial-two__google-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>
                                <p className="testimonial-two__text">VAct Technologies provided excellent guidance
                                    throughout my internship. The trainers explained every concept clearly with
                                    hands-on experience.</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-2.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h3><a href="#">Mohan Ravi</a></h3>
                                        <p>Embedded Software Intern</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__header">
                                    <div className="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>
                                <p className="testimonial-two__text">The internship program helped me understand
                                    embedded systems and IoT applications in a practical way. The mentors were very
                                    supportive.</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-3.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h3><a href="#">Swathy</a></h3>
                                        <p>Embedded & IoT Intern</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testimonial-two__single">
                            <div className="testimonial-two__single-inner">
                                <div className="testimonial-two__header">
                                    <div className="testimonial-two__google-icon" style={{ "marginLeft": "30px", "marginBottom": "20px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                    </div>
                                    <div className="testimonial-two__ratting">
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                    </div>
                                </div>
                                <p className="testimonial-two__text">I gained valuable knowledge in firmware development
                                    and embedded technology during my internship. The training sessions were
                                    interactive and useful.</p>
                                <div className="testimonial-two__client-info">
                                    <div className="testimonial-two__client-img">
                                        <img src="/assets/images/testimonial/testimonial-2-4.jpg" alt="" />
                                    </div>
                                    <div className="testimonial-two__client-content">
                                        <h3><a href="#">Hema M</a></h3>
                                        <p>Embedded Systems Intern</p>
                                    </div>
                                </div>
                                <div className="testimonial-two__quote">
                                    <i className="fas fa-quote-right"></i>
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
