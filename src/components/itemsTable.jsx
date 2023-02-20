import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class ItemsTable extends Component {
  columns = [
    {
      path: "name",
      content: (item) => <Link to={`items/${item._id}`}>{item.name}</Link>,
      label: "Name",
    },
    { path: "category.name", label: "Category" },
    { path: "price", label: "Price" },
    { path: "stock", label: "Stock" },
    {
      key: "like",
      content: (item) => <Like item={item} onLike={this.props.onLike} />,
    },
    {
      key: "button",
      content: (item) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(item)}
        >
          Delete
        </button>
      ),
    },
  ];
  
  render() {
    const { items, sortColumn, onSort } = this.props;

    return (
      <Table
        data={items}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default ItemsTable;
