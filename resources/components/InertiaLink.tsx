import React from 'react';

import { Link as InertiaLinkLocal } from '@inertiajs/react';
import { Link as NextUILink} from "@nextui-org/react";
import { Button as NextUIButton } from "@nextui-org/react";

interface InertiaLinkProps {
    href: any;
    children: any;
    [key: string]: any;
}
const InertiaLink = ({ href, children, ...props }: InertiaLinkProps) => {
    return (
        <NextUILink as={InertiaLinkLocal} href={href} {...props}>
            {children}
        </NextUILink>
    );
};

const InertiaLinkButton = ({ href, children, ...props }: InertiaLinkProps) => {
    return (
        <NextUIButton
            as={InertiaLinkLocal}
            href={href}
            {...props}
        >
            {children}
        </NextUIButton>
    );
  };

export {
    InertiaLink,
    InertiaLinkButton
};