import { createLazyFileRoute } from '@tanstack/react-router';
import { Home } from '../screens';

export const Route = createLazyFileRoute('/')({
    component: Home,
});
