
import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  categoria: string;
  titulo: string;
  resumo: string;
  imagem: string;
  link: string;
};

export default function NewsCard({
  categoria,
  titulo,
  resumo,
  imagem,
  link,
}: NewsCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={link}
        className="relative block h-56 overflow-hidden bg-slate-100"
        aria-label={`Ler notícia: ${titulo}`}
      >
        <Image
          src={imagem}
          alt={titulo}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="p-5">
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
          {categoria}
        </span>

        <h2 className="mt-4 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
          {titulo}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
          {resumo}
        </p>

        <div className="mt-5 border-t border-slate-100 pt-4">
          <Link
            href={link}
            className="inline-flex items-center gap-2 font-bold text-blue-700 transition-all hover:gap-3 hover:text-blue-900"
          >
            Leia mais
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}