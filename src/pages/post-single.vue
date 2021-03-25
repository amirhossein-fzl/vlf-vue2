<template>
    <div>
        <Header />
        <div class="container-lg">
            <h1 class="mt-5 post-title">عنوان پست را چگونه بنویسیم؟</h1>
            <Breadcrumb class="mt-4" :items="items" :active="active" />
            <PostHeader :img="require('../assets/img/posts/vue_js.jpg')" :author="author" alt="alt post" />
            <post-info :options="postInfo" />
            <post-body />
            <Title class="comment-title">نظرات</Title>
            <Comment v-for="comment in comments" :comments="comments" :key="comment.id" :item="comment" />
        </div>
        <Footer />
    </div>
</template>

<script>
    import Header from "../components/sections/header";
    import Footer from "../components/sections/footer";
    import Breadcrumb from "../components/sections/breadcrumb";
    import PostHeader from "../components/sections/post-header";
    import PostInfo from "../components/sections/post-info";
    import PostBody from "../components/sections/post-body";
    import Comment from "../components/sections/comment";
    import Title from "../components/title";
    export default {
        name: "PostSingle",
        components: {
            Header,
            Footer,
            Breadcrumb,
            PostHeader,
            PostInfo,
            PostBody,
            Comment,
            Title,
        },
        data() {
            return {
                items: [
                    {
                        title: "خانه",
                        link: "#",
                    },
                    {
                        title: "پست ها",
                        link: "#",
                    },
                    {
                        title: "مطالب",
                        link: "#",
                    },
                ],
                active: "چگونه breadcrumb بسازیم",
                author: {
                    name: "Amirhossein",
                    avatar: require("../assets/img/Amir-developer-avatar.jpg"),
                    link: "#",
                },
                postInfo: {
                    rating: 3,
                    liked: false,
                    likes: 553,
                    comments: 68,
                    time: 8,
                },
                comments: [
                    {
                        id: 1,
                        user: {
                            name: "Milad Mohammadi",
                            avatar: require("../assets/img/Milad-mohammadi-avatar.jpg"),
                        },
                        time: "1400/01/01",
                        body: "این پست بهترین پستی بود که خوانده بودم. واقعا ممنون آقای فضلی !",
                        // childeren: [
                        //     {
                        //         id: 2,
                        //         user: {
                        //             name: "Amirhossein",
                        //             avatar: require("../assets/img/Amir-developer-avatar.jpg"),
                        //         },
                        //         time: "1400/01/01",
                        //         body: "نظر لطف شماست. موفق باشید !",
                        //     },
                        // ],
                    },
                ],
            };
        },
    };
</script>
