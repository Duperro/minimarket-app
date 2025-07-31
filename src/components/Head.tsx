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
    <header className="bg-white text-gray-800 py-4 px-6 drop-shadow-[0_4px_6px_rgba(59,130,246,0.3)] mb-6 rounded-lg">
      <div className="flex flex-col gap-4">
        {/* Logo + Total */}
        <div className="flex items-center justify-between">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-24 object-cover"
          />
          <div
            className="text-sm md:text-base font-medium"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Total: <span className="font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Botones de categorías */}
        <div className="flex flex-wrap gap-3 mt-2">
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-4 py-1 rounded-full text-sm font-semibold border transition ${
              selected === null
                ? "bg-blue-900 text-white"
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
              className={`px-4 py-1 rounded-full text-sm font-semibold border transition ${
                selected === cat
                  ? "bg-blue-900 text-white"
                  : "bg-white text-blue-900 border-blue-900"
              }`}
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="border rounded px-3 py-2 w-full max-w-xs mt-4"
      />
    </header>
  );
}

export default Head;