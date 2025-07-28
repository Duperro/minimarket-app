import { useState } from "react";
import type { Product } from "../data/productos";

interface ProductosCardProps {
  producto: Product;
  añadirAlCarrito: (producto: Product, cantidad: number) => void;
}

function CardProducto({ producto, añadirAlCarrito }: ProductosCardProps) {
  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 w-72">
        <img
          src="https://via.placeholder.com/286x180"
          alt={producto.name}
          className="rounded-md mb-3 w-full h-40 object-cover"
        />
        <h5 className="text-lg font-semibold text-gray-800">{producto.name}</h5>

        <p className="text-sm text-gray-600 mb-2">
          Precio - ${producto.price.toFixed(2)}
          {producto.promotion && (
            <span className="ml-2 inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
              Promoción: {producto.promotion}
            </span>
          )}
        </p>

        {/* Botones de cantidad */}
        <div className="flex items-center justify-center space-x-2 mb-4">
          <button
            onClick={() => setCantidad(Math.max(1, cantidad - 1))}
            className="px-2 py-1 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
          >
            –
          </button>
          <span className="text-gray-800 font-bold">{cantidad}</span>
          <button
            onClick={() => setCantidad(cantidad + 1)}
            className="px-2 py-1 bg-gray-200 text-gray-700 font-semibold rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>

        {/* Botón Agregar */}
        <button
          onClick={() => añadirAlCarrito(producto, cantidad)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
        >
          Agregar
        </button>
      </div>
    </>
  );
}

export default CardProducto;
