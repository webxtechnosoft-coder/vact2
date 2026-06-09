<?php
$html = file_get_contents('http://127.0.0.1:8000/vact-embcore-development-board');
file_put_contents(__DIR__ . '/embcore_rendered.html', $html);
echo "HTML fetched successfully!" . PHP_EOL;
