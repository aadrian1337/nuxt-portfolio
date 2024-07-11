<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
	return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
	<div>
		<div class="my-8 flex flex-row gap-2">
			<a
				v-for="tag in data.tags"
				:key="tag"
				:href="`/blog/tags/${tag}`"
				class="text-sm font-semibold inline-flex py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 items-center">
				<Icon name="pajamas:label" size="1rem" class="text-gray-100 mr-2" />
				{{ tag }}
			</a>
		</div>
		<ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl" />
	</div>
</template>
