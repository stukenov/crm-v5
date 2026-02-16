import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { InertiaLink, InertiaLinkButton } from "@Components/InertiaLink";
import AppLayout from "@/Layouts/AppLayout";

export default function Dashboard() {
    return (
        <AppLayout title="Панель управления">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-6">Панель управления CRM</h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <MetricCard title="Клиенты" value="1,234" />
                    <MetricCard title="Сделки" value="56" />
                    <MetricCard title="Задачи" value="89" />
                    <MetricCard title="Доход" value="$12,345" />
                </div>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardBody>
                            <h2 className="text-xl font-semibold mb-4">Последние действия</h2>
                            {/* Здесь будет компонент со списком последних действий */}
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <h2 className="text-xl font-semibold mb-4">Предстоящие задачи</h2>
                            {/* Здесь будет компонент со списком предстоящих задач */}
                        </CardBody>
                    </Card>
                </div>

                <div className="mt-8 flex justify-end">
                    <Button
                        as={InertiaLink}
                        href="/clients"
                        color="primary"
                    >
                        Управление клиентами
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}

function MetricCard({ title, value }: { title: string, value: string }) {
    return (
        <Card className="w-full">
            <CardBody>
                <p className="font-semibold">{title}</p>
                <p className="text-2xl">{value}</p>
            </CardBody>
        </Card>
    );
}