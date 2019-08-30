<template>
  <div class="box-card-component">
    <!-- 前端技术栈 -->
    <div class="front-end">
      <div class="title-box">前端</div>
      <div
        class="progress-item"
        v-for="item in technologyStack.front_end"
        :key="item.name"
      >
        <div class="progress-name">{{ item.name }}</div>
        <el-progress
          :percentage="item.percentage"
          :text-inside="textInside"
          :stroke-width="strokeWidth"
          :type="type"
          :width="width"
          :color="colors"
        />
      </div>
    </div>
    <!-- 后端技术栈 -->
    <div class="back-end">
      <div class="title-box">后端</div>
      <div
        class="progress-item"
        v-for="item in technologyStack.back_end"
        :key="item.name"
      >
        <div class="progress-name">{{ item.name }}</div>
        <el-progress
          :percentage="item.percentage"
          :text-inside="textInside"
          :stroke-width="strokeWidth"
          :type="type"
          :width="width"
          :color="colors"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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
      strokeWidth: 10,
      textInside: false,
      type: 'circle',
      width: 128,
      colors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ],
      technologyStack: {
        front_end: [
          {
            name: 'Wepy',
            percentage: 70
          },
          {
            name: 'Vue',
            percentage: 50
          },
          {
            name: 'Css / Scss',
            percentage: 50
          }
        ],
        back_end: [
          {
            name: 'Node.js',
            percentage: 60
          },
          {
            name: 'Python',
            percentage: 40
          },
          {
            name: 'Docker',
            percentage: 40
          }
        ]
      }
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ])
  }
}
</script>

<style lang="scss" scoped>
.box-card-component {
  display: flex;

  // .box-card-header {
  //   position: relative;
  //   height: 220px;
  //   img {
  //     width: 100%;
  //     height: 100%;
  //     transition: all 0.2s linear;
  //     &:hover {
  //       transform: scale(1.1, 1.1);
  //       filter: contrast(130%);
  //     }
  //   }
  // }
  .front-end{
    margin-right: 30px;
  }
  .title-box {
    margin: 10px 0px;
    font-weight: 700;
    text-align: center;

  }
  .progress-item {
    margin-bottom: 20px;
    margin-left: 10px;
    text-align: center;
    .progress-name {
      font-size: 16px;
      // height: 30px;
      margin-bottom: 4px;
    }
  }

}
</style>
