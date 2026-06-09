import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

const imgUrl = (p) => {
    if (!p) return '/assets/images/blogs/blog1.png';
    if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
    return `/storage/${p}`;
};

const animations = ['wow fadeInLeft', 'wow fadeInUp', 'wow fadeInRight'];
const delays = ['100ms', '200ms', '300ms'];

export default function Blogs({ blogs, slides }) {
    return (
        <MainLayout>
            <Head title="Blogs" />
            <link rel="stylesheet" href="/assets/css/about.css" />

            {/*Testimonial One Start*/}
            <section class="testimonial-one">
                <div class="container">
                    <div class="testimonial-one__inner">
                        <div class="testimonial-one__carousel owl-carousel owl-theme">

                            {slides.map((slide) => (
                            <div key={slide.id} class="item">
                                <div class="row align-items-center">
                                    <div class="col-xl-5 col-lg-5 col-md-12">
                                        <div style={{ border: '1px solid rgba(0,142,210,0.5)', borderRadius: '12px', padding: '20px', background: 'rgba(0,0,0,0.2)' }}>
                                            <div class="testimonial-one__img">
                                                <img src={imgUrl(slide.image)} alt="" style={{ width: '100%', borderRadius: '8px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                        <div class="testimonial-one__single" style={{ background: 'transparent !important', boxShadow: 'none !important', paddingLeft: '40px' }}>
                                            <div style={{ width: '60px', height: '60px', background: '#008ed2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                                <i class="fas fa-quote-left" style={{ color: '#fff', fontSize: '24px' }}></i>
                                            </div>
                                            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '15px' }}>{slide.title}{slide.subtitle ? <><br /><span style={{ color: '#008ed2' }}>{slide.subtitle}</span></> : ''}</h2>
                                            <p class="testimonial-one__text" style={{ fontSize: '15px', lineHeight: 1.8, color: '#a0aec0' }}>{slide.description}</p>
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

            {/* Blog One Start */}
            <section class="blog-one">
                <div class="container">
                    <div class="section-title text-center sec-title-animation animation-style1">
                        <div class="section-title__tagline-box">
                            <div class="section-title__tagline-shape"></div>
                            <div class="section-title__tagline-shape-2"></div>
                            <span class="section-title__tagline">Latest Blog</span>
                        </div>
                        <h2 class="section-title__title title-animation">Insights & updates for<br /> modern
                            <span>learners</span>
                        </h2>
                    </div>
                    <div class="row">
                        {blogs.map((b, i) => (
                            <div key={b.id} class={`col-xl-4 col-lg-6 ${animations[i % 3]}`} data-wow-delay={delays[i % 3]}>
                                <div class="blog-one__single">
                                    <div class="blog-one__img">
                                        <img src={imgUrl(b.image)} alt={b.title} />
                                        <div class="blog-one__plus">
                                            <a href="/blogdetails"><i class="icon-plus"></i></a>
                                        </div>
                                        <div class="blog-one__tag">
                                            <a href="/blogdetails">VAct Blog</a>
                                        </div>
                                    </div>
                                    <div class="blog-one__content">
                                        <ul class="blog-one__meta list-unstyled">
                                            <li>
                                                <a href="#">
                                                    <span class="fas fa-calendar-alt"></span>{b.card_date || 'May 10, 2025'}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span class="fas fa-comments"></span>Comment
                                                </a>
                                            </li>
                                        </ul>
                                        <h3 class="blog-one__title"><a href="/blogdetails">{b.title}</a></h3>
                                        <div class="blog-one__author-and-btn">
                                            <div class="blog-one__author-info">
                                                <div class="blog-one__author-img-box">
                                                    <div class="blog-one__author-img">
                                                        <img src={imgUrl(b.author_image)} alt="" />
                                                    </div>
                                                </div>
                                                <div class="blog-one__author-content">
                                                    <h4>{b.author_name || 'Admin Team'}</h4>
                                                    <p>{b.author_date || 'December 22, 2023'}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Blog One End */}

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
                                            <div class="testimonial-two__google-icon" style={{ marginLeft: '30px', marginBottom: '20px' }}>
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
                                            <div class="testimonial-two__google-icon" style={{ marginLeft: '30px', marginBottom: '20px' }}>
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
                                            <div class="testimonial-two__google-icon" style={{ marginLeft: '30px', marginBottom: '20px' }}>
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
                                            <div class="testimonial-two__google-icon" style={{ marginLeft: '30px', marginBottom: '20px' }}>
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
            <script src="/assets/js/script.js?v=3"></script>
        </MainLayout>
    );
}
