<template>
  <div id="app">
    <tool-bar/>
    <!-- 여기서 만약 url이 /news로 들어오면 아래 <router-view/>는 자동으로 마법처럼 <NewsView/>로 바뀐다. -->
    <router-view/>
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar";
export default {
  components: {ToolBar}
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
</style>
