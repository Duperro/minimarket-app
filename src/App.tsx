import { useState, useMemo } from "react";
import CategoriaSeccion from "./components/CategoriaSeccion";
import { PRODUCTS } from "./data/productos";
import CATEGORIAS from "./data/categorias";
import TotalCompra from "./components/TotalCompra";
import type { ItemCarrito } from "./components/FilaItemCarrito";
import type { Product } from "./data/productos";
import Head from "./components/Head";
import OrdenarProductos from "./components/OrdenarProductos";

function App() {
  const [carrito, setCarrito] = useState<ItemCarrito[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [ordenarPor, setOrdenarPor] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  function calculateCartItem(producto: Product, cantidad: number): ItemCarrito {
    const freeItems =
      producto.promotion === "3x2" ? Math.floor(cantidad / 3) : 0;
    const Descuento = freeItems * producto.price;
    const Total = cantidad * producto.price - Descuento;
    return { producto, cantidad, Total, Descuento };
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

  const productosFiltrados = useMemo(() => {
    let filtrados = PRODUCTS;

    // Filtrar por categoría
    if (selectedCategory) {
      filtrados = filtrados.filter((p) => p.category === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchTerm.trim() !== "") {
      filtrados = filtrados.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar
    switch (ordenarPor) {
      case "Promociones":
        filtrados = filtrados.filter((p) => p.promotion === "3x2");
        break;
      case "Nombre ascendente":
        filtrados = [...filtrados].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      case "Nombre descendente":
        filtrados = [...filtrados].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        break;
      case "Precio: menor a mayor":
        filtrados = [...filtrados].sort((a, b) => a.price - b.price);
        break;
      case "Precio: mayor a menor":
        filtrados = [...filtrados].sort((a, b) => b.price - a.price);
        break;
    }

    return filtrados;
  }, [selectedCategory, ordenarPor, searchTerm]);

  return (
    <div className="min-h-screen bg-neutral-50 p-6 font-sans text-gray-700">
      <Head
        total={totalCarrito}
        selected={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="flex flex-col lg:flex-row gap-6">
        <main className="flex-1 space-y-8">
          {selectedCategory && (
            <OrdenarProductos onOrdenar={setOrdenarPor} />
          )}

          {selectedCategory ? (
            <CategoriaSeccion
              categoria={selectedCategory}
              productos={productosFiltrados}
              añadirAlCarrito={handleAdd}
            />
          ) : (
            CATEGORIAS.map((categoria) => (
              <CategoriaSeccion
                key={categoria}
                categoria={categoria}
                productos={productosFiltrados.filter(
                  (p) => p.category === categoria
                )}
                añadirAlCarrito={handleAdd}
              />
            ))
          )}
        </main>

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