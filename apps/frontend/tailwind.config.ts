import type { Config } from 'tailwindcss';
import sharedConfig from '@base/config-css/tailwind';

const config: Pick<Config, 'content' | 'presets'> = {
    presets: [sharedConfig],
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    ],
};

export default config;
