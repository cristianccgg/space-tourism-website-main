/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "home-mobile": "url('/images/home/background-home-mobile.jpg')",
        "home-desktop": "url('/images/home/background-home-desktop.jpg')",
        "crew-mobile": "url('/images/crew/background-crew-mobile.jpg')",
        "crew-desktop": "url('/images/crew/background-crew-desktop.jpg')",
        "destination-mobile":
          "url('/images/destination/background-destination-mobile.jpg')",
        "destination-desktop":
          "url('/images/destination/background-destination-desktop.jpg')",
        "tech-mobile":
          "url('/images/technology/background-technology-mobile.jpg')",
        "tech-desktop":
          "url('/images/technology/background-technology-desktop.jpg')",
      },
      fontFamily: {
        roboto: ["Cormorant Garamond"],
      },
    },
  },
  plugins: [],
};
