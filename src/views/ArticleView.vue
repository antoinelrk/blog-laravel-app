<script setup>
import { useRoute } from 'vue-router'
import { useBlogStore } from '../stores/articles'
const blog = useBlogStore()
const route = useRoute()
const slug = route.params.slug
const currentArticle = blog.current(slug)
</script>

<template>
    <RouterLink
        class=" m-5 inline-block rounded-full border border-gray-500 p-3 text-gray-500 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        to="/"
    >
        <svg class="h-5 w-5 rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </RouterLink>

	<div class="p-5 mx-auto sm:p-10 md:p-16 bg-gray-200 text-gray-100">
		<div class="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
			<img :src="currentArticle.image" alt="" class="w-full h-60 sm:h-96 bg-gray-800">
			<div class="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-white">
				<div class="space-y-2">
					<a rel="noopener noreferrer" href="#" class="inline-block text-2xl text-black font-semibold sm:text-3xl">{{ currentArticle.title }}</a>
					<p class="text-xs text-black">By
						<a rel="noopener noreferrer" href="#" class="text-xs text-blue-500 hover:underline">Antoine LRK</a>
					</p>
				</div>
				<div class="text-black">
					<p v-html="currentArticle.content_raw"></p>
				</div>
			</div>
		</div>
	</div>
</template>

<!-- <template>
    <main>
        <RouterLink :to="`/articles/${slug}/edit`">Editer</RouterLink>
        <h1 style="font-size: 2em;">#{{ currentArticle.id }} - {{ currentArticle.title }}</h1>
        <p>{{ currentArticle.content_raw }}</p>
        <img :src="currentArticle.image" alt="">
        <span style="color: orange">{{ currentArticle.user }}</span>
    </main>
</template> -->
