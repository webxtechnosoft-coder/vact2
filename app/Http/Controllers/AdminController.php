<?php

namespace App\Http\Controllers;

use App\Models\CompanyContent;
use App\Models\Slider;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

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
        $users = User::latest()->paginate(10);

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
        $sliders = Slider::orderBy('sort_order')->paginate(10);

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
}
