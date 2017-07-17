<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiperA">
            <!-- 幻灯内容 -->
            <swiper-slide><a href="">
                <img src="/static/static/imgs/banner-01.jpg" class="banner-01">
            </a></swiper-slide>
            <swiper-slide><a href="">
                <img src="/static/static/imgs/banner-01.jpg" class="banner-01">
            </a></swiper-slide>

            <div class="swiper-scrollbar"  slot="scrollbar"></div>
        </swiper>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                swiperOption: {
                    // 所有配置均为可选（同Swiper配置）
                    notNextTick: true,
                    autoplay: 3000,
                    grabCursor : true,
                    setWrapperSize :true,
                    autoHeight: true,
                    scrollbar:'.swiper-scrollbar',
                    paginationType :'progress',
                    scrollbarHide:false,
                    autoplayDisableOnInteraction:false,
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
    .banner-01{
        width: 100%;
        height: 196px;
    }
    .swiper-scrollbar{
        width: 100%;
        z-index: 500;
        left: 0;
        background:red ;
    }

</style>
