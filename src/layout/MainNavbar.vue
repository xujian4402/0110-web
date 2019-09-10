<template>
  <div class="navbar-container">
    <el-rows>
      <el-col :xs="0" :sm="1" :md="4" :lg="4" :xl="4">
        <div class="placeholder"></div>
      </el-col>
      <el-col :xs="24" :sm="22" :md="16" :lg="16" :xl="16">
        <div class="navbar">
          <!-- logo -->
          <div class="logo-box">
            <img class="logo-img" src="@/assets/images/logo.png" alt="" />
          </div>
          <div class="menu">
            <!-- 选项菜单 -->
            <div class="menu-list">
              fffff
            </div>
            <!-- 头像 -->
            <div class="avatar">
              <img
                class="logo-img"
                src="@/assets/images/headPortrait.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="4" :lg="4" :xl="4">
        <div class="placeholder"></div>
      </el-col>
    </el-rows>
  </div>
</template>

<script>
export default {
  name: 'MainNavbar'

}
</script>

<style lang="scss" scoped>
.navbar-container {
  .placeholder {
    width: 1rem;
    height: 1rem;
  }
  height: 4rem;
  background: rgba(4, 4, 4, 0.103);
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    .logo-box {
      height: 4rem;
      display: flex;
      .logo-img {
        height: 3rem;
        width: 3rem;
        margin: auto;
      }
    }
  }

  .menu {
    display: flex;
    align-items: center;
    align-content: center;
    .menu-list {
      margin-right: 1rem;
    }
    .avatar {
      height: 4rem;
      display: flex;
      .logo-img {
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        border: 0.1rem solid #999999;
        margin: auto;
      }
    }
  }
}
</style>
