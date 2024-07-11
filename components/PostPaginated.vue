<script setup>
import { ref, computed, onMounted } from 'vue';

// Define props and other reactive data
const props = defineProps(["posts"]);
const itemsPerPage = 3; // Number of posts to show per page
const currentPage = ref(1);

// Define computed properties for pagination
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return props.posts.slice(start, end);
});

const totalPages = computed(() => Math.ceil(props.posts.length / itemsPerPage));

// Methods for navigating pages
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Reactive state to store the result of the URL check
const isBlogPage = ref(false);

// Perform the URL check on mounted
onMounted(() => {
  isBlogPage.value = window.location.pathname.includes('/blog');
});
</script>

<template>
  <div>
    <div
      v-for="post in paginatedPosts"
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
    <div v-if="isBlogPage" class="flex justify-center mr-auto col-start-1 col-span-1">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-blue-500 text-white rounded-l-md disabled:opacity-50">
        Newer
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-blue-500 text-white rounded-r-md disabled:opacity-50">
        Older
      </button>
    </div>
  </div>
</template>
