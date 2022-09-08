<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-link to="/home">首页</router-link>&nbsp;&nbsp;
  <router-link to="/helloWorld">hello</router-link>
  <router-view></router-view>
</template>

<script setup>
console.log("首页");
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
