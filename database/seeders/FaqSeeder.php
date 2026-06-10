<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    public function run(): void
    {
        if (Faq::count() === 0) {
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
        }
    }
}
