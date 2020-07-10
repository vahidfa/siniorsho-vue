<template>
  <div v-if="closeModal">
      <div class="modal-container">
          <div  class="login" :class="{activeTab : loginActive}" @click="component= 'Login', loginActive = true, registerActive = false">
          <p>ورود</p>
          </div>
          <div  class="register" @click="component = 'Register',registerActive = true, loginActive = false  " :class="{activeTab: registerActive}">
          <p>ثبت نام </p>
          </div>
           <i class="fa fa-close" style="font-size:22px;" @click="close"></i>
    </div>
          <component :is="component" ></component>
  </div>

</template>

<script>
import Login from './Login.vue'
import Register from './Register.vue'
export default {
  components: {
    Login,
    Register
  },
  data () {
    return {
      component: 'login',
      closeModal: true,
      closeFrm: null,
      loginActive: true,
      registerActive: false
    }
  },
  methods: {
    close () {
      this.$emit('closeBtn', this.closeModal)
    }
  },
  computed: {
    loginClasses () {
      return { red: !this.isActive }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-container{
  border-bottom: 1px solid #bbb;
    display: flex;
    background-color: #2e2b2b;
    line-height: 55px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    width: 100%;
    flex-direction: row;
    transition: 1s ease-in;
    .login{
        cursor: pointer;
        width: 100%;
        margin: auto;
       p{
        text-decoration: none;
        color:#fff ;
        font-size: 20px;
        width: 100%;
        text-align: center;
    }
    }
    .register{
        cursor: pointer;
        width: 100%;
        margin: auto;
        p{
        width: 100%;
        text-decoration: none;
        color:#fff ;
        font-size: 20px;
        text-align: center;
        }
    }
}
.fa-close{
  top: 0;
  left: 0;
  position: absolute;
  cursor: pointer;
  color: #6b6d70;
}
.activeTab{
  background-color: orange;
  color: #f6f6f6;
}
</style>
