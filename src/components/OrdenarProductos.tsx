interface OrdenarProps {
  onOrdenar: (tipo: string) => void;
}

const opciones = [
  "Promociones",
  "Nombre ascendente",
  "Nombre descendente",
  "Precio: menor a mayor",
  "Precio: mayor a menor",
];

export default function OrdenarProductos({ onOrdenar }: OrdenarProps) {
  return (
    <div className="mb-4">
      <label className="text-sm font-semibold mr-2">Ordenar:</label>
      <select
        onChange={(e) => onOrdenar(e.target.value)}
        className="p-2 border rounded text-sm"
      >
        <option value="">Seleccionar...</option>
        {opciones.map((opcion) => (
          <option key={opcion} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
}
