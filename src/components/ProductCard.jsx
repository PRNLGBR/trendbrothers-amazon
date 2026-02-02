const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-3"
      />

      <h3 className="font-semibold text-sm mb-1">
        {product.title}
      </h3>

      <p className="text-green-600 font-bold mb-1">
        R$ {product.price.toFixed(2)}
      </p>

      <p className="text-xs text-gray-500 mb-3">
        ⭐ {product.rating} ({product.reviews} avaliações)
      </p>

      <a
        href={product.amazonLink}
        target="_blank"
        rel="noreferrer"
        className="block text-center bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
      >
        Ver na Amazon
      </a>
    </div>
  );
};

export default ProductCard;
