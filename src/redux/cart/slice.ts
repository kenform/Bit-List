import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartSliceState, typeCartItem } from './types';
import { getCartFromLS } from '../../utils/getCardFromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import './selectors';

const initialState: CartSliceState = getCartFromLS();

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// Находим объект в массиве, если объекта нет, то добавляем и задаем ему счетчик count, если объект есть, то увеличиваем личный и общий счетчик на 1
		// todo Сделать добавление пиццы по выбраному размеру и типу( тонкое, традиционное)
		addItem(state, action: PayloadAction<typeCartItem>) {
			const findItem = state.items.find((obj) => obj.id === action.payload.id);

			findItem
				? findItem.count++ && state.totalCount++
				: state.items.push({ ...action.payload, count: 1 }) && state.totalCount++;
			state.totalPrice = calcTotalPrice(state.items);
		},

		reduceItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find((obj) => obj.id === action.payload);
			if (findItem) {
				findItem.count > 1 && findItem.count-- && state.totalCount--;
				state.totalPrice -= findItem.price;
			}
		},

		removeItem(state, action: PayloadAction<string>) {
			const findItem = state.items.find((obj) => obj.id === action.payload);
			if (findItem) {
				state.totalPrice -= findItem.price * findItem.count;
				state.totalCount -= findItem.count;
				state.items = state.items.filter((obj) => obj.id !== action.payload);
			}
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
			state.totalCount = 0;
		},
	},
});

export const { addItem, reduceItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
