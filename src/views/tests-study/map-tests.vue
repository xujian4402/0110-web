<template>
  <div>
    <h3>demo4 各种map方法运用</h3>
    <button class="btn" v-stream:click="getConcatMapCount$">
      点击获取concatMapCount$
    </button>
    <p>{{ concatMapCount$ }}</p>
    <button class="btn" v-stream:click="getSwitchMapCount$">
      点击获取switchMapCount$
    </button>
    <p>{{ switchMapCount$ }}</p>
    <button class="btn" v-stream:click="getExhaustMapCount$">
      点击获取exhaustMapCount$
    </button>
    <p>{{ exhaustMapCount$ }}</p>
  </div>
</template>
