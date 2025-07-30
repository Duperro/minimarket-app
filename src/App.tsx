import { useState, useMemo } from "react";
import CategoriaSeccion from "./components/CategoriaSeccion";
import { PRODUCTS } from "./data/productos";
import CATEGORIAS from "./data/categorias";
import TotalCompra from "./components/TotalCompra";
import type { ItemCarrito } from "./components/FilaItemCarrito";
import type { Product } from "./data/productos";

function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);

  function calculateCartItem(producto: Product, cantidad: number): ItemCarrito {
    const freeItems =
      producto.promotion === "3x2" ? Math.floor(cantidad / 3) : 0;
    const Descuento = freeItems * producto.price;
    const Total = cantidad * producto.price - Descuento;
    return {
      producto,
      cantidad,
      Total,
      Descuento,
    };
  }

  function handleAdd(producto: Product, qty: number) {
    setCarrito((prev) => {
      const exists = prev.find((item) => item.producto.id === producto.id);
      if (exists) {
        const updatedQty = exists.cantidad + qty;
        return prev.map((item) =>
          item.producto.id === producto.id
            ? calculateCartItem(producto, updatedQty)
            : item
        );
      }
      return [...prev, calculateCartItem(producto, qty)];
    });
  }

  function handleRemove(productId: string) {
    setCarrito((prev) => prev.filter((item) => item.producto.id !== productId));
  }

  const subtotal = useMemo(
    () => carrito.reduce((sum, i) => sum + i.producto.price * i.cantidad, 0),
    [carrito]
  );

  const totalDiscount = useMemo(
    () => carrito.reduce((sum, i) => sum + i.Descuento, 0),
    [carrito]
  );

  const totalCarrito = subtotal - totalDiscount;

  return (
    <div className="min-h-screen bg-neutral-50 p-6 font-sans text-gray-700">
    <header className="bg-white text-gray-800 py-4 px-6 drop-shadow-[0_4px_6px_rgba(59,130,246,0.3)] mb-6 flex items-center justify-between rounded-lg">
        <div className="flex items-center gap-5">
          <img
            src="../public/logo.png"
            alt="Logo"
            className="h-15 rounded-sm object-cover"/>
        </div>
        <div className="text-sm md:text-base font-medium">
          Total: <span className="font-bold">${totalCarrito.toFixed(2)}</span>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Contenido principal (categorías) */}
        <main className="flex-1 space-y-8">
          {CATEGORIAS.map((e) => (
            <CategoriaSeccion
              key={e}
              categoria={e}
              productos={PRODUCTS.filter((p) => p.category === e)}
              añadirAlCarrito={handleAdd}
            />
          ))}
        </main>

        {/* Panel lateral: carrito a la derecha */}
        <aside className="w-full lg:w-80 bg-blue-50 p-4 rounded-xl shadow-lg h-[90vh] overflow-y-auto sticky top-4">
          <TotalCompra
            items={carrito}
            subtotal={subtotal}
            descuento={totalDiscount}
            total={totalCarrito}
            alRemover={handleRemove}
          />
        </aside>
      </div>
    </div>
  );
}

export default App;
