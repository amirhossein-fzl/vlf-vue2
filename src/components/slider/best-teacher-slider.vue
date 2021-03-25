<template>
    <swiper dir="rtl" class="container" effect="coverflow" :coverflowEffect="coverflowEffect" :slides-per-view="'auto'" :pagination="{ clickable: true, el: '.slider-pagination' }" :watch-overflow="true" :grab-cursor="true" >
        <swiper-slide>
            <course-card title="حل مسائل و تمرین های الگوریتم و فلوچارت" :image="require('../../assets/img/products/algoritm.png')" link="#" price="100,000" lenght="12:00 ساعت" :special="true"></course-card>
        </swiper-slide>

        <swiper-slide>
            <course-card title="طراحی های خلاقانه رابط کاربری (Html, Css, JQuery)" :image="require('../../assets/img/products/html-css-jquery.png')" link="#" price="300,000" lenght="22:40 ساعت"></course-card>
        </swiper-slide>

        <swiper-slide>
            <course-card title="آموزش متریال بوت استرپ (mdbootstrap)" :image="require('../../assets/img/products/mdbootstrap.png')" link="#" price="200,000" lenght="18:20 ساعت"></course-card>
        </swiper-slide>

        <swiper-slide>
            <course-card title="آموزش selenium در سی شارپ از صفر تا صد" :image="require('../../assets/img/products/seleniumc-sharp.png')" link="#" price="560,000" lenght="42:32 ساعت" :special="true"></course-card>
        </swiper-slide>

        <swiper-slide>
            <course-card title="تحلیل و پیش بینی بورس در پایتون" :image="require('../../assets/img/products/Stock-analysis.png')" link="#" price="750,000" lenght="58:36 ساعت" :special="true"></course-card>
        </swiper-slide>

        <swiper-slide>
            <course-card title="برنامه نویسی شی گرا در جاوااسکریپت" :image="require('../../assets/img/products/javascriptOOP.png')" link="#" price="160,000" lenght="32:35 ساعت" :special="true"></course-card>
        </swiper-slide>

        <div class="slider-pagination"></div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import CourseCard from "../../components/course-card.vue";
    import SwiperCore, { Pagination, A11y, EffectCoverflow } from "swiper";
    import "swiper/swiper-bundle.css";
    SwiperCore.use([Pagination, A11y, EffectCoverflow]);
    export default {
        name: "bestTeacherSlider",
        components: {
            Swiper,
            SwiperSlide,
            CourseCard,
        },
        data() {
            return {
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 500,
                    modifier: 1,
                    slideShadows: false,
                },
            };
        },
    };
</script>
