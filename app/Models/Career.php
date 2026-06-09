<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Career extends Model
{
    protected $fillable = ['type', 'title', 'description', 'icon', 'experience', 'location', 'tags', 'date', 'role', 'image', 'sort_order', 'is_active'];

    protected function casts(): array
    {
        return [
            'tags' => 'array',
            'is_active' => 'boolean',
        ];
    }
}
