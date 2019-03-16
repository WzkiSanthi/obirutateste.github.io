<template>
    <header class="header">
        <nav class="navbar fixed-top">
            <!-- Begin Search Box-->
            <div class="search-box" :class="[showSearch? 'search-box_open' : 'search-box_close']">
                <button class="dismiss" @click="showSearch = false">
                    <i class="ion-md-close"></i>
                </button>
                <form id="searchForm" onsubmit="return false" autocomplete="off">
                    <input ref="searchText" v-model="searchTerm" @keyup="search($event)"
                        placeholder="Search something and press enter" id="search-term" class="form-control">
                </form>
            </div>
            <!-- End Search Box-->
            <!-- Begin Topbar -->
            <div class="navbar-holder">
                <div class="container-fluid" style="padding: 0 12px">
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
                        <!-- Begin Navbar Menu -->
                        <div class="nav-menu list-unstyled d-flex flex-md-row align-items-center pull-right"
                            style="float: right">
                            <div class="nav-item d-flex align-items-center" @click="showSearch = true">
                                <a id="search"><i class="ion-md-search"></i></a>
                            </div>
                            <div class="nav-item dropdown">
                                <Notification></Notification>
                            </div>
                            <div class="nav-item dropdown">
                                <HeaderUserMenu></HeaderUserMenu>
                            </div>
                            <!-- End User -->
                        </div>
                        <!-- End Navbar Menu -->
                    </div>
                </div>
            </div>
            <!-- End Topbar -->
        </nav>
    </header>
</template>
<script>
    import Notification from './Notification';
    import HeaderUserMenu from './HeaderUserMenu';

    export default {
        name: 'headerBar',
        components: {
            Notification,
            HeaderUserMenu
        },
        data: function () {
            return {
                showSearch: false,
                searchTerm: ''
            }
        },
        methods: {
            search: function (e) {
                if (e.keyCode == 13) {
                    //DO SEARCH
                }
            }
        },
        watch: {
            showSearch: function (val) {
                if (val) {
                    this.$nextTick(() => this.$refs.searchText.focus())
                } else {
                    this.$nextTick(() => this.$refs.searchText.blur())
                }
            }
        }
    }
</script>
<style scoped>
    a {
        cursor: pointer
    }
</style>
<style>
    .search-box {
        transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
    }

    .search-box_open {
        top: 0;
    }

    .search-box_close {
        top: -100%;
    }

    #search-term:focus{
        box-shadow: 0 0 2em 0.2rem #0000002b;
    }

    .brand-style {
        font-size: 1.5em;
        font-weight: bold;
        text-transform: uppercase
    }
</style>