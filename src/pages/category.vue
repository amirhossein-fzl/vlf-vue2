<template>
    <div>
        <Header />
        <div class="container-lg">
            <h1 class="mt-5 course-page-title">ارز دیجیتال</h1>
            <Breadcrumb class="mt-3" :items="Bitems" active="ارز دیجیتال" />

            <div class="side-card mt-5 cat-box">
                <div class="search-group-cat">
                    <input type="text" placeholder="جست و جو ..." />
                    <button><i class="fas fa-search"></i></button>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-3 col-sm-6 col-md-4">
                    <course-card title="حل مسائل و تمرین های الگوریتم و فلوچارت" :teacher="{ name: 'امیرحسین فضلی', link: '#' }" :image="require('../assets/img/products/algoritm.png')" link="#" price="100,000" lenght="12:00 ساعت" :special="true"></course-card>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-4">
                    <course-card title="آموزش گرافیک تبلیغاتی پیشرفته" :teacher="{ name: 'میلاد محمدی', link: '#' }" :image="require('../assets/img/products/graphic.png')" link="#" price="250,000" lenght="15:00 ساعت" :special="true"></course-card>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-4">
                    <course-card title="طراحی های خلاقانه رابط کاربری (Html, Css, JQuery)" :teacher="{ name: 'امیرحسین فضلی', link: '#' }" :image="require('../assets/img/products/html-css-jquery.png')" link="#" price="300,000" lenght="22:40 ساعت"></course-card>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-4">
                    <course-card title="برنامه نویسی شی گرا در جاوااسکریپت" :teacher="{ name: 'میلاد محمدی', link: '#' }" :image="require('../assets/img/products/javascriptOOP.png')" link="#" price="160,000" lenght="32:35 ساعت" :special="true"></course-card>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-4">
                    <course-card title="آموزش متریال بوت استرپ (mdbootstrap)" :teacher="{ name: 'امیرحسین فضلی', link: '#' }" :image="require('../assets/img/products/mdbootstrap.png')" link="#" price="200,000" lenght="18:20 ساعت"></course-card>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-4">
                    <course-card title="آموزش امنیت در php" :teacher="{ name: 'میلاد محمدی', link: '#' }" :image="require('../assets/img/products/php-security.png')" link="#" price="60,000" lenght="5:28 ساعت"></course-card>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-4">
                    <course-card title="آموزش selenium در سی شارپ از صفر تا صد" :teacher="{ name: 'امیرحسین فضلی', link: '#' }" :image="require('../assets/img/products/seleniumc-sharp.png')" link="#" price="560,000" lenght="42:32 ساعت" :special="true"></course-card>
                </div>

                <div class="col-lg-3 col-sm-6 col-md-4">
                    <course-card title="تحلیل و پیش بینی بورس در پایتون" :teacher="{ name: 'میلاد محمدی', link: '#' }" :image="require('../assets/img/products/Stock-analysis.png')" link="#" price="750,000" lenght="58:36 ساعت" :special="true"></course-card>
                </div>
            </div>
            <div class="row mt-5">
                <ul class="pagination mx-auto">
                    <li class="item"><a href="#">&lt;</a></li>
                    <li class="item active"><a href="#">1</a></li>
                    <li class="item"><a href="#">2</a></li>
                    <li class="item"><a href="#">3</a></li>
                    <li class="item"><a href="#">&gt;</a></li>
                </ul>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/sections/header";
    import Footer from "../components/sections/footer";
    import Breadcrumb from "../components/sections/breadcrumb";
    import CourseCard from "../components/course-card";
    export default {
        name: "Category",
        components: {
            Header,
            Footer,
            Breadcrumb,
            CourseCard,
        },
        data() {
            return {
                Bitems: [
                    {
                        title: "صفحه اصلی",
                        link: "#",
                    },
                    {
                        title: "دسته بندی ها",
                        link: "#",
                    },
                ],
            };
        },
    };
</script>

