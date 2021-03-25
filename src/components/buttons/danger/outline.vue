<template>
    <Btn :to="to" class="danger-out" cr="rgba(255, 0, 0, 0.2)"><slot></slot></Btn>
</template>

<script>
    import Btn from '../btn';
    export default {
        name: 'btnDangOut',
        props: {
            to: {
                default: false
            }
        },
        components: { Btn }
    };
</script>