import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import booksService from './booksService'

const initialState = {
	books: [],
}

export const getAll = createAsyncThunk('books/getAll', async () => {
	try {
		return await booksService.getAll()
	} catch (error) {
		console.error(error)
	}
})

export const create = createAsyncThunk('books/create', async (book) => {
	try {
		return await booksService.create(book)
	} catch (error) {
		console.error(error)
	}
})

export const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAll.fulfilled, (state, action) => {
				state.books = action.payload
			})
			.addCase(create.fulfilled, (state, action) => {
				state.books = [...state.books, action.payload]
			})
	},
})

export default booksSlice.reducer
