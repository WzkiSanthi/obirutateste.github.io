import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        router: null,
        user: null,
        nickname: null
    },
    getters: {
        isAuth(state) {
            return state.user ? true : false;
        },
        getNickname(state) {
            return state.nickname;
        }
    },
    mutations: {
        setUser(state, data) {
            //SETAR USUARIO
            state.user = data;
            state.user ? localStorage.setItem("auth", state.user.uid) : localStorage.removeItem("auth");
            //SETAR NICK
            state.nickname = state.user ? state.nickname : null;
            !state.user ? localStorage.removeItem("nickname") : null;
            this.commit('setNickname');
        },
        setNickname(state) {
            if (state.user) {
                firebase.firestore().collection("users").doc(state.user.uid).get()
                    .then((querySnapshot) => {
                        this.state.nickname = querySnapshot.exists && querySnapshot.data().nickname ?
                            querySnapshot.data().nickname : state.nickname;
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
        setup(context, data) {
            //SEMPRE CHAMADO POR MAIN.JS
            this.state.router = data;
            firebase.auth().onAuthStateChanged((user) => {
                this.commit('setUser', user);
            });
        },
        logout() {
            firebase.auth().signOut().then(() => {
                this.state.router.push({ path: '/login' });
            }, function (error) {
                console.log("Erro ao deslogar");
            });
        }
    }
})

export default store;