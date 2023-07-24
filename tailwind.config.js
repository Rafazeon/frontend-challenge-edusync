/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1440px",
      },
    },

    extend: {
      screens: {
        mobile: "320px",
        tablet: "768px",
        desktop: "1440px",
      },

      lineHeight: {
        '40': '40px',
        '58': '58px'
      },

      width: {
        '280': '280px',
        '590': '590px'
      },
      height: {
        '98': '26rem',
        '112': '112px',
        '268': '268px'
      },

      colors: {
        "orange-edusync-100": "#FFF6E8",
        "orange-edusync-200": "#FFE1B5",
        "orange-edusync": "#FBAB34",
        "gray-edusync": "#8C8A97",
        "green-edusync": "#1BD171",
        "green-edusync-700": "#149E55",
        "red-edusync": "#EC3237",
        "red-edusync-700": "#A12226",
        "base-edusync-500": "#8C8A97",
        "base-edusync": "#5D6670",
        "solutions-edusync": "#F7F7F7"
      },

      backgroundImage: {
        "bg-footer": "url('/img/bg-footer.svg')",
      },

      fontSize: {
        "12": "12px",
        "md": "16px",
        "20": "20px",
        "32": "32px",
        "40": "40px"
      },
    },
  },
  plugins: [],
};
