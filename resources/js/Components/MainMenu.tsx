import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

interface MainMenuProps {
    title: string;
}

export default function MainMenu({ title }: MainMenuProps) {
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">DGCRM</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/dashboard">
                        Панель
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link color="foreground" href="/customers">
                        Клиенты
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/deals">
                        Сделки
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="/logout" variant="flat">
                        Выйти
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}