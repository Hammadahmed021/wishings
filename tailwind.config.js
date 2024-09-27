/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#FEA500",
        secondary: "#BC4C24",
        accent: "#FEA5001A",
        background: "#ffffff",
        surface: "#ffffff",
        text: "#1A1B1C",
        muted: "#5C6671",
        'btn-gradient-start': '#FEA500',
        'btn-gradient-end': '#BC4C24',
        // error: '#e3342f',
        // success: '#38a169',
      },
      fontSize: {
        h1: [
          "clamp(2.65rem, 3vw + 1rem, 3.75rem)",
          {
            lineHeight: "clamp(2.75rem, 4vw + 1rem, 4rem)",
            letterSpacing: "-0.01em",
            fontWeight: "700",
            
          },
        ],
        h2: [
          "clamp(2.5rem, 3vw + 1rem, 3.75rem)",
          {
            lineHeight: "clamp(2.75rem, 4vw + 1rem, 4rem)",
            letterSpacing: "-0.02em",
            fontWeight: "700",
            
          },
        ],
        h3: [
          "clamp(1.875rem, 3vw + 1rem, 3.125rem)",
          {
            lineHeight: "clamp(2.125rem, 4vw + 1rem, 3.375rem)",
            letterSpacing: "-0.02em",
            fontWeight: "700",
            
          },
        ],
        "small": [
          "clamp(0.875rem, 1.5vw + 0.5rem, 1rem)",
          {
            lineHeight: "clamp(1.2, 1.5vw + 0.5, 1.5)",
            // letterSpacing: "-0.02em",
          },
        ],
        "medium": [
          "clamp(1rem, 2vw + 0.5rem, 1.25rem)",
          {
            lineHeight: "clamp(1.4, 1.5vw + 0.5, 1.6)",
            // letterSpacing: "-0.02em",
          },
        ],
        "large": [
          "clamp(1.25rem, 3vw + 0.5rem, 1.5rem)",
          {
            lineHeight: "clamp(1.5, 2vw + 0.5, 1.55)",
            // letterSpacing: "-0.02em",
          },
        ],
      },
    },
  },
  plugins: [],
};
