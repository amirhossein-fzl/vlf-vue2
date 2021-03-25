<template>
    <div>
        <Header />
        <div class="container-lg">
            <h1 class="post-title mt-5">تماس باما</h1>
            <Breadcrumb class="mt-3" :items="items" active="تماس باما" />
            <div class="post-body">
                <div class="row">
                    <div class="col-lg-5">
                        <img class="col-lg-12" src="../assets/img/contact.jpg" alt="Contact">
                        <p class="contact-text">در این بخش، میتوانید باما ارتباط برقرار نمایید. اگر هرگونه مشکلات فنی، پیشنهادات و انتقاداتی دارید، در فرم موجود در این بخش مطرح بفرمایید. مطمئن باشید که تک تک پیام های شما را میخوانیم و به همه جواب میدهیم. پس از شما خواهشمندیم که از ارسال پشت سر هم پیام های خود، خودداری کنید تا حقوق دیگران نقض نشود.</p>

                    </div>
                    <div class="col-lg-7">
                        <div class="contact-form container-fluid">
                            <!-- <div class="row">
                                <ViroInput class="col-lg-6">نام و نام خانوادگی شما</ViroInput>
                                <ViroInput class="col-lg-6" v-model="tar">ایمیل شما</ViroInput>
                            </div>
                            <div class="row">
                                <ViroInput class="col-lg-12" type="textarea">پیام شما</ViroInput>
                            </div>
                            <div class="row">
                                <Inp v-model="this.tar" label="تست" type="text" id="tst"  />
                            </div> -->

                            <div class="row">
                                <Inp class="col-lg-6" label="نام و نام خانوادگی شما" id="name" />
                                <Inp class="col-lg-6" label="ایمیل شما" id="email" type="email" ></Inp>
                            </div>
                            <div class="row mt-3">
                                <Inp class="col-lg-12" :textarea="true" :tarops="{rows: 5}" label="پیام شما" id="message" />
                            </div>
                        </div>
                    </div>
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
    // import ViroInput from "../components/input";
    import Inp from "../components/inp";
    export default {
        name: "Contact",
        components: {
            Header,
            Footer,
            Breadcrumb,
            // ViroInput,
            Inp,
        },
        data() {
            return {
                items: [
                    {
                        title: "خانه",
                        link: "#"
                    }
                ],
            };
        },
    };
</script>
