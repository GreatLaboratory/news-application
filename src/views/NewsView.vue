<template>
    <div>
        <div v-for="user in users" :key="user.id">{{ user }}</div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "NewsView",
        data() {
            return {
                users : []
            }
        },
        created() {
            axios.get('https://api.hnpwa.com/v0/news/1.json')
                .then((res)=>{
                    console.log(res);
                    this.users = res.data;
            })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
</script>

<style scoped>

</style>