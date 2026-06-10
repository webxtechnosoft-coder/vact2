<?php

namespace Database\Seeders;

use App\Models\Partner;
use Illuminate\Database\Seeder;

class PartnerSeeder extends Seeder
{
    public function run(): void
    {
        if (Partner::count() === 0) {
            $partners = [
                'klaus.png', 'avin-systems.png', 'stratosphere.png', 'ancit.png',
                'veawe.png', 'bosch.png', 'auto-tricks.png', 'booma.png',
                'larsen-toubro.png', 'Reliance.png', 'Pricol_logo.png',
                'tramlease.png', 'illuminen.png', 'teleios.png', 'hcl.png'
            ];

            foreach ($partners as $index => $p) {
                Partner::create([
                    'name' => ucfirst(explode('.', $p)[0]),
                    'logo' => 'assets/images/career-partners/' . $p,
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
                Partner::create([
                    'name' => ucfirst(explode('.', $c)[0]),
                    'logo' => 'assets/images/career-partners/' . $c,
                    'type' => 'client',
                    'sort_order' => $index + 1,
                    'is_active' => true,
                ]);
            }
        }
    }
}
