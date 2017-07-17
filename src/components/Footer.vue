<template>
    <div id="foot">
        <div class="in">
            <router-link to="/" class="homeBut"></router-link>
            <div class="search_box">
                <form action="">
                    <input type="text">
                    <button></button>
                </form>
            </div>
            <a href="javascript:scroll(0,0);" class="topBut">
                <i></i>
                <p>TOP</p>
            </a>
        </div>
        <p class="link">
            <a href="">电脑版</a>
            <a href="#/">触屏版</a>
            <a href="">苹果客户端</a>
            <a href="">安卓客户端</a>
        </p>
        <p class="zs">
            © 2005-2017 三禾玉器 版权所有，并保留所有权利。
        </p>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>
<style scoped>
    #foot{
        padding: 0 0.6rem 0.6rem;
        color: #aaa;
        font-size: 0.6rem;
        margin-top: 20px;
    }
    .in{
        position: relative;
        height: 2.8rem;
        margin: 0 -0.6rem;
        padding: 0 3.5rem;
        background-color: #B9B9B9;
    }
    .search_box{
        position: relative;
        top: 0.4rem;
        width: 100%;
        background: #fff;
        border-radius: 20px;
        text-align: center;
    }
    .search_box input{
        width: 85%;
        height: 2rem;
        line-height: normal;
        border: none;
        font-size: 0.8rem;
        outline: none;
    }
    .search_box button{
        position: absolute;
        top: 0.4rem;
        right: 0.6rem;
        width: 1.2rem;
        height: 1.2rem;
        border: none;
        background: url("/static/static/imgs/ico_07.png")no-repeat 50% 50%;
        background-size: 1.2rem 1.2rem;
    }
    .homeBut{
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        width: 2.8rem;
        height: 2.8rem;
        color: #fff;
        font-size: 0.65rem;
        background: url("/static/static/imgs/ico_05.png")no-repeat 50% 50%;
        background-size: 1.8rem 1.8rem;
    }
    .topBut{
        position: absolute;
        top: 0;
        right: 0;
        width: 2.8rem;
        height: 2.8rem;
        color: #fff;
        font-size: 0.65rem;
        text-decoration: none;
    }
    .topBut i{
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 0.8rem;
        width: 0.9rem;
        height: 0.9rem;
        margin: -0.3rem 0 0 -0.3rem;
        background: url("/static/static/imgs/ico_06.png")no-repeat 50% 50%;
        background-size: 1.0rem 1.0rem;
    }
    .topBut p{
        position: absolute;
        bottom: 0.14rem;
        left: 0.45rem;
        width: 2.2rem;
        text-align: center;
        line-height: 1.3rem;
    }
    .link{
        line-height: 1rem;
        font-size: 0.7rem;
        color: #1ca2e1;
        text-align: center;
    }
    .link a{
        display: inline-block;
        margin-top: 0.3rem;
        padding: 0 0.6rem 0 0.3rem;
        border-right: 1px solid #D5D5D5;
        color: #1CA2E1;
    }
    .link a:nth-child(4){
        border: none;
    }
    .zs{
        text-align: center;
        line-height: 1.3rem;
    }
</style>