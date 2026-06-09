<?php

namespace Database\Seeders;

use App\Models\Gallery;
use Illuminate\Database\Seeder;

class GallerySeeder extends Seeder
{
    public function run(): void
    {
        if (Gallery::count() > 0) return;

        $images = [];
        for ($i = 1; $i <= 21; $i++) {
            $images[] = [
                'title' => 'Gallery Image ' . $i,
                'image' => 'assets/images/gallery1/gal' . $i . '.png',
                'sort_order' => $i,
                'is_active' => true,
            ];
        }

        foreach ($images as $img) {
            Gallery::create($img);
        }
    }
}
