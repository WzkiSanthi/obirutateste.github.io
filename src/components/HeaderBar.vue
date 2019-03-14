<template>
    <header class="header">
        <nav class="navbar fixed-top">
            <!-- Begin Search Box-->
            <div class="search-box">
                <button class="dismiss"><i class="ion-md-close"></i></button>
                <form id="searchForm" action="#" role="search">
                    <input type="search" placeholder="Search something ..." class="form-control">
                </form>
            </div>
            <!-- End Search Box-->
            <!-- Begin Topbar -->
            <div class="navbar-holder">
                <div class="container-fluid"  style="padding: 0 12px">
                    <div class="row align-items-center">
                        <div class="justify-content-center" style="display: flex;flex: 1">
                            <router-link to="/">
                                <div class="navbar-header" style="margin-left: 100px">
                                    <div class="navbar-brand">
                                        <div class="text-gradient-01 brand-style">soccerrush</div>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div>
                            <!-- Begin Navbar Menu -->
                            <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right"
                                style="float: right">
                                <!-- Begin Notifications -->
                                <li class="nav-item dropdown">
                                    <a id="notifications" rel="nofollow" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false" class="nav-link">
                                        <i class="ion-md-notifications"></i>
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
                                                        You just hit the 1º of your league
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
                                        <img v-if="stateStore.state.user" style="max-width: 40px"
                                            :src="stateStore.state.user.photoURL" alt=" ..." class="rounded-circle">
                                    </a>
                                    <ul aria-labelledby="user" class="user-size dropdown-menu">
                                        <li class="welcome" v-if="stateStore.state.user" style="text-align: center">
                                            <img style="max-width: 150px" :src="stateStore.state.user.photoURL"
                                                class="rounded-circle">
                                            <div>{{this.stateStore.state.user.displayName}}</div>
                                            <div style="color: #5d5386">{{this.stateStore.state.nickname}}</div>
                                        </li>
                                        <div class="em-separator separator-dashed" style="margin: 10px 0">
                                        </div>
                                        <li class="" style="text-align: right">
                                            <router-link to="/profile" class="dropdown-item">
                                                Profile
                                            </router-link>
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
            </div>
            <!-- End Topbar -->
        </nav>
    </header>
</template>
<script>
    import Store from '../store';

    export default {
        name: 'headerBar',
        components: {
        },
        data: function () {
            return {
                stateStore: Store
            }
        },
        methods: {
            logout: function () {
                this.stateStore.dispatch('logout');
            }
        },
    }
</script>
<style scoped>
    a {
        cursor: pointer
    }
</style>
<style>
    .brand-style {
        font-size: 1.5em;
        font-weight: bold;
        text-transform: uppercase
    }
</style>