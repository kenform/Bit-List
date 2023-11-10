export enum SortPropertyEnum {
	RATING = 'rating',
	TITLE = 'title',
	PRICE = 'price',
}
export type typeSort = {
	name: string;
	sortProperty: SortPropertyEnum;
};
export interface IFilterSliceState {
	categoryId: number;
	searchValue: string;
	currentPage: number;
	orderType: string;
	sort: typeSort;
}
