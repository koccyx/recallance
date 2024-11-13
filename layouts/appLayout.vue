<template>
	<v-app>
		<v-app-bar>
			<v-app-bar-title>
				<a href="/" style="text-decoration: none; color: inherit">
					Recallance
				</a>
			</v-app-bar-title>
			<v-spacer></v-spacer>
			<v-menu bottom left offset-y
					color="primary"
					v-model="userMenuOpened"
					content-class="u-menu"
					class="u-user-menu"
					v-if="store.isAuth">
				<template v-slot:activator="{ props }">
					<v-btn
						   :color="color('on-background')"
						   class="text-none u-user-menu-btn px-2 mx-n1"
						   v-bind="props">
						<div class="d-flex align-center">
							<v-icon class="mr-2" size="24" :alt="store.user.name" icon="u:ico_account-circle"></v-icon>
							<typography-text tag="p" class="pr-3">
								{{ store.user.name }}
							</typography-text>
							<v-icon v-if="!userMenuOpened" class="ml-2" size="24" icon="u:ico_chevron-down"></v-icon>
							<v-icon v-else class="ml-2" size="24" icon="u:ico_chevron-up"></v-icon>
						</div>
					</v-btn>
				</template>
				
				<v-list>
					<v-list-item @click="store.logout">
						<div class="d-flex">
							<v-icon size="24" icon="custom:ico_logout"></v-icon>
							<v-list-item-title class="ml-2">logout</v-list-item-title>
						</div>
					</v-list-item>
				</v-list>
			</v-menu>
			<div v-else class="d-flex ga-2 pr-5">
				<a href="/login" style="text-decoration: none; color: inherit">
					login
				</a>
				<div class="divider"></div>
				<a href="/registration" style="text-decoration: none; color: inherit">
					registration
				</a>
			</div>
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
import { useColors} from "@/composables/useColors";

const { color } = useColors();
const useStore = useUserStrore;
const store = useStore();

const userMenuOpened = ref<boolean>(false);

usePage({ useStore });

</script>

<style lang="scss" scoped>
.divider {
  width: 1px;
  background-color: gray;
}
</style>