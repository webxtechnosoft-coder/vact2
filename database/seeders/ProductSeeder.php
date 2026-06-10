<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        if (Product::count() === 0) {
            Product::insert([
                [
                    'title' => 'Vact-Autoedge-development-board Course',
                    'category' => 'Embedded Systems',
                    'description' => 'VAct AutoEdge Development Board based on STM32 designed & developed in-house by VAct Technologies for advanced learning driver development',
                    'image' => 'assets/images/product/product13.png',
                    'link' => '/vact-autoedge-development-board',
                    'rating' => 5.2,
                    'rating_count' => 1520,
                    'sort_order' => 1,
                    'is_active' => true,
                ],
                [
                    'title' => 'Automatic Milk Vending Machine',
                    'category' => 'Smart Retail',
                    'description' => 'Our Milk Vending Machines are of fully automatic and reliable because of the utilization of highest quality components.',
                    'image' => 'assets/images/product/product14.png',
                    'link' => '/automatic-milk-vending-machine',
                    'rating' => 4.2,
                    'rating_count' => 1630,
                    'sort_order' => 2,
                    'is_active' => true,
                ],
                [
                    'title' => 'Automatic oil vending machine',
                    'category' => 'Fluid Automation',
                    'description' => 'Our Oil Vending Machines are delivering specific quantity of oil with high accuracy. These machines are extensively utilized in oil packaging industry, and shops & shops selling oil.',
                    'image' => 'assets/images/product/product7.png',
                    'link' => '/automatic-oil-vending-machine',
                    'rating' => 5.2,
                    'rating_count' => 3520,
                    'sort_order' => 3,
                    'is_active' => true,
                ],
                [
                    'title' => 'Automatic Oil Pouch Packing',
                    'category' => 'Packaging Tech',
                    'description' => 'We have established ourselves as a number one organization that\'s actively committed towards offering Oil Pouch Packing Machine.',
                    'image' => 'assets/images/product/product8.png',
                    'link' => '/automatic-oil-pouch-packing-machine',
                    'rating' => 5.3,
                    'rating_count' => 1820,
                    'sort_order' => 4,
                    'is_active' => true,
                ],
                [
                    'title' => 'Cold Drink Vending Machine',
                    'category' => 'Vending Solutions',
                    'description' => 'We are renowned for providing complete solution of soft Drink vending machine that that are specifically designed and made as per National and International quality standards.',
                    'image' => 'assets/images/product/product9.png',
                    'link' => '/cold-drink-vending-machine',
                    'rating' => 5.2,
                    'rating_count' => 1520,
                    'sort_order' => 5,
                    'is_active' => true,
                ],
                [
                    'title' => 'Automatic Milk bag Packing Machine',
                    'category' => 'Dairy Automation',
                    'description' => 'We are manufacturing and supplying Automatic Milk Bag Packing Machine to our customers.These machines are used specifically for milk filling and are asked widely in the market.',
                    'image' => 'assets/images/product/product10.png',
                    'link' => '/automatic-milk-bag-packing-machine',
                    'rating' => 4.2,
                    'rating_count' => 1630,
                    'sort_order' => 6,
                    'is_active' => true,
                ],
                [
                    'title' => 'Automatic Coffee Vending Machine',
                    'category' => 'Beverage Systems',
                    'description' => 'Make your hot cup of coffee in seconds. This coffee vending machine dispenses your cups on just press of button. We have been able to provide the customers with a remarkable assortment of 10 Option Fresh Milk Coffee Vending Machines.',
                    'image' => 'assets/images/product/product11.png',
                    'link' => '/automatic-coffee-vending-machine',
                    'rating' => 5.2,
                    'rating_count' => 3520,
                    'sort_order' => 7,
                    'is_active' => true,
                ],
                [
                    'title' => 'Open Top Chambers',
                    'category' => 'Environmental Research',
                    'description' => 'The goal of Open Top Chambers (OTCs) is to precisely manage and regulate the required CO2, temperature, and humidity inside the OTCs in order to examine how plants react to high CO2 and other gas environments',
                    'image' => 'assets/images/product/product12.png',
                    'link' => '/open-top-chambers',
                    'rating' => 5.3,
                    'rating_count' => 1820,
                    'sort_order' => 8,
                    'is_active' => true,
                ],
            ]);
        }
    }
}
