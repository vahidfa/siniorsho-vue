<template>
    <div class="login">
        <form class="container" @submit.prevent="login">
          <div class="email">
            <label>ایمیل</label>
            <input type="text" v-model="user.email" placeholder="ایمیل خود را وارد کنید...">
            <span v-if="submit && !$v.user.email.email">ایمیل وارد شده معتبر نیست</span>
            <span v-if="submit && !$v.user.email.required">ایمیل وارد شده معتبر نیست</span>
          </div>
          <div class="password">
            <label>رمز عبور</label>
            <input type="password" v-model="user.password" placeholder="رمز عبور خود را وارد کنید">
            <div v-if="loading" class="loader"></div><br>
          </div>
            <button>ورود</button>
            <span  v-if="error == false" class="success">شما با موفقیت وارد شدید</span>
            <span v-if="error == true" class="user-error"> رمز عبور یا ایمیل اشتباه است</span>
        </form>
    </div>
</template>
<script>
import { EventBus } from '../EventBus'
import firebase from 'firebase'
import { required, email } from 'vuelidate/lib/validators'
export default {
  props: ['closeModal'],
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      error: null,
      submit: false,
      loading: false,
      closeForm: null,
      loggedIn: false
    }
  },
  validations: {
    user: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    login () {
      this.submit = !this.submit
      this.loading = true
      this.$v.$touch()
      firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          this.loading = false
          this.error = false
          this.closeForm = false
          this.loading = true
          localStorage.setItem('user-token', 'refreshToken')
          const id = setTimeout(() => {
            EventBus.$emit('backDropReturn', this.closeForm)
            clearTimeout(id)
          }, 1500)
        })
        .then(
          this.loggedIn = true
        )
        .catch(err => {
          this.error = err.message
          this.error = true
          this.loading = false
        })
    }
  },
  created () {
    EventBus.$on('closeForm', backDrop => {
      this.closeForm = backDrop
    })
  }
}
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    // width: 40%;
    height: auto;
    color: #6c757d;
    button{
        width: 25%;
        margin: 5px auto;
        padding:5px 10px;
        border-radius: 5px;
        border: none;
        background-color: orange;
        color: #fff;
        font-size:18px;
         cursor: pointer;
         outline: none;
    }
    input{
        border-radius: 4px;
        width: 80%;
        height: 48px;
        outline: none;
        padding: 5px;
        margin: 15px auto;
        border: 1px solid #ccc;
        background-color: rgb(238, 235, 235);
    }
    label{
        margin: 5px  50px;
    }
}
.login{
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
span{
    color: red;
    font-size: 12px;
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
}
.loader {
  color: orange;
  font-size: 10px;
  margin: 15px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}
.loader:before {
  left: -3.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.loader:after {
  left: 3.5em;
}
@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
}
.success{
  color: #155724 !important;
  background-color: #d4edda;
  border-color: #c3e6cb;
  border-radius: 2px;
  padding: 5px;
  width: 100%;
  // border: 1px solid green;
  font-size: 18px !important;
  margin: auto !important;
}
.fa{
  position: absolute;
  right: 0;
}
.email , .password{
  display: flex;
  flex-direction: column;
  height: auto;
  span{
    margin: 5px 50px;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    width: 30%;
    padding: 5px;
    font-size: 13px;
    border-radius: 3px;
  }
  input{
    margin: 10px auto;
  }
}
.password input{
  background: url(../assets/svg/security.svg) no-repeat 8px 10px;
        background-size: 30px 30px;
}
.email input{
  background: url(../assets/svg/mail.svg) no-repeat 8px 10px;
        background-size: 30px 30px;
}
.user-error{
  margin: 5px auto;
    color: #721c24 !important;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    width: 30%;
    padding: 5px;
    font-size: 13px;
    border-radius: 3px
}
</style>
