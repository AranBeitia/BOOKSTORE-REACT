import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAll } from '../../features/books/booksSlice'
import { getAllGenres } from '../../features/genres/genresSlice'
import Book from './Book'
import AddBook from './AddBook'

const Books = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAll())
		dispatch(getAllGenres())
	}, [])
	return (
		<>
			<h1>Books</h1>
			<AddBook />
			<Book />
		</>
	)
}

export default Books
