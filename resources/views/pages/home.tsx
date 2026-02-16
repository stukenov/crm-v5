import React from "react";
import { Card, CardFooter, CardBody, Button } from "@nextui-org/react";
import { InertiaLink } from "@Components/InertiaLink";
import AppLayout from "@/Layouts/AppLayout";

export default function Welcome({ lirnui }: { lirnui: string }) {
    return (
        <AppLayout title={lirnui}>
            <div className="container mx-auto px-4 py-8">
                <Card className="w-full max-w-md mx-auto">
                    <CardBody>
                        <p className="text-center mb-4">Добро пожаловать на нашу домашнюю страницу!</p>
                    </CardBody>
                    <CardFooter className="justify-center">
                        <Button
                            as={InertiaLink}
                            href="/dashboard"
                            color="primary"
                        >
                            Перейти в панель управления
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </AppLayout>
    );
}