import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xsm': '300px',
      'xsm': '446px',
      'sm': '640px',
      'xmd': '560px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      
      //  @media (min-width: 576px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // fontFamily:{
    //   sans: ['Montserrat', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    //   dacing:["Dancing Script", 'cursive'],
    //   // roboto:['var(--font-roboto)']

    // },
  },
  plugins: [],
};
export default config;
