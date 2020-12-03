<template>
  <div class="aside_slideShowList">
    <div class="slideshow">
      <el-carousel height="150px" :interval="2000">
        <el-carousel-item v-for="(i, index) in imgs" :key="index">
          <el-image :src="i" fit="cover"
            ><span>{{ index }}</span></el-image
          >
        </el-carousel-item>
      </el-carousel>
      <div>
        <list :fontSize="70" :marginBottom="2" :ItemNumber="4"></list>
      </div>
    </div>
  </div>
</template>

<script>
import list from "../../common/list";

export default {
  name: "asideSlideList",
  data() {
    return {
      imgs: [
        "https://goss.veer.com/creative/vcg/veer/800water/veer-150638462.jpg",
        "https://goss.veer.com/creative/vcg/veer/800water/veer-150638462.jpg",
        "https://goss.veer.com/creative/vcg/veer/800water/veer-150638462.jpg",
      ],
    };
  },
  components:{
      list
  }
};
</script>

<style scoped>
.aside_slideShowList {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  background-color: #f7f8f9;
}

.slideshow {
  position: relative;
  width: 100%;
  height: 150;
}
</style>
