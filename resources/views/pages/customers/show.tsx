import { Card, Button } from "@nextui-org/react";
import { Link } from '@inertiajs/react';

export default function Show({ customer }) {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Информация о покупателе</h1>
            <Card>
                <Card>
                    <h4>{customer.name}</h4>
                    <p>Email: {customer.email}</p>
                    <p>Телефон: {customer.phone || 'Не указан'}</p>
                    <p>Адрес: {customer.address || 'Не указан'}</p>
                </Card>
                <Card>
                    <Link href={route('customers.edit', customer.id)}>
                        <Button color="primary">Редактировать</Button>
                    </Link>
                    <Link href={route('customers.index')}>
                        <Button color="secondary">Назад к списку</Button>
                    </Link>
                </Card>
            </Card>
        </div>
    );
}