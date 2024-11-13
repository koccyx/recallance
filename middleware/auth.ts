
export default defineNuxtRouteMiddleware((to, from) => {
	const token = localStorage.getItem("token");
	
	if (!token) {
		return navigateTo('/login') // редирект на страницу логина
	}
	
	if(token && (from.meta.name === "login" || from.meta.name === "registration")) {
		return navigateTo("/");
	}
})