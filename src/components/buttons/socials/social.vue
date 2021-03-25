<template>
    <Btn :to="link" class="social-btn" cr="rgba(255, 255, 255, 0.3)">
        <i :class="[icon]"></i>
    </Btn>
</template>

<script>
    import Btn from "../btn";
    export default {
        name: "social",
        props: {
            link: {
                default: false,
            },
            icon: {
                type: String,
            },
        },
        components: { Btn },
    };
</script>
