import React, { useState } from "react";

export default function Product(props) {
  const [productCount, setProductCount] = useState(0);
  function handleIncreaseCount() {
    setProductCount(productCount + 1);
  }
  function handleDecreaseCount() {
    setProductCount(productCount - 1);
  }

  return (
    <div className="product">
      <img width="50" src={props.details.image} alt="" />
      <div className="product-info">
        <h2>{props.details.name}</h2>
        <p>{props.details.description}</p>
      </div>
      <div className="product-buttons">
        <button
          className="product-sub"
          disabled={productCount === 0}
          onClick={handleDecreaseCount}
        >
          -
        </button>
        <h3 className="product-count">{productCount}</h3>
        <button className="product-add" onClick={handleIncreaseCount}>
          +
        </button>
      </div>
    </div>
  );
}
