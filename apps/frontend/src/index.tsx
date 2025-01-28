import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Application from './Application.tsx';
import { assertIsDefined } from '@base/utils-ts';

const rootElement = document.getElementById('root');
assertIsDefined(rootElement);

createRoot(rootElement).render(
    <StrictMode>
        <Application />
    </StrictMode>,
);
