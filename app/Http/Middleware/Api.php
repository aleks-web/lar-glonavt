<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class Api
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        try {
            if ($request->route()->uri != 'api/auth/login') {
                JWTAuth::parseToken()->authenticate();
            }
            return $next($request);
        } catch (JWTException $e) {
            return response()->json(['success' => false, 'error' => 'Unauthorized'], 401);
        }
    }
}
