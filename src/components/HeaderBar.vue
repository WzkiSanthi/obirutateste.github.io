<template>
    <header class="header">
        <nav class="navbar fixed-top">
            <!-- Begin Search Box-->
            <div class="search-box">
                <button class="dismiss"><i class="ion-android-close"></i></button>
                <form id="searchForm" action="#" role="search">
                    <input type="search" placeholder="Search something ..." class="form-control">
                </form>
            </div>
            <!-- End Search Box-->
            <!-- Begin Topbar -->
            <div class="navbar-holder">
                <div class="row align-items-center">
                    <div class="col-xl-4 col-2"></div>
                    <div class="col-xl-4 col-3 d-flex justify-content-center">
                        <router-link to="/menu">
                            <div class="navbar-header">
                                <a class="navbar-brand">
                                    <div class="brand-image">
                                        <img :src="logo" alt="logo" class="logo-big">
                                    </div>
                                </a>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-xl-4 col-7">
                        <!-- Begin Navbar Menu -->
                        <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right"
                            style="float: right">
                            <!-- Begin Notifications -->
                            <li class="nav-item dropdown">
                                <a id="notifications" rel="nofollow" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false" class="nav-link">
                                    <i class="ion-android-notifications"></i>
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
                            <li class="nav-item dropdown">
                                <a id="user" rel="nofollow" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false" class="nav-link">
                                    <img v-if="this.user" style="max-width: 50px" :src="this.user.photoURL"" alt=" ..."
                                        class="rounded-circle">
                                </a>
                                <ul aria-labelledby="user" class="user-size dropdown-menu">
                                    <li class="welcome" v-if="this.user" style="text-align: center">
                                        <img style="max-width: 150px" :src="this.user.photoURL" class="rounded-circle">
                                        <div>{{this.user.displayName}}</div>
                                        <div style="opacity: 0.8">{{this.nickname}}</div>
                                    </li>
                                    <div class="em-separator separator-dashed" style="margin: 10px 0">
                                    </div>
                                    <li style="text-align: right">
                                        <a class="dropdown-item" @click="logout()">
                                            Logout
                                        </a>
                                    </li>
                                    <div style="padding-bottom: 10px"></div>
                                </ul>
                            </li>
                            <!-- End User -->
                        </ul>
                        <!-- End Navbar Menu -->
                    </div>
                </div>
            </div>
            <!-- End Topbar -->
        </nav>
    </header>
</template>
<script>
    import Logo from '../assets/logo-big.png';

    export default {
        name: 'headerBar',
        components: {
        },
        data: function () {
            return {
                user: null,
                nickname: localStorage.getItem("nickname"),
                logo: Logo,
            }
        },
        methods: {
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
    a{
        cursor: pointer
    }
</style>