<template>
    <div class="post-info">
        <div class="post-properties">
            <div class="likes d-flex align-items-center">
                <i :class="[isLike, 'fa-heart']" @click="like()"></i>
                <span v-text="options.likes" class="mr-1"></span>
                <span class="mr-1">لایک</span>
            </div>
            <div class="comments mr-2 d-flex align-items-center">
                <i class="fas fa-comment"></i>
                <span v-text="options.comments" class="mr-1"></span>
                <span class="mr-1">نظر</span>
            </div>
            <div class="stars mr-2 mt-2">
                <star-rating :rtl="true" :rating="options.rating" :rounded-corners="true" :show-rating="false" :star-size="25" :active-color="'#FFDD00'" />
            </div>
        </div>
        <div class="study-leght">
            <span>زمان مطالعه : </span>
            <span>
                <span v-text="options.time"></span>
                <span class="mr-1">دقیقه</span>
            </span>
        </div>
        <div class="share">
            <i class="fas fa-share-alt"></i>
        </div>
    </div>
</template>

<script>
    import StarRating from "vue-star-rating";
    export default {
        name: "PostInfo",
        props: {
            options: {
                required: true,
                type: Object,
            },
        },
        components: {
            StarRating,
        },
        data() {
            return {
                rating: 3,
                liked: false,
                likes: 553,
                comments: 68,
            };
        },
        computed: {
            isLike() {
                return this.$props.options.liked ? "fas" : "far";
            },
        },
        methods: {
            like() {
                if (!this.$props.options.liked) {
                    this.$props.options.likes += 1;
                }
                return (this.$props.options.liked = true);
            },
        },
    };
</script>
