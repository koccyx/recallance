export interface PersistentType<T> {
	message: string;
	payload?: {
		[key: string]: T;
	};
}