<template>
	<u-text tag="h4" type="title" size="large">
		<slot>{{ title }}</slot>
	</u-text>
</template>

<script setup lang="ts">

interface Props {
	title?: string;
}

defineProps<Props>();
</script>

