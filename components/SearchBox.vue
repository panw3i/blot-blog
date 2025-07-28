<template>
  <div class="relative mb-8">
    <div class="relative">
      <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        v-model="searchQuery"
        type="text"
        placeholder="搜索文章..."
        class="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      >
    </div>
  </div>
</template>

<script setup>
import { Search } from 'lucide-vue-next'

const searchQuery = defineModel('searchQuery')
</script>