<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Faq;
use App\Models\PartnerLogo;
use App\Models\Placement;
use App\Models\Product;
use App\Models\Service;
use App\Models\Testimonial;
use Illuminate\Database\Seeder;

class HomeContentSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Products
        Product::insert([
            [
                'title' => 'Vact-Autoedge-development-board Course',
                'subtitle' => 'Embedded Systems',
                'description' => 'VAct AutoEdge Development Board based on STM32 designed & developed in-house by VAct Technologies for advanced learning driver development',
                'image' => 'product/product13.png',
                'link' => '/vact-autoedge-development-board',
                'rating' => 5.2,
                'reviews_count' => 1520,
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'Automatic Milk Vending Machine',
                'subtitle' => 'Smart Retail',
                'description' => 'Our Milk Vending Machines are of fully automatic and reliable because of the utilization of highest quality components.',
                'image' => 'product/product14.png',
                'link' => '/automatic-milk-vending-machine',
                'rating' => 4.2,
                'reviews_count' => 1630,
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'Automatic oil vending machine',
                'subtitle' => 'Fluid Automation',
                'description' => 'Our Oil Vending Machines are delivering specific quantity of oil with high accuracy. These machines are extensively utilized in oil packaging industry, and shops & shops selling oil.',
                'image' => 'product/product7.png',
                'link' => '/automatic-oil-vending-machine',
                'rating' => 5.2,
                'reviews_count' => 3520,
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'Automatic Oil Pouch Packing',
                'subtitle' => 'Packaging Tech',
                'description' => 'We have established ourselves as a number one organization that\'s actively committed towards offering Oil Pouch Packing Machine.',
                'image' => 'product/product8.png',
                'link' => '/automatic-oil-pouch-packing-machine',
                'rating' => 5.3,
                'reviews_count' => 1820,
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'title' => 'Cold Drink Vending Machine',
                'subtitle' => 'Vending Solutions',
                'description' => 'We are renowned for providing complete solution of soft Drink vending machine that that are specifically designed and made as per National and International quality standards.',
                'image' => 'product/product9.png',
                'link' => '/cold-drink-vending-machine',
                'rating' => 5.2,
                'reviews_count' => 1520,
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'title' => 'Automatic Milk bag Packing Machine',
                'subtitle' => 'Dairy Automation',
                'description' => 'We are manufacturing and supplying Automatic Milk Bag Packing Machine to our customers.These machines are used specifically for milk filling and are asked widely in the market.',
                'image' => 'product/product10.png',
                'link' => '/automatic-milk-bag-packing-machine',
                'rating' => 4.2,
                'reviews_count' => 1630,
                'sort_order' => 6,
                'is_active' => true,
            ],
            [
                'title' => 'Automatic Coffee Vending Machine',
                'subtitle' => 'Beverage Systems',
                'description' => 'Make your hot cup of coffee in seconds. This coffee vending machine dispenses your cups on just press of button. We have been able to provide the customers with a remarkable assortment of 10 Option Fresh Milk Coffee Vending Machines.',
                'image' => 'product/product11.png',
                'link' => '/automatic-coffee-vending-machine',
                'rating' => 5.2,
                'reviews_count' => 3520,
                'sort_order' => 7,
                'is_active' => true,
            ],
            [
                'title' => 'Open Top Chambers',
                'subtitle' => 'Environmental Research',
                'description' => 'The goal of Open Top Chambers (OTCs) is to precisely manage and regulate the required CO2, temperature, and humidity inside the OTCs in order to examine how plants react to high CO2 and other gas environments',
                'image' => 'product/product12.png',
                'link' => '/open-top-chambers',
                'rating' => 5.3,
                'reviews_count' => 1820,
                'sort_order' => 8,
                'is_active' => true,
            ],
        ]);

        // 2. Services
        Service::insert([
            [
                'title' => 'INDUSTRIAL AUTOMATION & CONTROL',
                'description' => 'Specialized automation and control solutions tailored for industrial efficiency.',
                'icon' => 'fa fa-industry',
                'image' => 'services/services9.png',
                'link' => '/industrial-automation-and-control',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'EMBEDDED SYSTEM',
                'description' => 'Expert embedded system development for real-time applications and IoT solutions.',
                'icon' => 'fa fa-microchip',
                'image' => 'services/services5.png',
                'link' => '/embedded-systems',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'EMBEDDED OFFSHORE OUTSOURCING',
                'description' => 'Cost-effective offshore outsourcing for embedded systems development and support.',
                'icon' => 'fa fa-microchip',
                'image' => 'services/services6.png',
                'link' => '/embedded-offshore-outsourcing',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'title' => 'FUEL MONITORING SYSTEM',
                'description' => 'Real-time fuel tracking and monitoring to prevent theft and optimize consumption.',
                'icon' => 'fa fa-gas-pump',
                'image' => 'services/services4.png',
                'link' => '/fuel-monitoring-system',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'title' => 'CIVIL ENGINEERING',
                'description' => 'Comprehensive career guidance and placement support for professional success.',
                'icon' => 'fa fa-graduation-cap',
                'image' => 'services/services8.png',
                'link' => '/civil-pmc',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'title' => 'HUMAN RESOURCES',
                'description' => 'Strategic HR solutions including recruitment, training, and workforce management.',
                'icon' => 'fa fa-users',
                'image' => 'services/services7.png',
                'link' => '/human-resource',
                'sort_order' => 6,
                'is_active' => true,
            ],
        ]);

        // 3. Placements
        Placement::insert([
            [
                'name' => 'Divakar.R',
                'job_title' => 'Hardware Design Engineer',
                'salary_package' => null,
                'experience' => '7 years',
                'batch' => null,
                'description' => 'Divakar.R secured a role as a Hardware Design Engineer. With 7 years of experience, he has strong expertise in hardware design and development.',
                'image' => 'placements/divakar.png',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Dinesh Babu',
                'job_title' => 'Embedded engineer',
                'salary_package' => null,
                'experience' => '2 years',
                'batch' => 'Batch 51',
                'description' => 'Dinesh Babu from Batch 51 secured a role as an Embedded Engineer. His technical skills and dedication helped him gain 2 years of successful industry experience.',
                'image' => 'placements/dinesh-babu.png',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Abinaya',
                'job_title' => 'Sr. SWE- Automotive',
                'salary_package' => null,
                'experience' => '4.5 years',
                'batch' => null,
                'description' => 'Abinaya secured a role as Senior Software Engineer - Automotive. With 4.5 years of experience, she has strong expertise in automotive software and embedded technologies.',
                'image' => 'placements/abhinaya.png',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Mukesh.E',
                'job_title' => 'mech design p3',
                'salary_package' => '7 LPA',
                'experience' => '7 years',
                'batch' => null,
                'description' => 'Mukesh.E secured a Mechanical Design P3 role with an impressive salary package of 7 LPA. His 7 years of experience showcase his strong professional growth in mechanical design engineering.',
                'image' => 'placements/muk.png',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'KARTHICK T',
                'job_title' => 'Hardware Design Engineer',
                'salary_package' => null,
                'experience' => '6.5 years',
                'batch' => null,
                'description' => 'KARTHICK T achieved placement as a Hardware Design Engineer. With 6.5 years of experience, he has gained strong expertise in hardware design and validation.',
                'image' => 'placements/Karthick.png',
                'sort_order' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'Balamurali',
                'job_title' => 'Mechanical Design Engineer',
                'salary_package' => null,
                'experience' => '1 year',
                'batch' => null,
                'description' => 'Balamurali started his career as a Mechanical Design Engineer. His strong understanding of design concepts helped him excel in the mechanical industry.',
                'image' => 'placements/balamurali.png',
                'sort_order' => 6,
                'is_active' => true,
            ],
        ]);

        // 4. Partner Logos
        $partners = [
            'klaus.png', 'avin-systems.png', 'stratosphere.png', 'ancit.png',
            'veawe.png', 'bosch.png', 'auto-tricks.png', 'booma.png',
            'larsen-toubro.png', 'Reliance.png', 'Pricol_logo.png',
            'tramlease.png', 'illuminen.png', 'teleios.png', 'hcl.png'
        ];
        foreach ($partners as $index => $p) {
            PartnerLogo::create([
                'name' => ucfirst(explode('.', $p)[0]),
                'logo_image' => 'career-partners/' . $p,
                'type' => 'partner',
                'sort_order' => $index + 1,
                'is_active' => true,
            ]);
        }

        $clients = [
            'embdes.png', 'klaus.png', 'avin-systems.png', 'stratosphere.png',
            'ancit.png', 'veawe.png', 'bosch.png', 'auto-tricks.png',
            'booma.png', 'larsen-toubro.png', 'Reliance.png', 'Pricol_logo.png',
            'tramlease.png', 'illuminen.png', 'teleios.png', 'hcl.png'
        ];
        foreach ($clients as $index => $c) {
            PartnerLogo::create([
                'name' => ucfirst(explode('.', $c)[0]),
                'logo_image' => 'career-partners/' . $c,
                'type' => 'client',
                'sort_order' => $index + 1,
                'is_active' => true,
            ]);
        }

        // 5. Blogs
        Blog::insert([
            [
                'title' => 'IoT\'s Ascendance and Future Prospects in the Indian Embedded industry',
                'tag' => 'VAct Blog',
                'author_name' => 'V-Act Team',
                'author_image' => 'blog/blog-one-author-img-1.jpg',
                'image' => 'blogs/blog1.png',
                'description' => 'IoT\'s Ascendance and Future Prospects in the Indian Embedded industry is a growing topic in the technology sector.',
                'content' => 'Full blog content for IoT in Indian Embedded industry...',
                'published_date' => '2025-05-10',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'title' => 'The Upward Trend: Python\'s Role in the Evolution of Embedded Systems',
                'tag' => 'VAct Blog',
                'author_name' => 'Engineering Team',
                'author_image' => 'blog/blog-one-author-img-2.jpg',
                'image' => 'blogs/blog2.png',
                'description' => 'The Upward Trend: Python\'s Role in the Evolution of Embedded Systems analyzes Python programming in hardware design.',
                'content' => 'Full blog content for Python in Embedded Systems...',
                'published_date' => '2025-05-10',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'title' => 'A Comprehensive Insight into Python for Embedded Systems Developers',
                'tag' => 'VAct Blog',
                'author_name' => 'Admin Team',
                'author_image' => 'blog/blog-one-author-img-3.jpg',
                'image' => 'blogs/blog3.png',
                'description' => 'A Comprehensive Insight into Python for Embedded Systems Developers details structural tips for developers.',
                'content' => 'Full blog content for python guidelines...',
                'published_date' => '2023-12-22',
                'sort_order' => 3,
                'is_active' => true,
            ],
        ]);

        // 6. FAQs
        Faq::insert([
            [
                'question' => 'Do you teach AUTOSAR?',
                'answer' => 'Yes. The curriculum includes an introduction to AUTOSAR concepts. The proprietary VAct AutoEdge Development Board is integrated into the course to provide hands-on exposure to standard AUTOSAR layered software architectures and application configurations.',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'question' => 'Do you provide projects?',
                'answer' => 'Yes. VAct operates on a product/project-oriented training model consisting of roughly 10% theory and 90% hands-on implementation. Depending on the track length, you will complete between 5 to 15 industry-aligned practical projects/examples, culminating in capstone automotive test cases.',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'question' => 'Is this course suitable for beginners?',
                'answer' => 'Yes. The program features a beginner-friendly curriculum with no rigid technical prerequisites to enroll. The training modules safely scale starting from basic electronics, digital logic, and basic C execution before diving deep into complex microcontroller register programming.',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'question' => 'Will I learn CAN and UDS protocols practically?',
                'answer' => 'Yes, completely. Vehicle network architecture is a core focus area of the institute. Students set up virtual CAN networks, configure signal topologies, simulate ECU data packets, and structure diagnostic request/response frame formats using standard corporate environments like Vector CANoe and CANalyzer.',
                'sort_order' => 4,
                'is_active' => true,
            ],
            [
                'question' => 'Are recorded sessions available?',
                'answer' => 'Yes. The program framework provides access to extensive video tutorials and matching source code archives, allowing students to review intricate peripheral registers or hardware debug scripts at their own pace outside class hours.',
                'sort_order' => 5,
                'is_active' => true,
            ],
        ]);

        // 7. Testimonials
        Testimonial::insert([
            [
                'client_name' => 'Santhosh Selvam',
                'client_role' => 'Embedded Systems Trainee',
                'review_text' => 'The embedded systems training at VAct Technologies was very informative and practical. The real-time projects improved my technical skills and confidence.',
                'rating' => 5,
                'image' => 'testimonial/testimonial-2-1.jpg',
                'sort_order' => 1,
                'is_active' => true,
            ],
            [
                'client_name' => 'Mohan Ravi',
                'client_role' => 'Embedded Software Intern',
                'review_text' => 'VAct Technologies provided excellent guidance throughout my internship. The trainers explained every concept clearly with hands-on experience.',
                'rating' => 5,
                'image' => 'testimonial/testimonial-2-2.jpg',
                'sort_order' => 2,
                'is_active' => true,
            ],
            [
                'client_name' => 'Swathy',
                'client_role' => 'Embedded & IoT Intern',
                'review_text' => 'The internship program helped me understand embedded systems and IoT applications in a practical way. The mentors were very supportive.',
                'rating' => 5,
                'image' => 'testimonial/testimonial-2-3.jpg',
                'sort_order' => 3,
                'is_active' => true,
            ],
            [
                'client_name' => 'Hema M',
                'client_role' => 'Embedded Systems Intern',
                'review_text' => 'I gained valuable knowledge in firmware development and embedded technology during my internship. The training sessions were interactive and useful.',
                'rating' => 5,
                'image' => 'testimonial/testimonial-2-4.jpg',
                'sort_order' => 4,
                'is_active' => true,
            ],
        ]);
    }
}
