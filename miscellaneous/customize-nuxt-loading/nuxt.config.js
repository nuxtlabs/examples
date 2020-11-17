export default {
  /*
   ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
   */
  components: true,

  /*
   ** Global CSS - https://nuxtjs.org/docs/2.x/features/configuration#pre-processors
   */
  css: ['~/assets/main.css'],

  /*
   ** Set ssr to false to see the loading indicator - https://nuxtjs.org/docs/2.x/features/rendering-modes
   */
  // ssr: 'false',

  /*
   ** modifying the loading indicator for spa  - https://nuxtjs.org/docs/2.x/features/loading
   */
  loadingIndicator: {
    name: 'chasing-dots',
    color: 'purple',
    background: 'green',
  },

  /*
   ** modifying the default loader
   */
  loading: {
    color: 'DodgerBlue',
    height: '10px',
    continuous: true,
    duration: 3000,
  },

  /*
   ** importing a custom loader. this will overwrite the default loader above
   */
  loading: '~/components/LoadingBar.vue',
}
