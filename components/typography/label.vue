<template>
	<v-label :for="id" class="opacity-100">
		<typography-text type="label" color="on-surface" class="mr-1">{{ label }}</typography-text>
		<typography-text type="label" v-if="required" size="small" color="error">*</typography-text>
	</v-label>
</template>

<script setup lang="ts">

interface Props {
	id?: string;
	label?: string;
	required?: boolean;
}


defineProps<Props>();
</script>

<style scoped lang="scss">
.v-label {
	flex-direction: row !important;
}

</style>
