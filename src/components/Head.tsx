interface HeadProps {
  total: number;
}

function Head({ total }: HeadProps) {
  return (
    <header className="bg-white text-gray-800 py-4 px-6 drop-shadow-[0_4px_6px_rgba(59,130,246,0.3)] mb-6 flex items-center justify-between rounded-lg">
      <div className="flex items-center gap-5">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-15 rounded-sm object-cover"
        />
        <h1 className="text-xl font-bold text-blue-900 hidden sm:block">
          Las Lomas Minimarket
        </h1>
      </div>
      <div className="text-sm md:text-base font-medium">
        Total: <span className="font-bold">${total.toFixed(2)}</span>
      </div>
    </header>
  );
}

export default Head;
