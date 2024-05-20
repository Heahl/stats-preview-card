import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 45%)',
        'main-p': 'hsla(0, 0%, 100%, 0.6)',
        'stat-h': 'hsla(0, 0%, 100%, 0.5)'
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
