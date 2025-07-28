// 模拟博客数据
export const useBlog = () => {
  const posts = ref([
    {
      id: 1,
      slug: 'hello-world',
      title: '你好，世界！',
      excerpt: '这是我的第一篇博客文章，记录着我开始写作的心路历程。在这个数字化的时代，每个人都应该有一个属于自己的角落。',
      content: `# 你好，世界！

这是我的第一篇博客文章。写下这些文字的时候，心情既紧张又兴奋。

## 为什么要写博客？

在这个快节奏的时代，我们每天都在接收着大量的信息，但很少有时间停下来思考。写博客对我来说，不仅是记录生活的方式，更是整理思路、表达观点的平台。

## 我的写作计划

我计划定期分享以下内容：

- 技术学习心得
- 生活感悟
- 读书笔记
- 旅行见闻

## 结语

感谢你阅读我的第一篇文章。希望在这个小小的角落里，我们能够有更多的交流和分享。

愿我们都能在文字中找到属于自己的诗意。`,
      date: '2025-01-12',
      tags: ['生活', '随笔']
    },
    {
      id: 2,
      slug: 'minimalist-living',
      title: '极简生活的艺术',
      excerpt: '在物质丰富的时代，学会做减法反而成了一种智慧。极简主义不是贫穷，而是对生活的精心选择。',
      content: `# 极简生活的艺术

在这个物质极大丰富的时代，我们拥有了前所未有的选择自由，但同时也被选择所困扰。极简主义生活方式，教会我们如何在繁华中保持内心的宁静。

## 什么是极简主义？

极简主义不是要你放弃一切，而是要你保留真正重要的东西。它是一种生活哲学，帮助我们专注于真正有价值的事物。

## 极简生活的原则

### 1. 质量胜过数量
选择高质量的物品，它们会陪伴你更久，也会带来更好的体验。

### 2. 功能性至上
每样东西都应该有其存在的意义和功能。

### 3. 空间的力量
留白不是空虚，而是给心灵留出呼吸的空间。

## 我的极简实践

从断舍离开始，我逐渐学会了：
- 定期整理物品，留下真正需要的
- 购买前思考三次：我真的需要吗？
- 数字极简：减少不必要的应用和订阅

## 结语

极简生活让我们在减法中寻找加法，在简单中发现丰富。这不是一种牺牲，而是一种选择——选择更有意义的生活方式。`,
      date: '2025-01-10',
      tags: ['生活方式', '极简主义', '思考']
    },
    {
      id: 3,
      slug: 'learning-javascript',
      title: 'JavaScript 学习之旅',
      excerpt: '从零开始学习 JavaScript 的经历分享，记录踩过的坑和收获的喜悦。编程不仅是技能，更是思维方式的培养。',
      content: `# JavaScript 学习之旅

作为一名编程新手，JavaScript 是我接触的第一门编程语言。这篇文章记录了我的学习经历和一些心得体会。

## 初识 JavaScript

还记得第一次在浏览器控制台输入 \`console.log("Hello World")\` 时的激动心情。那一刻，我意识到代码是有生命力的。

## 学习路径

### 基础阶段
- 变量和数据类型
- 条件语句和循环
- 函数的概念和使用
- DOM 操作

### 进阶阶段
- 异步编程 (Promise, async/await)
- ES6+ 新特性
- 模块化开发
- 框架学习 (Vue, React)

## 踩过的坑

1. **this 指向问题**：花了很长时间才理解 this 的指向规则
2. **异步编程**：从回调地狱到 Promise，再到 async/await
3. **作用域和闭包**：这些概念一开始很抽象

## 学习心得

### 1. 实践出真知
再多的理论都不如动手写代码。每个概念都要通过代码来验证。

### 2. 社区的力量
MDN、Stack Overflow、GitHub 是我最常访问的网站。

### 3. 持续学习
前端技术更新很快，保持学习的心态很重要。

## 推荐资源

- **书籍**：《JavaScript 高级程序设计》
- **在线课程**：FreeCodeCamp
- **实践平台**：LeetCode

## 写在最后

学习编程是一个漫长的过程，但每一次的突破都会带来巨大的成就感。愿所有的初学者都能坚持下去，在代码的世界里找到属于自己的乐趣。`,
      date: '2025-01-08',
      tags: ['编程', 'JavaScript', '学习笔记']
    }
  ])

  const getPostBySlug = (slug) => {
    return posts.value.find(post => post.slug === slug)
  }

  const searchPosts = (query) => {
    if (!query) return posts.value
    
    return posts.value.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )
  }

  const getPostsByTag = (tag) => {
    return posts.value.filter(post => post.tags.includes(tag))
  }

  return {
    posts: readonly(posts),
    getPostBySlug,
    searchPosts,
    getPostsByTag
  }
}