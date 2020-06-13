<template>
  <div>
    <Header></Header>
    <PostGrid></PostGrid>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import PostGrid from './components/PostGrid.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    PostGrid,
    Footer
  }
}
</script>

<style lang="scss">
@font-face {
  font-family:"vazir" ;
  src: url("./assets/fonts/Vazir.woff2") format("woff2");
}
*,body,html{
  font-family: "vazir";
  margin: 0;
  box-sizing: border-box;
  direction: rtl;
}
body{
  background-color: #ebeef1;
}
a{text-decoration: none;}
li{list-style: none;}
</style>
