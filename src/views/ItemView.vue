<template>
    <div v-if="item">
        <section>
            <div class="user-container">
                <div><i class="fas fa-user"></i></div>
                <div class="user-description">
                    <router-link :to="`/user/${ item.user }`">{{ item.user }}</router-link>
                    <div class="time">{{ item.time_ago }}</div>
                </div>
            </div>
            <h2>{{ item.title }}</h2>
        </section>
        <section>
            <div v-html="item.content"></div>
        </section>
    </div>
    <p v-else>데이터 로딩 중....</p>
</template>

<script>
    import { mapActions, mapState } from 'vuex'

    export default {
        name: "ItemView",
        computed: {
            ...mapState([
                'item'
            ])
        },
        methods: {
            ...mapActions([
                'FETCH_ITEM'
            ])
        },
        created() {
            const itemId = this.$route.query.id;
            this.FETCH_ITEM(itemId)
        },

    }
</script>

<style scoped>
    .user-container{
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }
    .fa-user {
        font-size: 2.5rem;
    }
    .user-container{
        padding-left: 8px;
    }
    .time {
        font-size: 0.7rem;
    }

</style>