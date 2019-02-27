<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
    *,
    *:before,
    *::after {
        box-sizing: border-box;
    }

    body {
        width: 100%;
        height: 100vh;
        color: #fff;
        background: linear-gradient(-30deg, #d1d8e0, #CAD3C8, #d1d8e0, #34495e, #2c3e50, #2C3A47);
        background-size: 400% 400%;
        -webkit-animation: Gradient 15s ease infinite;
        -moz-animation: Gradient 15s ease infinite;
        animation: Gradient 15s ease infinite;
    }

    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }

        50% {
            background-position: 100% 50%
        }

        100% {
            background-position: 0% 50%
        }
    }

    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }

        50% {
            background-position: 100% 50%
        }

        100% {
            background-position: 0% 50%
        }
    }

    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }

        50% {
            background-position: 100% 50%
        }

        100% {
            background-position: 0% 50%
        }
    }
</style>