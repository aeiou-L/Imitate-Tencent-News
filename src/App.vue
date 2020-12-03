<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
#app{
  position: absolute;
  width: 98%;
}

#tab-days_news {
  font-size: 25px;
}


::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #fff;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.1);
}
</style>
