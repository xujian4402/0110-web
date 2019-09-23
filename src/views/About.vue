<template>
  <div class="about-container">
    <div class="haha">来了老弟！！！</div>
  </div>
</template>

<script>
import { merge } from 'rxjs'
import { map, startWith, scan } from 'rxjs/operators'
export default {
  name: 'About',
  domStreams: ['plus$', 'minus$'],
  subscriptions() {
    return {
      count: merge(
        this.plus$.pipe(map(() => 1)),
        this.minus$.pipe(map(() => -1))
      ).pipe(
        startWith(0),
        scan((total, change) => total + change)
      )
    }
  }
}
</script>

<style lang="scss">
.about-container {
  min-height: calc(100vh);
  width: auto;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  .haha {
    font-size: 4rem;
    font-weight: 700;
  }
}
</style>
