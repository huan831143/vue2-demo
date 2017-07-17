<template>
<div id="Page">
    <div id="left">
        <ul>
            <li>
                <router-link to="/">所有商品<span></span></router-link>
            </li>
        </ul>
    </div>
    <div id="right" >
        <Heade :option="option" v-on:aniClick="animleft"/>
        <Banner/>
        <div id="content" @click="huanyuan">
            <div class="top">
                <button>搜索本站商品</button>
                <i class="icon-3"></i>
            </div>
            <div class="nav">
                <ul>
                    <li><router-link to="/every"><img src="/static/static/imgs/index_01.png" alt=""></router-link><p>全部分类</p></li>
                    <li><a href=""><img src="/static/static/imgs/index_02.png" alt=""></a><p>帮助中心</p></li>
                    <li><router-link to="/login"><img src="/static/static/imgs/index_03.png" alt=""></router-link><p>个人中心</p></li>
                    <li><router-link to="/share"><img src="/static/static/imgs/index_04.png" alt=""></router-link><p>分享</p></li>
                </ul>
            </div>
            <section>
                <header>
                    <span>所有商品</span>
                    <router-link to="/category" ></router-link>
                </header>
                <Product/>
            </section>
        </div>
        <Foot/>
    </div>
        <Menus/>

</div>
</template>
<script>
    import Header from '@/components/Header'
    import Banner from '@/components/Banner'
    import Product from '@/components/Product'
    import Footer from '@/components/Footer'
    import Menus from '@/components/Menus'
    export default {
        name: 'app',
        components:{
            Banner:Banner,
            Heade:Header,
            Product:Product,
            Foot:Footer,
            Menus:Menus
        },
        data:function(){
            return {
                option:{
                    left:true ,
                    mid:"三禾玉器",
                    right:true,
                    lback:false,
                    rback:false,
                    mback:true
                }
            }
        },
        methods:{
            animleft:function(){
                var _div = $("#right").css("left")
                if(_div!="0px"){
                    $("#right").animate({left:"0"},'5000')
                    $("#left").animate({left:"-80%"},'4000').hide("5000")
                }else {
                    $("#left").show().animate({left:"0"},'4000')
                    $("#right").animate({left:"80%"},'5000')
                }

            },
            huanyuan:function(){
               var _div = $("#right").css("left")
                if(_div!="0px"){
                    $("#left").animate({left:"-80%"},'4000').hide("5000")
                    $("#right").animate({left:"0"},'5000')

                }

            }

        }

    }
</script>
<style scoped>
    #Page{
        width: 100%;
        height: auto;
        overflow: hidden;
        position: relative;
    }
    #right{
        position: relative;
        left:0;
    }
    #left{
        display: none;
        width: 80%;
        height: 100%;
        overflow: hidden;
        padding: 0;
        position: absolute;
        left: -80%;
        top: 0;
        z-index: 999;
        background: #333333;
        color: rgba(255, 255, 255, 0.6);
    }
    #left ul{
        padding: 20px 0 40px 0;
        background: inherit;
        -webkit-overflow-scrolling: touch;
        overflow: scroll;
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        padding: 20px;

    }
    #left li{
        list-style: none;
        display: block;
        padding: 0;
        margin: 0;
    }
    #left li a{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: inherit;
        line-height: 20px;
        display: block;
        padding: 10px 10px 10px 20px;
        margin: 0;
    }
    #left li a span{
        width: 40px;
        height: 41px;
        padding: 0;
        position: absolute;
        right: 0;
        top: 4px;
        z-index: 2;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: inherit;
        line-height: 20px;
        display: block;
    }
    #left li a span:after{
        content: '';
        border: 2px solid transparent;
        display: block;
        width: 7px;
        height: 7px;
        margin-bottom: -5px;
        position: absolute;
        bottom: 50%;
        border-color: rgba(255, 255, 255, 0.3);
        border-top: none;
        border-left: none;
        right: 18px;
        transform: rotate(-45deg);
    }
    #left li a:after{
        content: '';
        border-bottom-width: 1px;
        border-bottom-style: solid;
        display: block;
        width: 100%;
        position: absolute;
        left: 0;
        border-color: rgba(0, 0, 0, 0.15);
        top: 60px;
    }
    #content{
        padding: 0 12px;
    }
    .top{
        height: 40px;
        margin: 0 auto;
        position: relative;
        background: #fff;
        border-radius: 15px;
        top:10px;
        margin-bottom: 24px;
    }
    .top button{
        background: none;
        font-size: 14px;
        height: 40px;
        width: 100%;
        border: none;
        text-align: left;
        padding-left: 5%;
        border-radius: 15px;
        color: silver;
        outline: 0;
    }
    .top i{
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 0px 15px 15px 0px;
        background-color: #a1a1a1;
    }
    .icon-3{
        background: url("/static/static/imgs/ico_03.png")no-repeat 50% 50%;
        background-size: 28px 28px;
    }
    .nav{
        margin-bottom: 16px;
    }
    .nav ul{
        display: flex;
        justify-content: space-around;
        flex-flow: row;
    }
    .nav li p{
        color: #333;
        font-size: 12px;
        margin-top: 5px;
        text-align: center;
    }
    .nav li a img{
        width: 66px;
    }
    section{
        border: 1px solid #e2e2e2;
        background: #FFFFFF;
    }
    section header{
        background: #ee6a6a;
        color: #FFFFFF;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        padding-left: 5px;
        margin: 10px;
        text-align: right;
    }
    section header span{
        float:left;
    }
    section header a{
        display: inline-block;
        margin: 0.55rem 0.3rem 0 0;
        width: 0.8rem;
        height: 0.8rem;
        float: right;
        background: url("/static/static/imgs/ico_04.png")no-repeat 50% 50%;
        background-size: 0.8rem 0.8rem;
    }
</style>