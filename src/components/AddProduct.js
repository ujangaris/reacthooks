//rafce
import { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const saveProduct = (e) => {
    e.preventDefault();
    const product = { title, price };
    console.log(product);
  };

  return (
    <div>
      <form onSubmit={saveProduct}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Price</label>
          <div className="control">
            <input
              className="input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="Price"
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
