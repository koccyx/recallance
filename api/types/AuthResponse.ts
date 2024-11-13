import type { User } from "@/api/types/User";

export interface AuthResponse {
	message: string;
	accessToken: string;
	refreshToken: string;
	user: Omit<User, "accessToken">;
}