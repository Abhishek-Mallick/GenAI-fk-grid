import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Hero from "../components/Hero";
import Product from "../components/recommend"; // Import your customized Product component

const Home2 = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" ||
      item.category === "women's clothing" ||
      item.category === "jewelry"
    );
  });

  return (
    <div>
      <Hero />
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product key={product.id} />; // Render your customized Product component
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
