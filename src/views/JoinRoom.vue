<template>
    <div>
        <HeaderBar></HeaderBar>
        <div class="page-content">
            <div class="content-inner boxed w-100">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-10">
                            <Card>
                                <template v-slot:header>Room List</template>
                                <template v-slot:body>
                                    <div class="table-responsive">
                                        <table class="table mb-0">
                                            <thead>
                                                <tr>
                                                    <th style="width: 100%">Name</th>
                                                    <th>Players</th>
                                                    <th>Pass</th>
                                                    <th>Distance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="room in rooms" class="rooms">
                                                <td><div style="display: flex" class="align-items-center">
                                                 <span v-if="$store.getters.USER">
                                                    <img :src="$store.getters.USER.photoURL" alt="..." style="width: 32px;" class="avatar rounded-circle d-block mx-auto"> </span>
                                                    <span style="margin-left: 8px">{{room.name}}</span>
                                                           </div></td>
                                                    <td>{{room.players}}</td>
                                                    <td><span :class="[room.pass ? 'badge-text badge-text-small success ' : 'badge-text badge-text-small danger']">{{ room.pass ? 'Yes' : 'No'}}</span></td>
                                                    <td>{{room.distance}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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

    export default {
        name: 'joinRoom',
        components: {
            HeaderBar, Card
        },
        data: function () {
            return {
                rooms: [
                    { name: 'tamo brotandos', players: '1/4', pass: true, distance: '100km' },
                    { name: 'Just chillin', players: '1/2', pass: false, distance: '15460km' },
                    { name: 'Avengers united', players: '1/4', pass: false, distance: '56470km' },
                ]
            }
        }
    }
</script>
<style scoped>
    a {
        cursor: pointer
    }

    .rooms td {
        text-transform: capitalize;
    }

    .rooms:hover {
        cursor: pointer;
        background: #5d53864d;
    }
</style>