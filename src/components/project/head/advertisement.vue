<template>
  <div class="adv_Container">
      <el-row :gutter="0" type="flex" justify="center">
        <el-col :span="16" :offset="0"
          ><slot name="advImg"></slot>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: "advertisement",
};
</script>

<style scoped>
.adv_Container {
  margin-top: 1%; 
}
</style>
