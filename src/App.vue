<template>
    <div id="app">
        <div id="preloader" v-show="loading.status">
            <div class="canvas">
                <h3>{{loading.message}}</h3>
                <div class="spinner"></div>
            </div>
        </div>
        <router-view />
    </div>
</template>
<script>
    export default {
        name: 'app',
        data: function () {
            return {
            }
        },
        computed: {
            loading() {
                return this.$store.getters.LOADING
            }
        }
    }
</script>
<style>
    *,
    *:before,
    *::after {
        box-sizing: border-box;
    }

    a:hover {
        text-decoration: none;
    }

    #app {
        width: 100%;
        height: 100vh;
    }
</style>