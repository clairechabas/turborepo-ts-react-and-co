import type { Config } from 'tailwindcss';
import sharedConfig from '@mt/config-css/tailwind';

const config: Pick<Config, 'content' | 'presets'> = {
    presets: [sharedConfig],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
};

export default config;
