/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "alfa-slab": ['"Alfa Slab One"', "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'sm':{max: '480px'},
        'md':{max: '768px'},
        'lg':{min: '1024px'}
      },
    },
  },
  plugins: [],
};
