<template>
    <Btn :to="to" class="success-flat" cr="rgba(80, 255, 85, 0.2)"><slot></slot></Btn>
</template>

<script>
    import Btn from '../btn';
    export default {
        name: 'btnSccssFlat',
        props: {
            to: {
                default: false
            }

        },
        components: { Btn }
    };
</script>