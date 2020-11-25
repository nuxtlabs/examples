export default {
  /*
   ** Head Property - https://nuxtjs.org/docs/2.x/features/meta-tags-seo
   */
  head: {
    title: 'Nuxt',
    titleTemplate: 'My amazing Nuxt application | %s',
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
      },
      
      // twitter: https://cards-dev.twitter.com/validator
      { name: 'twitter:site', content: 'nuxt_js' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://nuxtjs.org'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Nuxt'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Nuxt, the intuitive Vue framework'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/nuxt.png'
      },

      // opengraph: https://developers.facebook.com/tools/debug/
      { property: "og:site_name", content: "Nuxt" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://nuxtjs.org",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Nuxt",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Nuxt, the intuitive Vue framework",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/nuxt.png",
      },
      { property: "og:image:width", content: "740" },
      { property: "og:image:height", content: "300" },
    ],
    // canonical
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `https://nuxtjs.org/examples`,
      },
    ],
  }
}
