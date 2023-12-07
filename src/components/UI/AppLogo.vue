<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="flex lg:flex-1">
      <RouterLink class="-m-1.5 p-1.5" to="/">
        <span class="sr-only">Your Company</span>
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600" alt="">
      </RouterLink>
    </div>
</template>