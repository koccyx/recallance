import { defineStore } from "pinia";
import { AuthController } from "@/api/authController";
import type { User } from "@/api/types/User";
import { UserMapper } from "@/stores/user/mapper";
import axios from "axios";
import { useRuntimeConfig } from "nuxt/app";
import { useProductsStrore } from "@/stores/products";

const authController = new AuthController();

export const useUserStrore = defineStore("user", () => {
	
	const user = ref<User>({
		name: "",
		id: "",
		accessToken: ""
	});
	
	const isAuth = computed<boolean>(() => !!user.value.accessToken);
	
	async function checkAuth() {
		try {
			const { public: { BASE_API_URL } } = useRuntimeConfig();
			
			const { data } = await axios.get(`${BASE_API_URL}/auth/refresh`, {
				withCredentials: true
			});
			
			localStorage.setItem("token", data.accessToken);
			
			user.value = UserMapper.map(data);
			
		} catch (ex) {
			console.error(ex);
		}
	}
	
	async function login(login: string, password: string) {
		try {
			const { data } = await authController.login(login, password);
			
			localStorage.setItem("token", data.accessToken);
			
			user.value = UserMapper.map(data);
			
			navigateTo("/products");
		} catch (ex) {
			console.log(ex);
		}
	}
	
	async function registration(login: string, password: string) {
		try {
			const { data } = await authController.registeration(login, password);
			
			localStorage.setItem("token", data.accessToken);
			
			user.value = UserMapper.map(data);
			
			navigateTo("/products");
		} catch (ex) {
			console.log(ex);
		}
	}
	
	function logout() {
		localStorage.removeItem("token");
		
		user.value = {} as User;
		
		navigateTo("/");
	}
	
	function destroy() {
	}
	
	async function initialize() {
		if(localStorage.getItem("token")) {
			await checkAuth();
		}
	}
	
	async function can(productId: string) {
		const can = ref<boolean>(true);
		
		const productStore = useProductsStrore();
		
		if(!productStore.initialized) {
			await productStore.fetch();
		}
		
		const userProducts = productStore.products;
		
		console.log(userProducts);
		const isProductIncluded = userProducts.find((product) => product.id === productId);
		
		can.value = !!isProductIncluded;
		console.log(can.value);
		return can;
	}
	
	return { isAuth, user, can, login, registration, logout, destroy, initialize };
});


