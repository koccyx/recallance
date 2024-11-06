<template>
	<v-app>
		<v-app-bar>
			<v-app-bar-title>
				Recallance
			</v-app-bar-title>
			<v-spacer></v-spacer>
			<typography-text tag="p" class="pr-3">
				{{ store.name }}
			</typography-text>
		</v-app-bar>
		<v-main>
			<v-responsive class="fill-height">
				<slot></slot>
			</v-responsive>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">

import { useUserStrore } from "@/stores/user/index.js";

const store = useUserStrore();

</script>

<style lang="scss" scoped>

</style>