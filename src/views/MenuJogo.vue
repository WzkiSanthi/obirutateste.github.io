<template>
    <div>
        <nav class="uk-navbar-container uk-box-shadow-small uk-margin">
            <div class="uk-container">
                <div class="uk-navbar">
                    <div class="uk-navbar-left">

                        <a class="uk-navbar-item uk-logo" href="#">SOCCERRUSH</a>

                    </div>

                    <div class="uk-navbar-right">

                        <div class="uk-navbar-item">
                            <ul class="uk-navbar-nav">

                                <li><a @click="logout()">LOGOUT</a></li>
                            </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MENU OFF-CANVAS -->
            <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
<button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            <li class="uk-active"><a href="#">League</a></li>
            <li class="uk-parent">
                
                <ul class="uk-nav-sub">
                    <li><a href="#" class="uk-text-danger uk-margin-small-right">New League</a></li>
                    <li><a href="#" class="uk-text-success uk-margin-small-right">New Cup</a></li>
                </ul>
            </li>
            <li class="uk-active"><a href="#">League Ranking</a></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
            <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
            <li class="uk-nav-divider"></li>
            <li><a href="#"><span class="uk-margin-small-right"  uk-close></span> Item</a></li>
        </ul>

    </div>
    <!-- END MENU-CANVAS-->
</div>
        </nav>
        <div class="uk-position-center">
            <!-- Menu -->

            <!-- Menu Tile 1-->
            <div class="uk-child-width-1-4 uk-position-medium  " uk-grid>
                <div>
                    <a class="uk-link-reset">
                        <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px"
                                :style="setTileBackground(this.tile1)"></div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title ">Join Room</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.</p>
                            </div>
                        </div>

                    </a></div>
                <!--/ End Tile 1-->

                <!-- Menu Tile 2-->
                <div>
                    <a class="uk-link-reset">
                        <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px"
                                :style="setTileBackground(this.tile2)"></div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Created Room</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.</p>
                            </div>
                        </div>

                    </a>
                </div>
                <!--/ End Tile 2-->

                <!-- Menu Tile 3-->
                <div>
                    <a class="uk-link-reset">
                        <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px"
                                :style="setTileBackground(this.tile3)"></div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Profile</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <!--/ End Tile 3-->

                <!-- Menu Tile 4-->
                <div>
                    <a class="uk-link-reset" uk-toggle="target: #offcanvas-nav-primary">
                        <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px"
                                :style="setTileBackground(this.tile4)"></div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title  ">League</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Tile1 from '../assets/tile-4.jpg';
    import Tile2 from '../assets/tile-7.jpg';
    import Tile3 from '../assets/tile-1.jpg';
    import Tile4 from '../assets/tile-9.jpg';

    export default {
        name: 'menuJogo',
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