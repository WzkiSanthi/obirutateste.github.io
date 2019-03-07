<template>
    <div>
        <nav class="uk-navbar-container uk-box-shadow-small uk-margin">
            <div class="uk-container">
                <div class="uk-navbar">
                    <div class="uk-navbar-left">
                        <a class="uk-navbar-item uk-logo">SOCCERRUSH</a>
                    </div>
                    <div class="uk-navbar-right">
                        <div class="uk-navbar-item">
                            <ul class="uk-navbar-nav">
                                <li><a @click="logout()">LOGOUT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
                 <!-- MODAL  PROFILE-->
            <div id="modal-full" class="uk-modal-full" uk-modal>
                  <div class="uk-modal-dialog">
        <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
        <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
            <div class="uk-background-cover" style="background-image: url('assets/bg.teste.png');" uk-height-viewport></div>
            <div class="uk-padding-large">
                <h1>Headline</h1>
                <p class="uk-text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
</div>
  <!-- MODAL END profile -->
            <!-- MENU OFF-CANVAS -->
            <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                <div class="uk-offcanvas-bar uk-flex uk-flex-column">
                    <button class="uk-offcanvas-close" type="button" uk-close></button>
                    <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                        <li class="uk-active"><a href="">League</a></li>
                        <li class="uk-parent">
                            <ul class="uk-nav-sub">
                                <li><a href="" class="uk-text-danger uk-margin-small-right">New League</a></li>
                                <li><a href="" class="uk-text-success uk-margin-small-right">New Cup</a></li>
                            </ul>
                        </li>
                        <li class="uk-active"><a href="#">League Ranking</a></li>
                        <li><a href=""><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
                        <li><a href=""><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a>
                        </li>
                        <li class="uk-nav-divider"></li>
                        <li><a href=""><span class="uk-margin-small-right" uk-close></span> Item</a></li>
                    </ul>

                </div>

                <!-- MENU OFF-CANVAS CREATED ROOM-->
                <div id="offcanvas-nav-primary-2" uk-offcanvas="overlay: true">
                    <div class="uk-offcanvas-bar">
                        <button class="uk-offcanvas-close" type="button" uk-close></button>
                        <h3>Create Club</h3>
                        <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">

                            <br>
                            <!-- Room Name container  -->
                            <div class="uk-margin">
                                <input class="uk-input uk-form-width-large" type="text" placeholder="Club Name">
                            </div>
                            <!--/ End Room Name container -->
                            
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
                                    
                                </select>
                            </div>
                            <hr>
                            <!--/ End Container Max Players -->
                           
                            <hr>
                            <!-- Buttom Create/Cancel -->
                            <div class="uk-margin uk-margin-left">
                                <a href="" class="uk-button uk-button-default  uk-margin-small-bottom">Create</a>
                                <a href="" class="uk-button uk-button-default  uk-margin-small-bottom ">Cancel</a>
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
                   <div class="uk-card uk-card-hover uk-card-default">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px"
                                :style="setTileBackground(this.tile1)"></div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title ">Profile</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.</p>
                            </div>
                             <div class="uk-card-footer">
                            <p>
                                <a class="uk-button uk-button-text " href="#modal-full" uk-toggle>Skills</a>
                                
                            </p>
                        </div>
                        </div>
                    </a>
                </div>
                <!--/ End Tile 1-->

                <!-- Menu Tile 2-->
                <div>
                    
                        <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px"
                                :style="setTileBackground(this.tile2)"></div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">MyClub</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.</p>
                            </div>
                             <div class="uk-card-footer">
                            <p>
                                <a class="uk-button uk-button-text " uk-toggle="target: #offcanvas-nav-primary-2">CREATE</a>
                                <a class="uk-button uk-button-text uk-margin-small-left">Edit</a>
                            </p>
                        </div>
                        </div>

                    </a>
                </div>
                <!--/ End Tile 2-->

                <!-- Menu Tile 3-->
                <div>
                    
                        <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px"
                                :style="setTileBackground(this.tile3)"></div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title">Ranking</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.</p>
                            </div>
                             <div class="uk-card-footer">
                            <p> 
                                <a class="uk-button uk-button-text uk-margin-small-left " >Top players</a>
                                <a class="uk-button uk-button-text uk-margin-small-left">TOP teams</a>
                                
                                
                            </p>
                        </div>
                        </div>
                    </router-link>
                </div>
                <!--/ End Tile 3-->

                <!-- Menu Tile 4-->
                <div>
                    <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px"
                                :style="setTileBackground(this.tile4)"></div>
                            <div class="uk-card-body">
                                <h3 class="uk-card-title  ">League</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.</p>
                            </div>
                            <div class="uk-card-footer">
                            <p>
                                <a class="uk-button uk-button-text uk-margin-small-left " href="#">ENTER</a>
                                <a class="uk-button uk-button-text uk-margin-small-left" uk-toggle="target: #offcanvas-nav-primary">CREATE</a>
                                
                            </p>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Tile1 from '../assets/tile-8.jpg';
    import Tile2 from '../assets/tile-11.jpg';
    import Tile3 from '../assets/tile-10.jpg';
    import Tile4 from '../assets/tile-6.jpg';

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