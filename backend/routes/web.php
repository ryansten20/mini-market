<?php

use Illuminate\Support\Facades\Route;

// Simple welcome route
Route::get('/', function () {
    return response()->json([
        'message' => 'Welcome to Congo API',
        'version' => '1.0',
        'endpoints' => [
            'POST /api/register' => 'Register a new user',
            'POST /api/login' => 'Login user',
            'POST /api/logout' => 'Logout user (requires auth)',
            'GET /api/user' => 'Get current user (requires auth)'
        ]
    ]);
});
