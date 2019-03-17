<template>
    <div>
        <HeaderBar></HeaderBar>
        <div class="page-content">
            <div class="content-inner boxed w-100">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-10">
                            <Card>
                                <template v-slot:header>Create Room</template>
                                <template v-slot:body>
                                    <form class="form-horizontal">
                                        <div class="form-group row d-flex align-items-center mb-5">
                                            <label class="col-lg-3 form-control-label">Room Name</label>
                                            <div class="col-lg-9">
                                                <input v-model="roomSettings.name" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-group row d-flex align-items-center mb-5">
                                            <label class="col-lg-3 form-control-label">Password</label>
                                            <div class="col-lg-9">
                                                <input v-model="roomSettings.password" type="password"
                                                    class="form-control">
                                            </div>
                                        </div>

                                        <div class="form-group row mb-5">
                                            <label class="col-lg-3 form-control-label">Max Players</label>
                                            <div class="col-lg-9 select mb-3">
                                                <select v-model="roomSettings.maxPlayers" name="account"
                                                    class="custom-select form-control">
                                                    <option value="1">01</option>
                                                    <option value="2">02</option>
                                                    <option value="3">03</option>
                                                    <option value="4">04</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row d-flex align-items-center mb-5">
                                            <label class="col-lg-3 form-control-label">Show in Room List ?</label>
                                            <div class="col-sm-9">
                                                <div class="mb-3">
                                                    <div class="styled-radio">
                                                        <input v-model="roomSettings.showOnList" :value="true"
                                                            type="radio" name="radio" id="rad-1">
                                                        <label for="rad-1">Yes</label>
                                                    </div>
                                                </div>
                                                <div class="mb-3">
                                                    <div class="styled-radio">
                                                        <input v-model="roomSettings.showOnList" :value="false"
                                                            type="radio" name="radio" id="rad-2" checked>
                                                        <label for="rad-2">No</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="widget-body" style="display: flex;">
                                            <router-link to="/">
                                                <CButton gradient="1">Cancel</CButton>
                                            </router-link>
                                            <div style="flex: 1"></div>
                                            <CButton @click.native="createRoom()" :disabled="disableCreateButton"
                                                gradient="4">Create</CButton>
                                        </div>
                                    </form>
                                </template>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderBar from '../components/HeaderBar';
    import Card from '../components/Card';
    import CButton from '../components/CButton';

    export default {
        name: 'createRoom',
        components: {
            HeaderBar, Card, CButton
        },
        data: function () {
            return {
                roomSettings: {
                    name: '',
                    password: '',
                    maxPlayers: 1,
                    showOnList: false
                }
            }
        },
        methods: {
            createRoom() {
                this.$router.push('/room');
            }
        },
        computed: {
            disableCreateButton: function () {
                return !this.roomSettings.name;
            }
        }
    }
</script>
<style scoped>
    a {
        cursor: pointer
    }
</style>