<template>
    <div>
        <div class="main-footer">
            <div class="footer-item">
                <h4>درباره سـیـنـیـورشـو</h4>
                  <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و....
</p>
            </div>
            <div class="footer-item">
                <h4>دسترسی سریع</h4>
                <ul>
                    <li><a href="#">صفحه اصلی</a></li>
                    <li><a href="#">وبلاگ</a></li>
                    <li><a href="#">درباره</a></li>
                    <li><a href="#">تماس</a></li>
                </ul>
            </div>
            <div class="footer-item">
                <h4>سینیورشو</h4>
                <img src="../assets/logo.png" alt="">

            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.main-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: auto;
    background-color: #505358;
    flex-wrap: wrap;
}
.footer-item{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 28%;
    margin: 20px 0;
    img{
        width: 40%;
        height: 40%;
        margin: auto;
    }
    h4{
        color: #fff;
        margin: 10px;
    }
    p{
        color: #bbb;
        font-size: 16px;
        text-align: justify;

    }
}
li{
    margin: 10px 0;
}
a{
    color: #fff;
    padding: 10px;
    &:hover{
        color:#ec406a ;
        transition: .3s;
    }
}
@media screen and (max-width: 900px) {
    .main-footer{
        width: inherit;
        &:last-child{
            flex-direction: row;
        }
    }
    .footer-item{
        width: 90%;
        flex-direction: column;
        margin: auto;
        ul{
            width: 100%;
            margin: 5px auto;
        }
    }
}
ul{
    padding: 0px;
}

</style>
