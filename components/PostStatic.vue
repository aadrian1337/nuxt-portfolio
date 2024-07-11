<script setup>
  // Define props and other reactive data
  const props = defineProps(["posts"]);
</script>

<template>
  <div>
    <div
      v-for="post in props.posts"
      :key="post.slug"
      class="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:opacity-85 relative">
      <img
        :src="`/images/${post.cover}`"
        alt="Blog Post Cover Image"
        class="w-full h-48 object-cover" />
      <div class="p-6 flex gap-4 flex-col">
        <NuxtLink
          :to="post._path"
          class="after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0">
          <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        </NuxtLink>
        <p class="text-gray-700 mb-4">{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>
