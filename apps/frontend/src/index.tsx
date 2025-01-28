import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@base/config-css/theme.css';
import { assertIsDefined } from '@base/utils-ts';

/** Tanstack Router */
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import AppLayout from './components/AppLayout';

const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

/** Render the application */
const rootElement = document.getElementById('root');

assertIsDefined(rootElement);

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <StrictMode>
            <AppLayout>
                <RouterProvider router={router} />
            </AppLayout>
        </StrictMode>,
    );
}
