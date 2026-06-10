<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$products = App\Models\Product::orderBy('id')->get();
foreach ($products as $p) {
    echo "ID: " . $p->id . " | Title: " . $p->title . " | Link: " . $p->link . PHP_EOL;
    if ($p->page_content) {
        $content = json_decode($p->page_content, true);
        if ($content) {
            echo "  Keys: " . implode(', ', array_keys($content)) . PHP_EOL;
        } else {
            echo "  Invalid JSON: " . $p->page_content . PHP_EOL;
        }
    } else {
        echo "  page_content is NULL" . PHP_EOL;
    }
}
