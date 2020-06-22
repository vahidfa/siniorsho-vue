<template>
  <div v-if="closeModal">
      <div class="modal-container">
          <div class="login">
          <a @click="component= 'Login'">ورود</a>
          </div>
          <div class="register" @click="component = 'Register'">
          <a>ثبت نام </a>
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
      closeModal: true
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
    .login{
        cursor: pointer;
        width: 100%;
        margin: auto;
         a{
        text-decoration: none;
        color:#464749 ;
        font-size: 20px;
        margin-right: 50px;
         &:hover{
            color: #ec406a;
        }
    a:active{
      .login{
        border-bottom: 5px solid orange;
        width: 100%;
      }
        }
    }
    }
    .register{
        cursor: pointer;
        width: 100%;
        margin: auto;
        a{
        width: 100%;
        text-decoration: none;
        color:#464749 ;
        font-size: 20px;
        margin-right: 50px;
        &:hover{
            color: #ec406a;
        }
        a:active{
        width: 100%;
        }
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
