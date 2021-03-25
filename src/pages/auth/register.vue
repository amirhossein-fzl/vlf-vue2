<template>
    <div class="login-body col-lg-6 mx-auto p-lg-4 mt-5">
        <h2>LOGO</h2>
        <div class="row mt-3">
            <div class="col-lg-6">
                <Inp type="text" :required="true" id="name" label="نام و نام خانوادگی" icon="fad fa-user-tie" v-model="abc" />
            </div>
            <div class="col-lg-6">
                <Inp type="text" :required="true" id="username" label="نام کاربری" icon="fad fa-user" iconAlign="left" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-12">
                <Inp type="email" :required="true" id="email" label="ایمیل" icon="fad fa-at" iconAlign="left" />
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-6">
                <Inp type="password" :required="true" id="pass" label="کلمه عبور" icon="fad fa-lock" iconAlign="left" />
            </div>
            <div class="col-lg-6">
                <Inp type="password" :required="true" id="confirmpass" label="تکرار کلمه عبور" icon="fad fa-lock" iconAlign="left" />
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <btn-prime><i class="fad fa-user-plus mt-1 ml-1"></i> تکمیل ثبت نام</btn-prime>
        </div>
    </div>
</template>

<script>
    import Inp from "../../components/inp";
    import btnPrime from "../../components/buttons/primary/primary";
    export default {
        name: "register",
        data() {
            return {
                usernameHint: ["یک نام کاربری به دلخواه انتخاب کنید", "نوشتن نام کاربری الزامی است"],
                enabled: false,
                abc: '',
            };
        },
        components: {
            btnPrime,
            Inp,
        },
        beforeCreate() {
            let promise = new Promise((res) => {
                let body = document.getElementsByTagName("body")[0];
                res(body);
            });
            promise.then((body) => {
                body.classList.add("auth-page");
            });
        },
    };
</script>
