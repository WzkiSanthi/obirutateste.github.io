<template>
    <!-- End Preloader -->
    <div>
        <HeaderBar></HeaderBar>
        <!-- Begin Page Content -->
        <div class="page-content">
            <div class="content-inner boxed w-100">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-xl-11">
                            <div class="row">
                                <div class="col-xl-3 col-md-4 col-sm-6" v-for="tile in tiles">
                                    <router-link :to="tile.route">
                                        <Card headerCenter="true">
                                            <template v-slot:header>{{tile.name}}</template>
                                            <template v-slot:image>
                                                <img :src="tile.image" class="card-img" alt="...">
                                            </template>
                                            <template v-slot:body>{{tile.desc}}</template>
                                        </Card>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderBar from '../components/HeaderBar';
    import Card from '../components/Card';
    import Tile1 from '../assets/tile-1.jpg';
    import Tile2 from '../assets/tile-7.jpg';
    import Tile3 from '../assets/tile-8.jpg';
    import Tile4 from '../assets/tile-4.jpg';

    export default {
        name: 'home',
        components: {
            HeaderBar, Card
        },
        data: function () {
            return {
                tiles: [
                    { route: '/join-room', name: "Join Room", image: Tile1, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { route: '/create-room', name: "Create Room", image: Tile2, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { route: '/profile', name: "Profile", image: Tile3, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { route: '/', name: "League/Cup", image: Tile4, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                ]
            }
        }
    }
</script>
<style scoped>
    .header {
        margin-bottom: 40px
    }

    a {
        cursor: pointer;
        color: black;
    }
</style>