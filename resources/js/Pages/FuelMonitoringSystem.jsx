import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function FuelMonitoringSystem({ service }) {
    const s = service || {};
    const slides = (s.slides && s.slides.length > 0) ? s.slides : [
        { image: '/assets/images/services/fuel-monitoring-graphic.png', heading: 'Smart Fleet', highlight: 'Fuel Management', description: 'Regain complete control over your operating costs. Our advanced Fuel Monitoring System tracks fuel consumption, refills, and potential pilferage instances in real-time, delivering comprehensive spreadsheets to your fleet manager.' },
        { image: '/assets/images/services/fuel-sensor.png', heading: 'High-Accuracy', highlight: 'Digital Level Sensors', description: 'Experience absolute telemetry precision. Utilizing advanced capacitive and ultrasonic level sensors integrated with custom digital filtration algorithms, we deliver unmatched 99.5% accuracy under any operating vibration.' },
    ];
    const badge = s.badge || 'ST 4000';
    const title = s.title || 'Fuel Monitoring System';
    const description = s.description || 'ST 4000 provides real-time fuel level monitoring, reliable data transmission, and smart analytics for your entire fleet.';
    const components = s.page_data?.components?.items || [
        { number: '01', title: 'Fuel Sensor', subtitle: 'Measures the level of fuel in the fuel tank and sends this information to the ST4000 monitoring module.', detail: 'Accuracy: < 1 mm', image: '/assets/images/services/fuel-sensor.png' },
        { number: '02', title: 'ST 4000 Fuel Monitoring Module', subtitle: 'Collects information from the fuel sensor and sends the data to the base monitoring station over GPRS/GSM interface.', detail: '', image: '/assets/images/services/module.png' },
        { number: '03', title: 'Fuel Monitoring Station', subtitle: 'Fuel monitoring station consists of our latest Android Apps / Web / Desktop based applications.', detail: '', image: '/assets/images/services/station.png' },
    ];
    const reliableSection = s.page_data?.reliable_section || { title: 'Reliable. Connected. Always On.', description: 'The station needs to be connected to the internet via static IP to enable the ST4000 module to send the data 24x7. These data are either stored and used for the analyzing purpose or used for the online monitoring of your fleets.', features: [
        { title: '24x7 Data Transmission', description: 'Continuous and reliable data transfer', icon: 'fa-cloud-upload-alt' },
        { title: 'Secure & Accurate', description: 'High precision sensing and secure communication', icon: 'fa-shield-alt' },
        { title: 'Smart Analytics', description: 'Actionable insights across all platforms', icon: 'fa-chart-line' },
    ] };
    const reliableFeatures = reliableSection.features || [];
    const solutionCards = s.page_data?.solution_cards?.items || [
        { title: 'Stop the Fuel<br/>Pilferage', description: 'Track fuel usage in real-time and prevent fuel theft effectively.', icon: 'fa-gas-pump' },
        { title: 'Analyze Driver<br/>Performance', description: 'Monitor driving behavior to improve safety and efficiency.', icon: 'fa-user-check' },
        { title: 'Improve Fleet<br/>Utilization', description: 'Optimize vehicle usage and increase overall fleet productivity.', icon: 'fa-truck-moving' },
        { title: 'Fine Tune Vehicle<br/>Performance', description: 'Enhance vehicle efficiency through smart monitoring and analytics.', icon: 'fa-car-side' },
    ];
    const featureCards = s.page_data?.feature_cards?.items || [
        { title: 'GPRS, SMS, Email Alarms', description: 'Provides instant alerts through GPRS, SMS, and email notifications for important vehicle events and security updates.', icon: 'fa-bell' },
        { title: 'History Data Storage', description: 'Stores previous tracking and activity data, allowing users to review vehicle movements and reports anytime.', icon: 'fa-database' },
        { title: 'Built-in Battery Backup', description: 'Includes an internal backup battery that supports the device for up to 6 hours during power failure.', icon: 'fa-battery-full' },
        { title: 'GPS Open/Close Detection', description: 'Detects GPS signal status and monitors whether the GPS connection is active or disconnected.', icon: 'fa-map-marker-alt' },
        { title: 'Camera Support (Optional)', description: 'Supports optional camera integration for capturing images or monitoring vehicle surroundings in real time.', icon: 'fa-camera' },
        { title: 'Multiple Fuel Sensor Support (Optional)', description: 'Allows connection with multiple fuel sensors to accurately monitor fuel levels and consumption.', icon: 'fa-gas-pump' },
        { title: 'Blind Area Supplementary Uploading', description: 'Automatically uploads stored tracking data once the network signal is restored after entering blind areas.', icon: 'fa-cloud-upload-alt' },
        { title: 'Geo Fence', description: 'Creates virtual boundary zones and sends alerts whenever the vehicle enters or exits the defined area.', icon: 'fa-draw-polygon' },
    ];
    const DELAYS = ['100ms', '200ms', '300ms', '400ms', '500ms', '600ms', '700ms', '800ms', '900ms'];
    return (
        <MainLayout>
            <Head title="FuelMonitoringSystem" />
            <link rel="stylesheet" href="/assets/css/fuel-monitoring.css" />
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
   

    {/* ST 4000 Section Start */}
    <section className="st4000-section py-5" style={{ "marginTop": "10px" }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div className="st4000-badge mb-3">{badge}</div>
                    <h2 className="st4000-title mb-3">{title}</h2>
                    <p className="st4000-desc mb-4">{description}</p>
                    <div className="st4000-graphic">
                        <img src="/assets/images/services/fuel-monitoring-graphic.png" alt="Fuel Monitoring Graphic" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="200ms" style={{ "marginTop": "50px" }}>
                    <h3 className="st4000-right-title mb-5">The ST 4000 Fuel Monitoring System Consists of the Following Main Components</h3>
                    <div className="st4000-components">
                        {components.map((comp, i) => (
                            <div key={i} className="component-card wow fadeInUp" data-wow-delay={`${300 + i * 100}ms`}>
                                <div className="component-number-bar">{comp.number}</div>
                                <div className="component-card-body">
                                    <div className="component-image-circle">
                                        <img src={comp.image.startsWith('/') ? comp.image : '/' + comp.image} alt={comp.title} />
                                    </div>
                                    <div className="component-card-text">
                                        <h4>{comp.title}</h4>
                                        <p>{comp.subtitle}</p>
                                        {comp.detail && <div className="component-accuracy"><i className="fas fa-check-circle"></i> {comp.detail}</div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="st4000-features-bar mt-5 wow fadeInUp" data-wow-delay="600ms">
                <div className="feature-item large">
                    <div className="feature-icon-circle">
                        <i className="fas fa-globe"></i>
                    </div>
                    <div className="feature-text">
                        <h5>{reliableSection.title}</h5>
                        <p>{reliableSection.description}</p>
                    </div>
                </div>
                {reliableFeatures.map((feat, i) => (
                    <div key={i} className="feature-item">
                        <div className="feature-icon-circle">
                            <i className={'fas ' + feat.icon}></i>
                        </div>
                        <div className="feature-text">
                            <h5>{feat.title}</h5>
                            <p>{feat.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
    {/* ST 4000 Section End */}


    {/*Category Two Start */}
    <section className="category-two" style={{ "paddingTop": "50px" }}>
        <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
                <h2 className="section-title__title title-animation">With Our Fuel Cum <br />
                    Fleet Monitoring Solution<span> You Can</span>
                </h2>
            </div>
            {solutionCards.length > 0 && (
                <div className="row">
                    {solutionCards.map((card, i) => (
                        <div key={i} className={'col-xl-3 col-lg-6 col-md-6 wow ' + (i === 0 ? 'fadeInLeft' : i === 3 ? 'fadeInLeft' : 'fadeInRight')} data-wow-delay={i === 0 ? '100ms' : i === 3 ? '200ms' : i === 1 ? '300ms' : '400ms'}>
                            <div className="category-two__single">
                                <div className="category-two__icon">
                                    <span className={'fas ' + card.icon}></span>
                                </div>
                                <div className="category-two__single-inner">
                                    <h3 className="category-two__title">
                                        <a href="#" dangerouslySetInnerHTML={{ __html: card.title }} />
                                    </h3>
                                    <p className="category-two__text">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </section>
    {/*Category Two End */}

    {/*Department One Start*/}
    <section className="department-one" style={{ "marginTop": "-100px" }}>
        <div className="department-one__bg-shape"
            style={{ backgroundImage: "url(assets/images/shapes/department-one-bg-shape.png)" }}></div>
        <div className="container">
            <div className="section-title text-center sec-title-animation animation-style1">
                <h2 className="section-title__title title-animation">{badge} <br /> <span>Features</span>
                </h2>
            </div>
            {featureCards.length > 0 && (
                <div className="row">
                    <div className="col-xl-12">
                        <div className="department-one__left">
                            <div className="row justify-content-center gy-4">
                                {featureCards.map((feat, i) => {
                                    const anim = i % 4 === 0 ? 'fadeInLeft' : i % 4 === 1 ? 'fadeInUp' : i % 4 === 2 ? 'fadeInRight' : 'fadeInLeft';
                                    return (
                                        <div key={i} className={'col-xl-3 col-lg-6 col-md-6 wow ' + anim} data-wow-delay={DELAYS[i]}>
                                            <div className="department-one__single">
                                                <div className="department-one__icon-and-title">
                                                    <div className="department-one__icon">
                                                        <span className={'fas ' + feat.icon}></span>
                                                    </div>
                                                    <h3 className="department-one__title">
                                                        <a href="#">{feat.title}</a>
                                                    </h3>
                                                </div>
                                                <p className="department-one__text">{feat.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
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
