import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [Products , setProducts] = useState([])
   useEffect( ()=>{
    fetch('http://localhost:9000/products').then( (res) => res.json()  ).then( (data)=>{
      setProducts(data) 
      // console.log(data);
    })
   } , [] )
  return (
    <>
      <h5>products page</h5>
      <Link className="btn btn-success m-10" to='/AddProduct'>add new product</Link>

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col-5">Title</th>
            <th scope="col">Price</th>
            <th scope="col-2">operation</th>
          </tr>
        </thead>
        <tbody>
        {Products.map( (prod)=> {

          return(
            <>
            <tr>
            <th scope="row">{prod.id}</th>
            <td>{prod.title}</td>
            <td>{prod.price}</td>
            <td>
            <button className="btn btn-danger btn-sm">delete</button>
            <button className="btn btn-info btn-sm">edite</button>
            <button className="btn btn-primary btn-sm">view</button>

            </td>
          </tr>

            </>
          )
        } )}
         
      
        </tbody>
      </table>
    </>
  );
}
export default Products;
