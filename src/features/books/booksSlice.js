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

export const deleteBook = createAsyncThunk('books/deleteBook', async (id) => {
	try {
		return await booksService.deleteBook(id)
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
			.addCase(deleteBook.fulfilled, (state, action) => {
				state.books = state.books.filter(
					(book) => book.id !== +action.payload.id
				)
			})
	},
})

export default booksSlice.reducer
