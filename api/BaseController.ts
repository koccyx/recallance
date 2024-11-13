import { type AxiosInstance } from "axios";
import { httpService } from "@/api/httpService";
import { addAuthInterceptor, addTokenInterceptor } from "@/api/interceptors";

export interface BaseController {
	api: AxiosInstance;
}

export class BaseController implements BaseController {
	public api: AxiosInstance;
	
	constructor() {
		this.api = httpService;
		
		addAuthInterceptor();
		addTokenInterceptor();
	}
	
}