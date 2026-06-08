$backupDir = "C:\Users\santh\AppData\Local\Temp\opencode\vact2_backup"
$pagesDir = "C:\xampp\htdocs\vact2\resources\js\Pages"

# Page route mapping: php file => route name => component name
$pageMap = @{
    "index.php" = @{route="/"; component="Index"}
    "about.php" = @{route="/about"; component="About"}
    "blogs.php" = @{route="/blogs"; component="Blogs"}
    "blogdetails.php" = @{route="/blogdetails"; component="BlogDetails"}
    "careers.php" = @{route="/careers"; component="Careers"}
    "contact.php" = @{route="/contact"; component="Contact"}
    "coursedetails.php" = @{route="/coursedetails"; component="CourseDetails"}
    "gallery.php" = @{route="/gallery"; component="Gallery"}
    "testimonials.php" = @{route="/testimonials"; component="Testimonials"}
    "can-protocol.php" = @{route="/can-protocol"; component="CanProtocol"}
    "civil-pmc.php" = @{route="/civil-pmc"; component="CivilPmc"}
    "cold-drink-vending-machine.php" = @{route="/cold-drink-vending-machine"; component="ColdDrinkVendingMachine"}
    "edgeai-iot-development-hands-on-tinyml.php" = @{route="/edgeai-iot-development"; component="EdgeaiIotDevelopment"}
    "embedded-automotive.php" = @{route="/embedded-automotive"; component="EmbeddedAutomotive"}
    "embedded-c-programming.php" = @{route="/embedded-c-programming"; component="EmbeddedCProgramming"}
    "embedded-offshore-outsourcing.php" = @{route="/embedded-offshore-outsourcing"; component="EmbeddedOffshoreOutsourcing"}
    "embedded-systems.php" = @{route="/embedded-systems"; component="EmbeddedSystems"}
    "embedded-yocto-training.php" = @{route="/embedded-yocto-training"; component="EmbeddedYoctoTraining"}
    "freertos-training.php" = @{route="/freertos-training"; component="FreertosTraining"}
    "fuel-monitoring-system.php" = @{route="/fuel-monitoring-system"; component="FuelMonitoringSystem"}
    "human-resource.php" = @{route="/human-resource"; component="HumanResource"}
    "industrial-automation-and-control.php" = @{route="/industrial-automation-and-control"; component="IndustrialAutomationAndControl"}
    "inplant-training.php" = @{route="/inplant-training"; component="InplantTraining"}
    "linux-device-driver-training.php" = @{route="/linux-device-driver-training"; component="LinuxDeviceDriverTraining"}
    "linux-system-programming.php" = @{route="/linux-system-programming"; component="LinuxSystemProgramming"}
    "machine-learning.php" = @{route="/machine-learning"; component="MachineLearning"}
    "automatic-coffee-vending-machine.php" = @{route="/automatic-coffee-vending-machine"; component="AutomaticCoffeeVendingMachine"}
    "automatic-milk-bag-packing-machine.php" = @{route="/automatic-milk-bag-packing-machine"; component="AutomaticMilkBagPackingMachine"}
    "automatic-milk-vending-machine.php" = @{route="/automatic-milk-vending-machine"; component="AutomaticMilkVendingMachine"}
    "automatic-oil-pouch-packing-machine.php" = @{route="/automatic-oil-pouch-packing-machine"; component="AutomaticOilPouchPackingMachine"}
    "automatic-oil-vending-machine.php" = @{route="/automatic-oil-vending-machine"; component="AutomaticOilVendingMachine"}
    "open-top-chambers.php" = @{route="/open-top-chambers"; component="OpenTopChambers"}
    "python.php" = @{route="/python"; component="Python"}
    "qnx-rtos-training.php" = @{route="/qnx-rtos-training"; component="QnxRtosTraining"}
    "rust-programming-training.php" = @{route="/rust-programming-training"; component="RustProgrammingTraining"}
    "STM32-bare-metal-programming.php" = @{route="/stm32-bare-metal-programming"; component="Stm32BareMetalProgramming"}
    "stm32-hal-programming.php" = @{route="/stm32-hal-programming"; component="Stm32HalProgramming"}
    "talent-based-outsourcing.php" = @{route="/talent-based-outsourcing"; component="TalentBasedOutsourcing"}
    "vact-autoedge-development-board.php" = @{route="/vact-autoedge-development-board"; component="VactAutoedgeDevelopmentBoard"}
    "vact-embcore-development-board.php" = @{route="/vact-embcore-development-board"; component="VactEmbcoreDevelopmentBoard"}
    "zephyr-rtos-training.php" = @{route="/zephyr-rtos-training"; component="ZephyrRtosTraining"}
    "index1.php" = @{route="/index1"; component="Index1"}
}

# Additional CSS per page
$pageCss = @{
    "about.php" = "about.css"
    "blogs.php" = "about.css"
    "contact.php" = "contact.css?v=2.0"
    "careers.php" = "career.css"
    "blogdetails.php" = "about.css"
    "gallery.php" = "about.css"
    "testimonials.php" = "about.css"
}

# Pages that have an h1/page-header section after header include
function ConvertTo-JsxName {
    param([string]$name)
    return $name -replace '\.php$', ''
}

function Extract-PageContent {
    param([string]$fileContent)
    
    # Extract content between header include and footer include
    $startMarker = "<?php include 'header.php'; ?>"
    $endMarker = "<?php include 'footer.php'; ?>"
    
    $startIdx = $fileContent.IndexOf($startMarker)
    $endIdx = $fileContent.IndexOf($endMarker)
    
    if ($startIdx -eq -1 -or $endIdx -eq -1) {
        return $null
    }
    
    $content = $fileContent.Substring($startIdx + $startMarker.Length, $endIdx - $startIdx - $startMarker.Length)
    
    # Remove the search popup and other repeated sections at the end (before footer)
    $searchPopupMarker = '<!-- Search Popup -->'
    $spIdx = $content.IndexOf($searchPopupMarker)
    if ($spIdx -gt 0) {
        # Only trim if it's near the end (after the main content)
        $lastThirdStart = $content.Length * 0.5
        if ($spIdx -gt $lastThirdStart) {
            $content = $content.Substring(0, $spIdx)
        }
    }
    
    return $content.Trim()
}

function Convert-ToJsx {
    param([string]$html)
    
    # Replace PHP links with Inertia-friendly paths
    $html = $html -replace 'href="([a-zA-Z0-9_-]+)\.php(\?[^"]*)?"', 'href="/$1"'
    # Fix some special links
    $html = $html -replace 'href="index\.php"', 'href="/"'
    $html = $html -replace 'href=""', 'href="/"'
    
    # Fix asset paths
    $html = $html -replace 'src="assets/', 'src="/assets/'
    $html = $html -replace 'href="assets/', 'href="/assets/'
    $html = $html -replace "src='assets/", "src='/assets/"
    $html = $html -replace "href='assets/", "href='/assets/"
    
    # Fix style attributes
    $html = $html -replace 'style="background-image:\s*url\(', 'style={{ backgroundImage: "url('
    $html = $html -replace '\);"', ')" }}'
    
    # Remove any remaining PHP short tags
    $html = $html -replace '<\?php.*?\?>', ''
    
    return $html
}

foreach ($phpFile in $pageMap.Keys) {
    $info = $pageMap[$phpFile]
    $componentName = $info.component
    $phpPath = Join-Path $backupDir $phpFile
    
    if (-not (Test-Path $phpPath)) {
        Write-Warning "File not found: $phpPath"
        continue
    }
    
    $content = Get-Content $phpPath -Raw
    $bodyContent = Extract-PageContent $content
    
    if (-not $bodyContent) {
        Write-Warning "Could not extract content from $phpFile"
        continue
    }
    
    $jsxContent = Convert-ToJsx $bodyContent
    
    # Get any additional CSS for this page
    $extraCss = ""
    $cssKey = $phpFile
    if ($pageCss.ContainsKey($cssKey)) {
        $extraCss = "<link rel=""stylesheet"" href=""/assets/css/$($pageCss[$cssKey])"" />"
    }
    
    $componentContent = @"
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';

export default function $componentName() {
    return (
        <MainLayout>
            <Head title="$componentName" />
            $extraCss
$jsxContent
        </MainLayout>
    );
}
"@
    
    $outPath = Join-Path $pagesDir "$componentName.jsx"
    Set-Content -Path $outPath -Value $componentContent
    Write-Output "Created $outPath"
}

Write-Output "`nAll pages converted!"
