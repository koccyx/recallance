<template>
	<v-container fluid fill-height>
		<v-row class="h-100">
			<v-col md="12" class="d-flex align-center justify-center">
				<v-card class="elevation-12" style="min-width: 400px">
					<v-toolbar dark color="primary">
						<v-toolbar-title>Registration form</v-toolbar-title>
					</v-toolbar>
					<v-card-text>
						<v-form ref="form" @submit.prevent="store.registration(name, password)">
							<inputs-text-input
								v-model="name"
								id="login"
								min-length="5"
								required
							></inputs-text-input>
							
							<inputs-text-input
								v-model="password"
								id="password"
								type="password"
								:min-length="7"
								required
							></inputs-text-input>
							
							<v-btn type="submit" class="mt-4" color="primary" value="log in">Registration</v-btn>
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

const form = ref();

const name = ref<string>("");
const password = ref<string>("");

usePage({ useStore })
definePageMeta({
	layout: "app-layout",
	name: "registration"
});
</script>