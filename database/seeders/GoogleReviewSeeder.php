<?php

namespace Database\Seeders;

use App\Models\GoogleReview;
use Illuminate\Database\Seeder;

class GoogleReviewSeeder extends Seeder
{
    public function run(): void
    {
        if (GoogleReview::count() === 0) {
            GoogleReview::insert([
                [
                    'name' => 'Santhosh Selvam',
                    'role' => 'Embedded Systems Trainee',
                    'text' => 'The embedded systems training at VAct Technologies was very informative and practical. The real-time projects improved my technical skills and confidence.',
                    'rating' => 5,
                    'image' => 'assets/images/testimonial/testimonial-2-1.jpg',
                    'sort_order' => 1,
                    'is_active' => true,
                ],
                [
                    'name' => 'Mohan Ravi',
                    'role' => 'Embedded Software Intern',
                    'text' => 'VAct Technologies provided excellent guidance throughout my internship. The trainers explained every concept clearly with hands-on experience.',
                    'rating' => 5,
                    'image' => 'assets/images/testimonial/testimonial-2-2.jpg',
                    'sort_order' => 2,
                    'is_active' => true,
                ],
                [
                    'name' => 'Swathy',
                    'role' => 'Embedded & IoT Intern',
                    'text' => 'The internship program helped me understand embedded systems and IoT applications in a practical way. The mentors were very supportive.',
                    'rating' => 5,
                    'image' => 'assets/images/testimonial/testimonial-2-3.jpg',
                    'sort_order' => 3,
                    'is_active' => true,
                ],
                [
                    'name' => 'Hema M',
                    'role' => 'Embedded Systems Intern',
                    'text' => 'I gained valuable knowledge in firmware development and embedded technology during my internship. The training sessions were interactive and useful.',
                    'rating' => 5,
                    'image' => 'assets/images/testimonial/testimonial-2-4.jpg',
                    'sort_order' => 4,
                    'is_active' => true,
                ],
            ]);
        }
    }
}
