import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function CivilPmc() {
    return (
        <MainLayout>
            <Head title="CivilPmc" />
            <link rel="stylesheet" href="/assets/css/civil-pmc.css" />
            
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
                                        <img src="/assets/images/services/project_management.png" alt="Civil Engineering Project Consultancy" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Project Management <br /><span style={{ "color": "#008ed2" }}>Consultancy (PMC)</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Deliver massive civil infrastructure projects on time and on budget. We provide comprehensive PMC services covering architectural review, cost-efficient budgeting, vendor coordination, and strict quality control on-site.</p>
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
                                        <img src="/assets/images/services/construction_work.png" alt="Rigorous Structural Integrity Inspections" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Structural Quality <br /><span style={{ "color": "#008ed2" }}>& Safety Supervision</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Guarantee the highest safety and building compliance. Our team of veteran civil engineers provides non-destructive concrete tests, site safety audits, material certifications, and detailed project progress surveys daily.</p>
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










    {/*Civil Services Section Start*/}
    <section class="civil-services-section">
        <div class="container">
            <div class="row align-items-center">

                {/* Left Content */}
                <div class="col-lg-6">
                    <div class="civil-left">

                        <span class="section-badge wow fadeInUp">
                            <i class="fas fa-hard-hat"></i>
                            Civil Engineering
                        </span>

                        <h2 class="wow fadeInUp" data-wow-delay="100ms">
                            Civil Engineering <br />
                            Construction and Consultancy
                        </h2>

                        <div class="title-line wow fadeInUp" data-wow-delay="150ms"></div>

                        <p class="wow fadeInUp" data-wow-delay="200ms">
                            VAct Technologies boasts a team of highly experienced engineers and industry experts. Our team includes professionals who have retired from state and central government departments, PSUs, and renowned private firms.
                        </p>

                        <p class="wow fadeInUp" data-wow-delay="250ms">
                            Having held senior positions in these organizations, they bring invaluable insights that enhance our ability to execute Civil Engineering and Consultancy services effectively.
                        </p>

                        <p class="wow fadeInUp" data-wow-delay="300ms">
                            With over 12+ years of experience, our engineers have deep expertise in managing and delivering complex engineering projects.
                        </p>

                        {/* Feature Boxes */}
                        <div class="feature-box wow fadeInLeft" data-wow-delay="100ms">
                            <div class="feature-icon">
                                <i class="fas fa-drafting-compass"></i>
                            </div>
                            <div class="feature-divider"></div>
                            <div class="feature-content">
                                <h4>Engineering Planning</h4>
                                <p>Professional project planning and engineering execution with modern construction standards.</p>
                            </div>
                        </div>

                        <div class="feature-box wow fadeInLeft" data-wow-delay="200ms">
                            <div class="feature-icon">
                                <i class="fas fa-building"></i>
                            </div>
                            <div class="feature-divider"></div>
                            <div class="feature-content">
                                <h4>Construction Services</h4>
                                <p>Expertise in residential, industrial and commercial construction consultancy solutions.</p>
                            </div>
                        </div>

                        <div class="feature-box wow fadeInLeft" data-wow-delay="300ms">
                            <div class="feature-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="feature-divider"></div>
                            <div class="feature-content">
                                <h4>Trusted Consultancy</h4>
                                <p>Reliable engineering consultancy backed by experienced professionals and industry specialists.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Right Grid */}
                <div class="col-lg-6">
                    <div class="row">
                        {/* Card 01 */}
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div class="civil-card">
                                <div class="civil-card-number">01</div>
                                <div class="civil-card-img-wrapper">
                                    <img src="/assets/images/services/site_development.png" alt="Site Development" />
                                </div>
                                <div class="civil-card-body">
                                    <h3>Site Development</h3>
                                    <div class="civil-card-line"></div>
                                    <p>Comprehensive ground-level planning and soil/site preparation.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 02 */}
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div class="civil-card">
                                <div class="civil-card-number">02</div>
                                <div class="civil-card-img-wrapper">
                                    <img src="/assets/images/services/construction_work.png" alt="Construction Work" />
                                </div>
                                <div class="civil-card-body">
                                    <h3>Construction Work</h3>
                                    <div class="civil-card-line"></div>
                                    <p>Stunning, code-compliant commercial & industrial build execution.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 03 */}
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div class="civil-card">
                                <div class="civil-card-number">03</div>
                                <div class="civil-card-img-wrapper">
                                    <img src="/assets/images/services/project_management.png" alt="Project Management" />
                                </div>
                                <div class="civil-card-body">
                                    <h3>Project Management</h3>
                                    <div class="civil-card-line"></div>
                                    <p>Detailed scheduling, cost control, and resource optimization.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 04 */}
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="400ms">
                            <div class="civil-card">
                                <div class="civil-card-number">04</div>
                                <div class="civil-card-img-wrapper">
                                    <img src="/assets/images/services/engineering_excellence.png" alt="Engineering Excellence" />
                                </div>
                                <div class="civil-card-body">
                                    <h3>Engineering Excellence</h3>
                                    <div class="civil-card-line"></div>
                                    <p>High quality checks and validation from certified experts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    {/*Civil Services Section End*/}

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
                <h2 class="section-title__title title-animation">Civil Engineering Construction<br /> <span>and Consultancy</span>
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
                                            <span class="fas fa-water"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Sewage Treatment Plants (STP)</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        We provide efficient sewage treatment plant solutions for residential, commercial, and industrial applications.
                                        Our systems help in safe wastewater treatment and environmental protection.
                                    </p>
                                </div>
                            </div>

                            {/* PCB Design Services */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-tint"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Water Treatment Plants (WTP)</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Advanced water treatment systems are designed to deliver clean and safe water for various uses.
                                        The plants ensure high purification standards and reliable performance.
                                    </p>
                                </div>
                            </div>

                            {/* Embedded Software Development */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-house-circle-check"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Health Audit for Residential Buildings</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Comprehensive building health audits are conducted to evaluate structural safety and maintenance quality.
                                        Our inspections help identify risks and improve building durability.
                                    </p>
                                </div>
                            </div>

                            {/* VLSI Development Support */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-search"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Non Destructive Testing (NDT)</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        We offer non-destructive testing services to inspect materials and structures without causing damage.
                                        This method ensures safety, quality assurance, and accurate analysis.
                                    </p>
                                </div>
                            </div>

                            {/* Candidate Profile Screening */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-faucet-drip"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Design of Water Supply and DPR Creation</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Professional water supply system designs and DPR preparation services are provided for infrastructure projects.
                                        Our reports include planning, technical analysis, and project estimation.
                                    </p>
                                </div>
                            </div>

                            {/* Flexible Billing Model */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-road"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Road Consultancy</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Expert consultancy services are offered for road planning, construction, and maintenance projects.
                                        We focus on quality standards, safety measures, and cost-effective solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Interview and Selection Process */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="700ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-building"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Structural Engineering Services</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Our structural engineering team designs safe and durable structures for residential and commercial projects.
                                        We ensure stability, strength, and compliance with engineering standards.
                                    </p>
                                </div>
                            </div>

                            {/* Long-Term Business Relationship */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="800ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-tasks"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Project Management and Supervision</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Complete project management and site supervision services are provided from planning to execution.
                                        Our experts ensure timely completion, quality control, and efficient coordination.
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
