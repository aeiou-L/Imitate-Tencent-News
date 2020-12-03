<template>
  <div>
    <div
      class="news_card"
      :style="{ marginBottom: marginBottom + '%' }"
    >
      <div class="img_div">
        <el-image :src="url" fit="cover"></el-image>
      </div>
      <div class="new_indroduce">
        <el-link
          :underline="false"
          href="https://www.baidu.com/"
          target="_blank"
          ><img src="~assets/img/hotspot.png" alt="图标" /><span :style="{ fontSize: fontSize + '%'}"
            >新闻内容{{ content }}新闻内容{{ content }}新闻内容{{
              content
            }}新闻内容{{ content }}新闻内容{{ content }}新闻内容{{
              content
            }}新闻内容{{ content }}</span
          ></el-link
        >
      </div>
    </div>
    <slot name="divide"></slot>
  </div>
</template>

<script>
export default {
  name: "newCard",
  props: {
    url: String,
    content: Number,
    fontSize: { type:Number, default: 120 },
    marginBottom: { type:Number, default: 0 },
  },
};
</script>

<style scoped>
.news_card {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.new_indroduce {
  width: 70%;
}

.img_div {
  width: 30%;
}
</style>
