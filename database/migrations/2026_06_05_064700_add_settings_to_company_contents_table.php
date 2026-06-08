<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('company_contents', function (Blueprint $table) {
            $table->json('settings')->nullable()->after('points');
        });
    }

    public function down(): void
    {
        Schema::table('company_contents', function (Blueprint $table) {
            $table->dropColumn('settings');
        });
    }
};
