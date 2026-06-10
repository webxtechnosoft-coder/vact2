import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';

const ICONS = ['fa-briefcase', 'fa-microchip', 'fa-code', 'fa-car', 'fa-cogs', 'fa-laptop-code', 'fa-robot', 'fa-network-wired', 'fa-tools', 'fa-chart-line'];

const imgUrl = (p) => {
    if (!p) return null;
    if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
    return `/storage/${p}`;
};

export default function CareersIndex({ jobs }) {
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(null);
    const [showFlash, setShowFlash] = useState(false);
    const [flashMsg, setFlashMsg] = useState('');

    const openAdd = () => { setEditing(null); setShowForm(true); };
    const openEdit = (item) => { setEditing(item); setShowForm(true); };
    const closeForm = () => { setShowForm(false); setEditing(null); };

    const del = (item) => {
        if (confirm(`Delete "${item.title}"?`)) {
            router.delete(route('admin.careers.destroy', item.id), {
                onSuccess: () => {
                    setFlashMsg('Deleted successfully.'); setShowFlash(true);
                    setTimeout(() => setShowFlash(false), 4000);
                },
            });
        }
    };

    return (
        <AdminLayout>
            <Head title="Careers" />
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Careers</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage job openings and placement entries</p>
            </div>

            {showFlash && (
                <div style={{ maxWidth: '1000px', padding: '12px 16px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0', borderRadius: '8px', color: '#065f46', fontSize: '14px', fontWeight: 500, marginBottom: '16px' }}>
                    {flashMsg}
                </div>
            )}

            {showForm && (
                <CareerForm item={editing} onClose={closeForm} />
            )}

            <div style={{ maxWidth: '1000px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h2 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#111827' }}>Job Openings</h2>
                    <button onClick={openAdd} style={{ padding: '6px 14px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>+ Add Job</button>
                </div>
                <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Title</th>
                                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Experience</th>
                                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Location</th>
                                <th style={{ padding: '10px 16px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Order</th>
                                <th style={{ padding: '10px 16px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Active</th>
                                <th style={{ padding: '10px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(jobs || []).map((j) => {
                                return (
                                    <tr key={j.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                                        <td style={{ padding: '10px 16px', fontSize: '13px', fontWeight: 500, color: '#111827' }}>{j.title}</td>
                                        <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280' }}>{j.experience || '-'}</td>
                                        <td style={{ padding: '10px 16px', fontSize: '13px', color: '#6b7280' }}>{j.location || '-'}</td>
                                        <td style={{ padding: '10px 16px', textAlign: 'center', fontSize: '13px', color: '#6b7280' }}>{j.sort_order}</td>
                                        <td style={{ padding: '10px 16px', textAlign: 'center' }}>
                                            <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, backgroundColor: j.is_active ? '#ecfdf5' : '#fef2f2', color: j.is_active ? '#065f46' : '#dc2626' }}>{j.is_active ? 'Yes' : 'No'}</span>
                                        </td>
                                        <td style={{ padding: '10px 16px', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                            <button onClick={() => openEdit(j)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#eef9ff', color: '#008ed2', border: 'none', cursor: 'pointer', marginRight: '4px' }}>Edit</button>
                                            <button onClick={() => del(j)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer' }}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                            {(!jobs || jobs.length === 0) && (
                                <tr><td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>No jobs. Click "Add Job" to create one.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

function CareerForm({ item, onClose }) {
    const { data, setData, post, put, processing } = useForm({
        type: 'job',
        title: item?.title || '',
        description: item?.description || '',
        icon: item?.icon || 'fa-briefcase',
        experience: item?.experience || '',
        location: item?.location || '',
        tags: item?.tags || [],
        date: item?.date || '',
        sort_order: item?.sort_order ?? 0,
        is_active: item?.is_active ?? true,
    });

    const [tagInput, setTagInput] = useState('');

    const addTag = () => {
        if (tagInput.trim() && !data.tags.includes(tagInput.trim())) {
            setData('tags', [...data.tags, tagInput.trim()]);
            setTagInput('');
        }
    };

    const removeTag = (tag) => {
        setData('tags', data.tags.filter((t) => t !== tag));
    };

    const submit = (e) => {
        e.preventDefault();
        if (item) {
            put(route('admin.careers.update', item.id), { forceFormData: true, preserveState: true, preserveScroll: true, onSuccess: onClose });
        } else {
            post(route('admin.careers.store'), { forceFormData: true, preserveState: true, preserveScroll: true, onSuccess: onClose });
        }
    };

    return (
        <div style={{ maxWidth: '700px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>
                    {item ? 'Edit Job' : 'Add Job'}
                </h3>
                <button onClick={onClose} style={{ padding: '4px 10px', borderRadius: '6px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', fontSize: '12px', cursor: 'pointer' }}>Close</button>
            </div>
            <form onSubmit={submit}>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Job Title *</label>
                    <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} required style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Icon</label>
                    <select value={data.icon} onChange={(e) => setData('icon', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }}>
                        {ICONS.map((ic) => <option key={ic} value={ic}>{ic.replace('fa-', '').replace(/-/g, ' ')}</option>)}
                    </select>
                </div>
                <div style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Experience</label>
                        <input type="text" value={data.experience} onChange={(e) => setData('experience', e.target.value)} placeholder="0-2 Years" style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Location</label>
                        <input type="text" value={data.location} onChange={(e) => setData('location', e.target.value)} placeholder="Coimbatore" style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Date</label>
                    <input type="text" value={data.date} onChange={(e) => setData('date', e.target.value)} placeholder="2 months ago" style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Tags</label>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                        <input type="text" value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTag(); } }} placeholder="Type a tag and press Enter" style={{ flex: 1, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                        <button type="button" onClick={addTag} style={{ padding: '8px 14px', borderRadius: '6px', backgroundColor: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db', fontSize: '12px', cursor: 'pointer', fontWeight: 500 }}>Add</button>
                    </div>
                    {data.tags.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {data.tags.map((tag) => (
                                <span key={tag} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '3px 8px', backgroundColor: '#eef9ff', color: '#008ed2', borderRadius: '20px', fontSize: '12px', fontWeight: 500 }}>
                                    {tag}
                                    <button type="button" onClick={() => removeTag(tag)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '14px', color: '#008ed2', lineHeight: 1 }}>&times;</button>
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Description</label>
                    <textarea value={data.description} onChange={(e) => setData('description', e.target.value)} rows={3} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                </div>

                <div style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Sort Order</label>
                        <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>
                </div>

                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: '#374151', cursor: 'pointer' }}>
                        <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} />
                        Active
                    </label>
                </div>

                <button type="submit" disabled={processing} style={{ padding: '8px 20px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '13px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                    {processing ? 'Saving...' : item ? 'Update' : 'Create'}
                </button>
            </form>
        </div>
    );
}