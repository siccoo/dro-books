import { useState } from "react";
import BookData from "../../types/books";
import BookService from "../../services/bookservice";

import "../../assets/scss/styles.scss";


const Books: React.FC = () => {
  const [books, setBooks] = useState<Array<BookData>>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");


  const retrieveBooks = () => {
    BookService.getBooks()
      .then(res => {
        setBooks(res.data as BookData[])
        console.log(res.data);

      }).catch(err => {
        console.log(err);

      })
  }
  return (
    <div>
      {/* <!-- Search Area --> */}
      <div className="search-area">
        <h1 className="empty-state">Search for your interesting books and more...</h1>
        <br />
        <form id="form">
          <div className="input-group">
            <input type="text" id="search" placeholder="Search for books..." />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Publisher</th>
            <th>Name</th>
            <th>ISBN</th>
            <th>Authors</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map(data => (
            <tr>
              <td>{data.publisher}</td>
              <td>{data.name}</td>
              <td>{data.isbn}</td>
              <td>{data.authors}</td>
              <td>{data.released}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Books;