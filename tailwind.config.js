/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundImage: {
        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
        "crew-mobile": "url('/assets/crew/background-crew-mobile.jpg')",
        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destination/background-destination-mobile.jpg')",
        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",
        "tech-mobile":
          "url('/assets/technology/background-technology-mobile.jpg')",
        "tech-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
