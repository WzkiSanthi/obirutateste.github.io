<template>

</template>
<script>
    export default {
        name: 'profile',
        data: function () {
            return {
                tile1: Tile1,
                tile2: Tile2,
                tile3: Tile3,
                tile4: Tile4,
            }
        },
        methods: {
            setTileBackground: function (tile) {
                return "backgroundImage: url(" + tile + ")";
            },
            logout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.push({ path: '/login' })
                }, function (error) {
                    // An error happened.
                    console.log("Erro ao deslogar");
                });
            }
        }
    }
</script>
<style scoped>
</style>