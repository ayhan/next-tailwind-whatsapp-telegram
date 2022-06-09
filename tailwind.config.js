module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wp: {
          primary: '#00a884',
          white: {
            100: '#e9edef',
            200: '#aebac1',
          },
          secondary: {
            100: '#202c33',
            200: '#111b21',
          }
        }
      },
    },
  },
  plugins: [],
}
