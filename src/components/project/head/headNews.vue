<template>
  <div class="head_new">
    <el-tabs value="days_news">
      <el-tab-pane label="今日要闻" name="days_news">
        <div class="new_wrap" v-for="(i, index) in 7" :key="index">
          <div class="new_link">
            <el-link :underline="false" href="" target="_blank"
              >新闻{{ i }}新闻{{ i }}新闻{{ i }}新闻{{ i }}新闻{{ i }}新闻{{
                i
              }}新闻{{ i }}新闻{{ i }}新闻{{ i }}新闻{{ i }}</el-link
            >
          </div>
        </div></el-tab-pane
      >
      <el-divider></el-divider>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "headNews",
};
</script>

<style>
.head_new {
  width: 80%;
  margin: auto;
}

.head_new a {
  font-size: 120%;
  font-weight: 400;
}

.new_wrap :hover {
  background-color: #f7f8f9;
}

.new_wrap {
  position: relative;
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  margin-bottom:2% ;
}

.new_link {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
}

.el-link {
  margin:initial;
}
</style>
