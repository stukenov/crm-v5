<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        $showPHPVersion = false;

        return Inertia::render('customers.index', [
            'customers' => $customers,
            'phpVersion' => $this->showPHPVersion(),
            'showPHPVersion' => $showPHPVersion,
            'currentServerTime' => $this->showCurrentServerTime()
        ]);
    }

    private function showPHPVersion()
    {
        $phpVersion = phpversion();
        return $phpVersion;
    }

    private function showCurrentServerTime()
    {
        $currentServerTime = now();
        return $currentServerTime;
    }

    public function setShowPHPVersion(Request $request)
    {
        $showPHPVersion = $request->input('showPHPVersion', true);
        return Inertia::share('showPHPVersion', $showPHPVersion);
    }

    public function create()
    {
        return Inertia::render('customers.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:customers,email',
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
        ]);

        $customer = Customer::create($validatedData);

        return redirect()->route('customers.index')->with('success', 'Customer created successfully.');
    }

    public function show(Customer $customer)
    {
        return Inertia::render('customers.show', ['customer' => $customer]);
    }

    public function edit(Customer $customer)
    {
        return Inertia::render('customers.edit', ['customer' => $customer]);
    }

    public function update(Request $request, Customer $customer)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:customers,email,' . $customer->id,
            'phone' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
        ]);

        $customer->update($validatedData);

        return redirect()->route('customers.index')->with('success', 'Customer updated successfully.');
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();

        return redirect()->route('customers.index')->with('success', 'Customer deleted successfully.');
    }

    public function confirmDestroy(Customer $customer)
    {
        return Inertia::render('customers.confirm-destroy', [
            'customer' => $customer
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('query');
        $customers = Customer::where('name', 'like', "%{$query}%")
                             ->orWhere('email', 'like', "%{$query}%")
                             ->orWhere('phone', 'like', "%{$query}%")
                             ->get();

        return Inertia::render('customers.index', [
            'customers' => $customers,
            'query' => $query
        ]);
    }

    public function export()
    {
        $customers = Customer::all();
        $csvExporter = new \Laracsv\Export();
        $csvExporter->build($customers, ['name', 'email', 'phone', 'address']);

        return Response::stream(function() use ($csvExporter) {
            $csvExporter->stream();
        }, 200, [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="customers.csv"',
        ]);
    }
}