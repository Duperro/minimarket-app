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
      <h2
        className="text-2xl font-extrabold text-blue-900 uppercase mb-4"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
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
