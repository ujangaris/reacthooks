import { useState } from "react";
import Header from "./comopents/Header";

function App() {
  const [products, setProdducts] = useState([
    { id: 1, title: "Product 1", price: 899 },
    { id: 2, title: "Product 2", price: 769 },
    { id: 3, title: "Product 3", price: 989 },
    { id: 4, title: "Product 4", price: 871 },
    { id: 5, title: "Product 5", price: 459 },
  ]);

  return (
    <div className="App">
      <Header />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
