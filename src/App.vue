<template>
  <div>
    <Header :backDrop="backDrop" @close="closeDrop" @createPost="showCreatePost" ></Header>
    <router-view></router-view>
    <!-- <PostGrid v-else></PostGrid> -->
    <Footer class="footer"></Footer>
    <div class="backdrop" v-if="backDrop"  @click="closeBackDrop();closeLogin();">
    </div>
    <UserModal v-if="backDrop" class="user-modal" @closeBtn="closeModal" @backDropReturn="reciveBackDropFromLogin">
    </UserModal>
  </div>
</template>

<script>
import { EventBus } from './EventBus'
import Header from './components/Header.vue'
// import PostGrid from './views/PostGrid.vue'
import Footer from './components/Footer.vue'
import UserModal from './components/UserModal.vue'
export default {
  components: {
    Header,
    // PostGrid,
    Footer,
    UserModal
  },
  data () {
    return {
      backDrop: false,
      close: '',
      closeForm: '',
      createPost: ''
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
    },
    closeLogin () {
      EventBus.$emit('closeForm', this.backDrop)
    },
    reciveBackDropFromLogin (closefrm) {
      this.closeForm = closefrm
      if (this.closeForm === true) {
        this.backDrop = false
      }
    },
    showCreatePost (createPost) {
      this.createPost = createPost
    }
  },
  mounted () {
    EventBus.$on('backDropReturn', data => {
      this.backDrop = data
    })
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
  width: 100%;
}
a{text-decoration: none;}
li{list-style: none;}
.user-modal{
  position: fixed;
  top: 0px;
  width: 40%;
  z-index: 10;
  margin: 3% 33%;
}
.backdrop{
    position: fixed;
    z-index: 4;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.288);
    width: 100%;
    height: 1100px;
}
</style>
