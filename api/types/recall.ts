export enum RecallStatus {
	inProgress = "inProgress",
	cancelled = "cancelled",
	planned = "planned",
	shipped = "shipped",
	empty = "empty"
}

export interface Recall {
	id: string;
	title: string;
	text: string;
	authorId: string;
	authorName: string;
	product: string;
	upVotes: number;
	status: RecallStatus;
	isUpvoted: boolean;
}

export interface RecallCreate {
	title: string;
	text: string;
}