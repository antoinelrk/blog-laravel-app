<script setup>
import { useRoute } from 'vue-router'
import { useBlogStore } from '../stores/articles'
const blog = useBlogStore()
const route = useRoute()
const slug = route.params.slug
const currentArticle = blog.current(slug)

const handleClick = () => {
    console.log('test')
}

</script>

<template>
    <main>
        <h1>{{ currentArticle.title }}</h1>
    </main>
</template>