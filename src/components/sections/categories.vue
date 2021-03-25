<template>
    <div>
        <Title class="mb-1">مسیر خود را انتخاب کنید !</Title>
        <div class="container mt-5">
            <div class="row">
                <template v-for="category in categories">
                    <div class="col-lg-2 col-6 col-sm-4" :key="category.title">
                        <div class="category-card mt-3" v-ripple="'rgba(80, 255, 85, 0.2)'">
                            <img :src="category.icon" :alt="category.title" />
                            <h5 v-text="category.title" class="mt-3"></h5>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import Title from "../title";
    export default {
        name: "Categories",
        data() {
            return {
                categories: [
                    {
                        title: "هوش مصنوعی",
                        icon: require("../../assets/svg/categories/ai.svg"),
                        link: "#",
                    },
                    {
                        title: "اندروید",
                        icon: require("../../assets/svg/categories/android.svg"),
                        link: "#",
                    },
                    {
                        title: "سیستم ها مدیریت محتوا",
                        icon: require("../../assets/svg/categories/cms.svg"),
                        link: "#",
                    },
                    {
                        title: "ارز دیجیتال",
                        icon: require("../../assets/svg/categories/cryptocurrency.svg"),
                        link: "#",
                    },
                    {
                        title: "گرافیک",
                        icon: require("../../assets/svg/categories/graphic.svg"),
                        link: "#",
                    },
                    {
                        title: "جاوااسکریپت",
                        icon: require("../../assets/svg/categories/javascript.svg"),
                        link: "#",
                    },
                    {
                        title: "شبکه",
                        icon: require("../../assets/svg/categories/network.svg"),
                        link: "#",
                    },
                    {
                        title: "PHP",
                        icon: require("../../assets/svg/categories/php.svg"),
                        link: "#",
                    },
                    {
                        title: "پایتون",
                        icon: require("../../assets/svg/categories/python.svg"),
                        link: "#",
                    },
                    {
                        title: "استارتاپ و کسب و کار",
                        icon: require("../../assets/svg/categories/startup.svg"),
                        link: "#",
                    },
                    {
                        title: "رابط کاربری",
                        icon: require("../../assets/svg/categories/ui.svg"),
                        link: "#",
                    },
                    {
                        title: "برنامه نویسی وب",
                        icon: require("../../assets/svg/categories/web.svg"),
                        link: "#",
                    },
                ],
            };
        },
        components: {
            Title,
        },
    };
</script>
