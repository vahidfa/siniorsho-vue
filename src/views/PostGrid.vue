<template>
  <div>
      <div class="main-content">
       <div class="right-content">
      <!-- <div class="loader" > </div> -->
        <Skeleton class="skeleton" v-if="loading"></Skeleton>
           <div class="post-item" v-for="(item,index) in blogFilter" :key="index">
      <router-link :to="'/posts/' + item.id">
             <span>{{item.category}}</span>
               <div class="post-img">
                   <img :src="item.image.src" alt="">
               </div>
               <div class="post-title">
                   <h3>{{item.title}}</h3>
               </div>
               <div class="post-description">
                   <p>{{item.content |  shortContent(90,'...')}}</p>
               </div>
               <div class="read-btn">
                   <p>بیشتر بخوانید</p>
               </div>
           </router-link>
           </div>
           </div>
       <div class="left-content">
          <Search v-model="search"></Search>
       </div>
      </div>
  </div>
</template>

<script>
import Skeleton from '../components/Skeleton.vue'
import Search from '../components/Search.vue'
import axios from 'axios'
export default {
  components: {
    Search,
    Skeleton
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
.skeleton{
  display: flex;
  width: 100%;
  height: 100%;
}
.right-content{
    padding: 16px;
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
    width: 28%;
    margin: 20px;
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
    margin: 5px 10px 15px 10px;
}
h3{
    color: #464749;
    flex-wrap: nowrap;
}
.post-description{
    p{
      height: 100%;
        font-size: 13px;
        color: #898989;
        margin: 5px;
        padding-bottom: 5px;
        flex-wrap: nowrap;
        text-align: justify;
    }
}
.read-btn{
// margin-top: 20px;
width: 100%;
padding-top: 3px;
background-color: #ececec;
height: 100%;
margin-bottom: 0px;
p{
    text-align: center;
    font-size: 18px;
    color: #464749;
}
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
@media screen and (max-width: 900px) {
    .right-content{
        border-left: none;
        width: 90%;
    }
   .post-item{
      // //  width: inherit;
      flex: 100%;
   }
   .main-content{
     flex-direction: column-reverse;
   }
   .left-content{
     width: 80%;
     margin: 10px auto;
   }
   .skeleton{
     height: 100%;
   }
}
@media screen and (max-width: 1200px) {
  .post-item{
    width: 40%;
    margin:10px auto;
  }
   .skeleton{
     height: 100%;
   }
}
</style>
