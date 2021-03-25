<template>
    <div class="course-card mt-5">
        <img v-if="special" src="../assets/svg/discount.svg" class="discount-logo" alt="discount" />
        <a :href="link">
            <img :src="image" :alt="title" class="course-img" />
        </a>
        <div class="course-content-container">
            <a :href="link" class="course-title" v-text="title" :content="title" v-tippy></a>
            <a :href="teacher.link" class="course-teacher" v-if="teacher">
                <i class="fas fa-user"></i>
                {{ teacher.name }}
            </a>
            <span class="price-card mt-1">
                <span class="price-discount" v-text="price"></span>
                تومان
            </span>
            <div class="d-flex mt-3 justify-content-between">
                <div class="lenght">
                    <i class="fas fa-clock"></i>
                    {{ lenght }}
                </div>
                <btn-sccss :to="link" class="btn-buy">مشاهده دوره</btn-sccss>
            </div>
        </div>
    </div>
</template>

<script>
    import btnSccss from '../components/buttons/success/success';
    export default {
        name: "courseCard",
        props: {
            special: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                required: true
            },
            teacher: {
                type: Object,
                required: false
            },
            image: {
                type: String,
                required: true
            },
            link: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            },
            lenght: {
                type: String,
                required: true
            }
        },
        components: {
            btnSccss
        }
    };
</script>
