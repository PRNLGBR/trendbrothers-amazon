import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/produtos?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">
              TrendBrothers
            </span>
          </Link>

          {/* Busca Desktop */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-md mx-8"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="nav-link" to="/">Início</Link>
            <Link className="nav-link" to="/produtos">Produtos</Link>
            <Link className="nav-link" to="/categorias">Categorias</Link>
            <Link className="nav-link" to="/ofertas">Ofertas</Link>
          </nav>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Busca Mobile */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border rounded px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
        </form>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/produtos"
              className="block py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link
              to="/categorias"
              className="block py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
            <Link
              to="/ofertas"
              className="block py-2 text-gray-700 hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Ofertas
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
