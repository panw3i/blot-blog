<template>
  <div v-if="post">
    <article class="prose prose-lg dark:prose-invert max-w-none">
      <header class="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
        <h1 class="mb-4">{{ post.title }}</h1>
        <div class="flex items-center justify-between flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div class="flex items-center space-x-4">
            <time>{{ formattedDate }}</time>
            <span>{{ readTime }} 分钟阅读</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="btn-secondary"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </header>
      
      <div v-html="renderedContent"></div>
    </article>

    <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <NuxtLink 
        to="/" 
        class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        <ArrowLeft class="w-4 h-4 mr-2" />
        返回首页
      </NuxtLink>
    </div>
  </div>

  <div v-else class="text-center py-12">
    <h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
      文章未找到
    </h1>
    <p class="text-gray-600 dark:text-gray-400 mb-8">
      抱歉，您访问的文章不存在或已被删除
    </p>
    <NuxtLink to="/" class="btn-primary">
      返回首页
    </NuxtLink>
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'

const route = useRoute()
const { getPostBySlug } = useBlog()

const post = getPostBySlug(route.params.slug)

const formattedDate = computed(() => {
  if (!post) return ''
  return new Date(post.date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })
})

const readTime = computed(() => {
  if (!post) return 0
  const wordsPerMinute = 200
  const words = post.content.length / 5
  return Math.ceil(words / wordsPerMinute)
})

// 简单的 Markdown 渲染（实际项目中建议使用专业的 Markdown 解析器）
const renderedContent = computed(() => {
  if (!post) return ''
  
  return post.content
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n\n/gim, '</p><p>')
    .replace(/^(?!<[h|u|c])/gim, '<p>')
    .replace(/(?<![>])$/gim, '</p>')
})

useHead({
  title: post ? `${post.title} - MiniBlog` : '文章未找到 - MiniBlog',
  meta: [
    { name: 'description', content: post ? post.excerpt : '文章未找到' }
  ]
})
</script>