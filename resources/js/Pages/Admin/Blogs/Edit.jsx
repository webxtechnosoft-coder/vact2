import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';

export default function BlogsEdit({ blog }) {
    const { data, setData, processing, errors } = useForm({
        title: blog.title || '',
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        image: null,
        author: blog.author || '',
        published_at: blog.published_at ? blog.published_at.substring(0, 10) : new Date().toISOString().substring(0, 10),
        is_active: blog.is_active !== false,
    });

    const submit = (e) => {
        e.preventDefault();
        router.post(route('admin.blogs.update', blog.id), {
            _method: 'PUT',
            ...data,
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <Head title="Edit Blog" />

            <div style={{ marginBottom: '24px' }}>
                <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#111827' }}>Edit Blog</h1>
                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280' }}>Modify the details of an existing blog post</p>
            </div>

            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <form onSubmit={submit} encType="multipart/form-data">
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Title *</label>
                        <input type="text" value={data.title} onChange={(e) => setData('title', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.title ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} required />
                        {errors.title && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.title}</p>}
                    </div>

                    <div style={{ marginBottom: '20px', display: 'flex', gap: '16px' }}>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Author Name</label>
                            <input type="text" value={data.author} onChange={(e) => setData('author', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.author ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                            {errors.author && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.author}</p>}
                        </div>
                        <div style={{ flex: 1 }}>
                            <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Published Date</label>
                            <input type="date" value={data.published_at} onChange={(e) => setData('published_at', e.target.value)} style={{ width: '100%', padding: '10px 14px', border: errors.published_at ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
                            {errors.published_at && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.published_at}</p>}
                        </div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Excerpt (Short Summary)</label>
                        <textarea value={data.excerpt} onChange={(e) => setData('excerpt', e.target.value)} rows={3} style={{ width: '100%', padding: '10px 14px', border: errors.excerpt ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                        {errors.excerpt && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.excerpt}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Content (Full Article)</label>
                        <textarea value={data.content} onChange={(e) => setData('content', e.target.value)} rows={8} style={{ width: '100%', padding: '10px 14px', border: errors.content ? '1.5px solid #dc2626' : '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                        {errors.content && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.content}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#374151' }}>Cover Image</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            {blog.image && (
                                <img src={blog.image.startsWith('http') || blog.image.startsWith('/') ? blog.image : `/storage/${blog.image}`} alt="Preview" style={{ width: '120px', height: '80px', objectFit: 'cover', borderRadius: '6px', border: '1px solid #e5e7eb' }} />
                            )}
                            <input type="file" accept="image/*" onChange={(e) => setData('image', e.target.files[0])} style={{ fontSize: '13px' }} />
                        </div>
                        {errors.image && <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#dc2626' }}>{errors.image}</p>}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600, color: '#374151', cursor: 'pointer' }}>
                            <input type="checkbox" checked={data.is_active} onChange={(e) => setData('is_active', e.target.checked)} style={{ width: '16px', height: '16px', accentColor: '#008ed2' }} />
                            Active / Visible
                        </label>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
                        <button type="submit" disabled={processing} style={{ padding: '10px 24px', borderRadius: '10px', backgroundColor: '#008ed2', color: '#fff', border: 'none', fontSize: '14px', fontWeight: 600, cursor: processing ? 'not-allowed' : 'pointer' }}>
                            Save Changes
                        </button>
                        <Link href={route('admin.blogs')} style={{ padding: '10px 24px', borderRadius: '10px', border: '1px solid #d1d5db', backgroundColor: '#fff', color: '#374151', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}
