<template>
  <article class="card p-6 group cursor-pointer" @click="navigateToPost">
    <div class="flex items-center justify-between mb-3">
      <time class="text-sm text-gray-500 dark:text-gray-400">{{ formattedDate }}</time>
      <span class="text-sm text-gray-500 dark:text-gray-400">{{ readTime }} 分钟阅读</span>
    </div>
    
    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {{ post.title }}
    </h2>
    
    <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
      {{ post.excerpt }}
    </p>
    
    <div class="flex items-center justify-between">
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in post.tags" 
          :key="tag"
          class="btn-secondary"
        >
          #{{ tag }}
        </span>
      </div>
      <ArrowRight class="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1" />
    </div>
  </article>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})

const formattedDate = computed(() => {
  return new Date(props.post.date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const readTime = computed(() => {
  const wordsPerMinute = 200
  const words = props.post.content.length / 5 // 中文字符估算
  return Math.ceil(words / wordsPerMinute)
})

const navigateToPost = () => {
  navigateTo(`/posts/${props.post.slug}`)
}
</script>