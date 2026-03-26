// importaciones
import { useEffect, useState } from "react";

// typos
type Item = { id: string; title: string };
type Props = { items?: Item[] };

export const TableOfContents = ({ items = [] }: Props) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: 0.1 },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="hidden h-[calc(100vh-64px)] w-64 shrink-0 overflow-y-auto p-8 xl:sticky xl:top-16 xl:block">
      <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#757575]">
        En esta página
      </h5>
      <nav aria-label="En esta página">
        <ul className="space-y-3 text-sm">
          {items.map(({ id, title: label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`block transition-colors ${
                  activeId === id
                    ? "font-medium text-[#141414]"
                    : "text-[#757575] hover:text-[#141414]"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
