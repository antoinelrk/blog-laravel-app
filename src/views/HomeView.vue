<script setup>
import { useBlogStore } from '../stores/articles'
const blog = useBlogStore()
</script>

<template>
  <main>
    <ul>
      <li :key="post.id" v-for="post in blog.posts.data">
        {{ post.title }}
      </li>
    </ul>
  </main>
</template>
