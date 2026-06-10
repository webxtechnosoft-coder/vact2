<?php
$content = file_get_contents(__DIR__ . '/../public/assets/css/style.css');
$lines = explode("\n", $content);
foreach ($lines as $num => $line) {
    if (strpos($line, 'why-choose') !== false) {
        echo ($num + 1) . ": " . trim($line) . PHP_EOL;
    }
}
