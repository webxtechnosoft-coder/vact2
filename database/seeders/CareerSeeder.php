<?php

namespace Database\Seeders;

use App\Models\Career;
use Illuminate\Database\Seeder;

class CareerSeeder extends Seeder
{
    public function run(): void
    {
        $entries = [
            // Jobs
            ['type' => 'job', 'title' => 'Embedded Software Engineer (Telematics)', 'icon' => 'fa-microchip', 'experience' => '2 - 3 Years', 'location' => 'Bangalore', 'tags' => ['ARM Architecture', 'Bootloaders', 'CAN', 'I2C', 'UART', 'SPI', 'UDS', 'Microcontroller'], 'date' => 'Feb 2025', 'sort_order' => 1, 'is_active' => true, 'description' => 'We are looking for a skilled Embedded Software Engineer with strong proficiency in C programming, hands-on experience with microcontrollers and microprocessors, and understanding of ARM architecture. The candidate should also be proficient in communication protocols such as CAN, I2C, UART, and SPI. Candidate should have Knowledge of Bootloader development and Unified Diagnostic Services (UDS). A solid understanding of microcontroller peripherals is also essential. Knowledge of MQTT and FTP is an added advantage.

Key Responsibilities:
- Design, develop, test, and maintain embedded software for various embedded systems.
- Write efficient, reliable, and maintainable code in C.
- Work on microcontroller and microprocessor-based embedded systems, ensuring optimal performance.
- Develop software for ARM architecture based embedded systems.
- Implement and troubleshoot communication protocols including CAN, I2C, UART, and SPI.
- Develop and maintain Bootloaders to ensure secure firmware updates.
- Work with UDS (Unified Diagnostic Services) for implementing diagnostic services and communication in automotive and embedded systems.
- Integrate and manage Microcontroller peripherals such as timers, ADCs, PWM, GPIOs, and other sensor interfaces.
- Collaborate with hardware engineers to integrate embedded software, testing and validation.
- Debug and test embedded systems, ensuring smooth interaction between software and hardware.
- Work with protocols like MQTT and FTP (optional) for data exchange and system integration.

Requirements:
- Minimum of 2-3 years of hands-on experience in embedded software development after Bachelor\'s degree in Electronics, Electrical Engineering, or a related field.
- Extensive experience with microcontroller peripherals and their integration in embedded systems.
- Experience debugging and testing embedded systems in real-world applications.'],
            ['type' => 'job', 'title' => 'Harness Engineer', 'icon' => 'fa-project-diagram', 'experience' => '5 Years', 'location' => 'Chennai', 'tags' => ['Creo Cabling', 'LV Panels', 'Wiring Diagram', 'ECM', 'Electrical Documentation', 'System Integration'], 'date' => 'Feb 2025', 'sort_order' => 2, 'is_active' => true, 'description' => 'We are seeking an experienced Harness Engineer to join our team in Chennai. The ideal candidate will have strong expertise in Creo Cabling design, LV panels, wiring diagrams, and electrical documentation.

Key Responsibilities:
- Design and develop wiring harnesses using Creo Cabling software.
- Create and maintain wiring diagrams, schematics, and electrical documentation.
- Work on LV panels and electrical control systems.
- Collaborate with cross-functional teams for system integration.
- Ensure compliance with industry standards and quality requirements.
- Support prototype development and testing.

Requirements:
- 5+ years of experience in harness engineering or related field.
- Proficiency in Creo Cabling and electrical design tools.
- Strong knowledge of LV panels, wiring diagrams, and ECM.
- Experience with system integration and electrical documentation.
- Excellent problem-solving and communication skills.'],
            ['type' => 'job', 'title' => 'Hardware Solutions Architect', 'icon' => 'fa-network-wired', 'experience' => '14+ Years', 'location' => 'Chennai', 'tags' => ['ARM', 'FPGA', 'SoC Development', 'High-Speed PCB Design', 'ISO 26262', 'CAN', 'PCIe', 'DDR'], 'date' => 'Jan 2025', 'sort_order' => 3, 'is_active' => true, 'description' => 'We are looking for a highly experienced Hardware Solutions Architect to lead our hardware design initiatives. The ideal candidate will have deep expertise in ARM, FPGA, SoC development, and high-speed PCB design.

Key Responsibilities:
- Architect and design complex hardware solutions for embedded systems.
- Lead SoC development and FPGA-based design projects.
- Define hardware architecture for high-speed PCB designs.
- Ensure compliance with ISO 26262 functional safety standards.
- Guide the team in implementing CAN, PCIe, DDR, and other high-speed interfaces.
- Review and optimize hardware designs for performance and reliability.
- Collaborate with software teams for seamless hardware-software integration.

Requirements:
- 14+ years of experience in hardware architecture and design.
- Expertise in ARM, FPGA, SoC development, and high-speed PCB design.
- Deep knowledge of ISO 26262 functional safety standards.
- Strong experience with CAN, PCIe, DDR, and related technologies.
- Proven leadership and team management skills.'],
            ['type' => 'job', 'title' => 'Embedded Engineer', 'icon' => 'fa-code', 'experience' => '6+ Years', 'location' => 'Bangalore', 'tags' => ['Embedded C/C++', 'Yocto', 'Embedded Linux', 'Device Drivers', 'RTOS'], 'date' => 'Jan 2025', 'sort_order' => 4, 'is_active' => true, 'description' => 'We are seeking an experienced Embedded Engineer with strong expertise in Embedded C/C++, Yocto, Embedded Linux, Device Drivers, and RTOS for our Bangalore office.

Key Responsibilities:
- Develop and maintain embedded software using C/C++.
- Build and customize Linux distributions using Yocto.
- Develop and debug Linux device drivers.
- Work with RTOS for real-time embedded applications.
- Optimize system performance and memory usage.
- Collaborate with hardware engineers for board bring-up and testing.
- Write technical documentation and test specifications.

Requirements:
- 6+ years of experience in embedded engineering.
- Strong proficiency in Embedded C/C++ programming.
- Hands-on experience with Yocto build system.
- Expertise in Embedded Linux and device driver development.
- Experience with RTOS (FreeRTOS, Zephyr, or similar).
- Excellent debugging and problem-solving skills.'],
            ['type' => 'job', 'title' => 'PCB Developer', 'icon' => 'fa-memory', 'experience' => '4+ Years', 'location' => 'Hyderabad', 'tags' => ['PCB Development', 'Vivado Tool', 'I2C', 'SPI', 'Ethernet', 'CAN FD', 'MIPI', 'IO'], 'date' => 'Dec 2024', 'sort_order' => 5, 'is_active' => true, 'description' => 'We are looking for a skilled PCB Developer with expertise in PCB design and development using Vivado tool and other industry-standard EDA tools. The candidate should have strong knowledge of high-speed interfaces and protocols.

Key Responsibilities:
- Design and develop multi-layer PCBs for embedded systems.
- Use Vivado tool for FPGA-based PCB design and verification.
- Implement and validate high-speed interfaces including I2C, SPI, Ethernet, CAN FD, and MIPI.
- Perform signal integrity analysis and optimize PCB layouts.
- Create and maintain PCB design documentation.
- Collaborate with hardware and firmware teams for board bring-up.
- Conduct design reviews and ensure manufacturability.

Requirements:
- 4+ years of experience in PCB development.
- Proficiency in Vivado tool and FPGA-based design.
- Strong knowledge of high-speed interfaces (I2C, SPI, Ethernet, CAN FD, MIPI).
- Experience with signal integrity and PCB layout optimization.
- Familiarity with manufacturing processes and design for manufacturability.'],


        ];

        foreach ($entries as $e) {
            Career::create($e);
        }

        $this->command->info('Careers seeded: ' . Career::count());
    }
}