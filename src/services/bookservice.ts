import http from "../utils/http-common";

const getBooks =() => {
    return http.get("/books");
}

const BookService = {
    getBooks
}

export default BookService;