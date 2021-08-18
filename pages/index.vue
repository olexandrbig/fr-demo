<template>
  <div>
    <div class="clearfix relative">
      <div class="pull-right right-actions">
        <button class="btn btn-sm btn-primary">
          Hierarchy
        </button>
        <button class="btn btn-sm btn-primary">
          Copy link
        </button>
        <button class="btn btn-sm btn-default">
          Discard changes
        </button>
        <button class="btn btn-sm btn-default">
          Refresh
        </button>
      </div>
      <h2 class="view-title">
        <fa :icon="['fas','list']" /> Variants
      </h2>
    </div>
    <div class="grid">
      <div class="col-1-3">
        <div class="panel">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
        </div>
      </div>
      <div class="col-2-3">
        <div class="panel">
          <BarChart :data="barData" :options="options" style="position: relative; height:232px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <table>
            <tbody>
              <tr>
                <th>Tag</th>
                <th>Description</th>
              </tr>
              <tr>
                <td><a href="/tags/tag_table.asp">&lt;table&gt;</a></td>
                <td>Defines a table</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_th.asp">&lt;th&gt;</a></td>
                <td>Defines a header cell in a table</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_tr.asp">&lt;tr&gt;</a></td>
                <td>Defines a row in a table</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_td.asp">&lt;td&gt;</a></td>
                <td>Defines a cell in a table</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_caption.asp">&lt;caption&gt;</a></td>
                <td>Defines a table caption</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_colgroup.asp">&lt;colgroup&gt;</a></td>
                <td>Specifies a group of one or more columns in a table for formatting</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_col.asp">&lt;col&gt;</a></td>
                <td>Specifies column properties for each column within a &lt;colgroup&gt; element</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_thead.asp">&lt;thead&gt;</a></td>
                <td>Groups the header content in a table</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_tbody.asp">&lt;tbody&gt;</a></td>
                <td>Groups the body content in a table</td>
              </tr>
              <tr>
                <td><a href="/tags/tag_tfoot.asp">&lt;tfoot&gt;</a></td>
                <td>Groups the footer content in a table</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-2-3">
        <div class="panel">
          <LineChart :data="lineData" :options="options" style="position: relative; height:396px; width:100%" />
        </div>
      </div>
      <div class="col-1-3">
        <div class="panel">
          <table>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
            <tr>
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
              <td>Austria</td>
            </tr>
            <tr>
              <td>Island Trading</td>
              <td>Helen Bennett</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Magazzini Alimentari Riuniti</td>
              <td>Giovanni Rovelli</td>
              <td>Italy</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  asyncData () {
    const lineData = {
      labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
      datasets: [{
        label: 'Car Speed',
        data: [0, 59, 75, 20, 20, 55, 40]
      }]
    }
    const barData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        lineTension: 0.1
      }]
    }
    const options = {
      responsive: true,
      maintainAspectRatio: false
    }
    return { lineData, barData, options }
  },
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
<style>
  .panel{
    background: #ffffff;
    padding: 15px;
    border-radius: 10px;
    margin: 10px 0 10px 0;
  }
  .view-title{
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .right-actions{
    position: absolute;
    right: 0;
    top: -10px;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>
