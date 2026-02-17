/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        fairsay: {
          blue: '#1E3A8A',
          teal: '#0F766E',
          gray: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E5E7EB',
            300: '#99A1AF',
            400: '#6A7282',
            500: '#4A5565',
            900: '#333333',
          },
        },
      },
    },
  },
  plugins: [],
}
