<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    // Fillable fields
    protected $fillable = [
        'user_id',
        'total_amount',
        'status'
    ];

    // Convert total amount to decimal
    protected $casts = [
        'total_amount' => 'decimal:2'
    ];

    // Relationship with user
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relationship with order items
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}
