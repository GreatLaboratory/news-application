<template>
    <div>
        <p v-for="item in news" :key="item.id">
            <a :href="item.url">{{ item.title }}</a>
            <small> {{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "NewsView",
        created() {
            this.FETCH_NEWS();
        },
        methods: {
            ...mapActions([
                'FETCH_NEWS'
            ])
        },
        computed : {
            ...mapState([
                'news'
            ])
        },
    }
</script>

<style scoped>

</style>