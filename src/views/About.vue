<template>
 <div class="about-container">
   {{activeIndex}}
 </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      activeIndex: '2',
      activeIndex2: '2'
    }
  },
  methods: {

  }

}
</script>

<style lang="scss">
.about-container {
// height: 1300px;
}
</style>
