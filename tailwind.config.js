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
        },
      },
      opacity: {
        0: '0',
        1: '0.2',
        2: '0.4',
        3: '0.6',
        4: '0.8',
        5: '1',
      },
    },
  },
  plugins: [],
}
