<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProductController extends Controller
{
    public function show(string $slug): Response
    {
        // Search for product with matching link (e.g. '/vact-autoedge-development-board')
        $product = Product::where('is_active', true)
            ->where('link', '/' . $slug)
            ->firstOrFail();

        // Decode JSON page_content to array/object before sending to Inertia
        if ($product->page_content) {
            $decoded = json_decode($product->page_content, true);
            if (json_last_error() === JSON_ERROR_NONE) {
                $product->page_content = $decoded;
            } else {
                $product->page_content = null;
            }
        }

        return Inertia::render('ProductDetail', [
            'product' => $product,
        ]);
    }
}
