export default {
  content: ["./index.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        asics: {
          blue: "#011E62",
          gold: "#E8CB7F",
          red: "#E05038",
          sky: "#4780D1",
          green: "#00B387"
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', "Arial", "sans-serif"]
      },
      boxShadow: {
        asics: "0 12px 18px -6px rgba(0, 0, 0, 0.3)"
      }
    }
  },
  plugins: []
};
