<template>
<div class="post-detail">
    <div class="post">
      <h1>{{blogs.title}}</h1>
    <span> دسته بندی: <p>{{ blogs.category }}</p></span>
    <div class="post-image">
        <img :src="blogs.image.src" alt="">
    </div>
    <div class="post-content">{{ blogs.content }}</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {

      blogs: []
    }
  },
  created () {
    // this.loading = true
    axios.get('https://sinior-419e5.firebaseio.com/posts/' + this.$route.params.id + '.json')
      .then((response) => {
        return response.data
      })
      .then((response) => {
        this.blogs = response
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.post{
  width:90% ;
  background-color: white;
  display: flex;
  flex-direction: column;
  margin: auto;
  .post-image{
    img{
    height: auto;
    width: 100%;
    }
  }
}
.post-detail{
  width:95% ;
  background-color: white;
  margin:48px auto;
}
.post-content{
  width: 90%;
  margin: auto;
  text-align: justify;
  line-height: 2.5rem;
}
p{
display:inline-block;
padding: 5px 15px;
background-color: orange;
color: white;
border-radius: 20px;
}
span{
position: static;
  margin: 10px;
  width: auto;
}
</style>
