import Header from "../components/Header";
import Footer from "../components/Footer";

const Deals = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Ofertas Especiais</h1>
        <p>Em breve você verá nossas melhores ofertas aqui!</p>
      </main>
      <Footer />
    </div>
  );
};

export default Deals;
