import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function About({ contents }) {
    const s = (key) => contents?.[key] || {};
    const img = (key) => {
        const p = s(key).image;
        if (!p) return null;
        if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
        return `/storage/${p}`;
    };
    const img2 = (key) => {
        const p = s(key).image2;
        if (!p) return null;
        if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
        return `/storage/${p}`;
    };
    const dirSet = s('director').settings || {};
    const dirPts = dirSet.points || ['24+ Years Experience', 'Expert in Product Development', 'Agile Project Management', 'Leadership & Team Building'];
    return (
        <MainLayout>
            <Head title="About" />
            <link rel="stylesheet" href="/assets/css/about.css" />

    {/* About Slides Carousel Start */}
    <section class="testimonial-one">
        <div class="container">
            <div class="testimonial-one__inner">
                <div class="testimonial-one__carousel owl-carousel owl-theme">
                    {['about-slide-1', 'about-slide-2', 'about-slide-3', 'about-slide-4'].map((key) => {
                        const slide = s(key);
                        return (
                            <div class="item" key={key}>
                                <div class="row align-items-center">
                                    <div class="col-xl-5 col-lg-5 col-md-12">
                                        <div style={{ border: '1px solid rgba(0,142,210,0.5)', borderRadius: '12px', padding: '20px', background: 'rgba(0,0,0,0.2)' }}>
                                            <div class="testimonial-one__img">
                                                <img src={img(key) || '/assets/images/about/about1.png'} alt="" style={{ width: '100%', borderRadius: '8px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                        <div class="testimonial-one__single" style={{ paddingLeft: '40px' }}>
                                            <div style={{ width: '60px', height: '60px', background: '#008ed2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                                <i class="fas fa-quote-left" style={{ color: '#fff', fontSize: '24px' }}></i>
                                            </div>
                                            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1f2937', marginBottom: '15px' }}>{slide.title || ''}{slide.subtitle ? <><br /><span style={{ color: '#008ed2' }}>{slide.subtitle}</span></> : ''}</h2>
                                            <p class="testimonial-one__text" style={{ fontSize: '15px', lineHeight: '1.8', color: '#4B5563' }}>{slide.description || ''}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
    {/* About Slides Carousel End */}


    {/*About Three Start*/}
    <section class="about-three">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                    <div class="about-three__left">
                        <div class="about-three__img-box">
                            <div class="about-three__img">
                                <img src={img('about-content') || '/assets/images/about/about5.png'} alt="" />
                            </div>
                            <div class="about-three__img-2">
                                <img src={img2('about-content') || '/assets/images/about/about6.png'} alt="" />
                            </div>
                            <div class="about-three__experience-box">
                                <div class="about-three__experience-count">
                                    <h3 class="odometer" data-count={s('about-content').settings?.stat_years || 15}>{s('about-content').settings?.stat_years || 15}</h3>
                                    <span>{s('about-content').settings?.stat_years_suffix || '+'}</span>
                                </div>
                                <p class="about-three__experience-count-text">{s('about-content').settings?.stat_years_label || 'Years Of Experience'}</p>
                            </div>
                            <div class="about-three__shape-1"></div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="about-three__right">
                        <div class="section-title text-left sec-title-animation animation-style2">
                            <div class="section-title__tagline-box">
                                <div class="section-title__tagline-shape"></div>
                                <div class="section-title__tagline-shape-2"></div>
                                <span class="section-title__tagline">{s('about-content').subtitle || 'About VAct Technologies'}</span>
                            </div>
                            <h2 class="section-title__title title-animation">{s('about-content').title || 'A Trusted Partner For Embedded Systems And Innovation'}</h2>
                        </div>
                        <p class="about-three__text">{s('about-content').description || ''}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*About Three End*/}

    {/* Vision/Mission Cards Start */}
    <section class="vms-custom-section" style={{ "padding": "120px 0 60px", "marginTop": "-90px" }}>
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-12 mb-5 wow fadeInUp" data-wow-delay="100ms">
                    <div class="vms-custom-card" style={{ "background": "#008ed2", "borderRadius": "12px", "padding": "30px 20px 25px", "textAlign": "center", "position": "relative", "boxShadow": "0 10px 30px rgba(0,0,0,0.05)", "border": "1px solid #e1e4e6", "height": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                        <div class="vms-custom-icon" style={{ "width": "100px", "height": "100px", "background": "#0c233a", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "position": "absolute", "top": "-40px", "left": "50%", "transform": "translateX(-50%)", "border": "5px solid #ffd1ca", "boxShadow": "0 5px 15px rgba(0,0,0,0.1)" }}>
                            <i class="far fa-eye" style={{ "fontSize": "50px", "color": "#ffffff" }}></i>
                        </div>
                        <div style={{ "marginTop": "35px", "flexGrow": "1", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                            <div>
                                <h3 style={{ "fontSize": "24px", "fontWeight": "700", "color": "#ffffff", "margin": "10px 0 15px" }}>{s('vision').title || 'Vision'}</h3>
                                <p style={{ "color": "#ffffff", "fontSize": "15px", "lineHeight": "1.6", "marginBottom": "20px" }}>{s('vision').description || ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 mb-5 wow fadeInUp" data-wow-delay="100ms">
                    <div class="vms-custom-card" style={{ "background": "#008ed2", "borderRadius": "12px", "padding": "30px 20px 25px", "textAlign": "center", "position": "relative", "boxShadow": "0 10px 30px rgba(0,0,0,0.05)", "border": "1px solid #e1e4e6", "height": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                        <div class="vms-custom-icon" style={{ "width": "100px", "height": "100px", "background": "#0c233a", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "position": "absolute", "top": "-40px", "left": "50%", "transform": "translateX(-50%)", "border": "5px solid #ffd1ca", "boxShadow": "0 5px 15px rgba(0,0,0,0.1)" }}>
                            <i class="far fa-gem" style={{ "fontSize": "50px", "color": "#ffffff" }}></i>
                        </div>
                        <div style={{ "marginTop": "35px", "flexGrow": "1", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                            <div>
                                <h3 style={{ "fontSize": "24px", "fontWeight": "700", "color": "#ffffff", "margin": "10px 0 15px" }}>{s('quality').title || 'Quality'}</h3>
                                <p style={{ "color": "#ffffff", "fontSize": "15px", "lineHeight": "1.6", "marginBottom": "20px" }}>{s('quality').description || ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 mb-5 wow fadeInUp" data-wow-delay="100ms">
                    <div class="vms-custom-card" style={{ "background": "#008ed2", "borderRadius": "12px", "padding": "30px 20px 25px", "textAlign": "center", "position": "relative", "boxShadow": "0 10px 30px rgba(0,0,0,0.05)", "border": "1px solid #e1e4e6", "height": "100%", "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
                        <div class="vms-custom-icon" style={{ "width": "100px", "height": "100px", "background": "#0c233a", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "position": "absolute", "top": "-40px", "left": "50%", "transform": "translateX(-50%)", "border": "5px solid #ffd1ca", "boxShadow": "0 5px 15px rgba(0,0,0,0.1)" }}>
                            <i class="far fa-dot-circle" style={{ "fontSize": "50px", "color": "#ffffff" }}></i>
                        </div>
                        <div style={{ "marginTop": "35px", "flexGrow": "1", "display": "flex", "flexDirection": "column", "justifyContent": "space-between" }}>
                            <div>
                                <h3 style={{ "fontSize": "24px", "fontWeight": "700", "color": "#ffffff", "margin": "10px 0 15px" }}>{s('mission').title || 'Mission'}</h3>
                                <p style={{ "color": "#ffffff", "fontSize": "15px", "lineHeight": "1.6", "marginBottom": "20px" }}>{s('mission').description || ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Vision/Mission Cards End */}

    {/*About One Start*/}
    <section class="about-one" style={{ "backgroundColor": "var(--eduvers-black)" }}>
        <div class="container-fluid px-0" >
            <div class="row g-0 align-items-stretch">
                <div class="col-xl-6 col-lg-6">
                    <img src={img('director') || '/assets/images/about/director.png'} alt="" style={{ "width": "90%", "height": "100%", "minHeight": "600px", "objectFit": "cover" }} />
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="about-one__right" style={{ "backgroundColor": "transparent", "padding": "40px 20px", "maxWidth": "660px", "margin": "0 auto 0 0" }}>
                        <div class="section-title text-left sec-title-animation animation-style2">
                            <div class="section-title__tagline-box">
                                <div class="section-title__tagline-shape"></div>
                                <div class="section-title__tagline-shape-2"></div>
                                <span class="section-title__tagline">{s('director').subtitle || 'Managing Director'}</span>
                            </div>
                            <h2 class="section-title__title title-animation">{s('director').title || 'Mr. Kumaravel Pandurangan'}</h2>
                        </div>
                        <p class="about-one__text">{s('director').description || ''}</p>

                        <div class="about-one__points-box">
                            <ul class="about-one__points list-unstyled">
                                <li>
                                    <div class="icon"><span class="icon-check-mark"></span></div>
                                    <h3>{dirPts[0]}</h3>
                                </li>
                                <li>
                                    <div class="icon"><span class="icon-check-mark"></span></div>
                                    <h3>{dirPts[1]}</h3>
                                </li>
                            </ul>
                            <ul class="about-one__points list-unstyled">
                                <li>
                                    <div class="icon"><span class="icon-check-mark"></span></div>
                                    <h3>{dirPts[2]}</h3>
                                </li>
                                <li>
                                    <div class="icon"><span class="icon-check-mark"></span></div>
                                    <h3>{dirPts[3]}</h3>
                                </li>
                            </ul>
                        </div>
                        <div class="about-one__btn-and-video">
                            <div class="about-one__btn-box">
                                <a href={dirSet.brochure_link || 'https://www.vact-tech.com/wp-content/uploads/2021/06/Vact-brochure-High.pdf'} class="thm-btn">Download Digital Brochure<span class="fas fa-arrow-right"></span></a>
                            </div>
                            <div class="about-one__video-link">
                                <a href={dirSet.linkedin_url || 'https://www.linkedin.com/in/kumaravelpandurangan/'} target="_blank">
                                    <div class="about-one__video-icon">
                                        <span class="fab fa-linkedin-in"></span>
                                        <i class="ripple"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*About One End*/}

    {/*Testimonials Two Start */}
    <section class="testimonial-two">
        <div class="container">
            <div class="section-title text-left sec-title-animation animation-style2">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Testimonial</span>
                </div>
                <h2 class="section-title__title title-animation">Trusted by Global<br />Product <span>Development Companies</span></h2>
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
                                        <p class="testimonial-two__text">{s('testimonial-1').description || ''}</p>
                                        <div class="testimonial-two__client-info">
                                            <div class="testimonial-two__client-img">
                                                <img src={img('testimonial-1') || '/assets/images/testimonial/testimonial-one-img-1.jpg'} alt="" />
                                            </div>
                                            <div class="testimonial-two__client-content">
                                                <h3><a href="#">{s('testimonial-1').title || 'Saravanan G'}</a></h3>
                                                <p>{s('testimonial-1').subtitle || 'CEO, Tech Innovations'}</p>
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
                                        <p class="testimonial-two__text">{s('testimonial-2').description || ''}</p>
                                        <div class="testimonial-two__client-info">
                                            <div class="testimonial-two__client-img">
                                                <img src={img('testimonial-2') || '/assets/images/testimonial/testimonial-2-1.jpg'} alt="" />
                                            </div>
                                            <div class="testimonial-two__client-content">
                                                <h3><a href="#">{s('testimonial-2').title || 'Priya M'}</a></h3>
                                                <p>{s('testimonial-2').subtitle || 'HR Manager, AutoComponents Ltd'}</p>
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
                                        <p class="testimonial-two__text">{s('testimonial-3').description || ''}</p>
                                        <div class="testimonial-two__client-info">
                                            <div class="testimonial-two__client-img">
                                                <img src={img('testimonial-3') || '/assets/images/testimonial/testimonial-2-2.jpg'} alt="" />
                                            </div>
                                            <div class="testimonial-two__client-content">
                                                <h3><a href="#">{s('testimonial-3').title || 'Ramesh K'}</a></h3>
                                                <p>{s('testimonial-3').subtitle || 'Director, GreenEnergy Solutions'}</p>
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
                                        <p class="testimonial-two__text">{s('testimonial-4').description || ''}</p>
                                        <div class="testimonial-two__client-info">
                                            <div class="testimonial-two__client-img">
                                                <img src={img('testimonial-4') || '/assets/images/testimonial/testimonial-4-1.jpg'} alt="" />
                                            </div>
                                            <div class="testimonial-two__client-content">
                                                <h3><a href="#">{s('testimonial-4').title || 'Anita S'}</a></h3>
                                                <p>{s('testimonial-4').subtitle || 'CTO, AutoTech Systems'}</p>
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
    <script src="/assets/js/script.js?v=3"></script>
        </MainLayout>
    );
}
