<template>
  <span v-if="false" />
</template>

<script>
  // Test on: https://cards-dev.twitter.com/validator
  export default {
    props: {
      title: {
        type: String,
        default: 'Nuxt'
      },
      description: {
        type: String,
        default: 'Nuxt, the intuitive Vue Framework'
      },
      image: {
        type: String,
        default: 'nuxt.png'
      },
      createdAt: {
        type: Number,
        default: null
      },
      updatedAt: {
        type: Number,
        default: null
      },
      tags: {
        type: Array,
        default: () => ['Nuxt']
      },
      author: {
        type: String,
        default: 'Nuxt Team'
      }

    },

    head() {
      return {
        meta: [
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@nuxt_js' },
          { name: 'twitter:title', content: this.title },
          {
            name: 'twitter:description',
            content: this.description
          },
          {
            name: 'twitter:image',
            content: this.image
          },
          { name: 'twitter:image:alt', content: this.title },
          {
            property: 'article:published_time',
            content: this.createdAt
          },
          {
            property: 'article:modified_time',
            content: this.updatedAt
          },
          {
            property: 'article:tag',
            content: this.tags ? this.tags.toString() : ''
          },
          { name: 'twitter:label1', content: 'Written by' },
          { name: 'twitter:data1', content: this.author },
          { name: 'twitter:label2', content: 'Filed under' },
          {
            name: 'twitter:data2',
            content: this.tags ? this.tags.toString() : ''
          }
        ]
      }
    }
  }
</script>
