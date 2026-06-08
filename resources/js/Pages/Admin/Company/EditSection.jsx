import AdminLayout from '@/Layouts/AdminLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function EditSection({ section, content }) {
    const s = content.settings || {};
    const pts = content.points || [];
    const isJsonSection = section === 'why-choose-us' || section === 'how-it-works';

    const { data, setData, put, processing, errors } = useForm({
        title: content.title || '',
        subtitle: content.subtitle || '',
        description: content.description || '',
        extra_heading: content.extra_heading || '',
        points: isJsonSection ? (Array.isArray(pts) ? JSON.stringify(pts) : '') : (Array.isArray(pts) && typeof pts[0] === 'string' ? pts.join('\n') : ''),
        settings: s,
        image: null,
        image2: null,
    });

    const [listItems, setListItems] = useState(isJsonSection && Array.isArray(pts) ? pts : []);

    useEffect(() => {
        if (isJsonSection) {
            setData('points', JSON.stringify(listItems));
        }
    }, [listItems]);

    const addItem = () => {
        const newItem = section === 'how-it-works' 
            ? { step: listItems.length + 1, title: '', icon: '', shape: '' }
            : { title: '', text: '', icon: '' };
        setListItems([...listItems, newItem]);
    };

    const removeItem = (index) => {
        const newList = listItems.filter((_, idx) => idx !== index);
        if (section === 'how-it-works') {
            newList.forEach((item, idx) => {
                item.step = idx + 1;
            });
        }
        setListItems(newList);
    };

    const updateItem = (index, field, value) => {
        const newList = listItems.map((item, idx) => {
            if (idx === index) {
                return { ...item, [field]: value };
            }
            return item;
        });
        setListItems(newList);
    };

    const submit = (e) => {
        e.preventDefault();
        put(route('admin.company.section.update', section), {
            forceFormData: true,
        });
    };

    const updateSetting = (key, val) => {
        setData('settings', {
            ...data.settings,
            [key]: val
        });
    };

    const getTitle = () => {
        const map = {
            'about': 'About Section',
            'who-we-are': 'Who We Are (Enterprise)',
            'training': 'Quality Training Section',
            'why-choose-us': 'Why Choose Us Section',
            'how-it-works': 'How It Works (Process) Section'
        };
        return map[section] || section;
    };

    const getFallbackImage = (imgType) => {
        const fallbacks = {
            'about': {
                'image': '/assets/images/resources/about-two-img-1.jpg',
                'image2': '/assets/images/resources/about-two-img-2.jpg'
            },
            'who-we-are': {
                'image': '/assets/images/resources/enterprise-plan-img-1.jpg',
                'image2': '/assets/images/resources/enterprise-plan-img-2.jpg'
            },
            'training': {
                'image': '/assets/images/backgrounds/about-one-bg1.jpeg'
            },
            'why-choose-us': {
                'image': '/assets/images/resources/why.png.jpeg'
            }
        };
        return fallbacks[section]?.[imgType] || '';
    };

    const previewSrc = content.image ? `/storage/${content.image}` : getFallbackImage('image');
    const previewSrc2 = content.image2 ? `/storage/${content.image2}` : getFallbackImage('image2');

    return (
        <AdminLayout>
            <Head title={`Edit ${getTitle()}`} />

            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Edit {getTitle()}</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage the content and settings for this homepage section</p>
            </div>

            <div style={{ maxWidth: '800px', backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <h3 style={{ margin: '0 0 20px', fontSize: '15px', fontWeight: 700, color: '#1f2937', borderBottom: '1px solid #f3f4f6', paddingBottom: '10px' }}>Text Content</h3>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Tagline / Subtitle</label>
                        <input type="text" value={data.subtitle} onChange={(e) => setData('subtitle', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Main Title</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Description</label>
                        <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={5} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box', resize: 'vertical' }} />
                    </div>

                    {(section === 'about' || section === 'training') && (
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Extra Heading / Accent Text</label>
                            <input type="text" value={data.extra_heading} onChange={(e) => setData('extra_heading', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                        </div>
                    )}

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>
                            {isJsonSection ? 'Section Items / Points' : 'Bullet Points (One per line)'}
                        </label>
                        {isJsonSection ? (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {listItems.map((item, idx) => (
                                    <div key={idx} style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '8px', position: 'relative', backgroundColor: '#f9fafb' }}>
                                        <button 
                                            type="button" 
                                            onClick={() => removeItem(idx)} 
                                            style={{ position: 'absolute', top: '12px', right: '12px', padding: '4px 8px', borderRadius: '6px', backgroundColor: '#fee2e2', color: '#ef4444', border: 'none', fontSize: '11px', cursor: 'pointer', fontWeight: 600 }}
                                        >
                                            Remove
                                        </button>
                                        
                                        {section === 'how-it-works' && (
                                            <div style={{ marginBottom: '12px', display: 'flex', gap: '16px' }}>
                                                <div style={{ flex: 1 }}>
                                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#4b5563' }}>Step Number</label>
                                                    <input 
                                                        type="number" 
                                                        value={item.step || idx + 1} 
                                                        onChange={(e) => updateItem(idx, 'step', parseInt(e.target.value) || 0)} 
                                                        style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px' }} 
                                                    />
                                                </div>
                                                <div style={{ flex: 2 }}>
                                                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#4b5563' }}>Shape Image Path (optional)</label>
                                                    <input 
                                                        type="text" 
                                                        value={item.shape || ''} 
                                                        onChange={(e) => updateItem(idx, 'shape', e.target.value)} 
                                                        style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px' }} 
                                                        placeholder="/assets/images/shapes/process-one-shape-1.png"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div style={{ marginBottom: section === 'why-choose-us' ? '12px' : '0' }}>
                                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#4b5563' }}>Title</label>
                                            <input 
                                                type="text" 
                                                value={item.title || ''} 
                                                onChange={(e) => updateItem(idx, 'title', e.target.value)} 
                                                style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px' }} 
                                            />
                                        </div>

                                        {section === 'why-choose-us' && (
                                            <div style={{ marginTop: '12px' }}>
                                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#4b5563' }}>Text / Description</label>
                                                <textarea 
                                                    value={item.text || ''} 
                                                    onChange={(e) => updateItem(idx, 'text', e.target.value)} 
                                                    rows={2}
                                                    style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', resize: 'vertical' }} 
                                                />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                <button 
                                    type="button" 
                                    onClick={addItem} 
                                    style={{ alignSelf: 'flex-start', padding: '8px 16px', borderRadius: '8px', backgroundColor: '#e0f2fe', color: '#0369a1', border: 'none', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}
                                >
                                    + Add New Item
                                </button>
                            </div>
                        ) : (
                            <textarea
                                value={data.points}
                                onChange={(e) => setData('points', e.target.value)}
                                rows={5}
                                style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box', resize: 'vertical' }}
                                placeholder="Point 1&#10;Point 2&#10;Point 3"
                            />
                        )}
                    </div>



                    {(section === 'about' || section === 'training') && (
                        <div style={{ marginBottom: '20px', display: 'flex', gap: '16px' }}>
                            <div style={{ flex: 2 }}>
                                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Video URL</label>
                                <input type="text" value={data.settings.video_url || ''} onChange={(e) => updateSetting('video_url', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                            </div>
                            {section === 'training' && (
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Video Title</label>
                                    <input type="text" value={data.settings.video_title || ''} onChange={(e) => updateSetting('video_title', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Section Specific Stats Fields */}
                    {section === 'about' && (
                        <>
                            <h3 style={{ margin: '28px 0 20px', fontSize: '15px', fontWeight: 700, color: '#1f2937', borderBottom: '1px solid #f3f4f6', paddingBottom: '10px' }}>Statistics Content</h3>
                            <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Stat Years Value</label>
                                    <input type="number" value={data.settings.stat_years || 15} onChange={(e) => updateSetting('stat_years', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Stat Years Label</label>
                                    <input type="text" value={data.settings.stat_years_label || 'Years'} onChange={(e) => updateSetting('stat_years_label', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Stat Years Suffix</label>
                                    <input type="text" value={data.settings.stat_years_suffix || '+'} onChange={(e) => updateSetting('stat_years_suffix', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Stat Years Text</label>
                                    <input type="text" value={data.settings.stat_years_text || 'Experience'} onChange={(e) => updateSetting('stat_years_text', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                            <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Stat Placements Value</label>
                                    <input type="number" value={data.settings.stat_placements || 100} onChange={(e) => updateSetting('stat_placements', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Stat Placements Label</label>
                                    <input type="text" value={data.settings.stat_placements_label || 'Placements'} onChange={(e) => updateSetting('stat_placements_label', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Stat Placements Suffix</label>
                                    <input type="text" value={data.settings.stat_placements_suffix || '%'} onChange={(e) => updateSetting('stat_placements_suffix', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                        </>
                    )}

                    {section === 'who-we-are' && (
                        <>
                            <h3 style={{ margin: '28px 0 20px', fontSize: '15px', fontWeight: 700, color: '#1f2937', borderBottom: '1px solid #f3f4f6', paddingBottom: '10px' }}>Statistics Content</h3>
                            <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Years Experience</label>
                                    <input type="number" value={data.settings.years_exp || 15} onChange={(e) => updateSetting('years_exp', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Years Experience Label</label>
                                    <input type="text" value={data.settings.years_exp_text || 'Years Experiences'} onChange={(e) => updateSetting('years_exp_text', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Associates Count</label>
                                    <input type="number" value={data.settings.associates || 75} onChange={(e) => updateSetting('associates', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Associates Label</label>
                                    <input type="text" value={data.settings.associates_text || 'Associates'} onChange={(e) => updateSetting('associates_text', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                            <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Active Clients</label>
                                    <input type="number" value={data.settings.active_clients || 12} onChange={(e) => updateSetting('active_clients', parseInt(e.target.value) || 0)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                                <div style={{ flex: '1 1 200px' }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Active Clients Label</label>
                                    <input type="text" value={data.settings.active_clients_text || 'Active Clients'} onChange={(e) => updateSetting('active_clients_text', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', color: '#111827', boxSizing: 'border-box' }} />
                                </div>
                            </div>
                        </>
                    )}

                    {/* Image Fields */}
                    {(section === 'about' || section === 'who-we-are' || section === 'training' || section === 'why-choose-us') && (
                        <>
                            <h3 style={{ margin: '28px 0 20px', fontSize: '15px', fontWeight: 700, color: '#1f2937', borderBottom: '1px solid #f3f4f6', paddingBottom: '10px' }}>Images</h3>
                            <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
                                <div style={{ flex: 1 }}>
                                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Main Image</label>
                                    {previewSrc && (
                                        <img src={previewSrc} alt="Preview" style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px', border: '1px solid #e5e7eb' }} />
                                    )}
                                    <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} style={{ width: '100%', fontSize: '13px' }} />
                                    {errors.image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.image}</p>}
                                </div>
                                {(section === 'about' || section === 'who-we-are') && (
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Secondary Image</label>
                                        {previewSrc2 && (
                                            <img src={previewSrc2} alt="Preview" style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '6px', marginBottom: '10px', border: '1px solid #e5e7eb' }} />
                                        )}
                                        <input type="file" accept="image/*" onChange={(e) => setData('image2', e.target.files[0])} style={{ width: '100%', fontSize: '13px' }} />
                                        {errors.image2 && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.image2}</p>}
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px', borderTop: '1px solid #f3f4f6', paddingTop: '20px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                            {processing ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
