<template>
    <Btn :to="to" class="primary-flat" cr="rgba(80, 174, 255, 0.2)"><slot></slot></Btn>
</template>

<script>
    import Btn from '../btn';
    export default {
        name: 'btnPrimeFlat',
        props: {
            to: {
                default: false
            }

        },
        components: { Btn }
    };
</script>