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
        base: '.9375rem',
      },
    },
  },
  variants: {
    extend: {},
  },
}
