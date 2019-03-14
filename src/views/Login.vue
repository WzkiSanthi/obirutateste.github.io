<template>
    <div style="height: 100%">
        <!-- Begin Preloader -->
        <div id="preloader" v-show="loading">
            <div class="canvas">
                <h3>Loging In</h3>
                <div class="spinner"></div>
            </div>
        </div>
        <!-- End Preloader -->
        <!-- Begin Section -->
        <div class="container-fluid h-100 overflow-y ">
            <div class="row flex-row h-100">
                <div class="col-12 my-auto">
                    <div class="lock-form mx-auto">
                        <div class="text-center text-gradient-01 brand-style" style="font-size: 2.5em;margin-bottom: 10px">soccerrush</div>
                        <div class="em-separator separator-dashed" style="margin-top: 0"></div>
                        <h4 class="text-center">Log in with social networks</h4>
                        <div>
                            <ul class="social-network text-center mt-3">
                                <li><a class="ico-facebook" title="Facebook">
                                        <i class="ion-logo-facebook"></i></a>
                                </li>
                                <li><a class="ico-twitter" title="Twitter">
                                        <i class="ion-logo-twitter"></i></a>
                                </li>
                                <li @click="googleLogin()">
                                    <a class="ico-google" title="Google">
                                        <i class="ion-logo-google"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import StateStore from '../store';

    export default {
        name: 'login',
        components: {
        },
        data: function () {
            return {
                stateStore: StateStore,
                loading: false
            }
        },
        computed: {
            isAuth() {
                return this.stateStore.getters.isAuth;
            },
            getNickname() {
                return this.stateStore.getters.getNickname;
            }
        },
        methods: {
            googleLogin: function () {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then((result) => {
                    var token = result.credential.accessToken;
                    var user = result.user;
                }).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    var email = error.email;
                    var credential = error.credential;
                });
            }
        },
        watch: {
            isAuth: function (val) {
                this.loading = val;
            },
            getNickname: function (val, oldval) {
                if (val) {
                    setTimeout(() => {
                        this.$router.push({ path: '/' })
                    }, 500);
                } else {
                    setTimeout(() => {
                        this.$router.push({ path: '/create-user' })
                    }, 500);
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