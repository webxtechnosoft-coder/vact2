<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$p9 = App\Models\Product::where('link', '/vact-embcore-development-board')->first();
$content = json_decode($p9->page_content, true);

// Replace requirements with the full two cards structure
$content['requirements'] = [
    'cards' => [
        [
            'title' => 'Operational Requirements',
            'icon' => 'fas fa-desktop',
            'items' => [
                'Windows® 7 or 10 (32/64-bit)',
                '9-12V DC / 1A Power Supply',
                'STM32CUBEMX with ARM toolchains'
            ]
        ],
        [
            'title' => 'Main Specifications',
            'icon' => 'fas fa-microchip',
            'items' => [
                'STM32F205R8 (Cortex-M3)',
                'Up to 1 MB Flash / 128+4 KB SRAM',
                '120 MHz Max Execution Speed',
                '32.768kHz RTC Crystal'
            ]
        ]
    ]
];

$p9->page_content = json_encode($content, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
$p9->save();

echo "Product 9 requirements updated successfully!" . PHP_EOL;
