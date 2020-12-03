<template>
  <div class="footer_message">
    <span :style="{fontSize:fontSize +'%'}">{{content}}</span>
  </div>
</template>

<script>
export default {
    name:"footerMessage",
    props:{
        content:{
            type:String
        },
        fontSize:{
            type:Number
        }
    }
};
</script>

<style scoped>
.footer_message {
  margin: auto;
}
</style>
