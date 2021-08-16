<template>
  <div>
    <h2>
      Active item details
    </h2>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  head () {
    return {
      title: this.$t('index.title'),
      meta: [
        { hid: 'og:site_name', name: 'og:site_name', content: this.$t('index.title') },
        { hid: 'og:url', property: 'og:url', content: this.$store.state.baseUrl + this.$route.path },
        { hid: 'name', itemprop: 'name', content: this.$t('index.title') },
        { hid: 'og:title', property: 'og:title', content: this.$t('index.title') },
        { hid: 'description', name: 'description', content: this.$t('index.description') },
        { hid: 'descriptionItem', itemprop: 'description', content: this.$t('index.description') },
        { hid: 'og:description', property: 'og:description', content: this.$t('index.description') },
        { hid: 'og:image', property: 'og:image', content: this.$store.state.baseUrl + require('~/assets/pic/logo.png') }
      ]
    }
  }
}
</script>
