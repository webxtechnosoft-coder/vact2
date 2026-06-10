<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$p1 = App\Models\Product::where('link', '/vact-autoedge-development-board')->first();
echo $p1->page_content . PHP_EOL;
