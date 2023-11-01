import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme.js'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				sans: [
					'Nunito Sans',
					'Nunito Sans Fallback',
					...defaultTheme.fontFamily.sans,
				],
			},
		},
	},
} satisfies Config
