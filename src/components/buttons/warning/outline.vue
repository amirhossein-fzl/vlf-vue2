<template>

    <Btn :to="to" class="warning-out" cr="rgba(255, 153, 0, 0.2)"><slot></slot></Btn>
</template>

<script>
    import Btn from '../btn';
    export default {
        name: 'btnWarnOut',
        props: {
            to: {
                default: false
            }
        },
        components: { Btn }
    };
</script>