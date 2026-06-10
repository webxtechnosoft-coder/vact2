<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

// Update categories for Product 1 and Product 9
App\Models\Product::where('link', '/vact-autoedge-development-board')
    ->update(['category' => 'Automotive Embedded Development Boards']);

App\Models\Product::where('link', '/vact-embcore-development-board')
    ->update(['category' => 'Automotive Embedded Development Boards']);

echo "Categories updated successfully!" . PHP_EOL;
