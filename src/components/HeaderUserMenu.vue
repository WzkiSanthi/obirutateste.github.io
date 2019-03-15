<template>
    <div>
        <a id="user" rel="nofollow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link">
            <img v-if="$store.getters.USER" style="max-width: 40px" :src="$store.getters.USER.photoURL" alt=" ..."
                class="rounded-circle">
        </a>
        <div aria-labelledby="user" class="user-size dropdown-menu">
            <li class="welcome" v-if="$store.getters.USER" style="text-align: center">
                <img style="max-width: 150px" :src="$store.state.user.photoURL" class="rounded-circle">
                <div>{{this.$store.getters.USER.displayName}}</div>
                <div class="text-gradient-02">{{this.$store.getters.NICKNAME}}</div>
            </li>
            <div class="em-separator separator-dashed" style="margin: 10px 0">
            </div>
            <li class="" style="text-align: right">
                <router-link to="/profile" class="dropdown-item">
                    Profile
                </router-link>
                <a class="dropdown-item" @click="logout()">
                    Logout
                </a>
            </li>
            <div style="padding-bottom: 10px"></div>
        </div>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'headerUserMenu',
        methods: {
            logout: function () {
                this.$store.dispatch('logout').then(() => {
                    this.$router.push({ path: '/login' });
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