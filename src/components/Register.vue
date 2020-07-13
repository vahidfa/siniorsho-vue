<template>
  <div class="register">
        <form  class="container" @submit.prevent="register">
          <div class="email">
            <label>ایمیل</label>
            <input ref="errorBox" type="text" placeholder="ایمیل خود را وارد کنید ..." v-model="user.email">
            <span v-if="submit && !$v.user.email.email" >ایمیل وارد شده معتبر نیست</span>
            <span v-if="submit && !$v.user.email.required">ایمیل وارد شده معتبر نیست</span>
            </div>
            <div class="password">
            <label>رمز عبور</label>
            <input ref="errorBox" type="password" placeholder="رمز عبور خود را وارد کنید ..." v-model="user.password">
            <span v-if="submit && !$v.user.password.minLength">رمز عبور به درستی وارد نشده</span>
            <span v-if="submit && !$v.user.password.required">رمز عبور به درستی وارد نشده</span>
            <label>تکرار رمز عبور</label>
            <input ref="errorBox" type="password" v-model="user.confirmPassword" placeholder="تکرار رمز عبور ...">
            <span v-if="submit && !$v.user.confirmPassword.required">رمز عبور مطابقت ندارد</span>
            <span v-if="submit && !$v.user.confirmPassword.sameAsPassword">رمز عبور مطابقت ندارد</span>
            </div>
        <div v-if="loading" class="loader"></div>
            <button>ثبت نام</button>
            <span  v-if="registered == true" class="success">ثبت نام شما با موفقیت انجام شد ...</span>
            <span v-if="errMassage == true" class="user-error">شما قبلا ثبت نام کرده اید لطفا وارد شوید</span>
        </form>
    </div>
</template>

<script>
import { EventBus } from '../EventBus'
import firebase from 'firebase'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      submit: false,
      registered: false,
      error: null,
      errMassage: false,
      loading: false,
      closeForm: null
    }
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') }
    }
  },
  methods: {
    register () {
      this.submit = !this.submit
      this.loading = true
      this.$v.$touch()
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(data => {
          this.registered = true
          this.loading = false
          this.closeForm = false
          localStorage.setItem('user-token', 'refreshToken')
          const id = setTimeout(() => {
            EventBus.$emit('backDropReturn', this.closeForm)
            clearTimeout(id)
          }, 1500)
        })
        .catch(err => {
          if (err.message === 'The email address is already in use by another account.') {
            this.errMassage = true
            this.registered = false
          }
          this.loading = false
        })
    }
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
       width: 50%;
        margin: 15px auto 20px auto;
        padding:10px 16px;
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
        width: 85%;
        height: 48px;
        outline: none;
        padding: 5px;
        margin: 0px auto;
        border: 1px solid #ccc;
    }
    label{
        margin: 20px 36px 5px 50px;
    }
}
.register{
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
span{
    margin: 5px auto;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 5px;
    font-size: 13px;
    border-radius: 3px;
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
  margin: 10px auto;
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
.email , .password{
  display: flex;
  flex-direction: column;
  span{
    margin: 5px 50px;
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 5px;
    font-size: 13px;
    border-radius: 3px;
  }
  input{
    margin: 10px auto;
  }
}
.password{
  margin-bottom: 0px;
  label{
    margin: 0px 40px;
  }
}
.email label {
      margin: 10px 40px 0 40px;
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
    width: auto;
    padding: 5px;
    font-size: 13px;
    border-radius: 3px
}
</style>
