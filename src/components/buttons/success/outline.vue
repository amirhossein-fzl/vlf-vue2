<template>
    <Btn :to="to" class="success-out" cr="rgba(80, 255, 85, 0.2)"><slot></slot></Btn>
</template>

<script>
    import Btn from '../btn';
    export default {
        name: 'btnSccssOut',
        props: {
            to: {
                default: false
            }
        },
        components: { Btn }
    };
</script>