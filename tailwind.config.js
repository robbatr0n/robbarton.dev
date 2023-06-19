/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		`./src/pages/**/*.{js,jsx,ts,tsx}`,
		`./src/components/**/*.{js,jsx,ts,tsx}`,
	],
	theme: {
		fontFamily: {
			title: ['Nova Mono', 'sans-serif'],
			body: ['Roboto Mono Variable', ' sans-serif'],
		},
	},

	plugins: [require('@tailwindcss/typography')],
};
