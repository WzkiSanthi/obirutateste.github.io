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
                        <div class="brand-image">
                            <img style="width: 100%" :src="logo" alt="logo" class="logo-big ">
                        </div>
                        <div class="em-separator separator-dashed" style="margin-top: 0"></div>
                        <h4 style="text-align: center">Log in with social networks</h4>
                        <div>
                            <ul class="social-network text-center mt-3">
                                <li><a class="ico-facebook" title="Facebook">
                                        <i class="ion-social-facebook"></i></a>
                                </li>
                                <li><a class="ico-twitter" title="Twitter">
                                        <i class="ion-social-twitter"></i></a>
                                </li>
                                <li @click="googleLogin()">
                                    <a class="ico-danger" title="Google">
                                        <i class="ion-social-google"></i></a>
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
    import Logo from '../assets/logo-big.png';

    export default {
        name: 'login',
        components: {
        },
        data: function () {
            return {
                user: null,
                logo: Logo,
                loading: false
            }
        },
        mounted: function () {
            firebase.auth().onAuthStateChanged((user) => {
                this.user = user;
                this.loading = user ? true : false;
                //LER NICK
                if (this.user) {
                    firebase.firestore().collection("users").doc(this.user.uid).get()
                        .then((querySnapshot) => {
                            if (querySnapshot.exists && querySnapshot.data().nickname) {
                                localStorage.setItem("nickname", querySnapshot.data().nickname);
                                setTimeout(() => {
                                    this.$router.push({ path: '/' })
                                }, 500);
                            } else {
                                setTimeout(() => {
                                    this.$router.push({ path: '/create-user' })
                                }, 500);
                            }
                        })
                        .catch(function (error) {
                            UIkit.notification("Error at reading data from server. Pardon! =S", { pos: 'bottom-center', status: 'danger' });
                        });
                }
            });
        },
        methods: {
            googleLogin: function () {
                var provider = new firebase.auth.GoogleAuthProvider();
                firebase.auth().signInWithPopup(provider).then(function (result) {
                    var token = result.credential.accessToken;
                    var user = result.user;
                }).catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    var email = error.email;
                    var credential = error.credential;
                });
            }
        }
    }
</script>
<style scoped>
    a {
        cursor: pointer
    }
</style>