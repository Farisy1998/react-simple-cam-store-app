import { useParams } from "react-router-dom";

const ItemForm = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Item Form: {id}</h1>
          <button className="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
};

export default ItemForm;
