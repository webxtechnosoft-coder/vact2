<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
            ],
            'services' => \App\Models\Service::orderBy('sort_order')->get(['id', 'title']),
            'sidebarProducts' => \App\Models\Product::where('is_active', true)->orderBy('sort_order')->get(['id', 'title', 'category', 'link']),
        ];
    }
}
