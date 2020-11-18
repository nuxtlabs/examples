export default {
  /*
   ** Head Property - https://nuxtjs.org/docs/2.x/features/meta-tags-seo
   */
  head: {
    title: 'Nuxt.js',
    titleTemplate: 'My amazing Nuxt.js application | %s',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'The amazing Nuxt.js application that teaches me all the cool features of Nuxt.js'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
      }
    ]
  }
}
