/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // برای App Router
    "./pages/**/*.{js,ts,jsx,tsx}",    // اگر صفحات pages هم داشته باشی
    "./components/**/*.{js,ts,jsx,tsx}" // کامپوننت‌ها
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
