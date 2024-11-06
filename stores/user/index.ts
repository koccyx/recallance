import { defineStore } from "pinia";
import { AuthController } from "@/api/authController";
import { async } from "rxjs";

const authController = new AuthController();

export const useUserStrore = defineStore("user", () => {
	const token = ref<string>("");
	const isAuth = ref<boolean>(false);
	const name = ref<string>("")
	
	const user = reactive({
		login: "",
		password: "",
		email: ""
	});
	
	async function checkAuth() {
	
	}
	
	async function login() {
		try {
			const { data } = await authController.login(user.login, user.password);
			
			localStorage.setItem("token", data.token);
			
			token.value = data.token;
			isAuth.value = true;
			name.value = data.name;
		} catch (ex) {
			console.log(ex);
		}
	}
	
	async function registration() {
		try {
			await authController.registeration(user.login, user.password, user.email);
		} catch (ex) {
			console.log(ex);
		}
	}
	
	function logout() {
		localStorage.removeItem("token");
		
		token.value = "";
		isAuth.value = false;
	}
	
	function destroy() {
		user.login = "";
		user.password = "";
	}
	
	return { token, isAuth, name, user, login, registration, logout, destroy}
});


