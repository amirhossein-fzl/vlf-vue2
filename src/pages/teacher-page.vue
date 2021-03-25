<template>
    <div>
        <Header />
        <div class="container-lg">
            <Breadcrumb class="mt-5" :items="bItems" active="امیرحسین فضلی" />
            <h1 class="mt-4 teacher-name">امیرحسین فضلی</h1>
            <div class="post-body d-flex">
                <img class="teacher-avatar" src="../assets/img/Amir-developer-avatar.jpg" alt="Amir developer Avatar" />
                <div class="teacher-info d-flex flex-column mr-4 mt-3">
                    <span>امیرحسین فضلی</span>
                    <span class="mt-2">تاریخ شروع فعالیت : 1398/03/24</span>
                    <p class="bio">
                        امیرحسین فضلی هستم، عضو هیئت مدیره مجموعه ویرولرن و فعال در حوزه بلاکچین و برنامه نویسی وب.
                    </p>
                </div>
            </div>

            <Title>دوره های مدرس</Title>

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
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/sections/header";
    import Footer from "../components/sections/footer";
    import Breadcrumb from "../components/sections/breadcrumb";
    import Title from "../components/title";
    import CourseCard from "../components/course-card";
    export default {
        name: "TeacerPage",
        components: {
            Header,
            Footer,
            Breadcrumb,
            Title,
            CourseCard,
        },
        data() {
            return {
                bItems: [
                    {
                        title: "صفحه اصلی",
                        link: "#",
                    },
                ],
            };
        },
    };
</script>
