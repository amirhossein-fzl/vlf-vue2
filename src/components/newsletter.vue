<template>
    <div class="mt-5 pt-5 d-flex flex-column px-sm-0 px-4">
        <i class="fas fa-envelope newsletter-icon"></i>
        <p style="text-align: center;" class="mt-3 mb-4">عضو خبرنامه ما شوید تا از آخرین تخفیف ها و اطلاعیه ها جا نمانید !</p>
        <form action="#" class="mx-auto d-flex align-items-center flex-column" style="width: 100%">
            <input type="email" class="newsletter-inp col-lg-3 col-sm-5" placeholder="ایمیل شما ..." />
            <btn-sccss-out class="mt-4">عضویت در خبرنامه</btn-sccss-out>
        </form>
    </div>
</template>

<script>
    import btnSccssOut from "./buttons/success/outline";
    export default {
        name: "newsletter",
        components: {
            btnSccssOut
        }
    };
</script>
