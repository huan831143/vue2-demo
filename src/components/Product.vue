<template>
    <div class="product">
        <div class="product-01" v-for="item in items">
            <router-link :to="item.urls">
                <img :src="item.imgs" alt="">
                <p><span>{{item.price}}</span>
                    <br>
                    {{item.name}}
                </p>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Product',
        data(){
            return{
                items: [
                ]
            }

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
    .product{

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .product-01{
        width: 27%;
        padding: 0.6rem;
    }
    .product-01 a{
        color: #333;
        text-decoration: none;
    }
    .product-01 a img{
        width: 100%;
        height: auto;
    }
    .product-01 a p{
        text-align: center;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .product-01 a p span{
        color: #ec5151;
        font-size: .675rem;
        display: inline-block;
    }
</style>