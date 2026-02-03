import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/mockData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div>
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p>Produto não encontrado.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-80 h-80 object-cover mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-xl mb-2">R$ {product.price.toFixed(2)}</p>
        <p className="text-yellow-500 mb-4">⭐ {product.rating}</p>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded">
          Comprar
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
