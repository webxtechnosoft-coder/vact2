<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$products = App\Models\Product::all(['id', 'title', 'link', 'page_content']);
foreach ($products as $p) {
    echo "ID: {$p->id} | Title: {$p->title} | Link: {$p->link} | JSON Length: " . strlen($p->page_content) . PHP_EOL;
}
