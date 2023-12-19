import { create } from 'zustand';
import axios from 'axios';
// import "./asyncActions"
import { ICoinsState } from './types';

export const useCoinsStore = create<ICoinsState>()((set) => ({
	coins: [
		{
			id: '',
			name: '',
			symbol: '',
			image: '',
			current_price: 0,
			price_change_percentage_24h: 0,
			price_change_percentage_7d_in_currency: 0,
			price_change_percentage_30d_in_currency: 0,
			price_change_percentage_1y_in_currency:0,
		},
	],
	search: '',
	loading: false,
	isMounted: false,
	fetchData: async () => {
		set({ loading: true });
		try {
			const assets = [
				'mina-protocol',
				'terra-luna',
				'bitcoin',
				'ethereum',
				'binancecoin',
				'dogecoin',
				'algorand',
				'matic-network',
				'cosmos',
				'okb',
			];
			const promises = assets.map((asset) =>
				axios.get(
					`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${asset}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d%2C30d%2C90d%2C1y&x_cg_demo_api_key=CG-X7spoMHCQMFNK4Wd63SWD5bR&precision=5`,
				),
			);
			const responses = await Promise.all(promises);
			const coinsData = responses.map((response) => {
				return response.data[0];
			});

			set({ coins: coinsData });
			console.log(coinsData);
			// return coins;
		} catch (error) {
			console.error(error);
		} finally {
			set({ loading: false });
			set({ isMounted: true });
		}
	},
	handleChange: (e) => {
		set({ search: e.target.value });
	},
}));
