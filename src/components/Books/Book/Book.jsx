import { useSelector } from 'react-redux'

const Book = () => {
	const { books } = useSelector((state) => state.books)

	return (
		<>
			{books &&
				books.map((book) => (
					<div className="book" key={book.id}>
						<p>{book.name}</p>
					</div>
				))}
		</>
	)
}

export default Book
