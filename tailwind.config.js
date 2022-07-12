module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.6rem',
      },
      keyframes: {
        wiggleScale: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
            transform: 'scale(1.08)',
          },
          '50%': { transform: 'rotate(6deg)' },
        }
      },
      fontFamily: {
        eduSa: ['Edu SA Beginner', 'cursive']
      },
      colors: {
        wp: {
          primary: "#00a884",
          white: {
            100: "#e9edef",
            200: "#aebac1",
          },
          secondary: {
            100: "#202c33",
            200: "#111b21",
            300: "#374045",
            400: "#2a3942"
          },
        },
        telegram: {
          primary: '#0088cc'
        }
      },
      opacity: {
        0: "0",
        1: "0.2",
        2: "0.4",
        3: "0.6",
        4: "0.8",
        5: "1",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
