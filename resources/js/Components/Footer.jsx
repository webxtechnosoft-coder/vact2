import { useEffect } from 'react';

export default function Footer() {
    useEffect(() => {
        window.switchFooterMap = function (office) {
            const cbe = document.getElementById('footer-map-cbe');
            const chn = document.getElementById('footer-map-chn');
            const btnCbe = document.getElementById('btn-cbe');
            const btnChn = document.getElementById('btn-chn');
            if (cbe) cbe.style.display = 'none';
            if (chn) chn.style.display = 'none';
            if (btnCbe) btnCbe.classList.remove('active');
            if (btnChn) btnChn.classList.remove('active');
            const map = document.getElementById('footer-map-' + office);
            const btn = document.getElementById('btn-' + office);
            if (map) map.style.display = 'block';
            if (btn) btn.classList.add('active');
        };
        return () => { delete window.switchFooterMap; };
    }, []);

    return (
        <>
            <link rel="stylesheet" href="/assets/css/footer.css" />
            <footer className="site-footer-two">
                <div className="site-footer-two__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/site-footer-two-bg.jpg)" }}></div>
                <div className="container">
                    <div className="site-footer-two__inner">
                        <div className="site-footer-two__top">
                            <div className="row">
                                <div className="col-xl-5">
                                    <div className="site-footer-two__top-left">
                                        <div className="site-footer-two__logo-box">
                                            <div className="site-footer-two__logo">
                                                <a href="/"><img src="/assets/images/resources/vact-logo.webp" alt="" /></a>
                                            </div>
                                            <p className="site-footer-two__text-1">VAct Technologies is dedicated to delivering high-quality and innovative technology solutions for modern industries. The company specializes in customized software development, testing, and validation services. It works across domains such as automotive, mobile, embedded systems, and wireless applications. With experienced professionals and the latest technologies, VAct Technologies provides reliable and scalable solutions. The company focuses on customer satisfaction, quality service, and continuous innovation.</p>
                                        </div>
                                        <div className="site-footer-two__social-box">
                                            <h3 className="site-footer-two__social-title" style={{ marginLeft: '-25px' }}>Follow Us</h3>
                                            <div className="site-footer-two__social">
                                                <a href="https://www.facebook.com/VActTechnologies" target="_blank"><span className="fab fa-facebook-f"></span></a>
                                                <a href="https://x.com/VActTechnology" target="_blank"><span className="fab fa-twitter"></span></a>
                                                <a href="https://www.instagram.com/vacttech/" target="_blank"><span className="fab fa-instagram"></span></a>
                                                <a href="https://www.linkedin.com/company/vact-technologies/" target="_blank"><span className="fab fa-linkedin"></span></a>
                                                <a href="https://www.youtube.com/channel/UCcpRq9mlF7iP3GiZuZBO3sg" target="_blank"><span className="fab fa-youtube"></span></a>
                                                <a href="https://t.me/vacttechnologycareers" target="_blank"><span className="fab fa-telegram-plane"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="site-footer-two__top-right">
                                        <div className="site-footer-two__widget-box">
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay="100ms">
                                                    <div className="footer-widget-two__quick-links">
                                                        <h4 className="footer-widget-two__title">Quick Links</h4>
                                                        <ul className="footer-widget-two__quick-links-list list-unstyled">
                                                            <li><a href="/about"><span className="fas fa-angle-right"></span> About Us</a></li>
                                                            <li><a href="#"><span className="fas fa-angle-right"></span> Our Products</a></li>
                                                            <li><a href="#"><span className="fas fa-angle-right"></span> Services</a></li>
                                                            <li><a href="#"><span className="fas fa-angle-right"></span> Training</a></li>
                                                            <li><a href="/contact"><span className="fas fa-angle-right"></span> Contact Us</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-8 col-md-8 wow fadeInUp" data-wow-delay="300ms">
                                                    <div className="footer-widget-two__map-box">
                                                        <h4 className="footer-widget-two__title">Our Offices</h4>
                                                        <div className="footer-widget-two__map-switcher">
                                                            <button onClick={() => window.switchFooterMap('cbe')} id="btn-cbe" className="active">Coimbatore</button>
                                                            <button onClick={() => window.switchFooterMap('chn')} id="btn-chn">Chennai</button>
                                                        </div>
                                                        <div className="footer-widget-two__map-frames">
                                                            <div id="footer-map-cbe" className="footer-map-iframe">
                                                                <iframe src="https://maps.google.com/maps?q=145%20Saradha%20Mill%20Road,%20Sundarapuram%20Post,%20Coimbatore%20-%20641024&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style={{ border: 0, borderRadius: '8px' }} allowFullScreen loading="lazy"></iframe>
                                                                <p style={{ marginTop: '12px', color: '#fff', fontSize: '14px', lineHeight: 1.6 }}>145 Saradha Mill Road, Sundarapuram Post, Coimbatore - 641024</p>
                                                            </div>
                                                            <div id="footer-map-chn" className="footer-map-iframe" style={{ display: 'none' }}>
                                                                <iframe src="https://maps.google.com/maps?q=The%20Hive%20L3%20VR%20Chennai,%20Anna%20Nagar%20West,%20Chennai%20-%20600040&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style={{ border: 0, borderRadius: '8px' }} allowFullScreen loading="lazy"></iframe>
                                                                <p style={{ marginTop: '12px', color: '#fff', fontSize: '14px', lineHeight: 1.6 }}>The Hive L3 VR Chennai, Anna Nagar West, Chennai - 600040</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <ul className="list-unstyled site-footer-two__contact-info">
                            <li>
                                <div className="site-footer-two__contact-info-icon"><span className="fas fa-envelope"></span></div>
                                <div className="site-footer-two__contact-info-content">
                                    <p>Email Address:</p>
                                    <h5><a href="mailto:careers@vact-tech.com">careers@vact-tech.com</a></h5>
                                </div>
                            </li>
                            <li>
                                <div className="site-footer-two__contact-info-icon"><span className="fas fa-phone"></span></div>
                                <div className="site-footer-two__contact-info-content">
                                    <p>Phone Number:</p>
                                    <h5><a href="tel:7871909590">+91 78719 09590</a></h5>
                                </div>
                            </li>
                            <li>
                                <div className="site-footer-two__contact-info-icon"><span className="fas fa-calendar-alt"></span></div>
                                <div className="site-footer-two__contact-info-content">
                                    <p>Working Time</p>
                                    <h5>Monday - Friday 10:00 - 20:00</h5>
                                </div>
                            </li>
                            <li>
                                <div className="site-footer-two__contact-info-icon"><span className="fas fa-globe"></span></div>
                                <div className="site-footer-two__contact-info-content">
                                    <p>Website:</p>
                                    <h5><a href="https://www.vact-tech.com" target="_blank">www.vact-tech.com</a></h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="site-footer-two__bottom-secondary">
                    <div className="container">
                        <div className="site-footer-two__bottom-inner">
                            <p className="site-footer-two__copyright-text">Copyright@ 2026 <a href="#">VAct Technologies</a>. All Rights Reserved.</p>
                            <div className="site-footer-two__bottom-right">
                                <p>Designed by <a href="https://webxtechnosoft.com/">Webx TechnoSoft</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
