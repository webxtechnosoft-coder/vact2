import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

const imgUrl = (p) => {
    if (!p) return null;
    if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
    return `/storage/${p}`;
};

export default function Testimonials({ slides, testimonials }) {
    const delays = ['100ms', '200ms', '300ms'];
    return (
        <MainLayout>
            <Head title="Testimonials" />
            <link rel="stylesheet" href="/assets/css/testimonials-elite.css" />
            <link rel="stylesheet" href="/assets/css/about.css" />

            {/*Testimonial One Start*/}
            <section className="testimonial-one">
                <div className="container">
                    <div className="testimonial-one__inner">
                        <div className="testimonial-one__carousel owl-carousel owl-theme">
                            {slides.map((slide) => (
                                <div key={slide.id} className="item">
                                    <div className="row align-items-center">
                                        <div className="col-xl-5 col-lg-5 col-md-12">
                                            <div style={{ border: '1px solid rgba(0,142,210,0.5)', borderRadius: '12px', padding: '20px', background: 'rgba(0,0,0,0.2)' }}>
                                                <div className="testimonial-one__img">
                                                    <img src={imgUrl(slide.image)} alt="" style={{ width: '100%', borderRadius: '8px' }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-12">
                                            <div className="testimonial-one__single" style={{ background: 'transparent', boxShadow: 'none', paddingLeft: '40px' }}>
                                                <div style={{ width: '60px', height: '60px', background: '#008ed2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                                    <i className="fas fa-quote-left" style={{ color: '#fff', fontSize: '24px' }}></i>
                                                </div>
                                                <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '15px' }}>
                                                    {slide.title}
                                                    {slide.subtitle ? <><br /><span style={{ color: '#008ed2' }}>{slide.subtitle}</span></> : ''}
                                                </h2>
                                                <p className="testimonial-one__text" style={{ fontSize: '15px', lineHeight: 1.8, color: '#a0aec0' }}>{slide.description}</p>
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

            {/* Video Testimonials Start */}
            <section className="video-testimonials-section">
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape"></div>
                            <div className="section-title__tagline-shape-2"></div>
                            <span className="section-title__tagline">Testimonials</span>
                        </div>
                        <h2 className="section-title__title title-animation">What Our Associates &amp;
                            <span>Parents Says</span>
                        </h2>
                        <p>Real experience, real growth. Hear Stories from our happy associates and parents.</p>
                    </div>
                    <div className="row">
                        {testimonials.map((t, i) => (
                            <div key={t.id} className={`col-xl-4 col-lg-6 wow fadeInUp`} data-wow-delay={delays[i % 3]}>
                                <div className="video-card">
                                    <a href={t.video_url || '#'} className="video-popup" target="_blank">
                                        <div className="video-card__thumbnail">
                                            <img src={imgUrl(t.image) || '/assets/images/Testimonials/test.png'} alt={t.name} />
                                            <div className="video-card__play-btn">
                                                <i className="fas fa-play"></i>
                                            </div>
                                            {t.duration && <div className="video-card__duration">{t.duration}</div>}
                                        </div>
                                    </a>
                                    <div className="video-card__content">
                                        <div className="video-card__user">
                                            <div className="video-card__avatar">
                                                <i className="fas fa-user"></i>
                                            </div>
                                            <div className="video-card__user-info">
                                                <h4>{t.name}</h4>
                                                <p>{t.role || ''}</p>
                                            </div>
                                        </div>
                                        <div className="video-card__quote">
                                            <i className="fas fa-quote-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Video CTA Bar */}
                    <div className="video-cta-bar wow fadeInUp" data-wow-delay="400ms">
                        <div className="video-cta__left">
                            <div className="video-cta__icon">
                                <i className="fas fa-film"></i>
                            </div>
                            <div className="video-cta__text">
                                <h3>Some our Video Testimonials <br />given below.</h3>
                            </div>
                        </div>

                        <div className="video-cta-divider"></div>

                        <div className="video-cta__right">
                            <div className="video-cta__more-text">For more videos</div>
                            <a href="https://www.youtube.com/channel/UCcpRq9mlF7iP3GiZuZBO3sg" className="video-cta__btn" target="_blank">
                                Click Here <i className="fas fa-arrow-right"></i>
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
            <script src="/assets/js/script.js?v=3"></script>
        </MainLayout>
    );
}
