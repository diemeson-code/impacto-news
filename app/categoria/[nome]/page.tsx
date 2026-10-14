

import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import NewsCard from "../../components/NewsCard";
import { noticias } from "../../data/noticia";

type PageProps = {
  params: Promise<{ nome: string }>;
};

export default function CategoriaPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-7xl px-4 py-10">
          <p className="text-slate-600">
            Carregando notícias da categoria...
          </p>
        </main>
      }
    >
      <CategoriaConteudo params={params} />
    </Suspense>
  );
}

async function CategoriaConteudo({ params }: PageProps) {
  const { nome } = await params;
  const nomeDecodificado = decodeURIComponent(nome);

  const categorias = [
    ...new Set(noticias.map((noticia) => noticia.categoria)),
  ];

  const categoria = categorias.find(
    (item) => item.toLowerCase() === nomeDecodificado.toLowerCase()
  );

  if (!categoria) {
    notFound();
  }

  const noticiasFiltradas = noticias.filter(
    (noticia) => noticia.categoria === categoria
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
      >
        ← Voltar para a página inicial
      </Link>

      <header className="mt-8 border-b border-slate-200 pb-6">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
          Impacto News
        </p>

        <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Notícias de {categoria}
        </h1>

        <p className="mt-3 text-slate-600">
          Confira as notícias e atualizações da categoria {categoria}.
        </p>
      </header>

      {noticiasFiltradas.length > 0 ? (
        <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {noticiasFiltradas.map((noticia) => (
            <NewsCard
              key={noticia.id}
              categoria={noticia.categoria}
              titulo={noticia.titulo}
              resumo={noticia.resumo}
              imagem={noticia.imagem}
              link={`/noticia/${noticia.id}`}
            />
          ))}
        </section>
      ) : (
        <p className="mt-8 rounded-xl bg-slate-100 p-6 text-slate-600">
          Ainda não há notícias cadastradas nesta categoria.
        </p>
      )}
    </main>
  );
}
