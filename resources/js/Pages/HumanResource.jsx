import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function HumanResource() {
    return (
        <MainLayout>
            <Head title="HumanResource" />
            
{/*Page Header Start*/}
    {/* <section class="page-header">
        <div class="page-header__bg" style={{ backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div class="container">
            <div class="page-header__inner">
                <h3>Blogs</h3>
                <div class="thm-breadcrumb__inner">
                    <ul class="thm-breadcrumb list-unstyled">
                        <li><a href="index.html">Home</a></li>
                        <li><span class="fas fa-angle-right"></span></li>
                        <li>Blogs</li>
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

    {/* Industrial Automation Section Start */}
    
    {/*Testimonial One Start*/}
        {/*Testimonial One Start*/}
    <section class="testimonial-one">
        <div class="container">
            <div class="testimonial-one__inner">
                <div class="testimonial-one__carousel owl-carousel owl-theme">
                    {/*Item 1*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div class="product-carousel-img-container">
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/services/human.png" alt="Corporate Talent Acquisition Solutions" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Strategic Corporate <br /><span style={{ "color": "#008ed2" }}>HR and Recruitment</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Accelerate your organization's growth. We connect top-tier tech talent and embedded engineering experts with leading global companies, offering full-cycle talent acquisition, screening, onboarding, and payroll outsourcing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Item 2*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div class="product-carousel-img-container">
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/services/site_development.png" alt="Employee Upskilling Programs" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Corporate Training <br /><span style={{ "color": "#008ed2" }}>& Competency Uplift</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Equip your workforce with next-generation technology competencies. We deliver highly customized upskilling workshops in firmware, RTOS, automotive protocols, and leadership management tailored specifically for corporate teams.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Testimonial One End*/}
    {/*Testimonial One End*/}








    {/* Human Resource Section Start */}
    <section class="human-resource-section py-5 mt-5">
        <div class="container">

            {/* Header & Top Content */}
            <div class="row mb-5 align-items-center">

                {/* Left Column: Text & Steps */}
                <div class="col-lg-6 pe-lg-5 wow fadeInLeft" data-wow-delay="100ms">
                    {/* Badge */}
                    <div class="hr-badge d-inline-flex align-items-center px-3 py-2 mb-3" style={{ "backgroundColor": "#eff4ff", "color": "#0d6efd", "fontWeight": "600", "borderRadius": "30px", "fontSize": "14px" }}>
                        <i class="fas fa-users me-2"></i> Human Resource
                    </div>

                    {/* Title & Description */}
                    <h1 class="mb-3" style={{ "color": "#0b1c3f", "fontWeight": "800", "fontSize": "42px" }}>Human Resource</h1>
                    <p class="text-muted mb-4" style={{ "lineHeight": "1.8", "fontSize": "15px" }}>
                        Our mission in providing HR services is to build a globally competent human capital
                        solution for companies which will add value to our client organization. Our firm
                        enthusiastically performs its work to cater the manpower necessities, which helps
                        us to build relations.
                    </p>

                    {/* Steps Box */}
                    <div class="hr-process-box p-4 mt-4" style={{ "backgroundColor": "#ffffff", "border": "1px solid #eef2f6", "borderRadius": "16px", "boxShadow": "0 10px 30px rgba(0,0,0,0.02)" }}>
                        <p class="text-muted mb-4" style={{ "fontSize": "14px", "lineHeight": "1.7" }}>
                            VAct HR services understands how crucial it is to find the right employee who can contribute
                            to the success of the company's business. We need people with the same level of experience
                            and exposure to understand the unique way of functioning the HR services which VAct provides.
                            Our process for finding the right candidate undergoes the following sequential steps:
                        </p>

                        <ul class="list-unstyled mb-0">
                            {/* Step 1 */}
                            <li class="d-flex align-items-start mb-3 border-bottom pb-3 wow fadeInUp" data-wow-delay="200ms">
                                <div class="me-3 mt-1" style={{ "color": "#0d6efd", "fontSize": "20px" }}>
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    <h6 class="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "15px" }}>Identifying candidates</h6>
                                    <p class="text-muted mb-0" style={{ "fontSize": "13px" }}>We identify and connect with the most suitable candidates.</p>
                                </div>
                            </li>
                            {/* Step 2 */}
                            <li class="d-flex align-items-start mb-3 border-bottom pb-3 wow fadeInUp" data-wow-delay="300ms">
                                <div class="me-3 mt-1" style={{ "color": "#0d6efd", "fontSize": "20px" }}>
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    <h6 class="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "15px" }}>Shortlisting and Screening</h6>
                                    <p class="text-muted mb-0" style={{ "fontSize": "13px" }}>We evaluate and screen candidates to ensure the best fit.</p>
                                </div>
                            </li>
                            {/* Step 3 */}
                            <li class="d-flex align-items-start wow fadeInUp" data-wow-delay="400ms">
                                <div class="me-3 mt-1" style={{ "color": "#0d6efd", "fontSize": "20px" }}>
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div>
                                    <h6 class="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "15px" }}>Placement and follow-up</h6>
                                    <p class="text-muted mb-0" style={{ "fontSize": "13px" }}>We ensure seamless placement and continuous follow-up.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Illustration */}
                <div class="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0 wow fadeInRight" data-wow-delay="300ms">
                    <img src="/assets/images/services/human.png" alt="HR Process Illustration" class="img-fluid" style={{ "maxWidth": "100%" }} />
                </div>
            </div>

            {/* Bottom Feature Cards Row */}
            <div class="hr-features-row p-4 mt-5 wow fadeInUp" data-wow-delay="100ms" style={{ "backgroundColor": "#f8fafc", "border": "1px solid #eef2f6", "borderRadius": "16px" }}>
                <div class="row g-4 position-relative">

                    {/* Feature 1 */}
                    <div class="col-md-6 col-lg-3 feature-border-right wow fadeInUp" data-wow-delay="200ms">
                        <div class="d-flex align-items-center">
                            <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3" style={{ "width": "50px", "height": "50px", "backgroundColor": "#0d6efd", "color": "white", "fontSize": "20px" }}>
                                <i class="fas fa-users"></i>
                            </div>
                            <div>
                                <h6 class="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "14px" }}>Expert HR Team</h6>
                                <p class="text-muted mb-0" style={{ "fontSize": "12px", "lineHeight": "1.5" }}>Experienced professionals delivering effective HR solutions.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div class="col-md-6 col-lg-3 feature-border-right wow fadeInUp" data-wow-delay="300ms">
                        <div class="d-flex align-items-center ps-lg-3">
                            <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3" style={{ "width": "50px", "height": "50px", "backgroundColor": "#0d6efd", "color": "white", "fontSize": "20px" }}>
                                <i class="fas fa-search"></i>
                            </div>
                            <div>
                                <h6 class="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "14px" }}>Quality Candidates</h6>
                                <p class="text-muted mb-0" style={{ "fontSize": "12px", "lineHeight": "1.5" }}>We provide skilled and experienced candidates for your organization.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div class="col-md-6 col-lg-3 feature-border-right wow fadeInUp" data-wow-delay="400ms">
                        <div class="d-flex align-items-center ps-lg-3">
                            <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3" style={{ "width": "50px", "height": "50px", "backgroundColor": "#0d6efd", "color": "white", "fontSize": "20px" }}>
                                <i class="fas fa-handshake"></i>
                            </div>
                            <div>
                                <h6 class="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "14px" }}>End-to-End Support</h6>
                                <p class="text-muted mb-0" style={{ "fontSize": "12px", "lineHeight": "1.5" }}>From selection to placement and follow-up, we support every step.</p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div class="col-md-6 col-lg-3 feature-last-item wow fadeInUp" data-wow-delay="500ms">
                        <div class="d-flex align-items-center ps-lg-3">
                            <div class="flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3" style={{ "width": "50px", "height": "50px", "backgroundColor": "#0d6efd", "color": "white", "fontSize": "20px" }}>
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <div>
                                <h6 class="mb-1" style={{ "color": "#0b1c3f", "fontWeight": "700", "fontSize": "14px" }}>Value Driven</h6>
                                <p class="text-muted mb-0" style={{ "fontSize": "12px", "lineHeight": "1.5" }}>Our HR services add value to your business and build strong relationships.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* Human Resource Section End */}




    {/*Department One Start*/}
    <section class="department-one">
        <div class="department-one__bg-shape"
            style={{ backgroundImage: "url(assets/images/shapes/department-one-bg-shape.png)" }}></div>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                {/* <div class="section-title__tagline-box">
                        <div class="section-title__tagline-shape"></div>
                        <div class="section-title__tagline-shape-2"></div>
                        <span class="section-title__tagline">Academic Departments</span>
                    </div> */}
                <h2 class="section-title__title title-animation">Manpower Staffing and <br /> <span>Recruitment Services</span>
                </h2>
            </div>


            <div class="row">
                <div class="col-xl-12">
                    <div class="department-one__left">
                        <div class="row justify-content-center gy-4">

                            {/* Dedicated Offshore Team */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-user-clock"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Temporary Staffing</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        We provide temporary staffing solutions to help businesses meet short-term workforce requirements efficiently.
                                        Our staffing services reduce hiring complexity while ensuring skilled manpower support.
                                    </p>
                                </div>
                            </div>

                            {/* PCB Design Services */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-user-tie"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Contract Staffing</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Professional contract staffing services are offered for project-based and long-term assignments.
                                        We help organizations hire qualified employees with flexible employment models.
                                    </p>
                                </div>
                            </div>

                            {/* Embedded Software Development */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-users"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Staff and Recruitment Outsourcing</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Our recruitment outsourcing solutions simplify hiring processes and improve workforce management.
                                        We provide skilled candidates that match your business and technical requirements.
                                    </p>
                                </div>
                            </div>

                            {/* VLSI Development Support */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-people-group"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Skilled Workforce Management</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        We manage trained professionals across multiple industries to support business operations effectively.
                                        Our team ensures productivity, quality performance, and reliable workforce coordination.
                                    </p>
                                </div>
                            </div>

                            {/* Candidate Profile Screening */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-user-plus"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Recruitment Process Support</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Complete recruitment assistance is provided from candidate sourcing to final onboarding.
                                        This process helps companies save time and improve hiring efficiency.
                                    </p>
                                </div>
                            </div>

                            {/* Flexible Billing Model */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-money-check-dollar"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Payroll and Compliance Services</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        We handle payroll processing, employee records, and compliance management for organizations.
                                        Our services ensure smooth operations while following labor and legal regulations.
                                    </p>
                                </div>
                            </div>

                            {/* Interview and Selection Process */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="700ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-chalkboard-teacher"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Employee Training and Development</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Training programs are designed to improve employee skills, productivity, and workplace performance.
                                        We focus on professional growth and industry-specific learning solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Long-Term Business Relationship */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="800ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-handshake-angle"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Long-Term Staffing Partnership</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Our manpower solutions are designed to build long-term partnerships with businesses and industries.
                                        We provide continuous staffing support, quality service, and workforce reliability.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Department One End*/}








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
