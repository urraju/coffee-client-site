/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        philospar :"'Philosopher','sans-serif'",
        yantraman : "'Yantramanav', 'sans-serif'"
      },
      backgroundImage : {
        backgroud :" url('https://i.ibb.co/VQQ6zgZ/15.jpg')",
        backgroudBanner :" url('https://i.ibb.co/CMWcxNs/3.png')",
        backgroudHomeCard :" url('https://i.ibb.co/dKkYHDw/1.png')",
        backgroudFooterUp :" url('https://i.ibb.co/3zPVX2G/13.jpg')",
        backgroudFooterDown :" url('https://i.ibb.co/Ryp2Y3k/24.jpg')",

      }
    },
  },
  plugins: [],
}

 