import { useState, useCallback } from 'react';

/* ── JSON Editor & Visual Page Builder Component ── */
export default function JsonEditor({ value, onChange, errors }) {
    const [jsonError, setJsonError] = useState('');
    const [isFormatted, setIsFormatted] = useState(false);
    const [mode, setMode] = useState('visual'); // 'visual' or 'json'
    const [activeTab, setActiveTab] = useState('carousel');

    const validateAndSet = (raw) => {
        onChange(raw);
        if (!raw.trim()) { setJsonError(''); return; }
        try {
            JSON.parse(raw);
            setJsonError('');
        } catch (e) {
            setJsonError('Invalid JSON: ' + e.message);
        }
    };

    const handleFormat = () => {
        try {
            const parsed = JSON.parse(value);
            onChange(JSON.stringify(parsed, null, 2));
            setJsonError('');
            setIsFormatted(true);
            setTimeout(() => setIsFormatted(false), 1500);
        } catch (e) {
            setJsonError('Cannot format — invalid JSON: ' + e.message);
        }
    };

    const handleMinify = () => {
        try {
            const parsed = JSON.parse(value);
            onChange(JSON.stringify(parsed));
            setJsonError('');
        } catch (e) {
            setJsonError('Cannot minify — invalid JSON: ' + e.message);
        }
    };

    const boardTemplate = {
        carousel: [
            { image: '/assets/images/shop/autoedge_board.png', alt: 'Slide 1', title: 'Headline <br/><span style="color:#008ed2">Sub Title</span>', text: 'Slide description text.' }
        ],
        spotlight: {
            badge: 'Product Badge Text', badge_icon: 'fas fa-microchip',
            title: 'Product Full Title', subtitle: 'Product Tagline',
            highlight: 'Short highlight statement.',
            paragraphs: ['First paragraph description.'],
            image: '/assets/images/shop/autoedge_board.png',
            show_social: false
        },
        why_choose: {
            heading: 'Why Choose <span>Product Name?</span>',
            cards: [
                { icon: 'fas fa-microchip', title: 'Feature One', text: 'Description.', col_class: 'col-lg-4 col-md-6' }
            ]
        },
        hardware_specs: {
            specs: ['Spec 1', 'Spec 2']
        },
        training_perks: { items: ['Perk 1', 'Perk 2'] },
        advanced_projects: {
            title: 'Advanced Projects',
            description: 'Advanced project ideas.',
            cards: [{ icon: 'fas fa-car-side', title: 'Project Title', text: 'Project description.' }]
        },
        cta: {
            tag: 'Career Acceleration Program',
            heading: 'Ready to Accelerate Your Career?',
            text: 'CTA body text.',
            image: '/assets/images/shop/autoedge_career_cta.png'
        }
    };

    const machineTemplate = {
        carousel: [
            { image: '/assets/images/shop/product_slide1.png', alt: 'Slide 1', title: 'Headline <br/><span style="color:#008ed2">Sub-title</span>', text: 'Slide text.' }
        ],
        spotlight: {
            badge: 'Trusted by Top Industries', badge_icon: 'fas fa-star',
            title: 'Product Name', subtitle: 'Product Tagline',
            highlight: 'Short highlight sentence.',
            paragraphs: ['First paragraph.'],
            image: '/assets/images/shop/product.png',
            show_social: true
        },
        overview: {
            badge: 'Product Overview', badge_icon: 'fas fa-eye',
            title: '<span style="color:var(--eduvers-base)">Reliable & Automated</span> Dispensing',
            paragraphs: ['Overview paragraph 1.'],
            image: '/assets/images/shop/product_overview.png'
        },
        specs_cards: [
            { icon: 'fas fa-chart-line', title: 'Feature One', items: ['Item 1', 'Item 2'] }
        ]
    };

    const embcoreTemplate = {
        carousel: [
            { image: '/assets/images/shop/embcore_board.png', alt: 'Board slide', title: 'EmbCore <br/><span style="color:#008ed2">Learning Platform</span>', text: 'Slide description.' }
        ],
        spotlight: {
            badge: 'Premium Hardware Learning Platform', badge_icon: 'fas fa-microchip',
            title: 'VAct EmbCore Development Board', subtitle: 'Advanced Embedded System Learning Platform',
            highlight: 'Based on STM32F205 (ARM® Cortex®-M3).',
            paragraphs: ['Paragraph 1.'],
            image: '/assets/images/shop/embcore_board.png',
            show_social: false
        },
        requirements: {
            cards: [
                { icon: 'fas fa-desktop', title: 'Operational Requirements', items: ['Windows 7/10', '9-12V DC / 1A Power Supply'] }
            ]
        },
        debugging_guide: {
            badge: 'Running & Debugging',
            heading: 'Running & <span>Debugging</span>',
            intro: 'Step-by-step guide.',
            steps: ['Configure I/O pins using <strong>STM32CubeMX</strong>.', 'Edit and compile in <strong>Keil uVision 5</strong>.', 'Build the project.']
        },
        peripherals: {
            badge: 'Onboard Peripherals', badge_icon: 'fas fa-puzzle-piece',
            heading: 'Onboard <span>Peripherals</span>',
            intro: 'Every component engineered for maximum reliability.',
            cards: [
                { icon: 'fas fa-network-wired', title: 'Communication Protocols', items: ['I2C, SPI, UART'] }
            ]
        }
    };

    const getParsedData = () => {
        try {
            return JSON.parse(value || '{}');
        } catch {
            return null;
        }
    };

    const parsedData = getParsedData();
    const isValid = !jsonError && parsedData !== null;

    const layout = (() => {
        if (!parsedData) return 'board';
        if (parsedData.specs_cards || parsedData.overview) return 'machine';
        if (parsedData.requirements || parsedData.debugging_guide || parsedData.peripherals) return 'embcore';
        return 'board';
    })();

    const updateField = (path, val) => {
        try {
            const newData = JSON.parse(value || '{}');
            let current = newData;
            const parts = path.split('.');
            for (let i = 0; i < parts.length - 1; i++) {
                if (!current[parts[i]]) current[parts[i]] = {};
                current = current[parts[i]];
            }
            current[parts[parts.length - 1]] = val;
            onChange(JSON.stringify(newData, null, 2));
        } catch (e) {
            console.error(e);
        }
    };

    const updateArrayItem = (path, index, field, val) => {
        try {
            const newData = JSON.parse(value || '{}');
            let current = newData;
            const parts = path.split('.');
            for (let i = 0; i < parts.length; i++) {
                if (!current[parts[i]]) current[parts[i]] = i === parts.length - 1 ? [] : {};
                current = current[parts[i]];
            }
            if (!current[index]) current[index] = {};
            if (field === null) {
                current[index] = val;
            } else {
                current[index][field] = val;
            }
            onChange(JSON.stringify(newData, null, 2));
        } catch (e) {
            console.error(e);
        }
    };

    const addArrayItem = (path, defaultVal) => {
        try {
            const newData = JSON.parse(value || '{}');
            let current = newData;
            const parts = path.split('.');
            for (let i = 0; i < parts.length; i++) {
                if (!current[parts[i]]) current[parts[i]] = i === parts.length - 1 ? [] : {};
                current = current[parts[i]];
            }
            current.push(defaultVal);
            onChange(JSON.stringify(newData, null, 2));
        } catch (e) {
            console.error(e);
        }
    };

    const removeArrayItem = (path, index) => {
        try {
            const newData = JSON.parse(value || '{}');
            let current = newData;
            const parts = path.split('.');
            for (let i = 0; i < parts.length; i++) {
                current = current[parts[i]];
            }
            if (current && Array.isArray(current)) {
                current.splice(index, 1);
            }
            onChange(JSON.stringify(newData, null, 2));
        } catch (e) {
            console.error(e);
        }
    };

    const fieldLabelStyle = { display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#4b5563' };
    const inputStyle = { width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', marginBottom: '12px' };
    const textareaStyle = { width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box', marginBottom: '12px', resize: 'vertical' };
    const cardStyle = { padding: '16px', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '12px', position: 'relative' };
    const removeBtnStyle = { position: 'absolute', top: '10px', right: '10px', padding: '3px 8px', borderRadius: '4px', background: '#fee2e2', border: '1px solid #fecaca', color: '#dc2626', fontSize: '11px', cursor: 'pointer', fontWeight: 600 };
    const addBtnStyle = { padding: '6px 14px', borderRadius: '6px', background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1d4ed8', fontSize: '12px', cursor: 'pointer', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' };

    if (!parsedData) {
        return (
            <div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    <button type="button" onClick={() => setMode('visual')} style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #008ed2', background: mode === 'visual' ? '#008ed2' : '#fff', color: mode === 'visual' ? '#fff' : '#008ed2', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>🛠️ Visual Builder</button>
                    <button type="button" onClick={() => setMode('json')} style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #d1d5db', background: mode === 'json' ? '#374151' : '#fff', color: mode === 'json' ? '#fff' : '#374151', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>📝 Raw JSON Editor</button>
                </div>
                <div style={{ padding: '20px', background: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '8px', color: '#b91c1c', fontSize: '14px', lineHeight: '1.5' }}>
                    <p style={{ margin: '0 0 8px 0', fontWeight: 700 }}>⚠️ JSON Parsing Error</p>
                    <p style={{ margin: 0 }}>The page content JSON is currently empty or contains syntax errors. Please switch to the **Raw JSON Editor** to fix it, or click one of the template buttons below to start with a fresh layout.</p>
                </div>
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                    <button type="button" onClick={() => validateAndSet(JSON.stringify(boardTemplate, null, 2))} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #d1d5db', background: '#f9fafb', fontSize: '12px', cursor: 'pointer', color: '#374151' }}>🔧 Load Board Layout Template</button>
                    <button type="button" onClick={() => validateAndSet(JSON.stringify(machineTemplate, null, 2))} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #d1d5db', background: '#f9fafb', fontSize: '12px', cursor: 'pointer', color: '#374151' }}>🏭 Load Machine Layout Template</button>
                    <button type="button" onClick={() => validateAndSet(JSON.stringify(embcoreTemplate, null, 2))} style={{ padding: '6px 12px', borderRadius: '6px', border: '1px solid #d1d5db', background: '#f9fafb', fontSize: '12px', cursor: 'pointer', color: '#374151' }}>💡 Load EmbCore Layout Template</button>
                </div>
            </div>
        );
    }

    if (mode === 'visual') {
        const data = parsedData || {};

        const tabs = [
            { id: 'carousel', label: '🎡 Hero Slides' },
            { id: 'spotlight', label: '🔦 Spotlight' }
        ];
        if (layout === 'machine') {
            tabs.push(
                { id: 'overview', label: '👁️ Overview' },
                { id: 'specs_cards', label: '📄 Specs Cards' }
            );
        } else {
            tabs.push(
                { id: 'why_choose', label: '❓ Why Choose' },
                { id: 'specs_perks', label: '⚙️ Specs & Perks' },
                { id: 'projects', label: '🚀 Projects' },
                { id: 'cta', label: '📣 CTA Banner' },
                { id: 'requirements', label: '📋 Requirements' },
                { id: 'debugging_guide', label: '🛠️ Debugging' },
                { id: 'peripherals', label: '🧩 Peripherals' }
            );
        }

        return (
            <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ display: 'flex', gap: '8px', padding: '12px 16px', background: '#f8fafc', borderBottom: '1px solid #e5e7eb', flexWrap: 'wrap', alignItems: 'center' }}>
                    <button type="button" onClick={() => setMode('visual')} style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #008ed2', background: '#008ed2', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>🛠️ Visual Builder</button>
                    <button type="button" onClick={() => setMode('json')} style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #d1d5db', background: '#fff', color: '#374151', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>📝 Raw JSON Editor</button>
                    
                    <span style={{ fontSize: '12px', color: '#64748b', marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>Layout style:</span>
                        <strong style={{ textTransform: 'uppercase', color: '#0f172a' }}>{layout} layout</strong>
                    </span>
                </div>

                <div style={{ display: 'flex', minHeight: '400px' }}>
                    <div style={{ width: '200px', borderRight: '1px solid #e5e7eb', background: '#f8fafc', padding: '12px 8px', flexShrink: 0 }}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '10px 12px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    background: activeTab === tab.id ? 'rgba(0,142,210,0.08)' : 'transparent',
                                    color: activeTab === tab.id ? '#008ed2' : '#475569',
                                    fontWeight: activeTab === tab.id ? 700 : 500,
                                    textAlign: 'left',
                                    fontSize: '13px',
                                    cursor: 'pointer',
                                    marginBottom: '4px',
                                    transition: 'all 0.15s'
                                }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div style={{ flex: 1, padding: '24px', background: '#ffffff', maxHeight: '600px', overflowY: 'auto' }}>
                        {activeTab === 'carousel' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Hero Carousel Slides</h3>
                                <p style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '20px' }}>Manage the slides displayed at the very top of the product page.</p>
                                
                                {(data.carousel || data.hero_carousel || []).map((slide, idx) => (
                                    <div key={idx} style={cardStyle}>
                                        <button type="button" onClick={() => removeArrayItem(data.carousel ? 'carousel' : 'hero_carousel', idx)} style={removeBtnStyle}>Delete Slide</button>
                                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>Slide #{idx + 1}</span>
                                        
                                        <div style={{ marginTop: '12px' }}>
                                            <label style={fieldLabelStyle}>Image Path</label>
                                            <input type="text" value={slide.image || ''} onChange={(e) => updateArrayItem(data.carousel ? 'carousel' : 'hero_carousel', idx, 'image', e.target.value)} style={inputStyle} placeholder="/assets/images/shop/..." />
                                            
                                            <label style={fieldLabelStyle}>Title (HTML Supported)</label>
                                            <input type="text" value={slide.title || ''} onChange={(e) => updateArrayItem(data.carousel ? 'carousel' : 'hero_carousel', idx, 'title', e.target.value)} style={inputStyle} placeholder="e.g. Slide Title &lt;br/&gt;&lt;span&gt;Highlight&lt;/span&gt;" />
                                            
                                            <label style={fieldLabelStyle}>Description</label>
                                            <textarea value={slide.description || slide.text || ''} onChange={(e) => updateArrayItem(data.carousel ? 'carousel' : 'hero_carousel', idx, slide.description !== undefined ? 'description' : 'text', e.target.value)} rows={2} style={textareaStyle} placeholder="Slide details..." />
                                        </div>
                                    </div>
                                ))}

                                <button type="button" onClick={() => addArrayItem(data.carousel ? 'carousel' : 'hero_carousel', { image: '/assets/images/shop/product_slide1.png', title: 'New Slide Title', description: 'New slide description.' })} style={addBtnStyle}>
                                    ➕ Add Slide
                                </button>
                            </div>
                        )}

                        {activeTab === 'spotlight' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Spotlight Details</h3>
                                <p style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '20px' }}>Configure the primary hardware spotlight section.</p>

                                <label style={fieldLabelStyle}>Badge Icon Class (FontAwesome)</label>
                                <input type="text" value={data.spotlight?.badge_icon || ''} onChange={(e) => updateField('spotlight.badge_icon', e.target.value)} style={inputStyle} placeholder="e.g. fas fa-microchip" />

                                <label style={fieldLabelStyle}>Badge Text (HTML Supported)</label>
                                <input type="text" value={data.spotlight?.badge || ''} onChange={(e) => updateField('spotlight.badge', e.target.value)} style={inputStyle} placeholder="e.g. Premium Hardware" />

                                <label style={fieldLabelStyle}>Spotlight Title</label>
                                <input type="text" value={data.spotlight?.title || ''} onChange={(e) => updateField('spotlight.title', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Spotlight Subtitle</label>
                                <input type="text" value={data.spotlight?.subtitle || ''} onChange={(e) => updateField('spotlight.subtitle', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Highlight Statement</label>
                                <textarea value={data.spotlight?.highlight || ''} onChange={(e) => updateField('spotlight.highlight', e.target.value)} rows={2} style={textareaStyle} />

                                <label style={fieldLabelStyle}>Image Path</label>
                                <input type="text" value={data.spotlight?.image || ''} onChange={(e) => updateField('spotlight.image', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Description Paragraphs (One per line)</label>
                                <textarea
                                    value={Array.isArray(data.spotlight?.paragraphs) ? data.spotlight.paragraphs.join('\n') : (data.spotlight?.description1 ? [data.spotlight.description1, data.spotlight.description2].filter(Boolean).join('\n') : '')}
                                    onChange={(e) => {
                                        const lines = e.target.value.split('\n');
                                        if (Array.isArray(data.spotlight?.paragraphs)) {
                                            updateField('spotlight.paragraphs', lines);
                                        } else {
                                            updateField('spotlight.description1', lines[0] || '');
                                            updateField('spotlight.description2', lines.slice(1).join('\n') || '');
                                        }
                                    }}
                                    rows={4}
                                    style={textareaStyle}
                                    placeholder="Enter paragraph text. Press Enter for a new paragraph."
                                />

                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', cursor: 'pointer', marginTop: '10px' }}>
                                    <input type="checkbox" checked={!!data.spotlight?.show_social} onChange={(e) => updateField('spotlight.show_social', e.target.checked)} style={{ width: '16px', height: '16px', accentColor: '#008ed2' }} />
                                    Show Social Share Icons
                                </label>
                            </div>
                        )}

                        {activeTab === 'why_choose' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Why Choose Cards</h3>
                                
                                <label style={fieldLabelStyle}>Section Heading</label>
                                <input type="text" value={data.why_choose?.heading || ''} onChange={(e) => updateField('why_choose.heading', e.target.value)} style={inputStyle} placeholder="e.g. Why Choose <span>AutoEdge?</span>" />

                                {(data.why_choose?.cards || []).map((card, idx) => (
                                    <div key={idx} style={cardStyle}>
                                        <button type="button" onClick={() => removeArrayItem('why_choose.cards', idx)} style={removeBtnStyle}>Delete</button>
                                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>Card #{idx + 1}</span>
                                        
                                        <div style={{ marginTop: '12px' }}>
                                            <div style={{ display: 'flex', gap: '12px' }}>
                                                <div style={{ flex: 1 }}>
                                                    <label style={fieldLabelStyle}>Card Icon</label>
                                                    <input type="text" value={card.icon || ''} onChange={(e) => updateArrayItem('why_choose.cards', idx, 'icon', e.target.value)} style={inputStyle} placeholder="fas fa-microchip" />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <label style={fieldLabelStyle}>Card Number / Order</label>
                                                    <input type="text" value={card.num || ''} onChange={(e) => updateArrayItem('why_choose.cards', idx, 'num', e.target.value)} style={inputStyle} placeholder="e.g. 01" />
                                                </div>
                                            </div>
                                            
                                            <label style={fieldLabelStyle}>Card Title</label>
                                            <input type="text" value={card.title || ''} onChange={(e) => updateArrayItem('why_choose.cards', idx, 'title', e.target.value)} style={inputStyle} />
                                            
                                            <label style={fieldLabelStyle}>Card Description</label>
                                            <textarea value={card.text || ''} onChange={(e) => updateArrayItem('why_choose.cards', idx, 'text', e.target.value)} rows={2} style={textareaStyle} />
                                        </div>
                                    </div>
                                ))}

                                <button type="button" onClick={() => addArrayItem('why_choose.cards', { icon: 'fas fa-star', title: 'New Feature', text: 'Feature description.' })} style={addBtnStyle}>
                                    ➕ Add Feature Card
                                </button>
                            </div>
                        )}

                        {activeTab === 'specs_perks' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Specs & Perks</h3>
                                
                                <label style={fieldLabelStyle}>Hardware Specifications (One per line)</label>
                                <textarea
                                    value={(() => {
                                        if (data.hardware_specs?.specs) return data.hardware_specs.specs.join('\n');
                                        if (data.hardware_specs?.columns) return data.hardware_specs.columns.flat().join('\n');
                                        return '';
                                    })()}
                                    onChange={(e) => {
                                        const lines = e.target.value.split('\n').filter(Boolean);
                                        if (data.hardware_specs?.columns) {
                                            const half = Math.ceil(lines.length / 2);
                                            updateField('hardware_specs.columns', [lines.slice(0, half), lines.slice(half)]);
                                        } else {
                                            updateField('hardware_specs.specs', lines);
                                        }
                                    }}
                                    rows={8}
                                    style={textareaStyle}
                                    placeholder="Enter hardware specifications, one per line..."
                                />

                                <label style={fieldLabelStyle}>Career Perks / Benefits (One per line)</label>
                                <textarea
                                    value={data.training_perks?.perks?.join('\n') || data.training_perks?.items?.join('\n') || ''}
                                    onChange={(e) => {
                                        const lines = e.target.value.split('\n').filter(Boolean);
                                        if (data.training_perks?.perks) {
                                            updateField('training_perks.perks', lines);
                                        } else {
                                            updateField('training_perks.items', lines);
                                        }
                                    }}
                                    rows={6}
                                    style={textareaStyle}
                                    placeholder="Enter perks or benefits, one per line..."
                                />
                            </div>
                        )}

                        {activeTab === 'projects' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Advanced Projects</h3>

                                <label style={fieldLabelStyle}>Section Heading</label>
                                <input type="text" value={data.advanced_projects?.title || ''} onChange={(e) => updateField('advanced_projects.title', e.target.value)} style={inputStyle} placeholder="e.g. Advanced Projects" />

                                <label style={fieldLabelStyle}>Section Description</label>
                                <textarea value={data.advanced_projects?.description || data.advanced_projects?.intro || ''} onChange={(e) => updateField(data.advanced_projects?.description !== undefined ? 'advanced_projects.description' : 'advanced_projects.intro', e.target.value)} rows={2} style={textareaStyle} />

                                {(data.advanced_projects?.cards || []).map((card, idx) => (
                                    <div key={idx} style={cardStyle}>
                                        <button type="button" onClick={() => removeArrayItem('advanced_projects.cards', idx)} style={removeBtnStyle}>Delete</button>
                                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>Project Card #{idx + 1}</span>

                                        <div style={{ marginTop: '12px' }}>
                                            <label style={fieldLabelStyle}>Project Icon</label>
                                            <input type="text" value={card.icon || ''} onChange={(e) => updateArrayItem('advanced_projects.cards', idx, 'icon', e.target.value)} style={inputStyle} placeholder="fas fa-route" />

                                            <label style={fieldLabelStyle}>Project Title</label>
                                            <input type="text" value={card.title || ''} onChange={(e) => updateArrayItem('advanced_projects.cards', idx, 'title', e.target.value)} style={inputStyle} />

                                            <label style={fieldLabelStyle}>Project Text</label>
                                            <textarea value={card.text || ''} onChange={(e) => updateArrayItem('advanced_projects.cards', idx, 'text', e.target.value)} rows={2} style={textareaStyle} />
                                        </div>
                                    </div>
                                ))}

                                <button type="button" onClick={() => addArrayItem('advanced_projects.cards', { icon: 'fas fa-rocket', title: 'New Project Idea', text: 'Project detail description.' })} style={addBtnStyle}>
                                    ➕ Add Project Card
                                </button>
                            </div>
                        )}

                        {activeTab === 'cta' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>CTA Banner</h3>

                                <label style={fieldLabelStyle}>CTA Badge Tag</label>
                                <input type="text" value={data.cta?.badge || data.cta?.tag || ''} onChange={(e) => updateField(data.cta?.badge !== undefined ? 'cta.badge' : 'cta.tag', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>CTA Title</label>
                                <input type="text" value={data.cta?.title || data.cta?.heading || ''} onChange={(e) => updateField(data.cta?.title !== undefined ? 'cta.title' : 'cta.heading', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>CTA Description</label>
                                <textarea value={data.cta?.description || data.cta?.text || ''} onChange={(e) => updateField(data.cta?.description !== undefined ? 'cta.description' : 'cta.text', e.target.value)} rows={3} style={textareaStyle} />

                                <label style={fieldLabelStyle}>CTA Banner Image</label>
                                <input type="text" value={data.cta?.image || ''} onChange={(e) => updateField('cta.image', e.target.value)} style={inputStyle} />
                            </div>
                        )}

                        {activeTab === 'overview' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Product Overview</h3>

                                <label style={fieldLabelStyle}>Overview Badge Text</label>
                                <input type="text" value={data.overview?.badge || ''} onChange={(e) => updateField('overview.badge', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Overview Badge Icon</label>
                                <input type="text" value={data.overview?.badge_icon || ''} onChange={(e) => updateField('overview.badge_icon', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Overview Heading</label>
                                <input type="text" value={data.overview?.title || ''} onChange={(e) => updateField('overview.title', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Overview Image</label>
                                <input type="text" value={data.overview?.image || ''} onChange={(e) => updateField('overview.image', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Overview Paragraphs (One per line)</label>
                                <textarea
                                    value={(() => {
                                        if (Array.isArray(data.overview?.paragraphs)) return data.overview.paragraphs.join('\n');
                                        if (data.overview?.description1) return [data.overview.description1, data.overview.description2].filter(Boolean).join('\n');
                                        return '';
                                    })()}
                                    onChange={(e) => {
                                        const lines = e.target.value.split('\n');
                                        if (Array.isArray(data.overview?.paragraphs)) {
                                            updateField('overview.paragraphs', lines);
                                        } else {
                                            updateField('overview.description1', lines[0] || '');
                                            updateField('overview.description2', lines.slice(1).join('\n') || '');
                                        }
                                    }}
                                    rows={5}
                                    style={textareaStyle}
                                />
                            </div>
                        )}

                        {activeTab === 'specs_cards' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Specifications Cards</h3>

                                {(data.specs_cards || []).map((card, idx) => (
                                    <div key={idx} style={cardStyle}>
                                        <button type="button" onClick={() => removeArrayItem('specs_cards', idx)} style={removeBtnStyle}>Delete Card</button>
                                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>Card #{idx + 1}</span>

                                        <div style={{ marginTop: '12px' }}>
                                            <label style={fieldLabelStyle}>Card Icon</label>
                                            <input type="text" value={card.icon || ''} onChange={(e) => updateArrayItem('specs_cards', idx, 'icon', e.target.value)} style={inputStyle} />

                                            <label style={fieldLabelStyle}>Card Title</label>
                                            <input type="text" value={card.title || ''} onChange={(e) => updateArrayItem('specs_cards', idx, 'title', e.target.value)} style={inputStyle} />

                                            <label style={fieldLabelStyle}>Card Specs List (One per line)</label>
                                            <textarea
                                                value={card.items?.join('\n') || card.specs?.join('\n') || ''}
                                                onChange={(e) => {
                                                    const lines = e.target.value.split('\n').filter(Boolean);
                                                    updateArrayItem('specs_cards', idx, card.items !== undefined ? 'items' : 'specs', lines);
                                                }}
                                                rows={5}
                                                style={textareaStyle}
                                                placeholder="Enter specifications list, one per line..."
                                            />
                                        </div>
                                    </div>
                                ))}

                                <button type="button" onClick={() => addArrayItem('specs_cards', { icon: 'fas fa-cogs', title: 'New Specifications Card', items: ['Spec Item 1', 'Spec Item 2'] })} style={addBtnStyle}>
                                    ➕ Add Specs Card
                                </button>
                            </div>
                        )}

                        {activeTab === 'requirements' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Operational Requirements</h3>

                                <label style={fieldLabelStyle}>Section Heading</label>
                                <input type="text" value={data.requirements?.title || ''} onChange={(e) => updateField('requirements.title', e.target.value)} style={inputStyle} placeholder="Operational Requirements" />

                                {(data.requirements?.cards || []).map((card, idx) => (
                                    <div key={idx} style={cardStyle}>
                                        <button type="button" onClick={() => removeArrayItem('requirements.cards', idx)} style={removeBtnStyle}>Delete Card</button>
                                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>Card #{idx + 1}</span>

                                        <div style={{ marginTop: '12px' }}>
                                            <label style={fieldLabelStyle}>Card Icon</label>
                                            <input type="text" value={card.icon || ''} onChange={(e) => updateArrayItem('requirements.cards', idx, 'icon', e.target.value)} style={inputStyle} />

                                            <label style={fieldLabelStyle}>Card Title</label>
                                            <input type="text" value={card.title || ''} onChange={(e) => updateArrayItem('requirements.cards', idx, 'title', e.target.value)} style={inputStyle} />

                                            <label style={fieldLabelStyle}>Card Items List (One per line)</label>
                                            <textarea
                                                value={card.items?.join('\n') || ''}
                                                onChange={(e) => {
                                                    const lines = e.target.value.split('\n').filter(Boolean);
                                                    updateArrayItem('requirements.cards', idx, 'items', lines);
                                                }}
                                                rows={5}
                                                style={textareaStyle}
                                                placeholder="Enter requirement list, one per line..."
                                            />
                                        </div>
                                    </div>
                                ))}

                                <button type="button" onClick={() => addArrayItem('requirements.cards', { icon: 'fas fa-desktop', title: 'New Requirements Card', items: ['Requirement Item 1'] })} style={addBtnStyle}>
                                    ➕ Add Requirements Card
                                </button>
                            </div>
                        )}

                        {activeTab === 'debugging_guide' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Running & Debugging Guide</h3>

                                <label style={fieldLabelStyle}>Guide Badge</label>
                                <input type="text" value={data.debugging_guide?.badge || ''} onChange={(e) => updateField('debugging_guide.badge', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Guide Title</label>
                                <input type="text" value={data.debugging_guide?.title || data.debugging_guide?.heading || ''} onChange={(e) => updateField(data.debugging_guide?.title !== undefined ? 'debugging_guide.title' : 'debugging_guide.heading', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Guide Intro Text</label>
                                <textarea value={data.debugging_guide?.intro || ''} onChange={(e) => updateField('debugging_guide.intro', e.target.value)} rows={2} style={textareaStyle} />

                                <label style={fieldLabelStyle}>Debugging Steps (One step per line)</label>
                                <textarea
                                    value={data.debugging_guide?.steps?.join('\n') || ''}
                                    onChange={(e) => {
                                        const lines = e.target.value.split('\n').filter(Boolean);
                                        updateField('debugging_guide.steps', lines);
                                    }}
                                    rows={8}
                                    style={textareaStyle}
                                    placeholder="Enter steps, one per line. HTML supported, e.g. Configure I/O pins using <strong>STM32CubeMX</strong>."
                                />
                            </div>
                        )}

                        {activeTab === 'peripherals' && (
                            <div>
                                <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Onboard Peripherals</h3>

                                <label style={fieldLabelStyle}>Peripherals Badge Text</label>
                                <input type="text" value={data.peripherals?.badge || ''} onChange={(e) => updateField('peripherals.badge', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Peripherals Heading</label>
                                <input type="text" value={data.peripherals?.heading || ''} onChange={(e) => updateField('peripherals.heading', e.target.value)} style={inputStyle} />

                                <label style={fieldLabelStyle}>Peripherals Intro Text</label>
                                <textarea value={data.peripherals?.intro || ''} onChange={(e) => updateField('peripherals.intro', e.target.value)} rows={2} style={textareaStyle} />

                                {(data.peripherals?.cards || []).map((card, idx) => (
                                    <div key={idx} style={cardStyle}>
                                        <button type="button" onClick={() => removeArrayItem('peripherals.cards', idx)} style={removeBtnStyle}>Delete Card</button>
                                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase' }}>Card #{idx + 1}</span>

                                        <div style={{ marginTop: '12px' }}>
                                            <label style={fieldLabelStyle}>Card Icon</label>
                                            <input type="text" value={card.icon || ''} onChange={(e) => updateArrayItem('peripherals.cards', idx, 'icon', e.target.value)} style={inputStyle} />

                                            <label style={fieldLabelStyle}>Card Title</label>
                                            <input type="text" value={card.title || ''} onChange={(e) => updateArrayItem('peripherals.cards', idx, 'title', e.target.value)} style={inputStyle} />

                                            <label style={fieldLabelStyle}>Card Peripherals List (One per line)</label>
                                            <textarea
                                                value={card.items?.join('\n') || card.specs?.join('\n') || ''}
                                                onChange={(e) => {
                                                    const lines = e.target.value.split('\n').filter(Boolean);
                                                    updateArrayItem('peripherals.cards', idx, card.items !== undefined ? 'items' : 'specs', lines);
                                                }}
                                                rows={5}
                                                style={textareaStyle}
                                                placeholder="Enter peripheral items, one per line..."
                                            />
                                        </div>
                                    </div>
                                ))}

                                <button type="button" onClick={() => addArrayItem('peripherals.cards', { icon: 'fas fa-puzzle-piece', title: 'New Peripherals Card', items: ['Peripheral Item 1'] })} style={addBtnStyle}>
                                    ➕ Add Peripherals Card
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
            <div style={{ display: 'flex', gap: '8px', padding: '12px 16px', background: '#f8fafc', borderBottom: '1px solid #e5e7eb', flexWrap: 'wrap', alignItems: 'center' }}>
                <button type="button" onClick={() => setMode('visual')} style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #d1d5db', background: '#fff', color: '#374151', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>🛠️ Visual Builder</button>
                <button type="button" onClick={() => setMode('json')} style={{ padding: '6px 14px', borderRadius: '8px', border: '1px solid #008ed2', background: '#008ed2', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>📝 Raw JSON Editor</button>
            </div>

            <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#6b7280' }}>Templates:</span>
                    <button type="button" onClick={() => validateAndSet(JSON.stringify(boardTemplate, null, 2))}
                        style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid #d1d5db', background: '#f9fafb', fontSize: '12px', cursor: 'pointer', color: '#374151' }}>
                        🔧 Board Layout
                    </button>
                    <button type="button" onClick={() => validateAndSet(JSON.stringify(machineTemplate, null, 2))}
                        style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid #d1d5db', background: '#f9fafb', fontSize: '12px', cursor: 'pointer', color: '#374151' }}>
                        🏭 Machine Layout
                    </button>
                    <button type="button" onClick={() => validateAndSet(JSON.stringify(embcoreTemplate, null, 2))}
                        style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid #d1d5db', background: '#f9fafb', fontSize: '12px', cursor: 'pointer', color: '#374151' }}>
                        💡 EmbCore Layout
                    </button>
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                        <button type="button" onClick={handleFormat}
                            style={{ padding: '5px 12px', borderRadius: '6px', border: '1px solid #008ed2', background: isFormatted ? '#008ed2' : '#eff8ff', fontSize: '12px', cursor: 'pointer', color: isFormatted ? '#fff' : '#008ed2', fontWeight: '600', transition: 'all 0.2s' }}>
                            {isFormatted ? '✓ Formatted!' : '⬛ Format JSON'}
                        </button>
                        <button type="button" onClick={handleMinify}
                            style={{ padding: '5px 12px', borderRadius: '6px', border: '1px solid #d1d5db', background: '#f9fafb', fontSize: '12px', cursor: 'pointer', color: '#374151' }}>
                            Minify
                        </button>
                        <button type="button" onClick={() => validateAndSet('')}
                            style={{ padding: '5px 12px', borderRadius: '6px', border: '1px solid #fca5a5', background: '#fef2f2', fontSize: '12px', cursor: 'pointer', color: '#dc2626' }}>
                            Clear
                        </button>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: !value.trim() ? '#9ca3af' : isValid ? '#22c55e' : '#ef4444', flexShrink: 0 }}></div>
                    <span style={{ fontSize: '12px', color: !value.trim() ? '#9ca3af' : isValid ? '#16a34a' : '#dc2626', fontWeight: '500' }}>
                        {!value.trim() ? 'Empty — page will show no dynamic content' : isValid ? '✓ Valid JSON' : jsonError}
                    </span>
                </div>

                <textarea
                    value={value}
                    onChange={(e) => validateAndSet(e.target.value)}
                    rows={20}
                    spellCheck={false}
                    style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: (jsonError || errors) ? '1.5px solid #dc2626' : '1px solid #d1d5db',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', 'Monaco', monospace",
                        boxSizing: 'border-box',
                        resize: 'vertical',
                        lineHeight: '1.6',
                        background: '#fafafa',
                        color: '#1e293b',
                        outline: 'none',
                        tabSize: 2,
                    }}
                    placeholder={'{\n  "carousel": [...],\n  "spotlight": {...},\n  "why_choose": {...}\n}'}
                />
            </div>
        </div>
    );
}
