<template>
    <div>
        <HeaderBar></HeaderBar>
        <div class="page-content">
            <div class="content-inner boxed w-100">
                <div class="container-fluid">
                    <div class="row justify-content-center">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import HeaderBar from '../components/HeaderBar';

    export default {
        name: 'room',
        components: {
            HeaderBar
        }
    }
</script>