<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Career;
use App\Models\JobApplication;
use App\Models\CompanyContent;
use App\Models\ContactMessage;
use App\Models\Gallery;
use App\Models\Service;
use App\Models\Slider;
use App\Models\Testimonial;
use App\Models\User;
use App\Models\Product;
use App\Models\Service;
use App\Models\Placement;
use App\Models\Partner;
use App\Models\Blog;
use App\Models\Faq;
use App\Models\GoogleReview;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function dashboard(): Response
    {
        $now = now();
        $totalUsers = User::count();
        $newThisMonth = User::whereMonth('created_at', $now->month)
            ->whereYear('created_at', $now->year)
            ->count();
        $newThisWeek = User::whereBetween('created_at', [$now->copy()->startOfWeek(), $now->copy()->endOfWeek()])->count();

        $monthlyRegistrations = User::selectRaw('MONTH(created_at) as month, COUNT(*) as count')
            ->whereYear('created_at', $now->year)
            ->groupBy('month')
            ->orderBy('month')
            ->pluck('count', 'month')
            ->toArray();

        for ($m = 1; $m <= 12; $m++) {
            $chart[] = $monthlyRegistrations[$m] ?? 0;
        }

        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'totalUsers' => $totalUsers,
                'newThisMonth' => $newThisMonth,
                'newThisWeek' => $newThisWeek,
                'chart' => $chart,
                'recentUsers' => User::latest()->take(5)->get(),
            ],
        ]);
    }

    public function users(): Response
    {
        $users = User::latest()->paginate(request()->input('per_page', 10))->withQueryString();

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
        ]);
    }

    public function createUser(): Response
    {
        return Inertia::render('Admin/Users/Create');
    }

    public function storeUser(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('admin.users')->with('success', 'User created successfully.');
    }

    public function editUser(User $user): Response
    {
        return Inertia::render('Admin/Users/Edit', [
            'user' => $user,
        ]);
    }

    public function updateUser(Request $request, User $user): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class . ',email,' . $user->id,
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        if ($request->filled('password')) {
            $request->validate([
                'password' => ['confirmed', Rules\Password::defaults()],
            ]);
            $user->update(['password' => Hash::make($request->password)]);
        }

        return redirect()->route('admin.users')->with('success', 'User updated successfully.');
    }

    public function destroyUser(User $user): RedirectResponse
    {
        if ($user->id === auth()->id()) {
            return redirect()->route('admin.users')->with('error', 'You cannot delete yourself.');
        }

        $user->delete();

        return redirect()->route('admin.users')->with('success', 'User deleted successfully.');
    }

    public function sliders(): Response
    {
        $sliders = Slider::orderBy('sort_order')->paginate(request()->input('per_page', 10))->withQueryString();

        return Inertia::render('Admin/Sliders/Index', [
            'sliders' => $sliders,
        ]);
    }

    public function createSlider(): Response
    {
        return Inertia::render('Admin/Sliders/Create');
    }

    public function storeSlider(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'btn_text' => 'nullable|string|max:255',
            'btn_link' => 'nullable|string|max:255',
            'bg_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'slide_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['title', 'subtitle', 'description', 'btn_text', 'btn_link', 'sort_order', 'is_active']);

        if ($request->hasFile('bg_image')) {
            $data['bg_image'] = $request->file('bg_image')->store('sliders', 'public');
        }

        if ($request->hasFile('slide_image')) {
            $data['slide_image'] = $request->file('slide_image')->store('sliders', 'public');
        }

        Slider::create($data);

        return redirect()->route('admin.sliders')->with('success', 'Slider created successfully.');
    }

    public function editSlider(Slider $slider): Response
    {
        return Inertia::render('Admin/Sliders/Edit', [
            'slider' => $slider,
        ]);
    }

    public function updateSlider(Request $request, Slider $slider): RedirectResponse
    {
        $request->validate([
            'title' => 'nullable|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'btn_text' => 'nullable|string|max:255',
            'btn_link' => 'nullable|string|max:255',
            'bg_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'slide_image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['title', 'subtitle', 'description', 'btn_text', 'btn_link', 'sort_order', 'is_active']);

        if ($request->hasFile('bg_image')) {
            if ($slider->bg_image) {
                Storage::disk('public')->delete($slider->bg_image);
            }
            $data['bg_image'] = $request->file('bg_image')->store('sliders', 'public');
        }

        if ($request->hasFile('slide_image')) {
            if ($slider->slide_image) {
                Storage::disk('public')->delete($slider->slide_image);
            }
            $data['slide_image'] = $request->file('slide_image')->store('sliders', 'public');
        }

        $slider->update($data);

        return redirect()->route('admin.sliders')->with('success', 'Slider updated successfully.');
    }

    public function destroySlider(Slider $slider): RedirectResponse
    {
        if ($slider->bg_image) {
            Storage::disk('public')->delete($slider->bg_image);
        }
        if ($slider->slide_image) {
            Storage::disk('public')->delete($slider->slide_image);
        }

        $slider->delete();

        return redirect()->route('admin.sliders')->with('success', 'Slider deleted successfully.');
    }

    public function about()
    {
        $keys = ['about-content', 'vision', 'quality', 'mission', 'director', 'about-slide-1', 'about-slide-2', 'about-slide-3', 'about-slide-4'];
        $contents = CompanyContent::whereIn('section_key', $keys)->orderBy('sort_order')->get();

        return Inertia::render('Admin/About/Edit', [
            'contents' => $contents,
        ]);
    }

    public function updateAbout(Request $request)
    {
        $request->validate([
            'sections' => 'required|array',
            'sections.*.id' => 'nullable|exists:company_contents,id',
            'sections.*.section_key' => 'required|string|max:255',
            'sections.*.title' => 'nullable|string|max:500',
            'sections.*.subtitle' => 'nullable|string|max:500',
            'sections.*.description' => 'nullable|string',
            'sections.*.stat_years' => 'nullable|integer',
            'sections.*.stat_years_suffix' => 'nullable|string|max:10',
            'sections.*.stat_years_label' => 'nullable|string|max:255',
            'sections.*.points_1' => 'nullable|string|max:500',
            'sections.*.points_2' => 'nullable|string|max:500',
            'sections.*.points_3' => 'nullable|string|max:500',
            'sections.*.points_4' => 'nullable|string|max:500',
            'sections.*.brochure_link' => 'nullable|string|max:500',
            'sections.*.linkedin_url' => 'nullable|string|max:500',
        ]);

        $files = $request->file('sections', []);

        foreach ($request->sections as $index => $section) {
            $content = $section['id'] ? CompanyContent::find($section['id']) : CompanyContent::where('section_key', $section['section_key'])->first();
            if (!$content) {
                $content = CompanyContent::create(['section_key' => $section['section_key'], 'label' => ucfirst(str_replace('-', ' ', $section['section_key'])), 'sort_order' => 0, 'is_active' => true]);
            }

            $data = [
                'title' => $section['title'] ?? null,
                'subtitle' => $section['subtitle'] ?? null,
                'description' => $section['description'] ?? null,
            ];

            if (!empty($files[$index]['image'])) {
                if ($content->image) {
                    Storage::disk('public')->delete($content->image);
                }
                $data['image'] = $files[$index]['image']->store('company', 'public');
            }

            if (!empty($files[$index]['image2'])) {
                if ($content->image2) {
                    Storage::disk('public')->delete($content->image2);
                }
                $data['image2'] = $files[$index]['image2']->store('company', 'public');
            }

            if ($content->section_key === 'about-content') {
                $settings = array_merge($content->settings ?? [], [
                    'stat_years' => (int) ($section['stat_years'] ?? 15),
                    'stat_years_suffix' => $section['stat_years_suffix'] ?? '+',
                    'stat_years_label' => $section['stat_years_label'] ?? 'Years Of Experience',
                ]);
                $data['settings'] = $settings;
            }

            if ($content->section_key === 'director') {
                $settings = array_merge($content->settings ?? [], [
                    'points' => [
                        $section['points_1'] ?? '24+ Years Experience',
                        $section['points_2'] ?? 'Expert in Product Development',
                        $section['points_3'] ?? 'Agile Project Management',
                        $section['points_4'] ?? 'Leadership & Team Building',
                    ],
                    'brochure_link' => $section['brochure_link'] ?? 'https://www.vact-tech.com/wp-content/uploads/2021/06/Vact-brochure-High.pdf',
                    'linkedin_url' => $section['linkedin_url'] ?? 'https://www.linkedin.com/in/kumaravelpandurangan/',
                ]);
                $data['settings'] = $settings;
            }

            $content->update($data);
        }

        return redirect()->back()->with('success', 'About page content updated successfully.');
    }

    public function editService($slug)
    {
        $service = Service::where('slug', $slug)->firstOrFail();
        return Inertia::render('Admin/Services/Edit', [
            'service' => $service,
        ]);
    }

    public function updateService(Request $request, $slug)
    {
        $service = Service::where('slug', $slug)->firstOrFail();

        $request->validate([
            'title' => 'nullable|string|max:500',
            'subtitle' => 'nullable|string',
            'description' => 'nullable|string',
            'badge' => 'nullable|string|max:255',
            'features' => 'nullable|array',
            'features.*.title' => 'required|string|max:255',
            'features.*.description' => 'required|string',
            'features.*.icon' => 'required|string|max:100',
            'slides' => 'nullable|array',
            'slides.*.heading' => 'nullable|string|max:500',
            'slides.*.highlight' => 'nullable|string|max:500',
            'slides.*.description' => 'nullable|string',
            'page_data' => 'nullable|array',
        ]);

        $data = [];
        foreach (['title', 'subtitle', 'description', 'badge', 'features'] as $field) {
            if ($request->exists($field)) {
                $data[$field] = $request->input($field);
            }
        }

        $slides = $request->input('slides', []);
        $oldSlides = $service->slides ?? [];
        $oldImages = array_filter(array_column($oldSlides, 'image'));
        foreach ($slides as $i => &$slide) {
            $file = $request->file("slides.$i.image");
            if ($file) {
                $oldImage = $oldSlides[$i]['image'] ?? null;
                if ($oldImage && Storage::disk('public')->exists($oldImage)) {
                    Storage::disk('public')->delete($oldImage);
                }
                $slide['image'] = $file->store('services/slides', 'public');
            } elseif (!isset($slide['image']) || empty($slide['image'])) {
                $slide['image'] = $oldSlides[$i]['image'] ?? '';
            }
        }
        $newImages = array_filter(array_column($slides, 'image'));
        foreach ($oldImages as $oldImg) {
            if (!in_array($oldImg, $newImages) && Storage::disk('public')->exists($oldImg)) {
                Storage::disk('public')->delete($oldImg);
            }
        }
        $data['slides'] = $slides;

        if ($request->exists('image') && $request->hasFile('image')) {
            if ($service->image) {
                Storage::disk('public')->delete($service->image);
            }
            $data['image'] = $request->file('image')->store('services', 'public');
        }

        // handle page_data with image uploads
        $pageData = $request->input('page_data', []);
        $oldPageData = $service->page_data ?? [];
        if (!empty($pageData) && $service->slug === 'embedded-systems') {
            foreach (['vehicle_networking', 'hmi', 'last_mile'] as $section) {
                if (isset($pageData[$section]['image']) && is_string($pageData[$section]['image']) && str_starts_with($pageData[$section]['image'], 'tmp/')) {
                    $pageData[$section]['image'] = '';
                }
                $fileKey = "page_data.{$section}.image";
                $file = $request->file($fileKey);
                if ($file) {
                    $oldImg = $oldPageData[$section]['image'] ?? null;
                    if ($oldImg && Storage::disk('public')->exists($oldImg)) {
                        Storage::disk('public')->delete($oldImg);
                    }
                    $pageData[$section]['image'] = $file->store('services/page_data', 'public');
                } elseif (empty($pageData[$section]['image']) && isset($oldPageData[$section]['image'])) {
                    $pageData[$section]['image'] = $oldPageData[$section]['image'];
                }
            }
        }
        $data['page_data'] = $pageData;

        $service->update($data);

        return redirect()->back()->with('success', 'Service content updated successfully.');
    }

    public function companyContents()
    {
        $contents = CompanyContent::orderBy('sort_order')->get();

        return Inertia::render('Admin/Company/Edit', [
            'contents' => $contents,
        ]);
    }

    public function updateCompanyContent(Request $request)
    {
        $request->validate([
            'sections' => 'required|array',
            'sections.*.id' => 'nullable|exists:company_contents,id',
            'sections.*.section_key' => 'required|string|max:255',
            'sections.*.title' => 'nullable|string|max:500',
            'sections.*.subtitle' => 'nullable|string|max:500',
            'sections.*.description' => 'nullable|string',
            'sections.*.image' => 'nullable|image|max:2048',
            'sections.*.image2' => 'nullable|image|max:2048',
        ]);

        $files = $request->file('sections', []);

        foreach ($request->sections as $index => $section) {
            $content = CompanyContent::find($section['id'] ?? 0);
            if (!$content) continue;

            $data = [
                'title' => $section['title'] ?? null,
                'subtitle' => $section['subtitle'] ?? null,
                'description' => $section['description'] ?? null,
                'extra_heading' => $section['extra_heading'] ?? null,
                'points' => isset($section['points']) ? array_map('trim', explode("\n", $section['points'])) : null,
                'settings' => [
                    'btn_text' => $section['btn_text'] ?? 'More About Us',
                    'btn_link' => $section['btn_link'] ?? '/about',
                    'video_url' => $section['video_url'] ?? '',
                    'stat_years' => (int) ($section['stat_years'] ?? 15),
                    'stat_years_suffix' => $section['stat_years_suffix'] ?? '+',
                    'stat_years_label' => $section['stat_years_label'] ?? 'Years',
                    'stat_years_text' => $section['stat_years_text'] ?? 'Experience',
                    'stat_placements' => (int) ($section['stat_placements'] ?? 100),
                    'stat_placements_suffix' => $section['stat_placements_suffix'] ?? '%',
                    'stat_placements_label' => $section['stat_placements_label'] ?? 'Placements',
                ],
            ];

            if (!empty($files[$index]['image'])) {
                if ($content->image) {
                    Storage::disk('public')->delete($content->image);
                }
                $data['image'] = $files[$index]['image']->store('company', 'public');
            }

            if (!empty($files[$index]['image2'])) {
                if ($content->image2) {
                    Storage::disk('public')->delete($content->image2);
                }
                $data['image2'] = $files[$index]['image2']->store('company', 'public');
            }

            $content->update($data);
        }

        return redirect()->route('admin.company')->with('success', 'Company content updated successfully.');
    }

    public function galleries()
    {
        $galleries = Gallery::orderBy('sort_order')->get();
        return Inertia::render('Admin/Gallery/Index', ['galleries' => $galleries]);
    }

    public function storeGallery(Request $request)
    {
        $request->validate([
            'title' => 'nullable|string|max:500',
            'image' => 'required|image|max:5120',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $data = [
            'title' => $request->title,
            'sort_order' => $request->sort_order ?? 0,
            'is_active' => $request->boolean('is_active'),
        ];

        $data['image'] = $request->file('image')->store('galleries', 'public');

        Gallery::create($data);

        return redirect()->route('admin.galleries')->with('success', 'Gallery image added.');
    }

    public function updateGallery(Request $request, Gallery $gallery)
    {
        $request->validate([
            'title' => 'nullable|string|max:500',
            'image' => 'nullable|image|max:5120',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $data = [
            'title' => $request->title,
            'sort_order' => $request->sort_order ?? 0,
            'is_active' => $request->boolean('is_active'),
        ];

        if ($request->hasFile('image')) {
            if ($gallery->image) {
                Storage::disk('public')->delete($gallery->image);
            }
            $data['image'] = $request->file('image')->store('galleries', 'public');
        }

        $gallery->update($data);

        return redirect()->route('admin.galleries')->with('success', 'Gallery image updated.');
    }

    public function destroyGallery(Gallery $gallery)
    {
        if ($gallery->image) {
            Storage::disk('public')->delete($gallery->image);
        }
        $gallery->delete();
        return redirect()->route('admin.galleries')->with('success', 'Gallery image deleted.');
    }

    public function blogs()
    {
        $blogs = Blog::orderBy('sort_order')->get();
        $slides = CompanyContent::whereIn('section_key', ['about-slide-1', 'about-slide-2', 'about-slide-3', 'about-slide-4'])->orderBy('sort_order')->get();
        return Inertia::render('Admin/Blog/Index', ['blogs' => $blogs, 'slides' => $slides]);
    }

    public function storeBlog(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:500',
            'image' => 'nullable|image|max:5120',
            'author_name' => 'nullable|string|max:255',
            'author_image' => 'nullable|image|max:5120',
            'card_date' => 'nullable|string|max:255',
            'author_date' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['title', 'author_name', 'card_date', 'author_date', 'short_description', 'sort_order', 'is_active']);
        $data['sort_order'] = $request->sort_order ?? 0;
        $data['is_active'] = $request->boolean('is_active');

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('blogs', 'public');
        }

        if ($request->hasFile('author_image')) {
            $data['author_image'] = $request->file('author_image')->store('blogs/authors', 'public');
        }

        Blog::create($data);

        return redirect()->route('admin.blogs')->with('success', 'Blog created successfully.');
    }

    public function updateBlog(Request $request, Blog $blog)
    {
        $request->validate([
            'title' => 'required|string|max:500',
            'image' => 'nullable|image|max:5120',
            'author_name' => 'nullable|string|max:255',
            'author_image' => 'nullable|image|max:5120',
            'card_date' => 'nullable|string|max:255',
            'author_date' => 'nullable|string|max:255',
            'short_description' => 'nullable|string',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['title', 'author_name', 'card_date', 'author_date', 'short_description', 'sort_order', 'is_active']);
        $data['sort_order'] = $request->sort_order ?? 0;
        $data['is_active'] = $request->boolean('is_active');

        if ($request->hasFile('image')) {
            if ($blog->image) {
                Storage::disk('public')->delete($blog->image);
            }
            $data['image'] = $request->file('image')->store('blogs', 'public');
        }

        if ($request->hasFile('author_image')) {
            if ($blog->author_image) {
                Storage::disk('public')->delete($blog->author_image);
            }
            $data['author_image'] = $request->file('author_image')->store('blogs/authors', 'public');
        }

        $blog->update($data);

        return redirect()->route('admin.blogs')->with('success', 'Blog updated successfully.');
    }

    public function destroyBlog(Blog $blog)
    {
        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }
        if ($blog->author_image) {
            Storage::disk('public')->delete($blog->author_image);
        }
        $blog->delete();
        return redirect()->route('admin.blogs')->with('success', 'Blog deleted successfully.');
    }

    public function testimonials()
    {
        $testimonials = Testimonial::orderBy('sort_order')->get();
        $slides = CompanyContent::whereIn('section_key', ['about-slide-1', 'about-slide-2', 'about-slide-3', 'about-slide-4'])->orderBy('sort_order')->get();
        return Inertia::render('Admin/Testimonial/Index', ['testimonials' => $testimonials, 'slides' => $slides]);
    }

    public function storeTestimonial(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'content' => 'nullable|string',
            'role' => 'nullable|string|max:255',
            'video_url' => 'nullable|string|max:1000',
            'image' => 'nullable|image|max:5120',
            'duration' => 'nullable|string|max:50',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'content', 'role', 'video_url', 'duration', 'sort_order', 'is_active']);
        $data['sort_order'] = $request->sort_order ?? 0;
        $data['is_active'] = $request->boolean('is_active');

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('testimonials', 'public');
        }

        Testimonial::create($data);

        return redirect()->route('admin.testimonials')->with('success', 'Testimonial added.');
    }

    public function updateTestimonial(Request $request, Testimonial $testimonial)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'content' => 'nullable|string',
            'role' => 'nullable|string|max:255',
            'video_url' => 'nullable|string|max:1000',
            'image' => 'nullable|image|max:5120',
            'duration' => 'nullable|string|max:50',
            'sort_order' => 'nullable|integer',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'content', 'role', 'video_url', 'duration', 'sort_order', 'is_active']);
        $data['sort_order'] = $request->sort_order ?? 0;
        $data['is_active'] = $request->boolean('is_active');

        if ($request->hasFile('image')) {
            if ($testimonial->image) {
                Storage::disk('public')->delete($testimonial->image);
            }
            $data['image'] = $request->file('image')->store('testimonials', 'public');
        }

        $testimonial->update($data);

        return redirect()->route('admin.testimonials')->with('success', 'Testimonial updated.');
    }

    public function storeContactMessage(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'nullable|string|max:500',
            'message' => 'required|string',
        ]);

        ContactMessage::create($request->only(['name', 'email', 'subject', 'message']));

        return redirect()->back()->with('success', 'Your message has been sent successfully!');
    }

    public function destroyTestimonial(Testimonial $testimonial)
    {
        if ($testimonial->image) {
            Storage::disk('public')->delete($testimonial->image);
        }
        $testimonial->delete();
        return redirect()->route('admin.testimonials')->with('success', 'Testimonial deleted.');
    }

    public function contactMessages()
    {
        $messages = ContactMessage::latest()->paginate(20);
        return Inertia::render('Admin/Contact/Index', ['messages' => $messages]);
    }

    public function contactEdit()
    {
        $offices = CompanyContent::whereIn('section_key', ['contact-office-cbe', 'contact-office-che'])->get()->keyBy('section_key');
        $socials = CompanyContent::where('section_key', 'contact-socials')->first();
        $contactPage = CompanyContent::where('section_key', 'contact-page')->first();
        return Inertia::render('Admin/Contact/Edit', ['offices' => $offices, 'socials' => $socials, 'contactPage' => $contactPage]);
    }

    public function updateContactContent(Request $request)
    {
        $request->validate([
            'offices' => 'required|array',
            'offices.*.id' => 'nullable|exists:company_contents,id',
            'offices.*.section_key' => 'required|string|max:255',
            'offices.*.settings.name' => 'nullable|string|max:255',
            'offices.*.settings.address' => 'nullable|string|max:500',
            'offices.*.settings.phone' => 'nullable|string|max:50',
            'offices.*.settings.map_url' => 'nullable|string|max:1000',
            'socials' => 'nullable|array',
            'socials.*' => 'nullable|string|max:500',
        ]);

        foreach ($request->offices as $item) {
            $content = CompanyContent::find($item['id'] ?? 0);
            if (!$content) continue;
            $settings = array_merge($content->settings ?? [], [
                'name' => $item['settings']['name'] ?? $content->settings['name'] ?? '',
                'address' => $item['settings']['address'] ?? $content->settings['address'] ?? '',
                'phone' => $item['settings']['phone'] ?? $content->settings['phone'] ?? '',
                'map_url' => $item['settings']['map_url'] ?? $content->settings['map_url'] ?? '',
            ]);
            $content->update(['settings' => $settings]);
        }

        if ($request->socials) {
            $socials = $request->socials_id
                ? CompanyContent::find($request->socials_id)
                : CompanyContent::where('section_key', 'contact-socials')->first();
            if ($socials) {
                $socials->update(['settings' => $request->socials]);
            } else {
                CompanyContent::create([
                    'section_key' => 'contact-socials',
                    'label' => 'Contact Social Links',
                    'settings' => $request->socials,
                    'sort_order' => 17,
                    'is_active' => true,
                ]);
            }
        }

        if ($request->contactPage) {
            $cp = $request->contactPage_id
                ? CompanyContent::find($request->contactPage_id)
                : CompanyContent::where('section_key', 'contact-page')->first();
            if ($cp) {
                $cp->update(['settings' => $request->contactPage]);
            } else {
                CompanyContent::create([
                    'section_key' => 'contact-page',
                    'label' => 'Contact Page Content',
                    'settings' => $request->contactPage,
                    'sort_order' => 16,
                    'is_active' => true,
                ]);
            }
        }

        return redirect()->route('admin.contact.edit')->with('success', 'Contact content updated successfully.');
    }

    public function careers()
    {
        $jobs = Career::where('type', 'job')->orderBy('sort_order')->get();
        return Inertia::render('Admin/Careers/Index', ['jobs' => $jobs]);
    }

    public function storeCareer(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:500',
            'description' => 'nullable|string',
            'icon' => 'nullable|string|max:50',
            'experience' => 'nullable|string|max:100',
            'location' => 'nullable|string|max:255',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:100',
            'date' => 'nullable|string|max:100',
    private function getSectionKey($section)
    {
        $map = [
            'about' => 'home-company',
            'who-we-are' => 'home-enterprise',
            'training' => 'home-training',
            'why-choose-us' => 'home-why-choose',
            'how-it-works' => 'home-process'
        ];
        return $map[$section] ?? $section;
    }

    public function editCompanySection($section): Response
    {
        $key = $this->getSectionKey($section);
        $content = CompanyContent::where('section_key', $key)->firstOrFail();
        return Inertia::render('Admin/Company/EditSection', [
            'section' => $section,
            'content' => $content
        ]);
    }

    public function updateCompanySection(Request $request, $section): RedirectResponse
    {
        $key = $this->getSectionKey($section);
        $content = CompanyContent::where('section_key', $key)->firstOrFail();
        
        $request->validate([
            'title' => 'nullable|string|max:500',
            'subtitle' => 'nullable|string|max:500',
            'description' => 'nullable|string',
            'extra_heading' => 'nullable|string|max:500',
            'points' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'image2' => 'nullable|image|max:2048',
        ]);

        $points = [];
        if ($request->filled('points')) {
            $decoded = json_decode($request->points, true);
            if (json_last_error() === JSON_ERROR_NONE && is_array($decoded)) {
                $points = $decoded;
            } else {
                $points = array_filter(array_map('trim', explode("\n", $request->points)));
            }
        }

        // Handle shape image uploads for JSON section points
        if ($request->hasFile('shape_images')) {
            foreach ($request->file('shape_images') as $index => $file) {
                if (isset($points[$index])) {
                    $path = $file->store('company/shapes', 'public');
                    // Delete old shape file if it was uploaded to storage
                    if (!empty($points[$index]['shape']) && str_contains($points[$index]['shape'], '/storage/company/shapes/')) {
                        $oldPath = str_replace('/storage/', '', $points[$index]['shape']);
                        Storage::disk('public')->delete($oldPath);
                    }
                    $points[$index]['shape'] = '/storage/' . $path;
                }
            }
        }

        $data = [
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'description' => $request->description,
            'extra_heading' => $request->extra_heading,
            'points' => $points,
        ];

        $settings = $content->settings ?? [];
        if ($request->has('settings')) {
            $settings = array_merge($settings, $request->input('settings', []));
        }
        $data['settings'] = $settings;

        if ($request->hasFile('image')) {
            if ($content->image) {
                Storage::disk('public')->delete($content->image);
            }
            $data['image'] = $request->file('image')->store('company', 'public');
        }

        if ($request->hasFile('image2')) {
            if ($content->image2) {
                Storage::disk('public')->delete($content->image2);
            }
            $data['image2'] = $request->file('image2')->store('company', 'public');
        }

        $content->update($data);

        return redirect()->route('admin.company.section.edit', $section)->with('success', 'Content updated successfully.');
    }

    // ---------------- PRODUCTS CRUD ----------------

    public function products(): Response
    {
        $products = Product::orderBy('sort_order')->paginate(request()->input('per_page', 10))->withQueryString();
        return Inertia::render('Admin/Products/Index', ['products' => $products]);
    }

    public function createProduct(): Response
    {
        return Inertia::render('Admin/Products/Create');
    }

    public function storeProduct(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'rating' => 'nullable|numeric|min:0|max:5',
            'rating_count' => 'nullable|integer|min:0',
            'link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
            'page_content' => ['nullable', 'string', function ($attribute, $value, $fail) {
                if ($value && $value !== '') {
                    json_decode($value);
                    if (json_last_error() !== JSON_ERROR_NONE) {
                        $fail('The Page Content field must be valid JSON. Error: ' . json_last_error_msg());
                    }
                }
            }],
        ]);

        $data = $request->only(['title', 'category', 'description', 'rating', 'rating_count', 'link', 'sort_order', 'is_active', 'page_content']);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('products', 'public');
        }

        Product::create($data);

        return redirect()->route('admin.products')->with('success', 'Product created successfully.');
    }

    public function editProduct(Product $product): Response
    {
        return Inertia::render('Admin/Products/Edit', ['product' => $product]);
    }

    public function updateProduct(Request $request, Product $product): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'rating' => 'nullable|numeric|min:0|max:5',
            'rating_count' => 'nullable|integer|min:0',
            'link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
            'page_content' => ['nullable', 'string', function ($attribute, $value, $fail) {
                if ($value && $value !== '') {
                    json_decode($value);
                    if (json_last_error() !== JSON_ERROR_NONE) {
                        $fail('The Page Content field must be valid JSON. Error: ' . json_last_error_msg());
                    }
                }
            }],
        ]);

        $data = $request->only(['title', 'category', 'description', 'rating', 'rating_count', 'link', 'sort_order', 'is_active', 'page_content']);

        if ($request->hasFile('image')) {
            if ($product->image) {
                Storage::disk('public')->delete($product->image);
            }
            $data['image'] = $request->file('image')->store('products', 'public');
        }

        $product->update($data);

        return redirect()->route('admin.products')->with('success', 'Product updated successfully.');
    }

    public function destroyProduct(Product $product): RedirectResponse
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }
        $product->delete();
        return redirect()->route('admin.products')->with('success', 'Product deleted successfully.');
    }

    // ---------------- SERVICES CRUD ----------------

    public function services(): Response
    {
        $services = Service::orderBy('sort_order')->paginate(request()->input('per_page', 10))->withQueryString();
        return Inertia::render('Admin/Services/Index', ['services' => $services]);
    }

    public function createService(): Response
    {
        return Inertia::render('Admin/Services/Create');
    }

    public function storeService(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
            'page_content' => 'nullable|string',
        ]);

        $data = $request->only(['title', 'description', 'icon', 'link', 'sort_order', 'is_active', 'page_content']);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('services', 'public');
        }

        Service::create($data);

        return redirect()->route('admin.services')->with('success', 'Service created successfully.');
    }

    public function editService(Service $service): Response
    {
        return Inertia::render('Admin/Services/Edit', ['service' => $service]);
    }

    public function updateService(Request $request, Service $service): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'icon' => 'nullable|string|max:255',
            'image' => 'nullable|image|max:2048',
            'link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
            'page_content' => 'nullable|string',
        ]);

        $data = $request->only(['title', 'description', 'icon', 'link', 'sort_order', 'is_active', 'page_content']);

        if ($request->hasFile('image')) {
            if ($service->image) {
                Storage::disk('public')->delete($service->image);
            }
            $data['image'] = $request->file('image')->store('services', 'public');
        }

        $service->update($data);

        return redirect()->route('admin.services')->with('success', 'Service updated successfully.');
    }

    public function destroyService(Service $service): RedirectResponse
    {
        if ($service->image) {
            Storage::disk('public')->delete($service->image);
        }
        $service->delete();
        return redirect()->route('admin.services')->with('success', 'Service deleted successfully.');
    }

    // ---------------- PLACEMENTS CRUD ----------------

    public function placements(): Response
    {
        $placements = Placement::orderBy('sort_order')->paginate(request()->input('per_page', 10))->withQueryString();
        return Inertia::render('Admin/Placements/Index', ['placements' => $placements]);
    }

    public function createPlacement(): Response
    {
        return Inertia::render('Admin/Placements/Create');
    }

    public function storePlacement(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'text' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'role', 'company', 'text', 'sort_order', 'is_active']);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('placements', 'public');
        }

        Placement::create($data);

        return redirect()->route('admin.placements')->with('success', 'Placement record created successfully.');
    }

    public function editPlacement(Placement $placement): Response
    {
        return Inertia::render('Admin/Placements/Edit', ['placement' => $placement]);
    }

    public function updatePlacement(Request $request, Placement $placement): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'text' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'role', 'company', 'text', 'sort_order', 'is_active']);

        if ($request->hasFile('image')) {
            if ($placement->image) {
                Storage::disk('public')->delete($placement->image);
            }
            $data['image'] = $request->file('image')->store('placements', 'public');
        }

        $placement->update($data);

        return redirect()->route('admin.placements')->with('success', 'Placement record updated successfully.');
    }

    public function destroyPlacement(Placement $placement): RedirectResponse
    {
        if ($placement->image) {
            Storage::disk('public')->delete($placement->image);
        }
        $placement->delete();
        return redirect()->route('admin.placements')->with('success', 'Placement record deleted successfully.');
    }

    // ---------------- PARTNERS / CLIENTS CRUD ----------------

    public function partners(Request $request): Response
    {
        $type = $request->query('type', 'partner');
        $partners = Partner::whereIn('type', [$type, 'both'])->orderBy('sort_order')->paginate(request()->input('per_page', 10))->withQueryString();
        return Inertia::render('Admin/Partners/Index', [
            'partners' => $partners,
            'type' => $type
        ]);
    }

    public function createPartner(Request $request): Response
    {
        return Inertia::render('Admin/Partners/Create', [
            'type' => $request->query('type', 'partner')
        ]);
    }

    public function storePartner(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
            'logo' => 'required|image|max:2048',
            'type' => 'required|in:partner,client',
            'link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'type', 'link', 'sort_order', 'is_active']);

        if ($request->hasFile('logo')) {
            $data['logo'] = $request->file('logo')->store('partners', 'public');
        }

        Partner::create($data);

        return redirect()->route('admin.partners', ['type' => $request->type])->with('success', ucfirst($request->type) . ' logo created successfully.');
    }

    public function editPartner(Partner $partner): Response
    {
        return Inertia::render('Admin/Partners/Edit', ['partner' => $partner]);
    }

    public function updatePartner(Request $request, Partner $partner): RedirectResponse
    {
        $request->validate([
            'name' => 'nullable|string|max:255',
            'logo' => 'nullable|image|max:2048',
            'type' => 'required|in:partner,client',
            'link' => 'nullable|string|max:255',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'type', 'link', 'sort_order', 'is_active']);

        if ($request->hasFile('logo')) {
            if ($partner->logo) {
                Storage::disk('public')->delete($partner->logo);
            }
            $data['logo'] = $request->file('logo')->store('partners', 'public');
        }

        $partner->update($data);

        return redirect()->route('admin.partners', ['type' => $request->type])->with('success', ucfirst($request->type) . ' logo updated successfully.');
    }

    public function destroyPartner(Partner $partner): RedirectResponse
    {
        if ($partner->logo) {
            Storage::disk('public')->delete($partner->logo);
        }
        $type = $partner->type;
        $partner->delete();
        return redirect()->route('admin.partners', ['type' => $type])->with('success', 'Logo deleted successfully.');
    }

    // ---------------- BLOGS CRUD ----------------

    public function blogs(): Response
    {
        $blogs = Blog::orderBy('created_at', 'desc')->paginate(request()->input('per_page', 10))->withQueryString();
        return Inertia::render('Admin/Blogs/Index', ['blogs' => $blogs]);
    }

    public function createBlog(): Response
    {
        return Inertia::render('Admin/Blogs/Create');
    }

    public function storeBlog(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'author' => 'nullable|string|max:255',
            'published_at' => 'nullable|date',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['title', 'excerpt', 'content', 'author', 'published_at', 'is_active']);
        $data['slug'] = Str::slug($request->title) . '-' . time();

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('blogs', 'public');
        }

        Blog::create($data);

        return redirect()->route('admin.blogs')->with('success', 'Blog created successfully.');
    }

    public function editBlog(Blog $blog): Response
    {
        return Inertia::render('Admin/Blogs/Edit', ['blog' => $blog]);
    }

    public function updateBlog(Request $request, Blog $blog): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'excerpt' => 'nullable|string',
            'content' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'author' => 'nullable|string|max:255',
            'published_at' => 'nullable|date',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['title', 'excerpt', 'content', 'author', 'published_at', 'is_active']);
        if ($blog->title !== $request->title) {
            $data['slug'] = Str::slug($request->title) . '-' . time();
        }

        if ($request->hasFile('image')) {
            if ($blog->image) {
                Storage::disk('public')->delete($blog->image);
            }
            $data['image'] = $request->file('image')->store('blogs', 'public');
        }

        $blog->update($data);

        return redirect()->route('admin.blogs')->with('success', 'Blog updated successfully.');
    }

    public function destroyBlog(Blog $blog): RedirectResponse
    {
        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }
        $blog->delete();
        return redirect()->route('admin.blogs')->with('success', 'Blog deleted successfully.');
    }

    // ---------------- FAQS CRUD ----------------

    public function faqs(): Response
    {
        $faqs = Faq::orderBy('sort_order')->paginate(request()->input('per_page', 10))->withQueryString();
        return Inertia::render('Admin/Faqs/Index', ['faqs' => $faqs]);
    }

    public function createFaq(): Response
    {
        return Inertia::render('Admin/Faqs/Create');
    }

    public function storeFaq(Request $request): RedirectResponse
    {
        $request->validate([
            'question' => 'required|string',
            'answer' => 'required|string',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['title', 'description', 'icon', 'experience', 'location', 'tags', 'date', 'sort_order', 'is_active']);
        $data['type'] = 'job';
        $data['sort_order'] = $request->sort_order ?? 0;
        $data['is_active'] = $request->boolean('is_active');

        Career::create($data);

        return redirect()->route('admin.careers')->with('success', 'Job added successfully.');
    }

    public function updateCareer(Request $request, Career $career)
    {
        $request->validate([
            'title' => 'required|string|max:500',
            'description' => 'nullable|string',
            'icon' => 'nullable|string|max:50',
            'experience' => 'nullable|string|max:100',
            'location' => 'nullable|string|max:255',
            'tags' => 'nullable|array',
            'tags.*' => 'string|max:100',
            'date' => 'nullable|string|max:100',
        Faq::create($request->only(['question', 'answer', 'sort_order', 'is_active']));

        return redirect()->route('admin.faqs')->with('success', 'FAQ created successfully.');
    }

    public function editFaq(Faq $faq): Response
    {
        return Inertia::render('Admin/Faqs/Edit', ['faq' => $faq]);
    }

    public function updateFaq(Request $request, Faq $faq): RedirectResponse
    {
        $request->validate([
            'question' => 'required|string',
            'answer' => 'required|string',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['title', 'description', 'icon', 'experience', 'location', 'tags', 'date', 'sort_order', 'is_active']);
        $data['is_active'] = $request->boolean('is_active');

        $career->update($data);

        return redirect()->route('admin.careers')->with('success', 'Job updated successfully.');
    }

    public function destroyCareer(Career $career)
    {
        $career->delete();
        return redirect()->route('admin.careers')->with('success', 'Job deleted.');
    }

    public function storeJobApplication(Request $request)
    {
        $validated = $request->validate([
            'career_id' => 'nullable|exists:careers,id',
            'first_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:30',
            'position' => 'nullable|string|max:255',
            'resume' => 'nullable|file|mimes:pdf,doc,docx|max:5120',
            'cover_letter' => 'nullable|file|mimes:pdf,doc,docx|max:5120',
        ]);

        if ($request->hasFile('resume')) {
            $validated['resume'] = $request->file('resume')->store('applications/resume', 'public');
        }
        if ($request->hasFile('cover_letter')) {
            $validated['cover_letter'] = $request->file('cover_letter')->store('applications/cover_letter', 'public');
        }

        JobApplication::create($validated);

        return redirect()->back()->with('success', 'Application submitted successfully.');
    }

    public function applications()
    {
        $apps = JobApplication::with('career')->orderByDesc('created_at')->get();
        return Inertia::render('Admin/Applications/Index', ['applications' => $apps]);
    }

    public function destroyApplication(JobApplication $application)
    {
        if ($application->resume) Storage::disk('public')->delete($application->resume);
        if ($application->cover_letter) Storage::disk('public')->delete($application->cover_letter);
        $application->delete();
        return redirect()->route('admin.applications')->with('success', 'Application deleted.');
    }

    public function markMessageRead(ContactMessage $message)
    {
        $message->update(['is_read' => true]);
        return redirect()->back()->with('success', 'Message marked as read.');
    }

    public function destroyMessage(ContactMessage $message)
    {
        $message->delete();
        return redirect()->route('admin.contact')->with('success', 'Message deleted.');
        $faq->update($request->only(['question', 'answer', 'sort_order', 'is_active']));

        return redirect()->route('admin.faqs')->with('success', 'FAQ updated successfully.');
    }

    public function destroyFaq(Faq $faq): RedirectResponse
    {
        $faq->delete();
        return redirect()->route('admin.faqs')->with('success', 'FAQ deleted successfully.');
    }

    // ---------------- TESTIMONIALS CRUD ----------------

    public function testimonials(): Response
    {
        $testimonials = GoogleReview::orderBy('sort_order')->paginate(request()->input('per_page', 10))->withQueryString();
        return Inertia::render('Admin/Testimonials/Index', ['testimonials' => $testimonials]);
    }

    public function createTestimonial(): Response
    {
        return Inertia::render('Admin/Testimonials/Create');
    }

    public function storeTestimonial(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'text' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|max:2048',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'role', 'text', 'rating', 'sort_order', 'is_active']);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('testimonials', 'public');
        }

        GoogleReview::create($data);

        return redirect()->route('admin.testimonials')->with('success', 'Testimonial created successfully.');
    }

    public function editTestimonial(GoogleReview $testimonial): Response
    {
        return Inertia::render('Admin/Testimonials/Edit', ['testimonial' => $testimonial]);
    }

    public function updateTestimonial(Request $request, GoogleReview $testimonial): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'nullable|string|max:255',
            'text' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|max:2048',
            'sort_order' => 'nullable|integer|min:0',
            'is_active' => 'nullable|boolean',
        ]);

        $data = $request->only(['name', 'role', 'text', 'rating', 'sort_order', 'is_active']);

        if ($request->hasFile('image')) {
            if ($testimonial->image) {
                Storage::disk('public')->delete($testimonial->image);
            }
            $data['image'] = $request->file('image')->store('testimonials', 'public');
        }

        $testimonial->update($data);

        return redirect()->route('admin.testimonials')->with('success', 'Testimonial updated successfully.');
    }

    public function destroyTestimonial(GoogleReview $testimonial): RedirectResponse
    {
        if ($testimonial->image) {
            Storage::disk('public')->delete($testimonial->image);
        }
        $testimonial->delete();
        return redirect()->route('admin.testimonials')->with('success', 'Testimonial deleted successfully.');
    }
}
