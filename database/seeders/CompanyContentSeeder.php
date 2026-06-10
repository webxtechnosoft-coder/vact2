<?php

namespace Database\Seeders;

use App\Models\CompanyContent;
use Illuminate\Database\Seeder;

class CompanyContentSeeder extends Seeder
{
    public function run(): void
    {
        $sections = [
            ['section_key' => 'about-content', 'label' => 'About Company',     'title' => 'A Trusted Partner For Embedded Systems And Innovation',
            'subtitle' => 'About VAct Technologies',
            'description' => 'VAct Technologies Private Limited is a premier embedded systems company headquartered in Coimbatore, India. Founded with a vision to bridge the gap between cutting-edge technology and practical applications, VAct has been at the forefront of embedded product development, industrial automation, and technology training for over 15 years. Our team of highly skilled engineers brings deep expertise in embedded C, C++, RTOS, Linux device drivers, FPGA design, IoT, and more. We partner with startups, SMEs, and Fortune 500 companies to deliver reliable, innovative, and cost-effective solutions.', 'sort_order' => 1, 'is_active' => true],
            ['section_key' => 'vision', 'label' => 'Vision', 'title' => 'Vision', 'subtitle' => null, 'description' => 'To be a world-class provider of embedded solutions, driving innovation and excellence in every project we undertake, and creating lasting value for our clients and society.', 'sort_order' => 2, 'is_active' => true],
            ['section_key' => 'quality', 'label' => 'Quality', 'title' => 'Quality', 'subtitle' => null, 'description' => 'We adhere to the highest quality standards in every project, with rigorous testing, code reviews, and continuous improvement processes to ensure exceptional deliverables.', 'sort_order' => 3, 'is_active' => true],
            ['section_key' => 'mission', 'label' => 'Mission', 'title' => 'Mission', 'subtitle' => null, 'description' => 'To empower businesses with transformative embedded technologies through innovative engineering, exceptional talent, and unwavering commitment to client success.', 'sort_order' => 4, 'is_active' => true],
            ['section_key' => 'director', 'label' => 'Managing Director', 'title' => 'Mr. Kumaravel Pandurangan', 'subtitle' => 'Managing Director', 'description' => 'Kumaravel Pandurangan is the Founder and Managing Director of VAct Technologies Private Limited. With over 24 years of experience in the embedded systems industry, he is a visionary leader who has built VAct into a trusted name for embedded product development and industrial automation solutions. His expertise spans across embedded C, C++, RTOS, Linux device drivers, FPGA, and IoT. He is passionate about nurturing talent and driving technology innovation that makes a real impact.', 'sort_order' => 5, 'is_active' => true],
            ['section_key' => 'testimonial-1', 'label' => 'Testimonial 1', 'title' => 'Saravanan G', 'subtitle' => 'CEO, Tech Innovations', 'description' => 'VAct Technologies has been an outstanding partner for our embedded systems needs. Their team technical expertise and professionalism are truly impressive. They delivered complex projects on time and within budget.', 'sort_order' => 6, 'is_active' => true],
            ['section_key' => 'testimonial-2', 'label' => 'Testimonial 2', 'title' => 'Priya M', 'subtitle' => 'HR Manager, AutoComponents Ltd', 'description' => 'The training programs at VAct are world-class. Our team gained practical, hands-on experience with embedded systems that immediately translated to improved productivity. Highly recommended for corporate training.', 'sort_order' => 7, 'is_active' => true],
            ['section_key' => 'testimonial-3', 'label' => 'Testimonial 3', 'title' => 'Ramesh K', 'subtitle' => 'Director, GreenEnergy Solutions', 'description' => 'VAct delivered a custom IoT solution that exceeded our expectations. From hardware design to cloud integration, their end-to-end capability made the entire process seamless. A true partner in innovation.', 'sort_order' => 8, 'is_active' => true],
            ['section_key' => 'testimonial-4', 'label' => 'Testimonial 4', 'title' => 'Anita S', 'subtitle' => 'CTO, AutoTech Systems', 'description' => 'We partnered with VAct for automotive embedded software development and were thoroughly impressed. Their knowledge of CAN protocols and AUTOSAR standards is outstanding. Great team to work with.', 'sort_order' => 9, 'is_active' => true],
        ];

        foreach ($sections as $s) {
            CompanyContent::create($s);
        }

        $this->command->info('Company contents seeded: ' . CompanyContent::count());
    }
}
