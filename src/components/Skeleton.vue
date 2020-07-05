<template>
  <div class="main">
      <div v-for="i in 6" :key="i" class="container">
      <div class="image">
          </div>
      <span class="title" v-for="i in 2" :key="i"></span>
          <div  v-for="i in 3" :key="i" class="text">
      <span></span>
      </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
}
.container{
    width: 26%;
    display: flex;
    flex-direction: column;
    margin: auto;
}
.image{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin:5px auto;
    width: 100%;
    height: 150px;
    background-color: rgb(231, 227, 227);
    border-radius: 5px;
    }
.text{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 5px;
    background-color: rgb(231, 227, 227);
    margin: 10px auto;
    border-radius: 5px;
    &:first-child{
        width: 80% !important;
    }
}
.title{
    border-radius: 5px;
    width: 90%;
    height: 15px;
    background-color: rgb(231, 227, 227);
    margin: 5px 0;
}
</style>
