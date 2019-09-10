<template>
<<<<<<< HEAD
  <div class="footer-container">
     <el-row>
      <el-col :span="16" :push="4" :pull="4">
       <div>windcenter</div>
      </el-col>
    </el-row>
  </div>
=======
  <div class="footer-container">footer</div>
>>>>>>> update
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
<<<<<<< HEAD
  background: rgba(0, 0, 0, 0.3);
  text-align: center;

=======
  background: #333333;
>>>>>>> update
}
</style>
