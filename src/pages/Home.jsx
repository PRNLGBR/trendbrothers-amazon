import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Mensagem de desenvolvimento */}
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl font-bold text-center">
          Desculpe o transtorno, estamos em desenvolvimento 🚧
        </h1>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
