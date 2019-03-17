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

    body {
        background: #f2f3f8;
    }

    #app {
        width: 100%;
        height: 100vh;
        font-family: "Montserrat", sans-serif;
    }

    #preloader {
        animation: fadeIn 0.25s;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>