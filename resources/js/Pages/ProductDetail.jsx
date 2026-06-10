import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

/* Helper function to wrap the last word of a title in a span for template styling */
function formatTitle(title) {
    if (!title) return '';
    const trimmed = title.trim();
    if (trimmed.includes('<span') || trimmed.includes('<a')) return trimmed;
    const words = trimmed.split(' ');
    if (words.length > 1) {
        const lastWord = words.pop();
        return `${words.join(' ')} <span>${lastWord}</span>`;
    }
    return trimmed;
}

/* ──────────────────────────────────────────────
   SHARED TESTIMONIAL BLOCK (bottom of every page)
────────────────────────────────────────────── */
function TestimonialTwo() {
    const reviews = [
        { name: 'Santhosh Selvam', role: 'Embedded Systems Trainee', img: '/assets/images/testimonial/testimonial-2-1.jpg', text: 'The embedded systems training at VAct Technologies was very informative and practical. The real-time projects improved my technical skills and confidence.' },
        { name: 'Mohan Ravi', role: 'Embedded Software Intern', img: '/assets/images/testimonial/testimonial-2-2.jpg', text: 'VAct Technologies provided excellent guidance throughout my internship. The trainers explained every concept clearly with hands-on experience.' },
        { name: 'Swathy', role: 'Embedded & IoT Intern', img: '/assets/images/testimonial/testimonial-2-3.jpg', text: 'The internship program helped me understand embedded systems and IoT applications in a practical way. The mentors were very supportive.' },
        { name: 'Hema M', role: 'Embedded Systems Intern', img: '/assets/images/testimonial/testimonial-2-4.jpg', text: 'I gained valuable knowledge in firmware development and embedded technology during my internship. The training sessions were interactive and useful.' },
    ];

    const GoogleIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
        </svg>
    );

    return (
        <section className="testimonial-two">
            <div className="container">
                <div className="section-title text-left sec-title-animation animation-style2">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape"></div>
                        <div className="section-title__tagline-shape-2"></div>
                        <span className="section-title__tagline">Testimonial</span>
                    </div>
                    <h2 className="section-title__title title-animation">Trusted by Global<br />Product <span>Development Companies</span></h2>
                </div>
                <div className="testimonial-two__inner">
                    <div className="testimonial-two__carousel owl-carousel owl-theme">
                        {reviews.map((r, i) => (
                            <div className="item" key={i}>
                                <div className="testimonial-two__single">
                                    <div className="testimonial-two__single-inner">
                                        <div className="testimonial-two__header">
                                            <div className="testimonial-two__google-icon" style={{ marginLeft: '30px', marginBottom: '20px' }}>
                                                <GoogleIcon />
                                            </div>
                                            <div className="testimonial-two__ratting">
                                                {[...Array(5)].map((_, j) => <span key={j} className="fas fa-star"></span>)}
                                            </div>
                                        </div>
                                        <p className="testimonial-two__text">{r.text}</p>
                                        <div className="testimonial-two__client-info">
                                            <div className="testimonial-two__client-img">
                                                <img src={r.img} alt={r.name} />
                                            </div>
                                            <div className="testimonial-two__client-content">
                                                <h3><a href="#">{r.name}</a></h3>
                                                <p>{r.role}</p>
                                            </div>
                                        </div>
                                        <div className="testimonial-two__quote"><i className="fas fa-quote-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ──────────────────────────────────────────────
   HERO CAROUSEL (testimonial-one) — shared
────────────────────────────────────────────── */
function HeroCarousel({ slides }) {
    if (!slides || slides.length === 0) return null;
    return (
        <section className="testimonial-one">
            <div className="container">
                <div className="testimonial-one__inner">
                    <div className="testimonial-one__carousel owl-carousel owl-theme">
                        {slides.map((slide, i) => (
                            <div className="item" key={i}>
                                <div className="row align-items-center">
                                    <div className="col-xl-5 col-lg-5 col-md-12">
                                        <div className="product-carousel-img-container">
                                            <div className="testimonial-one__img">
                                                <img src={slide.image} alt={slide.alt || slide.title} style={{ width: '100%', borderRadius: '8px' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="testimonial-one__single product-carousel-single">
                                            <div style={{ width: '60px', height: '60px', background: '#008ed2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                                <i className="fas fa-quote-left" style={{ color: '#fff', fontSize: '24px' }}></i>
                                            </div>
                                            <h2 className="product-carousel-title"
                                                dangerouslySetInnerHTML={{ __html: slide.title }}>
                                            </h2>
                                            <p className="testimonial-one__text" style={{ fontSize: '15px', lineHeight: '1.8', color: '#a0aec0' }}>{slide.text || slide.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ──────────────────────────────────────────────
   SPOTLIGHT CARD — shared by all layouts
────────────────────────────────────────────── */
function SpotlightSection({ spotlight }) {
    if (!spotlight) return null;
    const paragraphs = spotlight.paragraphs || 
        ([spotlight.description1, spotlight.description2].filter(Boolean)) || 
        [];

    return (
        <section className="product-details" style={{ paddingTop: '40px', paddingBottom: '60px' }}>
            <div className="container">
                <div className="product-spotlight-card">
                    <div className="row align-items-stretch">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="spotlight-content-wrapper">
                                {spotlight.badge && (
                                    <div className="cta-pill-tag mb-3" style={{ background: 'rgba(0, 142, 210, 0.06)', color: 'var(--eduvers-base)', fontSize: '11px', fontWeight: '700', padding: '5px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(0, 142, 210, 0.1)', display: 'inline-flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}
                                         dangerouslySetInnerHTML={{ __html: spotlight.badge }}>
                                    </div>
                                )}
                                <h3 className="product-details__title" style={{ fontSize: '36px', fontWeight: '800', color: '#1e293b', lineHeight: '1.2', marginBottom: '15px' }}>{spotlight.title}</h3>
                                {spotlight.subtitle && <p style={{ fontWeight: '700', color: 'var(--eduvers-base)', fontSize: '18px', marginBottom: '20px' }}>{spotlight.subtitle}</p>}
                                {spotlight.highlight && (
                                    <p className="product-details__content-text1" style={{ background: 'rgba(0, 142, 210, 0.02)', borderLeft: '4px solid var(--eduvers-base)', padding: '15px 20px', borderRadius: '4px 12px 12px 4px', fontSize: '15px', fontWeight: '600', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
                                        {spotlight.highlight}
                                    </p>
                                )}
                                {paragraphs.map((p, i) => (
                                    <p key={i} style={{ textAlign: 'justify', fontSize: '15px', lineHeight: '1.8', color: '#64748b', marginBottom: '20px' }}>{p}</p>
                                ))}
                                <a href="/contact" className="thm-btn" style={{ width: 'fit-content' }}>Enquire Now <span className="fas fa-arrow-right"></span></a>
                                {spotlight.show_social && (
                                    <div className="product-details__social-link d-inline-flex align-items-center gap-2 ml-4" style={{ marginLeft: '16px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '14px', color: '#475569' }}>Share: </span>
                                        <a href="https://www.facebook.com/VActTechnologies" style={{ width: '36px', height: '36px', background: 'rgba(0,142,210,0.06)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--eduvers-base)' }}><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://x.com/VActTechnology" style={{ width: '36px', height: '36px', background: 'rgba(0,142,210,0.06)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--eduvers-base)' }}><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.linkedin.com/company/vact-technologies/" style={{ width: '36px', height: '36px', background: 'rgba(0,142,210,0.06)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--eduvers-base)' }}><i className="fab fa-linkedin"></i></a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="spotlight-image-container">
                                <div className="spotlight-image-glow"></div>
                                <img src={spotlight.image} className="spotlight-img img-fluid" alt={spotlight.title} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ──────────────────────────────────────────────
   MACHINE LAYOUT — Overview + Specs Cards
────────────────────────────────────────────── */
function MachineLayout({ content }) {
    const overview = content.overview;
    const specs_cards = content.specs_cards || [];
    const overviewParagraphs = overview 
        ? (overview.paragraphs || [overview.description1, overview.description2].filter(Boolean)) 
        : [];

    return (
        <>
            {/* Overview Section */}
            {overview && (
                <section className="product-description" style={{ padding: '10px 0 30px 0' }}>
                    <div className="container">
                        <div className="product-spotlight-card mb-4">
                            <div className="row align-items-stretch">
                                <div className="col-lg-5 mb-5 mb-lg-0">
                                    <div className="spotlight-image-container" style={{ background: 'rgba(0,142,210,0.015)' }}>
                                        <img src={overview.image} className="spotlight-img img-fluid" alt={overview.title} style={{ maxHeight: '90%', maxWidth: '90%' }} />
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="spotlight-content-wrapper">
                                        <div className="cta-pill-tag mb-3" style={{ background: 'rgba(0, 142, 210, 0.06)', color: 'var(--eduvers-base)', fontSize: '11px', fontWeight: '700', padding: '5px 12px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.5px', border: '1px solid rgba(0, 142, 210, 0.1)', display: 'inline-flex', alignItems: 'center', gap: '6px', width: 'fit-content' }}>
                                            <i className={overview.badge_icon || 'fas fa-eye'}></i> {overview.badge || 'Product Overview'}
                                        </div>
                                        <h2 className="section-title__title" style={{ fontSize: '32px', color: '#1e293b', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px' }}
                                            dangerouslySetInnerHTML={{ __html: formatTitle(overview.title) }}>
                                        </h2>
                                        {overviewParagraphs.map((p, i) => (
                                            <p key={i} style={{ fontSize: '15px', lineHeight: '1.8', color: '#64748b', marginBottom: '15px', textAlign: 'justify' }}>{p}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Specs Cards */}
                        <div className="row">
                            {specs_cards.map((card, i) => {
                                const items = card.items || card.specs || [];
                                const cardCount = specs_cards.length;

                                if (cardCount === 1) {
                                    // 1 card layout: full width, centered card, items split into 2 columns
                                    const half = Math.ceil(items.length / 2);
                                    const col1 = items.slice(0, half);
                                    const col2 = items.slice(half);

                                    return (
                                        <div key={i} className="col-lg-12 mb-4">
                                            <div className="why-choose-card" style={{ textAlign: 'center' }}>
                                                <div className="why-choose-num">{String(i + 1).padStart(2, '0')}</div>
                                                <div className="why-choose-card-header" style={{ justifyContent: 'center', gap: '15px' }}>
                                                    <div className="why-choose-card-icon"><i className={card.icon}></i></div>
                                                    <h3 style={{ paddingRight: '0' }}>{card.title}</h3>
                                                </div>
                                                <div className="row" style={{ marginTop: '15px', textAlign: 'left' }}>
                                                    <div className="col-md-6">
                                                        <ul className="vact-specs-list">
                                                            {col1.map((item, j) => (
                                                                <li key={j}>
                                                                    <span className="vact-bullet-indicator"><i className="fas fa-chevron-right"></i></span>
                                                                    <span className="vact-bullet-label" dangerouslySetInnerHTML={{ __html: item }}></span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="vact-specs-list">
                                                            {col2.map((item, j) => (
                                                                <li key={j}>
                                                                    <span className="vact-bullet-indicator"><i className="fas fa-chevron-right"></i></span>
                                                                    <span className="vact-bullet-label" dangerouslySetInnerHTML={{ __html: item }}></span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    // 2 or 3+ cards layout: normal columns
                                    const colClass = cardCount === 2 ? 'col-lg-6 col-md-6' : 'col-lg-4 col-md-6';
                                    return (
                                        <div key={i} className={`${colClass} mb-4`}>
                                            <div className="why-choose-card">
                                                <div className="why-choose-num">{String(i + 1).padStart(2, '0')}</div>
                                                <div className="why-choose-card-header">
                                                    <div className="why-choose-card-icon"><i className={card.icon}></i></div>
                                                    <h3>{card.title}</h3>
                                                </div>
                                                <ul className="vact-specs-list" style={{ marginTop: '15px' }}>
                                                    {items.map((item, j) => (
                                                        <li key={j}>
                                                            <span className="vact-bullet-indicator"><i className="fas fa-chevron-right"></i></span>
                                                            <span className="vact-bullet-label" dangerouslySetInnerHTML={{ __html: item }}></span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

/* ──────────────────────────────────────────────
   BOARD LAYOUT — Why Choose + Hardware Specs + Training Perks + Advanced Projects + CTA
────────────────────────────────────────────── */
function BoardLayout({ content }) {
    const why_choose = content.why_choose;
    const hardware_specs = content.hardware_specs;
    const training_perks = content.training_perks;
    const advanced_projects = content.advanced_projects;
    const cta = content.cta;

    // Normalize why_choose
    const whyChooseHeading = why_choose?.heading || why_choose?.title || '';
    const whyChooseCards = why_choose?.cards || [];

    // Normalize hardware_specs and training_perks columns
    let columns = [];
    if (hardware_specs) {
        if (hardware_specs.columns) {
            columns = hardware_specs.columns;
        } else if (hardware_specs.specs) {
            const half = Math.ceil(hardware_specs.specs.length / 2);
            columns = [
                hardware_specs.specs.slice(0, half),
                hardware_specs.specs.slice(half)
            ];
        }
    }
    const trainingPerksItems = training_perks?.items || training_perks?.perks || [];

    // Normalize advanced_projects
    const advancedProjectsIntro = advanced_projects?.intro || advanced_projects?.description || '';
    const advancedProjectsCards = advanced_projects?.cards || [];

    // Normalize CTA
    const ctaHeading = cta?.heading || cta?.title || '';
    const ctaText = cta?.text || cta?.description || '';

    return (
        <>
            {/* Why Choose Section */}
            {why_choose && (
                <section className="vact-why-choose-section">
                    <div className="container">
                        <div className="section-title text-center mb-5">
                            <div className="why-choose-badge"
                                 dangerouslySetInnerHTML={{ __html: why_choose.badge || '<i class="fas fa-question-circle"></i> Why Choose Us' }}></div>
                            <h2 className="section-title__title" style={{ fontSize: '38px', color: '#1e293b', fontWeight: '800', marginTop: '10px' }}
                                dangerouslySetInnerHTML={{ __html: formatTitle(whyChooseHeading) }}>
                            </h2>
                            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--eduvers-base), #818cf8)', margin: '20px auto 0 auto', borderRadius: '2px' }}></div>
                        </div>
                        <div className="row mt-5">
                            {whyChooseCards.map((card, i) => {
                                const totalCards = whyChooseCards.length;
                                const isLastRowTwoCards = totalCards % 3 === 2;
                                const colClass = card.col_class || 
                                    (isLastRowTwoCards && i >= totalCards - 2 ? 'col-lg-6 col-md-6' : 'col-lg-4 col-md-6');

                                return (
                                    <div key={i} className={`${colClass} mb-4`}>
                                        <div className="why-choose-card">
                                            <div className="why-choose-num">{card.num || String(i + 1).padStart(2, '0')}</div>
                                            <div className="why-choose-card-header">
                                                <div className="why-choose-card-icon"><i className={card.icon}></i></div>
                                                <h3>{card.title}</h3>
                                            </div>
                                            <p>{card.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Hardware Specs + Training Perks */}
            {(hardware_specs || training_perks) && (
                <section className="vact-features-section">
                    <div className="container">
                        {hardware_specs && (
                            <div className="section-title text-center mb-5">
                                <div className="features-tag-badge"
                                     dangerouslySetInnerHTML={{ __html: hardware_specs.badge || '<i class="fas fa-microchip"></i> Premium Hardware Specs' }}></div>
                                <h2 className="section-title__title" style={{ fontSize: '38px', color: '#1e293b', fontWeight: '800', marginTop: '15px' }}
                                    dangerouslySetInnerHTML={{ __html: formatTitle(hardware_specs.title || 'Board Features') }}></h2>
                                <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--eduvers-base), #818cf8)', margin: '20px auto 0 auto', borderRadius: '2px' }}></div>
                            </div>
                        )}
                        <div className="row align-items-stretch">
                            {hardware_specs && (
                                <div className={training_perks ? 'col-lg-8 mb-5 mb-lg-0' : 'col-lg-12'}>
                                    <div className="row mt-2">
                                        {columns.map((col, ci) => (
                                            <div key={ci} className="col-md-6">
                                                <ul className="vact-specs-list">
                                                    {(col || []).map((item, j) => (
                                                        <li key={j}>
                                                            <span className="vact-bullet-indicator"><i className="fas fa-chevron-right"></i></span>
                                                            <span className="vact-bullet-label" dangerouslySetInnerHTML={{ __html: item }}></span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {training_perks && (
                                <div className={hardware_specs ? 'col-lg-4' : 'col-lg-12'}>
                                    <div className="perks-glow-card">
                                        <div className="perks-badge"
                                             dangerouslySetInnerHTML={{ __html: training_perks.badge || '<i class="fas fa-award"></i> Career Benefits' }}></div>
                                        <h3>{training_perks.title || 'Training Perks'}</h3>
                                        <div className="perks-accent-line"></div>
                                        <ul className="vact-perks-list">
                                            {trainingPerksItems.map((item, i) => (
                                                <li key={i}>
                                                    <div className="perk-bullet"><i className="fas fa-star text-white"></i></div>
                                                    <div className="perk-text" dangerouslySetInnerHTML={{ __html: item }}></div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}

            {/* Advanced Projects */}
            {advanced_projects && (
                <section className="projects-section" style={{ background: '#ffffff', padding: '60px 0', color: '#1e293b' }}>
                    <div className="container">
                        <div className="section-title text-center">
                            <h2 className="section-title__title title-animation" style={{ fontSize: '38px', color: '#1e293b', fontWeight: '800' }}
                                dangerouslySetInnerHTML={{ __html: formatTitle(advanced_projects.title || 'Advanced Projects') }}></h2>
                            <div style={{ width: '60px', height: '3px', background: 'var(--eduvers-base)', margin: '20px auto', borderRadius: '2px' }}></div>
                            {advancedProjectsIntro && <p style={{ color: '#64748b', maxWidth: '800px', margin: '20px auto', fontSize: '16px', lineHeight: '1.8' }}>{advancedProjectsIntro}</p>}
                        </div>
                        <div className="row mt-5">
                            {advancedProjectsCards.map((card, i) => {
                                const totalCards = advancedProjectsCards.length;
                                const isLastRowTwoCards = totalCards % 3 === 2;
                                const colClass = card.col_class || 
                                    (isLastRowTwoCards && i >= totalCards - 2 ? 'col-lg-6 col-md-6' : 'col-lg-4 col-md-6');

                                return (
                                    <div key={i} className={`${colClass} mb-4`}>
                                        <div className="why-choose-card">
                                            <div className="why-choose-card-header">
                                                <div className="why-choose-card-icon"><i className={card.icon}></i></div>
                                                <h3>{card.title}</h3>
                                            </div>
                                            <p>{card.text}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            {cta && (
                <section className="vact-cta-double">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-12 mb-5 mb-lg-0">
                                <div className="cta-content-left">
                                    <div className="cta-pill-tag"
                                         dangerouslySetInnerHTML={{ __html: cta.badge || '<i class="fas fa-rocket"></i> Career Acceleration Program' }}></div>
                                    <h2 className="title-animation">{ctaHeading}</h2>
                                    <p>{ctaText}</p>
                                    <a href="/contact" className="thm-btn-cta">Enroll Now <i className="fas fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12">
                                <div className="cta-image-wrapper">
                                    <div className="cta-image-glow"></div>
                                    <img src={cta.image} className="cta-floating-img img-fluid" alt={ctaHeading} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

/* ──────────────────────────────────────────────
   EMBCORE LAYOUT — Requirements + Specs + Debugging + Peripherals
────────────────────────────────────────────── */
function EmbCoreLayout({ content }) {
    const requirements = content.requirements;
    const debugging_guide = content.debugging_guide;
    const peripherals = content.peripherals;

    // Normalize requirements
    let reqCards = [];
    if (requirements) {
        if (requirements.cards) {
            reqCards = requirements.cards;
        } else if (requirements.specs) {
            reqCards = [
                {
                    title: requirements.title || "Requirements",
                    icon: "fas fa-cogs",
                    items: requirements.specs
                }
            ];
        }
    }

    // Normalize debugging guide
    const debugHeading = debugging_guide?.heading || debugging_guide?.title || '';
    const debugIntro = debugging_guide?.intro || '';
    const debugSteps = debugging_guide?.steps || [];

    // Normalize peripherals
    let periCards = [];
    if (peripherals) {
        if (peripherals.cards) {
            periCards = peripherals.cards;
        } else if (Array.isArray(peripherals)) {
            periCards = peripherals.map(p => ({
                title: p.title,
                icon: p.icon || 'fas fa-puzzle-piece',
                items: p.specs || p.items || []
            }));
        }
    }

    return (
        <>
            {/* Requirements + Specifications */}
            {requirements && (
                <section className="requirements" style={{ background: '#ffffff', padding: '40px 0', position: 'relative' }}>
                    <div className="container">
                        <div className="row">
                            {reqCards.map((card, i) => (
                                <div key={i} className="col-lg-6 mb-4">
                                    <div className="why-choose-card">
                                        <div className="why-choose-card-header">
                                            <div className="why-choose-card-icon"><i className={card.icon}></i></div>
                                            <h3>{card.title}</h3>
                                        </div>
                                        <ul className="vact-specs-list" style={{ marginTop: '15px' }}>
                                            {(card.items || []).map((item, j) => (
                                                <li key={j}>
                                                    <span className="vact-bullet-indicator"><i className="fas fa-chevron-right"></i></span>
                                                    <span className="vact-bullet-label" dangerouslySetInnerHTML={{ __html: item }}></span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Running & Debugging Guide */}
            {debugging_guide && (
                <section className="debugging-guide" style={{ background: 'rgba(0, 142, 210, 0.015)', padding: '60px 0' }}>
                    <div className="container">
                        <div className="section-title text-center">
                            <div className="why-choose-badge"
                                 dangerouslySetInnerHTML={{ __html: debugging_guide.badge || '<i class="fas fa-code-branch"></i> Running & Debugging' }}></div>
                            <h2 className="section-title__title" style={{ fontSize: '38px', color: '#1e293b', fontWeight: '800', marginTop: '10px' }}
                                dangerouslySetInnerHTML={{ __html: formatTitle(debugHeading) }}>
                            </h2>
                            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--eduvers-base), #818cf8)', margin: '20px auto 0 auto', borderRadius: '2px' }}></div>
                            {debugIntro && <p style={{ marginTop: '20px', color: '#64748b', fontSize: '16px' }}>{debugIntro}</p>}
                        </div>
                        <div className="row mt-5 justify-content-center">
                            <div className="col-lg-10">
                                <div className="product-spotlight-card" style={{ padding: '45px', borderLeft: '6px solid var(--eduvers-base)' }}>
                                    <div className="step-list">
                                        <div className="row">
                                            {/* Split steps into 2 columns */}
                                            {[0, 1].map(colIdx => {
                                                const half = Math.ceil(debugSteps.length / 2);
                                                const colSteps = colIdx === 0 ? debugSteps.slice(0, half) : debugSteps.slice(half);
                                                return (
                                                    <div key={colIdx} className={`col-lg-6 ${colIdx === 0 ? 'pr-lg-4 vact-step-left-col' : 'pl-lg-4'}`}>
                                                        {colSteps.map((step, si) => {
                                                            const globalIndex = colIdx === 0 ? si : si + Math.ceil(debugSteps.length / 2);
                                                            return (
                                                                <div key={si} className={`step-item d-flex ${si < colSteps.length - 1 || colIdx === 0 ? 'mb-4' : ''}`}>
                                                                    <div className="step-num">{String(globalIndex + 1).padStart(2, '0')}</div>
                                                                    <div className="step-content" dangerouslySetInnerHTML={{ __html: step }}></div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Onboard Peripherals */}
            {peripherals && (
                <section className="onboard-peripherals" style={{ background: '#ffffff', padding: '60px 0' }}>
                    <div className="container">
                        <div className="section-title text-center mb-5">
                            <div className="why-choose-badge"
                                 dangerouslySetInnerHTML={{ __html: peripherals.badge || '<i class="fas fa-cogs"></i> Hardware Peripherals' }}></div>
                            <h2 className="section-title__title" style={{ fontSize: '38px', color: '#1e293b', fontWeight: '800', marginTop: '10px' }}
                                dangerouslySetInnerHTML={{ __html: formatTitle(peripherals.heading || 'Onboard Peripherals') }}>
                            </h2>
                            <div style={{ width: '80px', height: '4px', background: 'linear-gradient(90deg, var(--eduvers-base), #818cf8)', margin: '20px auto 0 auto', borderRadius: '2px' }}></div>
                            <p style={{ color: '#64748b', maxWidth: '800px', margin: '20px auto', fontSize: '16px' }}>{peripherals.intro || 'Every component engineered for maximum reliability and standard integrations.'}</p>
                        </div>
                        <div className="row">
                            {periCards.map((card, i) => (
                                <div key={i} className={`${card.col_class || 'col-lg-4 col-md-6'} mb-4`}>
                                    <div className="why-choose-card">
                                        <div className="why-choose-card-header">
                                            <div className="why-choose-card-icon"><i className={card.icon}></i></div>
                                            <h3>{card.title}</h3>
                                        </div>
                                        <ul className="vact-specs-list" style={{ marginTop: '15px' }}>
                                            {(card.items || []).map((item, j) => (
                                                <li key={j}>
                                                    <span className="vact-bullet-indicator"><i className="fas fa-chevron-right"></i></span>
                                                    <span className="vact-bullet-label" dangerouslySetInnerHTML={{ __html: item }}></span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}

/* ──────────────────────────────────────────────
   MAIN PAGE COMPONENT
────────────────────────────────────────────── */
export default function ProductDetail({ product }) {
    const content = product.page_content || {};

    // Normalize layout types based on key existence
    const isMachineLayout = !!content.specs_cards || !!content.overview;
    const isEmbCoreLayout = !!content.requirements || !!content.debugging_guide || !!content.peripherals;
    const isBoardLayout = !isMachineLayout && !isEmbCoreLayout;

    // Re-initialise Owl Carousel whenever the product changes (Inertia SPA navigation)
    useEffect(() => {
        const $ = window.$;
        if (!$) return;

        const reinit = () => {
            // Hero carousel (testimonial-one)
            const $hero = $('.testimonial-one__carousel');
            if ($hero.length) {
                if ($hero.hasClass('owl-loaded')) $hero.owlCarousel('destroy');
                $hero.owlCarousel({
                    loop: true,
                    margin: 0,
                    nav: true,
                    smartSpeed: 500,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    navText: ['<span class="icon-left"></span>', '<span class="icon-right"></span>'],
                    responsive: { 0: { items: 1 }, 768: { items: 1 }, 1024: { items: 1 } }
                });
            }

            // Testimonial carousel (testimonial-two)
            const $test = $('.testimonial-two__carousel');
            if ($test.length) {
                if ($test.hasClass('owl-loaded')) $test.owlCarousel('destroy');
                $test.owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: true,
                    smartSpeed: 500,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
                });
            }
        };

        // Small delay to ensure DOM is painted
        const timer = setTimeout(reinit, 100);
        return () => clearTimeout(timer);
    }, [product.id]);

    return (
        <MainLayout>
            <Head>
                <title>{product.title || 'Product'}</title>
                <link rel="stylesheet" href="/assets/css/embedded-automotive.css" />
            </Head>

            <style>{`
                /* Custom premium styles for dynamic product layouts */
                .why-choose-card {
                    position: relative;
                    background: #ffffff;
                    border: 1px solid rgba(0, 142, 210, 0.08);
                    border-radius: 16px;
                    padding: 35px 30px;
                    box-shadow: 0 10px 30px rgba(0, 142, 210, 0.02);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    height: 100%;
                }
                .why-choose-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 35px rgba(0, 142, 210, 0.06);
                    border-color: rgba(0, 142, 210, 0.15);
                }
                .why-choose-num {
                    position: absolute;
                    top: 20px;
                    right: 25px;
                    font-size: 36px;
                    font-weight: 800;
                    color: rgba(0, 142, 210, 0.08);
                    font-family: var(--eduvers-font-two, 'Montserrat Alternates', sans-serif);
                    line-height: 1;
                }
                .why-choose-card-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 20px;
                }
                .why-choose-card-icon {
                    width: 46px;
                    height: 46px;
                    background: rgba(0, 142, 210, 0.06);
                    color: var(--eduvers-base, #008ed2);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    transition: all 0.3s ease;
                }
                .why-choose-card:hover .why-choose-card-icon {
                    background: var(--eduvers-base, #008ed2);
                    color: #ffffff;
                }
                .why-choose-card h3 {
                    font-size: 18px;
                    font-weight: 700;
                    color: #1e293b;
                    margin: 0;
                }
                .why-choose-card p {
                    font-size: 14.5px;
                    line-height: 1.6;
                    color: #64748b;
                    margin: 0;
                }

                /* Specs & Bullets */
                .vact-specs-list {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .vact-specs-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 10px;
                    margin-bottom: 12px;
                    font-size: 14.5px;
                    color: #475569;
                    line-height: 1.5;
                }
                .vact-bullet-indicator {
                    color: var(--eduvers-base, #008ed2);
                    font-size: 10px;
                    margin-top: 3px;
                }
                .vact-bullet-label {
                    flex-grow: 1;
                }

                /* Perks Card */
                .perks-glow-card {
                    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                    border-radius: 20px;
                    padding: 40px 30px;
                    color: #ffffff;
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }
                .perks-glow-card::before {
                    content: '';
                    position: absolute;
                    top: -50%;
                    right: -50%;
                    width: 200px;
                    height: 200px;
                    background: radial-gradient(circle, rgba(0, 142, 210, 0.15) 0%, transparent 70%);
                    pointer-events: none;
                }
                .perks-badge {
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    color: #38bdf8;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 4px 12px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 20px;
                }
                .perks-glow-card h3 {
                    font-size: 24px;
                    font-weight: 800;
                    color: #ffffff;
                    margin: 0 0 15px 0;
                }
                .perks-accent-line {
                    width: 50px;
                    height: 3px;
                    background: #008ed2;
                    margin-bottom: 25px;
                    border-radius: 2px;
                }
                .vact-perks-list {
                    list-style: none !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .vact-perks-list li {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    margin-bottom: 15px;
                }
                .perk-bullet {
                    width: 20px;
                    height: 20px;
                    background: rgba(0, 142, 210, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 8px;
                    margin-top: 3px;
                    flex-shrink: 0;
                }
                .perk-bullet i {
                    color: #38bdf8;
                }
                .perk-text {
                    font-size: 14.5px;
                    color: #cbd5e1;
                    line-height: 1.5;
                }

                /* CTA Styles */
                .vact-cta-double {
                    padding: 80px 0;
                    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                    border-top: 1px solid #e2e8f0;
                    border-bottom: 1px solid #e2e8f0;
                }
                .cta-content-left {
                    padding-right: 30px;
                }
                .cta-content-left h2 {
                    font-size: 36px;
                    font-weight: 800;
                    color: #0f172a;
                    line-height: 1.2;
                    margin-bottom: 20px;
                }
                .cta-content-left p {
                    font-size: 15.5px;
                    line-height: 1.8;
                    color: #475569;
                    margin-bottom: 30px;
                }
                .cta-pill-tag {
                    background: rgba(0, 142, 210, 0.08);
                    color: #008ed2;
                    font-size: 11px;
                    font-weight: 700;
                    padding: 5px 12px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    margin-bottom: 20px;
                }
                .thm-btn-cta {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: #008ed2;
                    color: #ffffff !important;
                    padding: 12px 28px;
                    border-radius: 8px;
                    font-weight: 700;
                    transition: all 0.3s ease;
                }
                .thm-btn-cta:hover {
                    background: #0d2944;
                    transform: translateY(-2px);
                }
                .cta-image-wrapper {
                    position: relative;
                    display: flex;
                    justify-content: center;
                }
                .cta-image-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 80%;
                    height: 80%;
                    background: radial-gradient(circle, rgba(0, 142, 210, 0.1) 0%, transparent 60%);
                    pointer-events: none;
                }
                .cta-floating-img {
                    position: relative;
                    z-index: 1;
                    max-height: 350px;
                    animation: float-board 6s ease-in-out infinite;
                }

                /* Stepper styles */
                .why-choose-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(0, 142, 210, 0.06);
                    color: var(--eduvers-base, #008ed2);
                    border: 1px solid rgba(0, 142, 210, 0.12);
                    padding: 6px 16px;
                    border-radius: 30px;
                    font-size: 13px;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 15px;
                }
                .step-item {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: flex-start !important;
                    margin-bottom: 24px !important;
                    background: transparent !important;
                    border: none !important;
                    padding: 0 !important;
                    box-shadow: none !important;
                }
                .step-item:last-child {
                    margin-bottom: 0 !important;
                }
                .step-num {
                    width: 32px;
                    height: 32px;
                    background: #008ed2;
                    color: #ffffff;
                    font-weight: 700;
                    font-size: 13px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 15px;
                    flex-shrink: 0;
                    box-shadow: 0 4px 10px rgba(0, 142, 210, 0.2);
                }
                .step-content {
                    font-size: 14.5px;
                    line-height: 1.6;
                    color: #475569;
                }
            `}</style>

            {/* Hero Carousel */}
            {(content.carousel || content.hero_carousel) && (
                <HeroCarousel slides={content.carousel || content.hero_carousel} />
            )}

            {/* Spotlight / Product Details Card */}
            {content.spotlight && <SpotlightSection spotlight={content.spotlight} />}

            {/* Dynamic Layout Body */}
            {isMachineLayout && <MachineLayout content={content} />}
            {!isMachineLayout && (
                <>
                    {(content.why_choose || content.hardware_specs || content.training_perks || content.advanced_projects || content.cta) && (
                        <BoardLayout content={content} />
                    )}
                    {(content.requirements || content.debugging_guide || content.peripherals) && (
                        <EmbCoreLayout content={content} />
                    )}
                </>
            )}

            {/* Bottom Testimonials */}
            <TestimonialTwo />
        </MainLayout>
    );
}
