<template>
  <div class="about-container">
    <!-- switchMap、concatMap、exhaustMap使用 -->
    <div>
    <h3>demo4 各种map方法运用</h3>
    <button class="btn" v-stream:click="getConcatMapCount$">点击获取concatMapCount$</button>
    <p>{{ concatMapCount$ }}</p>
    <button class="btn" v-stream:click="getSwitchMapCount$">点击获取switchMapCount$</button>
    <p>{{ switchMapCount$ }}</p>
    <button class="btn" v-stream:click="getExhaustMapCount$">点击获取exhaustMapCount$</button>
    <p>{{ exhaustMapCount$ }}</p>
  </div>

    <!-- test -->
    <!-- <input v-model="search">
    <div v-if="results">
      <ul v-if="results.length">
        <li :key="match.title" v-for="match in results">
          <p>{{ match.title }}</p>
          <p>{{ match.description }}</p>
        </li>
      </ul>
      <p v-else>No matches found.</p>
    </div> -->
  </div>
</template>

<script>
import { Observable } from 'rxjs'
// import {
//   pluck,
//   filter,
//   debounceTime,
//   distinctUntilChanged,
//   switchMap,
//   map
// } from 'rxjs/operators'

export default {
  name: 'RxjsTest',
  data() {
    return {
      search: -1,
      count: 0
    }
  },
  domStreams: [
    'getConcatMapCount$',
    'getSwitchMapCount$',
    'getExhaustMapCount$'
  ],
  subscriptions() {
    return {
      /**
       * 当你连续点击按钮多次获取数据时，cancatMap会将获取到的数据按队列发出
       */
      concatMapCount$: this.getConcatMapCount$
        .concatMap((e) => {
          return Observable.from(this.getCount())
        }),
      /**
       * 当你连续点击按钮多次获取数据时，switchMap只会将最后一个点击发出的值发出，前面发出的值会被吞掉
       */
      switchMapCount$: this.getSwitchMapCount$
        .switchMap((e) => {
          return Observable.from(this.getCount())
        }),
      /**
       * 当你连续点击按钮多次时，exhaustMap仅执行一次，在第一次值发出后，才可以继续点击下一次发出值
       */
      exhaustMapCount$: this.getExhaustMapCount$
        .exhaustMap(e => {
          return Observable.from(this.getCount())
        })
    }
  },
  methods: {
    getCount() {
      return new Promise((resolve, reject) => {
        this.count++
        setTimeout(() => {
          resolve(this.count)
        }, 2000)
      })
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
