import axios from 'axios'

const API_URL = 'http://localhost:3000'

const getAll = async () => {
	const res = await axios.get(API_URL + '/books')
	return res.data
}

const booksService = {
	getAll,
}

export default booksService
