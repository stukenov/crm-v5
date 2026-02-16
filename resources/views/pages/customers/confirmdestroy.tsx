import React from 'react';
import { Button, Card } from "@nextui-org/react";
import { useForm, router } from '@inertiajs/react';

interface ConfirmDestroyProps {
    customer: {
        id: number;
        name: string;
    };
}

export default function ConfirmDestroy({ customer }: ConfirmDestroyProps) {
    const handleConfirm = () => {
        router.delete(route('customers.destroy', customer.id));
    };

    const handleCancel = () => {
        router.get(route('customers.index'));
    };

    return (
        <div className="container mx-auto p-4">
            <Card>
                <h4>Подтверждение удаления</h4>
                <p>Вы уверены, что хотите удалить покупателя {customer.name}?</p>
                <div className="flex justify-end space-x-2 mt-4">
                    <Button color="danger" onClick={handleConfirm}>Удалить</Button>
                    <Button color="secondary" onClick={handleCancel}>Отмена</Button>
                               </div>
            </Card>
        </div>
    );
}