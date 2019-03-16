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
                                                    <td>{{room.name}}</td>
                                                    <td>{{room.players}}</td>
                                                    <td>{{room.pass}}</td>
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

    .rooms:hover {
        cursor: pointer;
        background: #5d53864d;
    }
</style>