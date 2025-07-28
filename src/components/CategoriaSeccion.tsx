import CardProducto from "./CardProducto";
import type { Product } from "../data/productos";

interface CategoriaSeccionProps {
  categoria: string;
  productos: Product[];
  añadirAlCarrito: (producto: Product, cantidad: number) => void;
}

function CategoriaSeccion({
  categoria,
  productos,
  añadirAlCarrito,
}: CategoriaSeccionProps) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 text-red-700 flex items-center gap-2 capitalize">
        {categoria}
      </h2>
      <div className="flex flex-wrap gap-4">
        {productos.map((prod) => (
          <CardProducto
            key={prod.id}
            producto={prod}
            añadirAlCarrito={añadirAlCarrito}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriaSeccion;
