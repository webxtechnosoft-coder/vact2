<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$p1 = App\Models\Product::where('link', '/vact-autoedge-development-board')->first();
$p9 = App\Models\Product::where('link', '/vact-embcore-development-board')->first();

echo "=== PRODUCT 1 (Autoedge) ===" . PHP_EOL;
echo $p1->page_content . PHP_EOL;

echo "=== PRODUCT 9 (Embcore) ===" . PHP_EOL;
echo $p9->page_content . PHP_EOL;
