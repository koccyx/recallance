<template>
	<layouts-product-layout>
		<template #card>
			<v-card>
				<v-card-item>
					<v-container>
						<v-row>
							<v-col>
								<typography-text tag="h2">
									Create new product
								</typography-text>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<inputs-text-input
									v-model="productName"
									:min-length="5"
								>
								</inputs-text-input>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12">
								<v-btn variant="flat" :color="colors.primary" @click="store.createProduct(productName)">
									create product
								</v-btn>
							</v-col>
						</v-row>
					</v-container>
				</v-card-item>
			</v-card>
		</template>
		
		<template #default>
			<v-container class="pa-0">
				<v-row>
					<v-col sm="12" md="6" v-for="product in store.products">
						<v-card @click="handleProductSelect(product.id)" class="d-flex pa-2" height="100px">
							<v-card-item >
								<v-card-title>
									<typography-text tag="h3">
										{{ product.name }}
									</typography-text>
								</v-card-title>
							</v-card-item>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</template>
	</layouts-product-layout>
</template>

<script setup lang="ts">
import { useProductsStrore } from "@/stores/products";

const { colors } = useColors();

const useStore = useProductsStrore;
const store = useStore();

const productName = ref<string>("");

const handleProductSelect = (id: string) => {
	 navigateTo({ name: "product-id", params: { id } });
};

usePage({ useStore });

definePageMeta({
	name: "products",
	middleware: "auth",
	layout: "app-layout",
});
</script>