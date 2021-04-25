<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <home-page></home-page>-->
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from './components/homePage'

export default {
  name: 'App'
  // components: {
  //   // HelloWorld,
  //   HomePage
  // }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f3f5f7;
  width: 100%;
  height: 100%;
}
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
html,body,#app{
  height: 100%;
}
</style>
