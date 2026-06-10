<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$p = App\Models\Product::where('link', '/cold-drink-vending-machine')->first();
if (!$p) {
    echo "Product 'Cold Drink Vending Machine' not found!" . PHP_EOL;
    exit(1);
}

echo "=== {$p->title} Page Content ===" . PHP_EOL;
echo $p->page_content ? json_encode(json_decode($p->page_content, true), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) : "Empty/Null" . PHP_EOL;
