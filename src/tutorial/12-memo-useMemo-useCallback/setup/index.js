import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const calculateMostExpensive = (data) => {
    return (
      data.reduce((total, item) => {
        const price = item.fields.price;
        if (price >= total) {
          total = price;
        }
        return total;
      }, 0) / 100
    );
  };

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );

  const addToChart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1>the most expensive item: ${mostExpensive}</h1>
      <h1 style={{ marginTop: "3rem" }}>cart: {cart}</h1>
      <BigList products={products} addToChart={addToChart} />
    </>
  );
};

const BigList = React.memo(({ products, addToChart }) => {
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToChart={addToChart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToChart }) => {
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button type="button" className="btn" onClick={addToChart}>
        add to cart
      </button>
    </article>
  );
};
export default Index;
