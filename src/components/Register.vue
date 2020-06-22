<template>
  <div class="register">
        <form  class="container" @submit.prevent="register">
            <label>نام کاربری</label>
            <input ref="errorBox" type="text" spellcheck="false" v-model="user.userName">
            <span v-if="submit && !$v.user.userName.minLength">نام کاربری معتبر نیست (باید حداقل سه کاراکتر باشد)</span>
            <span v-if="submit && !$v.user.userName.required">نام کاربری معتبر نیست (باید حداقل سه کاراکتر باشد)</span>
            <label>ایمیل</label>
            <input ref="errorBox" type="text" v-model="user.email">
            <span v-if="submit && !$v.user.email.email">ایمیل وارد شده معتبر نیست</span>
            <span v-if="submit && !$v.user.email.required">ایمیل وارد شده معتبر نیست</span>
            <label>رمز عبور</label>
            <input ref="errorBox" type="password" v-model="user.password">
            <span v-if="submit && !$v.user.password.minLength">رمز عبور به درستی وارد نشده</span>
            <span v-if="submit && !$v.user.password.required">رمز عبور به درستی وارد نشده</span>
            <label>تکرار رمز عبور</label>
            <input ref="errorBox" type="password" v-model="user.confirmPassword">
            <span v-if="submit && !$v.user.confirmPassword.required">رمز عبور مطابقت ندارد</span>
            <span v-if="submit && !$v.user.confirmPassword.sameAsPassword">رمز عبور مطابقت ندارد</span>
        <div v-if="loading" class="loader"></div>
            <button>ثبت نام</button>
            <span v-if="registered" style="color:green; margin-right:100px"> ثبت نام باموفقیت انجام شد</span>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      user: {
        userName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      submit: false,
      registered: false,
      error: null,
      loading: false
    }
  },
  validations: {
    user: {
      userName: { required, minLength: minLength(3) },
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
          data.user
            .updateProfile({
              displayName: this.user.userName
            })
          this.registered = true
          this.loading = false
            .then(() => {})
        })
        .catch(err => {
          this.error = err.message
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
        width: 25%;
        margin: auto;
        margin: 15px auto;
        padding:5px 10px;
        border-radius: 5px;
        border: none;
        background-color: #ec406a;
        color: #fff;
        font-size:18px;
         cursor: pointer;
    }
    input{
        border-radius: 4px;
        width: 80%;
        outline: none;
        padding: 5px;
        margin: 0 35px;
        border: 1px solid #ccc;
    }
    label{
        margin: 15px;
    }
    span{
        color: red;
        margin-right: 20px;
        transition: .5s ease-in;
    }
}
.register{
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
span{
  font-size: 14px;
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
</style>
