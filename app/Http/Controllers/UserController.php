<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $input = $request->input();
        $user = User::create($input);
        return response()->json($user);
    }

    public function readAll(Request $request)
    {
        $searchTerm = $request->query('q');

        $user = User::where('name', 'LIKE', "%{$searchTerm}%")
        ->orWhere('address', 'LIKE', "%{$searchTerm}%")
        ->get();
        return response()->json($user);
    }

    public function read($id, Request $request)
    {
        $user = User::where('id', $id)
        ->first();
        return response()->json($user);
    }

    public function update($id, Request $request)
    {
        $input = $request->input();
        $user = User::where('id', $id)
            ->update($input);
        return response()->json([
            'success'=> true
        ]);
    }

    public function delete($id, Request $request)
    {
        $user = User::where('id', $id)
            ->delete();
        return response()->json([
            'success'=> true
        ]);
    }
}
