import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function HumanResource({ service }) {
    const s = service || {};
    const slides = (s.slides && s.slides.length > 0) ? s.slides : [
        { image: '/assets/images/services/human.png', heading: 'Strategic Corporate', highlight: 'HR and Recruitment', description: 'Accelerate your organization\'s growth. We connect top-tier tech talent and embedded engineering experts with leading global companies, offering full-cycle talent acquisition, screening, onboarding, and payroll outsourcing.' },
        { image: '/assets/images/services/site_development.png', heading: 'Corporate Training', highlight: '& Competency Uplift', description: 'Equip your workforce with next-generation technology competencies. We deliver highly customized upskilling workshops in firmware, RTOS, automotive protocols, and leadership management tailored specifically for corporate teams.' },
    ];
    const pd = s.page_data || {};
    const badge = s.badge || 'Human Resource';
    const title = s.title || 'Human Resource';
    const hrProcess = pd.hr_process || { description: '', steps: [] };
    const processDesc = hrProcess.description || "VAct HR services understands how crucial it is to find the right employee who can contribute to the success of the company's business. We need people with the same level of experience and exposure to understand the unique way of functioning the HR services which VAct provides. Our process for finding the right candidate undergoes the following sequential steps:";
    const processSteps = (hrProcess.steps && hrProcess.steps.length > 0) ? hrProcess.steps : [
        { title: 'Identifying candidates', description: 'We identify and connect with the most suitable candidates.' },
        { title: 'Shortlisting and Screening', description: 'We evaluate and screen candidates to ensure the best fit.' },
        { title: 'Placement and follow-up', description: 'We ensure seamless placement and continuous follow-up.' },
    ];
    const hrFeatures = (pd.hr_features?.items && pd.hr_features.items.length > 0) ? pd.hr_features.items : [
        { title: 'Expert HR Team', description: 'Experienced professionals delivering effective HR solutions.', icon: 'fa-users' },
        { title: 'Quality Candidates', description: 'We provide skilled and experienced candidates for your organization.', icon: 'fa-search' },
        { title: 'End-to-End Support', description: 'From selection to placement and follow-up, we support every step.', icon: 'fa-handshake' },
        { title: 'Value Driven', description: 'Our HR services add value to your business and build strong relationships.', icon: 'fa-chart-line' },
    ];
    const hrCards = (pd.hr_cards?.items && pd.hr_cards.items.length > 0) ? pd.hr_cards.items : [
        { title: 'Temporary Staffing', description: 'We provide temporary staffing solutions to help businesses meet short-term workforce requirements efficiently. Our staffing services reduce hiring complexity while ensuring skilled manpower support.', icon: 'fa-user-clock' },
        { title: 'Contract Staffing', description: 'Professional contract staffing services are offered for project-based and long-term assignments. We help organizations hire qualified employees with flexible employment models.', icon: 'fa-user-tie' },
        { title: 'Staff and Recruitment Outsourcing', description: 'Our recruitment outsourcing solutions simplify hiring processes and improve workforce management. We provide skilled candidates that match your business and technical requirements.', icon: 'fa-users' },
        { title: 'Skilled Workforce Management', description: 'We manage trained professionals across multiple industries to support business operations effectively. Our team ensures productivity, quality performance, and reliable workforce coordination.', icon: 'fa-people-group' },
        { title: 'Recruitment Process Support', description: 'Complete recruitment assistance is provided from candidate sourcing to final onboarding. This process helps companies save time and improve hiring efficiency.', icon: 'fa-user-plus' },
        { title: 'Payroll and Compliance Services', description: 'We handle payroll processing, employee records, and compliance management for organizations. Our services ensure smooth operations while following labor and legal regulations.', icon: 'fa-money-check-dollar' },
        { title: 'Employee Training and Development', description: 'Training programs are designed to improve employee skills, productivity, and workplace performance. We focus on professional growth and industry-specific learning solutions.', icon: 'fa-chalkboard-teacher' },
        { title: 'Long-Term Staffing Partnership', description: 'Our manpower solutions are designed to build long-term partnerships with businesses and industries. We provide continuous staffing support, quality service, and workforce reliability.', icon: 'fa-handshake-angle' },
    ];
    const DELAYS = ['100ms', '200ms', '300ms', '400ms', '500ms', '600ms', '700ms', '800ms', '900ms'];
    return (
        <MainLayout>
            <Head title="HumanResource" />
            <link rel="stylesheet" href="/assets/css/human-resource.css" />
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






    {/* Human Resource Section Start */}
    <section className="human-resource-section py-5 mt-5">
        <div className="container">

            {/* Header & Top Content */}
            <div className="row mb-5 align-items-center">

                {/* Left Column: Text & Steps */}
                <div className="col-lg-6 pe-lg-5 wow fadeInLeft" data-wow-delay="100ms">
                    {/* Badge */}
                    <div className="hr-badge d-inline-flex align-items-center px-3 py-2 mb-3" style={{ "backgroundColor": "#eff4ff", "color": "#0d6efd", "fontWeight": "600", "borderRadius": "30px", "fontSize": "14px" }}>
                        <i className="fas fa-users me-2"></i> {badge}
                    </div>

                    {/* Title & Description */}
                    <h1 className="mb-3" style={{ "color": "#0b1c3f", "fontWeight": "800", "fontSize": "42px" }}>{title}</h1>
                    {s.description && (
                        <p className="text-muted mb-4" style={{ "lineHeight": "1.8", "fontSize": "15px" }}>
                            {s.description}
                        </p>
                    )}

                    {/* Steps Box */}
                    <div className="hr-process-box p-4 mt-4" style={{ "backgroundColor": "#ffffff", "border": "1px solid #eef2f6", "borderRadius": "16px", "boxShadow": "0 10px 30px rgba(0,0,0,0.02)" }}>
                        <p className="text-muted mb-4" style={{ "fontSize": "14px", "lineHeight": "1.7" }}>
                            {processDesc}
                        </p>

                        <ul className="list-unstyled mb-0">
                            {processSteps.map((step, i) => (
                                <li key={i} className={'d-flex align-items-start wow fadeInUp' + (i < processSteps.length - 1 ? ' mb-3 border-bottom pb-3' : '')} data-wow-delay={DELAYS[i + 1]}>
                                    <div className="me-3 mt-1" style={{ "color": "#0d6efd", "fontSize": "20px" }}>
                                        <i className="fas fa-check-circle"></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "15px" }}>{step.title}</h6>
                                        <p className="text-muted mb-0" style={{ "fontSize": "13px" }}>{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Right Column: Illustration */}
                <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0 wow fadeInRight" data-wow-delay="300ms">
                    <img src="/assets/images/services/human.png" alt="HR Process Illustration" className="img-fluid" style={{ "maxWidth": "100%" }} />
                </div>
            </div>

            {/* Bottom Feature Cards Row */}
            {hrFeatures.length > 0 && (
            <div className="hr-features-row p-4 mt-5 wow fadeInUp" data-wow-delay="100ms" style={{ "backgroundColor": "#f8fafc", "border": "1px solid #eef2f6", "borderRadius": "16px" }}>
                <div className="row g-4 position-relative">
                    {hrFeatures.map((feat, i) => (
                        <div key={i} className={'col-md-6 col-lg-3 ' + (i < hrFeatures.length - 1 ? 'feature-border-right' : 'feature-last-item') + ' wow fadeInUp'} data-wow-delay={DELAYS[i + 1]}>
                            <div className={'d-flex align-items-center' + (i > 0 ? ' ps-lg-3' : '')}>
                                <div className="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3" style={{ "width": "50px", "height": "50px", "backgroundColor": "#0d6efd", "color": "white", "fontSize": "20px" }}>
                                    <i className={'fas ' + feat.icon}></i>
                                </div>
                                <div>
                                    <h6 className="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "14px" }}>{feat.title}</h6>
                                    <p className="text-muted mb-0" style={{ "fontSize": "12px", "lineHeight": "1.5" }}>{feat.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            )}
        </div>
    </section>
    {/* Human Resource Section End */}





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
                <h2 className="section-title__title title-animation">Manpower Staffing and <br /> <span>Recruitment Services</span>
                </h2>
            </div>


            <div className="row">
                <div className="col-xl-12">
                    <div className="department-one__left">
                        <div className="row justify-content-center gy-4">
                            {hrCards.map((item, i) => {
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
