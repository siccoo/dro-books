import "../../assets/scss/styles.scss";

const Books: React.FC = () => {
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
          <tr>
            <td>Bantam Books</td>
            <td>A Game of Thrones</td>
            <td>978-0553103540</td>
            <td>George R. R. Martin</td>
            <td>1996-08-01T00:00:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Books;