import { useState } from "react";
import axios from "axios";
function AddProduct() {
  const [prodID, setIDProd] = useState("");
  const [prodTitle, setprodTitle] = useState(0);

  const submitPrevent = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:9000/products", {     
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={submitPrevent}>
        <div className="form-group">
          <label htmlfor="exampleInputEmail1">ID product</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => {
              setIDProd(e.target.value);
            }}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlfor="exampleInputPassword1">title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => {
              setprodTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlfor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default AddProduct;
