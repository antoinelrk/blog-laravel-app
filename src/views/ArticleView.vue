<script setup>
import { useRoute } from 'vue-router'
import { useBlogStore } from '../stores/articles'
const blog = useBlogStore()
const route = useRoute()
const slug = route.params.slug
const currentArticle = blog.current(slug)
</script>

<template>
    <main>
        <RouterLink :to="`/articles/${slug}/edit`">Editer</RouterLink>
        <h1 style="font-size: 2em;">#{{ currentArticle.id }} - {{ currentArticle.title }}</h1>
        <p>{{ currentArticle.content_raw }}</p>
        <img :src="currentArticle.image" alt="">
        <span style="color: orange">{{ currentArticle.user }}</span>
    </main>
</template>
