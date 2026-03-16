/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          "custom-gradient-blue":
            "linear-gradient(296deg, #222 0%, #0355a5 101.24%)",
        },
        screens: {
          phone: { max: "833px" },
          tablet: { min: "833px", max: "1279px" },
          desktop: { min: "1280px" },
          largeDesktop: { min: "1536px" },
        },
        colors: {
          primary: {
             main: "#ed400b",
            hover: "#d45131",
            surface: "#FAE1D4",
            pressed: "#733514",
            border: "#F7CDB7",
            focus: "#E66927/20",
          },
          secondary: {
            main: "#E04C3F",
            hover: "#95332A",
            surface: "#F9DBD9",
            pressed: "#4B1915",
            border: "#F5C3BF/40",
            focus: "#E04C3F/20",
          },
          additional: {
            yellow: "#FEC802",
            dark: "#222222",
            blue: "#0355A5",
            bluehover: "#04498f",
            smoothblue: "rgba(3, 85, 165, 0.10)",
          },
          neutral: {
            900: "#1C1917",
            800: "#1E293B",
            700: "#334155",
            600: "#475569",
            500: "#64748B",
            400: "#94A3B8",
            300: "#CBD5E1",
            200: "#E2E8F0",
            100: "#F1F5F9",
            50: "#FAFAFA",
            gray: "#e4e4e4",
          },
        },
        
        fontFamily: {
          sans: ["var(--font-manrope)", "ui-sans-serif", "system-ui", "sans-serif"],
        },
      },
    },
    plugins: [require("tailwind-scrollbar-hide")],
  };