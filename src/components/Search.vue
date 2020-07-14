<template>
   <div class="search-bar">
               <input type="text" placeholder="دنبال چی هستی؟" v-model="searchData">
               <button>
                   <i class="fas fa-search"></i>
               </button>
           </div>
</template>

<script>
export default {
  computed: {
    searchData: {
      get () {
        return this.$store.state.search
      },
      set (value) {
        this.$store.commit('search', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar{
    position: sticky;
    width: 100%;
    height: 70px;
    background-color: #fff;
    margin: 20px 0px;
    margin-left: auto;
    border-radius: 4px;
    border: 1px solid #bbb;
    display: flex;
    justify-content: center;
      input{
          margin: 10px;
          margin-left: 0px;
          padding: 20px 10px;
          width: 90%;
          border-radius: 5px;
          border: 1px solid #ccc;
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
          border-left: none;
        //   margin: auto;
          outline: none;
      }
      button{
          margin: 10px;
          height: 48px;
          margin-right: 0px;
          background-color: #fff;
          border: none;
          border: 1px solid #ccc;
          border-right: none;
      }
}
</style>
