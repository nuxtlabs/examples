export default {
    /*
    ** Activate components - https://nuxtjs.org/docs/2.x/directory-structure/components#components-module
    */
    components: true,

    /*
    ** Global CSS - https://nuxtjs.org/docs/2.x/features/configuration#pre-processors
    */
    css: [
        '~/assets/main.css'
    ],

    /*
    ** Router property -  https://nuxtjs.org/docs/2.x/features/file-system-routing#the-router-property
    */
    router: {
        // linkActiveClass: 'my-custom-active-link',
        // linkExactActiveClass: 'my-custom-exact-active-link',
        linkPrefetchedClass: 'nuxt-link-prefetched'
    } 
}