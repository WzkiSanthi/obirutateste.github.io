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
                        <h3>Log in</h3>
                        <div>
                            <ul class="social-network text-center mt-3">
                                <li><a href="#" class="ico-facebook" title="Facebook">
                                        <i class="ion-social-facebook"></i></a>
                                </li>
                                <li><a href="#" class="ico-twitter" title="Twitter">
                                        <i class="ion-social-twitter"></i></a>
                                </li>
                                <li @click="googleLogin()" style="cursor: pointer">
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
    export default {
        name: 'login',
        components: {
        },
        data: function () {
            return {
                user: null,
                loading: false
            }
        },
        mounted: function () {
            firebase.auth().onAuthStateChanged((user) => {
                this.user = user ? user : this.user;
                this.loading = user ? true : false;
                //LER NICK
                if (this.user) {
                    firebase.firestore().collection("users").doc(this.user.uid).get()
                        .then((querySnapshot) => {
                            if (querySnapshot.exists && querySnapshot.data().nickname) {
                                localStorage.setItem("nickname", querySnapshot.data().nickname);
                                setTimeout(() => {
                                    this.$router.push({ path: '/menu' })
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

</style>