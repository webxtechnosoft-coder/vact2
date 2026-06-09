<?php

namespace Database\Seeders;

use App\Models\Blog;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $blogs = [
            ['title' => "IoT's Ascendance and Future Prospects in the Indian Embedded industry", 'image' => 'assets/images/blogs/blog1.png', 'author_name' => 'V-Act Team', 'author_image' => 'assets/images/blog/blog-one-author-img-1.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'February 28, 2025', 'sort_order' => 1],
            ['title' => "The Upward Trend: Python's Role in the Evolution of Embedded Systems", 'image' => 'assets/images/blogs/blog2.png', 'author_name' => 'Engineering Team', 'author_image' => 'assets/images/blog/blog-one-author-img-2.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'February 28, 2025', 'sort_order' => 2],
            ['title' => 'A Comprehensive Insight into Python for Embedded Systems Developers', 'image' => 'assets/images/blogs/blog3.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 3],
            ['title' => 'Investing in your success How Embedded Systems Courses Propel Careers', 'image' => 'assets/images/blogs/blog4.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 4],
            ['title' => 'How to Choose the best Embedded course', 'image' => 'assets/images/blogs/blog5.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 5],
            ['title' => 'The Power of CAN 5 Key advantages of CAN Bus Protocol', 'image' => 'assets/images/blogs/blog6.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 6],
            ['title' => 'Climbing the Career Ladder', 'image' => 'assets/images/blogs/blog7.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 7],
            ['title' => 'Understand CAN Protocol Basics and Types', 'image' => 'assets/images/blogs/blog8.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 8],
            ['title' => 'Role of AI in Autonomous Vehicles', 'image' => 'assets/images/blogs/blog9.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 9],
            ['title' => 'Over-the-Air (OTA) Updates for Embedded Systems', 'image' => 'assets/images/blogs/blog10.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 10],
            ['title' => "LoRa: Mapping IoT's Future", 'image' => 'assets/images/blogs/blog11.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 11],
            ['title' => 'Navigating the Future with Software-Defined Vehicles', 'image' => 'assets/images/blogs/blog12.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 12],
            ['title' => 'Fuel Cell Electric Vehicle', 'image' => 'assets/images/blogs/blog13.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 13],
            ['title' => 'Compilers', 'image' => 'assets/images/blogs/blog14.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 14],
            ['title' => 'Design and Development of ECU using STM32F405', 'image' => 'assets/images/blogs/blog15.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 15],
            ['title' => 'Become Automotive Engineer in 2-3 months with SIX digit salary', 'image' => 'assets/images/blogs/blog16.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 16],
            ['title' => 'Role of Embedded System in Modern Technology', 'image' => 'assets/images/blogs/blog17.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 17],
            ['title' => 'Automotive ? ASPICE', 'image' => 'assets/images/blogs/blog18.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 18],
            ['title' => 'Controller Area Network (CAN)', 'image' => 'assets/images/blogs/blog19.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 19],
            ['title' => 'More About Raspberry Pi', 'image' => 'assets/images/blogs/blog20.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 20],
            ['title' => 'More About Embedded Systems', 'image' => 'assets/images/blogs/blog21.png', 'author_name' => 'Admin Team', 'author_image' => 'assets/images/blog/blog-one-author-img-3.jpg', 'card_date' => 'May 10, 2025', 'author_date' => 'December 22, 2023', 'sort_order' => 21],
        ];

        foreach ($blogs as $blog) {
            Blog::create($blog);
        }
    }
}
