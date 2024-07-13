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
        class="w-full h-[450px] object-cover rounded-xl"
      />
      <h1 class="text-4xl font-extrabold">{{ data.title }}</h1>
      <div class="flex flex-row gap-2">
        <a
          v-for="tag in data.tags"
          :key="tag"
          :href="`/blog/tags/${tag}`"
          class="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-100 uppercase bg-blue-500 rounded-lg last:mr-0"
        >
          <Icon
            name="pajamas:label"
            size="1rem"
            class="mr-2 text-gray-100"
          />
          {{ tag }}
        </a>
      </div>
    </div>
    <ContentRenderer
      :value="data"
      class="mx-auto prose max-w-7xl"
    />
  </div>
</template>
