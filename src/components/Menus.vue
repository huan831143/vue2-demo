<template>
    <div id="menus">
        <ul>
            <li><router-link to="/" class="menu-link"><i class="iconfont icon-41kongxinfangzi"></i><span>首页</span></router-link></li>
            <li><router-link to="/every" class="menu-link"><i class="iconfont icon-zhangdan"></i><span>分类</span></router-link></li>
            <li><router-link to="" class="menu-link"><i class="iconfont icon-sousuo"></i><span>搜索</span></router-link></li>
            <li><router-link to="/" class="menu-link"><i class="iconfont icon-appwaimai"></i><span>购物车</span><span class="num">0</span></router-link></li>
            <li><router-link to="/login" class="menu-link"><i class="iconfont icon-wode"></i><span>会员中心</span></router-link></li>
        </ul>
        <div class="menu-shrink shrink" @click="hianhua">
            <span class="bigmenus"></span>
            <span class="big-num">0</span>
        </div>
    </div>
</template>
<script>
    export default {
        methods:{
            hianhua:function(){
               var  a= $("#menus").css("left");
                if(a == "0px"){
                    $("#menus").animate({left: '-100%'}, "500");
                    $(".shrink").removeClass("menu-shrink");
                    $(".shrink").addClass("menu-shrink1");
                    $(".big-num").css("opacity" ,"1");
                    $(".bigmenus").css("width","32px")
                }else if(a !="0px"){
                    $("#menus").animate({left: '0'}, "500");
                    $(".shrink").removeClass("menu-shrink1");
                    $(".shrink").addClass("menu-shrink");
                    $(".big-num").css("opacity" ,"0");
                    $(".bigmenus").css("width","0")
                }




            }
        }
    }
</script>

<style scoped>
    .bigmenus{
        display: inline-block;
        position: absolute;
        right: 20px;
        top: 15px;
        width: 0;
        height: 29px;
        background-image: url("/static/static/imgs/mues.png");
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .big-num{
        position: absolute;
        height: 16px;
        line-height: 16px;
        padding: 0 5px;
        border-radius: 8px;
        background-color: #fd4609;
        color: #fff;
        font-size: 12px;
        opacity: 0;
        right: -8px;
        top: -8px;
    }
    .menu-shrink1{
        position: relative;
        width: 62px;
        height: 58px;
        background-color: rgba(153,153,153,.75);
        right: -62px;
    }
    .menu-shrink1:after{
        content: '';
        position: absolute;
        top: 24px;
        width: 7px;
        height: 7px;
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
        transform: rotate(45deg);
        right: 7px;
    }
    #menus{
        position: fixed;
        bottom: 0;
        z-index: 999;
        display: flex;
        width: 100%;
        left: 0;
    }
    #menus ul{
        display: flex;
        flex: 1;
        height: 57px;
        border-top: 1px solid #e5e5e5;
        background-color: #fff;
        justify-content: space-between;

    }
    .menu-link{
        position: relative;
        display: block;
        width: 62px;
        height: 50px;
        line-height: 24px;
        padding-top: 7px;
        text-align: center;
        white-space: nowrap;
        color: #999;
    }
    .menu-link:active{
        color: #ff7171;
    }
    .iconfont:active{
        color: #ff7171;
    }
    .menu-link span{
        display: block;
        font-size: 12px;
    }
.iconfont{
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    white-space: nowrap;
    color: #999;
}
.menu-shrink{
    position: relative;
    height: 58px;
    background-color: rgba(153,153,153,.75);
    width: 20px;
    right: 0;
}
.menu-shrink:before{
    content: '';
    position: absolute;
    top: 24px;
    width: 7px;
    height: 7px;
    border-top: 2px solid #fff;
    border-right: 2px solid #fff;
    display:block;
    right: 3px;
    transform: rotate(-135deg);
}
    .menu-link .num{
        display: inline-block;
        position: absolute;
        height: 16px;
        line-height: 16px;
        padding: 0 5px;
        border-radius: 8px;
        background-color: #fd4609;
        color: #fff;
        font-size: 12px;
        right: 7px;
        top: 4px;
    }

</style>