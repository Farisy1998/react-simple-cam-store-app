import React, { Component } from "react";
import { getItems } from "./../services/items";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getCategories } from "../services/categories";
import ListGroup from "./common/listGroup";
import ItemsTable from "./itemsTable";
import _ from "lodash";
import SearchBox from "./common/searchBox";

class Items extends Component {
  state = {
    items: [],
    categories: [],
    selectedCategory: {},
    sortColumn: { path: "itemName", order: "asc" },
    searchQuery: "",
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    const items = [...getItems()];
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
    const items = [...this.state.items];
    const filteredItems = items.filter((i) => i._id !== item._id);
    this.setState({ items: filteredItems });
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
    if (sortColumn.path === path) {
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

  render() {
    const {
      items: allItems,
      categories,
      pageSize,
      currentPage,
      selectedCategory,
      sortColumn,
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

    const paginatedItems = paginate(filteredItems, pageSize, currentPage);

    const sortedItems = _.orderBy(
      paginatedItems,
      sortColumn.path,
      sortColumn.order
    );

    const transformedItems = sortedItems;

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
                items={transformedItems}
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
