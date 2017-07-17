<template>
    <div>
        <Heade :option="option"/>
        <div class="clist">
            <ul>
                <li class="e-all">
                    <div class="e-left">
                        <img src="/static/static/imgs/no_picture.gif" alt="">
                       <p><router-link to="/category" >所有商品</router-link></p>
                    </div>
                    <div class="e-right">
                        <img src="/static/static/imgs/ico_11.png" alt="">
                    </div>
                </li>
                <ul class="e-xs">
                    <li></li>
                </ul>
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
        data(){
            return{
                option:{
                    left:false ,
                    mid:"所有分类页",
                    right:false,
                    lback:true,
                    rback:true
                }
            }
        }
    }
</script>
<style scoped>
    .e-all{
        line-height: 4.5rem;
        width: 100%;
        background: #f4f4f4;
        clear: both;
        display: flex;
        justify-content: space-between;
    }
    .e-left{
        display: flex;
    }
    .e-left p{
        line-height: 4.5rem;
        margin-left: 0.3rem;
    }
    .e-left p a{

        color: #8d8d8d;
    }
    .e-left img{
        margin: 10px 0.6rem;
        width: 3.6rem;
        height: 3.3rem;
    }
    .e-right{
        margin-right: 1.2rem;
    }
    .e-right img{
        width: 16px;
    }
    .e-xs{
        border-bottom: 1px solid #d7d7d8;
    }
</style>