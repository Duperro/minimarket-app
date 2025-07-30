export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  promotion?: "3x2";
  image: string; // 🔹 NUEVO: cada producto ahora sabe qué imagen debe usar
}

export const PRODUCTS: Product[] = [
  // Cocina
  { id: "p1", name: "Taza Cerámica", category: "Cocina", price: 5.0, image: "taza.jpg" },
  { id: "p2", name: "Set de Cuchillos", category: "Cocina", price: 40.0, image: "cuchillos.jpg" },
  { id: "p3", name: "Tabla de Picar de Madera", category: "Cocina", price: 12.5, image: "tabla.jpg" },
  { id: "p4", name: "Juego de Vasos", category: "Cocina", price: 18.0, promotion: "3x2", image: "vasos.jpg" },
  { id: "p5", name: "Cafetera Eléctrica", category: "Cocina", price: 55.0, image: "cafetera.jpg" },

  // Hogar
  { id: "p6", name: "Juego de Sábanas (2 plazas)", category: "Hogar", price: 25.0, promotion: "3x2", image: "sabanas.jpg" },
  { id: "p7", name: "Almohada Memory Foam", category: "Hogar", price: 18.5, image: "almohada.jpg" },
  { id: "p8", name: "Lámpara de Mesa", category: "Hogar", price: 22.0, image: "lampara.jpg" },
  { id: "p9", name: "Cortinas Decorativas", category: "Hogar", price: 30.0, image: "cortinas.jpg" },
  { id: "p10", name: "Perchero de Pie", category: "Hogar", price: 20.0, image: "perchero.jpg" },

  // Jardín
  { id: "p11", name: "Maceta Plástica", category: "Jardín", price: 10.0, image: "maceta.jpg" },
  { id: "p12", name: "Regadera de Metal", category: "Jardín", price: 12.0, promotion: "3x2", image: "regadera.jpg" },
  { id: "p13", name: "Pala de Jardín", category: "Jardín", price: 9.5, image: "pala.jpg" },
  { id: "p14", name: "Juego de Herramientas", category: "Jardín", price: 25.0, image: "herramientas.jpg" },
  { id: "p15", name: "Césped Artificial", category: "Jardín", price: 35.0, image: "cesped.jpg" },

  // Tecnología
  { id: "p16", name: "Auriculares Bluetooth", category: "Tecnología", price: 60.0, image: "audifonos.jpg" },
  { id: "p17", name: "Smartwatch Deportivo", category: "Tecnología", price: 80.0, promotion: "3x2", image: "smartwatch.jpg" },
  { id: "p18", name: "Mouse Inalámbrico", category: "Tecnología", price: 15.0, image: "mouse.jpg" },
  { id: "p19", name: "Teclado Mecánico", category: "Tecnología", price: 45.0, image: "teclado.jpg" },
  { id: "p20", name: "Cargador Portátil", category: "Tecnología", price: 25.0, image: "powerbank.jpg" },
];

