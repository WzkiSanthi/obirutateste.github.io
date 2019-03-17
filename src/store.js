import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Vuex)

//CÓDIGOS DE ERRO
const CODE = {
    0: { code: 0, message: "Problem with the conection with the server" },
    1: { code: 1, message: "There's not a nickname bounded to this user" }
}

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
            state.user ? sessionStorage.setItem("auth", state.user.uid) : sessionStorage.removeItem("auth");
            !state.user ? sessionStorage.removeItem("nickname") : null;
        },
        SET_NICKNAME(state, nickname) {
            state.nickname = nickname;
            sessionStorage.setItem("nickname", nickname);
        }
    },
    actions: {
        auth_state_change({ commit, dispatch }) {
            firebase.auth().onAuthStateChanged((user) => {
                commit('SET_USER', user);
                dispatch('get_nickname');
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
        get_nickname({ state, commit }) {
            if (state.user) {
                return new Promise((resolve, reject) => {
                    firebase.firestore().collection("users").doc(state.user.uid).get()
                        .then((querySnapshot) => {
                            var nickname = querySnapshot.exists && querySnapshot.data().nickname ?
                                querySnapshot.data().nickname : state.nickname;
                            if (nickname) {
                                commit('SET_NICKNAME', nickname);
                                resolve();
                            } else {
                                reject(CODE['1']);
                            }
                        })
                        .catch(function (error) {
                            reject(CODE['0']);
                            UIkit.notification(CODE['0'].message, { pos: 'bottom-center', status: 'danger' });
                        });
                });
            }
        },
        register_nickname({ state, commit }, data) {
            return new Promise((resolve, reject) => {
                firebase.firestore().collection("users").doc(state.user.uid).set(
                    { nickname: data, raw_nickname: data.toLowerCase() }
                ).then(() => {
                    commit('SET_NICKNAME', data);
                    resolve();
                }).catch((error) => {
                    reject(CODE['0']);
                    UIkit.notification(CODE['0'].message, { pos: 'bottom-center', status: 'danger' });
                });
            });
        },
        logout() {
            return new Promise((resolve, reject) => {
                firebase.auth().signOut().then(() => {
                    resolve();
                }, function (error) {
                    reject(CODE['0']);
                    console.log(CODE['0'].message);
                });
            });
        }
    }
})

export default store;