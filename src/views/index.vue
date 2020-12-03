<template>
  <el-container vertical>
    <el-header height="">
      <!-- Header content -->
      <index-nav></index-nav>
      <advertisement>
        <template v-slot:advImg
          ><img
            width="100%"
            height="100%"
            src="~assets/img/advPicture.jpg"
            alt="广告位"
        /></template>
      </advertisement>
    </el-header>
    <el-main class="news_content">
      <!-- Main content -->
      <router-view></router-view>
    </el-main>
    <el-footer>
      <!-- Footer content -->
      <footer-links></footer-links>
      <footer-message :content="content1" :fontSize="50"></footer-message>
      <footer-message :content="content2" :fontSize="50"></footer-message>
      <bottom-img></bottom-img>
    </el-footer>
  </el-container>
</template>

<script>
import IndexNav from "../components/project/head/indexNav";
import Advertisement from "../components/project/head/advertisement";
import FooterLinks from "../components/project/footer/footerLinks";
import FooterMessage from "../components/project/footer/footerMessage";
import BottomImg from "../components/project/footer/bottomImg";

export default {
  data() {
    return {
      content1:
        "这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容",
      content2: "这是另一段文字这是另一段文字这是另一段文字这是另一段文字",
    };
  },
  methods: {},
  components: {
    IndexNav,
    Advertisement,
    FooterLinks,
    FooterMessage,
    BottomImg,
  },
};
</script>
<style scoped>
.news_content {
  width: 80%;
  margin: auto;
}

.news_content_wrap {
  position: relative;
  width: 100%;
  height: 100%;
}

.el-footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
</style>
