import { useParams, Link } from "react-router-dom";

// Mock simples – depois pode vir do backend ou API const mockProducts = [ { id: "1", title: "Fone Bluetooth Sem Fio", price: "R$ 199,90", rating: 4.7, reviews: 3124, image: "https://images.unsplash.com/photo-1585386959984-a4155228c8b1", description: "Som de alta qualidade, bateria de longa duração e conexão rápida. Ideal para trabalho, academia e lazer.", amazonLink: "https://www.amazon.com.br" // depois entra seu link de afiliado } ];

export default function ProductDetail() { const { id } = useParams(); const product = mockProducts.find(p => p.id === id);

if (!product) { return ( <div className="p-10 text-center"> <h2 className="text-2xl font-bold">Produto não encontrado</h2> <Link to="/produtos" className="text-orange-500 underline"> Voltar para produtos </Link> </div> ); }

return ( <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10"> {/* IMAGEM */} <div> <img
src={product.image}
alt={product.title}
className="rounded-2xl shadow-lg"
/> </div>

{/* CONTEÚDO */}
  <div>
    <h1 className="text-3xl md:text-4xl font-bold mb-4">
      {product.title}
    </h1>

    {/* RATING */}
    <div className="flex items-center gap-2 mb-4">
      <span className="text-yellow-500 font-semibold">⭐ {product.rating}</span>
      <span className="text-gray-500 text-sm">({product.reviews} avaliações)</span>
    </div>

    <p className="text-gray-600 mb-6">{product.description}</p>

    <div className="text-3xl font-bold mb-6 text-green-600">
      {product.price}
    </div>

    {/* CTA AMAZON */}
    <a
      href={product.amazonLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center px-8 py-4 rounded-2xl bg-orange-500 text-white font-semibold text-lg shadow hover:scale-105"
    >
      Comprar na Amazon
    </a>

    <p className="mt-4 text-xs text-gray-400">
      Produto vendido e entregue pela Amazon. Garantia e segurança na compra.
    </p>
  </div>
</div>

); }
