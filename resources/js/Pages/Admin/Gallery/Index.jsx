import AdminLayout from '@/Layouts/AdminLayout';
import { Head, router, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function GalleryIndex({ galleries }) {
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState(null);

    const openAdd = () => { setEditing(null); setShowForm(true); };
    const openEdit = (g) => { setEditing(g); setShowForm(true); };
    const closeForm = () => { setShowForm(false); setEditing(null); };

    const del = (g) => {
        if (confirm(`Delete "${g.title || 'this image'}"?`)) {
            router.delete(route('admin.galleries.destroy', g.id));
        }
    };

    return (
        <AdminLayout>
            <Head title="Gallery" />
            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Gallery</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Manage gallery images</p>
            </div>

            <div style={{ maxWidth: '1000px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '16px' }}>
                    <button onClick={openAdd} style={{ padding: '8px 16px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '13px', fontWeight: 600, cursor: 'pointer' }}>
                        + Add Image
                    </button>
                </div>

                {showForm && (
                    <GalleryForm gallery={editing} onClose={closeForm} />
                )}

                <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ backgroundColor: '#f9fafb' }}>
                                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Image</th>
                                <th style={{ padding: '10px 16px', textAlign: 'left', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Title</th>
                                <th style={{ padding: '10px 16px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Order</th>
                                <th style={{ padding: '10px 16px', textAlign: 'center', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Active</th>
                                <th style={{ padding: '10px 16px', textAlign: 'right', fontSize: '11px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {galleries.map((g) => (
                                <tr key={g.id} style={{ borderTop: '1px solid #f3f4f6' }}>
                                    <td style={{ padding: '10px 16px' }}>
                                        <img src={imgUrl(g)} alt="" style={{ width: '70px', height: '50px', borderRadius: '4px', objectFit: 'cover', border: '1px solid #e5e7eb' }} />
                                    </td>
                                    <td style={{ padding: '10px 16px', fontSize: '13px', fontWeight: 500, color: '#111827' }}>{g.title || '-'}</td>
                                    <td style={{ padding: '10px 16px', textAlign: 'center', fontSize: '13px', color: '#6b7280' }}>{g.sort_order}</td>
                                    <td style={{ padding: '10px 16px', textAlign: 'center' }}>
                                        <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 600, backgroundColor: g.is_active ? '#ecfdf5' : '#fef2f2', color: g.is_active ? '#065f46' : '#dc2626' }}>
                                            {g.is_active ? 'Yes' : 'No'}
                                        </span>
                                    </td>
                                    <td style={{ padding: '10px 16px', textAlign: 'right' }}>
                                        <button onClick={() => openEdit(g)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#eef9ff', color: '#008ed2', border: 'none', cursor: 'pointer', marginRight: '4px' }}>Edit</button>
                                        <button onClick={() => del(g)} style={{ padding: '4px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 500, backgroundColor: '#fef2f2', color: '#dc2626', border: 'none', cursor: 'pointer' }}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                            {galleries.length === 0 && (
                                <tr><td colSpan={5} style={{ padding: '32px', textAlign: 'center', color: '#9ca3af', fontSize: '13px' }}>No gallery images. Click "Add Image" to upload.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    );
}

const imgUrl = (item) => {
    const p = item.image;
    if (!p) return null;
    if (p.startsWith('assets/') || p.startsWith('http')) return `/${p}`;
    return `/storage/${p}`;
};

function GalleryForm({ gallery, onClose }) {
    const { data, setData, post, put, processing } = useForm({
        title: gallery?.title || '',
        image: null,
        sort_order: gallery?.sort_order || 0,
        is_active: gallery?.is_active ?? true,
    });

    const submit = (e) => {
        e.preventDefault();
        if (gallery) {
            put(route('admin.galleries.update', gallery.id), { forceFormData: true, onSuccess: onClose });
        } else {
            post(route('admin.galleries.store'), { forceFormData: true, onSuccess: onClose });
        }
    };

    return (
        <div style={{ maxWidth: '600px', backgroundColor: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#008ed2' }}>{gallery ? 'Edit Image' : 'Add Image'}</h3>
                <button onClick={onClose} style={{ padding: '4px 10px', borderRadius: '6px', backgroundColor: '#f3f4f6', color: '#374151', border: 'none', fontSize: '12px', cursor: 'pointer' }}>Close</button>
            </div>
            <form onSubmit={submit} encType="multipart/form-data">
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Title</label>
                    <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Image</label>
                    {gallery?.image && (
                        <img src={imgUrl(gallery)} alt="" style={{ width: '150px', borderRadius: '6px', objectFit: 'cover', border: '1px solid #e5e7eb', marginBottom: '8px', display: 'block' }} />
                    )}
                    <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} style={{ width: '100%', padding: '6px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '13px', boxSizing: 'border-box' }} />
                </div>
                <div style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px', fontWeight: 600, color: '#374151' }}>Sort Order</label>
                        <input type="number" value={data.sort_order} onChange={(e) => setData('sort_order', e.target.value)} style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '14px', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', paddingBottom: '8px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: '#374151', cursor: 'pointer' }}>
                            <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} />
                            Active
                        </label>
                    </div>
                </div>
                <button type="submit" disabled={processing} style={{ padding: '8px 20px', borderRadius: '8px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '13px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer', opacity: processing ? 0.6 : 1 }}>
                    {processing ? 'Saving...' : gallery ? 'Update' : 'Create'}
                </button>
            </form>
        </div>
    );
}
