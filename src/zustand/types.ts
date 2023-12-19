
export type typeCoinProps = {
	img: string;
	name: string;
	symbol: string;
	price: number;
	change24h: number;
	change7d: number;
	change30d: number;
	change1year: number;
};

export type typeCoinsData = {
	coins: {
		id: string;
		name: string;
		symbol: string;
		image: string;
		current_price: number;
		price_change_percentage_24h: number;
		price_change_percentage_7d_in_currency: number;
		price_change_percentage_30d_in_currency: number;
		price_change_percentage_1y_in_currency: number;
	}[];
	search: string;
};

export interface ICoinsState extends typeCoinsData {
	loading: boolean;
	isMounted: boolean;
	fetchData: () => Promise<void>;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

} 








// export type typeCartItem = {
// 	id: string;
// 	title: string;
// 	price: number;
// 	imageUrl: string;
// 	type: string;
// 	size: number;
// 	count: number;
// };
// export interface CartSliceState {
// 	totalPrice: number;
// 	items: typeCartItem[];
// 	totalCount: number;
// }
