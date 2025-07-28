/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'rgb(51, 65, 85)',
            lineHeight: '1.7',
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              marginTop: '0',
              marginBottom: '1rem'
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem'
            },
            p: {
              marginTop: '1.5rem',
              marginBottom: '1.5rem'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}