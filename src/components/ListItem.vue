<template>
    <div v-if="itemList">
        <ul class="news-list">
            <li v-for="item in itemList" :key="item.id" class="post">
                <!-- point 영역 -->
                <div class="points">
                    {{ item.points || 0}}
                </div>

                <!-- 기타 영역 -->
                <div>
                    <p class="news-title">
                        <a :href="item.url">{{ item.title }}</a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <template v-if="item.user">
                            <router-link class="link-text" :to="`/user/${item.user}`">{{ item.user}}</router-link>
                        </template>
                        <template v-else>
                            <a :href="item.url">{{item.domain}}</a>
                        </template>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: "ListItem",
        created() {
            const path = this.$route.path;
            if (path === '/news') {
                this.FETCH_NEWS();
            } else if (path === '/ask') {
                this.FETCH_ASK();
            } else if (path === '/jobs') {
                this.FETCH_JOBS();
            }
        },
        methods: {
            ...mapActions([
                'FETCH_NEWS',
                'FETCH_ASK',
                'FETCH_JOBS',
            ])
        },
        computed : {
            ...mapState([
                'news',
                'jobs',
                'ask',
            ]),
            itemList() {
                const path = this.$route.path;
                if (path === '/news') {
                    return this.news
                } else if (path === '/ask') {
                    return this.ask
                } else if (path === '/jobs') {
                    return this.jobs
                }
            }
        },
    }
</script>

<style scoped>
    .news-list{
        margin: 0;
        padding: 0;
    }
    .post {
        list-style: none;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
    }
    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #42b883
    }
    .news-title {
        margin: 0;
    }
    .link-text {
        color: #828282;
    }
</style>