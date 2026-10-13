
import Link from "next/link";

const categorias = [
  { nome: "Brasil", caminho: "/brasil" },
  { nome: "Mundo", caminho: "/mundo" },
  { nome: "Tecnologia", caminho: "/tecnologia" },
  { nome: "Esportes", caminho: "/esportes" },
];

export default function Header() {
  return (
    <header className="border-b border-blue-900 bg-slate-950 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-5 md:flex-row">
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-tight transition hover:opacity-80"
        >
          <span className="text-blue-400">Impacto</span>{" "}
          <span className="text-white">News</span>
          <span className="ml-2 text-xs font-medium uppercase tracking-widest text-blue-300">
            Portal
          </span>
        </Link>

        <nav aria-label="Menu principal">
          <ul className="flex flex-wrap justify-center gap-2">
            {categorias.map((categoria) => (
              <li key={categoria.caminho}>
                <Link
                  href={categoria.caminho}
                  className="block rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-600 hover:text-white"
                >
                  {categoria.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
