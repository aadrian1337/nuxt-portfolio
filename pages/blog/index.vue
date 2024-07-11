<script setup>
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").sort({ date: -1 }).find()
);
</script>

<template>
  <div class="gap-8 flex flex-col">
    <h1 class="text-4xl mt-8">Blog Posts</h1>

    <p class="max-w-2xl">I like to write about anything that I am currently working or something new that interests me. If you would like me to write about something or be a guest blogger on your blog please reach out to me on Twitter. If you would like to subscribe to an RSS feed you can find it here.</p>

    <section>
        <Post :posts="posts" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"/>
    </section>
  </div>
</template>
