<script setup>
  const { path } = useRoute();

  const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne();
  });
</script>

<template>
  <div class="flex flex-col gap-10">
    <div class="flex flex-col gap-4">
      <img
        v-if="data.cover"
        :src="`/images/${data.cover}`"
        alt="Cover Image"
        class="w-full h-[450px] object-cover rounded-xl" />
      <h1 class="text-4xl font-extrabold">{{ data.title }}</h1>
      <div class="flex flex-row gap-2">
        <a
          v-for="tag in data.tags"
          :key="tag"
          :href="`/blog/tags/${tag}`"
          class="text-sm font-semibold inline-flex py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 items-center">
          <Icon
            name="pajamas:label"
            size="1rem"
            class="text-gray-100 mr-2" />
          {{ tag }}
        </a>
      </div>
    </div>

    <!-- Display the cover image if it exists -->

    <ContentRenderer
      :value="data"
      class="prose mx-auto max-w-7xl" />
  </div>
</template>
