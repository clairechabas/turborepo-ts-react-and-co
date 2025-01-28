import { createLazyFileRoute } from '@tanstack/react-router';
import { About } from '../screens';

export const Route = createLazyFileRoute('/about')({
    component: About,
});
