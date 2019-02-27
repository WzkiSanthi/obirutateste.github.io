<template>
    <div class="uk-position-center">
        <!--  Register container  -->
        <div class="uk-card uk-border-rounded uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="../assets/spotify.gif" alt="" uk-cover>
                <canvas width="600" height="600"></canvas>
            </div>
            <!-- Login container  user-->
            <div>
                <div class="uk-card-body">
                    <div class="flex-align">
                        <div style="flex: 1"></div>
                        <!--/ End buttom Sign up/Register -->
                        <hr class="uk-divider-icon">
                        <!-- Social login -->
                        <div v-show="!loading" class="social-buttons-container">
                            <div class="uk-link-muted uk-text-big uk-margin-bottom">Use social media to login</div>
                            <div class="social-buttons">
                                <a class="uk-icon-button uk-button-complete uk-margin-small-right" uk-icon="twitter"></a>
                                <a class="uk-icon-button uk-button-complete uk-margin-small-right" uk-icon="facebook"></a>
                                <a @click="googleLogin()" class="uk-icon-button uk-button-danger  uk-margin-small-right"
                                    uk-icon="google"></a>
                            </div>
                        </div>
                        <div v-show="loading" style="text-align: center">
                            <div class="uk-text-big">Logging in</div>
                            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40"
                                xml:space="preserve">
                                <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z" />
                                <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
C22.32,8.481,24.301,9.057,26.013,10.047z">
                                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20"
                                        to="360 20 20" dur="0.5s" repeatCount="indefinite" />
                                </path>
                            </svg>
                        </div>
                        <hr class="uk-divider-icon">
                        <div class="uk-text-big">Help? Contact Support</div>
                        <div style="flex: 1"></div>
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
                    firebase.database().ref('nicknames/' + this.user.uid).once('value', (snapshot) => {
                        //SE NAO TEM NICK, MANDAR CRIAR
                        if (!snapshot.val()) {
                            setTimeout(() => {
                                this.$router.push({ path: '/create-user' })
                            }, 500);
                        } else {
                            setTimeout(() => {
                                this.$router.push({ path: '/menu' })
                            }, 500);
                        }
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
    .uk-card-body,
    .flex-align {
        height: 100%
    }

    .flex-align {
        display: flex;
        flex-direction: column;
    }

    .social-buttons-container .uk-link-muted {
        text-align: center
    }

    .social-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center
    }
</style>