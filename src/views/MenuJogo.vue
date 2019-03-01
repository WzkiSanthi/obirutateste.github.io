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
                        <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a>
                        </li>
                        <li class="uk-nav-divider"></li>
                        <li><a href="#"><span class="uk-margin-small-right" uk-close></span> Item</a></li>
                    </ul>

                </div>

                <!-- MENU OFF-CANVAS CREATED ROOM-->
    <div id="offcanvas-nav-primary-2" uk-offcanvas="overlay: true">
   <div class="uk-offcanvas-bar">
 <button class="uk-offcanvas-close" type="button" uk-close></button>
 <h3>Create Room</h3>
        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
            
<br>
            <!-- Room Name container  -->
            <div class="uk-margin">
            <input class="uk-input uk-form-width-large" type="text" placeholder="Room Name">
        </div>
              <!--/ End Room Name container -->
        <hr>
    <!-- Container password -->

    <div class="uk-margin ">
        <input class="uk-input uk-form-width-large" type="text" placeholder="Password">
    </div>
     <!--/ End container password -->
     <hr>
     <!-- Container Max Players -->
    <div class="uk-margin">
            <select class="uk-select " placeholder="Max Player">
                <option>Max Player 01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>

            </select>

        </div>
        <hr>
     <!--/ End Container Max Players -->
      <!-- Show in room list-->
    <div class="uk-margin">
        <div class="uk-form-label">Show in Room List ?</div>
        <div class="uk-form-controls">
            <label><input class="uk-radio" type="radio" name="radio1"> Yes</label><br>
            <label><input class="uk-radio" type="radio" name="radio1"> No</label>
        </div>
    </div>
     <!--/ End Show in room list-->
    <hr>
        <!-- Buttom Create/Cancel -->
    <div class="uk-margin uk-margin-left">
     <a href="game/in_room.html" class="uk-button uk-button-default  uk-margin-small-bottom">Create</a>

     <a href="index.html" class="uk-button uk-button-default  uk-margin-small-bottom ">Cancel</a>
     </div>

      <!-- End Create/Cancel -->
   
        </ul>

    </div>
</div>

    <!-- END MENU-CANVAS-->
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
                    <a class="uk-link-reset" uk-toggle="target: #offcanvas-nav-primary-2">

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