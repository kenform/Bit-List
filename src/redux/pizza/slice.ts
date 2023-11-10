import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizzaSliceState, Status, typePizza } from './types';
import { fetchPizzas } from './asyncActions';

//* All keys -> string and all value -> string
// currentPage, category, sortType, orderType, search

const initialState: IPizzaSliceState = {
	items: [],
	status: Status.LOADING, // loading, success, error
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<typePizza[]>) {
			state.items = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzas.pending, (state) => {
				state.status = Status.LOADING;
				state.items = [];
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.items = action.payload;
				state.status = Status.SUCCESS;
			})
			.addCase(fetchPizzas.rejected, (state) => {
				state.status = Status.ERROR;
				state.items = [];
			});
	},
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
