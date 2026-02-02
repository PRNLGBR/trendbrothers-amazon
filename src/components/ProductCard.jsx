const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="font-bold mt-2">{product.name}</h2>
      <p>R$ {product.price}</p>
      <p>⭐ {product.rating}</p>
    </div>
  );
};

export default ProductCard;
