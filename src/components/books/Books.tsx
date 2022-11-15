import "../../assets/scss/styles.scss";

const Books = () => {
  return (
    <div>
      {/* <!-- Search Area --> */}
      <div className="search-area">
        <h1 className="empty-state">Search for your interesting books</h1>
        <br />
        <form id="form">
          <div className="input-group">
            <input type="text" id="search" placeholder="Search for books..." />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      <table>

      </table>
    </div>
  )
}

export default Books;