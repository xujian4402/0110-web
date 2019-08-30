<template>
  <div class="header-container">
    <el-row>
      <el-col :span="16" :push="4" :pull="4">
        <el-row>
          <el-col :span="4">
            <div class="logo-box">
              <img class="logo-img" src="@/assets/images/logo.png" alt="" />
            </div>
          </el-col>
          <el-col :span="20">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MainNavbar'

}
</script>

<style lang="scss" scoped>
.header-container {
  height: 80px;
  background: rgba(4, 4, 4, 0.103);
  .logo-box {
    height: 80px;
    .logo-img {
      height: 70px;
      width: 70px;
    }
  }
  .el-menu-demo{
    height: 80px;
  }
}
</style>
