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

            ['section_key' => 'about-slide-1', 'label' => 'About Slide 1', 'title' => 'VAct EmbCore', 'subtitle' => 'Development Board', 'description' => 'VAct EmbCore Development Board is designed for embedded system development using ARM Cortex-M4 architecture. It supports CAN, SPI, I2C, UART, USB, and SD Card interfaces for real-time applications and data logging.', 'sort_order' => 10, 'is_active' => true, 'image' => 'assets/images/about/about3.png'],
            ['section_key' => 'about-slide-2', 'label' => 'About Slide 2', 'title' => 'Our Services', 'subtitle' => '& Solutions', 'description' => 'Our Services include Embedded Systems Development, Industrial Automation & Control, Fuel Monitoring Systems, IoT Solutions, and Embedded Offshore Outsourcing services.', 'sort_order' => 11, 'is_active' => true, 'image' => 'assets/images/about/about2.png'],
            ['section_key' => 'about-slide-3', 'label' => 'About Slide 3', 'title' => 'Our Products', 'subtitle' => '& Solutions', 'description' => 'Our Products include advanced Vending Machine solutions for smart and automated dispensing applications. We provide Automatic Milk, Oil, Cool Drink, and Coffee Vending Machines.', 'sort_order' => 12, 'is_active' => true, 'image' => 'assets/images/about/about1.png'],
            ['section_key' => 'about-slide-4', 'label' => 'About Slide 4', 'title' => 'VAct Technologies', 'subtitle' => 'Transforming Ideas', 'description' => 'VAct Technologies transforms innovative ideas into complete product solutions with advanced design and development services. We deliver efficient solutions for industrial, automation, and embedded applications.', 'sort_order' => 13, 'is_active' => true, 'image' => 'assets/images/about/about4.png'],

            ['section_key' => 'contact-office-cbe', 'label' => 'Coimbatore Office', 'title' => 'Coimbatore Office', 'subtitle' => null, 'description' => null, 'sort_order' => 14, 'is_active' => true, 'settings' => ['name' => 'Coimbatore Office', 'address' => '145 Saradha Mill Road, Sundarapuram Post, Coimbatore-641024', 'phone' => '+91 96001 00882', 'map_url' => 'https://maps.google.com/maps?q=VAct+Technologies+Pvt+Ltd,+145+Saradha+Mill+Road,+Coimbatore&t=&z=16&ie=UTF8&iwloc=&output=embed']],
            ['section_key' => 'contact-office-che', 'label' => 'Chennai Office', 'title' => 'Chennai Office', 'subtitle' => null, 'description' => null, 'sort_order' => 15, 'is_active' => true, 'settings' => ['name' => 'Chennai Office', 'address' => 'No. 3, 2nd Cross Street, VGP Selva Nagar, Chennai-600092', 'phone' => '+91 78719 09590', 'map_url' => 'https://maps.google.com/maps?q=VAct+Technologies+Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed']],
            ['section_key' => 'contact-page', 'label' => 'Contact Page Content', 'title' => null, 'subtitle' => null, 'description' => null, 'sort_order' => 16, 'is_active' => true, 'settings' => [
                'tagline' => 'Get In Touch',
                'heading_1' => "We're always",
                'heading_2' => 'Here to Help You',
                'subtitle' => 'Reach out to us through any of these following ways',
                'form_title' => 'Get in Touch with Us',
                'form_btn' => 'Send message',
                'form_btn_sending' => 'Sending...',
                'details_title' => 'Contact Details',
                'details_subtext' => 'Reach out to us directly for any technical validation, software design, embedded systems training or industrial automation inquiries.',
                'mobile_label' => 'Mobile',
                'availability_label' => 'Availability',
                'availability_text' => 'Daily 09 am - 05 pm',
                'email_label' => 'Email',
                'email_text' => 'careers@vact-tech.com',
                'website_label' => 'Website',
                'website_name' => 'www.vact-tech.com',
                'website_url' => 'https://www.vact-tech.com',
                'social_title' => 'Social Media:',
                'testimonial_tagline' => 'Testimonial',
                'testimonial_heading_1' => 'Trusted by Global',
                'testimonial_heading_2' => 'Development Companies',
            ]],
            ['section_key' => 'contact-socials', 'label' => 'Contact Social Links', 'title' => null, 'subtitle' => null, 'description' => null, 'sort_order' => 17, 'is_active' => true, 'settings' => [
                'facebook' => '#',
                'twitter' => 'https://x.com/VActTechnology',
                'linkedin' => 'https://www.linkedin.com/company/vact-technologies/',
                'instagram' => 'https://www.instagram.com/vacttech/',
                'youtube' => 'https://www.youtube.com/channel/UCcpRq9mlF7iP3GiZuZBO3sg',
                'telegram' => 'https://t.me/vacttechnologycareers',
            ]],

            ['section_key' => 'career-job-1', 'label' => 'Career Job 1', 'title' => 'Embedded Software Engineer (Telematics)', 'description' => null, 'sort_order' => 1, 'is_active' => true, 'settings' => ['icon' => 'fa-microchip', 'experience' => '2 - 3 Years', 'location' => 'Bangalore', 'tags' => ['ARM Architecture', 'Bootloaders', 'CAN', 'I2C', 'UART', 'SPI', 'UDS', 'Microcontroller'], 'date' => 'Feb 2025']],
            ['section_key' => 'career-job-2', 'label' => 'Career Job 2', 'title' => 'Harness Engineer', 'description' => null, 'sort_order' => 2, 'is_active' => true, 'settings' => ['icon' => 'fa-project-diagram', 'experience' => '5 Years', 'location' => 'Chennai', 'tags' => ['Creo Cabling', 'LV Panels', 'Wiring Diagram', 'ECM', 'Electrical Documentation', 'System Integration'], 'date' => 'Feb 2025']],
            ['section_key' => 'career-job-3', 'label' => 'Career Job 3', 'title' => 'Hardware Solutions Architect', 'description' => null, 'sort_order' => 3, 'is_active' => true, 'settings' => ['icon' => 'fa-network-wired', 'experience' => '14+ Years', 'location' => 'Chennai', 'tags' => ['ARM', 'FPGA', 'SoC Development', 'High-Speed PCB Design', 'ISO 26262', 'CAN', 'PCIe', 'DDR'], 'date' => 'Jan 2025']],
            ['section_key' => 'career-job-4', 'label' => 'Career Job 4', 'title' => 'Embedded Engineer', 'description' => null, 'sort_order' => 4, 'is_active' => true, 'settings' => ['icon' => 'fa-code', 'experience' => '6+ Years', 'location' => 'Bangalore', 'tags' => ['Embedded C/C++', 'Yocto', 'Embedded Linux', 'Device Drivers', 'RTOS'], 'date' => 'Jan 2025']],
            ['section_key' => 'career-job-5', 'label' => 'Career Job 5', 'title' => 'PCB Developer', 'description' => null, 'sort_order' => 5, 'is_active' => true, 'settings' => ['icon' => 'fa-memory', 'experience' => '4+ Years', 'location' => 'Hyderabad', 'tags' => ['PCB Development', 'Vivado Tool', 'I2C', 'SPI', 'Ethernet', 'CAN FD', 'MIPI', 'IO'], 'date' => 'Dec 2024']],

            ['section_key' => 'career-placement-1', 'label' => 'Career Placement 1', 'title' => 'Divakar.R', 'description' => 'Divakar.R secured a role as a Hardware Design Engineer. With 7 years of experience, he has strong expertise in hardware design and development.', 'sort_order' => 1, 'is_active' => true, 'image' => 'assets/images/placements/divakar.png', 'settings' => ['role' => 'Hardware Design Engineer']],
            ['section_key' => 'career-placement-2', 'label' => 'Career Placement 2', 'title' => 'Dinesh Babu', 'description' => 'Dinesh Babu from Batch 51 secured a role as an Embedded Engineer. His technical skills and dedication helped him gain 2 years of successful industry experience.', 'sort_order' => 2, 'is_active' => true, 'image' => 'assets/images/placements/dinesh-babu.png', 'settings' => ['role' => 'Embedded Engineer']],
            ['section_key' => 'career-placement-3', 'label' => 'Career Placement 3', 'title' => 'Abinaya', 'description' => 'Abinaya secured a role as Senior Software Engineer - Automotive. With 4.5 years of experience, she has strong expertise in automotive software and embedded technologies.', 'sort_order' => 3, 'is_active' => true, 'image' => 'assets/images/placements/Abhinaya.png', 'settings' => ['role' => 'Sr. SWE - Automotive']],
            ['section_key' => 'career-placement-4', 'label' => 'Career Placement 4', 'title' => 'Mukesh.E', 'description' => 'Mukesh.E secured a Mechanical Design P3 role with an impressive salary package of 7 LPA. His 7 years of experience showcase his strong professional growth in mechanical design engineering.', 'sort_order' => 4, 'is_active' => true, 'image' => 'assets/images/placements/muk.png', 'settings' => ['role' => 'Mechanical Design P3']],
            ['section_key' => 'career-placement-5', 'label' => 'Career Placement 5', 'title' => 'KARTHICK T', 'description' => 'KARTHICK T achieved placement as a Hardware Design Engineer. With 6.5 years of experience, he has gained strong expertise in hardware design and validation.', 'sort_order' => 5, 'is_active' => true, 'image' => 'assets/images/placements/karthick.png', 'settings' => ['role' => 'Hardware Design Engineer']],
            ['section_key' => 'career-placement-6', 'label' => 'Career Placement 6', 'title' => 'Balamurali', 'description' => 'Balamurali started his career as a Mechanical Design Engineer. His strong understanding of design concepts helped him excel in the mechanical industry.', 'sort_order' => 6, 'is_active' => true, 'image' => 'assets/images/placements/balamurali.png', 'settings' => ['role' => 'Mechanical Design Engineer']],
        ];

        foreach ($sections as $s) {
            CompanyContent::updateOrCreate(['section_key' => $s['section_key']], $s);
        }

        $this->command->info('Company contents seeded: ' . CompanyContent::count());
    }
}
