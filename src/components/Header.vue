<template>
  <div class="header">
      <div class="top-header">
          <img src="../assets/logo.png" alt="">
          <button class="header-btn"><i class="fas fa-user-lock"></i>ورود و ثبت نام</button>
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
                      <li><a href="#">صفحه اصلی</a></li>
                      <li><a href="#">بلاگ</a></li>
                      <li><a href="#">درباره من</a></li>
                      <li><a href="#">تماس</a> </li>
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
          </div>
          <div class="page-title">
              <h1>بلاگ</h1>
          </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showCategory: false
    }
  },
  methods: {
    showCategoryItem () {
      this.showCategory = !this.showCategory
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    color: white;
}
.top-header{
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
    background-color: #ec406a;
      box-shadow: 0 4px 8px 0 #ec406b79;

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
    z-index: 5;
    display: flex;
    width: 19%;
    height:30px ;
    margin: 10px;
    margin-bottom: 0px;
    ul{
        display: flex;
        cursor: pointer;
        top: 0px;
    }
    li:first-child{
        list-style: none;
        width: 100%;
        text-align: right;
        padding: 8px;
        background-color: #505358;
        border-radius: 4px;
        margin: auto;
        font-size: 14px;
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
    height: 100px;
    h1{
        color: #464749;
        margin: 20px;
    }
}
</style>
