function Products() {
  return (
    <>
      <h5>products page</h5>

      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Product 1</td>
            <td>100</td>
          </tr>
      
        </tbody>
      </table>
    </>
  );
}
export default Products;
