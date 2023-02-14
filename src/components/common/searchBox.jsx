const SearchBox = ({ query, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="form-control"
      value={query}
      onChange={(event) => onSearch(event.currentTarget.value)}
    />
  );
};

export default SearchBox;
