<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use Inertia\Inertia;
    

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/dashboard', function () {
    return Inertia::render('main.dashboard');
});

Route::get('/customers', [CustomerController::class, 'index'])->name('customers.index');
Route::get('/customers/create', [CustomerController::class, 'create'])->name('customers.create');
Route::post('/customers', [CustomerController::class, 'store'])->name('customers.store');
Route::get('/customers/{customer}', [CustomerController::class, 'show'])->name('customers.show');
Route::get('/customers/{customer}/edit', [CustomerController::class, 'edit'])->name('customers.edit');
Route::put('/customers/{customer}', [CustomerController::class, 'update'])->name('customers.update');
Route::delete('/customers/{customer}', [CustomerController::class, 'destroy'])->name('customers.destroy');

// Добавим дополнительный маршрут для подтверждения удаления
Route::delete('/customers/{customer}/confirm', [CustomerController::class, 'confirmDestroy'])->name('customers.confirm-destroy');

// Добавим маршрут для поиска клиентов
Route::get('/customers/search', [CustomerController::class, 'search'])->name('customers.search');

// Добавим маршрут для экспорта клиентов
Route::get('/customers/export', [CustomerController::class, 'export'])->name('customers.export');