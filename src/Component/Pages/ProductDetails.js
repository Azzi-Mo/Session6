import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    let [product, setProduct] = useState();
    let { ProductsID } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/products/${ProductsID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data)
      );
  }, []);
  return (
    <>
      <section>
            {product && <h1>{product.title}</h1>}
      </section>
    </>
  );
}
export default ProductDetails;
