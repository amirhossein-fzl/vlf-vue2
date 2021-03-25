<template>
    <div class="login-body col-lg-4 mx-auto p-lg-4 mt-5">
        <h2>LOGO</h2>
        <div class="row">
            <div class="col-lg-12 mt-3">
                <Inp type="text" :required="true" id="username" label="نام کاربری" icon="fad fa-user" iconAlign="left" />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 mt-3">
                <Inp type="password" :required="true" id="pass" label="کلمه عبور" icon="fad fa-lock" iconAlign="left" />
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <btn-prime><i class="fad fa-sign-in-alt mt-1 ml-1"></i> ورود</btn-prime>
        </div>
    </div>
</template>

<script>
    import Inp from "../../components/inp";
    import btnPrime from "../../components/buttons/primary/primary";
    export default {
        name: "login",
        data() {
            return {
                usernameHint: ["یک نام کاربری به دلخواه انتخاب کنید", "نوشتن نام کاربری الزامی است"],
                enabled: false,
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
