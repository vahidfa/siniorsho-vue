<template>
  <div class="main">
      <div v-for="i in 6" :key="i" class="container">
      <div class="image">
          </div>
      <span class="title"></span>
      <span class="title"></span>
          <div class="text">
      <span></span>
      </div>
          <div class="text">
      <span></span>
      </div>
          <div class="text">
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
    padding: 16px;
    flex: 28%;
    display: flex;
    flex-direction: column;
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
    height: 15px;
    background-color: rgb(231, 227, 227);
    margin: 10px auto;
    border-radius: 5px;
    &:first-of-type{
        width: 80% !important;
    }
}
.title{
    border-radius: 5px;
    width: 90%;
    height: 20px;
    background-color: rgb(231, 227, 227);
    margin: 5px 0;
}
@media screen and (max-width: 900px) {
    .container{
        flex: 100%;
    }
}
</style>
