import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../mockData";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Melhores Ofertas da Amazon Hoje
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Selecionamos os produtos mais bem avaliados, com ótimo custo-benefício
            e entrega rápida pela Amazon.
          </p>
        </div>
      </section>

      {/* PRODUTOS EM DESTAQUE */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Produtos em Destaque
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white border-t">
        <div className="container mx-auto px-4 py-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Quer ver mais ofertas?
          </h3>
          <p className="text-gray-600 mb-6">
            Atualizamos os produtos constantemente com base em avaliações e preço.
          </p>
          <Link
            to="/produto/1"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold"
          >
            Ver um produto recomendado
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
