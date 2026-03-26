import { Link, useLocation } from "react-router-dom";
import modulosData from "../data/modulos.json";

// Aplanamos todos los items de la sidebar
const allItems = modulosData.sidebar.flatMap((section) => section.items);

export default function Footer() {
  // Obtenemos la ruta actual
  const { pathname } = useLocation();
  // Buscamos el índice del item que coincide con la ruta actual
  const currentIndex = allItems.findIndex((item) => item.to === pathname);

  // Si el indice actual no es el primero, mostramos enlace anterior, sino no mostramos
  const prev = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  // Si el indice actual no es el ultimo, mostramos enlace siguiente, sino no mostramos
  const next =
    currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : null;

  return (
    <footer className="mt-20 pt-10 border-t border-[#f2f2f2] flex items-center justify-between">
      {prev ? (
        <Link
          className="group flex flex-col items-start text-left"
          to={prev.to}
        >
          <span className="text-xs text-[#757575] mb-1">Anterior</span>
          <div className="flex items-center gap-2 font-bold text-primary group-hover:-translate-x-1 transition-transform">
            <span className="material-symbols-outlined">arrow_back</span>
            {prev.label}
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link className="group flex flex-col items-end text-right" to={next.to}>
          <span className="text-xs text-[#757575] mb-1">Siguiente</span>
          <div className="flex items-center gap-2 font-bold text-primary group-hover:translate-x-1 transition-transform">
            {next.label}
            <span className="material-symbols-outlined">arrow_forward</span>
          </div>
        </Link>
      ) : (
        <div />
      )}
    </footer>
  );
}
