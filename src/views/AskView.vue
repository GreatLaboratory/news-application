<template>
    <div>
        <p v-for="item in ask" :key="item.id">
            <a :href="item.url">{{ item.title }}</a>
            <small> {{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "AskView",
        computed: {
            ...mapState([
                'ask'
            ])
        },
        methods: {
            ...mapActions([
                'FETCH_ASK'
            ])
        },
        created() {
            this.FETCH_ASK();
        }
    }
</script>

<style scoped>

</style>