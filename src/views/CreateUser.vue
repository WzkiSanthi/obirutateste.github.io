<template>
    <div class="container-fluid h-100 overflow-y ">
        <div class="row flex-row h-100">
            <div class="col-3"></div>
            <div class="col-6 my-auto">
                <Card>
                    <template v-slot:body v-if="$store.getters.USER">
                        <div class="mt-5">
                            <img :src="$store.getters.USER.photoURL" alt="..." style="width: 120px;"
                                class="avatar rounded-circle d-block mx-auto">
                        </div>
                        <h3 class="text-center mt-3 mb-1">{{$store.getters.USER.displayName}}</h3>
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
                            <CButton @click.native="register()" :disabled="!nickname.length || error" gradient="4">
                                Register
                                nickname</CButton>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
<script>
    import CButton from '../components/CButton';
    import Card from '../components/Card';

    export default {
        name: 'createUser',
        components: {
            CButton, Card
        },
        data: function () {
            return {
                user: null,
                nickname: "",
                error: false,
                errorType: 0
            }
        },
        methods: {
            register: function () {
                let createNickname = () => {
                    this.$store.dispatch('set_loading', 'Creating nickname..');
                    this.$store.dispatch('register_nickname', this.nickname).then(() => {
                        this.$store.dispatch('unset_loading');
                        this.$router.push({ path: '/' });
                    });
                }

                //PEGAR TODOS OS NICKS, COMPARANDO COM O CAMPO RAW_NICKNAME (TODO MINUSCULO, USADO APENAS PARA COMPARAÇÃO)
                firebase.firestore().collection("users").where("raw_nickname", "==", this.nickname.toLowerCase()).get()
                    .then((querySnapshot) => {
                        if (querySnapshot.docs.length) {
                            querySnapshot.forEach((doc) => {
                                this.error = true;
                                this.errorType = 0;
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