import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function CourseDetails() {
    return (
        <MainLayout>
            <Head title="CourseDetails" />
            
{/* Courses Grid Section Start */}
    <section class="courses-grid py-5" style={{ "background": "#fdfdfd", "paddingBottom": "70px" }}>
        <div class="container">
            {/* Section Header */}
            <div class="section-title text-center sec-title-animation animation-style2 mb-5">
                <div class="section-title__tagline-box">
                    <div class="section-title__tagline-shape"></div>
                    <div class="section-title__tagline-shape-2"></div>
                    <span class="section-title__tagline">VAct Training Programs</span>
                </div>
                <h2 class="section-title__title title-animation">Explore Our Industrial <br /><span>Embedded Systems Courses</span></h2>
            </div>

            {/* Filter Tabs */}
            <div class="d-flex justify-content-center flex-wrap gap-2 mb-5" id="course-filter-buttons">
                <button class="filter-btn active" data-filter="all">All Programs</button>
                <button class="filter-btn" data-filter="long-term">Professional Training (Long Term)</button>
                <button class="filter-btn" data-filter="short-term">Course Highlights (Short Term)</button>
                <button class="filter-btn" data-filter="careers">Careers & Outsourcing</button>
            </div>

            {/* Grid Content */}
            <div class="row" id="courses-container">

                {/* ==================== PROFESSIONAL / LONG TERM ==================== */}

                {/* Card 1: Embedded Automotive Engineer */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="long-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course1.png" alt="Embedded Automotive Engineer" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Automotive</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/embedded-automotive" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/embedded-automotive">Embedded Automotive Engineer in 2-3 Months</a>
                            </h3>
                         
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Advance</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>120 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>2-3 Months</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 2: QNX RTOS Training */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="long-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course2.png"alt="QNX RTOS Training" />
                            </div>
                            <div class="courses-three__tag">
                                <span>QNX RTOS</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/qnx-rtos-training" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/qnx-rtos-training">QNX RTOS Training and Development</a>
                            </h3>
                           
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Intermediate</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>60 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>80 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 3: FreeRTOS on STM32 */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="long-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course3.png" alt="FreeRTOS on STM32" />
                            </div>
                            <div class="courses-three__tag">
                                <span>FreeRTOS</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/freertos-training" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/freertos-training">FreeRTOS on STM32 Microcontroller</a>
                            </h3>
                          
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Beginner</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>45 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>60 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 4: Zephyr RTOS Training */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="long-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course4.png"  alt="Zephyr RTOS Training" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Zephyr RTOS</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/zephyr-rtos-training" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/zephyr-rtos-training">Zephyr RTOS Professional Training</a>
                            </h3>
                          
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Intermediate</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>50 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>70 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 5: Yocto Training */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="long-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course5.png"  alt="Yocto Training" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Embedded Linux</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/embedded-yocto-training" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/embedded-yocto-training">Yocto Project Embedded Linux Training</a>
                            </h3>
                         
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Advance</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>90 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>120 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 6: Linux System Programming Training */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="long-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course6.png"  alt="Linux System Programming" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Linux</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/linux-system-programming" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/linux-system-programming">Linux System Programming Training</a>
                            </h3>
                         
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Intermediate</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>55 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>80 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 7: Linux Device Driver Training */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="long-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course7.png"  alt="Linux Device Driver" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Drivers</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/linux-device-driver-training" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/linux-device-driver-training">Linux Device Driver Training Course</a>
                            </h3>
                           
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Advance</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>80 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>110 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ==================== SHORT-TERM COURSE HIGHLIGHTS ==================== */}

                {/* Card 8: Embedded C Programming Course */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="short-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course8.png"  alt="Embedded C Programming" />
                            </div>
                            <div class="courses-three__tag">
                                <span>C / C++</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/embedded-c-programming" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/embedded-c-programming">Embedded C Programming Course</a>
                            </h3>
                           
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Beginner</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>35 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>40 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 9: Hands-On Rust Programming */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="short-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course9.png"  alt="Hands-On Rust Programming" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Rust</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/rust-programming-training" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/rust-programming-training">Hands-On Rust Programming</a>
                            </h3>
                          
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Intermediate</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>40 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>50 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 10: Master Edge AI and IoT Development */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="short-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course10.png"  alt="Master Edge AI and IoT" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Edge AI / IoT</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/edgeai-iot-development-hands-on-tinyml" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/edgeai-iot-development-hands-on-tinyml">Master Edge AI and IoT Development</a>
                            </h3>
                           
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Advance</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>75 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>100 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 11: Controller Area Network Training Course */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="short-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course11.png"  alt="CAN Protocol" />
                            </div>
                            <div class="courses-three__tag">
                                <span>CAN Protocol</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/can-protocol" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/can-protocol">Controller Area Network Training Course</a>
                            </h3>
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Intermediate</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>30 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>45 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 12: STM 32 Bare Metal Programming */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="short-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course12.png"  alt="STM32 Bare Metal" />
                            </div>
                            <div class="courses-three__tag">
                                <span>STM32</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/STM32-bare-metal-programming" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/STM32-bare-metal-programming">STM32 Bare Metal Programming</a>
                            </h3>
                         
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Intermediate</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>65 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>90 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 13: STM32 Microcontroller Programming with HAL */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="short-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course13.png"  alt="STM32 HAL" />
                            </div>
                            <div class="courses-three__tag">
                                <span>STM32 HAL</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/stm32-hal-programming" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/stm32-hal-programming">STM32 Microcontroller Programming with HAL</a>
                            </h3>
                           
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Beginner</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>50 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>70 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 14: Python Programming Course */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="short-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course14.png"  alt="Python Programming" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Python</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/python" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/python">Python Programming Course</a>
                            </h3>
                           
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Beginner</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>40 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>45 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 15: Machine Learning */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="short-term">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course15.png"  alt="Machine Learning" />
                            </div>
                            <div class="courses-three__tag">
                                <span>AI / ML</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/machine-learning" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/machine-learning">Machine Learning & Neural Networks</a>
                            </h3>
                           
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Advance</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>80 Lessons</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>120 Hours</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* ==================== CAREER DEVELOPMENT / OUTSOURCING ==================== */}

                {/* Card 16: Implant Training / Internship */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="careers">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course16.png"  alt="Implant Training" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Internship</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/inplant-training" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/inplant-training">IMPLANT TRAINING / INTERNSHIP IN EMBEDDED REAL-TIME SYSTEMS</a>
                            </h3>
                        
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>All Levels</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>Practical</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>1-6 Months</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Card 17: Talent Based Outsourcing */}
                <div class="col-xl-4 col-lg-4 col-md-6 course-card-wrapper" data-category="careers">
                    <div class="courses-three__single">
                        <div class="courses-three__img-box">
                            <div class="courses-three__img">
                                <img src="/assets/images/course/course17.png"  alt="Talent Based Outsourcing" />
                            </div>
                            <div class="courses-three__tag">
                                <span>Outsourcing</span>
                            </div>
                        </div>
                        <div class="courses-three__content">
                            <div class="courses-three__doller-and-review">
                                <div class="courses-three__doller">
                                    <div class="google-rating-box">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
                                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                                        </svg>
                                        <div class="google-rating-stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="courses-three__btn-box">
                                    <a href="/talent-based-outsourcing" class="thm-btn">Enroll Now<span class="fas fa-arrow-right"></span></a>
                                </div>
                            </div>
                            <h3 class="courses-three__title">
                                <a href="/talent-based-outsourcing">Talent Based Outsourcing and Placement</a>
                            </h3>
                          
                            <ul class="courses-three__meta list-unstyled">
                                <li>
                                    <div class="icon"><span class="fas fa-book" style={{ "color": "#ff3ea5" }}></span></div>
                                    <p>Professional</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-list-ol" style={{ "color": "#ffc224" }}></span></div>
                                    <p>Placement</p>
                                </li>
                                <li>
                                    <div class="icon"><span class="fas fa-clock" style={{ "color": "#008ed2" }}></span></div>
                                    <p>Full Time</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

           
        </div>
    </section>
    {/* Courses Grid Section End */}

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
    <script src="/assets/js/script.js?v=3"></script>

    {/* Dynamic Category Filter Script */}
        </MainLayout>
    );
}
