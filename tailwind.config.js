module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				'primary': 'var(--primary)',

				'gradient': 'var(--gradient)',

				'shade-1': 'var(--shade-1)',
				'shade-2': 'var(--shade-2)',

				'tint-1': 'var(--tint-1)',
				'tint-2': 'var(--tint-2)',
			}
		},
  },
  variants: {
    extend: {
			padding: ['hover']
		},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
