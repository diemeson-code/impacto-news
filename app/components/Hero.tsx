import Image from "next/image";
import Link from "next/link";
import { noticias } from "../data/noticia";

export default function Hero() {
  const destaque =
    noticias.find((noticia) => noticia.categoria === "Tecnologia") ??
    noticias[0];

  if (!destaque) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl">
      <div className="grid grid-cols-1 items-stretch md:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center p-5 sm:p-7 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider">
              Notícia em destaque
            </span>

            <span className="text-sm font-medium text-blue-300">
              {destaque.categoria}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
            {destaque.titulo}
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            {destaque.resumo}
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Publicado em {destaque.data}
          </p>

          <div className="mt-6">
            <Link
              href={`/noticia/${destaque.id}`}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Ler notícia completa
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <Link
          href={`/noticia/${destaque.id}`}
          aria-label={`Ler notícia: ${destaque.titulo}`}
          className="group relative h-52 overflow-hidden sm:h-60 md:h-auto md:min-h-[320px]"
        >
          <Image
            src={destaque.imagem}
            alt={destaque.titulo}
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

          <span className="absolute bottom-4 right-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-slate-900 shadow-lg sm:text-sm">
            Ver destaque →
          </span>
        </Link>
      </div>
    </section>
  );
}