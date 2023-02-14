import _ from "lodash";

const Pagination = ({ pageSize, currentPage, itemsCount, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);

  return itemsCount > pageSize ? (
    <ul className="pagination">
      {pages.map((page) => (
        <li
          key={page}
          className={page === currentPage ? "page-item active" : "page-item"}
        >
          <a
            className="page-link"
            style={{ cursor: "pointer" }}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}
    </ul>
  ) : null;
};

export default Pagination;
