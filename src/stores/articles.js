import { defineStore, acceptHMRUpdate } from "pinia"
import { all, destroy, create, update } from '../api/articles.js'

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
        async create(payload) {
            const {data, success} = await create(payload)
            console.log(data, success)
        },
        async update(payload, slug) {
            const {data, success} = await update(payload, slug)

            if (success.state) this.posts = this.posts.data.filter((post) => post.slug === slug ? post = data : null)
            

            return { success }
        },
        async destroy (slug) {
            const {success} = await destroy(slug)
            if (success.state) { this.posts.data = this.posts.data.filter(post => post.slug !== slug) }
            
            return {
                success
            }
        },
        async fetchArticles(page = null) {
            let {data, err} = await all(page)
            this.posts = data
            this.error = err
        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot))
  }