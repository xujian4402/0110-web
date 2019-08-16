<template>
  <div class="index-container">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item class="item-menu-left">0110-IsCoding</el-menu-item>
      <el-menu-item class="item-menu" index="1">全部文章</el-menu-item>
      <el-menu-item class="item-menu" index="3">前端资源</el-menu-item>
      <el-menu-item class="item-menu" index="4">后端资源</el-menu-item>
      <el-menu-item class="item-menu" index="5">运维资源</el-menu-item>
      <el-menu-item class="item-menu" index="2">回忆相册</el-menu-item>
      <!-- <el-menu-item class="item-menu" index="4">管理中心</el-menu-item> -->
      <el-menu-item class="item-menu-right">
        <el-avatar
          shape="square"
          size="large"
          src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        >
        </el-avatar
      ></el-menu-item>
    </el-menu>
    <!-- 内容 -->
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Index',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (key === '2') {
        this.$router.push({
          path: 'about'
        })
      }
    }
  }
}

</script>

<style lang="scss">
.index-container {
  // height: 100%;
  // background: blueviolet;
  .el-menu-demo {
    border-bottom: 0;
    display: flex;
    // align-items: center;
    // align-content: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .item-menu-left {
      flex-grow: 1;
      text-align: left;
      font-size: 24px;
      // align-self:auto;
      // flex-shrink:0;
      // padding-right:100px;
    }
    .item-menu {
    }
    .item-menu-right {
      // flex-grow:1;
      text-align: center;
      // align-self:auto;
      // flex-shrink:0;
      // padding-right:100px;
    }
  }
    .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
}
</style>
