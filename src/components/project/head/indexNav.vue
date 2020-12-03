<template>
  <div class="nav_Container">
    <el-row :gutter="0">
      <el-col :span="16" :offset="0"
        ><el-menu
          mode="horizontal"
          active-text-color="#303133"
          router
          default-active="/important"
        >
          <el-menu-item
            ><a id="iconLink" href="" target="_blank">
              <img src="~assets/img/logo.png" alt="图标" />网抑新闻</a
            ></el-menu-item
          >
          <el-menu-item index="/important">要闻</el-menu-item>
          <el-menu-item index="/entertainment">娱乐</el-menu-item>
          <el-menu-item index="/sports">体育</el-menu-item>
          <el-menu-item index="/military">军事</el-menu-item>
          <el-menu-item index="/internation">国际</el-menu-item>
          <el-menu-item index="/technology">科技</el-menu-item>
          <el-menu-item index="/finance">财经</el-menu-item>
          <el-menu-item index="/fashion">时尚</el-menu-item>
          <el-submenu index="10">
            <template slot="title">
              <el-button type="primary" size="mini" round
                >更多+</el-button
              ></template
            >
            <el-menu-item-group>
              <template slot="title"><h3>热门导航</h3></template>
              <el-row :gutter="5">
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项1</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项2</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项3</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项4</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项5</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项6</el-button
                    ></el-menu-item
                  ></el-col
                >
              </el-row>
              <el-row :gutter="0">
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项7</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项8</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项9</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项10</el-button
                    ></el-menu-item
                  ></el-col
                >
              </el-row>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title"><h3>更多导航</h3></template>
              <el-row :gutter="0">
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项1</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项2</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项3</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项4</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项5</el-button
                    ></el-menu-item
                  ></el-col
                >
                <el-col :span="4" :offset="0"
                  ><el-menu-item index="">
                    <el-button type="info" size="mini" plain="true" round
                      >选项6</el-button
                    ></el-menu-item
                  ></el-col
                >
              </el-row>
            </el-menu-item-group>
          </el-submenu>
        </el-menu></el-col
      >
      <el-col :span="8" :offset="0"
        ><el-menu mode="horizontal" active-text-color="#303133">
          <el-menu-item
            ><el-input placeholder="" size="normal" clearable suffix-icon="">
              <el-button slot="append" icon="el-icon-search"></el-button
            ></el-input>
          </el-menu-item>
          <el-menu-item>评论</el-menu-item>
          <el-menu-item>消息</el-menu-item>
          <el-menu-item>我的</el-menu-item>
        </el-menu></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: "indexNav",
};
</script>

<style scoped>
.nav_Container {
  width: 100%;
}

.el-menu-item {
  font-size: 120%;
}

#iconLink {
  text-decoration: none;
  font-size: 24px;
  color: rgba(40, 114, 197, 0.883);
}
</style>
