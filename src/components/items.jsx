import React, { Component } from "react";
import { getItems, deleteItem } from "./../services/items";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getCategories } from "../services/categories";
import ListGroup from "./common/listGroup";
import ItemsTable from "./itemsTable";
import _ from "lodash";
import SearchBox from "./common/searchBox";
import { Link } from "react-router-dom";

class Items extends Component {
  state = {
    items: [],
    categories: [],
    selectedCategory: {},
    sortColumn: { path: "itemName", order: "asc" },
    searchQuery: "",
    pageSize: 3,
    currentPage: 1,
  };

  componentDidMount() {
    const items = getItems();
    const transformedItems = items.map((item) => {
      const newItem = { ...item, like: false };
      return newItem;
    });

    const categories = [
      { _id: "", name: "All Categories" },
      ...getCategories(),
    ];

    this.setState({
      items: transformedItems,
      categories,
    });
  }

  handleDelete = (item) => {
    console.log('clicked, delete');
    const transformedItems = deleteItem(item);
    this.setState({ items: transformedItems });
  };

  handleLike = (item) => {
    if (item.like) item.like = false;
    else item.like = true;

    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = item;

    this.setState({ items });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = (selectedCategory) => {
    this.setState({ selectedCategory, searchQuery: "", currentPage: 1 });
  };

  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (path === sortColumn.path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.setState({ sortColumn });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedCategory: {}, currentPage: 1 });
  };

  getPagedItems = () => {
    const {
      items: allItems,
      selectedCategory,
      sortColumn,
      pageSize,
      currentPage,
      searchQuery,
    } = this.state;

    let filteredItems = allItems;

    if (searchQuery) {
      filteredItems = allItems.filter((item) =>
        item.itemName.toLowerCase().startsWith(searchQuery.trim().toLowerCase())
      );
    }

    if (selectedCategory._id) {
      filteredItems = allItems.filter(
        (item) => item.category._id === selectedCategory._id
      );
    }

    const itemsCount = filteredItems.length;

    const sortedItems = _.orderBy(
      filteredItems,
      [sortColumn.path],
      [sortColumn.order]
    );

    const paginatedItems = paginate(sortedItems, pageSize, currentPage);

    return { itemsCount, paginatedItems };
  };

  render() {
    const {
      categories,
      pageSize,
      currentPage,
      selectedCategory,
      sortColumn,
      searchQuery,
    } = this.state;

    const { itemsCount } = this.getPagedItems();
    const { paginatedItems } = this.getPagedItems();

    return (
      <div className="row mx-2">
        <div className="col col-3">
          <ListGroup
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={this.handleCategorySelect}
          />
        </div>
        <div className="col col-9">
          <Link to="items/new" className="btn btn-primary">
            New Item
          </Link>
          {itemsCount === 0 ? (
            <p className="my-2">There are no items in database.</p>
          ) : (
            <div>
              <p className="my-2">
                Showing {itemsCount} {itemsCount === 1 ? "item" : "items"} from
                database
              </p>
              <SearchBox onSearch={this.handleSearch} query={searchQuery} />
              <ItemsTable
                items={paginatedItems}
                sortColumn={sortColumn}
                onLike={this.handleLike}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
              />
            </div>
          )}
          <Pagination
            pageSize={pageSize}
            itemsCount={itemsCount}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Items;
