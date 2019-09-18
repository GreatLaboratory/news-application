import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from "@/views/NewsView";
import JobsView from "@/views/JobsView";
import AskView from "@/views/AskView";
import UserView from "@/views/UserView";
import ItemView from "@/views/ItemView";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',   // 이게 없으면 전부 url이 /#/ 이렇게 들어옴
    routes:[
        // path : url 주소가 담긴다.
        // component : url주소가 갔을 때 표시될 컴포넌트 / 주로 페이지로 간주한다.
        {
            path: '/',
            redirect: "/news"
        },
        {
            path: '/news',
            component: NewsView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/ask',
            component: AskView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item',
            component: ItemView,
        },
    ]
});