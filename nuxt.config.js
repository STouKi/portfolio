export default {
  target: 'static',
  head: {
    title: 'Quentin Sastourné - Porfolio',
    htmlAttrs: {
      lang: 'fr',
			class: 'dark'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Quentin Sastourné'},
      { name: 'copyright', content: 'Quentin Sastourné'},
      { name: 'description', content: 'Portfolio de Quentin Sastourné, développeur web et graphiste' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/scss/style'
  ],

	styleResources: {
		scss: ['@/assets/scss/_variables.scss']
	},

  buildModules: [
    '@nuxtjs/tailwindcss',
		'@nuxtjs/style-resources',
		'@nuxt/components',
		'nuxt-lazysizes'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'nuxt-mail'
  ],

  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      target: 'https://back.test/mail/send',
      pathRewrite: { '^/api/': '' },
      changeOrigin: true
    }
  },

  mail: {
    smtp: {
      host: "smtp.office365.com",
      port: 587,
      auth: {
        user: "sastourne.quentin@hotmail.fr",
        pass: "Upru3O#R39MK"
      }
    }
  },

	lazySizes: {
		extendAssetUrls: {
			img: ['src', 'srcset', 'data-src', 'data-srcset'],
			source: ['src', 'srcset', 'data-src', 'data-srcset'],

			// Example for a custom component
			AppImage: ['source-md-url', 'image-url'],
		},
	},

	components: true
}
