import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function Index({ sliders, contents }) {
    const s = (key) => contents?.[key] || {};
    const hc = s('home-company');
    const hcs = hc.settings || {};
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
                        <li>
                            <a href="#products">
                                <div class="feature-two__single">
                                    <div class="feature-two__icon">
                                        <span class="icon-open-book"></span>
                                    </div>
                                    <div class="feature-two__content">
                                        <h3 class="feature-two__title">Our Products</h3>
                                        <div class="feature-two__read-more">
                                            Read More <span class="fas fa-arrow-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#services">
                                <div class="feature-two__single">
                                    <div class="feature-two__icon">
                                        <span class="icon-plant"></span>
                                    </div>
                                    <div class="feature-two__content">
                                        <h3 class="feature-two__title">Our Services</h3>
                                        <div class="feature-two__read-more">
                                            Read More <span class="fas fa-arrow-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#training">
                                <div class="feature-two__single">
                                    <div class="feature-two__icon">
                                        <span class="icon-agenda"></span>
                                    </div>
                                    <div class="feature-two__content">
                                        <h3 class="feature-two__title">Trainings</h3>
                                        <div class="feature-two__read-more">
                                            Read More <span class="fas fa-arrow-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                <div class="feature-two__single">
                                    <div class="feature-two__icon">
                                        <span class="icon-online-learning"></span>
                                    </div>
                                    <div class="feature-two__content">
                                        <h3 class="feature-two__title">Contact Us</h3>
                                        <div class="feature-two__read-more">
                                            Read More <span class="fas fa-arrow-right"></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
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



        {/*Enterprise Plan End*/}
        <section class="enterprise-plan">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5 wow fadeInLeft" data-wow-delay="100ms">
                        <div class="enterprise-plan__left">
                            <div class="section-title text-left sec-title-animation animation-style2">
                                <div class="section-title__tagline-box">
                                    <div class="section-title__tagline-shape"></div>
                                    <div class="section-title__tagline-shape-2"></div>
                                    <span class="section-title__tagline">WHO WE ARE</span>
                                </div>
                                <h2 class="section-title__title title-animation">More Than 15 years of Excellence in
                                    <span>Embedded Solutions</span>
                                </h2>
                            </div>
                            <div class="enterprise-plan__text-box">
                                <h3 style={{ "fontSize": "20px" }}>
                                    Trusted technology partner delivering innovative Embedded, IoT, AI & ML solutions for
                                    global industries.
                                </h3>
                            </div>
                            <ul class="enterprise-plan__points">
                                <li>
                                    <div class="icon">
                                        <span class="icon-check-mark"></span>
                                    </div>
                                    <p>Industry Expertise</p>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-check-mark"></span>
                                    </div>
                                    <p>Trusted Tier 1 & Tier 2 Partner</p>
                                </li>
                                <li>
                                    <div class="icon">
                                        <span class="icon-check-mark"></span>
                                    </div>
                                    <p>Skilled Engineering Team</p>
                                </li>
                            </ul>
                            <div class="enterprise-plan__btn-box">
                                <a href="/contact" class="thm-btn">Get In Touch<span class="fas fa-arrow-right"></span></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-7 wow fadeInRight" data-wow-delay="200ms">
                        <div class="enterprise-plan__right">
                            <div class="enterprise-plan__right-top">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="enterprise-plan__img">
                                            <img src="/assets/images/resources/enterprise-plan-img-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div class="enterprise-plan__img">
                                            <img src="/assets/images/resources/enterprise-plan-img-2.jpg" alt="" />
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
                                                <h3 class="odometer" data-count="15">00</h3>
                                                <span>+</span>
                                            </div>
                                            <p class="enterprise-plan__counter-count-text">Years Experiences</p>
                                        </div>
                                    </div>
                                    {/*Enterprise Plan Single End*/}
                                    {/*Enterprise Plan Single Start*/}
                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div class="enterprise-plan__counter-single">
                                            <div class="enterprise-plan__counter-count">
                                                <h3 class="odometer" data-count="75">00</h3>
                                                <span>+</span>
                                            </div>
                                            <p class="enterprise-plan__counter-count-text">Associates</p>
                                        </div>
                                    </div>
                                    {/*Enterprise Plan Single End*/}
                                    {/*Enterprise Plan Single Start*/}
                                    <div class="col-xl-4 col-lg-4 col-md-4">
                                        <div class="enterprise-plan__counter-single">
                                            <div class="enterprise-plan__counter-count">
                                                <h3 class="odometer" data-count="12">00</h3>
                                                <span>+</span>
                                            </div>
                                            <p class="enterprise-plan__counter-count-text">Active Clients</p>
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
                    {/*Courses One Single Start*/}
                    <div class="item">
                        <div class="courses-one__single">
                            <div class="courses-one__img-box">
                                <div class="courses-one__img">
                                    <img src="/assets/images/product/product13.png" alt="" />
                                </div>
                                <div class="courses-one__btn-box">
                                    <a href="/vact-autoedge-development-board" class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <div class="courses-one__content">
                                <div class="courses-one__ratting-and-price">
                                    <div class="courses-one__ratting-box">
                                        <span class="courses-one__ratting-text">5.2 (1520)</span>
                                    </div>
                                    <div class="courses-one__price">
                                        <div class="courses-one__ratting">
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="courses-one__sub-title">Embedded Systems</p>
                                <h3 class="courses-one__title"><a href="/vact-autoedge-development-board">Vact-Autoedge-
                                        development-board
                                        Course</a></h3>
                                <p class="courses-one__text">VAct AutoEdge Development Board based on STM32 designed & developed in-house by VAct Technologies for advanced learning driver development</p>

                            </div>
                        </div>
                    </div>
                    {/*Courses One Single End*/}
                    {/*Courses One Single Start*/}
                    <div class="item">
                        <div class="courses-one__single">
                            <div class="courses-one__img-box">
                                <div class="courses-one__img">
                                    <img src="/assets/images/product/product14.png" alt="" />
                                </div>
                                <div class="courses-one__btn-box">
                                    <a href="/automatic-milk-vending-machine" class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <div class="courses-one__content">
                                <div class="courses-one__ratting-and-price">
                                    <div class="courses-one__ratting-box">
                                        <span class="courses-one__ratting-text">4.2 (1630)</span>
                                    </div>
                                    <div class="courses-one__price">
                                        <div class="courses-one__ratting">
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="courses-one__sub-title">Smart Retail</p>
                                <h3 class="courses-one__title"><a href="/automatic-milk-vending-machine">Automatic Milk
                                        Vending Machine</a></h3>
                                <p class="courses-one__text">Our Milk Vending Machines are of fully automatic and reliable because of the utilization of highest quality components.</p>


                            </div>
                        </div>
                    </div>
                    {/*Courses One Single End*/}
                    {/*Courses One Single Start*/}
                    <div class="item">
                        <div class="courses-one__single">
                            <div class="courses-one__img-box">
                                <div class="courses-one__img">
                                    <img src="/assets/images/product/product7.png" alt="" />
                                </div>
                                <div class="courses-one__btn-box">
                                    <a href="/automatic-oil-vending-machine" class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <div class="courses-one__content">
                                <div class="courses-one__ratting-and-price">
                                    <div class="courses-one__ratting-box">
                                        <span class="courses-one__ratting-text">5.2 (3520)</span>
                                    </div>
                                    <div class="courses-one__price">
                                        <div class="courses-one__ratting">
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="courses-one__sub-title">Fluid Automation</p>
                                <h3 class="courses-one__title"><a href="/automatic-oil-vending-machine">Automatic oil
                                        vending machine</a></h3>
                                <p class="courses-one__text">Our Oil Vending Machines are delivering specific quantity of oil with high accuracy. These machines are extensively utilized in oil packaging industry, and shops & shops selling oil.</p>


                            </div>
                        </div>
                    </div>
                    {/*Courses One Single End*/}
                    {/*Courses One Single Start*/}
                    <div class="item">
                        <div class="courses-one__single">
                            <div class="courses-one__img-box">
                                <div class="courses-one__img">
                                    <img src="/assets/images/product/product8.png" alt="" />
                                </div>
                                <div class="courses-one__btn-box">
                                    <a href="/automatic-oil-pouch-packing-machine" class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <div class="courses-one__content">
                                <div class="courses-one__ratting-and-price">
                                    <div class="courses-one__ratting-box">
                                        <span class="courses-one__ratting-text">5.3 (1820)</span>
                                    </div>
                                    <div class="courses-one__price">
                                        <div class="courses-one__ratting">
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="courses-one__sub-title">Packaging Tech</p>
                                <h3 class="courses-one__title"><a href="/automatic-oil-pouch-packing-machine">Automatic Oil
                                        Pouch Packing</a></h3>
                                <p class="courses-one__text">We have established ourselves as a number one organization that's actively committed towards offering Oil Pouch Packing Machine.</p>


                            </div>
                        </div>
                    </div>
                    {/*Courses One Single End*/}
                    {/*Courses One Single Start*/}
                    <div class="item">
                        <div class="courses-one__single">
                            <div class="courses-one__img-box">
                                <div class="courses-one__img">
                                    <img src="/assets/images/product/product9.png" alt="" />
                                </div>
                                <div class="courses-one__btn-box">
                                    <a href="/cold-drink-vending-machine" class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <div class="courses-one__content">
                                <div class="courses-one__ratting-and-price">
                                    <div class="courses-one__ratting-box">
                                        <span class="courses-one__ratting-text">5.2 (1520)</span>
                                    </div>
                                    <div class="courses-one__price">
                                        <div class="courses-one__ratting">
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="courses-one__sub-title">Vending Solutions</p>
                                <h3 class="courses-one__title"><a href="/cold-drink-vending-machine">Cold Drink
                                        Vending Machine</a></h3>
                                <p class="courses-one__text">We are renowned for providing complete solution of soft Drink vending machine that that are specifically designed and made as per National and International quality standards.</p>


                            </div>
                        </div>
                    </div>
                    {/*Courses One Single End*/}
                    {/*Courses One Single Start*/}
                    <div class="item">
                        <div class="courses-one__single">
                            <div class="courses-one__img-box">
                                <div class="courses-one__img">
                                    <img src="/assets/images/product/product10.png" alt="" />
                                </div>
                                <div class="courses-one__btn-box">
                                    <a href="/automatic-milk-bag-packing-machine" class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <div class="courses-one__content">
                                <div class="courses-one__ratting-and-price">
                                    <div class="courses-one__ratting-box">
                                        <span class="courses-one__ratting-text">4.2 (1630)</span>
                                    </div>
                                    <div class="courses-one__price">
                                        <div class="courses-one__ratting">
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="courses-one__sub-title">Dairy Automation</p>
                                <h3 class="courses-one__title"><a href="/automatic-milk-bag-packing-machine">Automatic Milk bag Packing
                                        Machine</a></h3>
                                <p class="courses-one__text">We are manufacturing and supplying Automatic Milk Bag Packing Machine to our customers.These machines are used specifically for milk filling and are asked widely in the market.</p>



                            </div>
                        </div>
                    </div>
                    {/*Courses One Single End*/}
                    {/*Courses One Single Start*/}
                    <div class="item">
                        <div class="courses-one__single">
                            <div class="courses-one__img-box">
                                <div class="courses-one__img">
                                    <img src="/assets/images/product/product11.png" alt="" />
                                </div>
                                <div class="courses-one__btn-box">
                                    <a href="/automatic-coffee-vending-machine" class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <div class="courses-one__content">
                                <div class="courses-one__ratting-and-price">
                                    <div class="courses-one__ratting-box">
                                        <span class="courses-one__ratting-text">5.2 (3520)</span>
                                    </div>
                                    <div class="courses-one__price">
                                        <div class="courses-one__ratting">
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="courses-one__sub-title">Beverage Systems</p>
                                <h3 class="courses-one__title"><a href="/automatic-coffee-vending-machine">Automatic Coffee Vending
                                        Machine</a></h3>
                                <p class="courses-one__text">Make your hot cup of coffee in seconds. This coffee vending machine dispenses your cups on just press of button. We have been able to provide the customers with a remarkable assortment of 10 Option Fresh Milk Coffee Vending Machines.</p>

                            </div>
                        </div>
                    </div>
                    {/*Courses One Single End*/}
                    {/*Courses One Single Start*/}
                    <div class="item">
                        <div class="courses-one__single">
                            <div class="courses-one__img-box">
                                <div class="courses-one__img">
                                    <img src="/assets/images/product/product12.png" alt="" />
                                </div>
                                <div class="courses-one__btn-box">
                                    <a href="/open-top-chambers" class="thm-btn">Read more<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <div class="courses-one__content">
                                <div class="courses-one__ratting-and-price">
                                    <div class="courses-one__ratting-box">
                                        <span class="courses-one__ratting-text">5.3 (1820)</span>
                                    </div>
                                    <div class="courses-one__price">
                                        <div class="courses-one__ratting">
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                            <span class="fas fa-star"></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="courses-one__sub-title">Environmental Research</p>
                                <h3 class="courses-one__title"><a href="/open-top-chambers">Open Top <br />Chambers</a>
                                </h3>
                                <p class="courses-one__text">The goal of Open Top Chambers (OTCs) is to precisely manage and regulate the required CO2, temperature, and humidity inside the OTCs in order to examine how plants react to high CO2 and other gas environments</p>

                                <div class="courses-one__client-and-student">


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/*Courses One Single End*/}
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
                    {/*Research One Single Start*/}
                    <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div class="research-one__single">
                            <div class="research-one__img-box">
                                <div class="research-one__img">
                                    <img src="/assets/images/services/services9.png" alt="" />
                                </div>
                            </div>
                            <div class="research-one__content">
                                <div class="research-one__icon">
                                    <span class="fa fa-industry"></span>
                                </div>
                                <h3 class="research-one__title" style={{ "whiteSpace": "normal" }}><a href="/industrial-automation-and-control">INDUSTRIAL AUTOMATION &<br />CONTROL</a></h3>
                                <p class="research-one__text">Specialized automation and control solutions tailored for
                                    industrial efficiency.
                                </p>
                                <div class="mt-3 text-left">
                                    <a href="/industrial-automation-and-control" class="thm-btn" style={{ "padding": "10px 25px", "fontSize": "14px" }}>Read More <span class="fas fa-arrow-right" style={{ "fontSize": "12px", "marginLeft": "5px" }}></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Research One Single End*/}

                    {/*Research One Single Start*/}
                    <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div class="research-one__single">
                            <div class="research-one__img-box">
                                <div class="research-one__img">
                                    <img src="/assets/images/services/services5.png" alt="" />
                                </div>
                            </div>
                            <div class="research-one__content mb-5">
                                <div class="research-one__icon">
                                    <span class="fa fa-microchip"></span>
                                </div>
                                <h3 class="research-one__title" style={{ "whiteSpace": "normal" }}><a href="/embedded-systems">EMBEDDED SYSTEM</a></h3>
                                <p class="research-one__text">Expert embedded system development for real-time applications and IoT solutions.
                                </p>
                                <div class="mt-3 text-left">
                                    <a href="/embedded-systems" class="thm-btn" style={{ "padding": "10px 25px", "fontSize": "14px" }}>Read More <span class="fas fa-arrow-right" style={{ "fontSize": "12px", "marginLeft": "5px" }}></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Research One Single End*/}

                    {/*Research One Single Start*/}
                    <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div class="research-one__single">
                            <div class="research-one__img-box">
                                <div class="research-one__img">
                                    <img src="/assets/images/services/services6.png" alt="" />
                                </div>
                            </div>
                            <div class="research-one__content">
                                <div class="research-one__icon">
                                    <span class="fa fa-microchip"></span>
                                </div>
                                <h3 class="research-one__title" style={{ "whiteSpace": "normal" }}><a href="/embedded-offshore-outsourcing">EMBEDDED OFFSHORE OUTSOURCING</a></h3>
                                <p class="research-one__text">Cost-effective offshore outsourcing for embedded systems development and support.
                                </p>
                                <div class="mt-3 text-left">
                                    <a href="/embedded-offshore-outsourcing" class="thm-btn" style={{ "padding": "10px 25px", "fontSize": "14px" }}>Read More <span class="fas fa-arrow-right" style={{ "fontSize": "12px", "marginLeft": "5px" }}></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Research One Single End*/}

                    {/*Research One Single Start*/}
                    <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div class="research-one__single">
                            <div class="research-one__img-box">
                                <div class="research-one__img">
                                    <img src="/assets/images/services/services4.png" alt="" />
                                </div>
                            </div>
                            <div class="research-one__content">
                                <div class="research-one__icon">
                                    <span class="fa fa-gas-pump"></span>
                                </div>
                                <h3 class="research-one__title" style={{ "whiteSpace": "normal" }}><a href="/fuel-monitoring-system">FUEL MONITORING SYSTEM</a></h3>
                                <p class="research-one__text">Real-time fuel tracking and monitoring to prevent theft and optimize consumption.
                                </p>
                                <div class="mt-3 text-left">
                                    <a href="/fuel-monitoring-system" class="thm-btn" style={{ "padding": "10px 25px", "fontSize": "14px" }}>Read More <span class="fas fa-arrow-right" style={{ "fontSize": "12px", "marginLeft": "5px" }}></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Research One Single End*/}

                    {/*Research One Single Start*/}
                    <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div class="research-one__single">
                            <div class="research-one__img-box">
                                <div class="research-one__img">
                                    <img src="/assets/images/services/services8.png" alt="" />
                                </div>
                            </div>
                            <div class="research-one__content">
                                <div class="research-one__icon">
                                    <span class="fa fa-graduation-cap"></span>
                                </div>
                                <h3 class="research-one__title" style={{ "whiteSpace": "normal" }}><a href="/civil-pmc">CIVIL ENGINEERING</a></h3>
                                <p class="research-one__text">Comprehensive career guidance and placement support for
                                    professional success.
                                </p>
                                <div class="mt-3 text-left">
                                    <a href="/civil-pmc" class="thm-btn" style={{ "padding": "10px 25px", "fontSize": "14px" }}>Read More <span class="fas fa-arrow-right" style={{ "fontSize": "12px", "marginLeft": "5px" }}></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Research One Single End*/}

                    {/*Research One Single Start*/}
                    <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div class="research-one__single">
                            <div class="research-one__img-box">
                                <div class="research-one__img">
                                    <img src="/assets/images/services/services7.png" alt="" />
                                </div>
                            </div>
                            <div class="research-one__content">
                                <div class="research-one__icon">
                                    <span class="fa fa-users"></span>
                                </div>
                                <h3 class="research-one__title" style={{ "whiteSpace": "normal" }}><a href="/human-resource">HUMAN RESOURCES</a></h3>
                                <p class="research-one__text">Strategic HR solutions including recruitment, training, and workforce management.
                                </p>
                                <div class="mt-3 text-left">
                                    <a href="/human-resource" class="thm-btn" style={{ "padding": "10px 25px", "fontSize": "14px" }}>Read More <span class="fas fa-arrow-right" style={{ "fontSize": "12px", "marginLeft": "5px" }}></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Research One Single End*/}
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
                    <img src="/assets/images/backgrounds/about-one-bg1.jpeg" alt=""
                        style={{ "width": "100%", "height": "100%", "minHeight": "100vh", "objectFit": "cover" }} />
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="about-one__right"
                        style={{ "backgroundColor": "transparent", "padding": "50px 40px", "maxWidth": "660px", "margin": "0 auto", "display": "flex", "flexDirection": "column", "justifyContent": "center", "minHeight": "100vh" }}>

                        <div class="section-title text-left sec-title-animation animation-style2">
                            <div class="section-title__tagline-box mb-3">
                                <div class="section-title__tagline-shape"></div>
                                <div class="section-title__tagline-shape-2"></div>
                                <span class="section-title__tagline">Our Quality Training</span>
                            </div>
                            <h2 class="section-title__title title-animation">
                                Comprehensive Technical Training Program:
                                <span>From Basics to Industry-Ready Expertise</span>
                            </h2>
                        </div>
                        <p class="about-one__text">Our Training course aims at imparting technical skills to the students right from the basics to advanced level, such that by the end of the program the student is developed as the finished product, ready to join the industry.</p>
                        <h3 class="about-one__text-2"><span class="icon-graduate"></span>A Commitment to Excellence
                            in Modern Education.</h3>
                        <div class="about-one__points-box">
                            <ul class="about-one__points list-unstyled">
                                <li>
                                    <div class="icon">
                                        <span class="icon-check-mark"></span>
                                    </div>
                                    <h3>
                                        Industry Expertise</h3>
                                </li>
                                <li class="mt-4">
                                    <div class="icon">
                                        <span class="icon-check-mark"></span>
                                    </div>
                                    <h3>Pioneering Solutions for Automotive Giants</h3>
                                </li>
                            </ul>
                            <ul class="about-one__points list-unstyled">
                                <li>
                                    <div class="icon">
                                        <span class="icon-check-mark"></span>
                                    </div>
                                    <h3>Comprehensive IT/ITES Services</h3>
                                </li>
                                <li class="mt-4">
                                    <div class="icon">
                                        <span class="icon-check-mark"></span>
                                    </div>
                                    <h3>Technologically Diverse Embedded Solutions by Expert Technocrats</h3>
                                </li>
                            </ul>
                        </div>
                        <div class="about-one__btn-and-video mt-3">
                            <div class="about-one__btn-box">
                                <a href="/coursedetails" class="thm-btn">More About Us<span class="fas fa-arrow-right"></span></a>
                            </div>
                            <div class="about-one__video-link">
                                <a href="https://www.youtube.com/watch?v=C-qtY1kkK1E&list=PLATggQvVzwnuHqa_WQ3fNrbmWp5aVeTKI" class="video-popup">
                                    <div class="about-one__video-icon">
                                        <span class="fa fa-play"></span>
                                        <i class="ripple"></i>
                                    </div>
                                </a>
                                <h4 class="about-one__video-title">Watch Video</h4>
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
                                    <p class="testimonial-four__text">Divakar.R secured a role as a Hardware Design Engineer. With 7 years of experience, he has strong expertise in hardware design and development.
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
                                        <img src="/assets/images/placements/abhinaya.png" alt="" />
                                    </div>
                                    <div class="testimonial-four__client-content">
                                        <h3 class="testimonial-four__client-name"><a href="#">Abinaya</a>
                                        </h3>
                                        <p class="testimonial-four__sub-title">Sr. SWE-<br />
                                            Automotive</p>
                                    </div>
                                </div>
                                <div class="testimonial-four__content-box">
                                    <div class="testimonial-four__content-box-shape-1"></div>
                                    <h3 class="testimonial-four__content-title"><span>Our Associates
                                        </span><br />
                                    </h3>
                                    <p class="testimonial-four__text">Abinaya secured a role as Senior Software Engineer
                                        - Automotive. With 4.5 years of
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
                                        <img src="/assets/images/placements/Karthick.png" alt="" />
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

    {/*Start Brand Two*/}
    <section class="brand-two">
        <div class="container">
            <div class="brand-two__carousel owl-carousel owl-theme">
                {/*Start Brand Two Single*/}
                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/embdes.png" alt="" /></a>
                    </div>
                </div>
                {/*End Brand Two Single*/}

                {/*Start Brand Two Single*/}
                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/klaus.png" alt="" /></a>
                    </div>
                </div>
                {/*End Brand Two Single*/}

                {/*Start Brand Two Single*/}
                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/avin-systems.png" alt="" /></a>
                    </div>
                </div>
                {/*End Brand Two Single*/}

                {/*Start Brand Two Single*/}
                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/stratosphere.png" alt="" /></a>
                    </div>
                </div>
                {/*End Brand Two Single*/}

                {/*Start Brand Two Single*/}
                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/ancit.png" alt="" /></a>
                    </div>
                </div>
                {/*End Brand Two Single*/}

                {/*Start Brand Two Single*/}
                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/veawe.png" alt="" /></a>
                    </div>
                </div>
                {/*End Brand Two Single*/}

                {/*Start Brand Two Single*/}
                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/bosch.png" alt="" /></a>
                    </div>
                </div>
                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/auto-tricks.png" alt="" /></a>
                    </div>
                </div>

                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/booma.png" alt="" /></a>
                    </div>
                </div>


                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/larsen-toubro.png" alt="" /></a>
                    </div>
                </div>



                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/Reliance.png" alt="" /></a>
                    </div>
                </div>

                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/Pricol_logo.png" alt="" /></a>
                    </div>
                </div>

                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/tramlease.png" alt="" /></a>
                    </div>
                </div>

                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/illuminen.png" alt="" /></a>
                    </div>
                </div>

                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/teleios.png" alt="" /></a>
                    </div>
                </div>

                <div class="brand-two__single">
                    <div class="brand-two__single-inner">
                        <a href="#"><img src="/assets/images/career-partners/hcl.png" alt="" /></a>
                    </div>
                </div>

                {/*End Brand Two Single*/}
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
                    {/* Column 1 */}
                    <div class="brand-one__slide-col">
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/embdes.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/klaus.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div class="brand-one__slide-col">
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/avin-systems.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/stratosphere.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div class="brand-one__slide-col">
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/ancit.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/veawe.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                    </div>

                    {/* Column 4 */}
                    <div class="brand-one__slide-col">
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/bosch.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/auto-tricks.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                    </div>

                    {/* Column 5 */}
                    <div class="brand-one__slide-col">
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/booma.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/larsen-toubro.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                    </div>

                    {/* Column 6 */}
                    <div class="brand-one__slide-col">
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/Reliance.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/Pricol_logo.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                    </div>

                    {/* Column 7 */}
                    <div class="brand-one__slide-col">
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/tramlease.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/illuminen.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                    </div>

                    {/* Column 8 */}
                    <div class="brand-one__slide-col">
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/teleios.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                        <div class="brand-one__carousel-item">
                            <a href="#">
                                <div class="brand-one__single">
                                    <div class="brand-one__img">
                                        <img src="/assets/images/career-partners/hcl.png" alt="" />
                                    </div>
                                </div>
                            </a>
                            <div class="brand-one__shape-3"></div>
                            <div class="brand-one__shape-4"></div>
                        </div>
                    </div>

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
                            <h2 class="section-title__title title-animation">Driving Innovation in IT &

                                <span> Embedded Solutions</span>
                            </h2>
                        </div>
                        <p class="why-choose-one__text">VAct Technologies (ISO 9001:2015 certified) established in 2007 is providing IT/engineering solutions to many automobile OEMs and Tier 1 companies in India. VACT also provides IT/ITES Services that specialize in providing diverse embedded solutions managed by technocrats with expertise in various domains.</p>
                        <div class="why-choose-one__btn-box">
                            <a href="/contact" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="why-choose-one__right">
                        <div class="row">
                            <div class="col-xl-4 col-lg-4">
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fal fa-users"></span>
                                    </div>
                                    <h3 class="why-choose-one__title">Industry Expertise

                                    </h3>
                                    <p class="why-choose-one__single-text">Pioneering Solutions for Automotive
                                        Giants
                                    </p>
                                </div>
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-laptop-code"></span>
                                    </div>
                                    <h3 class="why-choose-one__title">Comprehensive IT/ITES Services</h3>
                                    <p class="why-choose-one__single-text">Technologically Diverse Embedded
                                        Solutions by Expert Technocrats</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 mt-5 pt-4">
                                <div class="why-choose-one__single-img">
                                    <div class="why-choose-one__single-img-shape mb-4"></div>
                                    <img src="/assets/images/resources/why.png.jpeg" alt="" />
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-microchip"></span>
                                    </div>
                                    <h3 class="why-choose-one__title">Embedded Solutions</h3>
                                    <p class="why-choose-one__single-text">Advanced Engineering and Embedded
                                        Technologies</p>
                                </div>
                                <div class="why-choose-one__single">
                                    <div class="why-choose-one__icon">
                                        <span class="fas fa-users-cog"></span>
                                    </div>
                                    <h3 class="why-choose-one__title">Expert Technocrats</h3>
                                    <p class="why-choose-one__single-text"> Skilled experts delivering innovative
                                        technology solutions.
                                        Experienced professionals across various domains</p>
                                </div>
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
                    <span class="section-title__tagline">How It Works</span>
                </div>
                <h2 class="section-title__title title-animation">Your Gateway to <span>Success</span></h2>
            </div>
            <ul>
                {/*Process One Single Start*/}
                <li>
                    <div class="process-one__single">
                        <div class="process-one__shape-1">
                            <img src="/assets/images/shapes/process-one-shape-1.png" alt="" />
                        </div>
                        <div class="process-one__icon">
                            <span class="icon-user"></span>
                        </div>
                        <div class="process-one__content">
                            <div class="process-one__count-box">
                                <div class="process-one__count-text">
                                    <p>Step</p>
                                </div>
                                <div class="process-one__count"></div>
                            </div>
                            <h3 class="process-one__title">Visit Our Page</h3>
                        </div>
                    </div>
                </li>
                {/*Process One Single End*/}
                {/*Process One Single Start*/}
                <li>
                    <div class="process-one__single">
                        <div class="process-one__shape-2">
                            <img src="/assets/images/shapes/process-one-shape-2.png" alt="" />
                        </div>
                        <div class="process-one__content">
                            <div class="process-one__count-box">
                                <div class="process-one__count-text">
                                    <p>Step</p>
                                </div>
                                <div class="process-one__count"></div>
                            </div>
                            <h3 class="process-one__title">Select Your Course</h3>
                        </div>
                        <div class="process-one__icon">
                            <span class="icon-open-book"></span>
                        </div>
                    </div>
                </li>
                {/*Process One Single End*/}
                {/*Process One Single Start*/}
                <li>
                    <div class="process-one__single">
                        <div class="process-one__shape-1">
                            <img src="/assets/images/shapes/process-one-shape-1.png" alt="" />
                        </div>
                        <div class="process-one__icon">
                            <span class="icon-graduation-cap"></span>
                        </div>
                        <div class="process-one__content">
                            <div class="process-one__count-box">
                                <div class="process-one__count-text">
                                    <p>Step</p>
                                </div>
                                <div class="process-one__count"></div>
                            </div>
                            <h3 class="process-one__title">Complete Training</h3>
                        </div>
                    </div>
                </li>
                {/*Process One Single End*/}
                {/*Process One Single Start*/}
                <li>
                    <div class="process-one__single" style={{ "marginLeft": "-20px" }}>
                        <div class="process-one__shape-2">
                            <img src="/assets/images/shapes/process-one-shape-2.png" alt="" />
                        </div>

                        <div class="process-one__content">
                            <div class="process-one__count-box">
                                <div class="process-one__count-text">
                                    <p>Step</p>
                                </div>
                                <div class="process-one__count"></div>
                            </div>
                            <h3 class="process-one__title">Placement Assistance</h3>
                        </div>
                        <div class="process-one__icon">
                            <span class="fas fa-user-tie"></span>
                        </div>
                    </div>
                </li>
                {/*Process One Single End*/}
                {/*Process One Single Start*/}
                <li>
                    <div class="process-one__single">
                        <div class="process-one__icon">
                            <span class="fas fa-briefcase"></span>
                        </div>
                        <div class="process-one__content">
                            <div class="process-one__count-box">
                                <div class="process-one__count-text">
                                    <p>Step</p>
                                </div>
                                <div class="process-one__count"></div>
                            </div>
                            <h3 class="process-one__title">Start Your Career</h3>
                        </div>

                    </div>
                </li>
                {/*Process One Single End*/}
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
                {/* Blog One Single Start */}
                 {/* Blog One Single Start */}
                <div class="col-xl-4 col-lg-6  wow fadeInLeft" data-wow-delay="100ms">
                    <div class="blog-one__single">
                        <div class="blog-one__img">
                            <img src="/assets/images/blogs/blog1.png" alt="" />
                            <div class="blog-one__plus">
                                <a href="/blogdetails"><i class="icon-plus"></i></a>
                            </div>
                            <div class="blog-one__tag">
                                <a href="/blogdetails">VAct Blog</a>
                            </div>
                        </div>
                        <div class="blog-one__content">
                            <ul class="blog-one__meta list-unstyled">
                                <li>
                                    <a href="#">
                                        <span class="fas fa-calendar-alt"></span>May 10, 2025
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="fas fa-comments"></span>Comment
                                    </a>
                                </li>
                            </ul>
                            <h3 class="blog-one__title"><a href="#">IoT's Ascendance and Future Prospects in the Indian Embedded industry</a></h3>
                            <div class="blog-one__author-and-btn">
                                <div class="blog-one__author-info">
                                    <div class="blog-one__author-img-box">
                                        <div class="blog-one__author-img">
                                            <img src="/assets/images/blog/blog-one-author-img-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="blog-one__author-content">
                                        <h4>V-Act Team</h4>
                                        <p>February 28, 2025</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div class="col-xl-4 col-lg-6  wow fadeInUp" data-wow-delay="200ms">
                    <div class="blog-one__single">
                        <div class="blog-one__img">
                            <img src="/assets/images/blogs/blog2.png" alt="" />
                            <div class="blog-one__plus">
                                <a href="/blogdetails"><i class="icon-plus"></i></a>
                            </div>
                            <div class="blog-one__tag">
                                <a href="/blogdetails">VAct Blog</a>
                            </div>
                        </div>
                        <div class="blog-one__content">
                            <ul class="blog-one__meta list-unstyled">
                                <li>
                                    <a href="/">
                                        <span class="fas fa-calendar-alt"></span>May 10, 2025
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span class="fas fa-comments"></span>Comment
                                    </a>
                                </li>
                            </ul>
                            <h3 class="blog-one__title"><a href="/">
                                    The Upward Trend: Python's Role in the Evolution of Embedded Systems</a></h3>
                            <div class="blog-one__author-and-btn">
                                <div class="blog-one__author-info">
                                    <div class="blog-one__author-img-box">
                                        <div class="blog-one__author-img">
                                            <img src="/assets/images/blog/blog-one-author-img-2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="blog-one__author-content">
                                        <h4>Engineering Team</h4>
                                        <p>February 28, 2025 </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog One Single End */}
                {/* Blog One Single Start */}
                <div class="col-xl-4 col-lg-6  wow fadeInRight" data-wow-delay="300ms">
                    <div class="blog-one__single">
                        <div class="blog-one__img">
                            <img src="/assets/images/blogs/blog3.png" alt="" />
                            <div class="blog-one__plus">
                                <a href="/blogdetails"><i class="icon-plus"></i></a>
                            </div>
                            <div class="blog-one__tag">
                                <a href="/blogdetails">VAct Blog</a>
                            </div>
                        </div>
                        <div class="blog-one__content">
                            <ul class="blog-one__meta list-unstyled">
                                <li>
                                    <a href="/">
                                        <span class="fas fa-calendar-alt"></span>May 10, 2025
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <span class="fas fa-comments"></span>Comment
                                    </a>
                                </li>
                            </ul>
                            <h3 class="blog-one__title"><a href="/">A Comprehensive Insight into Python for Embedded Systems Developers</a></h3>
                            <div class="blog-one__author-and-btn">
                                <div class="blog-one__author-info">
                                    <div class="blog-one__author-img-box">
                                        <div class="blog-one__author-img">
                                            <img src="/assets/images/blog/blog-one-author-img-3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div class="blog-one__author-content">
                                        <h4>Admin Team</h4>
                                        <p>December 22, 2023</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Blog One Single End */}
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
                            {/* Page 1 (Questions 1-5) */}
                            <div class="item">
                                <div class="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Do you teach AUTOSAR?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. The curriculum includes an introduction to AUTOSAR concepts. The
                                                proprietary VAct AutoEdge Development Board is integrated into the
                                                course to
                                                provide hands-on exposure to standard AUTOSAR layered software
                                                architectures
                                                and application configurations.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion active wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Do you provide projects?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. VAct operates on a product/project-oriented training model
                                                consisting of
                                                roughly 10% theory and 90% hands-on implementation. Depending on the
                                                track
                                                length, you will complete between 5 to 15 industry-aligned practical
                                                projects/examples, culminating in capstone automotive test cases.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4> Is this course suitable for beginners?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. The program features a beginner-friendly curriculum with no rigid
                                                technical prerequisites to enroll. The training modules safely scale
                                                starting from basic electronics, digital logic, and basic C execution
                                                before
                                                diving deep into complex microcontroller register programming.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Will I learn CAN and UDS protocols practically?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes, completely. Vehicle network architecture is a core focus area of the
                                                institute. Students set up virtual CAN networks, configure signal
                                                topologies, simulate ECU data packets, and structure diagnostic
                                                request/response frame formats using standard corporate environments
                                                like
                                                Vector CANoe and CANalyzer.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Are recorded sessions available?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. The program framework provides access to extensive video tutorials
                                                and
                                                matching source code archives, allowing students to review intricate
                                                peripheral registers or hardware debug scripts at their own pace outside
                                                class hours.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                            {/* Page 2 (Questions 6-10 Placeholder) */}
                            <div class="item">
                                <div class="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Is weekday and weekend batch available?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. VAct provides flexible models for both college students and industry
                                                professionals:

                                                ? Weekday Batches: Regular offline tracks (10:00 AM - 5:00 PM) or online
                                                formats (6:00 PM - 8:00 PM, Monday to Friday).
                                                ? Weekend Batches: Express learning slots specifically designed for
                                                working professionals unable to study during the work week.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>What skills are required for Embedded Automotive jobs?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>To secure a modern automotive deployment, you must master: Advanced
                                                Embedded C syntax
                                                (Pointers, Memory Map structures, Bitwise masking), 8/16/32-bit MCU
                                                Hardware Architectures (PIC, ARM Cortex/STM32 platforms), in-vehicle
                                                communication buses (CAN, LIN, UDS/ISO 14229), and core design
                                                environments like Vector CANoe/CANalyzer or deterministic RTOS
                                                scheduling.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>What is the difference between Embedded Systems and Automotive Embedded
                                            Systems?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>General embedded systems encompass everyday appliances and medical gear
                                                running basic peripheral protocols (I2C, SPI, UART). Automotive embedded
                                                systems focus explicitly on
                                                interconnected, high-speed, safety-critical multi-ECU vehicle
                                                environments. This specialized segment strictly requires fault-tolerant
                                                buses (CAN, LIN, FlexRay), diagnostic frameworks (UDS), and standard
                                                frameworks like AUTOSAR.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>What is the average salary for Embedded Automotive Engineers?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>In the Indian electronics market, starting freshers entering corporate
                                                automotive engineering teams command an average base starting between ?4
                                                LPA to ?7 LPA depending on the tier of the
                                                organization. Mid-to-senior domain specialists (6-10 years experience)
                                                regularly scale to packages ranging from ?12 LPA to ?40+ LPA.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>What will be my salary after completing this course?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Final salary packages heavily depend on individual technical evaluation
                                                results and prior
                                                background. VAct highlights that their highest achieved salary packages
                                                offer up to ?24 LPA for top performers clearing recruitment rounds
                                                seamlessly
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                            {/* Page 3 (Questions 11-15 Placeholder) */}
                            <div class="item">
                                <div class="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>What are the placement records?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>The institute boasts an established, verified placement success track
                                                record of a 90% placement rate with over 1000+ total alumni successfully
                                                deployed across major tech corridors. Graduates frequently step into
                                                Tier-1 global automotive suppliers and OEMs including Volvo, Bosch,
                                                Continental, Capgemini, Visteon, HCL, and TCS.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Do you provide placement assistance?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. 100% comprehensive placement assistance is provided. This ecosystem
                                                covers rigorous structural mock interview drill blocks, dedicated resume
                                                engineering, and ongoing project review alignments customized to pass
                                                client technical assessments smoothly.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>What job roles can I apply for after this course?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Successful certification clears you to step into multiple professional
                                                titles: Embedded Software Engineer, Automotive Embedded Engineer,
                                                Firmware Developer, Automotive Testing & Validation Engineer, or
                                                Diagnostics Specialist (CAN/UDS/CANoe expert), FAE ( Field Application
                                                Engineer), Medical Device Programmer, Drone Consultant,
                                                Defence/Aerospace Engineer, System Analyst, Principle Engineer,
                                                Architect, Product Owner to CTO/CEO</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>What is this training about?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>This training focuses on Embedded Systems, including Embedded C,
                                                Microcontrollers, STM32, ESP32, RTOS, IoT, and communication protocols
                                                like UART, SPI, I2C, and CAN.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Who can join this course?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Students from CSE, ECE, EEE, IT, Mechatronics, and freshers interested in
                                                Embedded Systems can join. However VAct has trained and placed non core
                                                students like Bio Technology, Mechanical stream of students</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>
                            {/* Page 4 (Questions 16-20 Placeholder) */}
                            <div class="item">
                                <div class="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Is this course suitable for CSE students?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. CSE students can learn embedded programming, firmware development,
                                                IoT, and real-time systems through this course.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Will this training start from basics?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. The course starts from basic concepts and gradually moves to
                                                advanced topics. No Prior coding experience is needed. Course is
                                                designed on 10% theory and 90% Practical/Hands-On.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Is coding knowledge required before joining?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Basic programming knowledge is helpful, but not mandatory. No Prior
                                                coding experience is needed. Course is designed on 10% theory and 90%
                                                Practical/Hands-On. This course gives the students around 1.5 to 2 years
                                                of real world experience working on vending machines and other real
                                                products</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Which programming language will be taught?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Embedded C will be mainly taught along with basics of firmware
                                                development for 8/32 bit microcontroller</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Do I need to buy any hardware or software to learn this course?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>All the courses are designed to be run on the open source & evaluation
                                                tools. No hardware or software is needed to learn this course. How ever
                                                if you need to have practical hands on the hardware, you can always
                                                visit VAct Technologies campus. VAct has in-house designed hardware used
                                                for the training. These boards are used by established companies like
                                                HCL and Bosch for their internal training. So when you take the training
                                                you will have an edge on the job market standing apart from others .</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>

                            {/* Page 5 (Questions 16-20 Placeholder) */}
                            <div class="item">
                                <div class="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Is the course available online?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes the course available online/offline mode. There is no difference
                                                between online/offline mode as long as student is committed to learn and
                                                complete the assignments and assessment. While on the offline mode
                                                trainer directly monitors the students progress, online mode this
                                                monitoring is less </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Will practical sessions be available?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. The training includes hands-on (90%) practical sessions and
                                                real-time project work</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Which hardware boards will be used?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>STM32F405xxx ( Inhouse designed VAct development boards) , ESP32,
                                                Arduino, and other development boards will be used based on the module.
                                            </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Will projects be provided?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. Mini projects and real-time projects will be provided during the
                                                training. </p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Is IoT included in this course?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. IoT concepts and cloud integration basics are included.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>

                            {/* Page 6 (Questions 16-20 Placeholder) */}
                            <div class="item">
                                <div class="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Will RTOS be covered?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. FreeRTOS basics and task scheduling concepts will be covered.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4> Will mock interviews be conducted?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. Technical mock interviews and HR preparation sessions will be
                                                conducted.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Is internship support available?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. Internship guidance/support will be provided based on performance
                                                and availability</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Will certificates be provided?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. Course completion certificates will be provided after successful
                                                completion.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>What is the course duration?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>The duration depends on the selected batch and module.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>

                            {/* Page 7 (Questions 16-20 Placeholder) */}
                            <div class="item">
                                <div class="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Are online classes available?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes. Both online and offline classes are available.</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>How can I enroll in the course?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>You can contact the training coordinator through call or WhatsApp for
                                                enrollment details. You will be provided with a registration link and
                                                details of the course to go to the next step</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Is there a discount available on the course</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes there is a discount declared by the management of Vact Tech. Most
                                                attractive discount is the 50% discount for the students and 20%
                                                discount for the people who already is working on different field and
                                                want to re-shape the career</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="300ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Which CAN/CANoe training available seperate?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes CAN/CanOE (equivalent ) training available separate</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInLeft" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4> Who can take this course if they are already working in embedded field
                                        </h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>We have instances where a maintenance guy in ESI, Tier 1 companies and
                                                automotive supplier has taken the course and have reshaped their career.
                                                So this depends on the seriousness and commitment towards learning</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                            </div>


                            {/* Page 8 (Questions 16-20 Placeholder) */}
                            <div class="item">
                                <div class="accrodion wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4>Do you have Linux/QNX/Zypher training available</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>Yes Linux/QNX/Zypher RTOS training are available for the corporate with a
                                                batch of 20-25 strength. But if you need training individually we will
                                                let you know if there is a batch formed for you to consider upgrading
                                                yourself in embedded training</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>
                                <div class="accrodion wow fadeInRight" data-wow-delay="100ms"
                                    data-wow-duration="1500ms">
                                    <div class="accrodion-title">
                                        <h4> Will mock interviews be conducted?</h4>
                                    </div>
                                    <div class="accrodion-content">
                                        <div class="inner">
                                            <p>A detailed TOC/Sylabus is available for the download from the website
                                                www.vact-tech.com. You can also reach our number 7871909590 or
                                                9600100882 for more details</p>
                                        </div>{/* /.inner */}
                                    </div>
                                </div>

                            </div>



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
        </MainLayout>
    );
}
