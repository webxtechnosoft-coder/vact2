import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function FuelMonitoringSystem() {
    return (
        <MainLayout>
            <Head title="FuelMonitoringSystem" />
            <link rel="stylesheet" href="/assets/css/fuel-monitoring.css" />
            
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
                                        <img src="/assets/images/services/fuel-monitoring-graphic.png" alt="Real-Time Fuel Analytics" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        Smart Fleet <br /><span style={{ "color": "#008ed2" }}>Fuel Management</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Regain complete control over your operating costs. Our advanced Fuel Monitoring System tracks fuel consumption, refills, and potential pilferage instances in real-time, delivering comprehensive spreadsheets to your fleet manager.</p>
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
                                        <img src="/assets/images/services/fuel-sensor.png" alt="High-Accuracy Fuel Level Sensors" style={{ "width": "100%", "borderRadius": "8px" }} />
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-12">
                                <div class="testimonial-one__single product-carousel-single">
                                    <div style={{ "width": "60px", "height": "60px", "background": "#008ed2", "borderRadius": "50%", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginBottom": "20px" }}>
                                        <i class="fas fa-quote-left" style={{ "color": "#fff", "fontSize": "24px" }}></i>
                                    </div>
                                    <h2 class="product-carousel-title">
                                        High-Accuracy <br /><span style={{ "color": "#008ed2" }}>Digital Level Sensors</span></h2>
                                    <p class="testimonial-one__text" style={{ "fontSize": "15px", "lineHeight": "1.8", "color": "#a0aec0" }}>Experience absolute telemetry precision. Utilizing advanced capacitive and ultrasonic level sensors integrated with custom digital filtration algorithms, we deliver unmatched 99.5% accuracy under any operating vibration.</p>
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
   

    {/* ST 4000 Section Start */}
    <section class="st4000-section py-5" style={{ "marginTop": "10px" }}>
        <div class="container">
            <div class="row">
                {/* Left Column */}
                <div class="col-lg-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div class="st4000-badge mb-3">ST 4000</div>
                    <h2 class="st4000-title mb-3">Fuel Monitoring System</h2>
                    <p class="st4000-desc mb-4">ST 4000 provides real-time fuel level monitoring, reliable data
                        transmission, and smart analytics for your entire fleet.</p>

                    <div class="st4000-graphic">
                        <img src="/assets/images/services/fuel-monitoring-graphic.png" alt="Fuel Monitoring Graphic"
                            class="img-fluid" />
                    </div>
                </div>

                {/* Right Column */}
                <div class="col-lg-6 wow fadeInRight" data-wow-delay="200ms" style={{ "marginTop": "50px" }}>
                    <h3 class="st4000-right-title mb-5">The ST 4000 Fuel Monitoring System Consists of the Following
                        Main Components</h3>

                    <div class="st4000-components">
                        {/* Card 1 */}
                        <div class="component-card wow fadeInUp" data-wow-delay="300ms">
                            <div class="component-number-bar">01</div>
                            <div class="component-card-body">
                                <div class="component-image-circle">
                                    <img src="/assets/images/services/fuel-sensor.png" alt="Fuel Sensor" />
                                </div>
                                <div class="component-card-text">
                                    <h4>Fuel Sensor</h4>
                                    <p>Measures the level of fuel in the fuel tank and sends this information to the
                                        ST4000 monitoring module.</p>
                                    <div class="component-accuracy"><i class="fas fa-check-circle"></i> Accuracy: {"<"} 1
                                            mm</div>
                                    </div>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div class="component-card wow fadeInUp" data-wow-delay="400ms">
                                <div class="component-number-bar">02</div>
                                <div class="component-card-body">
                                    <div class="component-image-circle">
                                        <img src="/assets/images/services/module.png" alt="Module" />
                                    </div>
                                    <div class="component-card-text">
                                        <h4>ST 4000 Fuel Monitoring Module</h4>
                                        <p>Collects information from the fuel sensor and sends the data to the base
                                            monitoring station over GPRS/GSM interface.</p>
                                    </div>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div class="component-card wow fadeInUp" data-wow-delay="500ms">
                                <div class="component-number-bar">03</div>
                                <div class="component-card-body">
                                    <div class="component-image-circle">
                                        <img src="/assets/images/services/station.png" alt="Station" />
                                    </div>
                                    <div class="component-card-text">
                                        <h4>Fuel Monitoring Station</h4>
                                        <p>Fuel monitoring station consists of our latest Android Apps / Web / Desktop
                                            based applications.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Features Bar */}
                <div class="st4000-features-bar mt-5 wow fadeInUp" data-wow-delay="600ms">
                    <div class="feature-item large">
                        <div class="feature-icon-circle">
                            <i class="fas fa-globe"></i>
                        </div>
                        <div class="feature-text">
                            <h5>Reliable. Connected. Always On.</h5>
                            <p>The station needs to be connected to the internet via static IP to enable the ST4000
                                module to send the data 24x7. These data are either stored and used for the analyzing
                                purpose or used for the online monitoring of your fleets.</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon-circle">
                            <i class="fas fa-cloud-upload-alt"></i>
                        </div>
                        <div class="feature-text">
                            <h5>24x7 Data Transmission</h5>
                            <p>Continuous and reliable data transfer</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon-circle">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="feature-text">
                            <h5>Secure & Accurate</h5>
                            <p>High precision sensing and secure communication</p>
                        </div>
                    </div>
                    <div class="feature-item">
                        <div class="feature-icon-circle">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="feature-text">
                            <h5>Smart Analytics</h5>
                            <p>Actionable insights across all platforms</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    {/* ST 4000 Section End */}


    {/*Category Two Start */}
    <section class="category-two" style={{ "paddingTop": "50px" }}>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                {/* <div class="section-title__tagline-box">
                        <div class="section-title__tagline-shape"></div>
                        <div class="section-title__tagline-shape-2"></div>
                        <span class="section-title__tagline">Category</span>
                    </div> */}
                <h2 class="section-title__title title-animation">With Our Fuel Cum <br />
                    Fleet Monitoring Solution<span> You Can</span>
                </h2>
            </div>
            <div class="row">
                {/*Category Two Single Start*/}
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                    <div class="category-two__single">

                        <div class="category-two__icon">
                            <span class="fas fa-gas-pump"></span>
                        </div>

                        <div class="category-two__single-inner">

                            <h3 class="category-two__title">
                                <a href="course-details.html">
                                    Stop the Fuel <br /> Pilferage
                                </a>
                            </h3>

                            <p class="category-two__text">
                                Track fuel usage in real-time and prevent fuel theft effectively.
                            </p>

                        </div>
                    </div>
                </div>
                {/*Category Two Single End*/}

                {/*Category Two Single Start*/}
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                    <div class="category-two__single">

                        <div class="category-two__icon">
                            <span class="fas fa-user-check"></span>
                        </div>

                        <div class="category-two__single-inner">

                            <h3 class="category-two__title">
                                <a href="course-details.html">
                                    Analyze Driver <br /> Performance
                                </a>
                            </h3>

                            <p class="category-two__text">
                                Monitor driving behavior to improve safety and efficiency.
                            </p>

                        </div>
                    </div>
                </div>
                {/*Category Two Single End*/}
                {/*Category Two Single Start*/}
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                    <div class="category-two__single">

                        <div class="category-two__icon">
                            <span class="fas fa-truck-moving"></span>
                        </div>

                        <div class="category-two__single-inner">

                            <h3 class="category-two__title">
                                <a href="course-details.html">
                                    Improve Fleet <br /> Utilization
                                </a>
                            </h3>

                            <p class="category-two__text">
                                Optimize vehicle usage and increase overall fleet productivity.
                            </p>

                        </div>
                    </div>
                </div>
                {/*Category Two Single End*/}
                {/*Category Two Single Start*/}
                <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                    <div class="category-two__single">

                        <div class="category-two__icon">
                            <span class="fas fa-car-side"></span>
                        </div>

                        <div class="category-two__single-inner">

                            <h3 class="category-two__title">
                                <a href="course-details.html">
                                    Fine Tune Vehicle <br /> Performance
                                </a>
                            </h3>

                            <p class="category-two__text">
                                Enhance vehicle efficiency through smart monitoring and analytics.
                            </p>

                        </div>
                    </div>
                </div>
                {/*Category Two Single End*/}

            </div>
        </div>
    </section>
    {/*Category Two End */}

    {/*Department One Start*/}
    <section class="department-one" style={{ "marginTop": "-100px" }}>
        <div class="department-one__bg-shape"
            style={{ backgroundImage: "url(assets/images/shapes/department-one-bg-shape.png)" }}></div>
        <div class="container">
            <div class="section-title text-center sec-title-animation animation-style1">
                {/* <div class="section-title__tagline-box">
                        <div class="section-title__tagline-shape"></div>
                        <div class="section-title__tagline-shape-2"></div>
                        <span class="section-title__tagline">Academic Departments</span>
                    </div> */}
                <h2 class="section-title__title title-animation">ST 4000 <br /> <span>Features</span>
                </h2>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <div class="department-one__left">
                        <div class="row justify-content-center gy-4">
                            {/*Department One Single Start */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-bell"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">GPRS, SMS, Email Alarms</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Provides instant alerts through GPRS, SMS, and email notifications for important vehicle events and security updates.
                                    </p>
                                </div>
                            </div>
                            {/*Department One Single End */}
                            {/*Department One Single Start */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-database"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">History Data Storage</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Stores previous tracking and activity data, allowing users to review vehicle movements and reports anytime.
                                    </p>
                                </div>
                            </div>
                            {/*Department One Single End */}
                            {/*Department One Single Start */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-battery-full"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Built-in Battery Backup</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Includes an internal backup battery that supports the device for up to 6 hours during power failure.
                                    </p>
                                </div>
                            </div>
                            {/*Department One Single End */}
                            {/*Department One Single Start */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-map-marker-alt"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">GPS Open/Close Detection</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Detects GPS signal status and monitors whether the GPS connection is active or disconnected.
                                    </p>
                                </div>
                            </div>
                            {/*Department One Single End */}
                            {/*Department One Single Start */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-camera"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Camera Support (Optional)</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Supports optional camera integration for capturing images or monitoring vehicle surroundings in real time.
                                    </p>
                                </div>
                            </div>
                            {/*Department One Single End */}
                            {/*Department One Single Start */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-gas-pump"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Multiple Fuel Sensor Support (Optional)</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Allows connection with multiple fuel sensors to accurately monitor fuel levels and consumption.
                                    </p>
                                </div>
                            </div>
                            {/*Department One Single End */}
                            {/*Department One Single Start */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="700ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-cloud-upload-alt"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Blind Area Supplementary Uploading</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Automatically uploads stored tracking data once the network signal is restored after entering blind areas.
                                    </p>
                                </div>
                            </div>
                            {/*Department One Single End */}
                            {/*Department One Single Start */}
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="800ms">
                                <div class="department-one__single">
                                    <div class="department-one__icon-and-title">
                                        <div class="department-one__icon">
                                            <span class="fas fa-draw-polygon"></span>
                                        </div>
                                        <h3 class="department-one__title">
                                            <a href="course.html">Geo Fence</a>
                                        </h3>
                                    </div>
                                    <p class="department-one__text">
                                        Creates virtual boundary zones and sends alerts whenever the vehicle enters or exits the defined area.
                                    </p>
                                </div>
                            </div>
                            {/*Department One Single End */}
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
