export type typePizza = {
	id: string;
	title: string;
	price: number;
	imageUrl: string;
	sizes: number[];
	types: number[];
};

export type typeSearchPizzaParams = {
	category: string;
	sortType: string;
	orderType: string;
	search: string;
	currentPage: string;
};
export enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export interface IPizzaSliceState {
	items: typePizza[];
	status: Status;
}
