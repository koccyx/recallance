import { defineStore } from "pinia";
import { RecallanceController } from "@/api/recallanceController";
import { type Recall, type RecallCreate, RecallStatus } from "@/api/types/recall";
import { debounce }from "@/utils/debounce"
const recallanceController = new RecallanceController();

const getDefaultInputsState = () => ({
	title: "",
	text: ""
});

export const useRecallsStrore = defineStore("recalls", () => {
	const productId = ref<string>("");
	
	const search = ref<string>("");
	
	const recalls = ref<Recall[]>([]);
	
	const recallInputs = ref<RecallCreate>(getDefaultInputsState());
	
	async function fetch() {
		try {
			
			const { data } = search.value ? await recallanceController.getRecallsByText(productId.value, search.value) :  await recallanceController.getRecalls(productId.value);
			
			recalls.value = data.payload!.recalls;
		} catch (ex) {
			console.error(ex);
		}
	}
	
	async function initialize({ initProductId }: { initProductId: string }) {
		productId.value = initProductId;
		
		await fetch();
	}
	
	function destroy() {
		productId.value = "";
		search.value = "";
		recalls.value = [];
	}
	
	async function createRercall() {
		try {
			await recallanceController.createRecall(productId.value, recallInputs.value);
			
			await fetch();
		} catch(ex) {
			console.error(ex)
		} finally {
			recallInputs.value = getDefaultInputsState();
		}
	}
	
	async function likeRecall(recallId: string) {
		try {
			await recallanceController.likeRecall(productId.value, recallId);
			
			await fetch();
		} catch(ex) {
			console.error(ex)
		}
	}
	
	async function unLikeRecall(recallId: string) {
		try {
			await recallanceController.unLikeRecall(productId.value, recallId);
			
			await fetch();
		} catch(ex) {
			console.error(ex)
		}
	}
	
	async function changeRecallStatus(recallId: string, status: RecallStatus) {
		try {
			await recallanceController.changeRecallStatus(productId.value, recallId, status);
			
			await fetch();
		} catch(ex) {
			console.error(ex)
		}
	}
	
	watch(search, async () => {
		await fetch(); 
	})
	
	
	return { search, fetch, initialize, destroy, recallInputs, recalls, createRercall, likeRecall, unLikeRecall, changeRecallStatus };
});


