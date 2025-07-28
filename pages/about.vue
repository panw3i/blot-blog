<template>
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <div class="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
        你
      </div>
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        关于我
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        一个热爱生活、喜欢思考的普通人
      </p>
    </div>

    <div class="prose prose-lg dark:prose-invert max-w-none">
      <div class="card p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4">👋 你好！</h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          欢迎来到我的个人博客！我是一个热爱生活、喜欢思考的人。在这个快节奏的时代，我希望通过文字记录生活的点点滴滴，分享自己的所思所想。
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="card p-6">
          <div class="flex items-center mb-4">
            <Heart class="w-6 h-6 text-red-500 mr-3" />
            <h3 class="text-lg font-semibold">我的兴趣</h3>
          </div>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• 阅读与写作</li>
            <li>• 编程与技术</li>
            <li>• 旅行与摄影</li>
            <li>• 极简生活</li>
          </ul>
        </div>

        <div class="card p-6">
          <div class="flex items-center mb-4">
            <Target class="w-6 h-6 text-blue-500 mr-3" />
            <h3 class="text-lg font-semibold">我的目标</h3>
          </div>
          <ul class="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• 持续学习新知识</li>
            <li>• 记录生活感悟</li>
            <li>• 分享有价值的内容</li>
            <li>• 连接更多有趣的人</li>
          </ul>
        </div>
      </div>

      <div class="card p-8 mb-8">
        <h2 class="text-2xl font-semibold mb-4">📝 关于这个博客</h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          这个博客是我的数字花园，我在这里种植思想的种子，记录成长的足迹。你会在这里看到：
        </p>
        <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-4">
          <li>技术学习的心得体会</li>
          <li>生活中的思考和感悟</li>
          <li>读书笔记和观影感想</li>
          <li>旅行见闻和摄影作品</li>
        </ul>
      </div>

      <div class="card p-8">
        <h2 class="text-2xl font-semibold mb-4">📫 联系我</h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          如果你对我的文章有什么想法，或者想要交流讨论，欢迎通过以下方式联系我：
        </p>
        <div class="flex flex-wrap gap-4">
          <a href="#" class="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
            <Mail class="w-4 h-4 mr-2" />
            邮箱
          </a>
          <a href="#" class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
            <Github class="w-4 h-4 mr-2" />
            GitHub
          </a>
          <a href="#" class="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg hover:bg-green-200 dark:hover:bg-green-800 transition-colors">
            <MessageCircle class="w-4 h-4 mr-2" />
            微信
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Heart, Target, Mail, Github, MessageCircle } from 'lucide-vue-next'

useHead({
  title: '关于我 - MiniBlog',
  meta: [
    { name: 'description', content: '了解博主的个人信息、兴趣爱好和联系方式' }
  ]
})
</script>