<template>
	<v-container style="height: 80vh">
		<v-row align="end">
			<v-col cols="12" class="d-flex justify-center">
				<typography-text typ="headline" tag="h1">New way to leave recalls for products</typography-text>
			</v-col>
		</v-row>
		
		<v-row>
			<v-col cols="12" class="d-flex justify-center">
				<typography-text tag="h2">
					Just try by yourself
				</typography-text>
			</v-col>
			<v-col class="d-flex justify-center">
				<v-btn color="primary" to="/products">Explore</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script setup lang="ts">
// import { httpService } from "~/api/httpService";


// await httpService.get("/user/66dc2a918bb0aa924a3f6545", {});

definePageMeta({
	layout: "app-layout"
})
</script>