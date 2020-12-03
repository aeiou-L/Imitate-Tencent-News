<template>
  <div class="footer_links">
    <correlation-link v-for="i in 7" :key="i" :content="i"
      ><template v-slot:divide
        ><el-divider direction="vertical"></el-divider> </template
    ></correlation-link>
    <correlation-link :content="8"></correlation-link>
  </div>
</template>

<script>
import CorrelationLink from "../../common/correlationLink"

export default {
    name:"footerLinks",
    components:{
        CorrelationLink
    }
};
</script>

<style scoped>
.footer_links {
  margin: auto;
  display: flex;
  flex-direction: row;
}
</style>
