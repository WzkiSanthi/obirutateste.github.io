import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        user: null,
        nickname: null,
        loading: {
            message: '',
            status: false
        }
    },
    getters: {
        AUTH(state) {
            return state.user ? true : false;
        },
        USER(state) {
            return state.user;
        },
        NICKNAME(state) {
            return state.nickname;
        },
        LOADING(state) {
            return state.loading;
        }
    },
    mutations: {
        UNSET_LOADING(state) {
            state.loading.status = false;
        },
        SET_LOADING(state, message) {
            state.loading.status = true;
            state.loading.message = message;
        },
        SET_USER(state, data) {
            //SETAR USUARIO
            state.user = data;
            state.user ? localStorage.setItem("auth", state.user.uid) : localStorage.removeItem("auth");
            //SETAR NICK
            state.nickname = state.user ? state.nickname : null;
            !state.user ? localStorage.removeItem("nickname") : null;
            this.commit('CHECK_NICKNAME');
        },
        SET_NICKNAME(state, nickname) {
            state.nickname = nickname;
        },
        CHECK_NICKNAME(state) {
            if (state.user) {
                firebase.firestore().collection("users").doc(state.user.uid).get()
                    .then((querySnapshot) => {
                        var nickname = querySnapshot.exists && querySnapshot.data().nickname ?
                            querySnapshot.data().nickname : state.nickname;
                        this.commit('SET_NICKNAME', nickname);
                        if (this.state.nickname) {
                            localStorage.setItem("nickname", state.nickname);
                        }

                    })
                    .catch(function (error) {
                        UIkit.notification("Error at reading data from server. Pardon! =S", { pos: 'bottom-center', status: 'danger' });
                    });
            }
        },
    },
    actions: {
        auth_state_change({ commit }) {
            firebase.auth().onAuthStateChanged((user) => {
                commit('SET_USER', user);
            });
        },
        set_loading({ commit }, data) {
            commit('SET_LOADING', data);
        },
        unset_loading({ commit }) {
            setTimeout(() => {
                commit('UNSET_LOADING');
            }, 1000);
        },
        logout() {
            return new Promise((resolve, reject) => {
                firebase.auth().signOut().then(() => {
                    resolve()
                }, function (error) {
                    reject().
                        console.log("Erro ao deslogar");
                });
            });
        }
    }
})

export default store;