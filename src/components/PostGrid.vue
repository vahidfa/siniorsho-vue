<template>
  <div>
      <div class="main-content">
       <div class="right-content">
           <div class="post-item">
               <div class="post-img">
                   <img src="../assets/pic/git-github.png" alt="">
               </div>
               <div class="post-title">
                   <h3>گیت را قورت بده!</h3>
               </div>
               <div class="post-description">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
               </div>
               <div class="read-btn">
                   <p>بیشتر بخوانید</p>
               </div>
           </div>
           <div class="post-item">
               <div class="post-img">
                   <img src="../assets/pic/graphql-course.png" alt="">
               </div>
               <div class="post-title">
                   <h3>آموزش GraphQl</h3>
               </div>
               <div class="post-description">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
               </div>
               <div class="read-btn">
                   <p>بیشتر بخوانید</p>
               </div>
           </div>
           <div class="post-item">
               <div class="post-img">
                   <img src="../assets/pic/js-1-1.jpg" alt="">
               </div>
               <div class="post-title">
                   <h3>تغییرناپذیری در جاوااسکریپت</h3>
               </div>
               <div class="post-description">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
               </div>
               <div class="read-btn">
                   <p>بیشتر بخوانید</p>
               </div>
           </div>
           <div class="post-item">
               <div class="post-img">
                   <img src="../assets/pic/react-1.jpg" alt="">
               </div>
               <div class="post-title">
                   <h3>کامپوننت ها در react</h3>
               </div>
               <div class="post-description">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
               </div>
               <div class="read-btn">
                   <p>بیشتر بخوانید</p>
               </div>
           </div>
           <div class="post-item">
               <div class="post-img">
                   <img src="../assets/pic/reactnative00.jpg" alt="">
               </div>
               <div class="post-title">
                   <h3>آموزش react native</h3>
               </div>
               <div class="post-description">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
               </div>
               <div class="read-btn">
                   <p>بیشتر بخوانید</p>
               </div>
           </div>
           <div class="post-item">
               <div class="post-img">
                   <img src="../assets/pic/images.png" alt="">
               </div>
               <div class="post-title">
                   <h3>آموزش vuejs</h3>
               </div>
               <div class="post-description">
                   <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
               </div>
               <div class="read-btn">
                   <p>بیشتر بخوانید</p>
               </div>
           </div>
       </div>
       <div class="left-content">
           <div class="search-bar">
               <input type="text" placeholder="دنبال چی هستی؟">
               <button>
                   <i class="fas fa-search"></i>
               </button>
           </div>
           <div class="newsletter">
                   <img src="../assets/pic/newsletter.jpg" alt="">
               <input type="text" placeholder="ایمیل خود را وارد کنید...">
               <div>
                   <button>عضویت در خبرنامه</button>
               </div>
           </div>
       </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
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
    width:70%;
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
        margin: 5px 100px;
        background-color:#ec406a ;
        box-shadow: 0 4px 8px 0 #ec406b79;
        border: none;
        padding: 10px 20px;
        color: #fff;
        border-radius: 3px;
    }
}
</style>
