<template>
    <div>
        <img :src="img" :alt="alt" class="post-img" />
        <div class="post-author">
            <a :href="author.link" class="author-image">
                <img :src="author.avatar" :alt="author.name">
            </a>
            <ul>
                <li><i class="far fa-eye"></i><span>540 بازدید</span></li>
                <li><i class="far fa-calendar-alt"></i><span>1400/01/01</span></li>
                <li><i class="fas fa-user"></i><a href="#">امیرحسین فضلی</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostHeader",
        props: {
            img: {
                type: String,
                required: true,
            },
            author: {
                type: Object,
                required: true,
            },
            alt: {
                type: String,
                required: true,
            },
        },
    };
</script>
