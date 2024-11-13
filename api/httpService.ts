import { useRuntimeConfig } from "nuxt/app";
import axios from "axios";

const { public: { BASE_API_URL } } = useRuntimeConfig()

export const httpService = axios.create({
	baseURL: BASE_API_URL as string,
	withCredentials: true,
	headers: {
	}
});



