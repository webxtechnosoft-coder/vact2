<?php
$html = file_get_contents(__DIR__ . '/embcore_rendered.html');
preg_match_all('/href="([^"]+)"/', $html, $matches);
foreach ($matches[1] as $url) {
    if (strpos($url, 'http') === 0) {
        $headers = @get_headers($url);
        if ($headers) {
            echo "URL: $url | Status: " . $headers[0] . PHP_EOL;
        } else {
            echo "URL: $url | Status: FAILED TO FETCH" . PHP_EOL;
        }
    }
}
