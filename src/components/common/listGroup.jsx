const ListGroup = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <ul className="list-group">
      {categories.map((category) => (
        <li
          key={category._id}
          style={{ cursor: "pointer" }}
          className={
            category._id === selectedCategory._id
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onCategorySelect(category)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
