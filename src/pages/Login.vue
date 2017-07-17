<template>
    <div>
    <Heade :option="option"/>
        <section>

            <div class="hd">
                <span>欢迎光临，登录后体验更多服务</span>
                <ul>
                    <li><a href="javascript:void(0)" class="on dlb" @click="dlblock">登陆</a></li>
                    <li><a href="javascript:void(0)" class="zcb" @click="zcblock">注册</a></li>
                </ul>
            </div>
            <div class="login-dl" style="display: block">
                <form>
                    <p><input type="text" placeholder="用户名/手机/电子邮件地址" class="inp"></p>
                    <p><input type="password" placeholder="密码" class="inp"></p>
                    <p class="mdl"><input type="checkbox" name="mdl" id="mdl"><label for="mdl">一个月内免登陆</label></p>
                    <p><input type="submit" value="立即登录" class="l-sub"></p>
                </form>
                <p class="wmima"><a href="" class="wj">忘记密码</a></p>
                <div class="hezuo">
                    <p class="h">使用合作账号登录</p>
                    <p class="lj">
                        <a href=""><img src="/static/static/imgs/qq.png" alt=""></a>
                        <a href=""><img src="/static/static/imgs/weibo.png" alt=""></a>
                        <a href=""><img src="/static/static/imgs/renren.png" alt=""></a>
                    </p>
                </div>
            </div>
            <div class="login-zc" style="display: none">
                <form >
                    <p><input type="text" placeholder="请输入用户名" class="inp"></p>
                    <p><input type="password" placeholder="请输入密码" class="inp"></p>
                    <p><input type="password" placeholder="请重新输入一遍密码" class="inp"></p>
                    <p class="mdl"><input type="checkbox" name="mdl" id="ty"><label for="ty"> 我已看过并同意《<a href="">用户协议</a>》</label></p>
                    <p><input type="submit" value="下一步" class="l-sub"></p>

                </form>
            </div>
        </section>
    </div>
</template>
<script>
    import Header from '@/components/Header'
    export default {
        data:function(){
            return {
                option:{
                    left:false ,
                    mid:"登录/注册",
                    right:false,
                    lback:true,
                    mback:true
                }
            }
        },
        components:{
            Heade:Header
        },
        methods:{
            dlblock:function(){
              $(".login-dl").show();
              $(".login-zc").hide();
                $(".dlb").addClass("on")
                $(".zcb").removeClass("on")
            },
            zcblock:function(){
                $(".login-dl").hide();
                $(".login-zc").show();
                $(".zcb").addClass("on");
                $(".dlb").removeClass("on")

            }
        }
    }
</script>
<style scoped>

  section{
    padding: 0 0.7rem;
    margin: 10px auto;
}
    .hd{
        height: 2.7rem;
        line-height: 2.5rem;
        font-size: 1.1rem;
        overflow: hidden;
    }
    .hd span{
        float: left;
        font-size: 0.8rem;
    }
    .hd ul{
        float: right;
    }
    .hd ul li{
        float: left;
        padding-left: 0.5rem;
        vertical-align: top;
    }
    .hd ul li .on{
        color: #ee6a6a;
        display: block;
        height: 2.5rem;
        line-height: 2.5rem;
        border-bottom: 2px solid #ee6a6a;
    }
    .hd ul a{
        color: #8d8d8d;
    }
     form p{
        padding: 0.5rem 0;
        display: table;
        width: 100%;
        margin-start: 40px;
    }
    .inp{
        height: 2.4rem;
        width: 94%;
        border: solid 1px #ddd;
        padding: 0 3%;
        color: #333;
        font-size: 0.8rem;
        -webkit-border-radius: 0;
        background: #fff;
    }
    #mdl{
        vertical-align:middle;
        zoom:200%;
    }
    #ty{
        vertical-align:middle;
        zoom:200%;
    }
    label{
        font-size: 12px;
    }
    .mdl a{
        color: #8d8d8d;
        font-size: 12px;
    }
    .l-sub{
        color: #fff;
        border: 0;
        height: 2.5rem;
        line-height: 2.5rem;
        width: 100%;
        -webkit-box-flex: 1;
        display: block;
        -webkit-user-select: none;
        font-size: 0.9rem;
        background: #ee6a6a;
        text-align: center;
    }
    .mdl{
        text-align: left;

    }
     .wmima{
        text-align: left;
    }
    .wj{
        font-size: 0.8rem;
        color: #1CA2E1;
        height: 1.8rem;
        line-height: 1.8rem;
        padding: 0;
        margin-right: 2.8rem;
        display: inline-block;
        border: none;
        background: none;
        vertical-align: top;
    }
    .hezuo{
        text-align: left;
    }
    .h{
        height: 2.4rem;
        line-height: 2.4rem;
        font-size: 14px;
    }
    .lj a{

    }
    .lj a img{
        width: 3.2rem;
        height: 3.2rem;
    }
</style>