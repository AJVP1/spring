import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f2f2f2] bg-white/95 backdrop-blur-lg mx-auto flex max-w-360 items-center px-6 py-4">
        <Link to="/" className="flex w-fit items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-coffee"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
            <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
            <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
            <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5" />
            <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
          </svg>
          <span className="text-xl font-extrabold tracking-tight text-[#141414]">
            Documentación Java
          </span>
        </Link>
    </header>
  );
};
