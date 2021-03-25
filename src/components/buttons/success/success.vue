<template>
    <Btn :to="to" class="success" cr="rgba(255, 255, 255, 0.3)"><slot></slot></Btn>
</template>

<script>
    import Btn from '../btn';
    export default {
        name: 'btnSccss',
        props: {
            to: {
                default: false
            }
        },
        components: { Btn },
    };
</script>