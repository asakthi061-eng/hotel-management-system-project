
function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <label htmlFor="hotel-search">Search Hotel</label>

      <input
        id="hotel-search"
        type="text"
        placeholder="Search hotel name or coordinates"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
