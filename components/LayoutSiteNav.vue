<template>
  <aside class="site-nav" :style="{height:`${mainHeight()}px`}">
    <div class="text-center">
      <Logo class="site-logo" />
    </div>
    <ul class="site-modules">
      <li class="site-module">
        <a href class="module-link">
          <span class="module-icon"><fa :icon="['fas','search']" /></span>
        </a>
      </li>
      <li class="site-module active">
        <a href class="module-link">
          <span class="module-icon"><fa :icon="['fas','book-open']" /></span>
        </a>
      </li>
      <li class="site-module">
        <a href class="module-link">
          <span class="module-icon"><fa :icon="['fas','crown']" /></span>
        </a>
      </li>
      <li class="site-module">
        <a href class="module-link">
          <span class="module-icon"><fa :icon="['fas','university']" /></span>
        </a>
      </li>
    </ul>
    <ul class="site-modules site-modules-bottom">
      <li class="site-module">
        <a href class="module-link">
          <span class="module-icon"><fa :icon="['fas','users']" /></span>
        </a>
      </li>
      <li class="site-module">
        <a href class="module-link">
          <span class="module-icon"><fa :icon="['fas','heartbeat']" /></span>
        </a>
      </li>
      <li class="site-module">
        <a href class="module-link">
          <span class="module-icon"><fa :icon="['fas','sign-out-alt']" /></span>
        </a>
      </li>
    </ul>
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
.site-logo{
  margin: 20px auto 24px;
}
.site-nav{
  display: block;
  float: left;
  height: 100%;
  min-height: 100%;
  width: 60px;
  overflow-y: auto;
  overflow-x: hidden;
  background: rebeccapurple;
  position: relative;
}
.site-modules{
  list-style: none;
  padding: 0;
  float: left;
  width: 100%;
  text-align: center;
}
.site-modules-bottom{
  position: absolute;
  bottom: 0;
  left: 0;
}
.site-modules-bottom .site-module:first-child{
  border-top: 1px solid #cccccc;
}
.site-modules-bottom .site-module:last-child{
  border-bottom: none;
}
.site-module{
  display: inline-block;
  background: transparent;
  float: left;
  border-bottom: 1px solid #cccccc;
  position: relative;
  width: 100%;
}
.module-link{
  text-decoration: none;
  color: #ffffff;
  line-height: 30px;
  padding: 10px 20px;
  display: inline-block;
  width: 100%;
}
.site-module.active .module-link,
.module-link:hover{
  background: rgba(255,255,255,0.2);
}
.module-icon{
  font-size: 1.3em;
  vertical-align: middle;
  text-align: center;
}
</style>
