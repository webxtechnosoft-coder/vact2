<?php
function search_dir($dir) {
    $it = new RecursiveDirectoryIterator($dir);
    foreach (new RecursiveIteratorIterator($it) as $file) {
        if ($file->isDir()) continue;
        $path = $file->getPathname();
        if (strpos($path, '.git') !== false || strpos($path, 'vendor') !== false || strpos($path, 'node_modules') !== false || strpos($path, 'storage') !== false) {
            continue;
        }
        $content = @file_get_contents($path);
        if ($content && strpos($content, 'why-choose-card') !== false) {
            echo "Found in: $path" . PHP_EOL;
        }
    }
}

search_dir(__DIR__ . '/../');
