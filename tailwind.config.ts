import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			"custom-blue" : "#496989",
			"custom-green" : "#58A399",
			"custom-dark-blue" : "#192A3E",
			"custom-gray" : "#333333CC",
			"custom-input-bg": "#F4F4F4",
			"custom-white" : "#F3F6F8",
			"custom-red" : "#FFD7D7",
			"custom-wheat" : "#F7E7D7",
  		},
		fontFamily: {
			"inter": ['var(--font-inter)'],
			"montserrat": ['var(--font-montserrat)'],
			"mulish": ['var(--font-mulish)'],
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
