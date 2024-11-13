import { BaseController } from "@/api/BaseController";
import type { AxiosResponse } from "axios";
import type { PersistentType } from "@/api/types/persistentType";
import type { Product } from "@/api/types/product";
import { type Recall, type RecallCreate, RecallStatus } from "@/api/types/recall";

export class RecallanceController extends BaseController {
	constructor() {
		super();
	}
	
	async getProducts(): Promise<AxiosResponse<PersistentType<Product[]>>> {
		return await this.api.get("/product");
	}
	
	async getProduct(productId: string): Promise<AxiosResponse<PersistentType<Product>>> {
		return await this.api.get(`/product/${productId}`);
	}
	
	async createProduct(name: string): Promise<AxiosResponse<PersistentType<void>>> {
		return await this.api.post("/product", { name });
	}
	
	async getRecalls(productId: string): Promise<AxiosResponse<PersistentType<Recall[]>>> {
		return await this.api.get(`/product/${productId}/recall`);
	}
	
	async getRecallsByText(productId: string, search: string): Promise<AxiosResponse<PersistentType<Recall[]>>> {
		return await this.api.get(`/product/${productId}/recall`, { params: { search } });
	}
	
	async createRecall(productId: string, recall: RecallCreate) {
		return await this.api.post(`/product/${productId}/recall`, recall);
	}
	
	async likeRecall(productId: string, recallId: string) {
		return await this.api.put(`/product/${productId}/recall/${recallId}/like`);
	}
	
	async unLikeRecall(productId: string, recallId: string) {
		return await this.api.put(`/product/${productId}/recall/${recallId}/unLike`);
	}
	
	async changeRecallStatus(productId: string, recallId: string, status: RecallStatus) {
		return await this.api.put(`/product/${productId}/recall/${recallId}/status`, { status });
	}
}