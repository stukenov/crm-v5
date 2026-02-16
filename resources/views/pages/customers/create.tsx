import React, { useState } from "react";
import { Input, Button, Textarea } from "@nextui-org/react";
import { useForm , router} from '@inertiajs/react';
import AppLayout from "@/Layouts/AppLayout";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/customers');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <AppLayout title="Покупатели">
            <div className="container mx-auto p-4 max-w-lg">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Добавить покупателя</h1>
                    <Button onClick={() => router.visit('/customers')} color="secondary" disabled={processing}>
                        Отменить
                    </Button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Имя"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        helperText={errors.name}
                        status={errors.name ? 'error' : 'default'}
                        fullWidth
                    />
                    <Input
                        label="Email"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        helperText={errors.email}
                        status={errors.email ? 'error' : 'default'}
                        fullWidth
                    />
                    <Input
                        label="Телефон"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        helperText={errors.phone}
                        status={errors.phone ? 'error' : 'default'}
                        fullWidth
                    />
                    <Textarea
                        label="Адрес"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        helperText={errors.address}
                        status={errors.address ? 'error' : 'default'}
                        fullWidth
                    />
                    <Button type="submit" color="primary" disabled={processing} fullWidth>
                        Сохранить
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}