<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    public function run(): void
    {
        $testimonials = [
            ['name' => 'Anita Sharma', 'content' => 'The embedded systems training at VAct Technologies was very informative and practical. The real-time projects improved my technical skills and confidence.', 'role' => 'Parent of Ayaan', 'video_url' => 'https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ', 'image' => 'assets/images/Testimonials/test.png', 'duration' => '1:25', 'sort_order' => 1],
            ['name' => 'Rohit Verma', 'content' => 'VAct Technologies provided excellent guidance throughout my internship. The trainers explained every concept clearly with hands-on experience.', 'role' => 'Parent of Myra', 'video_url' => 'https://youtube.com/shorts/qy5G0AJ9vjg?si=rv2AqJmMARPSPgxx', 'image' => 'assets/images/Testimonials/test.png', 'duration' => '1:40', 'sort_order' => 2],
            ['name' => 'Neha Kapoor', 'content' => 'The internship program helped me understand embedded systems and IoT applications in a practical way. The mentors were very supportive.', 'role' => 'Parent of Vihaan', 'video_url' => 'https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ', 'image' => 'assets/images/Testimonials/test.png', 'duration' => '1:18', 'sort_order' => 3],
            ['name' => 'Priya Nair', 'content' => 'I gained valuable knowledge in firmware development and embedded technology during my internship. The training sessions were interactive and useful.', 'role' => 'Parent of Vivaan', 'video_url' => 'https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ', 'image' => 'assets/images/Testimonials/test.png', 'duration' => '1:25', 'sort_order' => 4],
            ['name' => 'Sneha Kapoor', 'content' => 'The practical approach to learning at VAct Technologies helped me grasp complex concepts easily. Highly recommended for embedded systems training.', 'role' => 'Parent of Aadhya', 'video_url' => 'https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ', 'image' => 'assets/images/Testimonials/test.png', 'duration' => '1:25', 'sort_order' => 5],
            ['name' => 'Pooja Menon', 'content' => 'VAct Technologies gave me the perfect platform to start my career in embedded systems. The mentorship and training were outstanding.', 'role' => 'Parent of Vivaan', 'video_url' => 'https://youtube.com/shorts/XyuauoCURA8?si=T1gyv2hELsYkEnIJ', 'image' => 'assets/images/Testimonials/test.png', 'duration' => '1:25', 'sort_order' => 6],
        ];

        foreach ($testimonials as $t) {
            Testimonial::updateOrCreate(
                ['name' => $t['name']],
                $t
            );
        }

        $this->command->info('Testimonials seeded: ' . Testimonial::count());
    }
}
