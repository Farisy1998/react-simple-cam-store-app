import React, { Component } from "react";

class TableHeader extends Component {
  renderSortIcon(sortColumn) {
    return sortColumn.order === "asc" ? (
      <i className="fa fa-sort-asc" />
    ) : (
      <i className="fa fa-sort-desc" />
    );
  }

  render() {
    const { columns, sortColumn, onSort } = this.props;

    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.path || column.key}
              style={{ cursor: "pointer" }}
              onClick={() => onSort(column.path)}
            >
              {column.label}{" "}
              {column.path === sortColumn.path &&
                this.renderSortIcon(sortColumn)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
