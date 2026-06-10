import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ sliders, contents, products, services, placements, partners, clients, blogs, faqs, testimonials }) {
    const s = (key) => contents?.[key] || {};
    const hc = s('home-company');
    const hcs = hc.settings || {};
    const hf = s('home-features');
    const hfPoints = hf.points || [
        { title: "Our Products", link: "#products", icon: "icon-open-book" },
        { title: "Our Services", link: "#services", icon: "icon-plant" },
        { title: "Trainings", link: "#training", icon: "icon-agenda" },
        { title: "Contact Us", link: "/contact", icon: "icon-online-learning" }
    ];
    const he = s('home-enterprise');
    const hes = he.settings || {};
    const ht = s('home-training');
    const hts = ht.settings || {};
    const hw = s('home-why-choose');
    const hws = hw.settings || {};
    const hwPoints = hw.points || [
        { title: "Industry Expertise", text: "Pioneering Solutions for Automotive Giants", icon: "fal fa-users" },
        { title: "Comprehensive IT/ITES Services", text: "Technologically Diverse Embedded Solutions by Expert Technocrats", icon: "fas fa-laptop-code" },
        { title: "Embedded Solutions", text: "Advanced Engineering and Embedded Technologies", icon: "fas fa-microchip" },
        { title: "Expert Technocrats", text: "Skilled experts delivering innovative technology solutions. Experienced professionals across various domains", icon: "fas fa-users-cog" }
    ];
    const hp = s('home-process');
    const hpPoints = hp.points || [
        { step: 1, title: "Visit Our Page", icon: "icon-user", shape: "/assets/images/shapes/process-one-shape-1.png" },
        { step: 2, title: "Select Your Course", icon: "icon-open-book", shape: "/assets/images/shapes/process-one-shape-2.png" },
        { step: 3, title: "Complete Training", icon: "icon-graduation-cap", shape: "/assets/images/shapes/process-one-shape-1.png" },
        { step: 4, title: "Placement Assistance", icon: "fas fa-user-tie", shape: "/assets/images/shapes/process-one-shape-2.png" },
        { step: 5, title: "Start Your Career", icon: "fas fa-briefcase", shape: "" }
    ];
    
    const clientPairs = [];
    if (clients) {
        for (let i = 0; i < clients.length; i += 2) {
            clientPairs.push(clients.slice(i, i + 2));
        }
    }
    
    const faqChunks = [];
    if (faqs) {
        for (let i = 0; i < faqs.length; i += 5) {
            faqChunks.push(faqs.slice(i, i + 5));
        }
    }
    return (
        <MainLayout>
            <Head title="Index" />
            
{/*Main Slider Start*/}
        <section class="main-slider" style={{ "marginTop": "50px" }}>
            <div class="swiper-container main-slider__carousel">
                <div class="swiper-wrapper">

                    {sliders.map((slider) => (
                    <div key={slider.id} class="swiper-slide">
                        <div class="main-slider__bg"
                            style={{ backgroundImage: `url(/storage/${slider.bg_image})` }}></div>
                        <div class="main-slider__shape-1"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-12">
                                    <div class="main-slider__content">
                                        {slider.subtitle && <h4 class="main-slider__sub-title">{slider.subtitle}</h4>}
                                        <h2 class="main-slider__title">{slider.title}</h2>
                                        {slider.description && <p class="main-slider__text">{slider.description}</p>}
                                        <div class="main-slider__btn-and-review-box">
                                            {slider.btn_text && slider.btn_link && (
                                            <div class="main-slider__btn-box">
                                                <a href={slider.btn_link} class="thm-btn">{slider.btn_text}<span
                                                        class="fas fa-arrow-right"></span></a>
                                            </div>
                                            )}
                                            <div class="main-slider__review-box">
                                                <ul class="clearfix">
                                                    <li>
                                                        <div class="img-box"><img
                                                                src="/assets/images/resources/main-slider-student-1-1.jpg"
                                                                alt="#" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="img-box"><img
                                                                src="/assets/images/resources/main-slider-student-1-2.jpg"
                                                                alt="#" />
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="img-box"><img
                                                                src="/assets/images/resources/main-slider-student-1-3.jpg"
                                                                alt="#" />
                                                        </div>
                                                    </li>
                                                </ul>

                                                <div class="text-box">
                                                    <h3>Active Student</h3>
                                                    <div class="student-count">
                                                        <p class="odometer" data-count="125"></p>
                                                        <span class="plus-letter-text">k+ over the world</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {slider.slide_image && (
                                        <div class="main-slider__img-box">
                                            <div class="main-slider__img-shape-1"></div>
                                            <div class="main-slider__img-shape-2"></div>
                                            <div class="main-slider__img-shape-3"></div>
                                            <div class="main-slider__img">
                                                <img src={`/storage/${slider.slide_image}`} alt="" />
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}

                </div>

                <div class="swiper-pagination" id="main-slider-pagination"></div>
                {/* If we need navigation buttons */}

            </div>
        </section>
        {/*Main Slider End*/}

        {/*Feature Two Start*/}
        <section class="feature-two">
            <div class="container">
                <div class="feature-two__inner">
                    <ul class="feature-two__list">
                        {hfPoints.map((point, index) => (
                            <li key={index}>
                                <a href={point.link || '#'}>
                                    <div class="feature-two__single">
                                        <div class="feature-two__icon">
                                            <span class={point.icon || 'icon-open-book'}></span>
                                        </div>
                                        <div class="feature-two__content">
                                            <h3 class="feature-two__title">{point.title}</h3>
                                            <div class="feature-two__read-more">
                                                {point.btn_text || 'Read More'} <span class="fas fa-arrow-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
        {/*Feature Two End*/}

        {/*About Two Start*/}
        <section class="about-two">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div class="about-two__left">
                            <div class="about-two__img-box">
                                <div class="about-two__img">
                                    <img src={hc.image ? `/storage/${hc.image}` : '/assets/images/resources/about-two-img-1.jpg'} alt="" />
                                    <div class="about-two__video-link">
                                        <a href={hcs.video_url || 'https://www.youtube.com/watch?v=Get7rqXYrbQ'} class="video-popup">
                                            <div class="about-two__video-icon">
                                                <span class="fa fa-play"></span>
                                                <i class="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="about-two__award-box">
                                        <div class="about-two__award-icon">
                                            <span class="icon-trophy"></span>
                                        </div>
                                        <div class="about-two__award-content">
                                            <div class="about-two__award-count">
                                                <h3 class="odometer" data-count={hcs.stat_placements || 100}>00</h3>
                                                <span>{hcs.stat_placements_suffix || '%'}</span>
                                            </div>
                                            <p class="about-two__award-text">{hcs.stat_placements_label || 'Placements'}</p>
                                        </div>
                                    </div>
                                    <div class="about-two__happy-student">
                                        <div class="about-two__happy-student-count">
                                            <h3 class="odometer" data-count={hcs.stat_years || 15}>00</h3>
                                            <span>{hcs.stat_years_label || 'Years'}</span>
                                            <span>{hcs.stat_years_suffix || '+'}</span>
                                        </div>
                                        <p class="about-two__happy-student-text">{hcs.stat_years_text || 'Experience'}</p>
                                    </div>
                                </div>
                                <div class="about-two__img-2">
                                    <img src={hc.image2 ? `/storage/${hc.image2}` : '/assets/images/resources/about-two-img-2.jpg'} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6">
                        <div class="about-two__right">
                            <div class="section-title text-left sec-title-animation animation-style2">
                                <div class="section-title__tagline-box">
                                    <div class="section-title__tagline-shape"></div>
                                    <div class="section-title__tagline-shape-2"></div>
                                    <span class="section-title__tagline">{hc.subtitle || 'OUR COMPANY'}</span>
                                </div>
                                <h2 class="section-title__title title-animation">{hc.title || 'Committed to Engineering Excellence and Innovation'}</h2>
                            </div>
                            <p class="about-two__text">{hc.description || ''}</p>
                            {hc.extra_heading && (
                                <h3 class="about-two__btg-text">{hc.extra_heading}<span>........</span></h3>
                            )}
                            {hc.points && hc.points.length > 0 && (
                                <div class="about-two__points-box-inner">
                                    <ul class="about-two__points-box">
                                        {hc.points.slice(0, 2).map((pt, i) => (
                                            <li key={i}>
                                                <div class="icon"><span class="icon-check-mark"></span></div>
                                                <div class="content"><h3>{pt}</h3></div>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul class="about-two__points-box">
                                        {hc.points.slice(2, 4).map((pt, i) => (
                                            <li key={i}>
                                                <div class="icon"><span class="icon-check-mark"></span></div>
                                                <div class="content"><h3>{pt}</h3></div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div class="about-two__btn-box">
                                <a href={hcs.btn_link || '/about'} class="thm-btn">{hcs.btn_text || 'More About Us'} <span
                                        class="fas fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Two End*/}



        {/*Enterprise Plan Start*/}
        <section class="enterprise-plan">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 wow fadeInLeft" data-wow-delay="100ms">
                        <div class="enterprise-plan__left">
                            <div class="section-title text-left sec-title-animation animation-style2">
                                <div class="section-title__tagline-box">
                                    <div class="section-title__tagline-shape"></div>
                                    <div class="section-title__tagline-shape-2"></div>
                                    <span class="section-title__tagline">{he.subtitle || 'WHO WE ARE'}</span>
                                </div>
                                <h2 class="section-title__title title-animation">
                                    {he.title || 'More Than 15 years of Excellence in'}
                                    {he.extra_heading ? <span> {he.extra_heading}</span> : <span> Embedded Solutions</span>}
                                </h2>
                            </div>
                            {he.description && (
                                <div class="enterprise-plan__text-box">
                                    <h3 style={{ "fontSize": "20px" }}>
                                        {he.description}
                                    </h3>
                                </div>
                            )}
                            <ul class="enterprise-plan__points">
                                {(he.points || ["Industry Expertise", "Trusted Tier 1 & Tier 2 Partner", "Skilled Engineering Team"]).map((pt, i) => (
                                    <li key={i}>
                                        <div class="icon">
                                            <span class="icon-check-mark"></span>
                                        </div>
                                        <p>{pt}</p>
                                    </li>
                                ))}
                            </ul>
                            <div class="enterprise-plan__btn-box">
                                <a href={hes.btn_link || "/contact"} class="thm-btn">{hes.btn_text || 'Get In Touch'}<span class="fas fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-7 wow fadeInRight" data-wow-delay="200ms">
                        <div class="enterprise-plan__right">
                            <div class="enterprise-plan__right-top">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="enterprise-plan__img">
                                            <img src={he.image ? `/storage/${he.image}` : "/assets/images/resources/enterprise-plan-img-1.jpg"} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="enterprise-plan__img">
                                            <img src={he.image2 ? `/storage/${he.image2}` : "/assets/images/resources/enterprise-plan-img-2.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="enterprise-plan__right-bottom">
                                <div class="row">
                                    {/*Enterprise Plan Single Start*/}
                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div class="enterprise-plan__counter-single">
                                            <div class="enterprise-plan__counter-count">
                                                <h3 class="odometer" data-count={hes.years_exp || 15}>00</h3>
                                                <span>+</span>
                                            </div>
                                            <p class="enterprise-plan__counter-count-text">{hes.years_exp_text || 'Years Experiences'}</p>
                                        </div>
                                    </div>
                                    {/*Enterprise Plan Single End*/}
                                    {/*Enterprise Plan Single Start*/}
                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div class="enterprise-plan__counter-single">
                                            <div class="enterprise-plan__counter-count">
                                                <h3 class="odometer" data-count={hes.associates || 75}>00</h3>
                                                <span>+</span>
                                            </div>
                                            <p class="enterprise-plan__counter-count-text">{hes.associates_text || 'Associates'}</p>
                                        </div>
                                    </div>
                                    {/*Enterprise Plan Single End*/}
                                    {/*Enterprise Plan Single Start*/}
                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div class="enterprise-plan__counter-single">
                                            <div class="enterprise-plan__counter-count">
                                                <h3 class="odometer" data-count={hes.active_clients || 12}>00</h3>
                                                <span>+</span>
                                            </div>
                                            <p class="enterprise-plan__counter-count-text">{hes.active_clients_text || 'Active Clients'}</p>
                                        </div>
                                    </div>
                                    {/*Enterprise Plan Single End*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Enterprise Plan End*/}

        {/*Courses One Start*/}
        <section class="courses-one pb-5" id="products">
            <div class="courses-one__bg-color">
                <div class="courses-one__bg-shape"
                    style={{ backgroundImage: "url(assets/images/shapes/courses-one-bg-shape.png)" }}></div>
            </div>
            <div class="container">
                <div class="courses-one__top">
                    <div class="section-title text-left sec-title-animation animation-style2">
                        <div class="section-title__tagline-box">
                            <div class="section-title__tagline-shape"></div>
                            <div class="section-title__tagline-shape-2"></div>
                            <span class="section-title__tagline">Our Product </span>
                        </div>
                        <h2 class="section-title__title title-animation">Innovative <span>Product</span> Range for
                            Industrial Growth </h2>
                    </div>
                </div>
                <div class="courses-one__carousel owl-carousel owl-theme pt-0 mt-0">
                    {products.map((product) => (
                        <div key={product.id} class="item">
                            <div class="courses-one__single">
                                <div class="courses-one__img-box">
                                    <div class="courses-one__img">
                                        <img src={product.image ? (product.image.startsWith('assets/') || product.image.startsWith('http') ? product.image : `/storage/${product.image}`) : "/assets/images/product/product13.png"} alt="" />
                                    </div>
                                    <div class="courses-one__btn-box">
                                        <a href={product.link || '#'} class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                    </div>
                                </div>
                                <div class="courses-one__content">
                                    <div class="courses-one__ratting-and-price">
                                        <div class="courses-one__ratting-box">
                                            <span class="courses-one__ratting-text">{product.rating || '5.0'} ({product.rating_count || '0'})</span>
                                        </div>
                                        <div class="courses-one__price">
                                            <div class="courses-one__ratting">
                                                {Array.from({ length: Math.round(product.rating || 5) }).map((_, i) => (
                                                    <span key={i} class="fas fa-star"></span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <p class="courses-one__sub-title">{product.category || 'Embedded Systems'}</p>
                                    <h3 class="courses-one__title"><a href={product.link || '#'}>{product.title}</a></h3>
                                    <p class="courses-one__text">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    </section>
    {/*Courses One End*/}


    {/*Research One Start */}
    <section class="research-one" style={{ "paddingTop": "50px", "paddingBottom": "120px", "marginBottom": "0px" }} id="services">
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">OUR SERVICES</span>
                </div>
                <h2 class="section-title__title title-animation mt-2" style={{ "fontSize": "clamp(18px, 2.2vw, 32px)", "whiteSpace": "nowrap" }}>What <span>Services</span> Do We Provide for Our Customers' Businesses?</h2>
                <p class="mt-3">VAct Technologies has extensive experience in Embedded Automotive to develop a real-time complex solution. VAct Technologies is also committed to providing quality and latest solutions in customized software, testing</p>
            </div>
            <div class="research-one__inner">
                <div class="row">
                    {services.map((service, index) => (
                        <div key={service.id} class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                            <div class="research-one__single">
                                <div class="research-one__img-box">
                                    <div class="research-one__img">
                                        <img src={service.image ? (service.image.startsWith('assets/') || service.image.startsWith('http') ? service.image : `/storage/${service.image}`) : `/assets/images/services/services${index + 1}.png`} alt="" />
                                    </div>
                                </div>
                                <div class="research-one__content">
                                    <div class="research-one__icon">
                                        <span class={service.icon || 'fa fa-cog'}></span>
                                    </div>
                                    <h3 class="research-one__title" style={{ "whiteSpace": "normal" }}><a href={service.link || '#'}>{service.title}</a></h3>
                                    <p class="research-one__text">{service.description}</p>
                                    <div class="mt-3 text-left">
                                        <a href={service.link || '#'} class="thm-btn" style={{ "padding": "10px 25px", "fontSize": "14px" }}>Read More <span class="fas fa-arrow-right" style={{ "fontSize": "12px", "marginLeft": "5px" }}></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    {/*Research One End */}

    {/*About One Start*/}
    <section class="about-one" style={{ "backgroundColor": "var(--eduvers-black)", "paddingTop": "0px", "paddingBottom": "0px", "marginTop": "0px", "minHeight": "100vh", "display": "flex", "flexDirection": "column" }} id="training">
        <div class="container-fluid px-0" style={{ "flex": "1", "display": "flex", "flexDirection": "column" }}>
            <div class="row g-0 align-items-stretch" style={{ "flex": "1", "minHeight": "100vh" }}>
                <div class="col-xl-6 col-lg-6">
                    <img src={ht.image ? `/storage/${ht.image}` : "/assets/images/backgrounds/about-one-bg1.jpeg"} alt=""
                        style={{ "width": "100%", "height": "100%", "minHeight": "100vh", "objectFit": "cover" }} />
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="about-one__right"
                        style={{ "backgroundColor": "transparent", "padding": "50px 40px", "maxWidth": "660px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "justifyContent": "center", "minHeight": "100vh" }}>

                        <div class="section-title text-left sec-title-animation animation-style2">
                            <div class="section-title__tagline-shape mb-3">
                                <div class="section-title__tagline-shape"></div>
                                <div class="section-title__tagline-shape-2"></div>
                                <span class="section-title__tagline">{ht.subtitle || 'Our Quality Training'}</span>
                            </div>
                            <h2 class="section-title__title title-animation">
                                {ht.title || 'Comprehensive Technical Training Program:'}
                                <span>{ht.extra_heading || 'From Basics to Industry-Ready Expertise'}</span>
                            </h2>
                        </div>
                        {ht.description && <p class="about-one__text">{ht.description}</p>}
                        {ht.extra_heading && (
                            <h3 class="about-one__text-2">
                                <span class="icon-graduate"></span>
                                {ht.extra_heading}
                            </h3>
                        )}
                        <div class="about-one__points-box">
                            {ht.points && ht.points.length > 0 && (
                                <>
                                    <ul class="about-one__points list-unstyled">
                                        {ht.points.slice(0, 2).map((pt, i) => (
                                            <li key={i} class={i > 0 ? "mt-4" : ""}>
                                                <div class="icon">
                                                    <span class="icon-check-mark"></span>
                                                </div>
                                                <h3>{pt}</h3>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul class="about-one__points list-unstyled">
                                        {ht.points.slice(2, 4).map((pt, i) => (
                                            <li key={i} class={i > 0 ? "mt-4" : ""}>
                                                <div class="icon">
                                                    <span class="icon-check-mark"></span>
                                                </div>
                                                <h3>{pt}</h3>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                        <div class="about-one__btn-and-video mt-3">
                            <div class="about-one__btn-box">
                                <a href={hts.btn_link || "/coursedetails"} class="thm-btn">{hts.btn_text || 'More About Us'}<span class="fas fa-arrow-right"></span></a>
                            </div>
                            <div class="about-one__video-link">
                                <a href={hts.video_url || "https://www.youtube.com/watch?v=C-qtY1kkK1E&list=PLATggQvVzwnuHqa_WQ3fNrbmWp5aVeTKI"} class="video-popup">
                                    <div class="about-one__video-icon">
                                        <span class="fa fa-play"></span>
                                        <i class="ripple"></i>
                                    </div>
                                </a>
                                <h4 class="about-one__video-title">{hts.video_title || 'Watch Video'}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*About One End*/}


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
                    {placements.map((placement) => (
                        <div key={placement.id} class="col-lg-4 col-md-6 mb-4">
                            <div class="testimonial-four__single">
                                <div class="testimonial-four__single-shape-1"></div>
                                <div class="testimonial-four__single-inner">
                                    <div class="testimonial-four__client-info">
                                        <div class="testimonial-four__client-info-shape-1"></div>
                                        <div class="testimonial-four__client-img">
                                            <img src={placement.image ? (placement.image.startsWith('assets/') || placement.image.startsWith('http') ? placement.image : `/storage/${placement.image}`) : "/assets/images/placements/default.png"} alt="" />
                                        </div>
                                        <div class="testimonial-four__client-content">
                                            <h3 class="testimonial-four__client-name"><a href="#">{placement.name}</a></h3>
                                            <p class="testimonial-four__sub-title" dangerouslySetInnerHTML={{ __html: placement.role }}></p>
                                        </div>
                                    </div>
                                    <div class="testimonial-four__content-box">
                                        <div class="testimonial-four__content-box-shape-1"></div>
                                        <h3 class="testimonial-four__content-title"><span>{placement.company || 'Our Associates'}</span><br /></h3>
                                        <p class="testimonial-four__text">{placement.text}</p>
                                        <div class="testimonial-four__quote">
                                            <span class="fas fa-quote-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    {/*Testimonial Four End*/}

    {/*Start Brand Two*/}
    <section class="brand-two">
        <div class="container">
            <div class="brand-two__carousel owl-carousel owl-theme">
                {partners.map((partner) => (
                    <div key={partner.id} class="brand-two__single">
                        <div class="brand-two__single-inner">
                            <a href={partner.link || '#'}><img src={partner.logo ? (partner.logo.startsWith('assets/') || partner.logo.startsWith('http') ? partner.logo : `/storage/${partner.logo}`) : "/assets/images/career-partners/default.png"} alt={partner.name || ""} /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    {/*End Brand Two*/}

    {/*Brand One Start*/}
    <section class="brand-one">
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Our Clients</span>
                </div>
                <h2 class="section-title__title title-animation">Working with top companies<br /> around the
                    <span>world</span>
                </h2>
            </div>
            <div class="brand-one__inner">
                <div class="brand-one__carousel owl-carousel owl-theme">
                    {clientPairs.map((pair, index) => (
                        <div key={index} class="brand-one__slide-col">
                            {pair.map((client) => (
                                <div key={client.id} class="brand-one__carousel-item">
                                    <a href={client.link || '#'}>
                                        <div class="brand-one__single">
                                            <div class="brand-one__img">
                                                <img src={client.logo ? (client.logo.startsWith('assets/') || client.logo.startsWith('http') ? client.logo : `/storage/${client.logo}`) : "/assets/images/career-partners/default.png"} alt={client.name || ""} />
                                            </div>
                                        </div>
                                    </a>
                                    <div class="brand-one__shape-3"></div>
                                    <div class="brand-one__shape-4"></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    {/*Brand One End*/}

    <section class="why-choose-one">
        <div class="why-choose-one__bg" style={{ backgroundImage: "url(assets/images/backgrounds/why-choose-one-bg.jpg)" }}>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-4">
                    <div class="why-choose-one__left">
                        <div class="section-title text-left sec-title-animation animation-style2">
                            <div class="section-title__tagline-box">
                                <div class="section-title__tagline-shape"></div>
                                <div class="section-title__tagline-shape-2"></div>
                                <span class="section-title__tagline">Why Choose us</span>
                            </div>
                            <h2 class="section-title__title title-animation">
                                {hw.title || 'Driving Innovation in IT &'}
                                {hw.subtitle ? <span> {hw.subtitle}</span> : <span> Embedded Solutions</span>}
                            </h2>
                        </div>
                        <p class="why-choose-one__text">{hw.description || 'VAct Technologies (ISO 9001:2015 certified) established in 2007 is providing IT/engineering solutions to many automobile OEMs and Tier 1 companies in India. VACT also provides IT/ITES Services that specialize in providing diverse embedded solutions managed by technocrats with expertise in various domains.'}</p>
                        <div class="why-choose-one__btn-box">
                            <a href={hws.btn_link || "/contact"} class="thm-btn">{hws.btn_text || 'Enroll Now'}<span class="fas fa-arrow-right"></span></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="why-choose-one__right">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4">
                                {hwPoints.slice(0, 2).map((pt, i) => (
                                    <div key={i} class="why-choose-one__single">
                                        <div class="why-choose-one__icon">
                                            <span class={pt.icon || 'fal fa-users'}></span>
                                        </div>
                                        <h3 class="why-choose-one__title">{pt.title}</h3>
                                        <p class="why-choose-one__single-text">{pt.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div class="col-xl-4 col-lg-4 mt-5 pt-4">
                                <div class="why-choose-one__single-img">
                                    <div class="why-choose-one__single-img-shape mb-4"></div>
                                    <img src={hw.image ? `/storage/${hw.image}` : "/assets/images/resources/why.png.jpeg"} alt="" />
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                {hwPoints.slice(2, 4).map((pt, i) => (
                                    <div key={i} class="why-choose-one__single">
                                        <div class="why-choose-one__icon">
                                            <span class={pt.icon || 'fal fa-users'}></span>
                                        </div>
                                        <h3 class="why-choose-one__title">{pt.title}</h3>
                                        <p class="why-choose-one__single-text">{pt.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/*Process One Start*/}
    <section class="process-one">
        <div class="process-one__bg-shape"
            style={{ backgroundImage: "url(assets/images/shapes/process-one-bg-shape.png)" }}></div>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">{hp.subtitle || 'How It Works'}</span>
                </div>
                <h2 class="section-title__title title-animation">
                    {hp.title || 'Your Gateway to Success'}
                </h2>
            </div>
            <ul>
                {hpPoints.map((point, index) => {
                    const stepNum = index + 1;
                    const isEven = stepNum % 2 === 0;
                    const shapeImg = point.shape || (isEven ? "/assets/images/shapes/process-one-shape-2.png" : "/assets/images/shapes/process-one-shape-1.png");
                    const shapeClass = isEven ? "process-one__shape-2" : "process-one__shape-1";
                    const extraStyle = stepNum === 4 ? { "marginLeft": "-20px" } : {};
                    
                    return (
                        <li key={index}>
                            <div class="process-one__single" style={extraStyle}>
                                {shapeImg && (
                                    <div class={shapeClass}>
                                        <img src={shapeImg} alt="" />
                                    </div>
                                )}
                                
                                {!isEven && (
                                    <div class="process-one__icon">
                                        <span class={point.icon}></span>
                                    </div>
                                )}
                                
                                <div class="process-one__content">
                                    <div class="process-one__count-box">
                                        <div class="process-one__count-text">
                                            <p>Step</p>
                                        </div>
                                        <div class="process-one__count"></div>
                                    </div>
                                    <h3 class="process-one__title">{point.title}</h3>
                                </div>
                                
                                {isEven && (
                                    <div class="process-one__icon">
                                        <span class={point.icon}></span>
                                    </div>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </section>
    {/*Process One End*/}
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
                {blogs.map((blog, index) => {
                    const pubDate = blog.published_at ? new Date(blog.published_at) : new Date(blog.created_at);
                    const formattedDate = pubDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                    const formattedMetaDate = pubDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                    
                    const delay = `${(index + 1) * 100}ms`;
                    const wowClass = index === 0 ? "wow fadeInLeft" : (index === 1 ? "wow fadeInUp" : "wow fadeInRight");
                    
                    return (
                        <div key={blog.id} class={`col-xl-4 col-lg-6 ${wowClass}`} data-wow-delay={delay}>
                            <div class="blog-one__single">
                                <div class="blog-one__img">
                                    <img src={blog.image ? (blog.image.startsWith('assets/') || blog.image.startsWith('http') ? blog.image : `/storage/${blog.image}`) : `/assets/images/blogs/blog${index + 1}.png`} alt="" />
                                    <div class="blog-one__plus">
                                        <a href={`/blogdetails?slug=${blog.slug}`}><i class="icon-plus"></i></a>
                                    </div>
                                    <div class="blog-one__tag">
                                        <a href={`/blogdetails?slug=${blog.slug}`}>VAct Blog</a>
                                    </div>
                                </div>
                                <div class="blog-one__content">
                                    <ul class="blog-one__meta list-unstyled">
                                        <li>
                                            <a href="#">
                                                <span class="fas fa-calendar-alt"></span>{formattedDate}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <span class="fas fa-comments"></span>Comment
                                            </a>
                                        </li>
                                    </ul>
                                    <h3 class="blog-one__title"><a href={`/blogdetails?slug=${blog.slug}`}>{blog.title}</a></h3>
                                    <div class="blog-one__author-and-btn">
                                        <div class="blog-one__author-info">
                                            <div class="blog-one__author-img-box">
                                                <div class="blog-one__author-img">
                                                    <img src={`/assets/images/blog/blog-one-author-img-${(index % 3) + 1}.jpg`} alt="" />
                                                </div>
                                            </div>
                                            <div class="blog-one__author-content">
                                                <h4>{blog.author || 'V-Act Team'}</h4>
                                                <p>{formattedMetaDate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
    {/* Blog One End */}

    {/* FAQ One Start */}
    <section class="faq-one pt-5 pb-2">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-5">
                    <div class="faq-one__left">
                        <div class="section-title text-left sec-title-animation animation-style2">
                            <div class="section-title__tagline-box">
                                <div class="section-title__tagline-shape"></div>
                                <div class="section-title__tagline-shape-2"></div>
                                <span class="section-title__tagline">faq</span>
                            </div>
                            <h2 class="section-title__title title-animation">Frequently Asked 
                                <span>Question</span>
                            </h2>
                        </div>
                        <div class="faq-one__img">
                            <img src="/assets/images/resources/faq.png" alt="" />
                            <div class="faq-one__experience-box">
                                <div class="faq-one__experience-year">
                                    <h3 class="odometer" data-count="15">00</h3>
                                </div>
                                <p class="faq-one__experience-text">Years of <br /> experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                    <div class="faq-one__right">
                        <div class="accrodion-grp faq-one__carousel owl-carousel owl-theme"
                            data-grp-name="faq-one-accrodion">
                            {faqChunks.map((chunk, chunkIdx) => (
                                <div key={chunkIdx} class="item">
                                    {chunk.map((faq, faqIdx) => {
                                        const isActive = chunkIdx === 0 && faqIdx === 1;
                                        const delay = `${faqIdx * 100}ms`;
                                        const wowClass = faqIdx % 2 === 0 ? "wow fadeInLeft" : "wow fadeInRight";
                                        
                                        return (
                                            <div key={faq.id} class={`accrodion ${isActive ? 'active' : ''} ${wowClass}`} data-wow-delay={delay} data-wow-duration="1500ms">
                                                <div class="accrodion-title">
                                                    <h4>{faq.question}</h4>
                                                </div>
                                                <div class="accrodion-content">
                                                    <div class="inner">
                                                        <p>{faq.answer}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* FAQ One End */}





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
                    {testimonials.map((review) => (
                        <div key={review.id} class="item">
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
                                            {Array.from({ length: review.rating || 5 }).map((_, i) => (
                                                <span key={i} class="fas fa-star"></span>
                                            ))}
                                        </div>
                                    </div>
                                    <p class="testimonial-two__text">{review.text}</p>
                                    <div class="testimonial-two__client-info">
                                        <div class="testimonial-two__client-img">
                                            <img src={review.image ? (review.image.startsWith('assets/') || review.image.startsWith('http') ? review.image : `/storage/${review.image}`) : "/assets/images/testimonial/default.png"} alt="" />
                                        </div>
                                        <div class="testimonial-two__client-content">
                                            <h3><a href="#">{review.name}</a></h3>
                                            <p>{review.role}</p>
                                        </div>
                                    </div>
                                    <div class="testimonial-two__quote">
                                        <i class="fas fa-quote-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    {/*Testimonials Two End */}
        </MainLayout>
    );
}
