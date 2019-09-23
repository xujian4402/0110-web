<template>
  <div class="navbar-container" style="width:100%;">
    <el-row>
      <el-col :xs="0" :sm="1" :md="4" :lg="4" :xl="4">
        <div class="placeholder"></div>
      </el-col>
      <el-col :xs="24" :sm="22" :md="16" :lg="16" :xl="16">
        <div class="navbar">
          <!-- logo -->
          <div class="logo-box" @click="backIndex">
            <img class="logo-img" src="@/assets/images/logo.png" alt="" />
          </div>
          <div class="menu">
            <!-- 选项菜单 -->
            <div class="menu-list">
              <el-menu
                :default-active="activeIndex"
                class="navbar-menu hidden-sm-only hidden-xs-only"
                mode="horizontal"
                @select="handleSelect"
                background-color="transparent"
                text-color="#000"
                active-text-color="#FFAC38"
              >
                <el-menu-item index="1">文档</el-menu-item>
                <el-menu-item index="2">回忆</el-menu-item>
                <el-menu-item index="3">语言</el-menu-item>
                <el-menu-item index="4">其它</el-menu-item>
              </el-menu>
            </div>
            <!-- 头像 -->
            <div class="avatar">
              <img
                class="logo-img"
                src="@/assets/images/headPortrait.png"
                alt=""
              />
              <div style="padding-left:10px;" class="hidden-sm-only hidden-xs-only">徐建</div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="4" :lg="4" :xl="4">
        <div class="placeholder"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      activeIndex: ''
    }
  },
  methods: {
    backIndex() {
      this.$router.push('/')
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 4rem;
  background: #e5e5e52a;
  .placeholder {
    width: 1rem;
    height: 1rem;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 0px 10px;
    .logo-box {
      height: 4rem;
      display: flex;
      cursor:pointer;
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
      margin-right: 5rem;
      .navbar-menu {
        background-color: #e5e5e5;
      }
      .el-menu.el-menu--horizontal{
        border: none;
      }
    }
    .avatar {
      height: 4rem;
      display: flex;
      align-content: center;
      align-items: center;
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
