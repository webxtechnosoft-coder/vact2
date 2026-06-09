<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$updates = [
    '/vact-autoedge-development-board' => 'VAct AutoEdge Development Board',
    '/automatic-milk-vending-machine' => 'Automatic Milk Vending Machine',
    '/automatic-oil-vending-machine' => 'Automatic Oil Vending Machine',
    '/automatic-oil-pouch-packing-machine' => 'Automatic Oil Pouch Packing Machine',
    '/cold-drink-vending-machine' => 'Cold Drink Vending Machine',
    '/automatic-milk-bag-packing-machine' => 'Automatic Milk Bag Packing Machine',
    '/automatic-coffee-vending-machine' => 'Automatic Coffee Vending Machine',
    '/open-top-chambers' => 'Open Top Chambers',
    '/vact-embcore-development-board' => 'VAct EmbCore Development Board',
];

foreach ($updates as $link => $title) {
    App\Models\Product::where('link', $link)->update(['title' => $title]);
}

echo "Product titles cleaned up and updated!" . PHP_EOL;
