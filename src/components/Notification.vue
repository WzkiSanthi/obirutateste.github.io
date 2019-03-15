<template>
    <div>
        <a id="notifications" rel="nofollow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
            class="nav-link">
            <i class="notification-icon"
                :class="[hasNewNotification? 'ion-md-notifications': 'ion-md-notifications-off']"></i>
            <span class="badge-pulse" v-show="hasNewNotification"></span>
        </a>
        <ul aria-labelledby="notifications" class="dropdown-menu notification">
            <li>
                <div class="notifications-header-2">
                    <div class="title">Notifications <span
                            v-show="notifications.length">({{notifications.length}})</span></div>
                </div>
            </li>
            <li>
                <a>
                    <div class="message-body">
                        <div v-for="notification in notifications">
                            <div class="message-body-heading">{{notification.message}}</div>
                            <span class="date">Just now</span>
                        </div>
                    </div>
                </a>
            </li>
            <li>
                <a rel="nofollow" class="dropdown-item all-notifications text-center">View All Notifications</a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'notification',
        data: function () {
            return {
                hasNewNotification: true,
                notifications: [
                    { message: 'You just hit the 1º of your league' },
                ]
            }
        }
    }
</script>
<style scoped>
    a {
        cursor: pointer
    }

    .notification-icon {
        font-size: 1.65rem;
    }

    .badge-pulse {
        position: absolute;
        right: 7px;
        top: 12px;
        width: 10px;
        height: 10px;
    }
</style>