<template>
  <div class="link_wrap">
      <el-link :underline="false" href="" target="_blank"
        >底部链接{{ content }}</el-link
      >
      <slot name="divide"></slot>
  </div>
</template>

<script>
export default {
    name:"correlationLink",
    props:{
        content:{
            type:Number
        }
    }
};
</script>

<style scoped>

</style>
