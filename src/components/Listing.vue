<template>
    <div :class="{'srp':srp,'grid':grid,'list':list}">
        <div class="product" v-for="item in items">
            <div class="pro-inner">
                <div class="proImg-wrap">
                    <router-link :to='item.urls'>
                        <img :src="item.imgs" alt="">
                    </router-link>
                </div>
                <div class="proInfo-wrap">
                    <div class="proTitle">
                        <a href="">{{item.name}}</a>
                    </div>
                    <div class="proPrice"><em>{{item.price}}</em></div>
                    <div class="proService"><del>{{item.service}}</del></div>
                    <div class="proSales">月销:<em>{{item.sales}}</em></div>
                    <div class="proIcons">
                        <img :src="item.icons" alt="" style="width: 55px;height: 16px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                items: [],
                srp:true,
                grid:false,
                list:false
            }
        },
        methods:{

        },
        beforeCreate:function() {
            var _this=this;
            $.get('/date', function (data) {
                var a= data.date;
                for(var i=0; i< a.length;i++){
                  _this.items.push(a[i]);
                }
            })
        }
    }
</script>
<style scoped>
.srp {
    display: table;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 5px;
    background-color: #eee;
}
.grid{
    display: table;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 5px;
    background-color: #eee;
}
.list{
    display: table;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 5px;
    background-color: #eee;
}
    .srp .product{
        display: inline-block;
        float: none;
        align-items: stretch;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
        padding: 6px;
        padding-bottom: 0;
        width: 49.9%;
    }
    .grid .product{
        width: 100%;
        -webkit-transition: all .5s linear;
        display: inline-block;
        float: none;
        align-items: stretch;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -ms-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;
        padding: 6px;
        padding-bottom: 0;
    }
    .list .product{
        width: 100%;
        padding: 5px;
        display: inline-block;
        float: none;
        align-items: stretch;
        box-sizing: border-box;
    }
    .srp .pro-inner{
        position: relative;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        width: 100%;
        height: auto;
        align-items: stretch;
        padding-bottom: 70px;
    }
    .grid .pro-inner{
        position: relative;
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .list .pro-inner{
        width: 100%;
        background-color: #fff;
        padding-top: 3px;
        border-radius: 5px;
        height: 100%;
        overflow: hidden;
    }
    .srp .proImg-wrap{
        overflow: hidden;
        max-height: 240px;
    }
    .grid .proImg-wrap{
        width: 100%;
        float: left;
    }
    .list .proImg-wrap{
        width: 26.4%;
        margin-right: 10px;
        -webkit-transition: all .6s linear;
        float: left;
    }
    .srp .proImg-wrap img{
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
    .grid .proImg-wrap img{
        width: 100%;
        border-radius: 5px 5px 0 0;
    }
    .list .proImg-wrap img{
        width: 100%;
        border-radius: 5px;
    }
    .srp .proTitle{
        height: 19px;
        position: relative;
        top: 19px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .grid .proTitle{
        height: 19px;
        overflow: hidden;
    }
    .list .proTitle{
        line-height: 17px;
        height: 36px;
        margin-bottom: 8px;
        overflow: hidden;
    }
    .srp .proTitle a{
        color: #333;
        font-size: 12px;
    }
    .grid .proTitle a{
        color: #333;
        font-size: 13px;
        text-decoration: none;
        -webkit-transition: all .3s linear;
    }
    .list .proTitle a{
        color: #333;
        font-size: 13px;
        text-decoration: none;
        -webkit-transition: all .3s linear;
    }
    .srp .proSales{
        float: right;
        position: relative;
        top: -36px;
        right: 12px;
        margin: 0;
        color: #999;
        font-size: 12px;
    }
    .grid .proSales{
        float: left;
        color: #999;
        font-size: 12px;
        line-height: 16px;
        margin-top: 3px;
        clear: left;
    }
    .list .proSales{
        line-height: 16px;
        margin-top: 3px;
        float: left;
        color: #999;
        font-size: 12px;
        font-family: arial;
    }
     .proSales em{
        color: #333;
    }
   .srp .proInfo-wrap{
        position: absolute;
        width: 100%;
        height: 65px;
        float: left;
        padding: 5px;
    }
   .grid .proInfo-wrap{
       float: left;
       padding: 5px;
       width: 100%;
       -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
       -ms-box-sizing: border-box;
       -o-box-sizing: border-box;
       box-sizing: border-box;
   }
   .list .proInfo-wrap{
       float: none;
       padding: 0;
       padding-left: 90px;
       box-sizing: border-box;
       width: 100%;
   }
    .srp .proPrice{
        height: 20px;
        line-height: 21px;
        position: relative;
        top: -19px;
        text-align: left;
    }
    .grid .proPrice{
        height: 20px;
        line-height: 21px;
        float: left;
        margin-right: 10px;
    }
    .list .proPrice{
        font-family: arial;
        height: 20px;
        line-height: 21px;
        float: left;
        margin-right: 10px;
    }
    .srp .proPrice em{
        color: #ee6a6a;
        font-size: 16px;
        font-weight: 700;
        margin-left: 2px;
    }
    .grid .proPrice em{
        color: #ee6a6a;
        font-size: 16px;
        font-weight: 700;
        margin-left: 2px;
        margin-right: 10px;
    }
    .list .proPrice em{
        color: #ee6a6a;
        font-size: 16px;
        font-weight: 700;
        margin-left: 2px;
        font-style: normal;
    }
    .srp .proService{
        display: none;
        color: #333;
        font-size: 13px;
        height: 20px;
        line-height: 21px;
    }
    .grid .proService{
        color: #333;
        font-size: 13px;
        height: 20px;
        line-height: 21px;
        float: none;
    }
    .list .proService{
        color: #333;
        font-size: 13px;
        height: 20px;
        line-height: 21px;
    }
    .proService del{
        color: #999;
        font-size: 12px;
    }
    .srp .proIcons{
        padding-left: 0;
        width: 100%;
        position: relative;
        top: -12px;
        height: 20px;
        overflow: hidden;
        text-align: left;
    }
    .grid .proIcons{
        padding-left: 10px;
        height: 20px;
        overflow: hidden;
        float: none;
    }
    .list .proIcons{
        padding-left: 10px;
        height: 20px;
        overflow: hidden;
    }
    .grid .proIcons img{
        margin: 0 3px 0 0;
        vertical-align: middle;
    }
    .list .proIcons img{
        vertical-align: middle;
        margin: 0 3px 0 0;
    }
</style>