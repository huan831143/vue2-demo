<template>
    <div class="ban-0">
        <swiper :options="swiperOption" ref="mySwiperA">
            <!-- 幻灯内容 -->
            <swiper-slide v-for="item in items" class="ban-01">
                <div class="ban-03">
                    <img :src="item.imgs" class="ban-02">
                </div>

           </swiper-slide>

            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                items:[
                    {
                        imgs:"./static/static/imgs/001.jpg"
                    },
                    {
                        imgs:"./static/static/imgs/002.jpg"
                    },
                    {
                        imgs:"./static/static/imgs/003.jpg"
                    },
                    {
                        imgs:"./static/static/imgs/004.jpg"
                    },
                    {
                        imgs:"./static/static/imgs/005.jpg"
                    },
                    {
                        imgs:"./static/static/imgs/006.jpg"
                    },
                ],

                swiperOption: {
                    // 所有配置均为可选（同Swiper配置）
                    activeIndex:0,
                    notNextTick: true,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: false,
                    scrollbar:'.swiper-pagination',
                    pagination : '.swiper-pagination',
                    scrollbarHide:false,
                    autoplayDisableOnInteraction:false,
                    loop:true,
                    observeParents:true,
                    onTransitionStart(swiper){

                    }
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiperA.swiper
            }
        },
        mounted() {

            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>
<style scoped>
    .ban-01{
        text-align: center;

    }
.ban-03{
    vertical-align: top;
    width: 332px;
    margin: 0 auto;
    height: 368px;
}
    img{
        max-width: 100%;
        max-height: 100%;
    }



</style>