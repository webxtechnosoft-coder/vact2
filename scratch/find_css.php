<?php
$dir = __DIR__ . '/../public/assets/css';
$files = glob("$dir/*.css");

foreach ($files as $file) {
    $content = file_get_contents($file);
    if (strpos($content, 'why-choose-card') !== false) {
        echo "Found in: " . basename($file) . PHP_EOL;
    }
}
