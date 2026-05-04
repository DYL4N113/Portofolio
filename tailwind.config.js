/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkBg: '#0f0f0f',
				darkSurface: '#1a1a1a',
				darkCard: '#252525',
				darkBorder: '#333333',
				darkText: '#e0e0e0',
				darkTextSecondary: '#a0a0a0',
			},
			backdropBlur: {
				sm: '4px',
			  },
			
			
		  },
		},
	plugins: [],
}
