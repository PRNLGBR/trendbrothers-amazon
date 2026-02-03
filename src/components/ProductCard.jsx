import { Link } from 'react-router-dom';
import { Star, ExternalLink } from 'lucide-react';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const price = Number(product.price);
  const originalPrice = product.originalPrice
    ? Number(product.originalPrice)
    : null;

  const discountPercent =
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : 0;

  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition flex flex-col">
      <Link to={`/produto/${product.id}`} className="relative">
        {product.badge && (
          <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            {product.badge}
          </span>
        )}

        {discountPercent > 0 && (
          <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
            -{discountPercent}%
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.target.src = '/placeholder.png';
          }}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </Link>

      <div className="p-4 flex-1">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-orange-500">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating || 0)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          {product.reviews && (
            <span className="text-sm text-gray-500">
              ({product.reviews})
            </span>
          )}
        </div>

        {originalPrice && (
          <p className="text-sm text-gray-400 line-through">
            R$ {originalPrice.toFixed(2)}
          </p>
        )}

        {price && (
          <p className="text-xl font-bold">
            R$ {price.toFixed(2)}
          </p>
        )}
      </div>

      <div className="p-4 pt-0">
        {product.amazonUrl ? (
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded flex items-center justify-center gap-2">
              Ver na Amazon
              <ExternalLink size={16} />
            </button>
          </a>
        ) : (
          <button
            disabled
            className="w-full bg-gray-300 text-gray-600 py-2 rounded cursor-not-allowed"
          >
            Link indisponível
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
