import type { AuthResponse } from "@/api/types/AuthResponse";
import type { User } from "@/api/types/User";

export class UserMapper {
	static map(source: AuthResponse): User {
		return {
			...source.user,
			accessToken: source.accessToken,
		};
	}
}