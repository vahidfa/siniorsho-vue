<template>
<div>
    <div class="mainForm">
<h1 style="color:#304455;">ایجاد پست</h1>
<form class="postForm" @submit.prevent="submit">
    <label  style="margin-top:10px;">
        عنوان
    </label>
    <input type="text" placeholder="عنوان..." style="margin-top:10px;" v-model="blog.title">
    <label style="margin-top:10px;">متن</label>
    <textarea name="" id="" cols="100" rows="15" style="margin-top:10px;" v-model="blog.content"></textarea>
    <label style="margin-top:10px;">دسته بندی</label>
   <select namine="" id="" style="margin-top:10px; width: 20%;" v-model="blog.category">
       <option v-for="(item, index) in categoryItems"
       :key="index" :value="item" style="margin-top:10px;width: 20%;">{{item}}</option>
   </select>
   <label style="margin-top:10px;">انتخاب تصویر </label>
   <input type="file" accept="image/*" style="margin-top:10px;" ref="imageFile" @change="getImage">
   <div style="margin:10px 0px; width:100%">
 <button class="btn" type="submit">ارسال</button>
   </div>
</form>
</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        category: '',
        image: ''
      },
      categoryItems: ['css', 'html', 'javaScript', 'vuejs']
    }
  },
  methods: {
    async getImage () {
      const file = this.$refs.imageFile.files[0]
      console.log(this.blog.image)
      this.blog.image = await this.showImage(file)
    },
    showImage (file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onload = () => {
          file.src = reader.result
          resolve(file)
        }
        reader.readAsDataURL(file)
        console.log(this.blog.image)
      })
    },
    submit () {
      axios.post('https://sinior-419e5.firebaseio.com/posts.json', this.blog)
        .then((response) => {
          console.log(response)
          this.$router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.postForm{
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: space-around;
    input{
      height: 48px;
    }
}
.mainForm{
    width: 70%;
    margin: 50px;
   justify-content: space-around;
    height: 100%;
    margin: auto;
}
.btn{
  background-color: orange;
  padding: 15px 40px;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
