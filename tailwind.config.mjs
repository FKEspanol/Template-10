/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#AB4542",
          secondary: "#97877F",
          neutral: "#232A3A",
          "base-100": "#F8F6F5",
          info: "#111319",
          success: "#698F4C",
          warning: "#E67F14",
          error: "#F44336",
        },
      },
    ],
  },
};
