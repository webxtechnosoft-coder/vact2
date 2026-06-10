<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = [
        'title',
        'category',
        'description',
        'image',
        'rating',
        'rating_count',
        'link',
        'sort_order',
        'is_active',
        'page_content',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'rating' => 'double',
        'rating_count' => 'integer',
        'sort_order' => 'integer',
    ];
}
