import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticleView from '../views/ArticleView.vue'
import ArticleEdit from '../views/ArticleEdit.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/articles/:slug',
            name: 'ArticleView',
            component: ArticleView,
        },
        {
            path: '/articles/:slug/edit',
            name: 'ArticleEdit',
            component: ArticleEdit
        }
    ]
})

export default router
