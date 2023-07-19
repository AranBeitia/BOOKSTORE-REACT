import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { deleteBook, getById } from '../../features/books/booksSlice'
import EditModal from './EditModal'

const Book = () => {
	const dispatch = useDispatch()
	const { books } = useSelector((state) => state.books)
	const [isModalVisible, setIsModalVisible] = useState(false)

	const showModal = (id) => {
		dispatch(getById(id))
		setIsModalVisible(true)
	}

	return (
		<>
			{books &&
				books.map((book) => (
					<div className="book" key={book.id}>
						<p>{book.name}</p>
						<p>{book.price}</p>
						<DeleteOutlined onClick={() => dispatch(deleteBook(book.id))} />
						<EditOutlined onClick={() => showModal(book.id)} />
					</div>
				))}
			<EditModal visible={isModalVisible} setVisible={setIsModalVisible} />
		</>
	)
}

export default Book
