import { Link } from "react-router-dom";

export default function Home() { return ( <div className="px-4 py-10 max-w-7xl mx-auto"> {/* HERO */} <section className="grid md:grid-cols-2 gap-10 items-center"> <div> <span className="inline-block mb-3 px-3 py-1 text-sm rounded-full bg-black text-white"> Ofertas atualizadas da Amazon </span> <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4"> Encontre os <span className="text-orange-500">produtos mais vendidos</span> da Amazon </h1> <p className="text-gray-600 mb-6"> Selecionamos os melhores produtos, com ótimo custo-benefício, avaliações reais e entrega rápida pela Amazon. </p> <div className="flex gap-4"> <Link
to="/produtos"
className="px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold shadow hover:scale-105"
> Ver produtos </Link> <Link
to="/ofertas"
className="px-6 py-3 rounded-xl border border-gray-300 font-semibold hover:bg-gray-100"
> Ver ofertas </Link> </div> </div>

{/* IMAGEM */}
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
        alt="Compras online"
        className="rounded-2xl shadow-lg"
      />
    </div>
  </section>

  {/* BENEFÍCIOS */}
  <section className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[
      { title: "Avaliações reais", desc: "Produtos bem avaliados por quem comprou" },
      { title: "Entrega rápida", desc: "Logística oficial da Amazon" },
      { title: "Ofertas diárias", desc: "Preços atualizados constantemente" },
      { title: "Compra segura", desc: "Pagamento e garantia Amazon" }
    ].map((item, i) => (
      <div key={i} className="p-6 rounded-2xl shadow bg-white">
        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.desc}</p>
      </div>
    ))}
  </section>

  {/* CTA FINAL */}
  <section className="mt-20 text-center">
    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      Pronto para comprar com inteligência?
    </h2>
    <p className="text-gray-600 mb-6">
      Veja agora os produtos mais recomendados da Amazon.
    </p>
    <Link
      to="/produtos"
      className="inline-block px-8 py-4 rounded-2xl bg-black text-white font-semibold hover:scale-105"
    >
      Acessar lista de produtos
    </Link>
  </section>

  {/* AVISO DE AFILIADO */}
  <p className="mt-10 text-xs text-gray-400 text-center">
    Este site participa do Programa de Associados da Amazon. Ao comprar por nossos links, podemos receber uma comissão sem custo extra para você.
  </p>
</div>

); }
