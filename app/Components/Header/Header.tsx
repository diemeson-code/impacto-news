
import Link from "next/link";

const categorias = [
  { nome: "Brasil", caminho: "/brasil" },
  { nome: "Mundo", caminho: "/mundo" },
  { nome: "Tecnologia", caminho: "/tecnologia" },
  { nome: "Esportes", caminho: "/esportes" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-5 md:flex-row">
        <Link href="/" className="text-3xl font-extrabold text-blue-700">
          Impacto <span className="text-gray-900">News</span>
        </Link>

        <nav aria-label="Menu principal">
          <ul className="flex flex-wrap justify-center gap-5">
            {categorias.map((categoria) => (
              <li key={categoria.caminho}>
                <Link
                  href={categoria.caminho}
                  className="font-medium text-gray-600 transition hover:text-blue-700"
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
