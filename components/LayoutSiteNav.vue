<template>
  <aside class="site-nav" :style="{height:`${mainHeight()}px`}">
    <Logo></Logo>
  </aside>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  name: 'LayoutSiteNav',
  components: {
    Logo
  },
  methods: {
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 30
      }
    }
  }
}
</script>
<style>
.site-nav{
  display: block;
  float: left;
  height: 100%;
  min-height: 100%;
  width: 60px;
  overflow-y: auto;
  overflow-x: hidden;
  background: rebeccapurple;
}
</style>
