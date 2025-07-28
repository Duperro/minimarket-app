import type { Product } from "../data/productos";

export interface ItemCarrito {
  producto: Product;
  cantidad: number;
  Total: number;
  Descuento: number;
}

interface FilaItemCarritoProps {
  item: ItemCarrito;
  removerProducto: (id: string) => void;
}

function FilaItemCarrito({ item, removerProducto }: FilaItemCarritoProps) {
  return (
    <div className="flex justify-between items-center py-2 border-b last:border-none">
      <div className="flex-1">
        <p className="font-medium text-gray-800">{item.producto.name}</p>
        <p className="text-sm text-gray-600">Cantidad: {item.cantidad}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-800">Subtotal: ${item.Total.toFixed(2)}</p>
        {item.Descuento > 0 && (
          <p className="text-sm text-green-600">
            - ${item.Descuento.toFixed(2)}
          </p>
        )}
      </div>
      <button
        onClick={() => removerProducto(item.producto.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Eliminar
      </button>
    </div>
  );
}

export default FilaItemCarrito;
