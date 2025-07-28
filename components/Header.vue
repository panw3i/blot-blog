<template>
  <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
    <nav class="container mx-auto px-4 py-4 max-w-4xl">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          MiniBlog
        </NuxtLink>
        
        <div class="flex items-center space-x-6">
          <NuxtLink 
            to="/" 
            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            :class="{ 'text-blue-600 dark:text-blue-400': $route.path === '/' }"
          >
            首页
          </NuxtLink>
          <NuxtLink 
            to="/about" 
            class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            :class="{ 'text-blue-600 dark:text-blue-400': $route.path === '/about' }"
          >
            关于
          </NuxtLink>
          <button 
            @click="toggleDarkMode" 
            class="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Sun v-if="isDark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { Sun, Moon } from 'lucide-vue-next'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)
</script>