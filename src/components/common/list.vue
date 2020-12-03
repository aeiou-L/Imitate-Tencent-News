<template>
  <div>
    <ul>
      <li v-for="(i, index) in ItemNumber" :key="index">
        <el-link
          :style="{
            fontSize: fontSize + '%',
            marginBottom: marginBottom + '%',
          }"
          :underline="false"
          href=""
          target="_blank"
          >新闻内容{{ i }}新闻内容{{ i }}新闻内容{{ i }}新闻内容{{
            i
          }}新闻内容{{ i }}</el-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    fontSize: Number,
    marginBottom: Number,
    ItemNumber:Number
  },
};
</script>

<style>
ul {
  color: #409eff;
}
</style>
