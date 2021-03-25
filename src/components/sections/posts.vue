<template>
    <div>
        <Title>وبلاگ ویرولرن</Title>

        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-sm-6">
                    <article-card title="ویژگی های جدید Asp.ne Core 5 !" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../../assets/img/posts/Asp_net_core5.png')" link="#" :author="{ name: 'امیرحسین فضلی', link: '#' }" views="25,000"></article-card>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <article-card title="چند نکته مهم برای امنیت در شبکه های اجتماعی" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../../assets/img/posts/social_network.png')" link="#" :author="{ name: 'میلاد محمدی', link: '#' }" views="55,000"></article-card>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <article-card title="دستیار صوتی چیست ؟" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../../assets/img/posts/voice-assistant.png')" link="#" :author="{ name: 'امیرحسین فضلی', link: '#' }" views="35,000"></article-card>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <article-card title="5 مورد از بهترین افزونه های vscode برا توسعه دهندگان جاوااسکریپت" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../../assets/img/posts/VS_Code_Extension.png')" link="#" :author="{ name: 'میلاد محمدی', link: '#' }" views="105,000"></article-card>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <article-card title="نکات مهم و کلیدی در طراحی لوگو" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../../assets/img/posts/nmvldt-logo.png')" link="#" :author="{ name: 'امیرحسین فضلی', link: '#' }" views="83,000"></article-card>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <article-card title="مهم ترین تکنیک ها در سئو" description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" :image="require('../../assets/img/posts/seo.png')" link="#" :author="{ name: 'میلاد محمدی', link: '#' }" views="93,000"></article-card>
                </div>

                <btn-sccss-out class="mt-5 mx-auto">مشاهده همه مطالب</btn-sccss-out>
            </div>
        </div>
    </div>
</template>

<script>
    import articleCard from "../article-card";
    import btnSccssOut from "../buttons/success/outline.vue";
    import Title from "../title";
    export default {
        name: "Posts",
        components: {
            articleCard,
            btnSccssOut,
            Title,
        },
    };
</script>
