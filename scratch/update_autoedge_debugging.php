<?php
require __DIR__ . '/../vendor/autoload.php';
$app = require_once __DIR__ . '/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$p1 = App\Models\Product::where('link', '/vact-autoedge-development-board')->first();
if (!$p1) {
    echo "Product AutoEdge not found!" . PHP_EOL;
    exit(1);
}

$content = json_decode($p1->page_content, true) ?: [];

// Add the debugging guide section
$content['debugging_guide'] = [
    'badge' => '<i class="fas fa-code-branch"></i> Running & Debugging',
    'heading' => 'Running & <span>Debugging</span>',
    'intro' => 'Follow these steps to configure, program, and debug your STM32-based AutoEdge Development Board.',
    'steps' => [
        'Configure I/O pins and generate initialization C code using <strong>STM32CubeMX</strong>.',
        'Edit your program, add header files and compile in <strong>Keil uVision 5</strong>.',
        'Build the project by selecting <em>Project > Build All</em>.',
        'Plug-in 9-12V/1A Power supply to the board (Ensure 1A supply).',
        'Connect an <strong>ST-link v2 Debugger</strong> to the program header.',
        'Connect the ST-link USB port to your PC via USB cable.'
    ]
];

$p1->page_content = json_encode($content, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
$p1->save();

echo "Product AutoEdge page content updated with Running & Debugging guide successfully!" . PHP_EOL;
