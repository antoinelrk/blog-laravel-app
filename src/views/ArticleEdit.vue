<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useBlogStore } from '../stores/articles'
import { fetchCategories } from '../api/categories.js'
import { onBeforeMount, ref } from 'vue'

const blog = useBlogStore()
const route = useRoute()
const router = useRouter()
const slug = route.params.slug
let currentArticle

const categories = ref([])

onBeforeMount(async () => {
  currentArticle = blog.current(slug)
  categories.value = await fetchCategories(currentArticle.category.id)
})

const handleSubmit = async (e) => {
  const formData = new FormData(e.target);

  const payload = {
    title: formData.get('title'),
    content_raw: formData.get('content_raw'),
    category_id: parseInt(formData.get('category_id')),
    image: formData.get('image')
  }

	const { success, data } = await blog.update(payload, currentArticle.slug, formData)

	if (success.state) router.push({
    name: 'ArticleView',
    params: {
      slug: data.slug
    }
  })
}

</script>

<template>
    <form class="px-5" @submit.prevent="handleSubmit">
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 text-gray-900">Edition</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">Vous êtes sur le point de modifier l'article: <strong class="text-blue-400">{{ currentArticle.title }}</strong>.</p>
  
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
              <div class="mt-2">
                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input type="text" name="title" id="title" autocomplete="title" class="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" v-model="currentArticle.title" />
                </div>
              </div>
            </div>
  
            <div class="col-span-full">
              <label for="content_raw" class="block text-sm font-medium leading-6 text-gray-900">Content</label>
              <div class="mt-2">
                <textarea
                    id="content_raw"
                    name="content_raw"
                    rows="3"
                    class="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    v-model="currentArticle.content_raw"                    
                />
              </div>
            </div>

            <div class="col-span-full">
              <select name="category_id" class="data-te-select-init">
                <option id="category_id" name="category_id" :value="currentArticle.category.id" selected>{{ currentArticle.category.name }}</option>
                <option id="category_id" name="category_id" :key="category.id" v-for="category in categories.data" :value="category.id">{{ category.name }}</option>
              </select>
            </div>
  
            <div class="col-span-full">
              <label for="image" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
              <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div class="text-center">
                  <PhotoIcon class="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div class="mt-4 flex text-sm leading-6 text-gray-600">
                    <label for="image" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                      <span>Upload a file</span>
                      <input id="image" name="image" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
      </div>
    </form>
  </template>