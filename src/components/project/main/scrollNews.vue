<template>
  <div class="scroll_news">
    <ul
      class="infinite-list"
      v-infinite-scroll="count"
      :infinite-scroll-delay="500"
    >
      <div v-for="(i, index) in num" :key="index" class="news_wrap">
        <new-card :url="url" :content="i">
          <template v-slot:divide>
            <el-divider></el-divider> </template
        ></new-card>
      </div>
    </ul>
  </div>
</template>

<script>
import newCard from "../../common/newCard";

export default {
  name: "scrollNews",
  data() {
    return {
      num: 20,
      url:
        "https://goss.veer.com/creative/vcg/veer/800water/veer-150638462.jpg",
    };
  },
  methods: {
    count() {
      this.num++;
      console.log("success");
    },
  },
  components: {
    newCard,
  },
};
</script>

<style scoped>
.infinite-list {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  overflow: scroll;
}

.news_wrap {
  position: relative;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
}

.scroll_news {
  position: relative;
  width: 100%;
  height: 1500px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-content: space-between;
}

.news_card {
  width: 100%;
  display: flex;
  flex-direction: row;
}
</style>
