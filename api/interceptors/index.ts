import { httpService } from "@/api/httpService";

export const addAuthInterceptor = () => {
	httpService.interceptors.request.use((config) => {
		
		const token = localStorage.getItem("token");
		
		config.headers.Authorization = `Bearer ${token}`;
	
		return config;
	});
}