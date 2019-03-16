<template>
    <div class="widget shadow">
        <slot name="image"></slot>
        <div class="widget-header bordered no-actions d-flex align-items-center" v-if="this.$slots.header">
            <h4>
                <slot name="header"></slot>
            </h4>
        </div>
        <div class="widget-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Card'
    }
</script>