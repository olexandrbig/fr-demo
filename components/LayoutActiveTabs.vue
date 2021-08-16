<template>
  <section class="active-tabs">
    <ul class="active-tab-list">
      <li class="active-tab">
        <a href class="active-tab-link">
          <span class="active-tab-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>Dashboard</span>
        </a>
        <span class="active-tab-close pointer"><fa :icon="['fas','times']" /></span>
      </li>
      <li class="active-tab active">
        <a href class="active-tab-link">
          <span class="active-tab-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>Active item details</span>
        </a>
        <span class="active-tab-close pointer"><fa :icon="['fas','times']" /></span>
      </li>
      <li class="active-tab">
        <a href class="active-tab-link">
          <span class="active-tab-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>Other John view</span>
        </a>
        <span class="active-tab-close pointer"><fa :icon="['fas','times']" /></span>
      </li>
      <li class="active-tab">
        <a href class="active-tab-link">
          <span class="active-tab-icon"><fa :icon="['fas','lightbulb']" /></span>
          <span>More available tabs</span>
        </a>
        <span class="active-tab-close pointer"><fa :icon="['fas','times']" /></span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LayoutActiveTabs',
  methods: {
    mainHeight () {
      if (process.client) {
        return (window && window.innerHeight) - 80
      }
    }
  }
}
</script>
<style>
.active-tabs{
  display: block;
  float: left;
  width: 100%;
  background: #ffffff;
}
.active-tab-list{
  list-style: none;
  padding: 0;
  float: left;
}
.active-tab{
  margin: 0 0 0 -1px;
  display: inline-block;
  background: #ffffff;
  padding: 0 10px;
  float: left;
  border-right: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  position: relative;
}
.active-tab-link{
  text-decoration: none;
  color: #555555;
  height: 30px;
  line-height: 30px;
  padding: 0 5px;
  display: inline-block;
}
.active-tab.active{
  background: #f5f5f5;
  font-weight: 700;
}
.active-tab.active:after{
  content:' ';
  display: block;
  width: 100%;
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  background: #f5f5f5;
}
.active-tab.active .active-tab-link{
  background: #f5f5f5;
  font-weight: 700;
  color: #333333;
}
.active-tab-icon{
  color: #777777;
  vertical-align: middle;
}
.active-tab-close{
  color: #333333;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  padding: 0 5px;
}
</style>
