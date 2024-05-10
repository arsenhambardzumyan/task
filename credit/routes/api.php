<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BankCardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/cards', [BankCardController::class, 'index'])->name('cards.index');
Route::post('/cards', [BankCardController::class, 'store'])->name('cards.store');
Route::get('/cards/{card}', [BankCardController::class, 'show'])->name('cards.show');
Route::put('/cards/{card}', [BankCardController::class, 'update'])->name('cards.update');
Route::delete('/cards/{card}', [BankCardController::class, 'destroy'])->name('cards.destroy');
