<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Get all products
     */
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Get single product by ID
     */
    public function show($id)
    {
        $product = Product::find($id);
        
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        
        return response()->json($product);
    }

    /**
     * Get featured products
     */
    public function featured()
    {
        $featuredIds = [1, 35, 7, 23, 11, 34, 9];
        $products = Product::whereIn('id', $featuredIds)->get();
        return response()->json($products);
    }

    /**
     * Get products by category
     */
    public function getByCategory($category)
    {
        $products = Product::where('category', $category)->get();
        return response()->json($products);
    }

    /**
     * Search products by name or description
     */
    public function search(Request $request)
    {
        $query = $request->input('q', '');
        
        $products = Product::where('name', 'LIKE', "%{$query}%")
            ->orWhere('description', 'LIKE', "%{$query}%")
            ->get();
            
        return response()->json($products);
    }

    /**
     * Get products by array of IDs
     */
    public function getByIds(Request $request)
    {
        $ids = $request->input('ids', []);
        $products = Product::whereIn('id', $ids)->get();
        return response()->json($products);
    }

    /**
     * Get all categories
     */
    public function categories()
    {
        $categories = Product::select('category')
            ->distinct()
            ->pluck('category');
            
        return response()->json($categories);
    }
}

