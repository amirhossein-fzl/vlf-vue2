<template>
    <div class="video-container">
        <div class="d-flex justify-content-between">
            <ul class="video-info">
                <li><h3 v-text="title"></h3></li>
                <li><span>24:28</span></li>
                <li><div class="badge">رایگان</div></li>
            </ul>
            <div class="video-operation">
                <btn-dang-flat @click="expand()"><i :class="['fad', 'fa-chevron-down', {'fa-rotate-180':isexpand}]" style="transition: all 400ms ease 0s"></i></btn-dang-flat>
                <btn-dang-flat @click="scrollToVideo()"><i class="fad fa-play"></i></btn-dang-flat>
                <btn-dang-flat><i class="fad fa-arrow-to-bottom"></i></btn-dang-flat>
            </div>
        </div>
        <p class="course-vid-description" :style="{ height: height, margin: margin }" ref="description">
            لورم ایپسوم، یک متن ساختگی با تولید نامفهوم است که در صنعت چاپ و گرافیک کاربرد دارد !
        </p>
    </div>
</template>

<script>
    import btnDangFlat from "../buttons/danger/flat";
    export default {
        name: "videoCourse",
        components: {
            btnDangFlat,
        },
        data() {
            return {
                isexpand: false,
                height: 0,
                margin: '0px',
            };
        },
        methods: {
            expand() {
                this.isexpand = !this.isexpand;
                this.height = this.isexpand ? "auto" : "0px";
            },
            scrollToVideo() {
                document.getElementsByClassName("plyr")[0].previousSibling.scrollIntoView({ behavior: 'smooth', block: 'start' });
            },
        },
        watch: {
            isexpand(newVal, oldVal) {
                this.height = this.$refs.description.scrollHeight + "px";
                if (oldVal === true) {
                    this.margin = '0px';
                    this.closeOnNextTick = true;
                } else {
                    this.margin = '20px 0px 0px';
                }
            },
        },
        updated() {
            this.$nextTick(() => {
                window.setTimeout(() => {
                    if (this.closeOnNextTick) {
                        this.height = "0px";
                        this.closeOnNextTick = false;
                    }
                });
            });
        },
        props: {
            title: {
                type: String,
                required: true,
            },
        },
    };
</script>
