<?php

namespace Database\Seeders;

use App\Models\Placement;
use Illuminate\Database\Seeder;

class PlacementSeeder extends Seeder
{
    public function run(): void
    {
        if (Placement::count() === 0) {
            Placement::insert([
                [
                    'name' => 'Divakar.R',
                    'role' => 'Hardware Design Engineer',
                    'company' => '7 Years Exp',
                    'text' => 'Divakar.R secured a role as a Hardware Design Engineer. With 7 years of experience, he has strong expertise in hardware design and development.',
                    'image' => 'assets/images/placements/divakar.png',
                    'sort_order' => 1,
                    'is_active' => true,
                ],
                [
                    'name' => 'Dinesh Babu',
                    'role' => 'Embedded engineer',
                    'company' => 'Batch 51 - 2 Years Exp',
                    'text' => 'Dinesh Babu from Batch 51 secured a role as an Embedded Engineer. His technical skills and dedication helped him gain 2 years of successful industry experience.',
                    'image' => 'assets/images/placements/dinesh-babu.png',
                    'sort_order' => 2,
                    'is_active' => true,
                ],
                [
                    'name' => 'Abinaya',
                    'role' => 'Sr. SWE- Automotive',
                    'company' => '4.5 Years Exp',
                    'text' => 'Abinaya secured a role as Senior Software Engineer - Automotive. With 4.5 years of experience, she has strong expertise in automotive software and embedded technologies.',
                    'image' => 'assets/images/placements/abhinaya.png',
                    'sort_order' => 3,
                    'is_active' => true,
                ],
                [
                    'name' => 'Mukesh.E',
                    'role' => 'mech design p3',
                    'company' => '7 LPA (7 Years Exp)',
                    'text' => 'Mukesh.E secured a Mechanical Design P3 role with an impressive salary package of 7 LPA. His 7 years of experience showcase his strong professional growth in mechanical design engineering.',
                    'image' => 'assets/images/placements/muk.png',
                    'sort_order' => 4,
                    'is_active' => true,
                ],
                [
                    'name' => 'KARTHICK T',
                    'role' => 'Hardware Design Engineer',
                    'company' => '6.5 Years Exp',
                    'text' => 'KARTHICK T achieved placement as a Hardware Design Engineer. With 6.5 years of experience, he has gained strong expertise in hardware design and validation.',
                    'image' => 'assets/images/placements/Karthick.png',
                    'sort_order' => 5,
                    'is_active' => true,
                ],
                [
                    'name' => 'Balamurali',
                    'role' => 'Mechanical Design Engineer',
                    'company' => '1 Year Exp',
                    'text' => 'Balamurali started his career as a Mechanical Design Engineer. His strong understanding of design concepts helped him excel in the mechanical industry.',
                    'image' => 'assets/images/placements/balamurali.png',
                    'sort_order' => 6,
                    'is_active' => true,
                ],
            ]);
        }
    }
}
