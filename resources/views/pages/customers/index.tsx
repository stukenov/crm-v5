import React from 'react';
import { Button, Input } from "@nextui-org/react";
import { InertiaLink, InertiaLinkButton } from "@Components/InertiaLink";
import { useForm , router} from '@inertiajs/react';
import { route } from 'ziggy-js';
import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';

import AppLayout from "@/Layouts/AppLayout";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";


interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string; // Added address field
}

interface IndexProps {
    customers: Customer[];
    query?: string;
    phpVersion: string;
    currentServerTime: string;
    showPHPVersion: boolean;
}

export default function CustomersIndex({ customers, query, phpVersion, showPHPVersion, currentServerTime }: IndexProps) {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        // TODO: Implement search logic
        console.log(`Searching for: ${e.target.value}`);
    };

    const handleExport = () => {
        // TODO: Implement export logic
        console.log('Exporting customers');
    };

    const setShowPHPVersion = (showPHPVersion: boolean) => {
        // Implement setShowPHPVersion logic as call to setShowPHPVersion method in CustomerController
        console.log('Setting showPHPVersion to:', showPHPVersion);
        router.visit('/customers', { method: 'get', data: { showPHPVersion: showPHPVersion } });
    };



    return (
        <AppLayout title="Покупатели">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Покупатели</h1>
                <div className="flex justify-between mb-4">
                    <InertiaLinkButton href="/customers/create" color="primary">
                        Добавить покупателя
                    </InertiaLinkButton>
                    <Button onClick={handleExport}>Экспорт</Button>
                </div>
                <Input
                    placeholder="Поиск покупателей"
                    value={query || ''}
                    onChange={handleSearch}
                    className="mb-4"
                />
                <div>
                    <Button onClick={() => setShowPHPVersion(!showPHPVersion)}>
                        {showPHPVersion ? `PHP Version: ${phpVersion}` : 'Show PHP Version'}
                    </Button>
                    <p>Current Server Time: {currentServerTime}</p>
                </div>
                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>EMAIL</TableColumn>
                        <TableColumn>PHONE</TableColumn>
                        <TableColumn>ADDRESS</TableColumn>
                        <TableColumn>ACTIONS</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {customers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell>{customer.name}</TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>{customer.phone}</TableCell>
                                <TableCell>{customer.address}</TableCell> 
                                <TableCell>
                                    <Button color="primary" onClick={() => router.visit(`/customers/${customer.id}/edit`)}>
                                        Редактировать
                                    </Button>
                                    <Button color="danger" onClick={() => {
                                        router.delete(`/customers/${customer.id}`);
                                    }}>
                                        Удалить
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </AppLayout>
    );
}