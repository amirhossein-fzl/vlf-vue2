<template>
    <div>
        <Header />
        <div class="container">
            <h1 class="post-title mt-5">حساب کاربری</h1>
            <Breadcrumb class="mt-4 justify-content-center" :items="bItems" active="حساب کاربری" />
            <div class="row mt-5">
                <div class="col-lg-3">
                    <div class="profile-sidebar">
                        <img class="profile-img" :src="require('../../assets/img/Amir-developer-avatar.jpg')" alt="alt">
                        <span class="profile-name">Amirhossein Fazli</span>
                        <ul class="profile-menu">
                            <li class="active"><i class="fad fa-tachometer-alt"></i> داشبورد</li>
                            <li><i class="fad fa-user-graduate"></i> دوره های خریداری شده</li>
                            <li><i class="fad fa-comments-alt"></i> پرسش و پاسخ ها</li>
                            <li><i class="fad fa-chalkboard-teacher"></i> مدرس شوید !</li>
                            <li><i class="fad fa-edit"></i> ویرایش حساب کاربری</li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="profile-content">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "../../components/sections/header";
    import Footer from "../../components/sections/footer";
    import Breadcrumb from "../../components/sections/breadcrumb";
    export default {
        name: 'Profile',
        components: {
            Header,
            Footer,
            Breadcrumb,
        },
        data() {
            return {
                bItems: [
                    {
                        title: "خانه",
                        link: "#",
                    }
                ]
            };
        }
    };
</script>
