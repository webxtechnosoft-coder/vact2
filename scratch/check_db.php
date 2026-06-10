<?php
require 'vendor/autoload.php';
$app = require_once 'bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

$tables = DB::select('SHOW TABLES');
print_r($tables);

foreach ($tables as $table) {
    $tableName = array_values((array)$table)[0];
    echo "TABLE: $tableName\n";
    try {
        print_r(Schema::getColumnListing($tableName));
    } catch (\Exception $e) {
        echo "Error listing columns: " . $e->getMessage() . "\n";
    }
    echo "\n";
}
