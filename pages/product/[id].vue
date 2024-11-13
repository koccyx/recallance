<template>
	<layouts-product-layout>
		<template #card>
			
			<v-container class="pa-0">
				<v-row>
					<v-col sm="12" class="d-flex flex-wrap">
						<typography-text tag="h2">
							{{ store.product.name }}
						</typography-text>
						
						<v-spacer></v-spacer>
						
						<v-btn variant="flat" :color="colors.primary" :disabled="!can" @click="console.log(can)">
							Delete product
						</v-btn>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12">
						<v-card class="pa-2">
							<v-card-title>
								<typography-text tag="h2">
									Create new recall
								</typography-text>
							</v-card-title>
							<v-form ref="from" @submit.prevent="recallsStrore.createRercall">
								<v-container>
									<v-row>
										<v-col>
											<inputs-text-input
												id="title"
												v-model="recallsStrore.recallInputs.title"
											>
											</inputs-text-input>
										</v-col>
									</v-row>
									<v-row>
										<v-col>
											<inputs-textarea
												id="text"
												v-model="recallsStrore.recallInputs.text"
											>
											</inputs-textarea>
										</v-col>
									</v-row>
									<v-row>
										<v-col sm="12" class="d-flex">
											<v-spacer></v-spacer>
											<v-btn type="submit" variant="flat" :color="colors.primary">
												Add recall
											</v-btn>
										</v-col>
									</v-row>
								</v-container>
							</v-form>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</template>
		
		<template #default>
			<v-container class="pa-0">
				<v-row>
					<v-col sm="12" md="12">
						<inputs-text-input
							v-model="recallsStrore.search"
							id="searchBy">
						</inputs-text-input>
					</v-col>
				</v-row>
				<v-row>
					<v-col sm="12" md="12" v-for="recall in recallsStrore.recalls">
						<cards-recall-card :recall="recall"
										   :can="can"
										   @handle-status="(status: RecallStatus) => recallsStrore.changeRecallStatus(recall.id, status)"
										   @handle-like="handleLike(recall.id, recall.isUpvoted)">
						</cards-recall-card>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</layouts-product-layout>
</template>

<script setup lang="ts">

import { useProductStrore } from "@/stores/product";
import { useRecallsStrore } from "@/stores/recalls";
import type { RecallStatus } from "@/api/types/recall";
import { useUserStrore } from "@/stores/user";

const { colors } = useColors();

const from = ref();

const useStore = useProductStrore;
const store = useStore();

const useRecallsStore = useRecallsStrore;

const recallsStrore = useRecallsStrore();
const route = useRoute("/recall/[id]");

const userStore = useUserStrore();

const can = await userStore.can(route.params.id as string);

usePage({ useStore, initializationArguments: { initProductId: route.params.id } });
usePage({ useStore: useRecallsStore, initializationArguments: { initProductId: route.params.id } });

const handleLike = (recallId: string, isUpvoted: boolean) => {
	if(!isUpvoted) {
		recallsStrore.likeRecall(recallId);
	} else {
		recallsStrore.unLikeRecall(recallId);
	}
};

definePageMeta({
	layout: "app-layout"
});
</script>

<style lang="scss" scoped>

</style>