module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
