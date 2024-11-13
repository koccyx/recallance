import { defineStore } from "pinia";
import { RecallanceController } from "@/api/recallanceController";
import type { Product } from "@/api/types/product";

const recallanceController = new RecallanceController();

const getDefaultState = () => ({
	name: "",
	owner: "",
	recalls: [],
	id: ""
});

export const useProductStrore = defineStore("products", () => {
	const productId = ref<string>("");
	
	const product = ref<Product>(getDefaultState());
	
	async function fetch() {
		try {
			const { data } = await recallanceController.getProduct(productId.value);
			
			product.value = data.payload!.product;
		} catch (ex) {
			console.error(ex);
		}
	}
	
	async function initialize({ initProductId }: { initProductId: string }) {
		productId.value = initProductId;
		
		await fetch();
	}
	
	async function destroy() {
		product.value = getDefaultState();
	}
	
	return { product, fetch, initialize, destroy };
});


