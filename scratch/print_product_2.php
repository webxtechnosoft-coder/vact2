<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$p2 = App\Models\Product::where('link', '/automatic-milk-vending-machine')->first();
echo $p2->page_content . PHP_EOL;
