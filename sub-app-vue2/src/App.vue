<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1 @click="sayHello">hello</h1>

    <router-link to="/">Go To Index</router-link>
    <br/>
    <router-link to="/foo">Go To Foo</router-link>
    <br/>
    <router-link to="/bar">Go To Bar</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    sayHello () {
      this.$mainOrSubStore.dispatch({ type: 'MODIFY', payload: { sex: 'maleVue2' } })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
