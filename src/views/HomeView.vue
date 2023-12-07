<script setup>
import { RouterLink } from 'vue-router'
import { useBlogStore } from '../stores/articles'
import Pagination from '../components/UI/PaginationComponent.vue';
import { onMounted } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

const blog = useBlogStore()

onMounted (() => blog.fetchArticles())

onBeforeRouteUpdate((to, from, next) => {
  blog.fetchArticles(to.query.page)
  next();
});

</script>

<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mon super blog</h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">Test technique pour <strong>LesPorteclés Immobilier</strong></p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in blog.posts.data" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
          <div class="flex items-center gap-x-4 text-xs">
            <span class="whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-0.5 text-sm text-blue-500">{{ post.category.name }}</span>
            <time :datetime="post.datetime" class="text-gray-500">{{ post.created_at }}</time>
            <a href="post.category.href" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ post.category.title }}</a>
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <RouterLink :to="`/articles/${post.slug}`">
                <span class="absolute inset-0" />
                {{ post.title }}
              </RouterLink>
            </h3>
            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.content_raw }}</p>
          </div>
          <div class="relative mt-8 flex items-center gap-x-4">
            <img src="https://media.discordapp.net/attachments/1088757034909978685/1143098893400293376/0733ba760b29378474dea0fdbcb97107.png?ex=6580024d&is=656d8d4d&hm=8f47926688b218a821cb8f423b20b72882e424f1415af40fc16294b869bb9700&=&format=webp&quality=lossless&width=1358&height=1358" alt="" class="h-10 w-10 rounded-full bg-gray-50" />
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-900">
                <a>
                  <span class="absolute inset-0" />
                  Antoine LRK
                </a>
              </p>
              <p class="text-gray-600">Administrateur</p>
            </div>
          </div>
        </article>
      </div>
    </div>

    <Pagination :posts="blog.posts" />
  </div>
</template>