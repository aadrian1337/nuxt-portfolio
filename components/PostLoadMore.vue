<script setup>

// Define props and other reactive data
const props = defineProps(["posts"]);
const itemsPerPage = 3; // Number of posts to show per load
const displayedPosts = ref([]); // Posts that are currently displayed
const currentIndex = ref(0); // Current index to start loading posts

// Load initial posts
const loadMorePosts = () => {
  const nextIndex = currentIndex.value + itemsPerPage;
  displayedPosts.value.push(...props.posts.slice(currentIndex.value, nextIndex));
  currentIndex.value = nextIndex;
};

// Load initial set of posts when component mounts
onMounted(() => {
  loadMorePosts();
});

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
      v-for="post in displayedPosts"
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
    <div v-if="isBlogPage && currentIndex < props.posts.length" class="flex justify-center mr-auto col-start-1 col-span-1">
      <button
        @click="loadMorePosts"
        class="px-4 py-2 bg-blue-500 text-white rounded-md">
        Load More
      </button>
    </div>
  </div>
</template>

