<template>
  <div class="index-container">
    <el-carousel
      ref="carousel"
      height="100vh"
      direction="vertical"
      :autoplay="false"
      :initial-index="initialIndex"
      @change="handle"
      :loop="false"
    >
      <!-- 第一页 -->
      <el-carousel-item>
        <el-image
          style="width: 100%; height: 100%"
          :src="list[0].url"
          fit="cover"
        >
        </el-image>
        <div class="image-box">
          <!-- 标题 -->
          <div class="headline">Windcenter的个人博客</div>
          <!-- 人生格言 -->
          <div class="life-maxim">
            相信自己，一路风景一路歌，人生之美，正在于此。
          </div>
          <!-- 链接 -->
          <div class="link-box">
            <img
              src="@/assets/images/home.png"
              alt="home"
              v-on:click="swtchIndex"
            />
            <a href="https://github.com/xujian4402" target="_blank">
              <img src="@/assets/images/github.png" alt="github" />
            </a>
          </div>
        </div>
      </el-carousel-item>
      <!-- 第二页 -->
      <el-carousel-item>
        <div class="ucenter-box">
          <!-- 左边是个人介绍 -->
          <div class="Self-introduction">
            <div style="font-size:30px;">Who am I?</div>
            <div style="font-size:20px;">
              小小前端 有两年的前端开发经验。熟悉Vue，Vue-Router，Vuex全家桶。
              熟悉Webpack 有扎实的JavaScript 基础
            </div>
          </div>
          <!-- 中间头像 -->
          <div class="avatar hidden-xs-only">
            <pan-thumb
              :image="avatar"
              :height="'300px'"
              :width="'300px'"
              :hoverable="false"
            >
              <div style="font-size:30px;">Hello</div>
              <div style="font-size:30px;">{{ name }}</div>
            </pan-thumb>
            <mallki class-name="mallki-text" :text="name" />
          </div>
          <!-- 右边是技术栈 -->
          <div class="technology-stack">
            <box-card />
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb/index.vue'
import BoxCard from '@/components/BoxCard.vue'
import Mallki from '@/components/TextHoverEffect/Mallki.vue'
export default {
  name: 'Index',
  components: { PanThumb, BoxCard, Mallki },
  mounted() {
    window.addEventListener('mousewheel', this.handleScroll, false)
  },
  data() {
    return {
      initialIndex: 0,
      list: [
        {
          url: 'https://qiniu.windcenter.top/banner/0a6e2817.jpg'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ])
  },
  methods: {
    handle(e) {
      console.log('change', e)
      this.initialIndex = e
    },
    swtchIndex() {
      this.$router.push('/about')
    },
    handleScroll(e) {
      // console.log('ttttt', this.$refs)
      const direction = e.deltaY > 0 ? 'down' : 'up' // 滚动的方向
      // console.log('direction', direction)
      if (this.initialIndex === 0) {
        if (direction === 'down') {
          this.$refs.carousel.next()
        }
      } else {
        if (direction === 'up') {
          this.$refs.carousel.prev()
          // this.$refs.carousel.next()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.index-container {
  height: 100vh;
  .image-box {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    color: #fff;
    .headline {
      width: 100%;
      font-size: 48px;
      font-weight: 700;
      text-align: center;
    }
    .life-maxim {
      font-size: 28px;
      font-weight: 400;
      margin-top: 20px;
      width: 70%;
      text-align: center;
      color: #475669;
    }
    .link-box {
      width: inherit;
      text-align: center;
    }
    .link-box img {
      cursor: pointer;
      height: 40px;
      width: 40px;
      margin: 20px;
    }
  }
  .ucenter-box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    position: absolute;
    top: 0;
    left: 0;
    // z-index: 999;
    // background: rgba(2, 2, 2, 0.096);
    // color: #fff;
    .Self-introduction {
      width: 300px;
      text-align: justify;
      margin: 20px;
    }
    .avatar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      // flex-wrap: wrap;
      align-items: center;
      align-content: center;
      margin: 0px 20px;
      .mallki-text {
        margin-top: 30px;
        font-size: 40px;
        letter-spacing: 10px;
        font-weight: bold;
      }
    }
    .technology-stack {
      // text-align: left;
      // width: 300px;
      margin: 20px;
    }
  }
}
</style>
