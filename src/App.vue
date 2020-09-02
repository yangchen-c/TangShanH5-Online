<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<style lang="less">
html {
  // font-size: 13.3333vw;
  font-size: 8.8888vw;
}
</style>
