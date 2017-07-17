<template>
    <div>
        <Heade :option="option"/>
        <div class="black2"></div>
        <div class="banbox">
            <Ban/>
        </div>
       <div class="goodsInfo">
           <a href="" class="collect"></a>
           <div class="title">
               <h1>扬州三禾玉器新疆和田玉吊坠碧玉佛挂件正品厂价直销人气热卖</h1>
               <p>https://item.taobao.com/item.htm?id=521328109258</p>
           </div>
           <p class="g-p">
               本店售价:<span>￥490</span><del>￥2800</del>
           </p>
           <p class="g-xl">
                月销量:0件
           </p>
       </div>
        <div class="goodsBuy">
                <p class="goodsBuy-open">请选择 <i></i></p>
                <div class="fields">
                    <ul>
                        <li>
                            商品总价:
                            <span>￥490</span>
                        </li>
                    </ul>
                    <h2>数量:</h2>
                    <div class="items">
                        <span>
                            <button>-</button>
                            <input type="text" value="1">
                            <button>+</button>
                        </span>
                    </div>
                </div>
            <div class="option">
                <button>立即购买</button>
                <button><i></i>加入购物车</button>
            </div>
        </div>
        <section>
            <header>
                <ul>
                    <li class="current">详情</li>
                    <li>评价 <span>(0)</span></li>
                    <li>热销</li>
                </ul>
            </header>
            <div class="dimg">
                <p><img v-for="item in items" :src="item.imgs" ></p>
            </div>
            <Foot/>
            <Menus/>
        </section>
    </div>

</template>
<script>
    import Header from '@/components/Header'
    import Ban from '@/components/Ban'
    import Footer from '@/components/Footer'
    import Menus from '@/components/Menus'
    export default{
        data:function(){
            return{
                option:{
                    left:false ,
                    mid:"商品详情",
                    right:false,
                    lback:true,
                    mback:true,
                    fx:true
                },
                items:[
                    {
                        imgs:'./static/static/imgs/d-1.jpg'
                    },
                    {
                        imgs:'./static/static/imgs/d-2.jpg'
                    },
                    {
                        imgs:'./static/static/imgs/d-3.jpg'
                    },
                    {
                        imgs:'./static/static/imgs/d-4.jpg'
                    },
                ]
            }
        },
        components:{
            Heade:Header,
            Ban:Ban,
            Foot:Footer,
            Menus:Menus
        }
    }
</script>
<style scoped>
    .dimg img{
        width: 100%;
        height: auto;
        display: block;
    }
    section header .current{
        position: relative;
        background-color: #fff;
        border-top: 0.1rem solid #ee6a6a;
    }
    section header li {
        background-color: #f5f5f5;
        color: #333;
        line-height: 2.4rem;
        margin-right: 1px;
        border-top: 1px solid #f8f8f8;
        -webkit-box-flex: 1;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    section header ul{
        text-align: center;
        font-size: 0.8rem;
        background-color: #eee;
        display: -webkit-box;
    }
    section header{
        top: 0;
        z-index: 1;
        margin-top: 10px;
    }
    .option{
        padding: 0.8rem 0;
        display: -webkit-box;
        text-align: center;
    }
    .option button{
        color: #fff;
        border: 0;
        height: 2.5rem;
        line-height: 2.5rem;
        width: 50%;
        -webkit-box-flex: 1;
        display: block;
        -webkit-user-select: none;
        font-size: 0.9rem;
        border-radius: 5px;
    }
    .option button i{

        display: inline-block;
        width: 1rem;
        height: 1rem;
        margin-right: 0.5rem;
        position: relative;
        top: 0.2rem;
        background: url("/static/static/imgs/ico_01.png") no-repeat center;
        background-size: 1rem 1rem;

    }
    .option button:nth-child(1){
        background-color: #6bd0a2;
    }
    .option button:nth-child(2){
        background-color: #ec5151;
        margin-left: 0.5rem;
    }
    .items span input{
        height: 100%;
        width: 3.8rem;
        border: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
        font-weight: 700;
        text-align: center;
    }
    .items span button{
        font-style: normal;
        font-size: 1.5rem;
        font-weight: 700;
        border: 0;
        display: inline-block;
        width: 2rem;
        height: 100%;
        -webkit-user-select: none;
        background: #fafafa;
    }
    .items span{
        display: inline-block;
        vertical-align: middle;
        border: 1px solid #e3e3e3;
        letter-spacing: 0;
        height: 2.3rem;
        line-height: 2.3rem;
        overflow: hidden;
        border-radius: 5px;
    }
    .items{
        padding-bottom: 0.5rem;
    }
    .fields h2{
        color: #999;
        margin-bottom: 0.6rem;
        font-weight: normal;
        font-size: 12px;
        padding-top: 0.5rem
    }
    .fields ul{
        background-color: #fff;
        overflow: hidden;
        padding: 0.8rem 0;
        height: 1.6rem;
        line-height: 1.6rem;
        position: static;
    }
    .fields ul li{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        float: left;
        width: 50%;
        color: #999;
        font-size: 12px;
    }
    .fields ul li span{
        color: #ec5151;
        font-size: 1rem;
        display: inline-block;
        font-weight: bold;
    }



    .goodsBuy{
        padding: 0 0.5rem;
        margin: 0.7rem 0;
        background-color: #fff;
        border-radius: 5px;
    }
    .goodsBuy-open{
        display: block;
        color: #999;
        padding: 16px 0 16px;
        border-bottom: 1px solid #f3f3f3;
        font-size: 12px;
    }
    .goodsBuy-open i{
        position: relative;
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        margin-right: 0.2rem;
        float: right;
        background-image: -webkit-linear-gradient(left,transparent 70%,#666 70%,#666 100%),-webkit-linear-gradient(top,transparent 70%,#666 70%,#666 100%);
        transform: rotate(45deg);
        top: 0.3rem;
    }


    .black2{
        height: 0.6rem;
        line-height: 0.6rem;
        clear: both;
        background: #FFFFFF;
    }
.banbox{
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    max-width: 640px;
    background: #FFFFFF;
    height: 368px;
}
    .goodsInfo{
      background-color: #fff;
      padding: 0 1.5rem;
  }
   .goodsInfo .collect{
       display: inline-block;
       float: right;
       clear: both;
       background: red;
       font-size: 0.8rem;
       font-weight: 700;
       padding: 0 0.8rem 0 2.2rem;
       height: 1.7rem;
       line-height: 1.7rem;
       margin: -3rem -0.5rem 0.5rem 0;
       position: relative;
       z-index: 1;
       border-radius: 2rem;
       background: url("/static/static/imgs/ico_star.png") no-repeat 0.8rem 50% rgba(0,0,0,.2);
       background-size: 1rem 1rem;
   }
    .title h1{
        background-color: rgba(255,255,255,0.9);
        padding: 1rem 0;
        padding-bottom: 0.5rem;
        font-size: 0.9rem;
    }
    .title p{
        font-size: 12px;
        color: #333;
    }
    .g-p{
        padding: 0.4rem 0;
        color: #999;
        border-bottom: 1px solid #f3f3f3;
    }
    .g-p span{
        color: #ec5151;
        font-size: 1rem;
        display: inline-block;
        font-weight: bold;
        margin:0 6px;
    }
    .g-p del{
        font-size:0.5rem;
    }
    .g-xl{
        color: #999;
      padding:6px  0;
        font-size: 12px;
    }
</style>