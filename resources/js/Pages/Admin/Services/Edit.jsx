import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const LABELS = {
    'industrial-automation': 'Industrial Automation & Control',
    'embedded-systems': 'Embedded System',
    'embedded-offshore-outsourcing': 'Embedded Offshore Outsourcing',
    'fuel-monitoring-system': 'Fuel Monitoring System',
    'civil-pmc': 'Civil Engineering',
    'human-resource': 'Human Resources',
};

export default function ServiceEdit({ service }) {
    const { props } = usePage();
    const flash = props.flash || {};
    const [showFlash, setShowFlash] = useState(!!flash.success);

    useEffect(() => {
        if (flash.success) {
            setShowFlash(true);
            const t = setTimeout(() => setShowFlash(false), 4000);
            return () => clearTimeout(t);
        }
    }, [flash.success]);

    const initData = {
        badge: service?.badge || '',
        title: service?.title || '',
        subtitle: service?.subtitle || '',
        description: service?.description || '',
        features: service?.features || [],
        image: service?.image || '',
        slides: service?.slides || [],
        page_data: service?.page_data || (service?.slug === 'fuel-monitoring-system' ? {
            components: {
                items: [
                    { number: '01', title: 'Fuel Sensor', subtitle: 'Measures the level of fuel in the fuel tank and sends this information to the ST4000 monitoring module.', detail: 'Accuracy: < 1 mm', image: 'assets/images/services/fuel-sensor.png' },
                    { number: '02', title: 'ST 4000 Fuel Monitoring Module', subtitle: 'Collects information from the fuel sensor and sends the data to the base monitoring station over GPRS/GSM interface.', detail: '', image: 'assets/images/services/module.png' },
                    { number: '03', title: 'Fuel Monitoring Station', subtitle: 'Fuel monitoring station consists of our latest Android Apps / Web / Desktop based applications.', detail: '', image: 'assets/images/services/station.png' },
                ],
            },
            reliable_section: {
                title: 'Reliable. Connected. Always On.',
                description: 'The station needs to be connected to the internet via static IP to enable the ST4000 module to send the data 24x7. These data are either stored and used for the analyzing purpose or used for the online monitoring of your fleets.',
                features: [
                    { title: '24x7 Data Transmission', description: 'Continuous and reliable data transfer', icon: 'fa-cloud-upload-alt' },
                    { title: 'Secure & Accurate', description: 'High precision sensing and secure communication', icon: 'fa-shield-alt' },
                    { title: 'Smart Analytics', description: 'Actionable insights across all platforms', icon: 'fa-chart-line' },
                ],
            },
            solution_cards: {
                items: [
                    { title: 'Stop the Fuel<br/>Pilferage', description: 'Track fuel usage in real-time and prevent fuel theft effectively.', icon: 'fa-gas-pump' },
                    { title: 'Analyze Driver<br/>Performance', description: 'Monitor driving behavior to improve safety and efficiency.', icon: 'fa-user-check' },
                    { title: 'Improve Fleet<br/>Utilization', description: 'Optimize vehicle usage and increase overall fleet productivity.', icon: 'fa-truck-moving' },
                    { title: 'Fine Tune Vehicle<br/>Performance', description: 'Enhance vehicle efficiency through smart monitoring and analytics.', icon: 'fa-car-side' },
                ],
            },
            feature_cards: {
                items: [
                    { title: 'GPRS, SMS, Email Alarms', description: 'Provides instant alerts through GPRS, SMS, and email notifications for important vehicle events and security updates.', icon: 'fa-bell' },
                    { title: 'History Data Storage', description: 'Stores previous tracking and activity data, allowing users to review vehicle movements and reports anytime.', icon: 'fa-database' },
                    { title: 'Built-in Battery Backup', description: 'Includes an internal backup battery that supports the device for up to 6 hours during power failure.', icon: 'fa-battery-full' },
                    { title: 'GPS Open/Close Detection', description: 'Detects GPS signal status and monitors whether the GPS connection is active or disconnected.', icon: 'fa-map-marker-alt' },
                    { title: 'Camera Support (Optional)', description: 'Supports optional camera integration for capturing images or monitoring vehicle surroundings in real time.', icon: 'fa-camera' },
                    { title: 'Multiple Fuel Sensor Support (Optional)', description: 'Allows connection with multiple fuel sensors to accurately monitor fuel levels and consumption.', icon: 'fa-gas-pump' },
                    { title: 'Blind Area Supplementary Uploading', description: 'Automatically uploads stored tracking data once the network signal is restored after entering blind areas.', icon: 'fa-cloud-upload-alt' },
                    { title: 'Geo Fence', description: 'Creates virtual boundary zones and sends alerts whenever the vehicle enters or exits the defined area.', icon: 'fa-draw-polygon' },
                ],
            },
        } : service?.slug === 'embedded-offshore-outsourcing' ? {
            benefit_cards: {
                items: [
                    { number: '01', title: 'Business Growth', description: 'Gaining additional momentum in providing complete services to customers through outsourcing.' },
                    { number: '02', title: 'Cost Efficiency', description: 'Reduce operational costs and improve turnaround time with effective outsourcing solutions.' },
                    { number: '03', title: 'Core Operations', description: 'Focus more on core business operations while outsourcing technical and support activities.' },
                    { number: '04', title: 'Business Confidence', description: 'Building confidence in organizations to expand into new business opportunities successfully.' },
                ],
            },
            outsourcing_services: {
                items: [
                    { title: 'Dedicated Offshore Team', description: 'We provide skilled embedded professionals who work exclusively on your projects from our offshore development center. Our team ensures smooth communication, high productivity, and reliable technical support.', icon: 'fa-users-cog' },
                    { title: 'PCB Design Services', description: 'Expert PCB design solutions are offered for embedded and electronic product development requirements. The designs are optimized for performance, durability, and industry standards.', icon: 'fa-microchip' },
                    { title: 'Embedded Software Development', description: 'Our engineers develop high-quality embedded software for various hardware platforms and applications. We focus on stability, efficiency, and real-time system performance.', icon: 'fa-code' },
                    { title: 'VLSI Development Support', description: 'We offer VLSI design and development services for advanced semiconductor and hardware projects. The team supports design verification, testing, and implementation processes.', icon: 'fa-memory' },
                    { title: 'Candidate Profile Screening', description: 'Suitable candidate profiles are prepared based on your technical skills and experience requirements. Only qualified professionals are shortlisted to ensure the best hiring results.', icon: 'fa-user-check' },
                    { title: 'Flexible Billing Model', description: 'Flexible monthly and project-based billing options are available according to your business needs. This model helps companies manage budgets efficiently without long-term risks.', icon: 'fa-file-invoice-dollar' },
                    { title: 'Interview and Selection Process', description: 'Clients can directly interview shortlisted candidates before the final selection process. This ensures transparency and helps in choosing the right technical expert.', icon: 'fa-user-tie' },
                    { title: 'Long-Term Business Relationship', description: 'Our outsourcing services are designed to build strong and long-term client partnerships. We focus on trust, quality service, and continuous technical support for business growth.', icon: 'fa-handshake' },
                ],
            },
        } : service?.slug === 'civil-pmc' ? {
            civil_services: {
                badge: 'Civil Engineering',
                title: 'Civil Engineering Construction and Consultancy',
                description: 'VAct Technologies boasts a team of highly experienced engineers and industry experts. Our team includes professionals who have retired from state and central government departments, PSUs, and renowned private firms.\n\nHaving held senior positions in these organizations, they bring invaluable insights that enhance our ability to execute Civil Engineering and Consultancy services effectively.\n\nWith over 12+ years of experience, our engineers have deep expertise in managing and delivering complex engineering projects.',
                features: [
                    { title: 'Engineering Planning', description: 'Professional project planning and engineering execution with modern construction standards.', icon: 'fa-drafting-compass' },
                    { title: 'Construction Services', description: 'Expertise in residential, industrial and commercial construction consultancy solutions.', icon: 'fa-building' },
                    { title: 'Trusted Consultancy', description: 'Reliable engineering consultancy backed by experienced professionals and industry specialists.', icon: 'fa-shield-alt' },
                ],
            },
            civil_cards: {
                items: [
                    { number: '01', title: 'Site Development', description: 'Comprehensive ground-level planning and soil/site preparation.', image: 'assets/images/services/site_development.png' },
                    { number: '02', title: 'Construction Work', description: 'Stunning, code-compliant commercial & industrial build execution.', image: 'assets/images/services/construction_work.png' },
                    { number: '03', title: 'Project Management', description: 'Detailed scheduling, cost control, and resource optimization.', image: 'assets/images/services/project_management.png' },
                    { number: '04', title: 'Engineering Excellence', description: 'High quality checks and validation from certified experts.', image: 'assets/images/services/engineering_excellence.png' },
                ],
            },
            service_cards: {
                items: [
                    { title: 'Sewage Treatment Plants (STP)', description: 'We provide efficient sewage treatment plant solutions for residential, commercial, and industrial applications. Our systems help in safe wastewater treatment and environmental protection.', icon: 'fa-water' },
                    { title: 'Water Treatment Plants (WTP)', description: 'Advanced water treatment systems are designed to deliver clean and safe water for various uses. The plants ensure high purification standards and reliable performance.', icon: 'fa-tint' },
                    { title: 'Health Audit for Residential Buildings', description: 'Comprehensive building health audits are conducted to evaluate structural safety and maintenance quality. Our inspections help identify risks and improve building durability.', icon: 'fa-house-circle-check' },
                    { title: 'Non Destructive Testing (NDT)', description: 'We offer non-destructive testing services to inspect materials and structures without causing damage. This method ensures safety, quality assurance, and accurate analysis.', icon: 'fa-search' },
                    { title: 'Design of Water Supply and DPR Creation', description: 'Professional water supply system designs and DPR preparation services are provided for infrastructure projects. Our reports include planning, technical analysis, and project estimation.', icon: 'fa-faucet-drip' },
                    { title: 'Road Consultancy', description: 'Expert consultancy services are offered for road planning, construction, and maintenance projects. We focus on quality standards, safety measures, and cost-effective solutions.', icon: 'fa-road' },
                    { title: 'Structural Engineering Services', description: 'Our structural engineering team designs safe and durable structures for residential and commercial projects. We ensure stability, strength, and compliance with engineering standards.', icon: 'fa-building' },
                    { title: 'Project Management and Supervision', description: 'Complete project management and site supervision services are provided from planning to execution. Our experts ensure timely completion, quality control, and efficient coordination.', icon: 'fa-tasks' },
                ],
            },
        } : service?.slug === 'human-resource' ? {
            hr_process: {
                description: "VAct HR services understands how crucial it is to find the right employee who can contribute to the success of the company's business. We need people with the same level of experience and exposure to understand the unique way of functioning the HR services which VAct provides. Our process for finding the right candidate undergoes the following sequential steps:",
                steps: [
                    { title: 'Identifying candidates', description: 'We identify and connect with the most suitable candidates.' },
                    { title: 'Shortlisting and Screening', description: 'We evaluate and screen candidates to ensure the best fit.' },
                    { title: 'Placement and follow-up', description: 'We ensure seamless placement and continuous follow-up.' },
                ],
            },
            hr_features: {
                items: [
                    { title: 'Expert HR Team', description: 'Experienced professionals delivering effective HR solutions.', icon: 'fa-users' },
                    { title: 'Quality Candidates', description: 'We provide skilled and experienced candidates for your organization.', icon: 'fa-search' },
                    { title: 'End-to-End Support', description: 'From selection to placement and follow-up, we support every step.', icon: 'fa-handshake' },
                    { title: 'Value Driven', description: 'Our HR services add value to your business and build strong relationships.', icon: 'fa-chart-line' },
                ],
            },
            hr_cards: {
                items: [
                    { title: 'Temporary Staffing', description: 'We provide temporary staffing solutions to help businesses meet short-term workforce requirements efficiently. Our staffing services reduce hiring complexity while ensuring skilled manpower support.', icon: 'fa-user-clock' },
                    { title: 'Contract Staffing', description: 'Professional contract staffing services are offered for project-based and long-term assignments. We help organizations hire qualified employees with flexible employment models.', icon: 'fa-user-tie' },
                    { title: 'Staff and Recruitment Outsourcing', description: 'Our recruitment outsourcing solutions simplify hiring processes and improve workforce management. We provide skilled candidates that match your business and technical requirements.', icon: 'fa-users' },
                    { title: 'Skilled Workforce Management', description: 'We manage trained professionals across multiple industries to support business operations effectively. Our team ensures productivity, quality performance, and reliable workforce coordination.', icon: 'fa-people-group' },
                    { title: 'Recruitment Process Support', description: 'Complete recruitment assistance is provided from candidate sourcing to final onboarding. This process helps companies save time and improve hiring efficiency.', icon: 'fa-user-plus' },
                    { title: 'Payroll and Compliance Services', description: 'We handle payroll processing, employee records, and compliance management for organizations. Our services ensure smooth operations while following labor and legal regulations.', icon: 'fa-money-check-dollar' },
                    { title: 'Employee Training and Development', description: 'Training programs are designed to improve employee skills, productivity, and workplace performance. We focus on professional growth and industry-specific learning solutions.', icon: 'fa-chalkboard-teacher' },
                    { title: 'Long-Term Staffing Partnership', description: 'Our manpower solutions are designed to build long-term partnerships with businesses and industries. We provide continuous staffing support, quality service, and workforce reliability.', icon: 'fa-handshake-angle' },
                ],
            },
        } : {}),
    };

    const { data, setData, put, processing } = useForm(initData);

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/services/${service.slug}`, { forceFormData: true, onSuccess: () => setShowFlash(true) });
    };

    const updFeature = (index, field, value) => {
        setData('features', data.features.map((f, i) => (i === index ? { ...f, [field]: value } : f)));
    };

    const addFeature = () => {
        setData('features', [...data.features, { title: '', description: '', icon: 'fa-microchip' }]);
    };

    const removeFeature = (index) => {
        setData('features', data.features.filter((_, i) => i !== index));
    };

    const updSlide = (index, field, value) => {
        setData('slides', data.slides.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
    };

    const addSlide = () => {
        setData('slides', [...data.slides, { image: '', heading: '', highlight: '', description: '' }]);
    };

    const removeSlide = (index) => {
        setData('slides', data.slides.filter((_, i) => i !== index));
    };

    const updPageData = (section, field, value) => {
        setData('page_data', {
            ...pd,
            [section]: { ...(pd[section] || {}), [field]: value },
        });
    };

    const updPageDataArray = (section, arrayField, index, field, value) => {
        const arr = pd?.[section]?.[arrayField] || [];
        setData('page_data', {
            ...pd,
            [section]: {
                ...(pd[section] || {}),
                [arrayField]: arr.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
            },
        });
    };

    const addPageDataCard = (section, arrayField, defaults = {}) => {
        const arr = pd?.[section]?.[arrayField] || [];
        setData('page_data', {
            ...pd,
            [section]: {
                ...(pd[section] || {}),
                [arrayField]: [...arr, defaults],
            },
        });
    };

    const removePageDataItem = (section, arrayField, index) => {
        const arr = pd?.[section]?.[arrayField] || [];
        setData('page_data', {
            ...pd,
            [section]: {
                ...(pd[section] || {}),
                [arrayField]: arr.filter((_, i) => i !== index),
            },
        });
    };

    const imgUrl = (path) => {
        if (!path) return null;
        if (path.startsWith('assets/') || path.startsWith('http')) return `/${path}`;
        return `/storage/${path}`;
    };

    const pd = data.page_data || {};
    const label = LABELS[service?.slug] || service?.slug || 'Service';

    return (
        <AdminLayout>
            <Head title={label} />
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>{label}</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage content for this service page</p>
            </div>

            {showFlash && flash.success && (
                <div style={{ maxWidth: '800px', padding: '12px 16px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '8px', color: '#065f46', fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
                    {flash.success}
                </div>
            )}

            <form onSubmit={submit} encType="multipart/form-data">
                {/* Hero Slides Section */}
                <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                        <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>Hero Slides (Carousel)</h3>
                        <button type="button" onClick={addSlide} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Slide</button>
                    </div>

                    {data.slides.map((slide, i) => (
                        <div key={i} style={{ padding: '16px', backgroundColor: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#0369a1' }}>Slide {i + 1}</span>
                                <button type="button" onClick={() => removeSlide(i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Heading (before highlight)</label>
                                <input type="text" value={slide.heading} onChange={(e) => updSlide(i, 'heading', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Highlighted Text (blue colored part)</label>
                                <input type="text" value={slide.highlight} onChange={(e) => updSlide(i, 'highlight', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                <textarea value={slide.description} onChange={(e) => updSlide(i, 'description', e.target.value)} rows={3} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                            <div style={{ marginBottom: '8px' }}>
                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Slide Image</label>
                                {slide.image && typeof slide.image === 'string' && imgUrl(slide.image) && (
                                    <img key={slide.image} src={imgUrl(slide.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                )}
                                {slide.image && typeof slide.image === 'object' && (
                                    <img src={URL.createObjectURL(slide.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                )}
                                <input type="file" accept="image/*" onChange={(e) => {
                                    if (e.target.files[0]) updSlide(i, 'image', e.target.files[0]);
                                }} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                            </div>
                        </div>
                    ))}
                </div>


                {/* Main Content Section — shown for all services except civil-pmc */}
                {service?.slug !== 'civil-pmc' && (
                <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                    <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Main Content</h3>
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Badge Text</label>
                        <input type="text" value={data.badge} onChange={(e) => setData('badge', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>
                    {service?.slug !== 'human-resource' && (
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Subtitle / Client Info</label>
                        <textarea value={data.subtitle} onChange={(e) => setData('subtitle', e.target.value)} rows={3} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                    </div>
                    )}
                    <div style={{ marginBottom: '12px' }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={6} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                    </div>
                    {service?.slug !== 'embedded-offshore-outsourcing' && (
                        <div style={{ marginBottom: '12px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Main Image</label>
                            {data.image && typeof data.image !== 'object' && imgUrl(data.image) && (
                                <img src={imgUrl(data.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                            )}
                            <input type="file" accept="image/*" onChange={(e) => {
                                if (e.target.files[0]) setData('image', e.target.files[0]);
                            }} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                        </div>
                    )}
                </div>
                )}

                {/* Features Section — shown for all services except fuel-monitoring-system and civil-pmc */}
                {service?.slug !== 'fuel-monitoring-system' && service?.slug !== 'civil-pmc' && service?.slug !== 'human-resource' && (
                <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                        <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>Feature Items</h3>
                        <button type="button" onClick={addFeature} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Feature</button>
                    </div>
                    {data.features.map((feat, i) => (
                        <div key={i} style={{ padding: '16px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Feature {i + 1}</span>
                                <button type="button" onClick={() => removeFeature(i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                    <input type="text" value={feat.title} onChange={(e) => updFeature(i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '0 0 120px' }}>
                                    <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                    <input type="text" value={feat.icon} onChange={(e) => updFeature(i, 'icon', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                <textarea value={feat.description} onChange={(e) => updFeature(i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                        </div>
                    ))}
                </div>
                )}

                {service?.slug === 'embedded-systems' && (
                    <>
                        {/* Vehicle Networking Section */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Vehicle Networking Solutions</h3>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                                <input type="text" value={pd?.vehicle_networking?.title || ''} onChange={(e) => updPageData('vehicle_networking', 'title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description</label>
                                <textarea value={pd?.vehicle_networking?.description || ''} onChange={(e) => updPageData('vehicle_networking', 'description', e.target.value)} rows={4} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Section Image</label>
                                {pd?.vehicle_networking?.image && typeof pd.vehicle_networking.image === 'string' && (
                                    <img src={imgUrl(pd.vehicle_networking.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                )}
                                {pd?.vehicle_networking?.image && typeof pd.vehicle_networking.image === 'object' && (
                                    <img src={URL.createObjectURL(pd.vehicle_networking.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                )}
                                <input type="file" accept="image/*" onChange={(e) => {
                                    if (e.target.files[0]) updPageData('vehicle_networking', 'image', e.target.files[0]);
                                }} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Items (one per line)</label>
                                <textarea value={(pd?.vehicle_networking?.items || []).join('\n')} onChange={(e) => updPageData('vehicle_networking', 'items', e.target.value.split('\n').filter(Boolean))} rows={5} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                        </div>

                        {/* HMI Section */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>HMI And UI Development</h3>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                                <input type="text" value={pd?.hmi?.title || ''} onChange={(e) => updPageData('hmi', 'title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Subtitle</label>
                                <input type="text" value={pd?.hmi?.subtitle || ''} onChange={(e) => updPageData('hmi', 'subtitle', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description</label>
                                <textarea value={pd?.hmi?.description || ''} onChange={(e) => updPageData('hmi', 'description', e.target.value)} rows={4} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Section Image</label>
                                {pd?.hmi?.image && typeof pd.hmi.image === 'string' && (
                                    <img src={imgUrl(pd.hmi.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                )}
                                {pd?.hmi?.image && typeof pd.hmi.image === 'object' && (
                                    <img src={URL.createObjectURL(pd.hmi.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                )}
                                <input type="file" accept="image/*" onChange={(e) => {
                                    if (e.target.files[0]) updPageData('hmi', 'image', e.target.files[0]);
                                }} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Items (one per line)</label>
                                <textarea value={(pd?.hmi?.items || []).join('\n')} onChange={(e) => updPageData('hmi', 'items', e.target.value.split('\n').filter(Boolean))} rows={5} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                        </div>

                        {/* Last Mile Section */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Last Mile Services</h3>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Badge</label>
                                <input type="text" value={pd?.last_mile?.badge || ''} onChange={(e) => updPageData('last_mile', 'badge', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                                <input type="text" value={pd?.last_mile?.title || ''} onChange={(e) => updPageData('last_mile', 'title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Subtitle</label>
                                <input type="text" value={pd?.last_mile?.subtitle || ''} onChange={(e) => updPageData('last_mile', 'subtitle', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Section Image</label>
                                {pd?.last_mile?.image && typeof pd.last_mile.image === 'string' && (
                                    <img src={imgUrl(pd.last_mile.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                )}
                                {pd?.last_mile?.image && typeof pd.last_mile.image === 'object' && (
                                    <img src={URL.createObjectURL(pd.last_mile.image)} alt="" style={{ width: '200px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                                )}
                                <input type="file" accept="image/*" onChange={(e) => {
                                    if (e.target.files[0]) updPageData('last_mile', 'image', e.target.files[0]);
                                }} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                            </div>

                            {/* Top Cards */}
                            <div style={{ borderTop: '1px dashed #d1d5db', paddingTop: '12px', marginBottom: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>Top Cards</label>
                                    <button type="button" onClick={() => addPageDataCard('last_mile', 'top_cards', { title: '', description: '', icon: '' })} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '11px', cursor: 'pointer' }}>+ Add Card</button>
                                </div>
                                {(pd?.last_mile?.top_cards || []).map((card, i) => (
                                    <div key={i} style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '6px', border: '1px solid #e5e7eb', marginBottom: '8px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                            <span style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280' }}>Card {i + 1}</span>
                                            <button type="button" onClick={() => removePageDataItem('last_mile', 'top_cards', i)} style={{ padding: '2px 8px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '10px', cursor: 'pointer' }}>Remove</button>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <div style={{ flex: 1 }}>
                                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Title</label>
                                                <input type="text" value={card.title} onChange={(e) => updPageDataArray('last_mile', 'top_cards', i, 'title', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                            </div>
                                            <div style={{ flex: '0 0 80px' }}>
                                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Icon (emoji)</label>
                                                <input type="text" value={card.icon} onChange={(e) => updPageDataArray('last_mile', 'top_cards', i, 'icon', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '4px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Description</label>
                                            <textarea value={card.description} onChange={(e) => updPageDataArray('last_mile', 'top_cards', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box', resize: 'vertical' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Checklist (one per line)</label>
                                <textarea value={(pd?.last_mile?.checklist || []).join('\n')} onChange={(e) => updPageData('last_mile', 'checklist', e.target.value.split('\n').filter(Boolean))} rows={5} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                        </div>

                        {/* OS Porting Section */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Embedded OS Porting, BSP & Device Driver</h3>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title (before span)</label>
                                <input type="text" value={pd?.os_porting?.title || ''} onChange={(e) => updPageData('os_porting', 'title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Highlighted Subtitle (inside span)</label>
                                <input type="text" value={pd?.os_porting?.subtitle || ''} onChange={(e) => updPageData('os_porting', 'subtitle', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>

                            {/* Service Cards */}
                            <div style={{ borderTop: '1px dashed #d1d5db', paddingTop: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>Service Cards</label>
                                    <button type="button" onClick={() => addPageDataCard('os_porting', 'cards', { title: '', description: '', icon: 'fa-laptop-code' })} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '11px', cursor: 'pointer' }}>+ Add Card</button>
                                </div>
                                {(pd?.os_porting?.cards || []).map((card, i) => (
                                    <div key={i} style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '6px', border: '1px solid #e5e7eb', marginBottom: '8px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                            <span style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280' }}>Card {i + 1}</span>
                                            <button type="button" onClick={() => removePageDataItem('os_porting', 'cards', i)} style={{ padding: '2px 8px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '10px', cursor: 'pointer' }}>Remove</button>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                                            <div style={{ flex: 1 }}>
                                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Title</label>
                                                <input type="text" value={card.title} onChange={(e) => updPageDataArray('os_porting', 'cards', i, 'title', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                            </div>
                                            <div style={{ flex: '0 0 100px' }}>
                                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                                <input type="text" value={card.icon} onChange={(e) => updPageDataArray('os_porting', 'cards', i, 'icon', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Description</label>
                                            <textarea value={card.description} onChange={(e) => updPageDataArray('os_porting', 'cards', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box', resize: 'vertical' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {service?.slug === 'embedded-offshore-outsourcing' && (
                    <>
                        {/* Benefit Cards (01-04) */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>Benefit Cards (01-04)</h3>
                                <button type="button" onClick={() => addPageDataCard('benefit_cards', 'items', { number: '', title: '', description: '' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Card</button>
                            </div>
                            {(pd?.benefit_cards?.items || []).map((card, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Card {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('benefit_cards', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: '0 0 60px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Number</label>
                                            <input type="text" value={card.number} onChange={(e) => updPageDataArray('benefit_cards', 'items', i, 'number', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={card.title} onChange={(e) => updPageDataArray('benefit_cards', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={card.description} onChange={(e) => updPageDataArray('benefit_cards', 'items', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Outsourcing Services */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>Outsourcing Services</h3>
                                <button type="button" onClick={() => addPageDataCard('outsourcing_services', 'items', { title: '', description: '', icon: 'fa-users-cog' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Service</button>
                            </div>
                            {(pd?.outsourcing_services?.items || []).map((item, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Service {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('outsourcing_services', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={item.title} onChange={(e) => updPageDataArray('outsourcing_services', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: '0 0 120px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                            <input type="text" value={item.icon} onChange={(e) => updPageDataArray('outsourcing_services', 'items', i, 'icon', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={item.description} onChange={(e) => updPageDataArray('outsourcing_services', 'items', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {service?.slug === 'fuel-monitoring-system' && (
                    <>
                        {/* Components (01-03) */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>System Components (01-03)</h3>
                                <button type="button" onClick={() => addPageDataCard('components', 'items', { number: '', title: '', subtitle: '', detail: '', image: '' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Component</button>
                            </div>
                            {(pd?.components?.items || []).map((item, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Component {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('components', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: '0 0 60px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Number</label>
                                            <input type="text" value={item.number} onChange={(e) => updPageDataArray('components', 'items', i, 'number', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={item.title} onChange={(e) => updPageDataArray('components', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '8px' }}>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={item.subtitle} onChange={(e) => updPageDataArray('components', 'items', i, 'subtitle', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                    <div style={{ marginBottom: '8px' }}>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Detail Text (e.g. Accuracy)</label>
                                        <input type="text" value={item.detail} onChange={(e) => updPageDataArray('components', 'items', i, 'detail', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Image Path</label>
                                        <input type="text" value={item.image} onChange={(e) => updPageDataArray('components', 'items', i, 'image', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        {item.image && typeof item.image === 'string' && (
                                            <img src={item.image.startsWith('/') ? item.image : '/' + item.image} alt="" style={{ width: '80px', borderRadius: '6px', marginTop: '4px', display: 'block' }} />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Reliable Section */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Reliable Section</h3>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                                <input type="text" value={pd?.reliable_section?.title || ''} onChange={(e) => updPageData('reliable_section', 'title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description</label>
                                <textarea value={pd?.reliable_section?.description || ''} onChange={(e) => updPageData('reliable_section', 'description', e.target.value)} rows={3} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                            <div style={{ borderTop: '1px dashed #d1d5db', paddingTop: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>Mini Features</label>
                                    <button type="button" onClick={() => addPageDataCard('reliable_section', 'features', { title: '', description: '', icon: 'fa-check-circle' })} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '11px', cursor: 'pointer' }}>+ Add</button>
                                </div>
                                {(pd?.reliable_section?.features || []).map((feat, i) => (
                                    <div key={i} style={{ padding: '10px', backgroundColor: '#f3f4f6', borderRadius: '6px', border: '1px solid #e5e7eb', marginBottom: '8px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                            <span style={{ fontSize: '11px', fontWeight: 600, color: '#6b7280' }}>Feature {i + 1}</span>
                                            <button type="button" onClick={() => removePageDataItem('reliable_section', 'features', i)} style={{ padding: '2px 8px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '10px', cursor: 'pointer' }}>Remove</button>
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                                            <div style={{ flex: 1 }}>
                                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Title</label>
                                                <input type="text" value={feat.title} onChange={(e) => updPageDataArray('reliable_section', 'features', i, 'title', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                            </div>
                                            <div style={{ flex: '0 0 100px' }}>
                                                <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                                <input type="text" value={feat.icon} onChange={(e) => updPageDataArray('reliable_section', 'features', i, 'icon', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                            </div>
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Description</label>
                                            <input type="text" value={feat.description} onChange={(e) => updPageDataArray('reliable_section', 'features', i, 'description', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Solution Cards */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>Solution Cards ("You Can")</h3>
                                <button type="button" onClick={() => addPageDataCard('solution_cards', 'items', { title: '', description: '', icon: '' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Card</button>
                            </div>
                            {(pd?.solution_cards?.items || []).map((card, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Card {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('solution_cards', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title (HTML allowed)</label>
                                            <input type="text" value={card.title} onChange={(e) => updPageDataArray('solution_cards', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: '0 0 100px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                            <input type="text" value={card.icon} onChange={(e) => updPageDataArray('solution_cards', 'items', i, 'icon', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={card.description} onChange={(e) => updPageDataArray('solution_cards', 'items', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ST 4000 Features */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>ST 4000 Feature Cards</h3>
                                <button type="button" onClick={() => addPageDataCard('feature_cards', 'items', { title: '', description: '', icon: 'fa-check' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Feature</button>
                            </div>
                            {(pd?.feature_cards?.items || []).map((item, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Feature {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('feature_cards', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={item.title} onChange={(e) => updPageDataArray('feature_cards', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: '0 0 120px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                            <input type="text" value={item.icon} onChange={(e) => updPageDataArray('feature_cards', 'items', i, 'icon', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={item.description} onChange={(e) => updPageDataArray('feature_cards', 'items', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {service?.slug === 'civil-pmc' && (
                    <>
                        {/* Civil Services Section */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>Civil Services Section</h3>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Badge</label>
                                <input type="text" value={pd?.civil_services?.badge || ''} onChange={(e) => updPageData('civil_services', 'badge', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                                <input type="text" value={pd?.civil_services?.title || ''} onChange={(e) => updPageData('civil_services', 'title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description (paragraphs separated by blank line)</label>
                                <textarea value={pd?.civil_services?.description || ''} onChange={(e) => updPageData('civil_services', 'description', e.target.value)} rows={5} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>

                        </div>

                        {/* Civil Cards (01-04) */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>Civil Cards (01-04)</h3>
                                <button type="button" onClick={() => addPageDataCard('civil_cards', 'items', { number: '', title: '', description: '', image: '' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Card</button>
                            </div>
                            {(pd?.civil_cards?.items || []).map((card, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Card {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('civil_cards', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: '0 0 60px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Number</label>
                                            <input type="text" value={card.number} onChange={(e) => updPageDataArray('civil_cards', 'items', i, 'number', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={card.title} onChange={(e) => updPageDataArray('civil_cards', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div style={{ marginBottom: '8px' }}>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={card.description} onChange={(e) => updPageDataArray('civil_cards', 'items', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Image</label>
                                        {card.image && typeof card.image === 'string' && (
                                            <img src={imgUrl(card.image)} alt="" style={{ width: '160px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '6px', display: 'block' }} />
                                        )}
                                        {card.image && typeof card.image === 'object' && (
                                            <img src={URL.createObjectURL(card.image)} alt="" style={{ width: '160px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '6px', display: 'block' }} />
                                        )}
                                        <input type="file" accept="image/*" onChange={(e) => {
                                            if (e.target.files[0]) updPageDataArray('civil_cards', 'items', i, 'image', e.target.files[0]);
                                        }} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Service Cards */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>Service Cards</h3>
                                <button type="button" onClick={() => addPageDataCard('service_cards', 'items', { title: '', description: '', icon: '' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Service</button>
                            </div>
                            {(pd?.service_cards?.items || []).map((item, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Service {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('service_cards', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={item.title} onChange={(e) => updPageDataArray('service_cards', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: '0 0 120px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                            <input type="text" value={item.icon} onChange={(e) => updPageDataArray('service_cards', 'items', i, 'icon', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={item.description} onChange={(e) => updPageDataArray('service_cards', 'items', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {service?.slug === 'human-resource' && (
                    <>
                        {/* HR Process Section */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <h3 style={{ margin: '0 0 16px', fontSize: '15px', fontWeight: 700, color: '#008ed2', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>HR Process Section</h3>
                            <div style={{ marginBottom: '12px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description</label>
                                <textarea value={pd?.hr_process?.description || ''} onChange={(e) => updPageData('hr_process', 'description', e.target.value)} rows={4} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                            </div>
                            <div style={{ marginBottom: '12px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>Steps</label>
                                    <button type="button" onClick={() => addPageDataCard('hr_process', 'steps', { title: '', description: '' })} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '11px', cursor: 'pointer' }}>+ Add Step</button>
                                </div>
                                {(pd?.hr_process?.steps || []).map((step, i) => (
                                    <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '8px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                            <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>Step {i + 1}</span>
                                            <button type="button" onClick={() => removePageDataItem('hr_process', 'steps', i)} style={{ padding: '2px 8px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '10px', cursor: 'pointer' }}>Remove</button>
                                        </div>
                                        <div style={{ marginBottom: '6px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={step.title} onChange={(e) => updPageDataArray('hr_process', 'steps', i, 'title', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '10px', fontWeight: 600, color: '#374151' }}>Description</label>
                                            <input type="text" value={step.description} onChange={(e) => updPageDataArray('hr_process', 'steps', i, 'description', e.target.value)} style={{ width: '100%', padding: '4px 8px', border: '1px solid #d1d5db', borderRadius: '4px', fontSize: '12px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* HR Feature Cards */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>HR Feature Cards</h3>
                                <button type="button" onClick={() => addPageDataCard('hr_features', 'items', { title: '', description: '', icon: '' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Feature</button>
                            </div>
                            {(pd?.hr_features?.items || []).map((item, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Feature {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('hr_features', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={item.title} onChange={(e) => updPageDataArray('hr_features', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: '0 0 120px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                            <input type="text" value={item.icon} onChange={(e) => updPageDataArray('hr_features', 'items', i, 'icon', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={item.description} onChange={(e) => updPageDataArray('hr_features', 'items', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* HR Service Cards */}
                        <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #e5e7eb', paddingBottom: '8px' }}>
                                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>HR Service Cards</h3>
                                <button type="button" onClick={() => addPageDataCard('hr_cards', 'items', { title: '', description: '', icon: '' })} style={{ padding: '6px 14px', borderRadius: '6px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Service</button>
                            </div>
                            {(pd?.hr_cards?.items || []).map((item, i) => (
                                <div key={i} style={{ padding: '12px', backgroundColor: '#f9fafb', borderRadius: '8px', border: '1px solid #e5e7eb', marginBottom: '12px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Service {i + 1}</span>
                                        <button type="button" onClick={() => removePageDataItem('hr_cards', 'items', i)} style={{ padding: '4px 10px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#991b1b', border: 'none', fontSize: '11px', cursor: 'pointer' }}>Remove</button>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ flex: 1 }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Title</label>
                                            <input type="text" value={item.title} onChange={(e) => updPageDataArray('hr_cards', 'items', i, 'title', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                        <div style={{ flex: '0 0 120px' }}>
                                            <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Icon Class</label>
                                            <input type="text" value={item.icon} onChange={(e) => updPageDataArray('hr_cards', 'items', i, 'icon', e.target.value)} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '2px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>Description</label>
                                        <textarea value={item.description} onChange={(e) => updPageDataArray('hr_cards', 'items', i, 'description', e.target.value)} rows={2} style={{ width: '100%', padding: '6px 10px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', resize: 'vertical' }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                <div style={{ maxWidth: '800px' }}>
                    <button type="submit" disabled={processing} style={{ padding: '10px 28px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                        {processing ? 'Saving...' : 'Save All Changes'}
                    </button>
                </div>
            </form>
        </AdminLayout>
    );
}
import { Head, Link, useForm } from '@inertiajs/react';

export default function ServicesEdit({ service }) {
    const { data, setData, post, processing, errors } = useForm({
        title: service.title || '',
        description: service.description || '',
        image: null,
        link: service.link || '',
        sort_order: service.sort_order || 0,
        is_active: service.is_active !== false,
        page_content: service.page_content || '',
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(route('admin.services.update', service.id), {
            _method: 'PUT',
            ...data,
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Edit Service" />

            <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Link href={route('admin.services')} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid #e5e7eb', color: '#374151', textDecoration: 'none', transition: 'all 0.15s ease' }} title="Back to services">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </Link>
                <div>
                    <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Edit Service</h1>
                    <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Update service details and contents</p>
                </div>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Title *</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.title ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} required />
                        {errors.title && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.title}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={4} style={{ width: '100%', padding: '10px 14px', border: errors.description ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                        {errors.description && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.description}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Link (URL)</label>
                        <input type="text" value={data.link} onChange={(e) => setData('link', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '24px', border: '1px solid #e5e7eb', padding: '20px', borderRadius: '12px', backgroundColor: '#f9fafb' }}>
                        <label style={{ display: 'block', marginBottom: '12px', fontSize: '14px', fontWeight: 700, color: '#374151' }}>Service Image</label>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                            {service.image && (
                                <div style={{ flexShrink: 0 }}>
                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Current Image</label>
                                    <img src={service.image.startsWith('http') || service.image.startsWith('/') ? service.image : `/storage/${service.image}`} alt="Preview" style={{ width: '120px', height: '67px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #d1d5db' }} />
                                </div>
                            )}
                            <div style={{ flex: 1, minWidth: '200px' }}>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>
                                    {service.image ? 'Change Image' : 'Upload Image'}
                                </label>
                                <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: errors.image ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '13px', backgroundColor: '#fff', boxSizing: 'border-box' }} />
                                {errors.image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.image}</p>}
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px', display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Sort Order</label>
                            <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                        </div>
                        <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', paddingBottom: '4px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
                                <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} style={{ width: '16px', height: '16px', accentColor: '#008ed2' }} />
                                Active
                            </label>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer' }}>
                            Save Changes
                        </button>
                        <Link href={route('admin.services')} style={{ padding: '10px 24px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

import { router } from '@inertiajs/react';
