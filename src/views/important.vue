<template>
    <el-container horizontal>
      <el-main class="news_content_wrap">
        <!-- Main content -->
        <head-news></head-news>
        <area-title :title="title1"></area-title>
        <scroll-news></scroll-news>
      </el-main>
      <el-aside width="35%">
        <!-- Aside content -->
        <bebdbd></bebdbd>
        <aside-slide-list></aside-slide-list>
        <aside-news-list></aside-news-list>
      </el-aside>
    </el-container>
</template>

<script>
import HeadNews from "../components/project/head/headNews";
import ScrollNews from "../components/project/main/scrollNews";
import AreaTitle from "../components/common/areaTitle";
import Bebdbd from "../components/project/aside/bebdbd";
import AsideSlideList from "../components/project/aside/asideSlideList";
import NewCard from "../components/common/newCard.vue";
import AsideNewsList from "../components/project/aside/asideNewsList";


export default {
  data() {
    return {
      title1: "热点精选",
    };
  },
  components: {
    HeadNews,
    ScrollNews,
    AreaTitle,
    Bebdbd,
    AsideSlideList,
    NewCard,
    AsideNewsList,
  },
};
</script>

<style scoped>


</style>
