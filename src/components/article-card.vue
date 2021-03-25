<template>
    <article class="article-card mt-5">
        <a :href="link">
            <img :src="image" :alt="title" class="course-img" />
        </a>
        <div class="course-content-container">
            <a :href="link" class="article-title" v-text="title" :content="title" v-tippy></a>
            <p class="mt-3 article-excerpts" v-text="description"></p>
            <div class="d-flex align-items-center justify-content-between">
                <a :href="author.link" class="course-teacher">
                    <i class="fas fa-user"></i>
                    {{ author.name }}
                </a>
                <span class="course-teacher views">
                    {{ views }}
                    <i class="far fa-eye"></i>
                </span>
            </div>
            <div class="d-flex align-items-center justify-content-between mt-4 pt-2" style="border-top: 1px solid #676767;">
                <btn-prime-flat class="far fa-bookmark article-bookmark-btn"></btn-prime-flat>
                <btn-prime :to="link">ادامه مطلب</btn-prime>
            </div>
        </div>
    </article>
</template>

<script>
    import btnPrime from "../components/buttons/primary/primary";
    import btnPrimeFlat from "../components/buttons/primary/flat";
    export default {
        name: "articleCard",
        props: {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            author: {
                type: Object,
                required: true
            },
            views: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
        },
        components: {
            btnPrime,
            btnPrimeFlat,
        },
    };
</script>
