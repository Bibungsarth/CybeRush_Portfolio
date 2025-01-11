// @copyright 2024 cybeRush
// @license Apache-2.0

/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'sans': ['Inter', 'sans-serif']
    },
  },
  plugins: [tailwindScrollbar],
}