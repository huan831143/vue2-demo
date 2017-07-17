<template>
    <div id="header">
        <div class="header-left">
            <a href="javascript:void(0);" class="ico-1" v-if="left" @click="anileft"></a>
            <a href="javascript:history.back();" class="ico-10" v-if="lback"></a>
        </div>
        <h1 v-if="mback">{{option.mid}}</h1>
        <div v-if="cmback" class="sear">
            <form action="">
                <input type="text" placeholder="请输入商品名称">
                <button></button>
            </form>
        </div>
        <div class="header-right">
            <a href="javascript:void(0);" class="ico-2" v-if ="right"></a>
            <a href="javascript:void(0);" class="ico-3" v-if ="rback"></a>
            <a href="javascript:void(0);" :class="{'i-srp':cla1,'i-grid':cla2,'i-list':cla3}" v-if="crback" @click="changeClick" ></a>
            <router-link to="/share" class="ico-5" v-if="fx"></router-link>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        option:[Object],
        default:{
            "left":true,
            "mid":"",
            "right":true,
            "lback":false,
            "rback":false,
            "mback":true,
            "cmback":false,
            "crback":false,
            "fx":false

        }

    },
    data(){
        return{
            msg:'',
            left:this.option.left,
            right:this.option.right,
            lback:this.option.lback,
            rback:this.option.rback,
            mback:this.option.mback,
            cmback:this.option.cmback,
            crback:this.option.crback,
            fx:this.option.fx,
            cla1:true,
            cla2:false,
            cla3:false

        }
    },
    methods:{
            changeClick:function(){
                this.$emit('chClick',this);

            },
            anileft:function(){
                this.$emit('aniClick',this);
            }
        }

}
</script>
<style scoped>
    .i-grid{
        width: 3rem;
        height: 3rem;
        display: block;
        padding: 0 0.2rem;
        text-indent: -999em;
        overflow: hidden;
        background: url(/static/static/imgs/sort3.png) no-repeat 50% 50%;
        background-size: 2.5rem 2.5rem;
    }
    .sear{
        width: 312px;
        background: #fff;
        border-radius: 20px;
        text-align: center;
        height: 32px;
        position: relative;
        top:8px;
    }
    .sear input{
        width: 90%;
        height: 30px;
        border: none;
    }
    .sear button{
        position: absolute;
        top: 0.4rem;
        right: 0.6rem;
        width: 1.2rem;
        height: 1.2rem;
        border: none;
        background: url("/static/static/imgs/ico_07.png")no-repeat 50% 50%;
        background-size: 1.2rem 1.2rem;
    }
    #header{
        z-index: 888;
        background-color: #ec5151;
        position: relative;
        height: 48px;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .header-left, .header-right{
        height: 48px;
        width: 60px;
    }
    .ico-1{
        width: 54px;
        height: 48px;
        display: block;
        padding: 0 3px;
        overflow: hidden;
        background:url("/static/static/imgs/ico_02.png")no-repeat 50% 50%;
        background-size: 1.8rem 1.8rem;
    }
    #header h1{
        color: #fff;
        font-size: 18px;
        line-height: 48px;
        text-align: center;
        font-weight: normal;
    }
    .ico-2{
        width: 54px;
        height: 48px;
        display: block;
        padding: 0 3px;
        overflow: hidden;
        background:url("/static/static/imgs/ico_01.png")no-repeat 50% 50%;
        background-size: 1.8rem 1.8rem;
    }
    .ico-10{
        width: 54px;
        height: 48px;
        display: block;
        padding: 0 3px;
        overflow: hidden;
        background:url("/static/static/imgs/ico_10.png")no-repeat 50% 50%;
        background-size: 1.2rem 1.2rem;
    }
    .ico-3{
        width: 54px;
        height: 48px;
        display: block;
        padding: 0 3px;
        overflow: hidden;
        background:url("/static/static/imgs/ico_03.png")no-repeat 50% 50%;
        background-size: 2rem 2rem;
    }
    .i-srp{
        width: 3rem;
        height: 3rem;
        display: block;
        padding: 0 0.2rem;
        text-indent: -999em;
        overflow: hidden;
        background:url("/static/static/imgs/sort2.png")no-repeat 50% 50%;
        background-size: 2.5rem 2.5rem;
    }
    .i-list{
        width: 3rem;
        height: 3rem;
        display: block;
        padding: 0 0.2rem;
        text-indent: -999em;
        overflow: hidden;
        background: url("/static/static/imgs/sort1.png") no-repeat 50% 50%;
        background-size: 2.5rem 2.5rem;
    }
    .ico-5{
        width: 54px;
        height: 48px;
        display: block;
        padding: 0 3px;
        overflow: hidden;
        background:url("/static/static/imgs/ico_15.png")no-repeat 50% 50%;
        background-size: 1.3rem 1.3rem;
    }
</style>