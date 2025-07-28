import type {Product} from "../data/products";
import CardProducto from "./CardProducto";

interface SeccionCategoriaProps {
  category: string;
  products: Product[];
  onAdd: (productId: string, qty: number)=> void;
}

function SeccionCategoria({category, product, onAdd} SeccionCategoriaProps) {
    return (
    <section>
      <h2 className="text-2xl font-semibold mb-2 text-red-700 flex items-center gap-2 capitalize">
        {category}
      </h2>
      <div className="flex flex-wrap gap-4">
        {products.map((prod) => (
          <CardProducto key={prod.id} product={prod} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
export default SeccionCategoria;


