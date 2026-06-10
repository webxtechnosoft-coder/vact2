<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'slug', 'title', 'subtitle', 'description', 'badge',
        'image', 'features', 'slides', 'page_data', 'is_active', 'sort_order',
    ];

    protected $casts = [
        'features' => 'array',
        'slides' => 'array',
        'page_data' => 'array',
    protected $table = 'services';

    protected $fillable = [
        'title',
        'description',
        'icon',
        'image',
        'link',
        'sort_order',
        'is_active',
        'page_content',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];
}
