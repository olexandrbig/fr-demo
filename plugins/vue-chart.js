import Vue from 'vue'
import { Bar } from 'vue-chartjs'

Vue.component('BarChart', {
  extends: Bar,
  // eslint-disable-next-line
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
