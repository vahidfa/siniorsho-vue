<template>
  <div class="header">
      <div class="top-header">
         <router-link to="/">
          <img src="../assets/logo.png" alt="">
      </router-link>
          <button class="header-btn" @click="openModal"><i class="fas fa-user-lock"></i>ورود و ثبت نام</button>
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
                  <li><a href="#">Css</a></li>
                  <li><a href="#">Html</a></li>
                  <li><a href="#">JavaScript</a></li>
                  <li><a href="#">Vue.js</a></li>
                  <li><a href="#">React.js</a></li>
              </ul>
      </div>
              <div class="panel">
                  <button @click="showCreatePost" v-if="isLogined"><i class="fas fa-user"></i>ورود به داشبورد </button>
              </div>
          </div>
              <div class="hamber-btn">
               <svg @click="hideHamber" height="384pt" viewBox="0 -53 384 384" width="384pt" xmlns="http://www.w3.org/2000/svg"><path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>              </div>
          <div class="hamber-menu" v-if="hamber">
              <ul>
                  <li><router-link to="/">صفحه اصلی</router-link></li>
                  <li><router-link to="">بلاگ</router-link></li>
                  <li><router-link to="">درباره من</router-link></li>
                  <li><router-link to="">تماس</router-link></li>
              </ul>
          </div>
          <!-- <div class="page-title">
              <h1>بلاگ</h1>
          </div> -->
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
      hamber: false,
      isLogined: false
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
      this.hamber = !this.hamber
    }
  },
  mounted () {
    localStorage.getItem('user-token')
    if (localStorage.getItem('user-token')) {
      this.isLogined = true
    }
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
    background-color: white;
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
    overflow-y: hidden;
    display: none;
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: orange;
    color: white;
    width: 100%;
   height:100% ;
   margin: auto;
    z-index: 100;
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
    display: none;
    background-color: #fff;
    z-index: 120;
    width: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
        svg{
        margin: 10px;
        fill: orange;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
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
}
</style>
