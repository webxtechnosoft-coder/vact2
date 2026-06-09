<?php

namespace Database\Seeders;

use App\Models\Slider;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        if (!User::where('email', 'admin@vact.com')->exists()) {
            User::factory()->create([
                'name' => 'Admin',
                'email' => 'admin@vact.com',
                'password' => bcrypt('admin123'),
            ]);
        }

        $this->call(CompanyContentSeeder::class);
        $this->call(GallerySeeder::class);
        $this->call(BlogSeeder::class);
        $this->call(TestimonialSeeder::class);
        $this->call(CareerSeeder::class);
        $this->call(ServicesSeeder::class);

        if (Slider::count() === 0) {
        Slider::insert([
            [
                'title' => 'VAct AutoEdge Development Board',
                'subtitle' => 'Future-Ready Learning Platform',
                'description' => 'Accelerate automotive innovation with our high-performance development board designed for precision control, protocol testing, reliability, and next-generation embedded applications.',
                'btn_text' => 'Explore Courses',
                'btn_link' => '/coursedetails',
                'bg_image' => 'sliders/slider-1-1.jpg',
                'slide_image' => 'sliders/main-slider-img-1-1.png',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Our Products - Smart Automated Vending Solutions',
                'subtitle' => null,
                'description' => 'Explore our range of intelligent vending machines engineered for efficiency, automation, and seamless dispensing across milk, oil, beverages, and refreshment applications.',
                'btn_text' => 'Explore Products',
                'btn_link' => '#products',
                'bg_image' => 'sliders/slider-1-2.jpg',
                'slide_image' => 'sliders/main-slider-img-1-2.png',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Our Services - Embedded Systems, IoT & Industrial Innovation',
                'subtitle' => null,
                'description' => 'Delivering cutting-edge services in Embedded Systems, IoT, Industrial Automation and offshore engineering development.',
                'btn_text' => 'Explore Services',
                'btn_link' => '#services',
                'bg_image' => 'sliders/slider-1-3.jpg',
                'slide_image' => 'sliders/main-slider-img-1-3.png',
                'sort_order' => 3,
                'is_active' => true,
            ],
        ]);
        }
    }
}
