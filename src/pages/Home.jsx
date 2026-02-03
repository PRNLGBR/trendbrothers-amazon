import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header */}
      <Header />

      {/* Fundo escurecido e mensagem centralizada */}
      <main className="flex-grow flex items-center justify-center bg-gray-900">
        <div className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-md">
          <h1 className="text-4xl font-extrabold mb-4 text-red-600">
            🚧 Desculpe o transtorno
          </h1>
          <p className="text-lg text-gray-700">
            Estamos em desenvolvimento
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
