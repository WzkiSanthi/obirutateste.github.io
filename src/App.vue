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

    a:hover{
        text-decoration: none;
    }

    #app {
        width: 100%;
        height: 100vh;
    }

</style>