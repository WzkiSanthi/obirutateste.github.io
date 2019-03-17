<template>
    <button type="button" class="btn" :class="getGradient()">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        name: 'CButton',
        props: ['gradient'],
        components: {
        },
        methods: {
            getGradient() {
                if (this.gradient && (this.gradient > 0 && this.gradient < 6)) {
                    return 'btn-gradient-0' + this.gradient;
                }
            }
        }
    }
</script>
<style scoped>
    .btn-gradient-01,
    .btn-gradient-02,
    .btn-gradient-03,
    .btn-gradient-04,
    .btn-gradient-05 {
        color: white;
    }

    .btn-gradient-01:disabled,
    .btn-gradient-02:disabled,
    .btn-gradient-03:disabled,
    .btn-gradient-04:disabled,
    .btn-gradient-05:disabled {
        background: #010101;
        opacity: 0.15;
        cursor: default;
    }
</style>