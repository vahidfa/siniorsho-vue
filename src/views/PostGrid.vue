<template>
  <div>
      <div class="main-content">
       <div class="right-content">
      <div class="loader" v-if="loading"></div>
           <div class="post-item" v-for="(item,index) in blogFilter" :key="index">
             <span>{{item.category}}</span>
               <div class="post-img">
                   <img :src="item.image.src" alt="">
               </div>
               <div class="post-title">
                   <h3>{{item.title}}</h3>
               </div>
               <div class="post-description">
                   <p>{{item.content |  shortContent(100,'...')}}</p>
               </div>
               <div class="read-btn">
      <router-link :to="'/posts/' + item.id">
                   <p>بیشتر بخوانید</p>
           </router-link>
               </div>
           </div>
           </div>
       <div class="left-content">
          <Search v-model="search"></Search>
           <div class="newsletter">
                   <img src="../assets/pic/newsletter.jpg" alt="">
               <input type="text" placeholder="ایمیل خود را وارد کنید...">
                   <button>عضویت در خبرنامه</button>
           </div>
       </div>
      </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import axios from 'axios'
export default {
  components: {
    Search
  },
  data () {
    return {
      blogs: [],
      loading: false,
      search: ''
    }
  },
  created () {
    this.loading = true
    axios.get('https://sinior-419e5.firebaseio.com/posts.json')
      .then((response) => {
        return response.data
      })
      .then((response) => {
        const getBlog = []
        for (const key in response) {
          response[key].id = key
          getBlog.push(response[key])
        }
        this.blogs = getBlog
        this.loading = false
      })
      .catch((error) => {
        this.loading = false
        console.log(error)
      })
  },
  computed: {
    blogFilter () {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
  },
  filters: {
    shortContent (text, length, after) {
      return text.substring(0, length) + after
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content{
    width: 100%;
    height:1100;
    background-color:#f8f9fa;
    display: flex;
    flex-direction: row;
}
.right-content{
    display: flex;
    border-left: 1px solid #bbb;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    height: auto;
    // background-color: darkgoldenrod;
    margin: 20px 20px;
    }
.left-content{
    width: 27%;
    height: auto;
    // background-color:darkmagenta;
    margin: 20px 20px;
}
.post-item{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 28%;
    height: auto;
    // background-color: darksalmon;
    margin: 20px 15px;
    cursor: pointer;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ccc;
    transition: .5s;
    &:hover{
        transform: translateY(-3px);
            transition:all .4s ease;
            border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        .read-btn{
            border: 0px;
            background: #ec406a;
            transition: .3s;
            p{
            color: white;
            }
        }
    }
}
img{
    width: 100%;
    height: 150px;
}
.post-title{
    margin: 5px 10px;
    flex-wrap: nowrap;
}
h3{
    color: #464749;
}
.post-description{
    p{
        font-size: 13px;
        color: #898989;
        margin: 10px 5px;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        // overflow: hidden;
    }
}
.read-btn{
// margin-top: 20px;
width: 100%;
padding-top: 3px;
background-color: #ececec;
p{
    text-align: center;
    font-size: 18px;
    color: #464749;
}
}

.newsletter{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    img{
        border-radius: 10px;
    }
    input{
        padding: 10px;
        width: 90%;
        margin: auto;
        margin: 10px 20px;
        outline: none;
    }
    button{
        justify-content: center;
        margin: 5px auto;
        background-color:#ec406a ;
        box-shadow: 0 4px 8px 0 #ec406b79;
        border: none;
        padding: 10px 20px;
        color: #fff;
        border-radius: 3px;
    }
}
.loader {
  color: #ffffff;
  font-size: 20px;
  margin: 100px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load4 1.3s infinite linear;
  animation: load4 1.3s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
@keyframes load4 {
  0%,
  100% {
    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
}
.loader{
    position: absolute;
    top: 50%;
    right: 30%;
    color: orange;
}
span{
  position: absolute;
  padding: 1px 10px;
background-color: orange;
color: white;
border-radius: 20px;
font-size: 10px;
margin: 5px;
}
</style>
