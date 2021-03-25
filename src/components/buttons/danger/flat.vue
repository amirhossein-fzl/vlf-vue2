<template>
    <Btn :to="to" class="danger-flat" cr="rgba(255, 0, 0, 0.2)"><slot></slot></Btn>
</template>

<script>
    import Btn from '../btn';
    export default {
        name: 'btnDangFlat',
        props: {
            to: {
                default: false
            }

        },
        components: { Btn }
    };
</script>