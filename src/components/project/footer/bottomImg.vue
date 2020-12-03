<template>
  <div class="bottom_imgs">
    <div class="footer_img"><el-image :src="url" fit="cover"></el-image></div>
    <div class="footer_img"><el-image :src="url" fit="cover"></el-image></div>
    <div class="footer_img"><el-image :src="url" fit="cover"></el-image></div>
  </div>
</template>

<script>
export default {
  name: "bottomImg",
  data() {
    return {
      url:
        "https://goss.veer.com/creative/vcg/veer/800water/veer-150638462.jpg",
    };
  },
};
</script>

<style scoped>
.bottom_imgs {
  width: 60%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.footer_img {
  margin: 2% 1% 3% 1%;
  width: 10%;
}
</style>
