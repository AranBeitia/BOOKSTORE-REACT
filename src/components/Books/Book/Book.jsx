import { useSelector, useDispatch } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons'
import { deleteBook } from '../../../features/books/booksSlice'

const Book = () => {
	const dispatch = useDispatch()
	const { books } = useSelector((state) => state.books)

	return (
		<>
			{books &&
				books.map((book) => (
					<div className="book" key={book.id}>
						<p>{book.name}</p>
						<DeleteOutlined onClick={() => dispatch(deleteBook(book.id))} />
					</div>
				))}
		</>
	)
}

export default Book
