import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function MachineLearning() {
    return (
        <MainLayout>
            <Head title="MachineLearning" />
            
{/* BREADCRUMBS SECTION START */}
    <section class="ul-breadcrumb ul-section-spacing">
        <div class="ul-container">
            <h2 class="ul-breadcrumb-title">Machine Learning</h2>
            <ul class="ul-breadcrumb-nav">
                <li><a href="index.html">Home</a></li>
                <li><span class="separator"><i class="flaticon-right"></i></span></li>
                <li>Machine Learning</li>
            </ul>
        </div>
    </section>
    {/* BREADCRUMBS SECTION END */}

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
    <section class="testimonial-one">
        <div class="container">
            <div class="testimonial-one__inner">
                <div class="testimonial-one__carousel owl-carousel owl-theme">

                    {/*Item 1*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div
                                    style={{ "border": "1px solid rgba(0,142,210,0.5)", "borderRadius": "12px", "padding": "20px", "background": "rgba(0,0,0,0.2)" }}>
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about3.png" alt=""
                                            style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single"
                                    style={{ "background": "transparent !important", "boxShadow": "none !important", "paddingLeft": "40px" }}>
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 style={{ "fontSize": "32px", "fontWeight": "700", "color": "#fff", "marginBottom": "15px" }}>
                                        VAct EmbCore <br /><span style={{ "color": "#008ed2" }}>Development Board</span></h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>VAct EmbCore
                                        Development Board is designed for embedded system development using ARM
                                        Cortex-M4 architecture. It supports CAN, SPI, I2C, UART, USB, and SD Card
                                        interfaces for real-time applications and data logging. The board is integrated
                                        with STM32CubeIDE for easy programming and debugging. It is ideal for students,
                                        developers, and embedded learning projects.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Item 2*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div
                                    style={{ "border": "1px solid rgba(0,142,210,0.5)", "borderRadius": "12px", "padding": "20px", "background": "rgba(0,0,0,0.2)" }}>
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about2.png" alt=""
                                            style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single"
                                    style={{ "background": "transparent !important", "boxShadow": "none !important", "paddingLeft": "30px" }}>
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 style={{ "fontSize": "32px", "fontWeight": "700", "color": "#fff", "marginBottom": "15px" }}>Our
                                        Services <br /><span style={{ "color": "#008ed2" }}>& Solutions</span></h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}><strong>Our
                                            Services</strong> include Embedded Systems Development, Industrial
                                        Automation & Control, Fuel Monitoring Systems, IoT Solutions, and Embedded
                                        Offshore Outsourcing services. We provide innovative and reliable technology
                                        solutions for real-time applications, smart automation, and next-generation
                                        embedded products tailored for industrial and learning environments.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Item 3*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div
                                    style={{ "border": "1px solid rgba(0,142,210,0.5)", "borderRadius": "12px", "padding": "20px", "background": "rgba(0,0,0,0.2)" }}>
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about1.png" alt=""
                                            style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single"
                                    style={{ "background": "transparent !important", "boxShadow": "none !important", "paddingLeft": "30px" }}>
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 style={{ "fontSize": "32px", "fontWeight": "700", "color": "#fff", "marginBottom": "15px" }}>Our
                                        Products <br /><span style={{ "color": "#008ed2" }}>& Solutions</span></h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}><strong>Our
                                            Products</strong> include advanced Vending Machine solutions for smart and
                                        automated dispensing applications. We provide Automatic Milk, Oil, Cool Drink,
                                        and Coffee Vending Machines with reliable and user-friendly operation. These
                                        machines are designed for commercial, industrial, and retail environments. They
                                        ensure efficient, hygienic, and high-performance dispensing technology.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*Item 4*/}
                    <div class="item">
                        <div class="row align-items-center">
                            <div class="col-xl-5 col-lg-5 col-md-12">
                                <div
                                    style={{ "border": "1px solid rgba(0,142,210,0.5)", "borderRadius": "12px", "padding": "20px", "background": "rgba(0,0,0,0.2)" }}>
                                    <div class="testimonial-one__img">
                                        <img src="/assets/images/about/about4.png" alt=""
                                            style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12" style="">
                                <div class="testimonial-one__single"
                                    style={{ "background": "transparent !important", "boxShadow": "none !important", "paddingLeft": "30px" }}>
                                    <div
                                        style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 style={{ "fontSize": "32px", "fontWeight": "700", "color": "#fff", "marginBottom": "15px" }}>
                                        VAct Technologies <br /><span style={{ "color": "#008ed2" }}>Transforming Ideas</span>
                                    </h2>
                                    <p class="testimonial-one__text"
                                        style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>VAct Technologies
                                        transforms innovative ideas into complete product solutions with advanced design
                                        and development services. We deliver efficient solutions for industrial,
                                        automation, and embedded applications using modern and reliable technology. From
                                        concept to final product development, we ensure smart, innovative, and
                                        high-quality solutions.</p>
                                </div>
                            </div>
                            <div class="col-xl-1 col-lg-1 col-md-12 d-flex justify-content-center">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/*Testimonial One End*/}



    {/*Counter Three Start */}
    <section class="counter-three" style={{ "paddingTop": "40px", "paddingBottom": "60px", "background": "rgba(0, 142, 210, 0.015)" }}>
        <div class="container-fluid" style={{ "paddingLeft": "45px", "paddingRight": "45px" }}>
            <div class="product-spotlight-card" style={{ "marginLeft": "0", "marginRight": "0", "width": "100%" }}>
                <div class="row align-items-stretch">
                    {/* Content Column (Left Side) */}
                    <div class="col-lg-7 mb-5 mb-lg-0">
                        <div class="spotlight-content-wrapper">
                            <div class="cta-pill-tag mb-3" style={{ "background": "rgba(0, 142, 210, 0.06)", "color": "var(--eduvers-base)", "fontSize": "11px", "fontWeight": "700", "padding": "5px 12px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0, 142, 210, 0.1)", "display": "inline-flex", "alignItems": "center", "gap": "6px", "width": "fit-content" }}>
                                <i class="fas fa-graduation-cap"></i> Course Highlights
                            </div>
                            <h3 class="product-details__title" style={{ "fontSize": "36px", "fontWeight": "800", "color": "#1e293b", "lineHeight": "1.2", "marginBottom": "15px" }}>Machine Learning</h3>
                            <p style={{ "fontWeight": "700", "color": "var(--eduvers-base)", "fontSize": "18px", "marginBottom": "20px" }}>Build Intelligent, Data-Driven Applications for Modern Industries</p>
                            <p class="product-details__content-text1" style={{ "background": "rgba(0, 142, 210, 0.02)", "borderLeft": "4px solid var(--eduvers-base)", "padding": "15px 20px", "borderRadius": "4px 12px 12px 4px", "fontSize": "15px", "fontWeight": "600", "color": "#475569", "lineHeight": "1.6", "marginBottom": "20px" }}>
                                Acquire invaluable machine learning skills with our course, opening doors to diverse industries like technology, healthcare, finance, and marketing. Develop analytical thinking, critical problem-solving, and creativity for real-world challenges.
                            </p>
                            <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#64748b", "marginBottom": "25px" }}>
                                Our hands-on industrial projects ensure you?re not just learning but applying machine learning, enhancing your employability and success in related core industries.
                            </p>
                            <div style={{ "display": "flex", "gap": "15px", "marginTop": "15px", "flexWrap": "wrap" }}>
                                <a href="/contact" class="thm-btn" style={{ "width": "fit-content" }}>
                                    Enroll Now <span class="fas fa-arrow-right"></span>
                                </a>

                                <a href="syllabus.pdf" download class="thm-btn" style={{ "width": "fit-content", "background": "#0d2944" }}>
                                    Download Syllabus <span class="fas fa-download"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Image Column (Right Side) */}
                    <div class="col-lg-5">
                        <div class="spotlight-image-container" style={{ "minHeight": "480px" }}>
                            <div class="spotlight-image-glow"></div>
                            <img src="/assets/images/training/all.png" class="spotlight-img img-fluid" alt="Embedded Automotive Training Overview" style={{ "borderRadius": "14px", "width": "100%", "height": "100%", "objectFit": "contain" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*Counter Three End */}



    {/* Best Training Section Start */}
        <section class="best-training-section">
            <div class="container">
                <h2 class="best-training-title wow fadeInUp" data-wow-delay="100ms">WE ARE MORE THAN A TRAINING CENTER,
                    <br /><span>WE ARE A CAREER SHAPER</span>
                </h2>
                <p class="best-training-desc wow fadeInUp" data-wow-delay="200ms">
                    Our course is designed by <span class="text-primary">Industry experts </span>and comes with <span class="text-primary">100% placement assurance.</span> Our course is designed in such a way that the candidates taking our #pictraining and #armtraining feels they are more than <span class="text-primary">1.5 years experienced.</span> This enables them to face the interview for #embeddedjobs with confidence and clear the interviews. The candidates undergoing #embeddedtrainingcourse in our facility is equipped with #realtimeexamples like writing test code for Engine Control Unit (ECU), Infotainment system, Airbag controller etc., . Our embedded training also includes an introduction to the latest concepts like AUTOSAR, RTOS, Embedded Linux, Device drivers, Boot loader development etc
                </p>

                <div class="row align-items-center mt-5">
                    {/* Left features */}
                    <div class="col-lg-4 col-md-12 wow fadeInLeft" data-wow-delay="300ms">
                        <div class="training-feature-box">
                            <div class="training-feature-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="training-feature-content">
                                <h4>Secure Testing & Challenges</h4>
                                <p>Interactive activities that promote safe and smart exploration.</p>
                            </div>
                        </div>
                        <div class="training-feature-box">
                            <div class="training-feature-icon">
                                <i class="fas fa-running"></i>
                            </div>
                            <div class="training-feature-content">
                                <h4>Strong Base For All</h4>
                                <p>Building early skills in a fun and engaging way to support future success.</p>
                            </div>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div class="col-lg-4 col-md-12 text-center wow fadeInUp" data-wow-delay="400ms">
                        <div class="center-laptop-wrapper">
                            <img src="/assets/images/training/embedded.png" alt="Education Training" class="img-fluid"
                                onerror="this.src='/assets/images/about/about1.png'" />
                        </div>
                    </div>

                    {/* Right features */}
                    <div class="col-lg-4 col-md-12 wow fadeInRight" data-wow-delay="500ms">
                        <div class="training-feature-box">
                            <div class="training-feature-icon">
                                <i class="fas fa-user-shield"></i>
                            </div>
                            <div class="training-feature-content">
                                <h4>All-Round Personal Growth</h4>
                                <p>Focus on emotional, social, and cognitive development.</p>
                            </div>
                        </div>
                        <div class="training-feature-box">
                            <div class="training-feature-icon">
                                <i class="fas fa-hand-holding-heart"></i>
                            </div>
                            <div class="training-feature-content">
                                <h4>Safe & Caring Environment</h4>
                                <p>A nurturing atmosphere where children feel loved, encouraged, and secure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Best Training Section End */}



    <section>
        <div class="syllabus-wrapper">
            <h2 class="syllabus-title">Machine Learning and Deep Learning Syllabus</h2>
            <div class="title-divider"></div>

            <div class="accordion" id="syllabusAccordion">

                {/* Module 01 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m1">
                            <span class="num-badge">01</span>
                            <span class="ms-3">Beginners Level - ML Basics &amp; Data Preprocessing</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m1" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Machine Learning Basics and Software Environment</li>
                                <li><span class="dot"></span> Data and its preprocessing</li>
                                <li><span class="dot"></span> Public URL for Data &amp; Collecting Data</li>
                                <li><span class="dot"></span> Data Cleaning &amp; Reduction</li>
                                <li><span class="dot"></span> Data Normalization and Transformation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 02 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m2">
                            <span class="num-badge">02</span>
                            <span class="ms-3">Beginners Level - Data Visualization</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m2" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Correlation and Change Plot</li>
                                <li><span class="dot"></span> Composition and Distribution Plot</li>
                                <li><span class="dot"></span> Group and Deviation Plot</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 03 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m3">
                            <span class="num-badge">03</span>
                            <span class="ms-3">Beginners Level - Supervised Learning (Regression &amp; Classification)</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m3" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Regression: KNN Model &amp; SVM Model</li>
                                <li><span class="dot"></span> Classification: RF Model &amp; NB Model</li>
                                <li><span class="dot"></span> Model Evaluation</li>
                                <li><span class="dot"></span> Model Boosting</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 04 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m4">
                            <span class="num-badge">04</span>
                            <span class="ms-3">Beginners Level - Unsupervised Learning</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m4" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Apriori Algorithm for Recommendation Systems</li>
                                <li><span class="dot"></span> K-Means Clustering</li>
                                <li><span class="dot"></span> Model Evaluation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 05 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m5">
                            <span class="num-badge">05</span>
                            <span class="ms-3">Intermediate Level - Image Data &amp; Preprocessing</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m5" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Image Data and Preprocessing</li>
                                <li><span class="dot"></span> Public URL and Collecting Image Data</li>
                                <li><span class="dot"></span> Image Resize and Rescale</li>
                                <li><span class="dot"></span> Image Enhancement &amp; Augmentation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 06 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m6">
                            <span class="num-badge">06</span>
                            <span class="ms-3">Intermediate Level - Feature Extraction</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m6" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Feature Extraction Types</li>
                                <li><span class="dot"></span> Statistical Features</li>
                                <li><span class="dot"></span> Transform Features</li>
                                <li><span class="dot"></span> Features Optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 07 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m7">
                            <span class="num-badge">07</span>
                            <span class="ms-3">Intermediate Level - Classification (ML &amp; DL)</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m7" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Machine Learning Classification: KNN Model &amp; SVM Model</li>
                                <li><span class="dot"></span> Deep Learning Classification: CNN Model &amp; Transfer Learning Model</li>
                                <li><span class="dot"></span> Hyperparameter tuning &amp; Model Evaluation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 08 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m8">
                            <span class="num-badge">08</span>
                            <span class="ms-3">Intermediate Level - Segmentation (ML &amp; DL)</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m8" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> K-Means Clustering for segmentation</li>
                                <li><span class="dot"></span> YOLO Model for object detection and segmentation</li>
                                <li><span class="dot"></span> Model Evaluation</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 09 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m9">
                            <span class="num-badge">09</span>
                            <span class="ms-3">Professional Level - Model Preparation</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m9" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Model Deployment frameworks and platforms</li>
                                <li><span class="dot"></span> Construct Machine Learning or Deep Learning Model</li>
                                <li><span class="dot"></span> Validate &amp; Finalize ML/DL Models</li>
                                <li><span class="dot"></span> Prepare Model for Deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 10 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m10">
                            <span class="num-badge">10</span>
                            <span class="ms-3">Professional Level - Mobile &amp; Web App Deployment</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m10" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Basic of MIT App Inventor &amp; Mobile App Construction</li>
                                <li><span class="dot"></span> Deploy Model in Mobile App</li>
                                <li><span class="dot"></span> Cloud Deployment: Amazon Web Services (AWS) &amp; Google Cloud Platform (GCP)</li>
                                <li><span class="dot"></span> Building APIs for Model Deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Module 11 */}
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#m11">
                            <span class="num-badge">11</span>
                            <span class="ms-3">Professional Level - CI/CD &amp; Monitoring</span>
                            <span class="plus-icon">+</span>
                        </button>
                    </h2>
                    <div id="m11" class="accordion-collapse collapse" data-bs-parent="#syllabusAccordion">
                        <div class="accordion-body">
                            <ul class="syllabus-points">
                                <li><span class="dot"></span> Setting up CI/CD pipelines (GitHub Actions, Jenkins)</li>
                                <li><span class="dot"></span> Integrating version control with deployment processes</li>
                                <li><span class="dot"></span> Monitoring and Logging</li>
                                <li><span class="dot"></span> Security and Authentication</li>
                                <li><span class="dot"></span> Performance Optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>


    <section class="why-choose-one" style={{ "marginTop": "60px" }}>
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
                            <h2 class="section-title__title title-animation">VAct Technologies

                                <span>Machine Learning Training Course</span>
                            </h2>
                        </div>
                        <p class="why-choose-one__text"> VAct Technologies Machine Learning Training Course provides
                            industry-oriented training with real-time projects and hands-on practical
                            exposure to make students job-ready in embedded and automotive technologies.
                            <strong>Your Success Is Our Mission</strong> ? at VAct Technologies, we are
                            dedicated to helping you achieve your career goals with expert guidance and
                            practical learning.</p>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="why-choose-one__right">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4">
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-award"></span>
                                    </div>

                                    <h3 class="why-choose-one__title">
                                        Embrace Excellence
                                    </h3>

                                    <p class="why-choose-one__single-text">
                                        Industry-oriented embedded systems training with real-time projects and
                                        practical learning experience.
                                    </p>
                                </div>
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-handshake"></span>
                                    </div>

                                    <h3 class="why-choose-one__title">
                                        Industry Collaboration
                                    </h3>

                                    <p class="why-choose-one__single-text">
                                        Training developed with automotive OEM standards and modern embedded
                                        technologies.
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 mt-5 pt-4">
                                <div class="why-choose-one__single-img">

                                    <div class="why-choose-one__single-img-shape"></div>

                                    <img src="/assets/images/resources/why.png.jpeg" alt="Why Choose VAct Technologies"
                                        class="img-fluid" />

                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-microchip"></span>
                                    </div>
                                    <h3 class="why-choose-one__title">Standardized Training</h3>
                                    <p class="why-choose-one__single-text">Learn using industry-standard VAct Auto Edge
                                        Development Boards and advanced tools.</p>
                                </div>
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-users-cog"></span>
                                    </div>
                                    <h3 class="why-choose-one__title">Expert Guidance</h3>
                                    <p class="why-choose-one__single-text">Get mentorship, placement support, and
                                        career-focused training from experienced professionals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Certified Professionals Section Start */}
    <section class="certified-professionals-section" style={{ "background": "linear-gradient(135deg, #f0f7fc 0%, #ffffff 60%, #f0f4ff 100%)", "padding": "30px 0", "minHeight": "100vh", "display": "flex", "alignItems": "center" }}>
        <div class="container-fluid px-0">
            <div class="product-spotlight-card" style={{ "marginTop": "0", "borderRadius": "0", "boxShadow": "none" }}>
                <div class="row align-items-stretch g-0">

                    {/* Left: Image Column */}
                    <div class="col-lg-5 col-md-12 mb-5 mb-lg-0 wow fadeInLeft" data-wow-delay="100ms">
                        <div style={{ "height": "100%", "background": "radial-gradient(circle at 50% 50%, rgba(0,142,210,0.06) 0%, rgba(129,140,248,0.04) 100%)", "borderRadius": "0", "borderRight": "2px solid rgba(0,142,210,0.12)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "40px 60px", "position": "relative", "overflow": "hidden" }}>
                            {/* Glow effect */}
                            <div style={{ "position": "absolute", "width": "200px", "height": "200px", "background": "radial-gradient(circle, rgba(0,142,210,0.12) 0%, transparent 70%)", "top": "50%", "left": "50%", "transform": "translate(-50%,-50%)", "pointerEvents": "none", "animation": "pulse-glow 4s ease-in-out infinite alternate" }}></div>
                            <img src="/assets/images/training/certificate.png"
                                alt="VAct Technologies Certification"
                                class="img-fluid"
                                style={{ "borderRadius": "14px", "position": "relative", "zIndex": "2", "objectFit": "contain", "animation": "float-board 6s ease-in-out infinite", "filter": "drop-shadow(0 20px 40px rgba(0,142,210,0.15))" }}
                                onerror="this.src='/assets/images/about/about1.png'" />
                        </div>
                    </div>

                    {/* Right: Content Column */}
                    <div class="col-lg-7 col-md-12 wow fadeInRight" data-wow-delay="200ms">
                        <div class="spotlight-content-wrapper" style={{ "padding": "30px 60px 30px 50px" }}>

                            {/* Tag */}
                            <div class="cta-pill-tag mb-2" style={{ "background": "rgba(0,142,210,0.06)", "color": "var(--eduvers-base)", "fontSize": "10px", "fontWeight": "700", "padding": "3px 10px", "borderRadius": "20px", "textTransform": "uppercase", "letterSpacing": "0.5px", "border": "1px solid rgba(0,142,210,0.1)", "display": "inline-flex", "alignItems": "center", "gap": "5px", "width": "fit-content" }}>
                                <i class="fas fa-award"></i> Professional Certification
                            </div>

                            {/* Title */}
                            <h2 class="cp-title" style={{ "fontSize": "22px", "fontWeight": "800", "color": "#008ed2", "lineHeight": "1.25", "marginBottom": "10px" }}>
                                Become a VAct Technologies<br />
                                <span style={{ "color": "#0d2944" }}>Certified Automotive</span><br />
                                <span style={{ "color": "#0d2944" }}>Embedded Professional</span>
                            </h2>

                            {/* Divider */}
                            <div class="cp-divider mb-2">
                                <span></span><span></span><span></span>
                            </div>

                            {/* Paragraphs */}
                            <p class="cp-text" style={{ "fontSize": "12px", "lineHeight": "1.5", "marginBottom": "6px", "textAlign": "justify" }}>
                                The automotive industry is evolving rapidly, with embedded systems at its core. To thrive in
                                this competitive field, hands-on experience with industry-standard hardware, tools, and
                                software is essential. At VAct Technologies, we bridge the gap between academia and industry
                                by offering cutting-edge training on real-world automotive embedded systems.
                            </p>

                            <p class="cp-text" style={{ "fontSize": "12px", "lineHeight": "1.5", "marginBottom": "6px", "textAlign": "justify" }}>
                                Our AutoEdge Development Board provides students with practical exposure to AUTOSAR, CAN, LIN,
                                FlexRay, UDS, and real-time diagnostics?the very technologies used by leading automotive companies.
                                With access to the latest microcontrollers, industry-grade tools, and professional debugging
                                environments, students gain the skills that employers demand.
                            </p>

                            {/* List Title */}
                            <h4 class="cp-list-title" style={{ "fontSize": "12px", "marginBottom": "6px", "marginTop": "6px" }}>By enrolling in our Certified Automotive Embedded Program, you will:</h4>

                            {/* Feature List */}
                            <ul class="cp-features-list" style={{ "gap": "5px" }}>
                                <li style={{ "padding": "5px 0", "fontSize": "12px" }}>
                                    <div class="cp-check-icon" style={{ "width": "20px", "height": "20px", "minWidth": "20px", "fontSize": "10px" }}><i class="fas fa-check"></i></div>
                                    <span>Work on real-world automotive protocols and embedded software</span>
                                </li>
                                <li style={{ "padding": "5px 0", "fontSize": "12px" }}>
                                    <div class="cp-check-icon" style={{ "width": "20px", "height": "20px", "minWidth": "20px", "fontSize": "10px" }}><i class="fas fa-check"></i></div>
                                    <span>Gain expertise using the latest tools &amp; debugging techniques</span>
                                </li>
                                <li style={{ "padding": "5px 0", "fontSize": "12px" }}>
                                    <div class="cp-check-icon" style={{ "width": "20px", "height": "20px", "minWidth": "20px", "fontSize": "10px" }}><i class="fas fa-check"></i></div>
                                    <span>Learn from industry experts with hands-on project experience</span>
                                </li>
                                <li style={{ "padding": "5px 0", "fontSize": "12px" }}>
                                    <div class="cp-check-icon" style={{ "width": "20px", "height": "20px", "minWidth": "20px", "fontSize": "10px" }}><i class="fas fa-check"></i></div>
                                    <span>Be job-ready for top roles in automotive embedded engineering</span>
                                </li>
                            </ul>

                            {/* Bottom Line */}
                            <div class="cp-bottom-line" style={{ "margin": "8px 0" }}></div>
                            <p class="cp-bottom-text" style={{ "fontSize": "12px", "marginBottom": "8px" }}>
                                Transform your passion into a high-growth career with<br />
                                <strong style={{ "color": "#008ed2" }}>VAct Technologies</strong> ? where innovation meets expertise!
                            </p>

                            {/* CTA Buttons */}
                            <div style={{ "display": "flex", "gap": "10px", "marginTop": "10px", "flexWrap": "wrap" }}>
                                <a href="/contact" class="thm-btn" style={{ "width": "fit-content", "padding": "8px 18px", "fontSize": "12px" }}>Enroll Now <span class="fas fa-arrow-right"></span></a>
                                <a href="/contact" class="thm-btn" style={{ "width": "fit-content", "background": "#0d2944", "padding": "8px 18px", "fontSize": "12px" }}>Talk to Our Experts <span class="fas fa-comments"></span></a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* Certified Professionals Section End */}

    {/*Instructors Two Start */}
    <section class="instructors-two" style={{ "padding": "30px 0", "minHeight": "100vh", "display": "flex", "alignItems": "center", "width": "100%" }}>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">Our Instructors</span>
                </div>
                <h2 class="section-title__title title-animation">Meet the Team Passionate
                    <br />People, Exceptional <span>Talents</span>
                </h2>
            </div>
            <div class="row">
                {/*Instructors Two Single Start*/}
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-1.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">
                                        Mr.Kumaravel Pandurangan</a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>Founder Managing Directorr</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Instructors Two Single End*/}
                {/*Instructors Two Single Start*/}
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-2.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#"> Mr.Raj
                                        Pandrala</a>
                                </h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>Presenter</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Instructors Two Single End*/}
                {/*Instructors Two Single Start*/}
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-3.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">
                                        Mr A Prabhakaran</a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>Embedded Systems</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Instructors Two Single End*/}
                {/*Instructors Two Single Start*/}
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-4.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">Mr. Vijay
                                    </a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>GenAi</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-4.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">Mr Sandeep
                                    </a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>Automotive &amp; Embedded Systems</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                    <div class="instructors-two__single">
                        <div class="instructors-two__img-box">
                            <div class="instructors-two__img">
                                <img src="/assets/images/team/instructors-2-4.jpg" alt="" style={{ "height": "160px", "objectFit": "cover", "width": "100%" }} />
                            </div>
                            <div class="instructors-two__social-box">
                                <div class="instructors-two__plus">
                                    <span class="fas fa-share-alt"></span>
                                    <div class="instructors-two__social-list">
                                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                                        <a href="#"><span class="fab fa-twitter"></span></a>
                                    </div>
                                    <div class="instructors-two__social-list-2">
                                        <a href="#"><span class="fab fa-instagram"></span></a>
                                        <a href="#"><span class="fab fa-pinterest-p"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="instructors-two__content">
                            <div class="instructors-two__title-box" style={{ "minHeight": "50px", "display": "flex", "flexDirection": "column", "justifyContent": "center" }}>
                                <h3 class="instructors-two__title"><a href="#">Mr Sumitt
                                    </a></h3>
                                <p class="instructors-two__sub-title" style={{ "marginBottom": "0" }}>QnX &amp; Embdded Linux</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Instructors Two Single End*/}
            </div>
        </div>
    </section>
    {/*Instructors Two End */}

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
                    {/*Testimonial Four Single Start*/}

                    {/*Testimonial Four Single End*/}
                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/divakar.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Divakar.R</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Hardware Design <br /> Engineer</p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Divakar.R secured a role as a Hardware Design
                                        Engineer. With 7 years of experience,
                                        he has strong expertise in hardware design and development.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}
                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/dinesh-babu.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Dinesh Babu</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Embedded <br /> engineer</p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Dinesh Babu from Batch 51 secured a role as an
                                        Embedded Engineer. His technical
                                        skills and dedication helped him gain 2 years of successful industry experience.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}
                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/Abhinaya.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Abinaya</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Sr. SWE?<br />
                                            Automotive</p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Abinaya secured a role as Senior Software Engineer
                                        ? Automotive. With 4.5 years of
                                        experience, she has strong expertise in automotive software and embedded
                                        technologies.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}

                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/muk.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Mukesh.E</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">mech <br /> design p3
                                        </p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Mukesh.E secured a Mechanical Design P3 role with
                                        an impressive salary package of 7 LPA. His 7 years of experience showcase his
                                        strong professional growth in mechanical design engineering.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}

                    {/*Testimonial Four Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/karthick.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">KARTHICK T</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Hardware Design <br /> Engineer
                                        </p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">KARTHICK T achieved placement as a Hardware Design
                                        Engineer. With 6.5 years of
                                        experience, he has gained strong expertise in hardware design and validation.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}

                    {/*Testimonial Four 7 Single Start*/}
                    <div class="col-lg-4 col-md-6 mb-4">
                        <div class="testimonial-four__single">
                            <div class="testimonial-four__single-shape-1"></div>
                            <div class="testimonial-four__single-inner">
                                <div class="testimonial-four__client-info">
                                    <div class="testimonial-four__client-info-shape-1"></div>
                                    <div class="testimonial-four__client-img">
                                        <img src="/assets/images/placements/balamurali.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Balamurali</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Mechancial Design <br /> Engineer
                                        </p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Balamurali started his career as a Mechanical
                                        Design Engineer. His strong understanding of
                                        design concepts helped him excel in the mechanical industry.
                                    </p>

                                    <div class="testimonial-four__quote">
                                        <span class="fas fa-quote-right"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial Four Single End*/}



                </div>
            </div>
        </div>
    </section>
    {/*Testimonial Four End*/}

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

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </MainLayout>
    );
}
