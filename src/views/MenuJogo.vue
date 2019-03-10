<template>
    <!-- End Preloader -->
    <div class="db-smarthome page">
        <!-- Begin Page Content -->
        <div class="page-content">
            <div class="content-inner boxed w-100">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-xl-9">
                            <!-- Begin Header -->
                            <header class="header">
                                <nav class="navbar">
                                    <!-- Begin Topbar -->
                                    <div
                                        class="navbar-holder d-flex align-items-center align-middle justify-content-between">
                                        <!-- Begin Logo -->
                                        <div class="navbar-header">
                                            <div class="brand-image">
                                                <img :src="logo" alt="logo" class="logo-big ">
                                            </div>
                                        </div>
                                        <!-- End Logo -->
                                        <!-- Begin Navbar Menu -->
                                        <ul
                                            class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right">
                                            <!-- Begin Notifications -->
                                            <li class="nav-item dropdown">
                                                <a id="notifications" rel="nofollow" data-toggle="dropdown"
                                                    aria-haspopup="true" aria-expanded="false" class="nav-link">
                                                    <i class="animated infinite swing ion-android-notifications"></i>
                                                    <span class="badge-pulse"></span>
                                                </a>
                                                <ul aria-labelledby="notifications" class="dropdown-menu notification">
                                                    <li>
                                                        <div class="notifications-header-2">
                                                            <div class="title">Notifications (4)</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <a>
                                                            <div class="message-icon">
                                                                <i class="la la-unlock"></i>
                                                            </div>
                                                            <div class="message-body">
                                                                <div class="message-body-heading">
                                                                    Front door unlocked
                                                                </div>
                                                                <span class="date">Just now</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a rel="nofollow" href="#"
                                                            class="dropdown-item all-notifications text-center">View
                                                            All
                                                            Notifications</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <!-- End Notifications -->
                                            <!-- User -->
                                            <li>
                                                <img v-if="this.user" style="max-width: 50px"
                                                    :src="this.user.photoURL"" alt=" ..." class="rounded-circle">
                                            </li>
                                            <!-- End User -->
                                            <!-- Begin Quick Actions -->
                                            <li class="nav-item">
                                                <a style="cursor: pointer" @click="showSettings = true"
                                                    class="open-sidebar"><i class="ion-android-settings"></i></a>
                                            </li>
                                            <!-- End Quick Actions -->
                                        </ul>
                                        <!-- End Navbar Menu -->
                                    </div>
                                    <!-- End Topbar -->
                                </nav>
                            </header>
                            <!-- End Header -->

                            <!-- Menu  -->
                            <div class="row">
                                <div class="col-xl-3 col-md-4 col-sm-6" v-for="tile in tiles">
                                    <div class="widget shadow" style="height: 350px">
                                        <img :src="tile.image" class="card-img" alt="...">
                                        <div class="widget-body text-center">
                                            <h3 class="mt-3 mb-3">{{tile.name}}</h3>
                                            <hr>
                                            <p>{{tile.desc}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Offcanvas Sidebar -->
                    <div class="off-sidebar from-right" :class="{'is-visible': showSettings}">
                        <div class="off-sidebar-container mini">
                            <header class="off-sidebar-header">
                                <a style="cursor: pointer; float: right; margin: 12px" @click="showSettings = false" class="ion-close"></a>
                            </header>
                            <div class="off-sidebar-content offcanvas-scroll auto-scroll">
                                <!-- Begin Settings -->
                                <div class="sidebar-heading text-center">Settings</div>
                                <div class="widget-26">
                                    <div class="q-settings">
                                        <div class="row m-0">
                                            <div class="col-xl-12 text-center mt-0">
                                                <i class="ion-lightbulb"></i>
                                                <div class="t-title">Lights</div>
                                                <div class="mt-3">
                                                    <label>
                                                        <input class="toggle-checkbox-sm" type="checkbox" checked>
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 text-center mt-4">
                                                <i class="ion-fireball"></i>
                                                <div class="t-title">Gas</div>
                                                <div class="mt-3">
                                                    <label>
                                                        <input class="toggle-checkbox-sm" type="checkbox">
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 text-center mt-4">
                                                <i class="ion-qr-scanner"></i>
                                                <div class="t-title">Camera</div>
                                                <div class="mt-3">
                                                    <label>
                                                        <input class="toggle-checkbox-sm" type="checkbox">
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 text-center mt-4">
                                                <i class="ion-radio-waves"></i>
                                                <div class="t-title">Alarm</div>
                                                <div class="mt-3">
                                                    <label>
                                                        <input class="toggle-checkbox-sm" type="checkbox" checked>
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 text-center mt-4">
                                                <i class="ion-bluetooth"></i>
                                                <div class="t-title">Bluetooth</div>
                                                <div class="mt-3">
                                                    <label>
                                                        <input class="toggle-checkbox-sm" type="checkbox" checked>
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-xl-12 text-center mt-4">
                                                <i class="ion-music-note"></i>
                                                <div class="t-title">Speakers</div>
                                                <div class="mt-3">
                                                    <label>
                                                        <input class="toggle-checkbox-sm" type="checkbox" checked>
                                                        <span>
                                                            <span></span>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Offcanvas Container -->
                        </div>
                        <!-- End Offsidebar Container -->
                    </div>
                    <!-- End Offcanvas Sidebar -->
                </div>
                <!-- End Content -->
            </div>
            <!-- End Page Content -->
        </div>
    </div>
</template>
<script>
    import Logo from '../assets/logo-big.png';
    import Tile1 from '../assets/tile-1.jpg';
    import Tile2 from '../assets/tile-7.jpg';
    import Tile3 from '../assets/tile-8.jpg';
    import Tile4 from '../assets/tile-4.jpg';

    export default {
        name: 'menuJogo',
        data: function () {
            return {
                user: null,
                showSettings: false,
                logo: Logo,
                tiles: [
                    { name: "Join Room", image: Tile1, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { name: "Create Room", image: Tile2, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { name: "Profile", image: Tile3, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                    { name: "League/Cup", image: Tile4, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." },
                ]
            }
        },
        methods: {
            getImage: function (tile) {
                return tile + "";
            },
            logout: function () {
                firebase.auth().signOut().then(() => {
                    this.$router.push({ path: '/login' })
                }, function (error) {
                    // An error happened.
                    console.log("Erro ao deslogar");
                });
            }
        },
        mounted: function () {
            firebase.auth().onAuthStateChanged((user) => {
                this.user = user ? user : this.user;
            });
        },
    }
</script>
<style scoped>
    .header {
        margin-bottom: 40px
    }
</style>