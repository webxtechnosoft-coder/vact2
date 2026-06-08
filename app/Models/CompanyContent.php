<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyContent extends Model
{
    protected $fillable = [
        'section_key', 'label', 'title', 'subtitle', 'description',
        'extra_heading', 'points', 'image', 'image2', 'sort_order', 'is_active', 'settings',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'sort_order' => 'integer',
        'points' => 'array',
        'settings' => 'array',
    ];
}
