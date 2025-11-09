<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    // Checkout a new order
    public function checkout(Request $request)
    {
        $order = Order::create($request->all());
        return response()->json($order);
    }
}