<template>
  <div id="app">
    <router-view name="header" />
    <router-view />
    <router-view name="footer" />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#app {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a:hover,
a:focus {
  text-decoration: none !important;
}
</style>
