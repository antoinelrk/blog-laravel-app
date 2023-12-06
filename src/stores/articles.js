import { defineStore, acceptHMRUpdate } from "pinia"
import axios from 'axios'

export const useBlogStore = defineStore('blog', {
    state: () => ({
        posts: [],
        error: null
    }),
    getters: {
        current: (state) => (slug) => {
            const currentPost = state.posts.data.find(post => post.slug == slug)
            return currentPost
        }
    },
    actions: {
        async fetchArticles(page = null) {
            try {
                const response = await axios.get(`http://localhost:8000/api/articles${page != null ? "?page=" + page : ""}`)
                this.posts = response.data
            } catch (e) {
                this.error = e
            }
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot))
  }