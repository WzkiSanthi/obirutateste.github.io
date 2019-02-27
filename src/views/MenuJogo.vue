<template>
    <div class="uk-position-center">
        <!-- Menu -->

        <!-- Menu Tile 1-->
        <div class="uk-child-width-1-4 uk-position-medium  " uk-grid>
            <div>
                <a class="uk-link-reset">
                    <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px" :style="setTileBackground(this.tile1)"></div>
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
                        <div class="uk-card-media-top uk-background-cover" style="height: 150px" :style="setTileBackground(this.tile2)"></div>
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
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px" :style="setTileBackground(this.tile3)"></div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title">Settings</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                    </div>
                </a>
            </div>
            <!--/ End Tile 3-->

            <!-- Menu Tile 4-->
            <div>
                <a class="uk-link-reset">
                    <div class="uk-card uk-card-hover uk-card-default ">
                            <div class="uk-card-media-top uk-background-cover" style="height: 150px" :style="setTileBackground(this.tile4)"></div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title ">Quit</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
    import Tile1 from '../assets/tile-1.jpg';
    import Tile2 from '../assets/tile-2.jpg';
    import Tile3 from '../assets/tile-3.jpg';
    import Tile4 from '../assets/tile-5.jpg';

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
            }
        }
    }
</script>
<style scoped>
</style>