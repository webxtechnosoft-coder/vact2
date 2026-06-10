import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function CivilPmc({ service }) {
    const s = service || {};
    const slides = (s.slides && s.slides.length > 0) ? s.slides : [
        { image: '/assets/images/services/project_management.png', heading: 'Project Management', highlight: 'Consultancy (PMC)', description: 'Deliver massive civil infrastructure projects on time and on budget. We provide comprehensive PMC services covering architectural review, cost-efficient budgeting, vendor coordination, and strict quality control on-site.' },
        { image: '/assets/images/services/construction_work.png', heading: 'Structural Quality', highlight: '& Safety Supervision', description: 'Guarantee the highest safety and building compliance. Our team of veteran civil engineers provides non-destructive concrete tests, site safety audits, material certifications, and detailed project progress surveys daily.' },
    ];
    const pd = s.page_data || {};
    const civilServices = pd.civil_services || { badge: 'Civil Engineering', title: 'Civil Engineering Construction and Consultancy', description: 'VAct Technologies boasts a team of highly experienced engineers and industry experts. Our team includes professionals who have retired from state and central government departments, PSUs, and renowned private firms.\n\nHaving held senior positions in these organizations, they bring invaluable insights that enhance our ability to execute Civil Engineering and Consultancy services effectively.\n\nWith over 12+ years of experience, our engineers have deep expertise in managing and delivering complex engineering projects.', features: [] };
    const civilFeatures = civilServices.features || [];
    const civilBadge = civilServices.badge || 'Civil Engineering';
    const civilTitle = civilServices.title || 'Civil Engineering Construction and Consultancy';
    const civilDesc = civilServices.description || '';
    const civilDescParagraphs = civilDesc.split('\n\n').filter(Boolean);
    const civilCards = pd.civil_cards?.items || [
        { number: '01', title: 'Site Development', description: 'Comprehensive ground-level planning and soil/site preparation.', image: '/assets/images/services/site_development.png' },
        { number: '02', title: 'Construction Work', description: 'Stunning, code-compliant commercial & industrial build execution.', image: '/assets/images/services/construction_work.png' },
        { number: '03', title: 'Project Management', description: 'Detailed scheduling, cost control, and resource optimization.', image: '/assets/images/services/project_management.png' },
        { number: '04', title: 'Engineering Excellence', description: 'High quality checks and validation from certified experts.', image: '/assets/images/services/engineering_excellence.png' },
    ];
    const serviceCards = pd.service_cards?.items || [
        { title: 'Sewage Treatment Plants (STP)', description: 'We provide efficient sewage treatment plant solutions for residential, commercial, and industrial applications. Our systems help in safe wastewater treatment and environmental protection.', icon: 'fa-water' },
        { title: 'Water Treatment Plants (WTP)', description: 'Advanced water treatment systems are designed to deliver clean and safe water for various uses. The plants ensure high purification standards and reliable performance.', icon: 'fa-tint' },
        { title: 'Health Audit for Residential Buildings', description: 'Comprehensive building health audits are conducted to evaluate structural safety and maintenance quality. Our inspections help identify risks and improve building durability.', icon: 'fa-house-circle-check' },
        { title: 'Non Destructive Testing (NDT)', description: 'We offer non-destructive testing services to inspect materials and structures without causing damage. This method ensures safety, quality assurance, and accurate analysis.', icon: 'fa-search' },
        { title: 'Design of Water Supply and DPR Creation', description: 'Professional water supply system designs and DPR preparation services are provided for infrastructure projects. Our reports include planning, technical analysis, and project estimation.', icon: 'fa-faucet-drip' },
        { title: 'Road Consultancy', description: 'Expert consultancy services are offered for road planning, construction, and maintenance projects. We focus on quality standards, safety measures, and cost-effective solutions.', icon: 'fa-road' },
        { title: 'Structural Engineering Services', description: 'Our structural engineering team designs safe and durable structures for residential and commercial projects. We ensure stability, strength, and compliance with engineering standards.', icon: 'fa-building' },
        { title: 'Project Management and Supervision', description: 'Complete project management and site supervision services are provided from planning to execution. Our experts ensure timely completion, quality control, and efficient coordination.', icon: 'fa-tasks' },
    ];
    const DELAYS = ['100ms', '200ms', '300ms', '400ms', '500ms', '600ms', '700ms', '800ms', '900ms'];
    return (
        <MainLayout>
            <Head title="CivilPmc" />
            <link rel="stylesheet" href="/assets/css/civil-pmc.css" />
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










    {/*Civil Services Section Start*/}
    <section className="civil-services-section">
        <div className="container">
            <div className="row align-items-center">

                {/* Left Content */}
                <div className="col-lg-6">
                    <div className="civil-left">

                        <span className="section-badge wow fadeInUp">
                            <i className="fas fa-hard-hat"></i>
                            {civilBadge}
                        </span>

                        <h2 className="wow fadeInUp" data-wow-delay="100ms">
                            {civilTitle.split('<br/>').join(' <br/> ')}
                        </h2>

                        <div className="title-line wow fadeInUp" data-wow-delay="150ms"></div>

                        {civilDescParagraphs.map((para, idx) => (
                            <p key={idx} className="wow fadeInUp" data-wow-delay={DELAYS[idx]}>
                                {para}
                            </p>
                        ))}

                        {/* Feature Boxes */}
                        {civilFeatures.map((feat, idx) => (
                            <div key={idx} className="feature-box wow fadeInLeft" data-wow-delay={DELAYS[idx]}>
                                <div className="feature-icon">
                                    <i className={'fas ' + feat.icon}></i>
                                </div>
                                <div className="feature-divider"></div>
                                <div className="feature-content">
                                    <h4>{feat.title}</h4>
                                    <p>{feat.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Right Grid */}
                <div className="col-lg-6">
                    <div className="row">
                        {civilCards.map((card, i) => (
                            <div key={i} className={'col-md-6 wow fadeInUp'} data-wow-delay={DELAYS[i]}>
                                <div className="civil-card">
                                    <div className="civil-card-number">{card.number}</div>
                                    <div className="civil-card-img-wrapper">
                                        <img src={card.image.startsWith('/') ? card.image : '/' + card.image} alt={card.title} />
                                    </div>
                                    <div className="civil-card-body">
                                        <h3>{card.title}</h3>
                                        <div className="civil-card-line"></div>
                                        <p>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/*Civil Services Section End*/}

    {/*Department One Start*/}
    <section className="department-one">
        <div className="department-one__bg-shape"
            style={{ backgroundImage: "url(assets/images/shapes/department-one-bg-shape.png)" }}></div>
        <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
                {/* <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape"></div>
                        <div className="section-title__tagline-shape-2"></div>
                        <span className="section-title__tagline">Academic Departments</span>
                    </div> */}
                <h2 className="section-title__title title-animation">Civil Engineering Construction<br /> <span>and Consultancy</span>
                </h2>
            </div>


            <div className="row">
                <div className="col-xl-12">
                    <div className="department-one__left">
                        <div className="row justify-content-center gy-4">
                            {serviceCards.map((item, i) => {
                                const anim = i % 4 === 0 ? 'fadeInLeft' : i % 4 === 1 ? 'fadeInUp' : i % 4 === 2 ? 'fadeInRight' : 'fadeInLeft';
                                return (
                                    <div key={i} className={'col-xl-3 col-lg-6 col-md-6 wow ' + anim} data-wow-delay={DELAYS[i]}>
                                        <div className="department-one__single">
                                            <div className="department-one__icon-and-title">
                                                <div className="department-one__icon">
                                                    <span className={'fas ' + item.icon}></span>
                                                </div>
                                                <h3 className="department-one__title">
                                                    <a href="#">{item.title}</a>
                                                </h3>
                                            </div>
                                            <p className="department-one__text">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Department One End*/}


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
