import "../../assets/scss/styles.scss";

const Characters: React.FC = () => {
  return (
    <div>
      {/* <!-- Search Area --> */}
      <div className="search-area">
        <h1 className="empty-state">Search for your interesting books and more...</h1>
        <br />
        <form id="form">
          <div className="input-group">
            <input type="text" id="search" placeholder="Search by author, name, isbn etc" />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Characters;