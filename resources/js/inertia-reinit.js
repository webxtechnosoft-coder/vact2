export function reinitPage() {
    if (typeof jQuery === 'undefined') return;

    const $ = jQuery;

    // Destroy existing Owl Carousel instances
    $('.owl-carousel').each(function () {
        const $el = $(this);
        if ($el.data('owl.carousel')) {
            $el.owlCarousel('destroy');
            $el.removeData('owl.carousel');
        }
    });

    // Destroy existing Swiper instances
    document.querySelectorAll('.swiper-container').forEach(function (el) {
        if (el.swiper) {
            el.swiper.destroy(true, true);
            delete el.swiper;
        }
    });

    // Remove stale inline styles added by Swiper
    $('.swiper-container').removeAttr('style');
    $('.swiper-slide').removeAttr('style');

    setTimeout(function () {
        // GSAP
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof SplitText !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger, SplitText);
            gsap.config({ nullTargetWarn: false, trialWarn: false });
        }

        // AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: '1200', disable: 'false', easing: 'ease', mirror: true });
        }

        // Swiper: Main Slider
        if ($(".main-slider__carousel").length > 0) {
            new Swiper('.main-slider__carousel', {
                slidesPerView: 1, spaceBetween: 0, effect: 'fade', speed: 600, loop: true,
                pagination: { el: "#main-slider-pagination", type: "bullets", clickable: true },
                navigation: { nextEl: "#main-slider__swiper-button-next", prevEl: "#main-slider__swiper-button-prev" },
                autoplay: { delay: 8000 },
                breakpoints: { 0: { slidesPerView: 1 }, 375: { slidesPerView: 1 }, 575: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 992: { slidesPerView: 1 }, 1200: { slidesPerView: 1 }, 1320: { slidesPerView: 1 } }
            });
        }

        // Swiper: Main Slider Two
        if ($(".main-slider-two__carousel").length > 0) {
            new Swiper('.main-slider-two__carousel', {
                slidesPerView: 1, spaceBetween: 0, effect: 'fade', speed: 600, loop: true,
                pagination: { el: "#main-slider-two-pagination", type: "bullets", clickable: true },
                navigation: { nextEl: "#main-slider-two__swiper-button-next", prevEl: "#main-slider-two__swiper-button-prev" },
                autoplay: { delay: 8000 },
                breakpoints: { 0: { slidesPerView: 1 }, 375: { slidesPerView: 1 }, 575: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 992: { slidesPerView: 1 }, 1200: { slidesPerView: 1 }, 1320: { slidesPerView: 1 } }
            });
        }

        // Swiper: Banner Two
        if ($(".banner-two__carousel").length > 0) {
            new Swiper('.banner-two__carousel', {
                slidesPerView: 1, spaceBetween: 0, speed: 600, loop: true,
                pagination: { el: ".banner-two-dot-style1", type: "bullets", clickable: true },
                navigation: { nextEl: ".swiper-button-prev1", prevEl: ".swiper-button-next1" },
                autoplay: { delay: 6000 },
                breakpoints: { 0: { slidesPerView: 1 }, 375: { slidesPerView: 1 }, 575: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 992: { slidesPerView: 1 }, 1200: { slidesPerView: 1 }, 1320: { slidesPerView: 1 } }
            });
        }

        // Owl: Courses One
        if ($(".courses-one__carousel").length) {
            $(".courses-one__carousel").owlCarousel({
                loop: true, margin: 30, nav: true, dots: false, smartSpeed: 600, autoplay: false, autoplayTimeout: 6000,
                navText: ['<span class="icon-back"></span>', '<span class="icon-next"></span>'],
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 }, 1320: { items: 4 } }
            });
        }

        // Owl: Testimonial One
        if ($(".testimonial-one__carousel").length) {
            $(".testimonial-one__carousel").owlCarousel({
                loop: true, margin: 30, nav: true, dots: true, smartSpeed: 600, autoplay: true, autoplayTimeout: 3000, autoplayHoverPause: true,
                navText: ['<span class="icon-back"></span>', '<span class="icon-next"></span>'],
                responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 }, 1320: { items: 1 } }
            });
        }

        // Swiper: Research One
        if ($(".research-one__carousel").length > 0) {
            new Swiper('.research-one__carousel', {
                slidesPerView: 3, spaceBetween: 0, speed: 600, loop: true,
                pagination: { el: ".research-one-dot-style1", type: "bullets", clickable: true },
                navigation: { nextEl: ".swiper-button-prev1", prevEl: ".swiper-button-next1" },
                autoplay: { delay: 6000 },
                breakpoints: { 0: { slidesPerView: 1 }, 375: { slidesPerView: 1 }, 575: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 3 }, 1320: { slidesPerView: 3 } }
            });
        }

        // Owl: Testimonial Two
        if ($(".testimonial-two__carousel").length) {
            $(".testimonial-two__carousel").owlCarousel({
                loop: true, margin: 30, nav: true, dots: false, smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
                navText: ['<span class="icon-next"></span>', '<span class="icon-next"></span>'],
                responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 2 }, 1200: { items: 3 }, 1320: { items: 3 } }
            });
        }

        // Owl: FAQ One
        if ($(".faq-one__carousel").length) {
            $(".faq-one__carousel").owlCarousel({
                loop: true, margin: 30, nav: false, dots: true, smartSpeed: 500, autoplay: true, autoplayTimeout: 6000, autoplayHoverPause: true,
                responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 }, 1320: { items: 1 } }
            });
        }

        // Swiper: Activities One
        if ($(".activities-one__carousel").length > 0) {
            new Swiper('.activities-one__carousel', {
                slidesPerView: 3, spaceBetween: 0, speed: 600, loop: true,
                pagination: { el: ".activities-one-dot-style1", type: "bullets", clickable: true },
                navigation: { nextEl: ".swiper-button-prev1", prevEl: ".swiper-button-next1" },
                autoplay: { delay: 6000 },
                breakpoints: { 0: { slidesPerView: 1 }, 375: { slidesPerView: 1 }, 575: { slidesPerView: 1 }, 768: { slidesPerView: 1 }, 992: { slidesPerView: 2 }, 1200: { slidesPerView: 3 }, 1320: { slidesPerView: 3 } }
            });
        }

        // Swiper: Testimonial Three
        if ($(".testimonial-three__carousel").length > 0) {
            new Swiper('.testimonial-three__carousel', {
                slidesPerView: 3, spaceBetween: 0, speed: 600, loop: true,
                pagination: { el: ".testimonial-three-dot-style1", type: "bullets", clickable: true },
                navigation: { nextEl: ".swiper-button-prev1", prevEl: ".swiper-button-next1" },
                autoplay: { delay: 6000 },
                breakpoints: { 0: { slidesPerView: 1 }, 375: { slidesPerView: 1 }, 575: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 3 }, 1320: { slidesPerView: 3 } }
            });
        }

        // Owl: Testimonial Four
        if ($(".testimonial-four__carousel").length) {
            $(".testimonial-four__carousel").owlCarousel({
                loop: true, margin: 30, nav: true, dots: false, smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
                navText: ['<span class="icon-next"></span>', '<span class="icon-next"></span>'],
                responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 2 }, 1320: { items: 3 } }
            });
        }

        // Owl: Footer Twitter Feed
        if ($(".footer-widget-four__twitter-feed-carousel").length) {
            $(".footer-widget-four__twitter-feed-carousel").owlCarousel({
                loop: true, margin: 30, nav: false, dots: true, smartSpeed: 500, autoplay: false, autoplayTimeout: 7000,
                navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-right-arrow"></span>'],
                responsive: { 0: { items: 1 }, 768: { items: 1 }, 992: { items: 1 }, 1200: { items: 1 }, 1320: { items: 1 } }
            });
        }

        // Owl: Brand Two
        if ($(".brand-two__carousel").length) {
            $(".brand-two__carousel").owlCarousel({
                loop: true, margin: 30, nav: false, dots: false, smartSpeed: 500, autoplay: true, autoplayTimeout: 7000,
                navText: ['<span class="icon-left-arrow"></span>', '<span class="icon-left-arrow right-arrow"></span>'],
                responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: { items: 5 }, 1320: { items: 7 } }
            });
        }

        // WOW
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        }

        // Nice Select
        $('select:not(.ignore)').niceSelect();

        // Custom Cursor
        if ($('.custom-cursor').length > 0) {
            var cursor = document.querySelector('.custom-cursor__cursor');
            var cursorTwo = document.querySelector('.custom-cursor__cursor-two');
            if (cursor) {
                document.addEventListener('mousemove', function (e) {
                    cursor.setAttribute('style', 'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;');
                });
            }
            if (cursorTwo) {
                document.addEventListener('mousemove', function (e) {
                    cursorTwo.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px;');
                });
            }
        }

        // Mobile nav
        if ($('.mobile-nav__toggler').length) {
            $('.mobile-nav__toggler').on('click', function (e) {
                e.preventDefault();
                $('.mobile-nav__wrapper').toggleClass('expanded');
                $('body').toggleClass('locked');
            });
        }
        if ($('.side-menu__close-btn, .mobile-nav__wrapper .mobile-nav__overlay').length) {
            $('.side-menu__close-btn, .mobile-nav__wrapper .mobile-nav__overlay').on('click', function (e) {
                e.preventDefault();
                $('.mobile-nav__wrapper').removeClass('expanded');
                $('body').removeClass('locked');
            });
        }

        // Jarallax
        if (typeof jarallax !== 'undefined') {
            jarallax(document.querySelectorAll('.jarallax'), {
                speed: 0.5,
                imgWidth: 1366,
                imgHeight: 768
            });
        }

        // Isotope
        if (typeof imagesLoaded !== 'undefined' && typeof isotope !== 'undefined') {
            $('.filter-layout').imagesLoaded(function () {
                $('.filter-layout').isotope({
                    itemSelector: '.single-filter-item',
                    layoutMode: 'masonry'
                });
            });
        }

        // Sidebar content toggler
        if ($('.navSidebar-button').length) {
            $('.navSidebar-button').on('click', function (e) {
                e.preventDefault();
                $('.sidebar-content__wrapper').toggleClass('expanded');
            });
        }
        if ($('.sidebar-content__close-btn, .sidebar-content__overlay').length) {
            $('.sidebar-content__close-btn, .sidebar-content__overlay').on('click', function (e) {
                e.preventDefault();
                $('.sidebar-content__wrapper').removeClass('expanded');
            });
        }

        // Twenty Twenty
        if ($('.twentytwenty-container').length && typeof $.fn.twentytwenty !== 'undefined') {
            $('.twentytwenty-container').twentytwenty();
        }

        // Magnific Popup
        if ($('.video-popup').length && typeof $.fn.magnificPopup !== 'undefined') {
            $('.video-popup').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }
        if ($('.img-popup').length && typeof $.fn.magnificPopup !== 'undefined') {
            $('.img-popup').magnificPopup({
                type: 'image',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        }

        // Odometer
        if ($('.odometer').length) {
            $('.odometer').each(function () {
                var count = $(this).attr('data-count');
                if (count) {
                    $(this).text(count);
                }
            });
        }

        // Datepicker
        if ($('#datepicker').length && typeof $.fn.datepicker !== 'undefined') {
            $('#datepicker').datepicker();
        }

        // Scroll to top
        $(document).off('click.scrollToTop').on('click.scrollToTop', 'a[data-target="html"]', function (e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 500);
        });
    }, 100);
}
