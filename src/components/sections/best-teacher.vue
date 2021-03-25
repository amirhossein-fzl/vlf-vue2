<template>
    <div>
        <Title>مدرس برتر این هفته</Title>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="d-flex align-items-center">
                        <img src="../../assets/img/Amir-developer-avatar.jpg" alt="Amir developer" class="best-teacher-avatar" />
                        <div class="d-flex flex-column mr-3">
                            <span class="best-teacher-name">امیرحسین فضلی</span>
                            <span class="best-teacher-desc">طراح وب</span>
                        </div>
                    </div>
                    <p class="mt-5 best-teacher-bio">
                        در تیر ماه سال 98 برنامه نویسی رو شروع کردم. از سال 98 تا الان، به تسلط بالایی در برنامه نویسی رسیدم و اکنون در خدمت شما با مجموعه ویرولرن هستم تا دانشم رو به شما انتقال دهم. از فعالیت در مجموعه ویرولرن حس خوبی دارم.
                    </p>
                    <btn-prime class="mt-5">مشاهده صفحه مدرس</btn-prime>
                </div>

                <div class="col-lg-8">
                    <best-teacher-slider></best-teacher-slider>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import bestTeacherSlider from "../slider/best-teacher-slider";
    import btnPrime from "../buttons/primary/primary";
    import Title from "../title";
    export default {
        name: "bestTeacher",
        components: {
            bestTeacherSlider,
            btnPrime,
            Title,
        },
    };
</script>
