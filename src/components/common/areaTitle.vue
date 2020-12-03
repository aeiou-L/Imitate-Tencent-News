<template>
  <div class="news_title">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  name:"areaTitle",
  props:{
    title: String
  }
};
</script>

<style scoped>
.news_title {
  margin: auto;
  width: 80%;
  font-size: 20px;
  color: #409eff;
  display: flex;
  justify-content: flex-start;
}
</style>
