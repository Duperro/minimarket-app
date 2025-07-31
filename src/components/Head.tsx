import { useEffect } from "react";
import CATEGORIAS from "../data/categorias";

interface HeadProps {
  total: number;
  selected: string | null;
  onSelectCategory: (cat: string | null) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

function Head({
  total,
  selected,
  onSelectCategory,
  searchTerm,
  setSearchTerm,
}: HeadProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selected]);

  return (
    <header className="bg-white text-gray-800 py-4 px-6 shadow-md mb-6 rounded-lg">
      <div className="flex flex-col gap-4">
        {/* logo y total */}
        <div className="flex items-center justify-between">
          <img src="/logo.png" alt="Logo" className="h-14 object-cover" />
          <div
            className="text-sm md:text-base font-medium"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Total: <span className="font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* categorías + buscador */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
          {/* botones de categorías */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onSelectCategory(null)}
              className={`px-4 py-1 rounded-full text-sm font-semibold border transition shadow-sm ${
                selected === null
                  ? "bg-blue-900 text-white border-blue-900"
                  : "bg-white text-blue-900 border-blue-900"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Ver todos
            </button>

            {CATEGORIAS.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-1 rounded-full text-sm font-semibold border transition shadow-sm ${
                  selected === cat
                    ? "bg-blue-900 text-white border-blue-900"
                    : "bg-white text-blue-900 border-blue-900"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* seccion del buscador */}
          <div className="relative w-full md:w-100">
            <input
              type="text"
              placeholder="Buscar producto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-4 pr-10 py-2 border border-blue-900 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-900 pointer-events-none">
              🔍
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Head;
