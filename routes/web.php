<?php

use App\Http\Controllers\ProfileController;
use App\Models\CompanyContent;
use App\Models\Slider;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $sliders = Slider::where('is_active', true)->orderBy('sort_order')->get();
    $contents = CompanyContent::where('is_active', true)->orderBy('sort_order')->get()->keyBy('section_key');
    $products = \App\Models\Product::where('is_active', true)->orderBy('sort_order')->get();
    $services = \App\Models\Service::where('is_active', true)->orderBy('sort_order')->get();
    $placements = \App\Models\Placement::where('is_active', true)->orderBy('sort_order')->get();
    $partners = \App\Models\Partner::whereIn('type', ['partner', 'both'])->where('is_active', true)->orderBy('sort_order')->get();
    $clients = \App\Models\Partner::whereIn('type', ['client', 'both'])->where('is_active', true)->orderBy('sort_order')->get();
    $blogs = \App\Models\Blog::where('is_active', true)->orderBy('published_at', 'desc')->take(3)->get();
    $faqs = \App\Models\Faq::where('is_active', true)->orderBy('sort_order')->get();
    $testimonials = \App\Models\GoogleReview::where('is_active', true)->orderBy('sort_order')->get();

    return Inertia::render('Index', [
        'sliders' => $sliders,
        'contents' => $contents,
        'products' => $products,
        'services' => $services,
        'placements' => $placements,
        'partners' => $partners,
        'clients' => $clients,
        'blogs' => $blogs,
        'faqs' => $faqs,
        'testimonials' => $testimonials,
    ]);
});

Route::get('/about', function () {
    $contents = CompanyContent::where('is_active', true)->orderBy('sort_order')->get()->keyBy('section_key');

    return Inertia::render('About', [
        'contents' => $contents,
    ]);
});
Route::get('/blogs', fn() => Inertia::render('Blogs'));
Route::get('/blogdetails', fn() => Inertia::render('BlogDetails'));
Route::get('/testimonials', fn() => Inertia::render('Testimonials'));
Route::get('/gallery', fn() => Inertia::render('Gallery'));
Route::get('/contact', fn() => Inertia::render('Contact'));
Route::get('/careers', fn() => Inertia::render('Careers'));
Route::get('/coursedetails', fn() => Inertia::render('CourseDetails'));

Route::get('/embedded-systems', fn() => Inertia::render('EmbeddedSystems'));
Route::get('/embedded-offshore-outsourcing', fn() => Inertia::render('EmbeddedOffshoreOutsourcing'));
Route::get('/embedded-automotive', fn() => Inertia::render('EmbeddedAutomotive'));
Route::get('/fuel-monitoring-system', fn() => Inertia::render('FuelMonitoringSystem'));
Route::get('/industrial-automation-and-control', fn() => Inertia::render('IndustrialAutomationAndControl'));
Route::get('/civil-pmc', fn() => Inertia::render('CivilPmc'));
Route::get('/human-resource', fn() => Inertia::render('HumanResource'));
Route::get('/talent-based-outsourcing', fn() => Inertia::render('TalentBasedOutsourcing'));


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
        Route::get('/company/{section}', [App\Http\Controllers\AdminController::class, 'editCompanySection'])->name('admin.company.section.edit');
        Route::put('/company/{section}', [App\Http\Controllers\AdminController::class, 'updateCompanySection'])->name('admin.company.section.update');

        // Products CRUD
        Route::get('/products', [App\Http\Controllers\AdminController::class, 'products'])->name('admin.products');
        Route::get('/products/create', [App\Http\Controllers\AdminController::class, 'createProduct'])->name('admin.products.create');
        Route::post('/products', [App\Http\Controllers\AdminController::class, 'storeProduct'])->name('admin.products.store');
        Route::get('/products/{product}/edit', [App\Http\Controllers\AdminController::class, 'editProduct'])->name('admin.products.edit');
        Route::put('/products/{product}', [App\Http\Controllers\AdminController::class, 'updateProduct'])->name('admin.products.update');
        Route::delete('/products/{product}', [App\Http\Controllers\AdminController::class, 'destroyProduct'])->name('admin.products.destroy');

        // Services CRUD
        Route::get('/services', [App\Http\Controllers\AdminController::class, 'services'])->name('admin.services');
        Route::get('/services/create', [App\Http\Controllers\AdminController::class, 'createService'])->name('admin.services.create');
        Route::post('/services', [App\Http\Controllers\AdminController::class, 'storeService'])->name('admin.services.store');
        Route::get('/services/{service}/edit', [App\Http\Controllers\AdminController::class, 'editService'])->name('admin.services.edit');
        Route::put('/services/{service}', [App\Http\Controllers\AdminController::class, 'updateService'])->name('admin.services.update');
        Route::delete('/services/{service}', [App\Http\Controllers\AdminController::class, 'destroyService'])->name('admin.services.destroy');

        // Placements CRUD
        Route::get('/placements', [App\Http\Controllers\AdminController::class, 'placements'])->name('admin.placements');
        Route::get('/placements/create', [App\Http\Controllers\AdminController::class, 'createPlacement'])->name('admin.placements.create');
        Route::post('/placements', [App\Http\Controllers\AdminController::class, 'storePlacement'])->name('admin.placements.store');
        Route::get('/placements/{placement}/edit', [App\Http\Controllers\AdminController::class, 'editPlacement'])->name('admin.placements.edit');
        Route::put('/placements/{placement}', [App\Http\Controllers\AdminController::class, 'updatePlacement'])->name('admin.placements.update');
        Route::delete('/placements/{placement}', [App\Http\Controllers\AdminController::class, 'destroyPlacement'])->name('admin.placements.destroy');

        // Partners CRUD
        Route::get('/partners', [App\Http\Controllers\AdminController::class, 'partners'])->name('admin.partners');
        Route::get('/partners/create', [App\Http\Controllers\AdminController::class, 'createPartner'])->name('admin.partners.create');
        Route::post('/partners', [App\Http\Controllers\AdminController::class, 'storePartner'])->name('admin.partners.store');
        Route::get('/partners/{partner}/edit', [App\Http\Controllers\AdminController::class, 'editPartner'])->name('admin.partners.edit');
        Route::put('/partners/{partner}', [App\Http\Controllers\AdminController::class, 'updatePartner'])->name('admin.partners.update');
        Route::delete('/partners/{partner}', [App\Http\Controllers\AdminController::class, 'destroyPartner'])->name('admin.partners.destroy');

        // Blogs CRUD
        Route::get('/blogs', [App\Http\Controllers\AdminController::class, 'blogs'])->name('admin.blogs');
        Route::get('/blogs/create', [App\Http\Controllers\AdminController::class, 'createBlog'])->name('admin.blogs.create');
        Route::post('/blogs', [App\Http\Controllers\AdminController::class, 'storeBlog'])->name('admin.blogs.store');
        Route::get('/blogs/{blog}/edit', [App\Http\Controllers\AdminController::class, 'editBlog'])->name('admin.blogs.edit');
        Route::put('/blogs/{blog}', [App\Http\Controllers\AdminController::class, 'updateBlog'])->name('admin.blogs.update');
        Route::delete('/blogs/{blog}', [App\Http\Controllers\AdminController::class, 'destroyBlog'])->name('admin.blogs.destroy');

        // FAQs CRUD
        Route::get('/faqs', [App\Http\Controllers\AdminController::class, 'faqs'])->name('admin.faqs');
        Route::get('/faqs/create', [App\Http\Controllers\AdminController::class, 'createFaq'])->name('admin.faqs.create');
        Route::post('/faqs', [App\Http\Controllers\AdminController::class, 'storeFaq'])->name('admin.faqs.store');
        Route::get('/faqs/{faq}/edit', [App\Http\Controllers\AdminController::class, 'editFaq'])->name('admin.faqs.edit');
        Route::put('/faqs/{faq}', [App\Http\Controllers\AdminController::class, 'updateFaq'])->name('admin.faqs.update');
        Route::delete('/faqs/{faq}', [App\Http\Controllers\AdminController::class, 'destroyFaq'])->name('admin.faqs.destroy');

        // Testimonials CRUD
        Route::get('/testimonials', [App\Http\Controllers\AdminController::class, 'testimonials'])->name('admin.testimonials');
        Route::get('/testimonials/create', [App\Http\Controllers\AdminController::class, 'createTestimonial'])->name('admin.testimonials.create');
        Route::post('/testimonials', [App\Http\Controllers\AdminController::class, 'storeTestimonial'])->name('admin.testimonials.store');
        Route::get('/testimonials/{testimonial}/edit', [App\Http\Controllers\AdminController::class, 'editTestimonial'])->name('admin.testimonials.edit');
        Route::put('/testimonials/{testimonial}', [App\Http\Controllers\AdminController::class, 'updateTestimonial'])->name('admin.testimonials.update');
        Route::delete('/testimonials/{testimonial}', [App\Http\Controllers\AdminController::class, 'destroyTestimonial'])->name('admin.testimonials.destroy');
    });
});

require __DIR__.'/auth.php';

Route::get('/{slug}', [App\Http\Controllers\ProductController::class, 'show'])->name('products.show');

