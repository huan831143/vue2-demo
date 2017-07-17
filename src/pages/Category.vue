<template>
      <div>
          <Heade :option="option"  v-on:chClick="chanClick" />
          <div class="filtrate">
              <ul>
                  <li class="f-cur"><a href="">综合</a></li>
                  <li ><a href="">人气<i class="f-icon"></i></a></li>
                  <li><a href="">销量</a></li>
                  <li><a href="">价格
                  <span>
                      <i class="mt"></i>
                      <i class="md"></i>
                  </span>
                  </a></li>
                  <li class="filtrate-btn"><a href="javascript:void(0);" class="f-btn">筛选</a></li>
              </ul>
          </div>
          <Listing/>
          <Foot/>
          <Menus/>
      </div>
</template>
<script>
    import Header from '@/components/Header'
    import Footer from  '@/components/Footer'
    import Menus from  '@/components/Menus'
    import Listing from '@/components/Listing'
    export default{
        components: {
            Heade: Header,
            Foot: Footer,
            Menus: Menus,
            Listing: Listing
        },
        data(){
            return {
                option: {
                    left: false,
                    right: false,
                    lback: true,
                    mback: false,
                    "cmback": true,
                    "crback": true

                }
            }
        },
        methods: {
            chanClick: function (somedata) {
                var _class = somedata.cla1;
                var _class2 = somedata.cla2;
                var _class3 = somedata.cla3;
                if (_class) {
                    somedata.cla1 = false;
                    somedata.cla2 = true;
                    somedata.cla3 = false
                    this.$children[1].srp = false;
                    this.$children[1].grid = true;
                    this.$children[1].list = false;
                } else if (_class2) {
                    somedata.cla1 = false;
                    somedata.cla2 = false;
                    somedata.cla3 = true;
                    this.$children[1].srp = false;
                    this.$children[1].grid = false;
                    this.$children[1].list = true;
                } else if (_class3) {
                    somedata.cla3 = false
                    somedata.cla1 = true;
                    somedata.cla2 = false;
                    this.$children[1].srp = true;
                    this.$children[1].grid = false;
                    this.$children[1].list = false;
                }
            }
        }
    }
</script>
<style scoped>
.filtrate{
    width: 100%;
    text-align: center;
    height: 2.4rem;
    background: #fff;
}
    .filtrate ul{
        display: table;
        width: 100%;
        margin: 0;
        padding: 0;
        border-collapse: collapse;
    }
    .filtrate ul li{
        display: table-cell;
        padding: 0.5rem 0;
    }
    .filtrate ul .f-cur{
        border-bottom: 1px solid #ee6a6a;
    }
    .filtrate .f-cur a{
        color: #ee6a6a;
    }
    .filtrate a{
        display: inline-block;
        width: 100%;
        font-size: 0.9rem;
        color: #666;
        text-decoration: none;
    }
   .filtrate .f-icon{
        background: url("/static/static/imgs/filter.png") no-repeat 0 0;
        background-size: 0.6rem 0.8rem;
        position: static;
        width: 0.6rem;
        height: 0.8rem;
        vertical-align: middle;
    }
    .filtrate a span{
        position: relative;
    }
    .filtrate i{
        position: absolute;
        display: inline-block;
        overflow: hidden;
        top: 0.4rem;
        width: 0.47rem;
        height: 0.67rem;
        line-height: 0.67rem;
        margin-left: 0.13rem;
    }
    .filtrate a span i{
        border-width: 0.33rem;
        border-style: solid;
        border-color: transparent;
        height: 0;
        width: 0;
    }
    .filtrate a .mt{
        border-bottom-color: #666;
        top: -0.2rem;
    }
    .filtrate a .md{
        border-top-color: #666;
        top: 0.6rem;
    }
    .filtrate .f-btn{
        border: 1px solid #e2e2e2;
        border-radius: 3px;
        width: 80%;
        padding: 0.3rem 0;
        color: #333;
    }
   .filtrate .filtrate-btn{
        padding: 5px 0;
    }
</style>