//rafce

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
            <button
              className="button is-danger is-small"
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
