<?php
$html = file_get_contents('http://127.0.0.1:8000/vact-autoedge-development-board');
echo substr($html, 0, 3000) . PHP_EOL;
