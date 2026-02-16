import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/react";

import '../css/app.css';

createInertiaApp({
    // @ts-ignore
	resolve: (name) =>
		importPageComponent(name, import.meta.glob("../views/pages/**/*.tsx")),
    setup({ el, App, props }) {
        createRoot(el).render(
			<NextUIProvider>
				<main>
					<App {...props} />
				</main>
			</NextUIProvider>
		)
    },
});

// Allow dot notation
// i.e: path.to.react.component
function importPageComponent(name: string, pages: Record<string, any>) {
	// eslint-disable-next-line no-restricted-syntax
	for (const path in pages) {
		if (path.endsWith(`${name.replaceAll(".", "/")}.tsx`)) {
			return typeof pages[path] === "function" ? pages[path]() : pages[path];
		}
	}

	throw new Error(`Page not found: ${name}`);
}