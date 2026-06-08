<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('company_contents', function (Blueprint $table) {
            $table->text('extra_heading')->nullable()->after('description');
            $table->json('points')->nullable()->after('extra_heading');
        });
    }

    public function down(): void
    {
        Schema::table('company_contents', function (Blueprint $table) {
            $table->dropColumn(['extra_heading', 'points']);
        });
    }
};
