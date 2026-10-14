

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { noticias } from "../../data/noticia";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default function NoticiaPage({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 md:py-12">
          <p className="text-slate-600">Carregando notícia...</p>
        </main>
      }
    >
      <NoticiaConteudo params={params} />
    </Suspense>
  );
}

async function NoticiaConteudo({ params }: PageProps) {
  const { id } = await params;
  const noticia = noticias.find((item) => item.id === id);

  if (!noticia) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 md:py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
      >
        <span aria-hidden="true">←</span>
        Voltar às notícias
      </Link>

      <article className="mt-8">
        <header className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">
            {noticia.categoria}
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl md:leading-tight">
            {noticia.titulo}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span aria-hidden="true">📅</span>
              Publicado em {noticia.data}
            </span>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <span>Impacto News</span>
          </div>
        </header>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:mt-10">
          <Image
            src={noticia.imagem}
            alt={noticia.titulo}
            fill
            unoptimized
            priority
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        <div className="mx-auto mt-8 max-w-3xl sm:mt-10">
          <p className="border-l-4 border-blue-600 pl-4 text-lg font-medium leading-8 text-slate-600 sm:text-xl sm:leading-9">
            {noticia.resumo}
          </p>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
            {noticia.conteudo
              .split("\n\n")
              .filter((paragrafo) => paragrafo.trim() !== "")
              .map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
              ))}
          </div>

          <div className="mt-12 border-t border-slate-200 pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-bold text-blue-700 transition hover:gap-3 hover:text-blue-900"
            >
              <span aria-hidden="true">←</span>
              Ler outras notícias
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
