<template>
  <div>
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        欢迎来到我的博客
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        记录生活，分享思考，用文字连接世界的每一个角落
      </p>
    </div>

    <SearchBox v-model:search-query="searchQuery" />

    <div class="grid gap-8">
      <BlogCard 
        v-for="post in filteredPosts" 
        :key="post.id" 
        :post="post" 
      />
    </div>

    <div v-if="filteredPosts.length === 0" class="text-center py-12">
      <p class="text-gray-500 dark:text-gray-400 text-lg">
        没有找到相关文章
      </p>
    </div>
  </div>
</template>

<script setup>
const { posts, searchPosts } = useBlog()
const searchQuery = ref('')

const filteredPosts = computed(() => {
  return searchPosts(searchQuery.value)
})

useHead({
  title: 'MiniBlog - 极简个人博客',
  meta: [
    { name: 'description', content: '一个简洁优雅的个人博客，记录生活点滴，分享心得感悟' }
  ]
})
</script>