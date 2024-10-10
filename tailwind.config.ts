import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple: '#1F0954',
        customDarkerPink: '#BC0731',
        customPink: '#ED0A3F',
        customLighterPink: '#F7406B',
      },
    },
  },
  plugins: [

    require('preline/plugin'),
  ],
};
export default config;
