<template>
  <aside class="module-nav" :style="{height:`${mainHeight()}px`}">
    <div class="module-nav-inner">
      <h1 class="module-nav-title">Module A</h1>
    </div>
    <ul class="module-features">
      <li class="module-feature">
        <a href class="feature-link">
          <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>Overview</span>
        </a>
      </li>
      <li class="module-feature">
        <a href class="feature-link">
          <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>Dashboard</span>
          <span class="feature-expand pointer"><fa :icon="['fas','chevron-up']" /></span>
        </a>
        <ul class="module-sublist list-unstyled">
          <li class="module-subfeature">
            <a href class="feature-link">
              <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="module-subfeature">
            <a href class="feature-link">
              <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="module-subfeature">
            <a href class="feature-link">
              <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="module-subfeature">
            <a href class="feature-link">
              <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
              <span>Dashboard</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="module-feature">
        <a href class="feature-link">
          <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>Dashboard</span>
          <span class="feature-expand pointer"><fa :icon="['fas','chevron-right']" /></span>
        </a>
      </li>
      <li class="module-feature">
        <a href class="feature-link">
          <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>Dashboard</span>
        </a>
      </li>
      <li class="module-feature">
        <a href class="feature-link">
          <span class="feature-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>Dashboard</span>
          <span class="feature-expand pointer"><fa :icon="['fas','chevron-right']" /></span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'LayoutModuleNav',
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
.module-nav{
  display: block;
  float: left;
  height: 100%;
  min-height: 100%;
  width: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff;
  border-right: 1px solid #cccccc;
}
.module-nav-title{
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 20px;

}
.module-nav-inner{
  padding: 20px;
}
.module-features{
  list-style: none;
  padding: 0;
  float: left;
  width: 100%;
}
.module-feature{
  display: inline-block;
  background: #ffffff;
  float: left;
  border-bottom: 1px solid #cccccc;
  position: relative;
  width: 100%;
}
.module-features > .module-feature > .feature-link {
  text-transform: uppercase;
  font-weight: 700;
}
.module-subfeature{
  display: inline-block;
  float: left;
  position: relative;
  width: 100%;
}
.feature-link{
  text-decoration: none;
  color: #555555;
  line-height: 30px;
  padding: 10px 20px;
  display: inline-block;
  width: 100%;
}
.feature-link:hover{
  background: #f5f5f5;
}
.module-sublist .feature-link{
  padding-left: 40px;
}
.module-sublist{
  padding: 0;
}
.feature-icon{
  font-size: 1.3em;
  vertical-align: middle;
}
.feature-expand{
  float: right;
}
</style>
