<template>
    <div>
        <Heade :option="option"/>
        <div class="share-box">
            <ul>
                <li><a href="" class="s-qq"><span>分享到QQ空间</span></a></li>
                <li><a href="" class="s-swb"><span>分享到新浪微博</span></a></li>
                <li><a href="" class="s-twb"><span>分享到腾讯微博</span></a></li>
                <li><a href="" class="s-ren"><span>分享到人人网</span></a></li>
                <li><a href="" class="s-wx"><span>分享到微信</span></a></li>
                <li><a href="" class="s-db"><span>分享到豆瓣</span></a></li>
                <li><a href="" class="s-kx"><span>分享到开心网</span></a></li>
                <li><a href="" class="s-teba"><span>分享到百度贴吧</span></a></li>
                <li><a href="" class="s-shwb"><span>分享到搜狐微博</span></a></li>
                <li><a href="" class="s-tb"><span>分享到我的淘宝</span></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    export default{
        components:{
            Heade:Header
        },
        data:function(){
            return {
                option:{
                   left:false ,
                   mid:"分享给朋友",
                   right:false,
                   lback:true,
                   mback:true
                }
            }
        }
    }
</script>
<style scoped>

.share-box{
   margin-top: 16px;
    padding: 0 0.7rem;
}
.share-box ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    border: 1px solid #e2e2e2;
    background: #FFFFFF;
    padding: 0.5rem;
    border-radius: 10px;
}
    .share-box ul li{
        width: 50%;
        height: 3rem;
        line-height: 3rem;
        position: relative;
    }
    .share-box a{
        display: inline-block;
        width: 100%;
        position: relative;
        margin: 6px 6px 6px 0;
        overflow: hidden;
        color: #3a8ceb;
        line-height: 32px;
        height: 32px;
        background: url("/static/static/imgs/icons_1_32.png")no-repeat;
    }

    .share-box .s-qq{
        background-position:0 -52px ;
    }
    .share-box .s-swb{
        background-position:0 -104px ;
    }
.share-box .s-twb{
    background-position:0 -260px ;
}
.share-box .s-ren{
    background-position:0 -208px ;
}
.share-box .s-wx{
    background-position:0 -1612px ;
}
.share-box .s-db{
    background-position:0 -468px ;
}
.share-box .s-kx{
    background-position:0 -312px ;
}
.share-box .s-teba{
       background-position:0 -728px ;
   }
.share-box .s-shwb{
    background-position:0 -3016px ;
}
.share-box .s-tb{
    background-position:0 -675px ;
}
    .share-box li  a span{
        position: absolute;
        left: 2.5rem;
        top: 0rem;
        color: #333;
        font-size: 12px;
    }
</style>