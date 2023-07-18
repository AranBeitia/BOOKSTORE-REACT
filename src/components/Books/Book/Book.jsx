import { useSelector } from 'react-redux'

const Book = () => {
	const { books } = useSelector((state) => state.books)

	const book =
		books &&
		books.map((book) => {
			return (
				<div className="book" key={book.id}>
					<p>{book.name}</p>
				</div>
			)
		})
	return <div>{book}</div>
}

export default Book
