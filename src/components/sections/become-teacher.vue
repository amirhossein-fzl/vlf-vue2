<template>
    <div>
        <Title>مدرس شوید !</Title>
        <div class="container">
            <div class="row become-teacher">
                <div class="col-lg-6">
                    <img src="../../assets/svg/become-teacher.svg" alt="مدرس شوید !" />
                </div>
                <div class="col-lg-6">
                    <div class="desc">
                        <p>
                            بله ! شما میتوانید در مجموعه ویرولرن در هر حوزه ای، تدریس کنید و به درآمد های عالی دست پیدا کنید ! هدف مجموعه ویرولرن، تکثیر دانش افراد متخصص، به افراد مبتدی است.
                        </p>
                        <btn-prime-out class="mt-5">مدرس شوید !</btn-prime-out>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import btnPrimeOut from "../buttons/primary/outline";
    import Title from "../title";
    export default {
        name: "becomeTeacher",
        components: {
            btnPrimeOut,
            Title,
        },
    };
</script>
