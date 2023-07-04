import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['./app/**/*.{js,jsx,ts,tsx}'],
  globalCss: {
    html: {
      fontFamily: 'system-ui',
      '@media (prefers-color-scheme: dark)': {
        colorScheme: 'dark',
      },
    },
    a: {
      textDecoration: 'none',
    },
  },
})
