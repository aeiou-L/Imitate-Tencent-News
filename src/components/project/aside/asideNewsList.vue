<template>
  <div class="aside_news_list">
    <area-title :title="title2"></area-title>
    <div class="list_wrap">
      <div v-for="i in 3" :key="i" class="new_wrap">
        <new-card
          :url="url"
          :content="i"
          :marginBottom="3"
          :fontSize="80"
        ></new-card>
      </div>
      <div class="load_more">加载更多</div>
    </div>
  </div>
</template>

<script>
import AreaTitle from "../../common/areaTitle";
import NewCard from "../../common/newCard"

export default {
  name: "asideNewsList",
  data() {
    return {
      title1: "今日热点",
      title2: "热门资讯",
      url:
        "https://goss.veer.com/creative/vcg/veer/800water/veer-150638462.jpg",
    };
  },
  components: {
    AreaTitle,
    NewCard
  },
};
</script>

<style scoped>
.aside_news_list {
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  background-color: #f7f8f9;
}

.new_wrap {
  position: relative;
  width: 100%;
}

.load_more {
  text-align: center;
  width: 100%;
  font-size: 50%;
  box-shadow: 0px 8px #f7f8f9;
}
</style>
