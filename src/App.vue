<template>
  <div id="app">
    <tool-bar/>
    <!-- 여기서 만약 url이 /news로 들어오면 아래 <router-view/>는 자동으로 마법처럼 <NewsView/>로 바뀐다. -->
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
export default {
  components: {ToolBar}
}
</script>

<style>
  a {
    color: #34495e;
    text-decoration: none;
  }
  a:hover {
    color : #42b883;
    text-decoration: underline;
  }
  a.router-link-exact-active {
    text-decoration: underline;
  }
  body {
    padding: 0;
    margin: 0;
  }

  .page-enter-active, .page-leave-active {
    transition: opacity .5s;
  }
  .page-enter, .page-leave-to {
    opacity: 0;
  }
</style>
