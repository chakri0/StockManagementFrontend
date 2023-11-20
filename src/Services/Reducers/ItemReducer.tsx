import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
	type AddItemRequestBodyParams,
	addItem,
	listItems,
	type ListItemResponse,
} from '../APIs/ItemAPI';

export const fetchItems = createAsyncThunk('item/fetchItems', async () => {
	try {
		const response = await listItems();
		return response;
	} catch (error) {
		console.error(error);
		throw error;
	}
});

export const createItem = createAsyncThunk(
	'item/createItem',
	async (data: AddItemRequestBodyParams) => {
		try {
			const response = await addItem(data);
			return response;
		} catch (error) {
			console.error(error);
			throw error;
		}
	},
);

export interface ItemState {
	items: ListItemResponse[];
	loading: boolean;
	error: string | undefined | null;
}

const initialState: ItemState = {
	items: [],
	loading: false,
	error: null,
};

const itemSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			// List items
			.addCase(fetchItems.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchItems.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchItems.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})

			// Create Item
			.addCase(createItem.pending, (state) => {
				state.loading = true;
			})
			.addCase(createItem.fulfilled, (state, action) => {
				state.loading = false;
			})
			.addCase(createItem.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			});
	},
});

export default itemSlice.reducer;
