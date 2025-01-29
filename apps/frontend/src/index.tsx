import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@mt/config-css/config.css';
import { assertIsDefined } from '@mt/utils-ts';
import { AppLayout } from './components';

/** Render the application */
const rootElement = document.getElementById('root');

assertIsDefined(rootElement);

if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <StrictMode>
            <AppLayout />
        </StrictMode>,
    );
}
