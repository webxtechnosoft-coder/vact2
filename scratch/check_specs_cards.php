<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

foreach (App\Models\Product::all() as $p) {
    if ($p->page_content) {
        $content = json_decode($p->page_content, true);
        if (isset($content['specs_cards'])) {
            echo "Title: " . $p->title . " | Specs Cards Count: " . count($content['specs_cards']) . PHP_EOL;
            foreach ($content['specs_cards'] as $idx => $card) {
                echo "  Card " . ($idx+1) . ": " . $card['title'] . PHP_EOL;
            }
        }
    }
}
