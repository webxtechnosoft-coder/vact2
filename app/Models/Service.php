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
        'is_active' => 'boolean',
        'sort_order' => 'integer',
    ];
}
