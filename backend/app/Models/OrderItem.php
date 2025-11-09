<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    // Fillable fields
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'price'
    ];

    // Convert price to decimal
    protected $casts = [
        'price' => 'decimal:2'
    ];

    // Relationship with order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    // Relationship with product
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
