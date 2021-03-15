<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import router from '@/router'

export default Vue.extend({
  created() {
    this.$data.name = localStorage.getItem('name')

    if (this.$route.path !== '/' && !this.$data.name) {
      router.push('/')
    }
  },
  beforeUpdate() {
    this.$data.name = localStorage.getItem('name')

    if (this.$route.path !== '/' && !this.$data.name) {
      router.push('/')
    }
  },
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  background: none;
}

html {
  height: 100%;
}

body {
  height: 100%;
  color: #fff;
  background: #111413;
}

button {
  cursor: pointer;
}

#app {
  width: 100%;
  max-width: 1136px;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
</style>
