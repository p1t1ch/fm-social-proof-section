const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        light: 'hsl(334, 80%, 67%)',
        DEFAULT: 'hsl(300, 43%, 22%)',
      },
      neutral: {
        light: 'hsl(301, 23%, 96%)',
        DEFAULT: 'hsl(0, 0%, 100%)',
        dark: 'hsl(301, 10%, 53%)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Spartan', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: '.8125rem',
        base: '.9375rem',
        '4xl': ['2rem', 1],
      },
      maxWidth: {
        md: '21.875rem',
        lg: '27.8125rem',
        xl: '69.375rem',
      },
      gridTemplateColumns: {
        review: '2.5rem 1fr',
      },
      margin: {
        18: '4.5rem',
      },
      gap: {
        8: '1.875rem',
      },
      letterSpacing: {
        blockquote: '-0.23px',
      },
    },
  },
  variants: {
    extend: {},
  },
}
