<template>
	<v-container fluid fill-height>
		<v-row>
			<v-col md="12" class="d-flex align-center justify-center">
				<v-card class="elevation-12" style="min-width: 400px">
					<v-toolbar dark color="primary">
						<v-toolbar-title>login form</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form ref="form" @submit.prevent="store.login(name, password)">
							<inputs-text-input
								v-model="name"
								id="login"
								required
							></inputs-text-input>
							
							<inputs-text-input
								v-model="password"
								id="password"
								required
							></inputs-text-input>
							
							<v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
						</v-form>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</v-container>

</template>

<script setup lang="ts">
import { useUserStrore } from "@/stores/user";

const useStore = useUserStrore;
const store = useStore();

const name = ref<string>("");
const password = ref<string>("");

const form = ref();

definePageMeta({
	layout: "app-layout",
	name: "login"
});
</script>