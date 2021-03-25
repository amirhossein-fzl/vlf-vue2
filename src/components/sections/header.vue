<template>
    <header class="mt-4">
        <transition name="canav">
            <div class="canav" v-if="sideMenuOpen || userMenuOpen || search" @click="close()"></div>
        </transition>

        <div class="canav-search" v-show="search">
            <div class="close-side" @click="search = !search"><i class="fas fa-times"></i></div>
            <div class="search-group">
                <input type="text" placeholder="جست و جو ...">
                <button><i class="far fa-search"></i></button>
            </div>
        </div>

        <div class="header-menu d-flex ml-auto justify-content-lg-around head justify-content-md-around">
            <div class="ml-3">
                <h2>LOGO</h2>
            </div>

            <div class="mobile">
                <div class="search" @click="search = !search"><i class="far fa-search"></i></div>
                <div class="user" @click="userMenuOpen = !userMenuOpen"><i class="far fa-user"></i></div>
                <div class="hamberger" @click="sideMenuOpen = !sideMenuOpen"><i class="far fa-bars"></i></div>
            </div>

            <transition name="menu-side">
                <div :class="['sidebar-menu', { 'menu-side-open': sideMenuOpen }]" v-if="sideMenuOpen">
                    <div class="top-bg">
                        <div class="close-side" @click="sideMenuOpen = !sideMenuOpen"><i class="fas fa-times"></i></div>
                        <div class="search mx-auto">
                            <input type="text" placeholder="جست و جو کنید ...">
                            <span><i class="far fa-search"></i></span>
                        </div>
                    </div>
                    <nav class="mt-5 mobile-nav">
                        <li v-for="nav in navs" :key="nav.title" v-text="nav.title"></li>
                    </nav>
                </div>
            </transition>

            <transition name="user-side">
                <div :class="['sidebar-user', { 'user-side-open': userMenuOpen }]" v-if="userMenuOpen">
                    <div class="top-bg">
                        <div class="close-side" @click="userMenuOpen = !userMenuOpen"><i class="fas fa-times"></i></div>
                        <img src="../../assets/img/Amir-developer-avatar.jpg" alt="Avatar" class="mobile-avatar mx-auto">
                    </div>
                    <span class="username-mobile">Amirhossein</span>
                    <btn-dang class="mx-auto d-block mt-2">خروج</btn-dang>
                    <ul class="user-sidebar mt-3">
                        <li v-for="userm in userMenu" :key="userm.title" v-text="userm.title"></li>
                    </ul>
                </div>
            </transition>

            <nav class="d-flex nav">
                <li v-for="nav in navs" :key="nav.title" v-text="nav.title"></li>
                <li><btn-dang-out>مدرس شوید !</btn-dang-out></li>
            </nav>

            <div class="logr d-flex align-items-lg-center">
                <btn-prime-flat class="fas fa-search search-btn ml-2" @click.native="search = !search"></btn-prime-flat>
                <btn-prime-flat style="border-bottom: 2px solid #023e8a;">ثبت نام</btn-prime-flat>
                <btn-sccss-flat style="border-bottom: 2px solid #0ead69;" class="mr-3">ورود</btn-sccss-flat>
            </div>
        </div>

        <div class="row container-fluid header-2" v-if="ishome">
            <div class="col-lg-6 d-flex flex-column justify-content-center head-center">
                <h1>با ویرولرن</h1>
                <h2 class="mt-3">لحظه ای از تکنولوژی عقب نمانید !</h2>
                <p class="mt-3 head-p">آموزش آنلاین توسط بهترین اساتید برای ساخت آینده کاری شما و تضمین یادگیری شما در ویرولرن</p>
                <div class="buttons mt-5">
                    <btn-warn-out>از دوره های ما دیدن کنید</btn-warn-out>
                    <btn-prime-out>از فروشگاه ما دیدن کنید</btn-prime-out>
                </div>
            </div>

            <div class="col-lg-6">
                <img src="../../assets/svg/online-course.svg" alt="Online Course SVG" draggable="false" class="d-none d-sm-block col-sm-12 col-lg-12 mt-5 mt-lg-0" />
            </div>
        </div>
    </header>
</template>

<script>
    import btnPrimeFlat from "../buttons/primary/flat";
    import btnPrimeOut from "../buttons/primary/outline";
    import btnWarnOut from "../buttons/warning/outline";
    import btnSccssFlat from "../buttons/success/flat";
    import btnDangOut from "../buttons/danger/outline";
    import btnDang from "../buttons/danger/danger";
    export default {
        name: "Header",
        components: {
            btnPrimeFlat,
            btnPrimeOut,
            btnWarnOut,
            btnSccssFlat,
            btnDangOut,
            btnDang,
        },
        props: {
            ishome:{
                default: false,
                type: Boolean
            }
        },
        data() {
            return {
                sideMenuOpen: false,
                userMenuOpen: false,
                search: false,
                userMenu: [
                    {
                        title: "ورود به حساب کاربری",
                        link: "#"
                    },
                    {
                        title: "تغییر کلمه عبور",
                        link: "#"
                    },
                    {
                        title: "دوره های خریداری شده",
                        link: "#"
                    },
                    {
                        title: "صدور کارت پایان دوره",
                        link: "#"
                    },
                    {
                        title: "پرسش و پاسخ ها",
                        link: "#"
                    },
                    {
                        title: "فاکتور ها",
                        link: "#"
                    },
                    {
                        title: "مدرس شوید !",
                        link: "#"
                    },
                    {
                        title: "خروج از حساب کاربری",
                        link: "#"
                    }
                    
                ],
                navs: [
                    {
                        title: "صفحه اصلی",
                        link: "#",
                    },
                    {
                        title: "وبلاگ",
                        link: "#",
                    },
                    {
                        title: "درباره ما",
                        link: "#",
                    },
                    {
                        title: "تماس باما",
                        link: "#",
                    },
                ],
            };
        },

        mounted () {
            let header = document.querySelector(".header-menu");
            let sticky = header.offsetTop;

            window.onscroll = () => {
                
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                } 
                    
                else {
                    header.classList.remove("sticky");
                }
            }
        },

        methods: {
            close() {
                if (this.sideMenuOpen) {
                    return (this.sideMenuOpen = false);
                } else if(this.userMenuOpen) {
                    return this.userMenuOpen = false;
                }
                return (this.search = false);
            },
        },
    };
</script>
