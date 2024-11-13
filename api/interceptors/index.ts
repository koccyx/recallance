import { httpService } from "@/api/httpService";
import axios from "axios";
import { useRuntimeConfig } from "nuxt/app";

export const addAuthInterceptor = () => {
	httpService.interceptors.request.use((config) => {
		
		const token = localStorage.getItem("token");
		
		config.headers.Authorization = `Bearer ${token}`;
		
		return config;
	});
};

export const  addTokenInterceptor = () => {
	httpService.interceptors.response.use((config) => config,
		async (error) => {
			const originalRequest = error.config;
			
			if(error.response.status === 401 && error.config && !error.config._isRetry) {
				try {
					originalRequest._isRetry = true;
					
					const { public: { BASE_API_URL } } = useRuntimeConfig();
					
					const { data } = await axios.get(`${BASE_API_URL}/auth/refresh`, {
						withCredentials: true
					});
					
					localStorage.setItem("token", data.accessToken);
					return httpService.request(originalRequest);
				} catch (ex) {
					console.warn("Unauhotized")
				}
			}
			
			throw error;
		});
};