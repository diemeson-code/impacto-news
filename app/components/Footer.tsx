import Link from "next/link";

const categorias = [
  { nome: "Brasil", caminho: "/categoria/brasil" },
  { nome: "Mundo", caminho: "/categoria/mundo" },
  { nome: "Tecnologia", caminho: "/categoria/tecnologia" },
  { nome: "Esportes", caminho: "/categoria/esportes" },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-slate-800 pb-8 md:grid-cols-2">
          <div>
            <Link
              href="/"
              className="text-2xl font-extrabold text-white transition hover:opacity-80"
            >
              <span className="text-blue-400">Impacto</span> News
            </Link>

            <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
              Informação, inovação e conhecimento em um só lugar. Acompanhe os
              assuntos que fazem a diferença.
            </p>
          </div>

          <div className="md:text-right">
            <h2 className="font-bold text-white">Navegue pelo portal</h2>

            <nav aria-label="Navegação do rodapé">
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
                <li>
                  <Link href="/" className="transition hover:text-blue-400">
                    Início
                  </Link>
                </li>

                {categorias.map((categoria) => (
                  <li key={categoria.caminho}>
                    <Link
                      href={categoria.caminho}
                      className="transition hover:text-blue-400"
                    >
                      {categoria.nome}
                    </Link>
                  </li>
                ))}

                <li>
                  <Link
                    href="/sobre"
                    className="transition hover:text-blue-400"
                  >
                    Sobre
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className="pt-6 text-center text-xs text-slate-500">
          © 2026 Impacto News. Projeto de portfólio.
        </p>
      </div>
    </footer>
  );
}
