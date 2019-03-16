<template>
    <div>
        <HeaderBar></HeaderBar>
        <!-- Begin Page Content -->
        <div class="page-content">
            <div class="content-inner boxed w-100">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-xl-11">
                            <div class="row flex-row">
                                <div class="col-xl-3">
                                    <Card v-if="$store.getters.USER">
                                        <template v-slot:body>
                                            <div class="mt-3">
                                                <img :src="$store.getters.USER.photoURL" alt="..." style="width: 120px;"
                                                    class="avatar rounded-circle d-block mx-auto">
                                            </div>
                                            <h4 class="text-center mt-3 mb-1">
                                                {{$store.getters.USER.displayName}}
                                            </h4>
                                            <div class="text-center text-gradient-02">
                                                {{$store.getters.NICKNAME}}</div>
                                            <div class="em-separator separator-dashed"></div>
                                            <ul class="nav flex-column">
                                                <li class="nav-item" v-for="(option, index) in sidebarOptions">
                                                    <a class="nav-link"
                                                        :class="{'nav-link-active': sidebarIndex == index}"
                                                        @click="sidebarIndex = option.id">
                                                        <i :class="[option.icon]"></i>
                                                        <span style="text-transform: capitalize">{{option.name}}</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </template>
                                    </Card>
                                </div>
                                <div class="col-xl-9">
                                    <Card>
                                        <template v-slot:header>
                                            <span style="text-transform: capitalize">{{getActiveTabName()}}</span>
                                        </template>
                                        <template v-slot:body>
                                        </template>
                                    </Card>
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

    export default {
        name: 'profile',
        components: {
            HeaderBar, Card
        },
        data: function () {
            return {
                sidebarIndex: 0,
                sidebarOptions: [
                    { name: 'account settings', icon: 'ion-md-person', id: 0 },
                    { name: 'settings', icon: 'ion-md-settings', id: 1 }
                ]
            }
        },
        methods: {
            getActiveTabName: function () {
                return this.sidebarOptions[this.sidebarIndex].name;
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
    a {
        cursor: pointer;
    }

    a.nav-link {
        display: flex;
        align-items: center;
        color: #5d5386;
    }

    .nav-link i {
        font-size: 1.25rem !important;
        margin-right: 1rem;
        color: #aea9c3;
    }

    a.nav-link-active,
    a.nav-link:hover {
        color: #e76c90;
    }
</style>