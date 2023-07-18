import { useEffect } from 'react'
import Book from './Book/Book'
import { useDispatch } from 'react-redux'
import { getAll } from '../../features/books/booksSlice'
import { getAllGenres } from '../../features/genres/genresSlice'
import AddBook from './Book/AddBook'

const Books = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAll())
		dispatch(getAllGenres())
	}, [])

	return (
		<div>
			<h1>Books</h1>
			<AddBook />
			<Book />
		</div>
	)
}

export default Books
