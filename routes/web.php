<?php

use App\Http\Controllers\ProfileController;
use App\Models\CompanyContent;
use App\Models\Slider;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $sliders = Slider::where('is_active', true)->orderBy('sort_order')->get();
    $contents = CompanyContent::where('is_active', true)->orderBy('sort_order')->get()->keyBy('section_key');

    return Inertia::render('Index', [
        'sliders' => $sliders,
        'contents' => $contents,
    ]);
});

Route::get('/about', function () {
    $contents = CompanyContent::where('is_active', true)->orderBy('sort_order')->get()->keyBy('section_key');

    return Inertia::render('About', [
        'contents' => $contents,
    ]);
});
Route::get('/blogs', function () {
    $blogs = App\Models\Blog::where('is_active', true)->orderBy('sort_order')->get();
    $slides = App\Models\CompanyContent::whereIn('section_key', ['about-slide-1', 'about-slide-2', 'about-slide-3', 'about-slide-4'])->where('is_active', true)->orderBy('sort_order')->get();
    return Inertia::render('Blogs', ['blogs' => $blogs, 'slides' => $slides]);
});
Route::get('/blogdetails', fn() => Inertia::render('BlogDetails'));
Route::get('/testimonials', function () {
    $slides = App\Models\CompanyContent::where('section_key', 'like', 'about-slide%')->where('is_active', true)->orderBy('sort_order')->get();
    $testimonials = App\Models\Testimonial::where('is_active', true)->orderBy('sort_order')->get();
    return Inertia::render('Testimonials', ['slides' => $slides, 'testimonials' => $testimonials]);
});
Route::get('/gallery', function () {
    $galleries = App\Models\Gallery::where('is_active', true)->orderBy('sort_order')->get();
    return Inertia::render('Gallery', ['galleries' => $galleries]);
});
Route::get('/contact', function () {
    $offices = App\Models\CompanyContent::whereIn('section_key', ['contact-office-cbe', 'contact-office-che'])->where('is_active', true)->get()->keyBy('section_key');
    $slides = App\Models\CompanyContent::where('section_key', 'like', 'about-slide%')->where('is_active', true)->orderBy('sort_order')->get();
    $testimonials = App\Models\Testimonial::where('is_active', true)->orderBy('sort_order')->get();
    $socials = App\Models\CompanyContent::where('section_key', 'contact-socials')->where('is_active', true)->first();
    $contactPage = App\Models\CompanyContent::where('section_key', 'contact-page')->where('is_active', true)->first();
    return Inertia::render('Contact', ['offices' => $offices, 'slides' => $slides, 'testimonials' => $testimonials, 'socials' => $socials, 'contactPage' => $contactPage]);
});
Route::post('/contact', [App\Http\Controllers\AdminController::class, 'storeContactMessage']);
Route::get('/careers', function () {
    $jobs = App\Models\Career::where('type', 'job')->where('is_active', true)->orderBy('sort_order')->get();
    $testimonials = App\Models\Testimonial::where('is_active', true)->orderBy('sort_order')->get();
    return Inertia::render('Careers', ['jobs' => $jobs, 'testimonials' => $testimonials]);
});
Route::get('/careers/{career}', function (App\Models\Career $career) {
    $allJobs = App\Models\Career::where('type', 'job')->where('is_active', true)->orderBy('sort_order')->pluck('title');
    return Inertia::render('CareerDetail', ['job' => $career, 'allJobs' => $allJobs]);
});
Route::post('/apply', [App\Http\Controllers\AdminController::class, 'storeJobApplication']);
Route::get('/coursedetails', fn() => Inertia::render('CourseDetails'));

Route::get('/embedded-systems', function () {
    return Inertia::render('EmbeddedSystems', ['service' => App\Models\Service::where('slug', 'embedded-systems')->first()]);
});
Route::get('/embedded-offshore-outsourcing', function () {
    return Inertia::render('EmbeddedOffshoreOutsourcing', ['service' => App\Models\Service::where('slug', 'embedded-offshore-outsourcing')->first()]);
});
Route::get('/embedded-automotive', fn() => Inertia::render('EmbeddedAutomotive'));
Route::get('/fuel-monitoring-system', function () {
    return Inertia::render('FuelMonitoringSystem', ['service' => App\Models\Service::where('slug', 'fuel-monitoring-system')->first()]);
});
Route::get('/industrial-automation-and-control', function () {
    return Inertia::render('IndustrialAutomationAndControl', ['service' => App\Models\Service::where('slug', 'industrial-automation')->first()]);
});
Route::get('/civil-pmc', function () {
    return Inertia::render('CivilPmc', ['service' => App\Models\Service::where('slug', 'civil-pmc')->first()]);
});
Route::get('/human-resource', function () {
    return Inertia::render('HumanResource', ['service' => App\Models\Service::where('slug', 'human-resource')->first()]);
});
Route::get('/talent-based-outsourcing', fn() => Inertia::render('TalentBasedOutsourcing'));

Route::get('/vact-autoedge-development-board', fn() => Inertia::render('VactAutoedgeDevelopmentBoard'));
Route::get('/vact-embcore-development-board', fn() => Inertia::render('VactEmbcoreDevelopmentBoard'));
Route::get('/automatic-milk-vending-machine', fn() => Inertia::render('AutomaticMilkVendingMachine'));
Route::get('/automatic-oil-vending-machine', fn() => Inertia::render('AutomaticOilVendingMachine'));
Route::get('/automatic-oil-pouch-packing-machine', fn() => Inertia::render('AutomaticOilPouchPackingMachine'));
Route::get('/cold-drink-vending-machine', fn() => Inertia::render('ColdDrinkVendingMachine'));
Route::get('/automatic-milk-bag-packing-machine', fn() => Inertia::render('AutomaticMilkBagPackingMachine'));
Route::get('/automatic-coffee-vending-machine', fn() => Inertia::render('AutomaticCoffeeVendingMachine'));
Route::get('/open-top-chambers', fn() => Inertia::render('OpenTopChambers'));

Route::get('/qnx-rtos-training', fn() => Inertia::render('QnxRtosTraining'));
Route::get('/freertos-training', fn() => Inertia::render('FreertosTraining'));
Route::get('/zephyr-rtos-training', fn() => Inertia::render('ZephyrRtosTraining'));
Route::get('/embedded-yocto-training', fn() => Inertia::render('EmbeddedYoctoTraining'));
Route::get('/linux-system-programming', fn() => Inertia::render('LinuxSystemProgramming'));
Route::get('/linux-device-driver-training', fn() => Inertia::render('LinuxDeviceDriverTraining'));
Route::get('/embedded-c-programming', fn() => Inertia::render('EmbeddedCProgramming'));
Route::get('/rust-programming-training', fn() => Inertia::render('RustProgrammingTraining'));
Route::get('/edgeai-iot-development', fn() => Inertia::render('EdgeaiIotDevelopment'));
Route::get('/can-protocol', fn() => Inertia::render('CanProtocol'));
Route::get('/stm32-bare-metal-programming', fn() => Inertia::render('Stm32BareMetalProgramming'));
Route::get('/stm32-hal-programming', fn() => Inertia::render('Stm32HalProgramming'));
Route::get('/python', fn() => Inertia::render('Python'));
Route::get('/machine-learning', fn() => Inertia::render('MachineLearning'));
Route::get('/inplant-training', fn() => Inertia::render('InplantTraining'));

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('admin')->group(function () {
        Route::get('/', [App\Http\Controllers\AdminController::class, 'dashboard'])->name('dashboard');
        Route::get('/users', [App\Http\Controllers\AdminController::class, 'users'])->name('admin.users');
        Route::get('/users/create', [App\Http\Controllers\AdminController::class, 'createUser'])->name('admin.users.create');
        Route::post('/users', [App\Http\Controllers\AdminController::class, 'storeUser'])->name('admin.users.store');
        Route::get('/users/{user}/edit', [App\Http\Controllers\AdminController::class, 'editUser'])->name('admin.users.edit');
        Route::put('/users/{user}', [App\Http\Controllers\AdminController::class, 'updateUser'])->name('admin.users.update');
        Route::delete('/users/{user}', [App\Http\Controllers\AdminController::class, 'destroyUser'])->name('admin.users.destroy');

        Route::get('/sliders', [App\Http\Controllers\AdminController::class, 'sliders'])->name('admin.sliders');
        Route::get('/sliders/create', [App\Http\Controllers\AdminController::class, 'createSlider'])->name('admin.sliders.create');
        Route::post('/sliders', [App\Http\Controllers\AdminController::class, 'storeSlider'])->name('admin.sliders.store');
        Route::get('/sliders/{slider}/edit', [App\Http\Controllers\AdminController::class, 'editSlider'])->name('admin.sliders.edit');
        Route::put('/sliders/{slider}', [App\Http\Controllers\AdminController::class, 'updateSlider'])->name('admin.sliders.update');
        Route::delete('/sliders/{slider}', [App\Http\Controllers\AdminController::class, 'destroySlider'])->name('admin.sliders.destroy');

        Route::get('/company', [App\Http\Controllers\AdminController::class, 'companyContents'])->name('admin.company');
        Route::match(['put', 'post'], '/company', [App\Http\Controllers\AdminController::class, 'updateCompanyContent'])->name('admin.company.update');

        Route::get('/about', [App\Http\Controllers\AdminController::class, 'about'])->name('admin.about');
        Route::match(['put', 'post'], '/about', [App\Http\Controllers\AdminController::class, 'updateAbout'])->name('admin.about.update');

        Route::get('/galleries', [App\Http\Controllers\AdminController::class, 'galleries'])->name('admin.galleries');
        Route::post('/galleries', [App\Http\Controllers\AdminController::class, 'storeGallery'])->name('admin.galleries.store');
        Route::put('/galleries/{gallery}', [App\Http\Controllers\AdminController::class, 'updateGallery'])->name('admin.galleries.update');
        Route::delete('/galleries/{gallery}', [App\Http\Controllers\AdminController::class, 'destroyGallery'])->name('admin.galleries.destroy');

        Route::get('/blogs', [App\Http\Controllers\AdminController::class, 'blogs'])->name('admin.blogs');
        Route::post('/blogs', [App\Http\Controllers\AdminController::class, 'storeBlog'])->name('admin.blogs.store');
        Route::put('/blogs/{blog}', [App\Http\Controllers\AdminController::class, 'updateBlog'])->name('admin.blogs.update');
        Route::delete('/blogs/{blog}', [App\Http\Controllers\AdminController::class, 'destroyBlog'])->name('admin.blogs.destroy');

        Route::get('/testimonials', [App\Http\Controllers\AdminController::class, 'testimonials'])->name('admin.testimonials');
        Route::post('/testimonials', [App\Http\Controllers\AdminController::class, 'storeTestimonial'])->name('admin.testimonials.store');
        Route::put('/testimonials/{testimonial}', [App\Http\Controllers\AdminController::class, 'updateTestimonial'])->name('admin.testimonials.update');
        Route::delete('/testimonials/{testimonial}', [App\Http\Controllers\AdminController::class, 'destroyTestimonial'])->name('admin.testimonials.destroy');

        Route::get('/contact', [App\Http\Controllers\AdminController::class, 'contactMessages'])->name('admin.contact');
        Route::get('/contact/edit', [App\Http\Controllers\AdminController::class, 'contactEdit'])->name('admin.contact.edit');
        Route::match(['put', 'post'], '/contact/edit', [App\Http\Controllers\AdminController::class, 'updateContactContent'])->name('admin.contact.update');
        Route::post('/contact/{message}/read', [App\Http\Controllers\AdminController::class, 'markMessageRead'])->name('admin.contact.read');
        Route::delete('/contact/{message}', [App\Http\Controllers\AdminController::class, 'destroyMessage'])->name('admin.contact.destroy');

        Route::get('/careers', [App\Http\Controllers\AdminController::class, 'careers'])->name('admin.careers');
        Route::post('/careers', [App\Http\Controllers\AdminController::class, 'storeCareer'])->name('admin.careers.store');
        Route::put('/careers/{career}', [App\Http\Controllers\AdminController::class, 'updateCareer'])->name('admin.careers.update');
        Route::delete('/careers/{career}', [App\Http\Controllers\AdminController::class, 'destroyCareer'])->name('admin.careers.destroy');

        Route::get('/applications', [App\Http\Controllers\AdminController::class, 'applications'])->name('admin.applications');
        Route::delete('/applications/{application}', [App\Http\Controllers\AdminController::class, 'destroyApplication'])->name('admin.applications.destroy');

        Route::get('/services/{slug}', [App\Http\Controllers\AdminController::class, 'editService'])->name('admin.services.edit');
        Route::match(['put', 'post'], '/services/{slug}', [App\Http\Controllers\AdminController::class, 'updateService'])->name('admin.services.update');

    });
});

require __DIR__.'/auth.php';
