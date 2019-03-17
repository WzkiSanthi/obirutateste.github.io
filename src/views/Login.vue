<template>
    <div style="height: 100%" :style="splashImage()">
        <div class="container-fluid h-100 overflow-y ">
            <div class="row flex-row h-100">
                <div class="col-12 my-auto">
                    <div class="lock-form mx-auto"
                        style="display: flex;flex-direction: column;width: auto;max-width: 100%;padding: 0">
                        <div class="login-ad">
                            <img :src="ad" />
                        </div>
                        <div style="margin: 4em 0">
                            <div class="text-center text-gradient-01 brand-style"
                                style="font-size: 2.5em;margin-bottom: 4px">soccerrush</div>
                            <div class="em-separator separator-dashed" style="margin: 0px 0 12px 0"></div>
                            <h4 style="margin-top: 4px" class="text-center">Log in with social networks</h4>
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
    </div>
</template>
<script>
    import Splash from '../assets/splash-image.jpg';
    import Adidas from '../assets/adidas1.gif';

    export default {
        name: 'login',
        components: {
        },
        data: function () {
            return {
                ad: Adidas,
                loading: false
            }
        },
        computed: {
            Auth() {
                return this.$store.getters.AUTH;
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
            },
            splashImage: function () {
                return 'background-size: cover;background-position: center center;background-image: url(' + Splash + ')';
            }
        },
        watch: {
            Auth: function (val) {
                if (val) {
                    this.$store.dispatch('set_loading', 'Logging in');
                    this.$store.dispatch('get_nickname').then(() => {
                        this.$store.dispatch('unset_loading');
                        this.$router.push({ path: '/' })
                    }).catch(() => {
                        this.$store.dispatch('unset_loading');
                        this.$router.push({ path: '/create-user' })
                    });
                }
            }
        }
    }
</script>
<style scoped>
    a {
        cursor: pointer
    }

    .login-ad {
        width: 300px;
        height: 250px;
        overflow: hidden;
        margin: 8px;
    }

    .login-ad img {
        height: 100%;
    }
</style>