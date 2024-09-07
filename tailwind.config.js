import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: { extend: {} },
    daisyui: { themes: ['winter', 'night'], darkTheme: 'night' },
    plugins: [daisyui, typography]
};
