import type { ReactNode } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Footer from "../components/Footer";

type DocsLayoutProps = {
  toc?: ReactNode;
  children: ReactNode;
};

export const DocsLayout = ({ toc, children }: DocsLayoutProps) => {
  return (
    <>
      <Header />

      <div className="mx-auto flex max-w-360">
        <Sidebar />

        {/* Contenido principal */}
        <main className="flex-1 min-w-0">
          <div className="mx-auto max-w-3xl px-6 py-10">
            {children}
            <Footer />
          </div>
        </main>

        {/* Sidebar derecho */}
        {toc}
      </div>
    </>
  );
};
