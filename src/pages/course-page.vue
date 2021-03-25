<template>
    <div>
        <Header />
        <div class="container-fluid">
            <h1 class="mt-5 course-page-title">آموزش تحلیل بورس با پایتون</h1>
            <Breadcrumb class="mt-3" :items="bItems" active="آموزش تحلیل بورس با پایتون" />
            <div class="row mt-5">
                <div class="col-lg-3">
                    <div class="side-card mb-3 course-info-lc">
                        <course-info :options="courseInfo" />
                    </div>
                    <div class="side-card">
                        <div class="head-side-card">
                            <div class="status">در حال تدریس</div>
                            <div class="status">مقدماتی تا پیشرفته</div>
                        </div>
                        <div class="padding">
                            <p class="mt-3 hint-reg-course">
                                برای عضویت در دوره، لازم است که در سایت ثبت نام کرده باشید. با کلیک بر اینجا ثبت نام کنید !
                            </p>
                            <ul class="mt-4 course-info">
                                <li><i class="fad fa-chalkboard-teacher"></i> مدرس دوره : امیرحسین فضلی</li>
                                <li><i class="fad fa-users"></i> تعداد دانشجویان دوره : 240 نفر</li>
                                <li><i class="fad fa-video"></i> تعداد ویدیو ها : 24 ویدیو</li>
                                <li><i class="fad fa-clock"></i> مدت زمان دوره : 28 ساعت</li>
                                <li><i class="fad fa-calendar-plus"></i> آخرین بروزرسانی : 1399/10/27</li>
                            </ul>
                            <div class="price-course">
                                <i class="fad fa-dollar-sign"></i>
                                قیمت دوره :
                                <span>
                                    <i>
                                        <del>500,000</del>
                                    </i>
                                </span>
                                <span>
                                    <i> 300,000 <span>تومان</span> </i>
                                </span>
                            </div>

                            <btn-sccss class="reg-course-btn mt-4">ثبت نام در دوره</btn-sccss>
                        </div>
                    </div>
                    <div class="side-card mt-3">
                        <div class="padding">
                            <span class="teacher-name">مدرس دوره</span>
                            <div class="tbox">
                                <img class="teacher-avatar" src="../assets/img/Amir-developer-avatar.jpg" alt="Teacher Avatar" />
                                <span>امیرحسین فضلی</span>
                                <p>
                                    امیرحسین فضلی هستم، عضو هیئت مدیره مجموعه ویرولرن و فعال در حوزه بلاکچین و برنامه نویسی وب.
                                </p>
                                <btn-prime class="mt-3">صفحه مدرس</btn-prime>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-9">
                    <div class="post-body mt-0">
                        <img class="course-img" src="../assets/img/products/Stock-analysis.png" alt="Course image" />
                        <section>
                            <h2>پایتون چیست ؟</h2>
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </section>
                    </div>
                    <div class="post-body">
                        <div class="align-items-baseline d-flex justify-content-between">
                            <h3 class="post-title mb-4">فهرست ویدیو ها</h3>
                            <div>
                                <span>مدت زمان دوره : </span>
                                <span>12:14 ساعت</span>
                            </div>
                        </div>
                        <vue-plyr :options="videoOptions">
                            <video controls crossorigin playsinline>
                                <source size="720" src="https://hajifirouz1.cdn.asset.aparat.com/aparat-video/58b491e48538dd831aaed197b559818728969692-720p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImRjOTk0ZWMzZmE2NzczNWNkZDliMDNkNDU4ZGJiYzJjIiwiZXhwIjoxNjEwOTgxMTg1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.xabNVQTxPdA99CiIsQp1RA3iDLBZ7CtXkYr6_MIGYHc" type="video/mp4" />
                                <!-- <source size="1080" src="/path/to/video-1080p.mp4" type="video/mp4" /> -->
                                <!-- <track default kind="captions" label="English captions" src="../assets/video.mp4.vtx" srclang="en" /> -->
                            </video>
                        </vue-plyr>
                        <strong>معرفی دوره</strong>
                        <h2 class="post-title mt-5">محتوای دوره</h2>
                        <div class="d-flex flex-column">
                            <videoCourse title="مقدمه" />
                            <videoCourse title="لورم ایپسوم، یک متن ساختگی است" />
                            <videoCourse title="لورم ایپسوم، یک متن ساختگی است با تولید نامفهوم" />
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
    import btnSccss from "../components/buttons/success/success";
    import btnPrime from "../components/buttons/primary/outline";
    import CourseInfo from "../components/sections/course-info";
    import videoCourse from "../components/sections/video-course";
    export default {
        name: "coursePage",
        components: {
            Header,
            Footer,
            Breadcrumb,
            btnSccss,
            btnPrime,
            CourseInfo,
            videoCourse,
        },
        data() {
            return {
                bItems: [
                    {
                        title: "صفحه اصلی",
                        link: "#",
                    },
                ],
                courseInfo: {
                    rating: 3,
                    liked: false,
                    likes: 553,
                    comments: 68,
                    time: 8,
                },
                videoOptions: {
                    invertTime: false,
                },
            };
        },
    };
</script>
