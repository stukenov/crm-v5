import React from "react";
import { Head } from "@inertiajs/react";
import MainMenu from "@/Components/MainMenu";

interface AppLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function AppLayout({ title, children }: AppLayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <MainMenu title={title} />
            <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </>
    );
}