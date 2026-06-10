<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

try {
    $services = DB::table('services')->get();
    echo "SERVICES COUNT: " . count($services) . "\n";
    foreach ($services as $service) {
        print_r($service);
    }
} catch (\Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
}
