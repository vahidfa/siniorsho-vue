<template>
    <div class="login">
        <form class="container">
            <label>نام کاربری</label>
            <input type="text">
            <label>رمز عبور</label>
            <input type="password">
            <button>ورود</button>
        </form>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    // width: 40%;
    height: auto;
    color: #6c757d;
    button{
        width: 25%;
        margin: auto;
        margin: 15px auto;
        padding:5px 10px;
        border-radius: 5px;
        border: none;
        background-color: #ec406a;
        color: #fff;
        font-size:18px;
         cursor: pointer;
    }
    input{
        border-radius: 4px;
        width: 80%;
        outline: none;
        padding: 5px;
        margin: 0 35px;
        border: 1px solid #ccc;
    }
    label{
        margin: 15px;
    }
}
.login{
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
</style>
