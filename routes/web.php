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


    });
});

require __DIR__.'/auth.php';
