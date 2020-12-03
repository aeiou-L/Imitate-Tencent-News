<template>
  <div class="bebdbd">
    <div class="aside_picture">
      <h3><el-image :src="url" fit="cover"></el-image></h3>
    </div>
    <div class="aside_list">
      <div class="link_wrap">
        <el-link :underline="false" href="" target="_blank"
          >列表标题！！！列表标题！！！列表标题！！！</el-link
        >
      </div>
      <div>
        <list :fontSize="80" :marginBottom="2" :ItemNumber="8"></list>
      </div>
    </div>
  </div>
</template>

<script>
import list from "../../common/list";

export default {
  name: "bebdbd",
  data() {
    return {
      url: "https://mat1.gtimg.com/news/news2013/img/jrhtLogo.png",
    };
  },
  components: {
    list,
  },
};
</script>

<style scoped>
.bebdbd {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: #f7f8f9;
}

.aside_picture {
  position: relative;
  width: 100%;
}

.aside_list {
  position: relative;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
}

.link_wrap {
  width: 100%;
  display: flex;
}

.link_wrap a {
  font-size: 100%;
  font-weight: bold;
}
</style>
