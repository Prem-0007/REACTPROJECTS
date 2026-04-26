import React, { useState, useEffect } from "react";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);

      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count}`
      );

      const result = await res.json();

      if (result?.products?.length) {
        setProducts((prev) => [...prev, ...result.products]);
      }

      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, [count]);

  return (
    <div className="container">
      <div className="product-container">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <button
        className="button-container"
        onClick={() => setCount((prev) => prev + 20)}
        disabled={loading}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
}
