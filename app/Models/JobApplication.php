<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class JobApplication extends Model
{
    protected $fillable = [
        'career_id', 'first_name', 'email', 'phone', 'position', 'resume', 'cover_letter',
    ];

    public function career(): BelongsTo
    {
        return $this->belongsTo(Career::class);
    }
}