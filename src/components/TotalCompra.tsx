import type { ItemCarrito } from "./FilaItemCarrito";
import FilaItemCarrito from "./FilaItemCarrito";

interface TotalCompraProps {
  items: ItemCarrito[];
  subtotal: number;
  descuento: number;
  total: number;
  alRemover: (id: string) => void;
}

function TotalCompra({
  items,
  subtotal,
  descuento,
  total,
  alRemover,
}: TotalCompraProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 text-sm space-y-4">
      <h2 className="text-xl font-semibold">Detalle de Cotización</h2>
      {items.length === 0 ? (
        <p className="text-gray-600">No hay productos agregados.</p>
      ) : (
        items.map((item) => (
          <FilaItemCarrito
            key={item.producto.id}
            item={item}
            removerProducto={alRemover}
          />
        ))
      )}
      <div className="border-t pt-4 space-y-1">
        <p>
          Subtotal: <span className="font-medium">${subtotal.toFixed(2)}</span>
        </p>
        <p>
          Descuentos:{" "}
          <span className="font-medium text-green-600">
            - ${descuento.toFixed(2)}
          </span>
        </p>
        <p>
          Total: <span className="font-bold text-lg">${total.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
}

export default TotalCompra;
