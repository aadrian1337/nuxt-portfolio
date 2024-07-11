<script setup>
  const { data: posts } = await useAsyncData("latest-posts", () =>
    queryContent("/blog").sort({ date: -1 }).limit(3).find()
  );
</script>

<template>
  <div class="flex flex-col gap-24 py-20">
    <section>
      <h1 class="text-5xl font-bold">Hello, I'm Johnny Banana</h1>
      <p class="text-base text-gray-800 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
        auctor dui.
      </p>
    </section>
    <section class="mt-8 flex flex-col md:flex-row gap-10 items-stretch">
      <div class="md:w-2/3">
        <h2 class="text-4xl font-semibold mb-8">My story</h2>
        <p class="text-xl font-semibold py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          auctor dui. Donec sed augue ac enim elementum tempor ut nec nisl.
          Praesent nec mi mauris. Proin tincidunt mauris quis vulputate iaculis.
          Maecenas suscipit dolor non felis ornare, et elementum metus aliquam.
          Suspendisse id lacinia quam.
        </p>
        <p class="text-lg py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          auctor dui. Donec sed augue ac enim elementum tempor ut nec nisl.
          Praesent nec mi mauris. Proin tincidunt mauris quis vulputate iaculis.
          Maecenas suscipit dolor non felis ornare, et elementum metus aliquam.
          Suspendisse id lacinia quam.
        </p>
        <p class="text-lg py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          auctor dui. Donec sed augue ac enim elementum tempor ut nec nisl.
          Praesent nec mi mauris. Proin tincidunt mauris quis vulputate iaculis.
          Maecenas suscipit dolor non felis ornare, et elementum metus aliquam.
          Suspendisse id lacinia quam.
        </p>
      </div>
      <img
        src="~/assets/images/image.webp"
        class="w-full md:w-1/3 mx-auto object-cover"
        alt="" />
    </section>
    <section>
      <h2 class="text-4xl font-semibold mb-8">Latest Blog Posts</h2>
      <section>
        <PostStatic :posts="posts" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"/>
      </section>
    </section>
  </div>
</template>
