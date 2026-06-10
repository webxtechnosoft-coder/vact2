<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$products = App\Models\Product::where('is_active', true)
    ->orderBy('sort_order')
    ->get(['id', 'title', 'category', 'link'])
    ->toArray();

echo json_encode($products, JSON_PRETTY_PRINT) . PHP_EOL;
