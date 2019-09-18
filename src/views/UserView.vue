<template>
    <div v-if="user">
        <p>name : {{ user.id }}</p>
        <p>karma : {{ user.karma }}</p>
        <p>created : {{ user.created }}</p>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        name: "UserView",
        computed: {
            ...mapState([
                'user'
            ])
        },
        methods: {
            ...mapActions([
                'FETCH_USER'
            ])
        },
        created() {
            const userName = this.$route.params.id;
            this.FETCH_USER(userName)
        },
    }
</script>

<style scoped>

</style>