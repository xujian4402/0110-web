<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <img
        src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
      />
    </div>
    <div class="mallki-box">
      <mallki class-name="mallki-text" text="vue-element-admin" />
    </div>
  </el-card>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki.vue'

export default {
  components: { Mallki },

  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" >
.box-card-component {
  .el-card__header {
    padding: 0px !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-box {
      position: relative;
      height: 50px;
      text-align: center;
    .mallki-text {
    //   position: absolute;
    //   top: 0px;
    //   right: 0px;
    //   font-size: 20px;
    //   font-weight: bold;
    }
  }

//   @media only screen and (max-width: 1510px) {
//     .mallki-text {
//       display: none;
//     }
//   }
}
</style>
