<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'VAct Technologies') }}</title>
        <link rel="icon" type="image/png" href="{{ asset('assets/images/resources/favicon.png') }}" />

        <link rel="preconnect" href="https://fonts.googleapis.com/">
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

        <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/animate.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/custom-animate.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/swiper.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/font-awesome-all.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/jarallax.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/jquery.magnific-popup.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/odometer.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/flaticon.css') }}">
        <link rel="stylesheet" href="{{ asset('assets/css/owl.carousel.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/owl.theme.default.min.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/nice-select.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/jquery-ui.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/twentytwenty.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/aos.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/responsive.css') }}" />

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="custom-cursor">
        <div class="custom-cursor__cursor"></div>
        <div class="custom-cursor__cursor-two"></div>
        <div class="page-wrapper">
            @inertia
        </div>

        <script src="{{ asset('assets/js/jquery-latest.js') }}"></script>
        <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
        <script src="{{ asset('assets/js/jarallax.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.appear.min.js') }}"></script>
        <script src="{{ asset('assets/js/swiper.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.magnific-popup.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.validate.min.js') }}"></script>
        <script src="{{ asset('assets/js/odometer.min.js') }}"></script>
        <script src="{{ asset('assets/js/wow.js') }}"></script>
        <script src="{{ asset('assets/js/isotope.js') }}"></script>
        <script src="{{ asset('assets/js/owl.carousel.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery-ui.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.nice-select.min.js') }}"></script>
        <script src="{{ asset('assets/js/marquee.min.js') }}"></script>
        <script src="{{ asset('assets/js/jquery-sidebar-content.js') }}"></script>
        <script src="{{ asset('assets/js/twentytwenty.js') }}"></script>
        <script src="{{ asset('assets/js/jquery.event.move.js') }}"></script>
        <script src="{{ asset('assets/js/aos.js') }}"></script>
        <script src="{{ asset('assets/js/gsap/gsap.js') }}"></script>
        <script src="{{ asset('assets/js/gsap/ScrollTrigger.js') }}"></script>
        <script src="{{ asset('assets/js/gsap/SplitText.js') }}"></script>
        <script src="{{ asset('assets/js/script.js') }}"></script>
    </body>
</html>
