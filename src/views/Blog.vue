<template>
  <div class="right-content">
      <Skeleton class="skeleton" v-if="loading"></Skeleton>
           <div class="post-item" v-for="(item,index) in blogs" :key="index">
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
</template>

<script>
import Skeleton from '../components/Skeleton.vue'
import axios from 'axios'
export default {
  components: {
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
        // this.loading = false
        console.log(error)
      })
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    height: auto;
    margin: 20px 20px;
    }
.post-item{
  height: auto;
  position: relative;
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
    object-fit: cover;
    width: 100%;
    height: 180px;
}
.post-title{
    margin: 5px 10px 15px 10px;
}
h3{
    color: #464749;
    flex-wrap: nowrap;
}
.post-description{
      height: 100%;
    p{
        font-size: 13px;
        color: #898989;
        margin: 0px 5px 30px 0;
        padding-bottom: 5px;
        flex-wrap: nowrap;
        text-align: justify;
    }
}
.read-btn{
  position: absolute;
  bottom: 0;
  height: 30px;
// margin-top: 20px;
width: 100%;
padding-top: 3px;
background-color: #ececec;
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
