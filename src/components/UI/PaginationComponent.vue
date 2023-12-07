<script setup>
const props = defineProps(['posts'])
</script>

<template>
    <div class="flex items-center mt-20 justify-between bg-white px-4 sm:px-6">
      <span class="m-auto text-gray-600">{{ props.posts.current_page }} / {{ props.posts.last_page }}</span>
    </div>
    <div class="flex items-center justify-between bg-white px-4 sm:px-6">
    
      <div class="flex flex-1 justify-between sm:hidden">
        <RouterLink
          v-show="props.posts.current_page !== 1"
          :to="`/?page=${props.posts.current_page - 1}`"
          aria-current="page"
          class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </RouterLink>
          <RouterLink
            :to="`/?page=${props.posts.current_page + 1}`"
            v-show="props.posts.current_page !== props.posts.last_page"
            aria-current="page"
            class="relative ml-auto inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </RouterLink>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ props.posts.from }}</span>
            to
            <span class="font-medium">{{ props.posts.to }}</span>
            of
            <span class="font-medium">{{ props.posts.total }}</span>
            results
          </p>
        </div>
        <div>
          <nav class="isolate inline-flex -space-x-px rounded-md gap-x-2" aria-label="Pagination">
            <RouterLink
              v-show="props.posts.current_page !== 1"
              :to="`/?page=${props.posts.current_page - 1}`"
              aria-current="page"
              class="relative inline-flex items-center rounded px-2 py-2 text-gray-800 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              Previous
            </RouterLink>
            <span class="m-auto">{{ props.posts.current_page }} / {{ props.posts.last_page }}</span>
            <RouterLink
              :to="`/?page=${props.posts.current_page + 1}`"
              v-show="props.posts.current_page !== props.posts.last_page"
              aria-current="page"
              class="relative inline-flex items-center rounded px-2 py-2 text-gray-800 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              Next
            </RouterLink>
          </nav>
        </div>
      </div>
    </div>
</template>