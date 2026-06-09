import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

const BENEFIT_SVGS = [
    <svg key={0} viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="48" width="10" height="20" rx="1" fill="#bae6fd" />
        <circle cx="25" cy="53" r="1" fill="#ffffff" />
        <circle cx="25" cy="58" r="1" fill="#ffffff" />
        <circle cx="25" cy="63" r="1" fill="#ffffff" />
        <rect x="34" y="36" width="10" height="32" rx="1" fill="#60a5fa" />
        <circle cx="39" cy="41" r="1" fill="#ffffff" />
        <circle cx="39" cy="46" r="1" fill="#ffffff" />
        <circle cx="39" cy="51" r="1" fill="#ffffff" />
        <circle cx="39" cy="56" r="1" fill="#ffffff" />
        <circle cx="39" cy="61" r="1" fill="#ffffff" />
        <rect x="48" y="24" width="10" height="44" rx="1" fill="#2563eb" />
        <circle cx="53" cy="29" r="1" fill="#ffffff" />
        <circle cx="53" cy="34" r="1" fill="#ffffff" />
        <circle cx="53" cy="39" r="1" fill="#ffffff" />
        <circle cx="53" cy="44" r="1" fill="#ffffff" />
        <circle cx="53" cy="49" r="1" fill="#ffffff" />
        <circle cx="53" cy="54" r="1" fill="#ffffff" />
        <circle cx="53" cy="59" r="1" fill="#ffffff" />
        <g className="growth-arrow">
            <path d="M14 55 Q 35 32 60 18" stroke="#1e40af" stroke-width="4" stroke-linecap="round" fill="none" />
            <path d="M50 18H60V28" stroke="#1e40af" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>,
    <svg key={1} viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="32" height="42" rx="4" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
        <rect x="25" y="25" width="22" height="10" rx="1.5" fill="#eff6ff" />
        <rect x="25" y="40" width="5" height="4" rx="1" fill="#ffffff" />
        <rect x="33.5" y="40" width="5" height="4" rx="1" fill="#ffffff" />
        <rect x="42" y="40" width="5" height="4" rx="1" fill="#ffffff" />
        <rect x="25" y="47" width="5" height="4" rx="1" fill="#ffffff" />
        <rect x="33.5" y="47" width="5" height="4" rx="1" fill="#ffffff" />
        <rect x="42" y="47" width="5" height="4" rx="1" fill="#ffffff" />
        <rect x="25" y="54" width="5" height="4" rx="1" fill="#ffffff" />
        <rect x="33.5" y="54" width="5" height="4" rx="1" fill="#ffffff" />
        <rect x="42" y="54" width="5" height="4" rx="1" fill="#f59e0b" />
        <ellipse cx="55" cy="52" rx="9" ry="4" fill="#f59e0b" stroke="#d97706" stroke-width="1.5" />
        <ellipse cx="55" cy="48" rx="9" ry="4" fill="#fbbf24" stroke="#d97706" stroke-width="1.5" />
        <g className="coin-front">
            <circle cx="56" cy="40" r="10" fill="#f59e0b" stroke="#d97706" stroke-width="1.5" />
            <circle cx="56" cy="40" r="7" fill="#fbbf24" stroke="#d97706" stroke-width="1" />
            <text x="56" y="43.5" font-family="Arial" font-size="10" font-weight="bold" fill="#d97706" text-anchor="middle">$</text>
        </g>
    </svg>,
    <svg key={2} viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="28" fill="#e0f2fe" stroke="#0284c7" stroke-width="3" />
        <circle cx="40" cy="40" r="20" fill="#f0f9ff" stroke="#0284c7" stroke-width="2" />
        <circle cx="40" cy="40" r="12" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
        <circle cx="40" cy="40" r="5" fill="#0284c7" />
        <g className="target-arrow">
            <line x1="20" y1="60" x2="38" y2="42" stroke="#0f172a" stroke-width="3.5" stroke-linecap="round" />
            <path d="M17 63 L12 66 L15 57 Z" fill="#475569" />
            <path d="M17 63 L22 69 L25 61 Z" fill="#475569" />
            <polygon points="36,44 42,38 40,46" fill="#0284c7" />
        </g>
    </svg>,
    <svg key={3} viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="shield-badge">
            <path d="M40 12 C45 12 49 14 51 18 C51 26 45 32 40 35 C35 32 29 26 29 18 C31 14 35 12 40 12 Z" fill="#0284c7" />
            <path d="M36 21 L39 24 L44 19" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>
        <g className="handshake-arms">
            <path d="M16 54 L26 44 L30 48 L20 58 Z" fill="#0369a1" />
            <rect x="25" y="43" width="4" height="7" rx="1" fill="#bae6fd" transform="rotate(-45 25 43)" />
            <path d="M64 54 L54 44 L50 48 L60 58 Z" fill="#0284c7" />
            <rect x="51" y="41" width="4" height="7" rx="1" fill="#bae6fd" transform="rotate(45 51 41)" />
            <path d="M29 47 L39 39 C41 37 44 40 42 42 L34 50 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1" />
            <path d="M51 47 L41 39 C39 37 36 40 38 42 L46 50 Z" fill="#fbbf24" stroke="#d97706" stroke-width="1" />
            <path d="M36 45 C38 43 40 43 42 45 M38 48 C40 46 42 46 44 48" stroke="#d97706" stroke-width="1.5" stroke-linecap="round" />
        </g>
    </svg>,
];

const DELAYS = ['100ms', '200ms', '300ms', '400ms', '500ms', '600ms', '700ms', '800ms'];

const serviceIcons = [
    'fa-users-cog',
    'fa-microchip',
    'fa-code',
    'fa-memory',
    'fa-user-check',
    'fa-file-invoice-dollar',
    'fa-user-tie',
    'fa-handshake',
];

export default function EmbeddedOffshoreOutsourcing({ service }) {
    const s = service || {};
    const slides = (s.slides && s.slides.length > 0) ? s.slides : [
        { image: '/assets/images/services/engineering_excellence.png', heading: 'Offshore Embedded', highlight: 'Engineering Talent', description: 'Access a dedicated pool of highly qualified corporate embedded system developers. Scale your R&D projects seamlessly with our optimized offshore outsourcing packages, ensuring rapid development and excellent product delivery.' },
        { image: '/assets/images/services/services4.png', heading: 'Rigorous Testing', highlight: '& Quality Assurance', description: 'Deliver flawless, zero-defect products. Our offshore engineering team provides rigorous static analysis, unit-level validation, HIL testing, and standard certifications for medical, automotive, and defense sectors.' },
    ];

    const badge = s.badge || 'Offshore Outsourcing';
    const title = s.title || 'Embedded Offshore Outsourcing';
    const subtitle = s.subtitle || '';
    const description = s.description || 'Scale your engineering capacity instantly with our vetted offshore embedded teams. We provide dedicated engineers who work as a seamless extension of your in-house R&D.\n\nOur agile delivery model ensures transparent sprint cycles, daily stand-ups, and regular code reviews. We handle recruitment, infrastructure, and HR — you focus on product.\n\nAll code is delivered with full documentation, unit tests, and CI/CD pipelines. IP protection and NDAs are standard for every engagement.';
    const features = (s.features && s.features.length > 0) ? s.features : [
        { title: 'Dedicated Teams', description: 'Full-time dedicated embedded engineers for your projects.', icon: 'fa-users' },
        { title: 'Cost Effective', description: 'High quality development at competitive offshore rates.', icon: 'fa-dollar-sign' },
        { title: 'Agile Delivery', description: 'Scrum-based development with regular sprint deliveries.', icon: 'fa-sync-alt' },
    ];
    const benefitCards = s.page_data?.benefit_cards?.items || [
        { number: '01', title: 'Business Growth', description: 'Gaining additional momentum in providing complete services to customers through outsourcing.' },
        { number: '02', title: 'Cost Efficiency', description: 'Reduce operational costs and improve turnaround time with effective outsourcing solutions.' },
        { number: '03', title: 'Core Operations', description: 'Focus more on core business operations while outsourcing technical and support activities.' },
        { number: '04', title: 'Business Confidence', description: 'Building confidence in organizations to expand into new business opportunities successfully.' },
    ];
    const outsourcingServices = s.page_data?.outsourcing_services?.items || [
        { title: 'Dedicated Offshore Team', description: 'We provide skilled embedded professionals who work exclusively on your projects from our offshore development center. Our team ensures smooth communication, high productivity, and reliable technical support.', icon: 'fa-users-cog' },
        { title: 'PCB Design Services', description: 'Expert PCB design solutions are offered for embedded and electronic product development requirements. The designs are optimized for performance, durability, and industry standards.', icon: 'fa-microchip' },
        { title: 'Embedded Software Development', description: 'Our engineers develop high-quality embedded software for various hardware platforms and applications. We focus on stability, efficiency, and real-time system performance.', icon: 'fa-code' },
        { title: 'VLSI Development Support', description: 'We offer VLSI design and development services for advanced semiconductor and hardware projects. The team supports design verification, testing, and implementation processes.', icon: 'fa-memory' },
        { title: 'Candidate Profile Screening', description: 'Suitable candidate profiles are prepared based on your technical skills and experience requirements. Only qualified professionals are shortlisted to ensure the best hiring results.', icon: 'fa-user-check' },
        { title: 'Flexible Billing Model', description: 'Flexible monthly and project-based billing options are available according to your business needs. This model helps companies manage budgets efficiently without long-term risks.', icon: 'fa-file-invoice-dollar' },
        { title: 'Interview and Selection Process', description: 'Clients can directly interview shortlisted candidates before the final selection process. This ensures transparency and helps in choosing the right technical expert.', icon: 'fa-user-tie' },
        { title: 'Long-Term Business Relationship', description: 'Our outsourcing services are designed to build strong and long-term client partnerships. We focus on trust, quality service, and continuous technical support for business growth.', icon: 'fa-handshake' },
    ];

    const descParagraphs = description.split('\n').filter(Boolean);

    return (
        <MainLayout>
            <Head title="EmbeddedOffshoreOutsourcing" />
            <link rel="stylesheet" href="/assets/css/embedded-offshore-outsourcing.css" />
            <link rel="stylesheet" href="/assets/css/about.css" />

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

    <section className="outsourcing-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="outsourcing-left">
                        <span className="section-badge wow fadeInUp" data-wow-delay="100ms">
                            <i className="fas fa-users"></i>
                            {badge}
                        </span>
                        <h2 className="wow fadeInUp" data-wow-delay="200ms"
                            dangerouslySetInnerHTML={{ __html: title }} />
                        {descParagraphs.map((p, i) => (
                            <p key={i} className="wow fadeInUp" data-wow-delay={`${300 + i * 50}ms`}>
                                {p}
                            </p>
                        ))}
                        <div className="feature-box wow fadeInLeft" data-wow-delay="100ms">
                            {features.length > 0 && features[0] && (
                                <>
                                    <div className="feature-icon">
                                        <i className={'fas ' + features[0].icon}></i>
                                    </div>
                                    <div className="feature-divider"></div>
                                    <div className="feature-content">
                                        <h4>{features[0].title}</h4>
                                        <p>{features[0].description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="feature-box wow fadeInLeft" data-wow-delay="200ms">
                            {features.length > 1 && features[1] && (
                                <>
                                    <div className="feature-icon">
                                        <i className={'fas ' + features[1].icon}></i>
                                    </div>
                                    <div className="feature-divider"></div>
                                    <div className="feature-content">
                                        <h4>{features[1].title}</h4>
                                        <p>{features[1].description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="feature-box wow fadeInLeft" data-wow-delay="300ms">
                            {features.length > 2 && features[2] && (
                                <>
                                    <div className="feature-icon">
                                        <i className={'fas ' + features[2].icon}></i>
                                    </div>
                                    <div className="feature-divider"></div>
                                    <div className="feature-content">
                                        <h4>{features[2].title}</h4>
                                        <p>{features[2].description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="row">
                        {benefitCards.map((card, i) => (
                            <div key={i} className={'col-md-6 wow fadeInRight'} data-wow-delay={DELAYS[i]}>
                                <div className="service-card">
                                    <div className="card-number">{card.number}</div>
                                    <div className="card-icon">
                                        {BENEFIT_SVGS[i] || null}
                                    </div>
                                    <h3>{card.title}</h3>
                                    <div className="card-line"></div>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="department-one">
        <div className="department-one__bg-shape"
            style={{ backgroundImage: "url(assets/images/shapes/department-one-bg-shape.png)" }}></div>
        <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
                <h2 className="section-title__title title-animation"
                    dangerouslySetInnerHTML={{ __html: title }} />
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="department-one__left">
                        <div className="row justify-content-center gy-4">
                            {outsourcingServices.map((item, i) => (
                                <div key={i} className={'col-xl-3 col-lg-6 col-md-6 wow ' + (i % 4 === 0 ? 'fadeInLeft' : i % 4 === 1 ? 'fadeInUp' : i % 4 === 2 ? 'fadeInRight' : i % 4 === 3 ? 'fadeInLeft' : 'fadeInUp')} data-wow-delay={DELAYS[i % DELAYS.length]}>
                                    <div className="department-one__single">
                                        <div className="department-one__icon-and-title">
                                            <div className="department-one__icon">
                                                <span className={'fas ' + (item.icon || serviceIcons[i] || 'fa-users-cog')}></span>
                                            </div>
                                            <h3 className="department-one__title">
                                                <a href="#">{item.title}</a>
                                            </h3>
                                        </div>
                                        <p className="department-one__text">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

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

        </MainLayout>
    );
}
