import Form from "./common/form";
import { getItem, saveItem } from "../services/items";
import { getCategories } from "../services/categories";
import Joi from "joi-browser";

class ItemForm extends Form {
  state = {
    data: {
      name: "",
      categoryId: "",
      description: "",
      price: "",
      stock: 0,
    },
    categories: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    categoryId: Joi.string().required().label("Category"),
    description: Joi.string().required().label("Description"),
    price: Joi.number().required().label("Price"),
    stock: Joi.number().min(0).max(100).required().label("Stock"),
  };

  componentDidMount() {
    const categories = getCategories();

    this.setState({ categories });

    const _id = this.props.match.params.id;

    if (_id === "new") return null;

    const item = getItem(_id);

    if (!item) this.props.history.replace("/not-found");
    else {
      this.setState({ data: this.makeViewModel(item) });
    }
  }

  makeViewModel(item) {
    return {
      _id: item._id,
      name: item.name,
      categoryId: item.category._id,
      description: item.description,
      price: item.price,
      stock: item.stock,
    };
  }

  doSubmit() {
    saveItem(this.state.data);
    this.props.history.push("/items");
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center">Item Form</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("name", "Name")}
              {this.renderSelect("categoryId", "Category", categories)}
              {this.renderInput("description", "Description")}
              {this.renderInput("price", "Price")}
              {this.renderInput("stock", "Stock", "number")}
              {this.renderButton("Save")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemForm;
