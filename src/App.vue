<template>
  <div>
    <Header :backDrop="backDrop" @close="closeDrop" ></Header>
    <PostGrid></PostGrid>
    <Footer></Footer>
    <div class="backdrop" v-if="backDrop"  @click="closeBackDrop">
    </div>
    <UserModal v-if="backDrop" class="user-modal" @closeBtn="closeModal">
    </UserModal>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import PostGrid from './components/PostGrid.vue'
import Footer from './components/Footer.vue'
import UserModal from './components/UserModal.vue'
export default {
  components: {
    Header,
    PostGrid,
    Footer,
    UserModal
  },
  data () {
    return {
      backDrop: false,
      close: ''
    }
  },
  methods: {
    closeBackDrop () {
      this.backDrop = false
    },
    closeDrop (showModal) {
      this.backDrop = showModal
      console.log(showModal, this.backDrop)
    },
    closeModal (closeModal) {
      this.close = closeModal
      if (this.close === true) {
        this.backDrop = false
      }
    }
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
.user-modal{
  position: fixed;
  top: 0px;
  width: 40%;
  z-index: 10;
  margin: 5% 33%;
}
.backdrop{
    position: fixed;
    z-index: 4;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.308);
    width: 100%;
    height: 1100px;
}
</style>
