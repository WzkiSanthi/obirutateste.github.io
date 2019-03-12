<template>
    <div class="container-fluid h-100 overflow-y ">
        <div id="preloader" v-show="loading">
            <div class="canvas">
                <h3>Creating nickname...</h3>
                <div class="spinner"></div>
            </div>
        </div>
        <div class="row flex-row h-100">
            <div class="col-3"></div>
            <div class="col-6 my-auto">
                <!-- Begin Widget -->
                <div class="widget has-shadow">
                    <div class="widget-body" v-if="this.user">
                        <div class="mt-5">
                            <img :src="this.user.photoURL" alt="..." style="width: 120px;"
                                class="avatar rounded-circle d-block mx-auto">
                        </div>
                        <h3 class="text-center mt-3 mb-1">{{this.user.displayName}}</h3>
                        <div class="em-separator separator-dashed"></div>
                        <form class="form-horizontal">
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-3 form-control-label">Nickname</label>
                                <div class="col-lg-9">
                                    <input v-model="nickname" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="text-danger" v-show="error">
                                <p v-show="errorType == 0">Nickname already taken!</p>
                                <p v-show="errorType == 1">You must use a name, a # and
                                    a number right after. No spaces allowed either. E.g: soccerrush#55</p>
                            </div>
                        </form>
                        <div style="display: flex">
                            <div style="flex: 1"></div>
                            <button @click="register()" :disabled="!nickname.length || error" type="button"
                                class="btn btn-gradient-04 mr-1 mb-2">Register nickname</button>
                        </div>
                    </div>
                </div>
                <!-- End Widget -->
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
                errorType: 0,
                loading: false
            }
        },
        mounted: function () {
            firebase.auth().onAuthStateChanged((user) => {
                this.user = user ? user : this.user;
                if (this.user) {
                    firebase.database().ref('nicknames/' + this.user.uid).once('value', (snapshot) => {
                        if (snapshot.val()) {
                            this.$router.push({ path: '/' });
                        }
                    });
                }
            });
        },
        methods: {
            register: function () {
                let createNickname = () => {
                    this.loading = true;
                    firebase.firestore().collection("users").doc(this.user.uid).set(
                        { nickname: this.nickname }
                    ).then(() => {
                        setTimeout(() => {
                            this.loading = false;
                            localStorage.setItem("nickname", this.nickname);
                            this.$router.push({ path: '/' });
                        }, 1000);
                    }).catch((error) => {
                        this.loading = false;
                        UIkit.notification("Error creating nickname in the server", { pos: 'bottom-center', status: 'danger' });
                    });
                }

                firebase.firestore().collection("users").where("nickname", "==", this.nickname).get()
                    .then((querySnapshot) => {
                        if (querySnapshot.docs.length) {
                            querySnapshot.forEach((doc) => {
                                var nickname = doc.data().nickname;
                                if (nickname.toUpperCase() == this.nickname.toUpperCase()) {
                                    this.error = true;
                                    this.errorType = 0;
                                } else {
                                    this.error = false;
                                    createNickname();
                                }
                            });
                        } else {
                            createNickname();
                        }

                    })
                    .catch(function (error) {
                        UIkit.notification("Error at reading data from server. Pardon! =S", { pos: 'bottom-center', status: 'danger' });
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
</style>