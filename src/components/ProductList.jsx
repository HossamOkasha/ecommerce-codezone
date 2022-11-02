import { products } from "../api/fakeData";
import Product from "./Product";

const ProductList = () => {
  return (
    <section className="products-section">
      <h2>Computing</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </section>
  );
};
export default ProductList;
