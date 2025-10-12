<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'price',
        'image',
        'description',
        'category',
        'rating'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'rating' => 'decimal:1'
    ];

    // Relationship with order items
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
