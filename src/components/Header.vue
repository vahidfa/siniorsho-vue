<template>
  <div class="header">
      <div class="top-header">
         <router-link to="/">
          <img src="../assets/logo.png" alt="">
      </router-link>
          <button v-if="!isLogin" class="header-btn" @click="openModal"><i class="fas fa-user-lock"></i>ورود و ثبت نام</button>
          <p class="logout" @click="logout" v-if="isLogin">[ خروج ازحساب ]</p>
      </div>
      <div class="main-nav">
          <div class="category-head" @click="showCategoryItem">
              <ul>
                  <li><i class="fas fa-bars"></i>دسته بندی موضوعات</li>
              </ul>
          </div>
              <div class="nav-bar">
              <nav>
                  <ul>
                      <li><router-link to="/"> صفحه اصلی</router-link></li>
                      <li><router-link to="/blog">بلاگ</router-link></li>
                  <li><router-link to="">درباره من</router-link></li>
                  <li><router-link to="">تماس</router-link></li>
                  </ul>
              </nav>
              </div>
      <div class="category-item" v-if="showCategory">
              <ul>

                  <li @click="setCategory('')">همه مطالب</li>
                  <li @click="setCategory('css')">Css</li>
                  <li @click="setCategory('html')">Html</li>
                  <li @click="setCategory('javaScript')">JavaScript</li>
                  <li @click="setCategory('vuejs')">Vuejs</li>
              </ul>
      </div>
              <div class="panel">
                  <button @click="showCreatePost" v-if="token"><i class="fas fa-user"></i>ورود به داشبورد </button>
              </div>
          </div>
              <div class="hamber-btn">
               <svg @click="hideHamber" height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
               <button class="header-btn" @click="openModal"><i class="fas fa-user-lock"></i>ورود و ثبت نام</button>
                 </div>
                 <div class="hamber-container">
          <div class="hamber-menu" ref="hamber">
                     <svg @click="closeHamber" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
<g><g><path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"/></g>
</g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
              <ul @click="closeHamber">
                  <li><router-link to="/"> صفحه اصلی</router-link></li>
                  <li><router-link to="/blog">بلاگ</router-link></li>
                  <li><router-link to="">درباره من</router-link></li>
                  <li><router-link to="">تماس</router-link></li>
              </ul>
              </div>
              <div class="hamber-backdrop" v-if="backDropShow" @click="closeHamber"></div>
          </div>
  </div>
</template>

<script>
export default {
  props: ['backDrop'],
  data () {
    return {
      showCategory: false,
      showModal: this.backDrop,
      createPost: false,
      isLogined: false,
      backDropShow: false,
      token: ''
    }
  },
  methods: {
    showCategoryItem () {
      this.showCategory = !this.showCategory
    },
    openModal () {
      this.showModal = true
      this.$emit('close', this.showModal)
    },
    showCreatePost () {
      this.$emit('createPost', this.createPost)
      this.createPost = !this.createPost
      this.$router.push('/createPost')
    },
    hideHamber () {
      this.$refs.hamber.style.transform = 'translateX(0px)'
      this.backDropShow = !this.backDropShow
    },
    closeHamber () {
      this.backDropShow = false
      this.$refs.hamber.style.transform = 'translateX(1000px)'
    },
    logout () {
      localStorage.removeItem('user-token')
    },
    setCategory (type) {
      this.$store.commit('setCategory', type)
      this.showCategory = !this.showCategory
    }
  },
  computed: {
    isLogin () {
      if (localStorage.getItem('user-token')) {
        return localStorage.getItem('user-token')
      }
      return null
    }
  },
  mounted () {
    this.token = localStorage.getItem('user-token')
    console.log(localStorage.getItem('user-token'))
  }
}
</script>

<style lang="scss" scoped>
.header{
    color: white;
    overflow: hidden;
}
.top-header{
    display:flex ;
    flex-direction: inherit;
    color: white;
    background-color: white;
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ddd ;

img {
    max-width: 130px;
    vertical-align: middle;
    height: auto;
    margin: 10px;
}
}
.header-btn{
    background-color: orange;
      box-shadow: 1px 8px 8px 0 #ffbc0494;

    color: #fff;
    text-align: center;
    border: 0;
    padding: 10px 17px;
    text-shadow: none;
    line-height: 27px;
    display: inline-block;
    transition: all .2s ease-in-out;
    border-radius: 4px;
    position: absolute;
    left: 10px;
    margin: 10px 40px;
    cursor: pointer;
        border-style: none;
}
.fa-user-lock{
    font-size: 16px;
    padding: 0 5px;
}
.main-nav{
    display: flex;
    margin: 0px;
    background-color:whitesmoke;
    height: 60px;
}
.category-head{
    z-index: 2;
    display: flex;
    width: 26%;
    height:30px ;
    margin: 10px;
    margin-bottom: 0px;
    ul{
        display: flex;
        cursor: pointer;
        top: 0px;
        height: auto;
        width: auto;
    }
    li:first-child{
        height: auto;
        list-style: none;
        width: 100%;
        text-align: right;
        padding: 8px;
        background-color: #505358;
        border-radius: 4px;
        margin: auto;
        font-size: 14px;
        overflow-y: initial;
    }
}
.fa-bars{
    margin-left: 5px !important;
}
a{
    text-decoration: none;
    color: white;
}
.category-item{
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-top: 0px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    overflow: hidden;
    ul{
        position: relative;
        top: 0px;
        z-index: 1;
        margin-top: 45px;
    }
    li{
        list-style: none;
        margin-right: 10px;
        text-align: right;
        width: 100%;
        cursor: pointer;
        background-color:#505358;
        padding: 8px 37.5px;
           &:hover{
            background:#333538 ;
            transition: all .3s ease;
           }
    }
}
.nav-bar{
    width: 60%;
    display: flex;
    ul{
        display: flex;
    }
    li{
        list-style: none;
        flex-direction: row;
        margin-top: 20px;
    }
    a{
        color: #464749;
        padding: 20px 10px;
        padding-bottom: 5px;
        margin: 0 15px;
        &:hover{
            color:#ec406a;
            border-bottom: 3px solid #ec406a;
            transition: .1s ease;
        }
    }
}
.page-title{
    width: 100%;
    height: 55px;
    h1{
        color: #464749;
        margin: 20px;
    }
}
button{
    outline: none;
}
.panel{
    button{
    background-color: #333538;
    color: #ddd;
    outline: none;
    border: none;
    padding: 10px 20px;
    margin: 10px 0 0 0px;
    position: absolute;
    left: 5%;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
        background-color: black;
    }
    }
}
.fa-user{
    color: white;
    padding-left: 10px;
}
.hamber-menu{
    svg{
        fill: white;
        margin: 15px 10px;
        height: 20px;
        width: 20px;
    }
    overflow-y: hidden;
    transition: .5s all;
    transform: translateX(1000px);
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: rgb(56, 53, 53);
    color: white;
    width: 50%;
   height:100% ;
   margin: auto;
    z-index: 1020;
    top: 0px;
    right: 0px;
    ul{
        display: flex;
        flex-direction: column;
        margin:48px auto;
    }
    li{
        list-style: none;
    padding: 20px;
    margin: auto;
    width: 100%;
    text-align: center;
    }
}
.hamber-btn{
    button{
        padding:  7px 10px;
    }
    display: none;
    background-color: #fff;
    z-index: 120;
    width: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
        svg{
        margin: 10px;
        fill: rgb(0, 0, 0);
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
}
.hamber-container{
    display: flex;
    flex-direction: row;
}
.hamber-backdrop{
 width: 50%;
 height: 100%;
 position: fixed;
 top: 0;
 left: 0;
 z-index: 120;
 background-color: rgba(0, 0, 0, 0.007);
}
.logout{
    color: black;
    cursor: pointer;
    position: absolute;
    left: 10%;
    top: 20px;
}
ul{
    padding: 0px;
}
@media screen and (max-width: 900px) {
    .main-nav{
        display: none;
    }
    .top-header{
        visibility: hidden;
    }
    .hamber-btn{
        display: block;
    }
    .header-btn{
        margin: 5px;
    }
}
</style>
