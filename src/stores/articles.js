import { defineStore } from "pinia"
import axios from 'axios'

export const useBlogStore = defineStore('blog', {
    state: () => ({
        posts: [],
        error: null
    }),
    actions: {
        async fetchArticles() {
            try {
                const response = await axios.get('http://localhost:8000/api/articles')
                this.posts = response.data
            } catch (e) {
                this.error = e
            }
        }
    }
})