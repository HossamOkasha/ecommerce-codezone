const Product = ({ title, price, imgSrc }) => {
  const currency = "EGP";
  return (
    <div className="product-container">
      <a href="#" class="product-link-card">
        <img src={imgSrc} />
        <h3 className="product-title">{title}</h3>
        <div class="price">
          <span class="regular-price">
            <span class="currency">{currency}</span>
            {price}
          </span>
          {/* <span class="discount-price"></span> */}
        </div>
      </a>
    </div>
  );
};
export default Product;
