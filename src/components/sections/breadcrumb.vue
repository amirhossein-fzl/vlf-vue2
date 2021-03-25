<template>
    <!-- <div class="breadcrumb"> -->
        <ul class="breadcrumb">
            <template v-for="item in items">
                <li :key="item.title">
                    <a :href="item.link" v-text="item.title"></a>
                </li>
            </template>
            <li class="active" v-text="active"></li>
        </ul>
    <!-- </div> -->
</template>

<script>
    export default {
        name: "breadcrumb",
        props: {
            items: {
                required: true,
                type: Array,
            },
            active: {
                required: true,
                type: String,
            },
        },
    };
</script>
