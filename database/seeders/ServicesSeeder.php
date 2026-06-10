<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServicesSeeder extends Seeder
{
    public function run(): void
    {
        $services = [
            [
                'slug' => 'industrial-automation',
                'title' => 'Industrial Automation (Textile)',
                'subtitle' => 'AUDNE INDIA LIMITED, DADRA & NAGAR HAVELI, INDIA. AUNDE India Limited (AIL), is a joint venture collaboration between Faze Three and Aude Achter & Ebels GmbH Germany, known for its line of automotive fabrics and seating systems.',
                'description' => "Our team replaced existing control mechanism of the machine with state-of-the-art Delta made PLC, Drives and HMI control. The variable frequency drives are controlled by PLC to vary the speed of the machine and its mainly synchronized functions like water flow control, temperature controls, steam valve functions, conveyor movement, interlocked safety systems etc.\n\nThe PLC and HMI ladder programs are developed from scratch based on the machines functionality and operation sequence. The Ladder Logic involved interlocking with 15 emergency switches and dancing rod to stop the machine.\n\nMore than 100 digital I/O's and 30 analog I/O's are interfaced in this automation.",
                'badge' => 'Industrial Automation',
                'image' => 'assets/images/services/industrial-automation-and-control.png',
                'features' => [
                    ['title' => 'Advanced Control', 'description' => 'State-of-the-art PLC, Drives and HMI control for seamless machine operations.', 'icon' => 'fa-check-circle'],
                    ['title' => 'Synchronized Functions', 'description' => 'Water flow, temperature, steam valves, conveyor movement and safety systems integrated.', 'icon' => 'fa-sitemap'],
                    ['title' => 'Safety First', 'description' => 'Interlocking with 15 emergency switches and dancing rod for maximum safety.', 'icon' => 'fa-shield-alt'],
                    ['title' => 'High I/O Integration', 'description' => "More than 100 digital I/O's and 30 analog I/O's interfaced for reliable automation.", 'icon' => 'fa-microchip'],
                ],
                'slides' => [
                    [
                        'image' => 'assets/images/services/industrial-automation-and-control.png',
                        'heading' => 'Smart Industrial',
                        'highlight' => 'Automation & Control',
                        'description' => 'Enhance manufacturing efficiency and uptime. We design robust, highly automated PLC logic configurations and beautiful, custom SCADA monitoring suites explicitly tailored for factories, power grids, and chemical industries.',
                    ],
                    [
                        'image' => 'assets/images/services/station.png',
                        'heading' => 'Reliable Process',
                        'highlight' => 'Control Solutions',
                        'description' => 'Achieve continuous, high-precision thermal, fluid, and mechanical regulations. We engineer robust, isolated closed-loop process loops using isolated fieldbus communications and remote telemetry units.',
                    ],
                ],
                'sort_order' => 1,
            ],
            [
                'slug' => 'embedded-systems',
                'title' => 'Embedded Systems',
                'subtitle' => 'End-to-end embedded product development from concept to production.',
                'description' => "We deliver custom embedded solutions across ARM Cortex-M, AVR, PIC, and RISC-V architectures. Our team handles everything from firmware development and PCB design to RTOS integration and IoT cloud connectivity.\n\nWith deep expertise in FreeRTOS, Zephyr, and QNX, we build reliable, real-time embedded systems for industrial, automotive, and consumer applications. Every design undergoes rigorous hardware-in-the-loop testing.\n\nOur IoT framework provides secure OTA updates, MQTT/CoAP telemetry, and cloud dashboard integration out of the box — reducing your time-to-market significantly.",
                'badge' => 'Embedded Systems',
                'image' => 'assets/images/services/embedded-systems.png',
                'features' => [
                    ['title' => 'Firmware Development', 'description' => 'Custom firmware for ARM Cortex-M, AVR, PIC microcontrollers.', 'icon' => 'fa-microchip'],
                    ['title' => 'PCB Design', 'description' => 'Schematic capture and PCB layout for embedded applications.', 'icon' => 'fa-microchip'],
                    ['title' => 'RTOS Solutions', 'description' => 'FreeRTOS, Zephyr, QNX based embedded solutions.', 'icon' => 'fa-microchip'],
                    ['title' => 'IoT Integration', 'description' => 'End-to-end IoT solutions with cloud connectivity.', 'icon' => 'fa-microchip'],
                ],
                'slides' => [
                    ['image' => 'assets/images/services/embedded-systems.png', 'heading' => 'Custom Embedded', 'highlight' => 'Systems Design', 'description' => 'From concept to production — we engineer reliable embedded systems with custom firmware, PCB layout, and rigorous hardware-in-the-loop validation.'],
                    ['image' => 'assets/images/services/station.png', 'heading' => 'Real-Time', 'highlight' => 'RTOS Solutions', 'description' => 'Leverage FreeRTOS, Zephyr, or QNX for deterministic, real-time control in industrial and automotive environments.'],
                ],
                'page_data' => [
                    'vehicle_networking' => [
                        'title' => 'Vehicle Networking Solutions',
                        'description' => 'More vehicles today are using electronics to cope with the diversifying requirements of drivers and passengers and to address concerns about the comfort, environment and fuel consumption. Multiple electronic control units (ECU) are connected by multiple in-vehicle LANs differing in transmission speed and communication protocol according to the features and characteristics required for each application to exchange information and coordinating control to allow more added value functions to be implemented.',
                        'image' => 'assets/images/services/services11.png',
                        'items' => [
                            'Vehicle Network Management and communication Gateways using CAN, LIN, MOST,and FlexRay',
                            'Drivers for communication modules on different micro-controller platforms',
                            'Protocol stack development / porting',
                            'Application layer software for communication',
                            'Verification & Validation',
                        ],
                    ],
                    'hmi' => [
                        'title' => 'HMI And UI Development',
                        'subtitle' => 'Human Machine Interfaces Delivering Better Driving Experiences',
                        'description' => 'Automotive HMI solutions helps to enhance the driving experiences by enabling interactions with multi-touch dashboards, touchpads, control panels, built-in screens, push buttons and more. By transforming a vehicle into an ecosystem of interconnected parts that work to make driving personalized, adaptive, convenient, safe, and enjoyable.',
                        'image' => 'assets/images/services/services13.png',
                        'items' => [
                            'Development of Human machine interface for infotainment systems',
                            'PC based User interface for analysers & loggers',
                            'Cross platform porting',
                            'HMI development using C++, QT, QTOPIA & OpenGL',
                        ],
                    ],
                    'last_mile' => [
                        'badge' => 'Last Mile Services',
                        'title' => 'Your Customers Expect A Great Experience From Start To Finish!',
                        'subtitle' => 'Increase productivity and streamline workflows with Last Mile services.',
                        'image' => 'assets/images/services/services15.png',
                        'top_cards' => [
                            ['title' => 'Stay Up To Date', 'description' => "Keep your systems updated and always ready for what's next.", 'icon' => '🔄'],
                            ['title' => 'Streamline Your Workflows', 'description' => 'Automate and optimize processes to get more done in less time.', 'icon' => '⚙️'],
                            ['title' => 'Save Time and Money', 'description' => 'Reduce manual effort and operational costs with smart solutions.', 'icon' => '⏳'],
                        ],
                        'checklist' => [
                            'Validation of automotive software at various levels of testing starting from unit level until system testing',
                            'Static code checks & analysis using tools like RTRT, Polyspace, QAC & PC-Lint',
                            'Test suite automation using scripts and modelling tools like Labview',
                            'Validation on vehicle simulators / labcars',
                            'Hardware in loop testing',
                        ],
                    ],
                    'os_porting' => [
                        'title' => 'Embedded OS Porting',
                        'subtitle' => 'BSP & Device Driver Development',
                        'cards' => [
                            ['title' => 'Embedded OS Porting', 'description' => 'We provide embedded OS porting services for various hardware platforms and processor architectures. Our solutions ensure smooth system integration, stability, and optimized performance.', 'icon' => 'fa-laptop-code'],
                            ['title' => 'Board Support Package (BSP) Development', 'description' => 'Custom Board Support Packages are developed to enable efficient communication between hardware and operating systems. The BSP solutions are designed for reliability, compatibility, and faster development cycles.', 'icon' => 'fa-server'],
                            ['title' => 'Bootloader Development', 'description' => 'We develop and customize bootloaders for Linux, Windows, and embedded platforms based on client requirements. Our bootloader solutions improve system startup speed and hardware initialization.', 'icon' => 'fa-power-off'],
                            ['title' => 'Linux Porting and Customization', 'description' => 'Linux operating systems are ported and customized for ARM, X86, MIPS, and other processor architectures. We ensure optimized kernel performance and stable application support for embedded devices.', 'icon' => 'fab fa-linux'],
                            ['title' => 'Device Driver Development', 'description' => 'Our team develops device drivers for peripherals, communication interfaces, and hardware components. The drivers ensure smooth interaction between hardware devices and operating systems.', 'icon' => 'fa-hdd'],
                            ['title' => 'Middleware and Firmware Solutions', 'description' => 'Middleware and firmware solutions are designed to improve communication and functionality in embedded systems. We focus on performance optimization, scalability, and reliable device operation.', 'icon' => 'fa-cogs'],
                            ['title' => 'Hardware Platform Integration', 'description' => 'We integrate software and operating systems with existing and new hardware platforms efficiently. Our experts ensure compatibility, performance tuning, and seamless system deployment.', 'icon' => 'fa-network-wired'],
                            ['title' => 'Driver Optimization and Maintenance', 'description' => 'Existing device drivers are optimized for better speed, power management, and system stability. We also provide maintenance and testing support to ensure long-term reliability and performance.', 'icon' => 'fa-tools'],
                        ],
                    ],
                ],
                'sort_order' => 2,
            ],
            [
                'slug' => 'embedded-offshore-outsourcing',
                'title' => 'Embedded Offshore Outsourcing',
                'subtitle' => 'Dedicated offshore development teams for your embedded engineering needs.',
                'description' => "Scale your engineering capacity instantly with our vetted offshore embedded teams. We provide dedicated engineers who work as a seamless extension of your in-house R&D.\n\nOur agile delivery model ensures transparent sprint cycles, daily stand-ups, and regular code reviews. We handle recruitment, infrastructure, and HR — you focus on product.\n\nAll code is delivered with full documentation, unit tests, and CI/CD pipelines. IP protection and NDAs are standard for every engagement.",
                'badge' => 'Offshore Outsourcing',
                'image' => 'assets/images/services/embedded-offshore-outsourcing.png',
                'features' => [
                    ['title' => 'Dedicated Teams', 'description' => 'Full-time dedicated embedded engineers for your projects.', 'icon' => 'fa-users'],
                    ['title' => 'Cost Effective', 'description' => 'High quality development at competitive offshore rates.', 'icon' => 'fa-dollar-sign'],
                    ['title' => 'Agile Delivery', 'description' => 'Scrum-based development with regular sprint deliveries.', 'icon' => 'fa-tasks'],
                    ['title' => 'Quality Assurance', 'description' => 'Rigorous testing and code review processes.', 'icon' => 'fa-check-circle'],
                ],
                'slides' => [
                    ['image' => 'assets/images/services/embedded-offshore-outsourcing.png', 'heading' => 'Dedicated Offshore', 'highlight' => 'Engineering Teams', 'description' => 'Scale your R&D capacity instantly with vetted embedded engineers who work as a seamless extension of your team.'],
                    ['image' => 'assets/images/services/station.png', 'heading' => 'Agile & Transparent', 'highlight' => 'Delivery Model', 'description' => 'Sprint-based delivery with daily stand-ups, transparent reporting, and full IP protection for every engagement.'],
                ],
                'sort_order' => 3,
            ],
            [
                'slug' => 'fuel-monitoring-system',
                'title' => 'Fuel Monitoring System',
                'subtitle' => 'Real-time fuel level monitoring and theft detection for fleet operators.',
                'description' => "Our Fuel Monitoring System combines GPS tracking, GSM telemetry, and high-accuracy fuel-level sensors to give fleet operators complete visibility into fuel consumption.\n\nInstant alerts notify you of fuel theft, abnormal consumption, and unauthorized vehicle movement. The web-based analytics dashboard generates detailed reports for every vehicle in your fleet.\n\nField-tested across hundreds of commercial vehicles, our system supports both analog and digital fuel sensors with 99%+ accuracy.",
                'badge' => 'Fuel Monitoring',
                'image' => 'assets/images/services/fuel-monitoring-system.png',
                'features' => [
                    ['title' => 'Real-time Tracking', 'description' => 'GPS and GSM based real-time fuel level monitoring.', 'icon' => 'fa-satellite'],
                    ['title' => 'Fuel Sensors', 'description' => 'High accuracy fuel level sensors for all vehicle types.', 'icon' => 'fa-tachometer-alt'],
                    ['title' => 'Alerts System', 'description' => 'Instant alerts for fuel theft and abnormal consumption.', 'icon' => 'fa-bell'],
                    ['title' => 'Analytics Dashboard', 'description' => 'Web-based analytics with detailed fuel reports.', 'icon' => 'fa-chart-bar'],
                ],
                'slides' => [
                    ['image' => 'assets/images/services/fuel-monitoring-system.png', 'heading' => 'Real-Time Fuel', 'highlight' => 'Monitoring & Alerts', 'description' => 'Track fuel levels in real-time with GPS + GSM telemetry and receive instant alerts for theft or abnormal consumption.'],
                    ['image' => 'assets/images/services/station.png', 'heading' => 'Smart Fleet', 'highlight' => 'Analytics Dashboard', 'description' => 'Comprehensive web-based analytics with per-vehicle reports, consumption trends, and cost optimization insights.'],
                ],
                'sort_order' => 4,
            ],
            [
                'slug' => 'civil-pmc',
                'title' => 'Civil Engineering & PMC',
                'subtitle' => 'Comprehensive project management and civil engineering consultancy.',
                'description' => "We provide end-to-end civil engineering and project management consultancy services for residential, commercial, and industrial construction projects.\n\nOur team of experienced structural engineers and project managers handle everything from feasibility studies and structural design to site supervision and quality control. We prepare accurate BOQs and cost estimates to keep your project on budget.\n\nWith a track record of delivering complex projects on time, we bring discipline and transparency to every construction phase.",
                'badge' => 'Civil PMC',
                'image' => 'assets/images/services/civil-pmc.png',
                'features' => [
                    ['title' => 'Project Management', 'description' => 'End-to-end project management for construction projects.', 'icon' => 'fa-hard-hat'],
                    ['title' => 'Structural Design', 'description' => 'Structural analysis and design for buildings and infrastructure.', 'icon' => 'fa-building'],
                    ['title' => 'Site Supervision', 'description' => 'Expert site supervision and quality control.', 'icon' => 'fa-clipboard-check'],
                    ['title' => 'Cost Estimation', 'description' => 'Accurate BOQ preparation and cost estimation.', 'icon' => 'fa-calculator'],
                ],
                'slides' => [
                    ['image' => 'assets/images/services/civil-pmc.png', 'heading' => 'Expert Civil', 'highlight' => 'Engineering & PMC', 'description' => 'End-to-end project management and structural engineering services for residential, commercial, and industrial projects.'],
                    ['image' => 'assets/images/services/station.png', 'heading' => 'On-Time &', 'highlight' => 'On-Budget Delivery', 'description' => 'Rigorous cost estimation, BOQ preparation, and site supervision ensure every project delivers on time and within budget.'],
                ],
                'sort_order' => 5,
            ],
            [
                'slug' => 'human-resource',
                'title' => 'Human Resources',
                'subtitle' => 'Strategic HR solutions for talent acquisition, training, and compliance.',
                'description' => "Our HR division provides end-to-end human resource services tailored for engineering and technology organizations. From talent acquisition to payroll management, we help you build and retain a high-performance workforce.\n\nWe specialize in technical recruitment for embedded systems, IT, and engineering roles. Our training programs upskill your team in the latest technologies and methodologies.\n\nStrategic HR consulting, compliance management, and organizational development services complete our comprehensive HR offering.",
                'badge' => 'Human Resources',
                'image' => 'assets/images/services/human-resource.png',
                'features' => [
                    ['title' => 'Talent Acquisition', 'description' => 'End-to-end recruitment for technical and non-technical roles.', 'icon' => 'fa-user-plus'],
                    ['title' => 'Training & Development', 'description' => 'Employee training programs and skill development.', 'icon' => 'fa-graduation-cap'],
                    ['title' => 'Payroll Management', 'description' => 'Complete payroll processing and compliance management.', 'icon' => 'fa-file-invoice-dollar'],
                    ['title' => 'HR Consulting', 'description' => 'Strategic HR consulting for organizational growth.', 'icon' => 'fa-handshake'],
                ],
                'slides' => [
                    ['image' => 'assets/images/services/human-resource.png', 'heading' => 'Strategic HR', 'highlight' => 'Solutions', 'description' => 'Comprehensive HR services including talent acquisition, training, payroll, and compliance for technology organizations.'],
                    ['image' => 'assets/images/services/station.png', 'heading' => 'Build & Retain', 'highlight' => 'Top Talent', 'description' => 'Specialized technical recruitment, upskilling programs, and strategic HR consulting to build a high-performance workforce.'],
                ],
                'sort_order' => 6,
            ],
        ];

        foreach ($services as $s) {
            Service::updateOrCreate(['slug' => $s['slug']], $s);
        }

        $this->command->info('Services seeded: ' . Service::count());
    }
}
