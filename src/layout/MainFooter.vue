<template>
  <div class="footer-container">footer</div>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style lang="scss" scoped>
.footer-container {
  height: 100px;
  background: #333333;
}
</style>
