<script setup lang="ts">
interface Props {
	tag?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	type?: "display" | "headline" | "title" | "label" | "body";
	size?: "large" | "medium" | "small";
	color?: string;
	class?: string;
}

const props = withDefaults(defineProps<Props>(), {
	tag: "span",
	type: "body",
	size: "medium",
	color: "rgb(var(--v-theme-on-background))",
	class: ""
});
</script>

<template>
	<component :is="props.tag" :class="[`text-${props.type}`, `text-${props.size}`, props.class]" :style="`color: ${color}`">
		<slot></slot>
	</component>
</template>
