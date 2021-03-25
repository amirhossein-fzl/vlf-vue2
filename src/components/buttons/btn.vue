<template>
    <a :href="to" class="btn" v-if="to" v-ripple="cr"><slot></slot></a>
    <button v-else class="btn" v-ripple="cr"><slot></slot></button>
</template>

<script>
    export default {
        name: 'Btn',
        props: {
            to: {
                default: false
            },
            cr: {
                type: String
            }
        },
        computed: {
            link() {
                return this.props.to;
            }
        }
    };
</script>
