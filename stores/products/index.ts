import { defineStore } from "pinia";
import { RecallanceController } from "@/api/recallanceController";
import type { Product } from "@/api/types/product";

const recallanceController = new RecallanceController();


export const useProductsStrore = defineStore("product", () => {
	
	const initialized = ref<boolean>(false);
	
	const products = ref<Product[]>([]);
	
	async function fetch() {
		try {
			const { data } = await recallanceController.getProducts();
			
			products.value = data.payload!.products;
		} catch (ex) {
			console.error(ex);
		}
	}
	
	async function initialize() {
		await fetch();
		
		initialized.value = true;
	}
	
	async function createProduct(name: string) {
		try {
			await recallanceController.createProduct(name);
			
			await fetch();
		} catch (ex) {
			console.error(ex);
		}
	}
	
	async function destroy() {
		products.value = [];
	}
	
	return { products, fetch, initialize, destroy, createProduct,initialized };
});


