/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        color:{
            'primary': 'var(--color-primary)',
            'secondary': 'var(--color-secondary)',
            'background': 'var(--bg-color)',
            'text': 'var(--text-color)',
        },
        fontFamily: {
          'title' : 'var(--font-title)',
          'mini_title' : 'var(--font-mini-title)',
          'text': 'var(--font-text)',
        },
        fontSize: {
            'title': 'var(--font-size-title)',
            'mini_title': 'var(--font-size-mini-title)',
            'text': 'var(--font-size-text)',
        }
    },
  },
  plugins: [],
}