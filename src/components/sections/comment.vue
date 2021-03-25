<template>
    <div class="comment">
        <div class="comment-body mx-auto">
            <div class="author">
                <img src="../../assets/img/Milad-mohammadi-avatar.jpg" alt="user Avatar" />
                <span class="name">Milad</span>
                <span class="time">25 خرداد 1399</span>
            </div>
            <div class="body">
                <p>
                    این پست بهترین پستی بود که خوانده بودم. واقعا ممنون آقای فضلی !
                </p>
            </div>
            <btn-sccss class="reply-btn">پاسخ</btn-sccss>
        </div>

        <ul class="reply-comment">
            <li>
                <div class="comment-body mx-auto">
                    <div class="author">
                        <img src="../../assets/img/Amir-developer-avatar.jpg" alt="user Avatar" />
                        <span class="name">امیرحسین فضلی</span>
                        <span class="time">25 خرداد 1399</span>
                    </div>
                    <div class="body">
                        <p>
                            خواهش میکنم. موفق باشید !
                        </p>
                    </div>
                    <btn-sccss class="reply-btn">پاسخ</btn-sccss>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import btnSccss from "../buttons/success/success";
    export default {
        name: "Comment",
        props: {
            comments: {
                type: Array,
                required: true,
            },
            item: {
                required: true,
            }
        },
        components: {
            btnSccss,
        },
        methods: {
            isChilderen() {
                if(typeof this.$props.item == "undefined") {
                    return true;
                }
                return false;
            }
        }
    };
</script>
