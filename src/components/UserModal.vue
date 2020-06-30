<template>
  <div v-if="closeModal">
      <div class="modal-container">
          <div  class="login">
          <p @click="component= 'Login'">ورود</p>
          </div>
          <div  class="register" @click="component = 'Register'">
          <p>ثبت نام </p>
          </div>
           <i class="fa fa-close" style="font-size:22px;" @click="close"></i>
    </div>
          <component :is="component"></component>
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
      closeFrm: null
    }
  },
  methods: {
    close () {
      this.$emit('closeBtn', this.closeModal)
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-container{
  border-bottom: 1px solid #bbb;
    display: flex;
    background-color: #f6f6f6;
    line-height: 50px;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    width: 100%;
    flex-direction: row;
    transition: 1s ease-in;
    .login{
        // border-left: 1px solid #ccc;
        cursor: pointer;
        width: 100%;
        margin: auto;
        &:hover{
          transition: .5s;
          background-color: orange;
          p{
          color: white;
          }
        }
        p{
        text-decoration: none;
        color:#464749 ;
        font-size: 20px;
        width: 100%;
        margin-right: 50px;
    }
    }
    .register{
        cursor: pointer;
        width: 100%;
        margin: auto;
         &:hover{
          background-color: orange;
          transition: .5s;
          p{
          color: white;
          }
        }
        p{
        width: 100%;
        text-decoration: none;
        color:#464749 ;
        font-size: 20px;
        margin-right: 50px;
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
</style>
