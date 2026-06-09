<?php
function search_css($dir) {
    $it = new RecursiveDirectoryIterator($dir);
    foreach (new RecursiveIteratorIterator($it) as $file) {
        if ($file->isDir()) continue;
        $path = $file->getPathname();
        if (pathinfo($path, PATHINFO_EXTENSION) !== 'css') continue;
        $content = file_get_contents($path);
        if (strpos($content, 'why-choose-card') !== false) {
            echo "Found in: $path" . PHP_EOL;
        }
        if (strpos($content, 'why-choose-badge') !== false) {
            echo "Found in (badge): $path" . PHP_EOL;
        }
    }
}

search_css(__DIR__ . '/../');
