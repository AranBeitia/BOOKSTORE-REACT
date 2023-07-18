import { useEffect } from 'react'
import Book from './Book/Book'
import { useDispatch } from 'react-redux'
import { getAll } from '../../features/books/booksSlice'

const Books = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAll())
	}, [])

	return (
		<div>
			<h1>Books</h1>
			<Book />
		</div>
	)
}

export default Books
