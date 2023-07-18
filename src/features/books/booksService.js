import axios from 'axios'

const API_URL = 'http://localhost:3000'

const getAll = async () => {
	const res = await axios.get(API_URL + '/books')
	return res.data
}

const create = async (book) => {
	const res = await axios.post(API_URL + '/books', book)
	return res.data
}

const booksService = {
	getAll,
	create,
}

export default booksService
