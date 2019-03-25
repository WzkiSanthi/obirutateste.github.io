import Vue from 'vue'
import Vuex from 'vuex'
import socketio from 'socket.io-client';

Vue.use(Vuex)

var APIURL = "";
//CÓDIGOS DE ERRO
const CODE = {
    0: { code: 0, message: "Problem with the conection with the server" },
    1: { code: 1, message: "There's not a nickname bounded to this user" }
}

var socketStore = new Vuex.Store({
    state: {
        socketio: socketio,
        socket: null
    },
    getters: {
        GET_SOCKETIO(state) {
            return state.socketio;
        }
    },
    mutations: {
        SET_SOCKET(state, socket) {
            state.socket = socket;
        }
    },
    actions: {
        connect({ commit }, url) {
            var socket = new socketio(APIURL);
            commit('SET_SOCKET', socket);
        }
    }
})

export default socketStore;