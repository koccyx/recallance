import { BaseController } from "@/api/BaseController";

export class AuthController extends BaseController {
	constructor() {
		super();
	}
	
	async registeration(login: string, password: string, email: string) {
		return await this.api.post("/auth/registration", {login, password, email})
	}
	
	async login(login: string, password: string) {
		return await this.api.post("/auth/login", {login, password})
	}
}