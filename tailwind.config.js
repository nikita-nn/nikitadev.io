/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 .5rem #fff, inset 0 0 .5rem #fff, 0 0 1rem var(--neon-border-color), inset 0 0 1rem var(--neon-border-color), 0 0 1rem var(--neon-border-color), inset 0 0 1rem var(--neon-border-color)",
      },
    },
  },
  plugins: [],
};
