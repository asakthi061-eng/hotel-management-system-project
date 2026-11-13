
function PriceFilter({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  clearFilters
}) {
  return (
    <div className="price-filter">
      <h3>Filter by Price</h3>

      <div className="filter-field">
        <label htmlFor="min-price">Minimum Price (₹)</label>

        <input
          id="min-price"
          type="number"
          min="0"
          placeholder="Enter minimum price"
          value={minPrice}
          onChange={(event) => setMinPrice(event.target.value)}
        />
      </div>

      <div className="filter-field">
        <label htmlFor="max-price">Maximum Price (₹)</label>

        <input
          id="max-price"
          type="number"
          min="0"
          placeholder="Enter maximum price"
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
        />
      </div>

      <button
        type="button"
        className="clear-filter-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
}

export default PriceFilter;
