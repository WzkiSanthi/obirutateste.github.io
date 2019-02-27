<template>
    <div class="uk-position-center">
        <div class="uk-card uk-border-rounded uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="../assets/google.gif" alt="" uk-cover>
                <canvas width="400" height="400"></canvas>
            </div>
            <!-- Login container  user-->
            <div>
                <div class="uk-card-body">
                    <div class="flex-align">
                        <div style="flex: 1"></div>
                        <hr class="uk-divider-icon">
                        <div class="uk-margin">
                            <input v-model="nickname" maxlength="15" class="uk-input uk-form-width-large" type="text"
                                placeholder="Username">
                        </div>
                        <div class="uk-alert-danger" uk-alert v-show="error">
                            <p v-show="errorType == 0">Nickname already taken!</p>
                            <p v-show="errorType == 1">You must use a name, a # and
                                a number right after. No spaces allowed either. E.g: soccerrush#55</p>
                        </div>
                        <div class="uk-margin">
                            <a @click="register()" v-show="!error && nickname.length" class="uk-button uk-button-success uk-border-rounded uk-margin-small-bottom"
                                disabled>Register</a>
                            <button v-show="!nickname.length || error" class="uk-button uk-button-default" disabled>Register</button>
                        </div>
                        <hr class="uk-divider-icon">
                        <div>
                            <h5 class=" uk-text-big">Help? Contact Support</h5>
                        </div>
                        <div style="flex: 1"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'createUser',
        components: {
        },
        data: function () {
            return {
                user: null,
                nickname: "",
                error: false,
                errorType: 0
            }
        },
        mounted: function () {
            firebase.auth().onAuthStateChanged((user) => {
                this.user = user ? user : this.user;
                if (this.user) {
                    firebase.database().ref('nicknames/' + this.user.uid).once('value', (snapshot) => {
                        if (snapshot.val()) {
                            this.$router.push({ path: '/menu' });
                        }
                    });
                }
            });
        },
        methods: {
            register: function () {
                firebase.database().ref('nicknames').once('value', (snapshot) => {
                    var nicks = snapshot.val(), temNick = false;
                    for (var k in nicks) {
                        temNick = nicks[k].nickname.toUpperCase() == this.nickname.toUpperCase() ? true : temNick;
                    }

                    if (temNick) {
                        this.error = true;
                        this.errorType = 0;
                    } else {
                        this.error = false;
                        firebase.database().ref('nicknames/' + this.user.uid).set({ nickname: this.nickname });
                        this.$router.push({ path: '/menu' });
                    }
                });
            }
        },
        watch: {
            nickname: function (val, oldval) {
                if (val != oldval) {
                    var regex = /(^[A-Za-z]*)[#]\b\d*$/
                    this.error = !regex.test(this.nickname);
                    this.errorType = !regex.test(this.nickname) ? 1 : this.errorType;
                }
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
</style>