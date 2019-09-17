<template>
    <div>
        <p v-for="item in jobs" :key="item.id">
            <a :href="item.url">{{ item.title }}</a>
            <small> {{ item.time_ago }} from {{ item.domain}}</small>
        </p>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "JobsView",
        computed: {
          ...mapState([
              'jobs'
          ])
        },
        methods: {
            ...mapActions([
                'FETCH_JOBS'
            ])
        },
        created() {
            this.FETCH_JOBS();
        }
    }
</script>

<style scoped>

</style>