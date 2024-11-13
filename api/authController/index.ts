import { BaseController } from "@/api/BaseController";
import type { AxiosResponse } from "axios";
import type { AuthResponse } from "@/api/types/AuthResponse";

export class AuthController extends BaseController {
	constructor() {
		super();
	}
	
	async registeration(name: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return await this.api.post("/auth/registration", { name, password });
	}
	
	async login(name: string, password: string): Promise<AxiosResponse<AuthResponse>> {
		return await this.api.post("/auth/login", { name , password });
	}
	
	async logout(): Promise<void> {
		return await this.api.post("/auth/logout");
	}
}