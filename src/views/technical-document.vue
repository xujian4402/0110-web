<!--
 * @Description: 文档
 * @Author: xujian
 * @Date: 2019-09-23 17:09:38
 * @LastEditors: xujian
 * @LastEditTime: 2019-09-27 17:26:43
 -->

 <template>
  <div class="about-container">
    <el-row style="margin-top:20px;">
      <el-col :xs="0" :sm="1" :md="4" :lg="4" :xl="4">
        <div class="placeholder" style="height:1px;width:1px;"></div>
      </el-col>
      <el-col :xs="24" :sm="22" :md="16" :lg="16" :xl="16">
        <el-row>
          <el-col :span="8"><box-card></box-card></el-col>
          <el-col :span="8"><box-card></box-card></el-col>
          <el-col :span="8"><box-card></box-card></el-col>
        </el-row>
      </el-col>
      <el-col :xs="0" :sm="1" :md="4" :lg="4" :xl="4">
        <div class="placeholder" style="height:1px;width:1px;"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BoxCard from '@/components/BoxCard/index.vue'
export default {
  components: { BoxCard }
}
</script>

<style lang="scss">
.about-container {
  min-height: calc(100vh);
  padding-top: 4rem;
  .haha {
    font-size: 4rem;
    font-weight: 700;
  }
}
</style>

