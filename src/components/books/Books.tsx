import { useEffect, useState, ChangeEvent } from "react";
import BookData from "../../types/books";
import BookService from "../../services/bookservice";
import CharacterService from "../../services/characterservice";
import CharacterData from "../../types/characters";

import "../../assets/scss/styles.scss";


const Books: React.FC = () => {
  const [books, setBooks] = useState<Array<BookData>>([]);
  const [characters, setCharacters] = useState<Array<CharacterData>>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    retrieveBooks();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    console.log(searchQuery);
    
    setSearchQuery(searchQuery);
  }

  const retrieveBooks = () => {
    BookService.getBooks()
      .then((res: { data: BookData[]; }) => {
        setBooks(res.data as BookData[])
        // console.log(res.data);
      }).catch((err: any) => {
        console.log(err);
      })
  }

  const retrieveCharacters = () => {
    CharacterService.getCharacters()
      .then((res: { data: CharacterData[]; }) => {
        setCharacters(res.data as CharacterData[])
        // console.log(res.data);
      }).catch((err: any) => {
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
            <input type="text" id="search" placeholder="Search for books..." onChange={(e) => handleSearch(e)} />
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