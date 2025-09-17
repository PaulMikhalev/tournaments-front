import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif']
      },
      backgroundImage: {
        'home-gradient': 'linear-gradient(175deg, rgba(16,24,40,1) 0%, rgba(30,41,57,1) 50%, rgba(16,24,40,1) 100%)'
      },
      colors: {
        ebony: '#101828',
        mirage: '#1E2939',
        oxford: '#364153'
      }
    }
  },
  plugins: []
} satisfies Config


