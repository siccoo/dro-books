import http from "../utils/http-common";
import axios from "axios";

jest.mock('axios');

(axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({})

const getBooks = () => {
    return http.get("/books");
}

const BookService = {
    getBooks
}

export default BookService;