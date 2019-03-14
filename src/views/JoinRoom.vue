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
                                    <h4>Room List</h4>
                                </div>
                                <div class="widget-body">
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
                                                    <td>{{room.name}}</td>
                                                    <td>{{room.players}}</td>
                                                    <td>{{room.pass}}</td>
                                                    <td>{{room.distance}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
        name: 'joinRoom',
        components: {
            HeaderBar
        },
        data: function () {
            return {
                stateStore: StateStore,
                rooms: [
                    { name: 'tamo brotando', players: '1/4', pass: 'yes', distance: '100km' },
                    { name: 'Just chillin', players: '1/2', pass: 'no', distance: '15460km' },
                    { name: 'Avengers united', players: '1/4', pass: 'no', distance: '56470km' },
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

    .rooms:hover{
        cursor: pointer;
        background: #5d53864d;
    }
</style>