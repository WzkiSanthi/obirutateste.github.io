<template>
    <div>
        <HeaderBar></HeaderBar>
        <div class="page-content">
            <div class="content-inner boxed w-100">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-10">
                            <div class="widget shadow">
                                <div class="widget-header bordered no-actions d-flex align-items-center">
                                    <h4>Create Room</h4>
                                </div>
                                <div class="widget-body">
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
                                                <button type="button"
                                                    class="btn  btn-gradient-01">Cancel</button>
                                            </router-link>
                                            <div style="flex: 1"></div>
                                            <a>
                                                <button type="button"
                                                    class="btn btn-gradient-04">CREATE</button>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import StateStore from '../store';
    import HeaderBar from '../components/HeaderBar';

    export default {
        name: 'createRoom',
        components: {
            HeaderBar
        },
        data: function () {
            return {
                stateStore: StateStore,
                roomSettings: {
                    name: '',
                    password: '',
                    maxPlayers: 1,
                    showOnList: false
                }
            }
        }
    }
</script>
<style scoped>
    a {
        cursor: pointer
    }
</style>