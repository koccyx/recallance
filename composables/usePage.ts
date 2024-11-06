import type { StoreDefinition } from "pinia";

export interface PageOptions {
	initializationArguments?: any;
	useStore: StoreDefinition<any, any, any, any>;
}

export function usePage(options: PageOptions) {
	const store = options.useStore();
	
	const initialized = computed(() => store.initialized);
	
	onBeforeUnmount(() => {
		store.destroy();
	});
	
	onBeforeMount(async () => {
		await nextTick();
		await store.initialize(options.initializationArguments);
	});
	
	const loading = computed(() => !initialized.value);
	
	return { loading, initialized };
}
