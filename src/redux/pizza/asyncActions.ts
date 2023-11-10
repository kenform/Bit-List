import { createAsyncThunk } from "@reduxjs/toolkit";
import { typePizza, typeSearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<typePizza[], typeSearchPizzaParams>(
	'pizza/fetchPizzasStatus',
	async (params) => {
		const { currentPage, category, sortType, orderType, search } = params;
		const { data } = await axios.get<typePizza[]>(
			`https://6501b4e2736d26322f5c28ca.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType}&order=${orderType}${search}`,
		);
		return data;
	},
);
