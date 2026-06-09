import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const imgUrl = (p) => {
    if (!p) return null;
    if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
    return `/storage/${p}`;
};

export default function Contact({ offices, slides, testimonials, socials, contactPage }) {
    const social = socials?.settings || {};
    const cp = contactPage?.settings || {};
    const [activeOffice, setActiveOffice] = useState('contact-office-cbe');
    const office = offices?.[activeOffice] || {};
    const officeSettings = office?.settings || {};

    const [showFlash, setShowFlash] = useState(false);
    const [flashMsg, setFlashMsg] = useState('');

    const { data, setData, post, processing, errors } = useForm({
        name: '', email: '', subject: '', message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/contact', {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                setFlashMsg('Your message has been sent successfully!');
                setShowFlash(true);
                setTimeout(() => setShowFlash(false), 4000);
                setData({ name: '', email: '', subject: '', message: '' });
            },
        });
    };

    const delays = ['100ms', '200ms', '300ms'];

    return (
        <MainLayout>
            <Head title="Contact" />
            <link rel="stylesheet" href="/assets/css/contact.css?v=2.0" />
            <link rel="stylesheet" href="/assets/css/about.css?v=2.0" />

            {showFlash && (
                <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 9999, padding: '14px 24px', backgroundColor: '#065f46', color: '#fff', borderRadius: '10px', fontSize: '14px', fontWeight: 600, boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}>
                    {flashMsg}
                </div>
            )}


            <section class="contact-info-elite" style={{ marginTop: '120px' }}>
                <div class="container">
                    <div class="section-title text-center sec-title-animation animation-style1">
                        <div class="section-title__tagline-box">
                            <div class="section-title__tagline-shape"></div>
                            <div class="section-title__tagline-shape-2"></div>
                            <span class="section-title__tagline">{cp.tagline || 'Get In Touch'}</span>
                        </div>
                        <h2 class="section-title__title title-animation">{cp.heading_1 || "We're always"}
                            <span>{cp.heading_2 || 'Here to Help You'}</span>
                        </h2>
                        <p>{cp.subtitle || 'Reach out to us through any of these following ways'}</p>
                    </div>
                </div>
            </section>

            <section class="contact-page">
                <div class="container">
                    <div class="contact-page__inner">
                        <div class="office-switcher wow fadeInUp" data-wow-delay="100ms">
                            {Object.entries(offices || {}).map(([key, off]) => (
                                <button
                                    key={key}
                                    className={`switcher-btn ${activeOffice === key ? 'active' : ''}`}
                                    onClick={() => setActiveOffice(key)}
                                >
                                    {off.settings?.name || off.title || key}
                                </button>
                            ))}
                        </div>

                        <div class="address-above-map wow fadeInUp" data-wow-delay="120ms" style={{ marginTop: '20px' }}>
                            <div class="detail-card">
                                <div class="detail-card__icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="detail-card__content">
                                    <h4>Address</h4>
                                    <p id="office-address">{officeSettings.address || 'Address not set'}</p>
                                </div>
                            </div>
                        </div>

                        <div class="contact-map-wrapper wow fadeInUp" data-wow-delay="150ms">
                            <iframe id="office-map"
                                src={officeSettings.map_url || 'https://maps.google.com/maps?q=India&t=&z=10&output=embed'}
                                allowfullscreen>
                            </iframe>
                        </div>

                        <div class="row">
                            <div class="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
                                <div class="contact-form-card">
                                    <h3 class="contact-form-card__title">{cp.form_title || 'Get in Touch with Us'}</h3>
                                    <form onSubmit={submit} class="contact-form-card__form">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div class="contact-form-card__input-box">
                                                    <input type="text" name="name" placeholder="Input your name"
                                                        value={data.name}
                                                        onChange={(e) => setData('name', e.target.value)}
                                                        required />
                                                    {errors.name && <p style={{ color: '#dc2626', fontSize: '12px', margin: '4px 0 0' }}>{errors.name}</p>}
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                                <div class="contact-form-card__input-box">
                                                    <input type="email" name="email" placeholder="Input your email"
                                                        value={data.email}
                                                        onChange={(e) => setData('email', e.target.value)}
                                                        required />
                                                    {errors.email && <p style={{ color: '#dc2626', fontSize: '12px', margin: '4px 0 0' }}>{errors.email}</p>}
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="contact-form-card__input-box">
                                                    <input type="text" name="subject" placeholder="Subject"
                                                        value={data.subject}
                                                        onChange={(e) => setData('subject', e.target.value)}
                                                        required />
                                                    {errors.subject && <p style={{ color: '#dc2626', fontSize: '12px', margin: '4px 0 0' }}>{errors.subject}</p>}
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="contact-form-card__input-box">
                                                    <textarea name="message" placeholder="Submit your message request"
                                                        value={data.message}
                                                        onChange={(e) => setData('message', e.target.value)}
                                                        required></textarea>
                                                    {errors.message && <p style={{ color: '#dc2626', fontSize: '12px', margin: '4px 0 0' }}>{errors.message}</p>}
                                                </div>
                                                <div class="text-left">
                                                    <button type="submit" disabled={processing} class="contact-form-card__submit-btn">
                                                        {processing ? (cp.form_btn_sending || 'Sending...') : (cp.form_btn || 'Send message')}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="col-xl-6 wow fadeInRight" data-wow-delay="300ms">
                                <div class="contact-details-box">
                                    <h3 class="contact-details-box__title">{cp.details_title || 'Contact Details'}</h3>
                                    <p class="contact-details-box__subtext">{cp.details_subtext || 'Reach out to us directly for any technical validation, software design, embedded systems training or industrial automation inquiries.'}</p>

                                    <div class="contact-details-grid">
                                        <div class="detail-card">
                                            <div class="detail-card__icon">
                                                <i class="fa-solid fa-phone"></i>
                                            </div>
                                            <div class="detail-card__content">
                                                <h4>{cp.mobile_label || 'Mobile'}</h4>
                                                <p id="office-phone">{officeSettings.phone || '+91 96001 00882'}</p>
                                            </div>
                                        </div>

                                        <div class="detail-card">
                                            <div class="detail-card__icon">
                                                <i class="far fa-clock"></i>
                                            </div>
                                            <div class="detail-card__content">
                                                <h4>{cp.availability_label || 'Availability'}</h4>
                                                <p>{cp.availability_text || 'Daily 09 am - 05 pm'}</p>
                                            </div>
                                        </div>

                                        <div class="detail-card">
                                            <div class="detail-card__icon">
                                                <i class="fas fa-envelope"></i>
                                            </div>
                                            <div class="detail-card__content">
                                                <h4>{cp.email_label || 'Email'}</h4>
                                                <p id="office-email">{cp.email_text || 'careers@vact-tech.com'}</p>
                                            </div>
                                        </div>

                                        <div class="detail-card">
                                            <div class="detail-card__icon">
                                                <i class="fas fa-globe"></i>
                                            </div>
                                            <div class="detail-card__content">
                                                <h4>{cp.website_label || 'Website'}</h4>
                                                <p><a href={cp.website_url || 'https://www.vact-tech.com'} target="_blank" style={{ color: 'inherit' }}>{cp.website_name || 'www.vact-tech.com'}</a></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="contact-socials">
                                        <span class="contact-socials__title">{cp.social_title || 'Social Media:'}</span>
                                        <div class="contact-socials__links">
                                            <a href={social.facebook || '#'} class="social-link" target="_blank" rel="noopener noreferrer">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a href={social.twitter || 'https://x.com/VActTechnology'} class="social-link" target="_blank" rel="noopener noreferrer">
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                            <a href={social.linkedin || 'https://www.linkedin.com/company/vact-technologies/'} class="social-link" target="_blank" rel="noopener noreferrer">
                                                <i class="fab fa-linkedin-in"></i>
                                            </a>
                                            <a href={social.instagram || 'https://www.instagram.com/vacttech/'} class="social-link" target="_blank" rel="noopener noreferrer">
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                            <a href={social.youtube || 'https://www.youtube.com/channel/UCcpRq9mlF7iP3GiZuZBO3sg'} class="social-link" target="_blank" rel="noopener noreferrer">
                                                <i class="fab fa-youtube"></i>
                                            </a>
                                            <a href={social.telegram || 'https://t.me/vacttechnologycareers'} class="social-link" target="_blank" rel="noopener noreferrer">
                                                <i class="fab fa-telegram-plane"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="testimonial-two">
                <div class="container">
                    <div class="section-title text-left sec-title-animation animation-style2">
                        <div class="section-title__tagline-box">
                            <div class="section-title__tagline-shape"></div>
                            <div class="section-title__tagline-shape-2"></div>
                            <span class="section-title__tagline">{cp.testimonial_tagline || 'Testimonial'}</span>
                        </div>
                        <h2 class="section-title__title title-animation">{cp.testimonial_heading_1 || 'Trusted by Global'}
                            <br />Product <span>{cp.testimonial_heading_2 || 'Development Companies'}</span>
                        </h2>
                    </div>
                    <div class="testimonial-two__inner">
                        <div class="testimonial-two__carousel owl-carousel owl-theme">
                            {(testimonials || []).map((t) => (
                                <div key={t.id} class="item">
                                    <div class="testimonial-two__single">
                                        <div class="testimonial-two__single-inner">
                                            <div class="testimonial-two__header">
                                                <div class="testimonial-two__google-icon" style={{ marginLeft: '30px', marginBottom: '20px' }}>
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
                                            <p class="testimonial-two__text">{t.name} - {t.role}</p>
                                            <div class="testimonial-two__client-info">
                                                <div class="testimonial-two__client-img">
                                                    <img src={imgUrl(t.image) || '/assets/images/testimonial/testimonial-2-1.jpg'} alt="" />
                                                </div>
                                                <div class="testimonial-two__client-content">
                                                    <h3><a href={t.video_url || '#'} target="_blank">{t.name}</a></h3>
                                                    <p>{t.role || ''}</p>
                                                </div>
                                            </div>
                                            <div class="testimonial-two__quote">
                                                <i class="fas fa-quote-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

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
            <script src="/assets/js/script.js?v=3"></script>
        </MainLayout>
    );
}
