/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        buttonBlue: "#003E59",
        mainbg: "#DDEAF8",
        inputborder:"#2C5997"
      },
      height: {
        customHeight: "60%",
        inputHeight:"53px",
        logoHeight:"83px",
        fullheight:"1080px"
      },
      width: {
        customWidth: "75%",
        inputWidth:"494px",
        logoWidth:"95px",
        fullwidth:"1705px"
      },
      fontSize: {
        login: "30px",
        loginbtn:"25px"
      },
    },
  },
  plugins: [],
}
