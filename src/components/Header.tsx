import { Link } from "react-router-dom";
import logo from "/logo.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#f2f2f2] bg-white/95 backdrop-blur-lg mx-auto flex max-w-360 items-center px-6 py-4">
      <Link to="/" className="flex w-fit items-center gap-3">
        <img src={logo} alt="Logo" width={24} height={24} />
        <span className="text-xl font-extrabold tracking-tight text-[#141414]">
          Documentación Spring Boot
        </span>
      </Link>
    </header>
  );
};
