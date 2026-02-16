import React from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";
import { InertiaLink, InertiaLinkButton } from "@Components/InertiaLink";
import AppLayout from "@/Layouts/AppLayout";

import { useForm } from '@inertiajs/react';

export default function Edit({ customer }) {
    const { data, setData, put, processing, errors } = useForm({
        name: customer.name || '',
        email: customer.email || '',
        phone: customer.phone || '',
        address: customer.address || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/customers/${customer.id}`);
    };

    return (
        <AppLayout title="Покупатели">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Редактировать покупателя</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Имя"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                />
                <Input
                    label="Email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                />
                <Input
                    label="Телефон"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    error={errors.phone}
                />
                <Textarea
                    label="Адрес"
                    value={data.address}
                    onChange={(e) => setData('address', e.target.value)}
                    error={errors.address}
                />
                <Button type="submit" color="primary" disabled={processing}>
                    Обновить
                </Button>
                </form>
            </div>
        </AppLayout>
    );
}